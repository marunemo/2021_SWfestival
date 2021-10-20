
$.getJSON('./resource/hakgwanMenu.json', menu => addItems('haksik', menu['hakgwan']))
$.getJSON('./resource/momsMenu.json', menu => addItems('moms', menu['Moms Kitchen']))
$.getJSON('./resource/loungeMenu.json', menu => addItems('lounge', menu['Handong Lounge']))
$.getJSON('./resource/graceMenu.json', menu => addItems('grace', menu['The Grace Table']))

function addItems(id, menuList) {
    if(menuList['dailyMeal']) {
        menuList['morning']['menu'].forEach((menu) => appendMenu(id, '아침', menu));
        menuList['lunch']['menu'].forEach((menu) => appendMenu(id, '점심', menu));
        menuList['dinner']['menu'].forEach((menu) => appendMenu(id, '저녁', menu));
    }
    else {
        menuList.forEach((menu, i) => {
            parseMenu(id, menu, i);
        });
    }
}

function appendMenu(id, title, menu) {
    $(`#${id}`).append(`<tr><td class="haksikTitle">${title}</td><td class="haksikList">${menu}</td></tr>`);
}