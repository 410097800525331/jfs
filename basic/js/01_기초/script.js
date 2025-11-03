// 1. 함수 작성
function fn2() {
    // js 실행 문장;
    alert('자바스크립트');
}
// 2. 버튼 선택
var btn2 = document.getElementById('btn2');
// 3. 함수 호출(이벤트 작성)
btn2.onclick = function() {
    // 함수 호출
    fn2();
};
