function dropDownVisible(id) {
  if ($(`#${id}`).hasClass('invisible')) {
    clearDropDown();
    $(`#${id}`).removeClass('invisible');
  } else {
    clearDropDown();
  }
}

function clearDropDown() {
  $('.menuTable').addClass('invisible');
}