const setListener = (element, type, handler) => {
  if (!element) {
    return;
  }
  element.addEventListener(type, handler);
  return () => {
    element.removeEventListener(type, handler);
  };
};

window.addEventListener("DOMContentLoaded", (event) => {
  const filterListBtn = document.querySelector(".carMake__filterSelect");
  const filterList = document.querySelector(".filtersList");
  const partStateListBtn = document.querySelector(".partState__filterSelect");
  const partStateList = document.querySelector(".partStateFiltersList");
  let products = document.querySelectorAll(".product");
  const fiatFilter = document.querySelector(".fiatFilter");
  const peugeotFilter = document.querySelector(".peugeotFilter");
  const citroenFilter = document.querySelector(".citroenFilter");
  const ivecoFilter = document.querySelector(".ivecoFilter");
  const mercedesFilter = document.querySelector(".mercedesFilter");
  const fordFilter = document.querySelector(".fordFilter");
  const renaultFilter = document.querySelector(".renaultFilter");
  const volkswagenFilter = document.querySelector(".volkswagenFilter");
  const newPartFilter=document.querySelector("newPartFilter");
  const usedPartFilter=document.querySelector("usedPartFilter");

  const partStateCheckboxes = [newPartFilter, usedPartFilter];

  const checkboxes = [
    fiatFilter,
    peugeotFilter,
    citroenFilter,
    ivecoFilter,
    mercedesFilter,
    fordFilter,
    renaultFilter,
    volkswagenFilter,
  ];

  function updateProductVisibility() {
    const searchBarValue = document
      .getElementById("searchBar")
      .value.toLowerCase();

    products.forEach((product) => {
      const productCarMake =
        product.querySelector(".product__carMake").textContent;
      const productTitle = product
        .querySelector(".title")
        .innerText.toLowerCase();
      const productPartState =
        product.querySelector(".partState__info").textContent;

      const isCarMakeChecked = checkboxes.some((checkbox) => checkbox.checked);
      const isPartStateChecked = partStateCheckboxes.some(
        (checkbox) => checkbox.checked
      );

      const isCarMakeMatch = checkboxes.some((checkbox) => {
        const carMake = checkbox.getAttribute("data-car-make");
        return checkbox.checked && carMake === productCarMake;
      });

      const isPartStateMatch = partStateCheckboxes.some((checkbox) => {
        const partState = checkbox.getAttribute("data-part-state");
        return checkbox.checked && partState === productPartState;
      });

      if (isCarMakeChecked || isPartStateChecked || searchBarValue !== "") {
        if (
          (!isCarMakeChecked || isCarMakeMatch) &&
          (!isPartStateChecked || isPartStateMatch) &&
          (searchBarValue === "" || productTitle.includes(searchBarValue))
        ) {
          product.classList.remove("hide");
        } else {
          product.classList.add("hide");
        }
      } else {
        product.classList.remove("hide");
      }
    });
  }

  checkboxes.forEach((checkbox) => {
    setListener(checkbox, "change", updateProductVisibility);
  });

  partStateCheckboxes.forEach((checkbox) => {
    setListener(checkbox, "change", updateProductVisibility);
  });

  document.getElementById("searchBar").oninput = updateProductVisibility;

  var partStateFlag = 0;
  setListener(partStateListBtn, "click", (e) => {
    if (partStateFlag == 0) {
      partStateListBtn.classList.add("open");
      partStateList.style.display = "block";
      partStateFlag = 1;
    } else {
      partStateListBtn.classList.remove("open");
      partStateList.style.display = "none";
      partStateFlag = 0;
    }
  });

  var carMakeFlag = 0;
  setListener(filterListBtn, "click", (e) => {
    if (carMakeFlag == 0) {
      filterListBtn.classList.add("open");
      filterList.style.display = "block";
      carMakeFlag = 1;
    } else {
      filterListBtn.classList.remove("open");
      filterList.style.display = "none";
      carMakeFlag = 0;
    }
  });
});
