const photo1 = document.querySelector(".photoo1")

const photo2 = document.querySelector(".photoo2")

const photo3 = document.querySelector(".photoo3")

const photo4 = document.querySelector(".photoo4")

const photo5 = document.querySelector(".photoo5")

let yesBtn = document.querySelector(".yes")

let noBtn = document.querySelector(".no")

const ifYes = document.querySelector(".ifyes_block")

const mainSect = document.querySelector(".question_sect")

const song = document.querySelector("#loveSong")

yesBtn.addEventListener("click", () => {
  mainSect.style.display = "none";
  ifYes.style.display = "block";
});

let count = 0;

noBtn.addEventListener("click", () =>{
  count++;

  if(count === 1) {
    noBtn.style.width = "105px";
    noBtn.style.height = "60px";
    noBtn.style.fontSize = "45px";

    yesBtn.style.width = "145px";
    yesBtn.style.height = "90px";
    yesBtn.style.fontSize = "65px";

    photo5.style.display = "none";
    photo3.style.display = "block";
  }

  if(count === 2) {
    noBtn.style.width = "88px";
    noBtn.style.height = "47px";
    noBtn.style.fontSize = "33px";

    yesBtn.style.width = "155px";
    yesBtn.style.height = "105px";
    yesBtn.style.fontSize = "73px";

    photo5.style.display = "none";
    photo3.style.display = "none";
    photo1.style.display = "block";
  }

  if(count === 3) {
    noBtn.style.width = "80px";
    noBtn.style.height = "40px";
    noBtn.style.fontSize = "25px";

    yesBtn.style.width = "170px";
    yesBtn.style.height = "115px";
    yesBtn.style.fontSize = "80px";

    photo5.style.display = "none";
    photo3.style.display = "none";
    photo1.style.display = "none";
    photo4.style.display = "block";
  }

  if(count === 4) {
    noBtn.style.width = "60px";
    noBtn.style.height = "25px";
    noBtn.style.fontSize = "15px";

    yesBtn.style.width = "219px";
    yesBtn.style.height = "135px";
    yesBtn.style.fontSize = "105px";

    photo5.style.display = "none";
    photo3.style.display = "none";
    photo1.style.display = "none";
    photo4.style.display = "none";
    photo2.style.display = "block";
  }

  if(count === 5) {
    noBtn.style.display = "none";

    yesBtn.style.width = "260px";
    yesBtn.style.height = "155px";
    yesBtn.style.fontSize = "120px";

    photo5.style.display = "none";
    photo3.style.display = "none";
    photo1.style.display = "none";
    photo4.style.display = "none";
    photo2.style.display = "block";
  }


});

yesBtn.addEventListener("click", () => {
    mainSect.style.display = "none";
    ifYes.style.display = "block";
    
    song.currentTime = 150; 
    song.play();
});