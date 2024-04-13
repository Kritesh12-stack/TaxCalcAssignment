let ageSelectorBtn = document.querySelector(".dropdown-select-btn");
let ageSelectInput = document.querySelector(".dropdown-select");
let ageOptions = document.querySelector(".dropdown-menu");
let ageOption1 = document.querySelector("#ageOption1");
let ageOption2 = document.querySelector("#ageOption2");
let ageOption3 = document.querySelector("#ageOption3");

ageSelectorBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let displaySetting = ageOptions.style.display;
  switch (displaySetting) {
    case "none":
      ageOptions.style.display = "block";
      ageSelectorBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>`;
      break;
    case "block":
      ageOptions.style.display = "none";
      ageSelectorBtn.innerHTML = `<svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>`;
      break;
    default:
      ageOptions.style.display = "block";
      ageSelectorBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>`;
      break;
  }
});

ageOption1.addEventListener("click", () => {
  ageSelectInput.value = ageOption1.textContent;
});
ageOption2.addEventListener("click", () => {
  ageSelectInput.value = ageOption2.textContent;
});
ageOption3.addEventListener("click", () => {
  ageSelectInput.value = ageOption3.textContent;
});
