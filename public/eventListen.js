function dropDownVisible(id) {
  clearDropDown();
  $(`#${id}`).removeClass('invisible');
}

function clearDropDown() {
  $('.menuTable').addClass('invisible');
}