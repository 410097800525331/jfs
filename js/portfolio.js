datas.forEach(data => {
  const desc = data.description.map(ele=>`<li>${ele}</li>`).join('');

  const card = `<div class="box_office_card motion position-relative">
      <div class="inner">
        <!-- front -->
        <div class="front">
          <span class="rank">${data.rank}</span>
          <div class="poster">
            <img class="w-100 h-100 object-fit-cover" src="${data.poster}" alt="${data.title}">
          </div>
        </div>
        <!-- back -->
        <div class="back">
          <p>${desc}</p>
          <div class="score">작업 시간<span>${data.worktime}</span></div>
        </div>
      </div>
      <!-- btn -->
      <div class="btn">
        <button type="button" class="like">${data.task}</button>
        <a href="${data.siteUrl}" target="_blank" class="btn btn-dark reservation_link">사이트 바로가기</a>
      </div>
    </div>`

  $('.portfolio').append(card);

});