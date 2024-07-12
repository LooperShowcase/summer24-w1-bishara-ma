function realpic() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);

  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}

const fakepic = "https://thispersondoesnotexist.com/";

const imgContainer = document.getElementById("images");
const resContainer = document.getElementById("result");///////////////////////////
function draw() {
    imgContainer.innerHTML = "";
    imgContainer.innerHTML = "";
    const resetBtn = document.createElement("button")
    resetBtn.innerHTML = "Try Again Ya Maaaan/Womaaan"
    resetBtn.onclick = draw
  const rnd = Math.random() > 0.5
  const arr = [rnd, !rnd];

  for (const isReal of arr) {
    const img = document.createElement("img");
    img.src = isReal ? realpic() : fakepic;

    img.onclick = function () {
      if (isReal) {
        resContainer.innerHTML = "Correct 😊"/////////////////////////
      } else {
      resContainer.innerHTML = "Incorrect 🙁"///////////////////////////
      }
      resContainer.appendChild(resetBtn)



    };

    imgContainer.appendChild(img);
  }




}

draw();
