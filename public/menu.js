const haksikIndex = [
    'Korean Table - 아침',
    'Korean Table - 점심',
    'Korean Table - 저녁',
    'Fry Fry',
    'Noodle Road',
    'Hao',
    'Grace Garden',
    'Mix Rice'
]
var haksik = [];
var moms = [];
var lounge = [];
var grace = [];

$.getJSON('./secureKey.json', (secureData) => {
    $.ajax(secureData.haksikMenu).done((result) => {
        haksik = result['haksik'];
        moms = result['moms'];
        addItems('haksik', haksik);
        addItems('moms', moms);
    });
});

$.getJSON('./resource/loungeMenu.json', menu => addItems('lounge', menu['lounge']))
$.getJSON('./resource/graceMenu.json', menu => addItems('grace', menu['graceTable']))

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

function parseMenu(id, menu, index) {
    const menuKor = menu['menu_kor'];
    if (!menuKor.includes('-운영없음-')) {
        const haksikList = menuKor.replace('-원산지: 메뉴게시판 참조-', '').trim();
        if (index < 3)
            appendMenu(id, haksikIndex[index], haksikList);
        else {
            const list = haksikList.split('\n');
            for (const item of list) {
                appendMenu(id, haksikIndex[index], item);
            }
        }
    }
}

function appendMenu(id, title, menu) {
    $(`#${id}`).append(`<tr><td class="haksikTitle">${title}</td><td class="haksikList">${menu}</td></tr>`);
}