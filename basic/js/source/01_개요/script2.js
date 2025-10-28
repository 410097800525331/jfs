
// 이벤트객체.이벤트함수(리스너)("이벤트종류", 함수);
window.addEventListener("DOMContentLoaded", function(){
    // 1. 버튼 찾기
    var btn4 = document.getElementById('btn4');

    // 2. 이벤트 속성
    // 이벤트객체.이벤트종류 = 함수;
    btn4.onclick = function(){
        alert('자바스크립트 세계다!!!');
    };
});