    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    const  port = process.env.Port || 5000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extends: true}));

    app.get('/api/customers', (req, res) => {
        res.send([
            {
                'id' : 1,
                'image' : 'https://placeimg.com/64/64/1', /*랜덤으로 이미지를 보여주는 사이트 주소*/
                'name' : '홍길동',
                'birthday' : '961222',
                'gender' : '남자',
                'job' : '대학생'
            },
            {
                'id' : 2,
                'image' : 'https://placeimg.com/64/64/2', /*랜덤으로 이미지를 보여주는 사이트 주소*/
                'name' : '태연',
                'birthday' : '961222',
                'gender' : '여자',
                'job' : '대학생'
            },
            {
                'id' : 3,
                'image' : 'https://placeimg.com/64/64/3', /*랜덤으로 이미지를 보여주는 사이트 주소*/
                'name' : '이순신',
                'birthday' : '961222',
                'gender' : '여자',
                'job' : '대학생'
            }
        ]);
    });

    app.listen(port, () => console.log(`Listening on port ${port}`));