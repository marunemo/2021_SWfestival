
const haksikIndex = [
  'Korean Table',
  'Fry Fry',
  'Noodle Road',
  'Hao',
  'Grace Garden',
  'Mix Rice'
];

$.getJSON('./resource/hakgwanMenu.json', menu => {
  for (const index of haksikIndex)
    addItems('haksik', index, menu[index]);
})
$.getJSON('./resource/momsMenu.json', menu => addItems('moms', '맘스 키친', menu['Moms Kitchen']))
$.getJSON('./resource/loungeMenu.json', menu => addItems('lounge', '한동 라운지', menu['Handong Lounge']))
$.getJSON('./resource/graceMenu.json', menu => addItems('grace', '더 그레이스 테이블', menu['The Grace Table']))

function addItems(id, restName, menuList) {
  if (menuList['dailyMeal']) {
    $(`#${id}`).append(`<tr><td class="haksikHeader">`);
    $(`#${id}`).append(`<span class="haksikTitle">${restName}`);
    $(`#${id}`).append(`<img src="https://img.icons8.com/ios/64/fcd34d/sunrise--v2.png" />`);
    $(`#${id}`).append(`<img src="https://img.icons8.com/ios/64/b45309/sun--v1.png" />`);
    $(`#${id}`).append(`<img src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/22d3ee/external-moon-halloween-bearicons-glyph-bearicons.png" />`);
    $(`#${id}`).append(`</span> `);
    $(`#${id}`).append(`</td></tr>`);
    if (restName === 'Korean Table') {
      appendMenu(id, menuList['morning']['menu']);
      appendMenu(id, menuList['lunch']['menu']);
      appendMenu(id, menuList['dinner']['menu']);
    } else {
      menuList['morning']['menu'].forEach((menu) => appendMenu(id, menu));
      menuList['lunch']['menu'].forEach((menu) => appendMenu(id, menu));
      menuList['dinner']['menu'].forEach((menu) => appendMenu(id, menu));
    }
  }
  else {
    $(`#${id}`).append(`<tr><td class="haksikHeader"><span class="haksikTitle">${restName}</span></td></tr>`);
    menuList['menu'].forEach(menu => appendMenu(id, menu));
  }
}

function appendMenu(id, menu, menuRating = 0.0) {
  let menuElement = `<td class="haksikList">`
  menuElement += `<span class="haksikMenu">`
  menuElement += `  ${menu}`;
  menuElement += `  <span class="commentSpan">`
  menuElement += `    <img class="ratingImg" src="https://img.icons8.com/ios-glyphs/30/fde047/star--v1.png"/>`
  menuElement += `    ${menuRating.toFixed(1)} | `
  menuElement += `    <img class="commentImg" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/4aa9ff/external-comment-chat-flatart-icons-outline-flatarticons.png"/>`
  menuElement += `  </span>`
  menuElement += `</span>`
  menuElement += `</td>`;
  $(`#${id}`).append(`<tr>${menuElement}</tr>`);
}