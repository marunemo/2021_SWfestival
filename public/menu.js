
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
        menuList['morning']['menu'].forEach((menu) => appendMenu(id, restName + ' - 아침', menu));
        menuList['lunch']['menu'].forEach((menu) => appendMenu(id, restName + ' - 점심', menu));
        menuList['dinner']['menu'].forEach((menu) => appendMenu(id, restName + ' - 저녁', menu));
    }
    else {
        appendMenu(id, restName, menuList['menu'])
    }
}

function appendMenu(id, title, menu) {
    $(`#${id}`).append(`<tr><td class="haksikTitle">${title}</td><td class="haksikList">${menu}</td></tr>`);
}