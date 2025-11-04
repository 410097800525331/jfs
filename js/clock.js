// 디지털 시계, clock.js

function digitalClock() {

    // 변수 선언
    const date = new Date();
    const clockBox = document.getElementById('clock');
    let day; // 요일을 담을 변수
    let clock; // 출력 변수

    // 날짜
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // 0~11
    let dd = date.getDate();
    // 시간
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    // 처리
    // if (date.getDay() === 0) {
    //     day = '일';
    // } else if (date.getDay() === 1) {
    //     day = '월';
    // } else if (date.getDay() === 2) {
    //     day = '화';
    // } else if (date.getDay() === 3) {
    //     day = '수';
    // } else if (date.getDay() === 4) {
    //     day = '목';
    // } else if (date.getDay() === 5) {
    //     day = '금';
    // } else if (date.getDay() === 6) {
    //     day = '토';
    // }

    // switch~case문으로 변경
    switch (date.getDay()) {
        case 0:
            day = '일';
            break;
        case 0:
            day = '월';
            break;
        case 0:
            day = '화';
            break;
        case 0:
            day = '수';
            break;
        case 0:
            day = '목';
            break;
        case 0:
            day = '금';
            break;
        default:
            day = '토';
    }

    // AM/PM: 3항 연산자 사용
    const ampm = hour >= 12 ? 'PM' : 'AM';
    // 12시간제로 바꾸기
    hour = hour % 12;
    // 0~11시까지는 나머지가 0~11
    // 12~23까지는 나머지가 0~11
    hour = hour ? hour : 12;

    // 두자리 맞추기: 0~9, 10부터는 2자리
    // if(hour < 10) {
    //     hour = '0' + hour;
    // } else {
    //     hour = hour;
    // }
    // if(minute < 10) {
    //     minute = '0' + minute;
    // } else {
    //     minute = minute;
    // }
    // if(second < 10) {
    //     second = '0' + second;
    // } else {
    //     second = second;
    // }

    // 함수명? twoDigits(카멜)
    // 매개변수(parameter)? timePara
    function twoDigits(timePara) {
        // if(timePara < 10) {
        //     timePara = '0' + timePara;
        // } else {
        //     timePara = timePara;
        // }

        // 삼항 연산자: (조건) ? 표현식1(참) : 표현식2(거짓);
        timePara = (timePara < 10) ? '0' + timePara : timePara;

        return timePara; // timePara를 호출 문에 돌려준다
    }
    // 함수 호출
    hour = twoDigits(hour);
    minute = twoDigits(minute);
    second = twoDigits(second);

    // 출력
    clock = yyyy + '년 ' + mm + '월 ' + dd + '일 ' + '(' + day + ') ' + ampm + hour + ':' + minute + ':' + second;
    // 템플릿 리터럴: 기호는 백틱(`)
    // 문자열과 표현식(변수, 연산, 함수호출) 구별: ${표현식}
    clock = `${yyyy}년  ${mm}월  ${dd}일(${day}) ${ampm} ${hour}:${minute}:${second}`;

    clockBox.innerHTML = clock;

}

// setInterval(함수, 시간);
// 자바스크립트는 시간을 밀리초 단위로 표현한다.
setInterval(digitalClock, 1000);