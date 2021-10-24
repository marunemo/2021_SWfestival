
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
    $(`#${id}`).append(`<tr><td class="haksikTitle">${restName}</td></tr>`);
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
    $(`#${id}`).append(`<tr><td class="haksikTitle">${restName}</td></tr>`);
    menuList['menu'].forEach(menu => appendMenu(id, menu));
  }
}

function appendMenu(id, menu) {
  let menuElement = `<td class="haksikList"><p class="haksikMenu">${menu}`;
  menuElement += `<span class="commentSpan">`
  menuElement += `<img class="ratingImg" src="https://img.icons8.com/ios-glyphs/30/fde047/star--v1.png"/>`
  menuElement += `${0.0} | `
  menuElement += `<img class="commentImg" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/4aa9ff/external-comment-chat-flatart-icons-outline-flatarticons.png"/>`
  menuElement += `</span>`
  menuElement += `</p></td>`;
  $(`#${id}`).append(`<tr>${menuElement}</tr>`);
}