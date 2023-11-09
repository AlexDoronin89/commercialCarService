var modal1 = document.getElementById("my-modal1");
var modal2 = document.getElementById("my-modal2");

const setListener = (element, type, handler) => {
  if(!element){
    return;
  }
  element.addEventListener(type,handler);
  return()=>{
    element.removeEventListener(type,handler);
  }
};

window.addEventListener("DOMContentLoaded", (event) => {
  const openBtn1 = document.getElementById("btnApplication1");

  const handleClick1 = () => {
    modal1.style.display = "block";
  };

  setListener(openBtn1, "click", handleClick1);
});

window.addEventListener("DOMContentLoaded", (event) => {
  var openBtn2 = document.querySelectorAll("[id='btnApplication2']");
  const handleClick2 = () => {
    for (var i = 0; i < openBtn2.length; i++) modal2.style.display = "block";
  };

  for (var i = 0; i < openBtn2.length; i++) {
    setListener(openBtn2[i], "click", handleClick2);
  }
});

window.addEventListener("DOMContentLoaded", (event) => {
  const closeBtn1 = document.getElementById("modal-close");

  const handleClick1 = () => {
    modal1.style.display = "none";
  };

  setListener(closeBtn1, "click", handleClick1);
});

window.addEventListener("DOMContentLoaded", (event) => {
  const closeBtn2 = document.getElementById("modal-close");

  const handleClick2 = () => {
    modal2.style.display = "none";
  };

  setListener(closeBtn2, "click", handleClick2);
});

window.addEventListener("DOMContentLoaded", (event) => {
  const handleClick = function (event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  };
  window.onclick = handleClick;
});

window.addEventListener("DOMContentLoaded", (event) => {
  const applicationBtn = document.getElementById("sendApplication");
  const userNameInput = document.getElementById("userNameInput");
  const userPhoneNumInput = document.getElementById("userPhoneNumInput");
  const errorNameLabel = document.getElementById("userNameErrorModal1");
  const errorPhoneNumLabel = document.getElementById("userPhoneNumErrorModal1");

  setListener(applicationBtn,"click", () => {
    var userNameValue = userNameInput.value;
    var userPhoneNumValue = userPhoneNumInput.value;

    if (userNameValue === "" || userPhoneNumValue === "") {
      if (userNameValue === "") errorNameLabel.style.display = "block";
      else errorNameLabel.style.display = "none";
      if (userPhoneNumValue === "") errorPhoneNumLabel.style.display = "block";
      else errorPhoneNumLabel.style.display = "none";
    } else {
      userNameInput.value = "";
      userPhoneNumInput.value = "";
      errorNameLabel.style.display = "none";
      errorPhoneNumLabel.style.display = "none";
    }
  });
});
