// 9.7.EX.js
"use strict";

// @TODO: 포트 번호를 지정한다
// @TODO: express 모듈을 가져온다
// @TODO: homeController 모듈을 가져온다
// @TODO: express를 실행한다

const port = 3000,
    express = require('express'),
    homeController = require('./controllers/homeController'),
    app = express();
/**
 * Listing 9.5 (p. 149)
 * 요청 본문으로부터 포스팅된 데이터 캡처
 *
 * app.use([path], callback, [callback])
 */
app.use(
    express.urlencoded({
        extended: false
    })
); // @TODO: express.urlencoded()를 이용해 URL-encoded 데이터를 파싱하도록 요청
app.use(express.json()); // @TODO: express.json()을 이용해 JSON 데이터를 파싱하도록 요청
app.use(homeController.logRequestPaths); // @TODO: homeController에서 logRequestPaths를 가져와 사용한다 (로깅 미들웨어)

/**
 * Listing 9.7 (p. 153)
 * 컨트롤러 함수의 참조를 통한 콜백의 대체
 *
 * app.get(path, [callback])
 * app.post(path, [callback])
 */
app.get("/items/:item", homeController.sendReqParam); // @TODO: "/items/:vegetable"로의 GET 요청 처리 (p. 153)
app.get("/users/:userID", homeController.sendUserReqParam); // @TODO: "/users/:userID"로의 GET 요청 처리 (추가)
app.get("/coursess/:coursesID", homeController.sendCourseReqParam); // @TODO: "/courses/:courseId"로의 GET 요청 처리 (추가)

/**
 * 다른 라우트 수정
 */
app.get("/", homeController.getHome); // @TODO: homeController에서 getHome을 가져와 사용한다
app.get("/contact", homeController.getContact); // @TODO: homeController에서 getContact을 가져와 사용한다
app.post("/contact", homeController.postContact); // @TODO: homeController에서 postContact을 가져와 사용한다

app.listen(port, () => {
    console.log(`Express at : http://localhost${port}`);
}); // @TODO: 포트 번호를 지정한다. 서버가 실행되면 콘솔에 로그를 남긴다.
