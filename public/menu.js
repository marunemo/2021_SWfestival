const haksikIndex = ['Korean Table - 아침', 'Korean Table - 점심', 'Korean Table - 저녁', 'Fry Fry', 'Noodle Road', 'Hao', 'Grace Garden', 'Mix Rice']
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
        if (!menu['menu_kor'].includes('-운영없음-')) {
            const haksikList = menu['menu_kor'].replace('-원산지: 메뉴게시판 참조-', '').trim();
            if (i < 3)
                $(".menuTable").append(`<tr><td class="haksikTitle">${haksikIndex[i]}</td><td class="haksikList">${haksikList}</td></tr>`);
            else {
                const list = haksikList.split('\n');
                for (const item of list) {
                    $(".menuTable").append(`<tr><td class="haksikTitle">${haksikIndex[i]}</td><td class="haksikList">${item}</td></tr>`);
                }
            }
        }
    });
}