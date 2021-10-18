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

$.getJSON('./secureKey.json', (secureData) => {
    $.ajax(secureData.haksikMenu).done((result) => {
        haksik = result['haksik'];
        moms = result['moms'];
        addItems(haksik);
    });
});

function addItems(menuList) {
    menuList.forEach((menu, i) => {
        parseMenu(menu, i);
    });
}

function parseMenu(menu, index) {
    const menuKor = menu['menuKor'];
    if (!menuKor.includes('-운영없음-')) {
        const haksikList = menuKor.replace('-원산지: 메뉴게시판 참조-', '').trim();
        if (i < 3)
            appendMenu(haksikIndex[index], haksikList);
        else {
            const list = haksikList.split('\n');
            for (const item of list) {
                appendMenu(haksikIndex[index], item);
            }
        }
    }
}

function appendMenu(title, menu) {
    $(".menuTable").append(`<tr><td class="haksikTitle">${title}</td><td class="haksikList">${menu}</td></tr>`);
}