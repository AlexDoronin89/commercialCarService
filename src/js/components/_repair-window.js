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
  const enginePriceListWindow = document.getElementById("enginePriceList");
  const enginePriceListBtn = document.getElementById("openEnginePriceList");
  const enginePriceListCloseBtn = document.getElementById(
    "enginePriceListClose"
  );

  const handleClickOpen = () => {
    enginePriceListWindow.style.display = "block";
  };

  const handleClickClose = () => {
    enginePriceListWindow.style.display = "none";
  };

  document.addEventListener("click", (e) => {
    if (e.target == enginePriceListWindow) {
      enginePriceListWindow.style.display = "none";
    }
  });

  setListener(enginePriceListBtn,"click", handleClickOpen);
  setListener(enginePriceListCloseBtn,"click", handleClickClose);
});

window.addEventListener("DOMContentLoaded", (event) => {
  const suspensionPriceListWindow = document.getElementById(
    "suspensionPriceList"
  );
  const suspensionPriceListBtn = document.getElementById(
    "openSuspensionPriceList"
  );
  const suspensionPriceListCloseBtn = document.getElementById(
    "suspensionPriceListClose"
  );

  const handleClickOpen = () => {
    suspensionPriceListWindow.style.display = "block";
  };

  const handleClickClose = () => {
    suspensionPriceListWindow.style.display = "none";
  };

  document.addEventListener("click", (e) => {
    if (e.target == suspensionPriceListWindow) {
      suspensionPriceListWindow.style.display = "none";
    }
  });

  setListener(suspensionPriceListBtn,"click", handleClickOpen);
  setListener(suspensionPriceListCloseBtn,"click", handleClickClose);
});

window.addEventListener("DOMContentLoaded", (event) => {
  const transmissionPriceListWindow = document.getElementById(
    "transmissionPriceList"
  );
  const transmissionPriceListBtn = document.getElementById(
    "openTransmissionPriceList"
  );
  const transmissionPriceListCloseBtn = document.getElementById(
    "transmissionPriceListClose"
  );

  const handleClickOpen = () => {
    transmissionPriceListWindow.style.display = "block";
  };

  const handleClickClose = () => {
    transmissionPriceListWindow.style.display = "none";
  };

  document.addEventListener("click", (e) => {
    if (e.target == transmissionPriceListWindow) {
      transmissionPriceListWindow.style.display = "none";
    }
  });

  setListener(transmissionPriceListBtn,"click", handleClickOpen);
  setListener(transmissionPriceListCloseBtn,"click", handleClickClose);
});

window.addEventListener("DOMContentLoaded", (event) => {
  const electricianPriceListWindow = document.getElementById(
    "electricianPriceList"
  );
  const electricianPriceListBtn = document.getElementById(
    "openElectricianPriceList"
  );
  const electricianPriceListCloseBtn = document.getElementById(
    "electricianPriceListClose"
  );

  const handleClickOpen = () => {
    electricianPriceListWindow.style.display = "block";
  };

  const handleClickClose = () => {
    electricianPriceListWindow.style.display = "none";
  };

  document.addEventListener("click", (e) => {
    if (e.target == electricianPriceListWindow) {
      electricianPriceListWindow.style.display = "none";
    }
  });

  setListener(electricianPriceListBtn,"click", handleClickOpen);
  setListener(electricianPriceListCloseBtn,"click", handleClickClose);
});

window.addEventListener("DOMContentLoaded", (event) => {
  const steeringPriceListWindow = document.getElementById("steeringPriceList");
  const steeringPriceListBtn = document.getElementById("openSteeringPriceList");
  const steeringPriceListCloseBtn = document.getElementById(
    "steeringPriceListClose"
  );

  const handleClickOpen = () => {
    steeringPriceListWindow.style.display = "block";
  };

  const handleClickClose = () => {
    steeringPriceListWindow.style.display = "none";
  };

  document.addEventListener("click", (e) => {
    if (e.target == steeringPriceListWindow) {
      steeringPriceListWindow.style.display = "none";
    }
  });

  setListener(steeringPriceListBtn,"click", handleClickOpen);
  setListener(steeringPriceListCloseBtn,"click", handleClickClose);
});

window.addEventListener("DOMContentLoaded", (event) => {
  const toPriceListWindow = document.getElementById("toPriceList");
  const toPriceListBtn = document.getElementById("openToPriceList");
  const toPriceListCloseBtn = document.getElementById("toPriceListClose");

  const handleClickOpen = () => {
    toPriceListWindow.style.display = "block";
  };

  const handleClickClose = () => {
    toPriceListWindow.style.display = "none";
  };

  document.addEventListener("click", (e) => {
    if (e.target == toPriceListWindow) {
      toPriceListWindow.style.display = "none";
    }
  });

  setListener(toPriceListBtn,"click", handleClickOpen);
  setListener(toPriceListCloseBtn,"click", handleClickClose);
});

window.addEventListener("DOMContentLoaded", (event) => {
  const safetyPriceListWindow = document.getElementById("safetyPriceList");
  const safetyPriceListBtn = document.getElementById("openSafetyPriceList");
  const safetyPriceListCloseBtn = document.getElementById(
    "safetyPriceListClose"
  );

  const handleClickOpen = () => {
    safetyPriceListWindow.style.display = "block";
  };

  const handleClickClose = () => {
    safetyPriceListWindow.style.display = "none";
  };

  document.addEventListener("click", (e) => {
    if (e.target == safetyPriceListWindow) {
      safetyPriceListWindow.style.display = "none";
    }
  });

  setListener(safetyPriceListBtn,"click", handleClickOpen);
  setListener(safetyPriceListCloseBtn,"click", handleClickClose);
});

window.addEventListener("DOMContentLoaded", (event) => {
  const brakeSystemPriceListWindow = document.getElementById(
    "brakeSystemPriceList"
  );
  const brakeSystemPriceListBtn = document.getElementById(
    "openBrakeSystemPriceList"
  );
  const brakeSystemPriceListCloseBtn = document.getElementById(
    "brakeSystemPriceListClose"
  );

  const handleClickOpen = () => {
    brakeSystemPriceListWindow.style.display = "block";
  };

  const handleClickClose = () => {
    brakeSystemPriceListWindow.style.display = "none";
  };

  document.addEventListener("click", (e) => {
    if (e.target == brakeSystemPriceListWindow) {
      brakeSystemPriceListWindow.style.display = "none";
    }
  });

  setListener(brakeSystemPriceListBtn,"click", handleClickOpen);
  setListener(brakeSystemPriceListCloseBtn,"click", handleClickClose);
});

window.addEventListener("DOMContentLoaded", (event) => {
  const ventilationPriceListWindow = document.getElementById(
    "ventilationPriceList"
  );
  const ventilationPriceListBtn = document.getElementById(
    "openVentilationPriceList"
  );
  const ventilationPriceListCloseBtn = document.getElementById(
    "ventilationPriceListClose"
  );

  const handleClickOpen = () => {
    ventilationPriceListWindow.style.display = "block";
  };

  const handleClickClose = () => {
    ventilationPriceListWindow.style.display = "none";
  };

  document.addEventListener("click", (e) => {
    if (e.target == ventilationPriceListWindow) {
      ventilationPriceListWindow.style.display = "none";
    }
  });

  setListener(ventilationPriceListBtn,"click", handleClickOpen);
  setListener(ventilationPriceListCloseBtn,"click", handleClickClose);
});

window.addEventListener("DOMContentLoaded", (event) => {
  const windshieldReplacementPriceListWindow = document.getElementById(
    "windshieldReplacementPriceList"
  );
  const windshieldReplacementPriceListBtn = document.getElementById(
    "openWindshieldReplacementPriceList"
  );
  const windshieldReplacementPriceListCloseBtn = document.getElementById(
    "windshieldReplacementPriceListClose"
  );

  const handleClickOpen = () => {
    windshieldReplacementPriceListWindow.style.display = "block";
  };

  const handleClickClose = () => {
    windshieldReplacementPriceListWindow.style.display = "none";
  };

  document.addEventListener("click", (e) => {
    if (e.target == windshieldReplacementPriceListWindow) {
      windshieldReplacementPriceListWindow.style.display = "none";
    }
  });

  setListener(windshieldReplacementPriceListBtn,"click", handleClickOpen);
  setListener(windshieldReplacementPriceListCloseBtn,"click", handleClickClose);
});

window.addEventListener("DOMContentLoaded", (event) => {

  const repairApplicationBtn = document.getElementById("repairApplicationBtn");
  const repairUserNameInput= document.getElementById("repairUserNameInput");
  const repairUserPhoneNumInput = document.getElementById("repairUserPhoneNumInput");
  const repairUserCarMakeInput = document.getElementById("repairUserCarMakeInput");
  const errorNameLabel = document.getElementById("userNameErrorModal2");
  const errorPhoneNumLabel = document.getElementById("userPhoneNumErrorModal2");
  const errorCarMakeLabel = document.getElementById("userCarMakeErrorModal2");


  setListener(repairApplicationBtn,"click", () => {
    var userNameValue = repairUserNameInput.value;
    var userPhoneNumValue = repairUserPhoneNumInput.value;
    var userCarMakeValue = repairUserCarMakeInput.value;

    if (userNameValue === "" || userPhoneNumValue === "" || userCarMakeValue === "") {
      if (userNameValue === "") errorNameLabel.style.display = "block";
      else errorNameLabel.style.display = "none";
      if (userPhoneNumValue === "") errorPhoneNumLabel.style.display = "block";
      else errorPhoneNumLabel.style.display = "none";
      if (userCarMakeValue === "") errorCarMakeLabel.style.display = "block";
      else errorCarMakeLabel.style.display = "none";
    } else {
      repairUserNameInput.value = "";
      repairUserPhoneNumInput.value = "";
      repairUserCarMakeInput.value = "";
      errorNameLabel.style.display = "none";
      errorPhoneNumLabel.style.display = "none";
      errorCarMakeLabel.style.display = "none";
    }
  });
});
