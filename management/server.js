const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers',(req,res)=>{
    res.send([
        {
          'id':1,
          'image':'https://placeimg.com/64/64/1',
          'name' : '홍길일',
          'birthday' : '961222',
          'gender':'남자',
          'job': '학생'
        },
        {
          'id':2,
          'image':'https://placeimg.com/64/64/2',
          'name' : '홍길이',
          'birthday' : '971222',
          'gender':'남자',
          'job': '작가'
        },
        {
          'id':3,
          'image':'https://placeimg.com/64/64/3',
          'name' : '홍길삼',
          'birthday' : '981222',
          'gender':'여자',
          'job': '프로그래머'
        }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`))