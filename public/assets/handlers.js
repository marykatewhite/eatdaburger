// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  $("#burgerform").on("submit", function(event) {
    console.log($("#newBurger").val());
    event.preventDefault();
    const newBurger = {
      burger_name: $("#newBurger")
        .val()
        .trim(),
      devoured: 0
    };
    $.ajax("/api/burgers", { type: "POST", data: newBurger }).then(function() {
      $("#newBurger").val("");
      location.reload();
    });
  });

  $(".changedevoured").on("click", function(event) {
    const id = $(this).data("id");
    $.ajax("/api/burgers/" + id, { type: "PUT" }).then(function() {
      location.reload();
    });
  });
}
);
