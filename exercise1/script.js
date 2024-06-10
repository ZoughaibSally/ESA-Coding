document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("addToSpecificListButton")
    .addEventListener("click", function () {
      var itemName = document.getElementById("name").value.trim();

      var itemType;
      var fruitRadio = document.getElementById("fruitRadio");
      var legumesRadio = document.getElementById("legumesRadio");

      if (fruitRadio.checked) {
        itemType = "Fruits";
      } else if (legumesRadio.checked) {
        itemType = "Legumes";
      } else {
        alert("Please select a type (Fruits or Legumes)");
        return;
      }

      var newItem = document.createElement("li");
      newItem.className = "list-group-item";
      newItem.textContent = itemType + "! " + itemName;

      if (itemType === "Fruits") {
        newItem.classList.add("bg-info");
        document
          .getElementById("fruitsCard")
          .querySelector("ul")
          .appendChild(newItem);
      } else if (itemType === "Legumes") {
        newItem.classList.add("bg-warning");
        document
          .getElementById("legumesCard")
          .querySelector("ul")
          .appendChild(newItem);
      }

      document.getElementById("name").value = "";
      fruitRadio.checked = false;
      legumesRadio.checked = false;
    });

  document
    .getElementById("addToGeneralListButton")
    .addEventListener("click", function () {
      var itemName = document.getElementById("name").value.trim();

      var newItem = document.createElement("li");
      newItem.className = "list-group-item bg-primary";
      newItem.textContent = "Fruits & Legumes! " + itemName;

      document
        .getElementById("generalCard")
        .querySelector("ul")
        .appendChild(newItem);

      document.getElementById("name").value = "";
      fruitRadio.checked = false;
      legumesRadio.checked = false;
    });

  document.getElementById("search-btn").addEventListener("click", function () {
    var searchQuery = document
      .getElementById("searchForItem")
      .value.trim()
      .toLowerCase();

    var allListItems = document.querySelectorAll(".list-group-item");

    allListItems.forEach(function (item) {
      var itemName = item.textContent.toLowerCase();
      if (itemName.includes(searchQuery)) {
        item.classList.add("bg-danger");
        item.classList.add("text-light");
      } else {
        item.classList.remove("bg-danger");
        item.classList.remove("text-light");
      }
    });
  });

  document.getElementById("delete-btn").addEventListener("click", function () {
    var itemName = document
      .getElementById("searchForItem")
      .value.trim()
      .toLowerCase();

    var allListItems = document.querySelectorAll(".list-group-item");

    allListItems.forEach(function (item) {
      var listItemText = item.textContent.toLowerCase();
      if (listItemText.includes(itemName)) {
        item.remove();
      }
    });

    document.getElementById("searchForItem").value = "";
  });

  document
    .getElementById("generalCard")
    .addEventListener("click", function (event) {
      if (event.target.classList.contains("list-group-item")) {
        var clickedItemText = event.target.textContent.trim();
        event.target.remove();
        var isFruit = clickedItemText.includes("Fruits");
        var isLegume = clickedItemText.includes("Legumes");

        if (isFruit || isLegume) {
          var newItem = document.createElement("li");
          newItem.className = "list-group-item";
          newItem.textContent = clickedItemText;

          if (isFruit) {
            newItem.classList.add("bg-info");
          } else if (isLegume) {
            newItem.classList.add("bg-warning");
          }

          if (isFruit) {
            document
              .getElementById("fruitsCard")
              .querySelector("ul")
              .appendChild(newItem);
          } else if (isLegume) {
            document
              .getElementById("legumesCard")
              .querySelector("ul")
              .appendChild(newItem);
          }
        }
      }
    });
});
