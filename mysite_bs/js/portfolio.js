datas.forEach(data => {
  const desc = data.description.map(ele=>`<li>${ele}</li>`).join('');

  const card = `<div class="box_office_card row mx-1 col-lg col-md-6 motion position-relative">
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
          <div class="worktime">작업 시간<span>${data.worktime}</span></div>
        </div>
      </div>
      <!-- btn -->
      <div class="btn mt-2">
        <button type="button" class="worktype">${data.task}</button>
        <a href="${data.siteUrl}" target="_blank" class="btn btn-dark sitelink m-0 d-block text-center">사이트 바로가기</a>
      </div>
    </div>`

  $('.portfolio').append(card);

});