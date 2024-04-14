const submitBtn = document.querySelector(".submitBtn");
const ageSelectorBtn = document.querySelector(".dropdown-select-btn");
const ageSelectInput = document.querySelector(".dropdown-select");
const ageOptions = document.querySelector(".dropdown-menu");
const ageOption1 = document.querySelector("#ageOption1");
const ageOption2 = document.querySelector("#ageOption2");
const ageOption3 = document.querySelector("#ageOption3");

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let errorMsgs = {};
    const annualIncome = document.querySelector("#grossIncome");
    const grossIncomeError = document.querySelector(".grossIncomeError");
    const extraIncome = document.querySelector("#extraIncome");
    const extraIncomeError = document.querySelector(".extraIncomeError");
    const ageGroup = document.querySelector("#ageGroup");
    const ageGroupError = document.querySelector(".ageGroupError");
    const deductions = document.querySelector("#deductions");
    const deductionsError = document.querySelector(".deductionsError")
    if(annualIncome.value === 0 || annualIncome.value === ''){
        errorMsgs = {...errorMsgs,incomeError : "Annual Income Is Required"}
    }
    if (extraIncome.value === '' || extraIncome.value === 0){
        extraIncome.value = 0
    }
    if (ageGroup.value === ''){
      errorMsgs = {...errorMsgs,ageError : "Age Group is Required"}
    }
    if(deductions.value === '' || deductions.value === 0){
      deductions.value = 0
    }
    else if(deductions.value > annualIncome.value || deductions.value === annualIncome.value){
      errorMsgs = {...errorMsgs,deductionError : "Deductions Cannot be greater than or equal to Annual Income"}
    }
    if(Object.keys(errorMsgs).length > 0){
      if(errorMsgs.hasOwnProperty('incomeError') && errorMsgs.incomeError !== ''){
        grossIncomeError.style.display = 'block';
        grossIncomeError.textContent = errorMsgs['incomeError']
      }
      if(errorMsgs.hasOwnProperty('ageError') && errorMsgs.ageError !== ''){
        ageGroupError.style.display = 'block';
        ageGroupError.textContent = errorMsgs['ageError']
      }
      if(errorMsgs.hasOwnProperty('deductionError') && errorMsgs.deductionError !== ''){
        deductionsError.style.display = 'block';
        deductionsError.textContent = errorMsgs['deductionError']
      }
    }
    if(Object.keys(errorMsgs).length === 0 ){
      errorMsgs.incomeError = ''
      errorMsgs.ageError = ''
      errorMsgs.deductionError = ''
      grossIncomeError.style.display = "none";
      grossIncomeError.textContent = ''
      ageGroupError.style.display = "none";
      ageGroupError.textContent = ''
      deductionsError.style.display = "none";
      deductionsError.textContent = ''

      
    }
    

    

})



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
});
ageOption2.addEventListener("click", () => {
  ageSelectInput.value = ageOption2.textContent;
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
});
ageOption3.addEventListener("click", () => {
  ageSelectInput.value = ageOption3.textContent;
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
});


