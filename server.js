// import path from "path";

const express = require('express');
const path = require('path'); // 경로 설정을 위한 path 모듈 
const app = express();

// 미들웨어를 등록하는 메서드 use
app.use(express.static(path.join(__dirname, 'view')));  // 정적 파일 제공 , 경로(폴더) view 폴더 내 파일 서빙


// 루트 경로로 접속 시 main.html 응답
app.get('/', (req, res) => { // 
    res.sendFile(path.join(__dirname,'view', 'main.html'))
});
 

const PORT = 3000;
app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
});