const haksikIndex = [
    'Korean Table',
    'Fry Fry',
    'Noodle Road',
    'Hao',
    'Grace Garden',
    'Mix Rice',
    'Moms Kitchen'
];

const dailyIndex = [
    'morning',
    'lunch',
    'dinner'
];

$.getJSON('./secureKey.json', (secureData) => {
    $.ajax(secureData.haksikMenu).done((result) => {
        let haksik = result['haksik'];
        let moms = result['moms'];
        let kotae = haksik.slice(0, 3);
        haksik = haksik.slice(3, haksik.length);
        console.log(parseMenu(haksikIndex[0], kotae, true));
        console.log(parseMenu(haksikIndex.slice(1, 6), haksik));
        console.log(parseMenu(haksikIndex[6], moms, true));
    });
});


function parseMenu(id, menuList, isDaily = false) {
    let menuJson = {};
    if (isDaily) {
        menuJson[id] = { dailyMeal: isDaily };
        for (const index in dailyIndex) {
            const menuKor = menuList[index]['menu_kor'];
            if (!menuKor.includes('-운영없음-')) {
                const menuStr = menuKor.replace('-원산지: 메뉴게시판 참조-', '').trim();
                const haksikList = menuStr.split('\r\n');
                menuJson[id][dailyIndex[index]] = { menu: haksikList };
            }
        }
    } else {
        for (const index in menuList) {
            menuJson[id[index]] = { dailyMeal: isDaily };
            const menuKor = menuList[index]['menu_kor'];
            if (menuKor.includes('-운영없음-'))
                menuJson[id[index]] = { menu: null };
            else {
                const menuStr = menuKor.replace('-원산지: 메뉴게시판 참조-', '').trim();
                const haksikList = menuStr.split('\r\n');
                menuJson[id[index]] = { menu: haksikList };
            }
        }
    }
    return menuJson;
}

function exportJson(isDaily = false) { }