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
  var scrollBtn = document.getElementById("scrollBtn");
  var targetElement = document.getElementById("vacancylist");

  setListener(scrollBtn, "click", function () {
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  const vacancyApplicationWindow =
    document.getElementById("vacancyApplication");
  var vacancyApplicationOpen = document.querySelectorAll(".vacancyList__btn");
  const vacancyApplicationCloseBtn =
    document.getElementById("applicationClose");

  const handleClickOpen = () => {
    vacancyApplicationWindow.style.display = "block";
  };

  const handleClickClose = () => {
    vacancyApplicationWindow.style.display = "none";
  };

  document.addEventListener("click", (e) => {
    if (e.target == vacancyApplicationWindow) {
      vacancyApplicationWindow.style.display = "none";
    }
  });
  for (var i = 0; i < vacancyApplicationOpen.length; i++) {
    setListener(vacancyApplicationOpen[i], "click", handleClickOpen);
  }
  setListener(vacancyApplicationCloseBtn, "click", handleClickClose);
});

window.addEventListener("DOMContentLoaded", (event) => {
  const resumeApplicationBtn = document.getElementById("resumeApplicationBtn");
  const userNameResumeInput = document.getElementById("userNameResumeInput");
  const userPhoneNumResumeInput = document.getElementById(
    "userPhoneNumResumeInput"
  );
  const userResumeInput = document.getElementById("userResumeInput");
  const userNameErrorResume = document.getElementById("userNameErrorResume");
  const userPhoneNumErrorResume = document.getElementById(
    "userPhoneNumErrorResume"
  );
  const userErrorResume = document.getElementById("userErrorResume");

  setListener(resumeApplicationBtn,"click", () => {
    var userNameValue = userNameResumeInput.value;
    var userPhoneNumValue = userPhoneNumResumeInput.value;
    var userResumeValue = userResumeInput.value;

    if (userNameValue === "" || userPhoneNumValue === "" || userResumeValue === "") {
      if (userNameValue === "") userNameErrorResume.style.display = "block";
      else userNameErrorResume.style.display = "none";
      if (userPhoneNumValue === "") userPhoneNumErrorResume.style.display = "block";
      else userPhoneNumErrorResume.style.display = "none";
      if (userResumeValue === "") userErrorResume.style.display = "block";
      else userErrorResume.style.display = "none";
    } else {
      userNameResumeInput.value = "";
      userPhoneNumResumeInput.value = "";
      userResumeInput.value = "";
      userNameErrorResume.style.display = "none";
      userPhoneNumErrorResume.style.display = "none";
      userErrorResume.style.display = "none";
    }
  });
});
