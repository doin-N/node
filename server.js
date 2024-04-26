const express = require('express');
// express 모듈 불러오기

const PORT = 4000;

const Users = [
    {
        id: 0,
        name: 'Jack'
    },
    {
        id: 1,
        name: 'Jennifer'
    }
]

const app = express() //새로운 express어플 생성

app.use(express.json());

app.use((req, res, next) => {
    const start = Date.now();
    console.log(`start: ${req.method} ${req.url}`);
    next();
    const diffTime = Date.now() - start;//미들웨어 리스폰스거치는 시간 확인하는법 
    console.log(`end: ${req.method} ${req.url} ${diffTime}ms`)
})

app.get('/Users', (req, res) => { //라우트 핸들러 뭔지 확인하기 이부분
    res.send(Users);
})

app.get('/', (req, res) => { 
    res.send('Hello, world!');
})

app.post('/users', (req, res) => {
    console.log('req.body.name:' + req.body.name);
    const newUser = {
        nsme: req.body.name,
        id: Users.length
    }
    Users.push(newUser);
    res.json(newUser)
    
})

app.get('/users/:userId', (req, res) => {
    const userId = Number(req.params.userId);
    const user = Users[userId];
    if(user){
        res.jsonp(user);
    }else{
        res.sendStatus(404);
    }
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})
