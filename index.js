const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log(" listening on 8080 , 8080으로 오픈");
});


app.get('/pet', function(req, res){
    res.send('펫 페이지입니다.');
});

app.get('/beauty', function(req, res){
    res.send('뷰티 페이지입니다.');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});