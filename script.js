const generate = document.querySelector(".solid-btn");
const qrImg = document.querySelector(".qrImg");
const qrText = document.querySelector("#qrText");
const imgContainer = document.querySelector(".qrImgcontainer");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgContainer.classList.toggle("show-img");
  } else {
    qrText.classList.add("qrText-empty");

    imgContainer.classList.remove("show-img");

    setTimeout(() => {
      qrText.classList.remove("qrTexr-empty");
    }, 1000);
  }
}
