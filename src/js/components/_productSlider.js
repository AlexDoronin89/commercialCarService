const setListener = (element, type, handler) => {
  if (!element) {
    return;
  }
  element.addEventListener(type, handler);
  return () => {
    element.removeEventListener(type, handler);
  };
};

window.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const sliderContainer = document.querySelector(".slider-container");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const pageButtonsContainer = document.querySelector(".page-buttons");
  const slides = document.querySelectorAll(".product-slide");
  const slideWidth = 1850;
  const slidesPerPage = Math.floor(sliderContainer.offsetWidth / slideWidth);
  const totalPages = Math.ceil(slides.length / slidesPerPage);
  let currentPage = 0;

  function updateSlider() {
    slider.style.transform = `translateX(-${
      currentPage * slideWidth * slidesPerPage
    }px)`;
  }

  function updateButtons() {
    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === totalPages - 1;
  }

  function createPageButtons() {
    pageButtonsContainer.innerHTML = "";

    for (let i = 0; i < totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i + 1;
      setListener(pageButton, "click", function () {
        currentPage = i;
        updateSlider();
        updateButtons();
        updatePageButtons();
      });
      pageButtonsContainer.appendChild(pageButton);
    }

    updatePageButtons();
  }

  function updatePageButtons() {
    const pageButtons = pageButtonsContainer.querySelectorAll("button");
    pageButtons.forEach((button, index) => {
      button.classList.remove("active");
      if (index === currentPage) {
        button.classList.add("active");
      }
    });
  }

  setListener(prevButton, "click", function () {
    if (currentPage > 0) {
      currentPage--;
      updateSlider();
      updateButtons();
      updatePageButtons();
    }
  });

  setListener(nextButton, "click", function () {
    if (currentPage < totalPages - 1) {
      currentPage++;
      updateSlider();
      updateButtons();
      updatePageButtons();
    }
  });

  createPageButtons();
  updateButtons();
});
