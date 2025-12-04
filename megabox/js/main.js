// Movie Card Ui
datas.forEach(data => {
  const screenImgs = data.screenTypes.map(ele => `<img src="${ele}" alt="Screen Types">`).join('');

  const card = `<div class="box_office_card">
      <div class="inner">
        <!-- front -->
        <div class="front">
          <span class="rank">${data.rank}</span>
          <div class="poster">
            <img src="${data.poster}" alt="${data.title}">
          </div>
          <div class="screen_type">
            ${screenImgs}
          </div>
          <div class="grade">
            <img src="${data.grade}" alt="${data.age}">
          </div>
        </div>
        <!-- back -->
        <div class="back">
          <p>
            ${data.description}
          </p>
          <div class="score">관람평<span>${data.score}</span></div>
        </div>
      </div>
      <!-- btn -->
      <div class="btn">
        <button type="button" class="like"><i class="fa-regular fa-heart"></i>${data.like}</button>
        <a href="#" class="reservation_link">예매</a>
      </div>
    </div>`

  $('.box_office').append(card);

});

// footer btn
$('.btn_looking_theater').on('click', () => {
  $('.theater, .btn_looking_theater').addClass('active');
});
$('.closed').on('click', () => {
  $('.theater, .btn_looking_theater').removeClass('active');
});