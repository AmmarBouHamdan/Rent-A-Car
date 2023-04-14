window.addEventListener("load", function () {
  function removeLoader() {
    const loader = document.querySelector(".loader");
    const loaderImg = document.querySelector(".loader-img");
    loader.classList.add("loader-hidden");
    loader.removeChild(loaderImg);
  }

  setTimeout(removeLoader, 1500);
});
