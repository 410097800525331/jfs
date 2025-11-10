// 샘플 데이터 - 실제 파일 경로로 수정하세요.
const FILES = [
{ id: 's1', category:'sambang', name:'삼방_칼선.ai', size:'120KB', thumb:'삼방 칼선' , href:'/downloads/sambang_ai.ai' },
{ id: 'a1', category:'autorol', name:'자동롤_01.ai', size:'320KB', thumb:'자동롤 01', href:'/downloads/autorol_01.ai' },
{ id: 'a2', category:'autorol', name:'자동롤_02.ai', size:'290KB', thumb:'자동롤 02', href:'/downloads/autorol_02.ai' },
{ id: 'z1', category:'zipper', name:'지퍼스탠드_01.ai', size:'210KB', thumb:'지퍼스탠드 01', href:'/downloads/zipper_01.ai' },
{ id: 'z2', category:'zipper', name:'지퍼스탠드_02.ai', size:'205KB', thumb:'지퍼스탠드 02', href:'/downloads/zipper_02.ai' },
{ id: 'b1', category:'box', name:'단상자_01.ai', size:'430KB', thumb:'단상자 01', href:'/downloads/box_01.ai' },
{ id: 'b2', category:'box', name:'단상자_02.ai', size:'390KB', thumb:'단상자 02', href:'/downloads/box_02.ai' }
];


const file_list_el = document.getElementById('file_list');
const preview_box = document.getElementById('preview_box');
const meta_name = document.getElementById('meta_name');
const meta_size = document.getElementById('meta_size');
const download_link = document.getElementById('download_link');
const open_folder_btn = document.getElementById('open_folder_btn');


function renderList(filter='all', q=''){
file_list_el.innerHTML = '';
const qlower = q.trim().toLowerCase();
const items = FILES.filter(f => (filter==='all' || f.category===filter) && (qlower==='' || f.name.toLowerCase().includes(qlower) || f.thumb.toLowerCase().includes(qlower)));
if(items.length===0){
file_list_el.innerHTML = '<div style="padding:18px;background:#fff;border-radius:10px;color:#666">검색 결과가 없습니다.</div>';
return;
}
items.forEach(f => {
const card = document.createElement('div');
card.className = 'file_card';
card.innerHTML = `
<div class="file_thumb">${escapeHtml(f.thumb)}</div>
<div class="file_info">
<div class="file_name">${escapeHtml(f.name)}</div>
<div class="file_meta">카테고리: ${escapeHtml(capCategory(f.category))} · 용량: ${escapeHtml(f.size)}</div>
</div>
<div class="file_actions">
<a class="btn btn_primary" href="${f.href}" download aria-label="${escapeHtml(f.name)} 다운로드">다운로드</a>
<button class="btn btn_secondary" data-id="${f.id}">미리보기</button>
</div>
`;
file_list_el.appendChild(card);
});
}


function capCategory(c){
return ({sambang:'삼방 칼선', autorol:'자동롤', zipper:'지퍼스탠드', box:'단상자'})[c]||c;
}


function escapeHtml(str){
return String(str).replace(/[&<>"']/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[m] });
}


// 초기 렌더
renderList();


// 이벤트
document.getElementById('filter_select').addEventListener('change', function(){ renderList(this.value, document.getElementById('search_input').value); });
document.getElementById('reset_btn').addEventListener('click', function(){ document.getElementById('search_input').value=''; document.getElementById('filter_select').value='all'; renderList(); });
document.getElementById('search_input').addEventListener('input', function(){ renderList(document.getElementById('filter_select').value, this.value); });


// 위임 이벤트: 미리보기 버튼
file_list_el.addEventListener('click', function(e){
const btn = e.target.closest('button[data-id]');
if(!btn) return;
const id = btn.getAttribute('data-id');
const f = FILES.find(x=>x.id===id);
if(f) selectFile(f);
});


// 파일 선택
function selectFile(f){
preview_box.textContent = '';
// 간단한 텍스트 미리보기 시뮬레이션
const p = document.createElement('div');
p.style.textAlign='center';
p.innerHTML = `<div style="font-weight:600;margin-bottom:6px">${escapeHtml(f.name)}</div><div style="font-size:0.9rem;color:#777">벡터 AI 파일 (미리보기는 대체 텍스트)</div>`;
preview_box.appendChild(p);
meta_name.textContent = f.name;
meta_size.textContent = f.size;
download_link.href = f.href;
download_link.setAttribute('download', f.name);
}


open_folder_btn.addEventListener('click', function(){
alert('서버의 실제 폴더를 여는 기능은 브라우저에서 지원되지 않습니다. 파일 경로는 서버 측에서 제공해야 합니다.');
});


// 추후: 실서버에서는 /downloads 경로에 실제 .ai 파일을 배치하세요.