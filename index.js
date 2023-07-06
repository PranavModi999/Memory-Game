const tabItems = document.getElementsByClassName("tab-item");
const tabLinks = document.getElementById("tabs").firstElementChild.children;

//by default display the play tab
displayTab("tabs-1");

//create click event listner for each li element and call display tab on clicked items
for (let tab of tabLinks) {
  tab.addEventListener("click", (evt) => {
    const clickedTab = evt.target.href.split("#")[1];
    console.log(clickedTab, "clicked");
    displayTab(clickedTab);
  });
}

//hide other tab items except of clicked item
function displayTab(tab) {
  for (let item of tabItems) {
    if (item.id === tab) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}
