const setListener = (element, type, handler) => {
  if(!element){
    return;
  }
  element.addEventListener(type,handler);
  return()=>{
    element.removeEventListener(type,handler);
  }
};

window.addEventListener("DOMContentLoaded", (event)=>{
  const applicationBtn1 = document.getElementById("applicationBtn1");
  const inputUserNameApplication1= document.getElementById("inputUserNameApplication1");
  const inputUserPhoneNumApplication1 = document.getElementById("inputUserPhoneNumApplication1");
  const userNameErrorApplication1 = document.getElementById("userNameErrorApplication1");
  const userPhoneNumErrorApplication1 = document.getElementById("userPhoneNumErrorApplication1");


  setListener(applicationBtn1,"click", () => {
    var userNameValue = inputUserNameApplication1.value;
    var userPhoneNumValue = inputUserPhoneNumApplication1.value;

    if (userNameValue === "" || userPhoneNumValue === "") {
      if (userNameValue === "") userNameErrorApplication1.style.display = "block";
      else userNameErrorApplication1.style.display = "none";
      if (userPhoneNumValue === "") userPhoneNumErrorApplication1.style.display = "block";
      else userPhoneNumErrorApplication1.style.display = "none";
    } else {
      inputUserNameApplication1.value = "";
      inputUserPhoneNumApplication1.value = "";
      userNameErrorApplication1.style.display = "none";
      userPhoneNumErrorApplication1.style.display = "none";
    }
  });
});

window.addEventListener("DOMContentLoaded", (event)=>{
  const applicationBtn2 = document.getElementById("applicationBtn2");
  const inputUserNameApplication2= document.getElementById("inputUserNameApplication2");
  const inputUserPhoneNumApplication2 = document.getElementById("inputUserPhoneNumApplication2");
  const userNameErrorApplication2 = document.getElementById("userNameErrorApplication2");
  const userPhoneNumErrorApplication2 = document.getElementById("userPhoneNumErrorApplication2");


  setListener(applicationBtn2,"click", () => {
    var userNameValue = inputUserNameApplication2.value;
    var userPhoneNumValue = inputUserPhoneNumApplication2.value;

    if (userNameValue === "" || userPhoneNumValue === "") {
      if (userNameValue === "") userNameErrorApplication2.style.display = "block";
      else userNameErrorApplication2.style.display = "none";
      if (userPhoneNumValue === "") userPhoneNumErrorApplication2.style.display = "block";
      else userPhoneNumErrorApplication2.style.display = "none";
    } else {
      inputUserNameApplication2.value = "";
      inputUserPhoneNumApplication2.value = "";
      userNameErrorApplication2.style.display = "none";
      userPhoneNumErrorApplication2.style.display = "none";
    }
  });
});
