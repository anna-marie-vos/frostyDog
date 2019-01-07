function routeTo({ section }) {
  console.log(section);
  const closeSections = [];

  $(`.${section}`).fadeIn("slow");

  //get the hrefs of all the other buttons
  $("#mediaNavbar")
    .find("button")
    .each(function(i) {
      buttonTxt = $(this)
        .text()
        .toLowerCase();
      if (section !== buttonTxt) {
        closeSections.push(buttonTxt);
      }
    });

  closeSections.map(function(article) {
    $(`.${article}`).fadeOut(0);
  });
}
