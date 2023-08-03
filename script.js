let basicInfoDivSize = document.querySelector(".basic-info").offsetWidth;
//Make message div the same size as basic-info div
document.querySelector(".message").style.width = String(basicInfoDivSize) + "px";

window.addEventListener("resize", () => {
  basicInfoDivSize = document.querySelector(".basic-info").offsetWidth;
  //Make message div the same size as basic-info div
  document.querySelector(".message").style.width = String(basicInfoDivSize) + "px";
})