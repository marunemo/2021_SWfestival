var haksik = [];
var moms = [];

$.ajax().done((result) => {
    haksik = result['haksik'];
    moms = result['moms'];
    addItems(haksik);
});

function addItems(menuList) {
    for (const menu of menuList)
        $(".menuTable").append(`<tr><td>${menu['menu_kor']}</td></tr>`);
}