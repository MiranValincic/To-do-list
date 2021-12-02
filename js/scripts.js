function newItem() {
  let list = $("#list");
  let li = $("<li></li>");
  let input = $("#input");
  let inputValue = $("#input").val();

  li.append(inputValue);

  if (inputValue === "") {
    input.addClass("error");
    setTimeout(function () {
      input.removeClass("error");
    }, 300);
  } else {
    $(list).append(li);
    $(input).val("");
  }

  function cross() {
    li.toggleClass("strike");
  }

  li.on("click", cross);

  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  function deleteListItem() {
    li.addClass("delete");
  }
  crossOutButton.on("click", deleteListItem);

  $("#list").sortable();
}
