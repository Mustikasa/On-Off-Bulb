function saklar() {
  let toggle1 = document.getElementById("toggle1");
  let toggle2 = document.getElementById("toggle2");
  let toggle3 = document.getElementById("toggle3");

  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");

  if (toggle1.checked) {
    lampu1.src = "lampuon.png";
  } else {
    lampu1.src = "lampu.png";
  }
  if (toggle2.checked) {
    lampu2.src = "lampuon.png";
  } else {
    lampu2.src = "lampu.png";
  }
  if (toggle3.checked) {
    lampu3.src = "lampuon.png";
  } else {
    lampu3.src = "lampu.png";
  }

  //   if (params == "on") {
  //     lampu1.src = "lampuon.png";
  //   } else if (params == "off") {
  //     lampu1.src = "lampu.png";
  //   }

  //   if (params == "on2") {
  //     lampu2.src = "lampuon.png";
  //   } else if (params == "off2") {
  //     lampu2.src = "lampu.png";
  //   }

  //   if (params == "on3") {
  //     lampu3.src = "lampuon.png";
  //   } else if (params == "off3") {
  //     lampu3.src = "lampu.png";
  //   }
  //   return lampu1;
}
//   function saklar() {
//     console.log("testing saklar");
//     let lampu1 = document.getElementById("lampu1");
//     console.log(lampu1.src);
//     lampu1.src = "lampuon.png";
//   }
//   function saklar2() {
//     let lampu2 = document.getElementById("lampu1");
//     console.log(lampu2.src);
//     lampu2.src = "lampu.png";
//   }
