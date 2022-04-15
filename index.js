import express from'express';
const app = express();
import cors from'cors';
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
import dayjs from 'dayjs';
dayjs.locale('ko');
app.use(cors());

import main from './rotues/main.js';
import novel from './rotues/novel.js';
import round from './rotues/round.js';
import free from './rotues/free.js';
import plus from './rotues/plus.js';
import login from './rotues/login.js';
import signup from './rotues/signup.js';
import search from './rotues/search.js';
import top100 from './rotues/top100.js';
import mybook from './rotues/mybook.js';
import header from './rotues/header.js';
import plus_agree from './rotues/plus_agree.js';
import users_novel from './rotues/users_novel.js';
import certification from './rotues/certifications.js';

app.use('/main', main);
app.use('/round', round);
app.use('/login', login);
app.use('/signup', signup);
app.use('/search', search);
app.use('/top100', top100);
app.use('/mybook', mybook);
app.use('/novel', novel);
app.use('/header', header);
app.use('/plus_agree', plus_agree);
app.use('/users_novel', users_novel);
app.use('/plus', plus);
app.use('/free', free);
app.use('/certification', certification);
app.use('/search', search);
app.get('/test', function(req, res) {
    const today = dayjs(dayjs().format()).add(-5, "minutes")
    res.send(req);
})

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});
