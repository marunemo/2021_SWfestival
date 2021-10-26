
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
    let dailyHeader = restName;
    dailyHeader += `<span class="dailyButtonGroup">`;
    if (menuList['morning']['menu'].length)
      dailyHeader += `<img class="dailyButton" src="https://img.icons8.com/windows/64/e879f9/sunrise--v2.png" onclick="dailyFilter('morning')" />`;
    if (menuList['lunch']['menu'].length)
      dailyHeader += `<img class="dailyButton" src="https://img.icons8.com/ios/64/b45309/sun--v1.png" onclick="dailyFilter('lunch')" />`;
    if (menuList['dinner']['menu'].length)
      dailyHeader += `<img class="dailyButton" src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/22d3ee/external-moon-halloween-bearicons-glyph-bearicons.png" onclick="dailyFilter('dinner')" />`;
    dailyHeader += `</span>`;
    $(`#${id}`).append(`<tr><td class="haksikTitle">${dailyHeader}</td></tr>`);
    if (restName === 'Korean Table') {
      appendMenu(id, menuList['morning']['menu'], 0.0, 'morning');
      appendMenu(id, menuList['lunch']['menu'], 0.0, 'lunch');
      appendMenu(id, menuList['dinner']['menu'], 0.0, 'dinner');
    } else {
      menuList['morning']['menu'].forEach((menu) => appendMenu(id, menu, 0.0, 'morning'));
      menuList['lunch']['menu'].forEach((menu) => appendMenu(id, menu, 0.0, 'lunch'));
      menuList['dinner']['menu'].forEach((menu) => appendMenu(id, menu, 0.0, 'dinner'));
    }
  }
  else {
    $(`#${id}`).append(`<tr><td class="haksikTitle">${restName}</td></tr>`);
    menuList['menu'].forEach(menu => appendMenu(id, menu));
  }
}

function appendMenu(id, menu, menuRating = 0.0, dailyClass = "") {
  let menuElement;
  if (dailyClass)
    menuElement += `<td class="haksikList dailyMenu ${dailyClass} invisible"`
  else
    menuElement += `<td class="haksikList">`
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

function dailyFilter(classId) {
  if ($(`.${classId}`).hasClass('invisible')) {
    $('.dailyMenu').addClass('invisible');
    $(`.${classId}`).removeClass('invisible');
  } else {
    $('.dailyMenu').addClass('invisible');
  }
}