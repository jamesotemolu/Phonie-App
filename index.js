const carrierIcon = document.querySelector(".carrier-icon");
const phoneInput = document.querySelector("#phonenumber");
   const modal = document.querySelector(".modal");
   const openModal = document.querySelector(".open-modal");
   const closeModal = document.querySelector(".close-modal");
   const form=document.querySelector(".form__verify")





//prefixes for the different network carriers

const mtnPrefixes = ["0803","0806", "0703","0706","0813", "0816","0810", "0814", "0903", "0906",];

const gloPrefixes = ["0805", "0807", "0705", "0815", "0811", "0905"];

const airtelPrefixes = ["0802","0808","0708", "0704","0812","0701","0901","0902","0904"];

const etisalatPrefixes = ["0809", "0818", "0817", "0908", "0909"];

const starcommsPrefixes = ["07028", "07029", "0819"];

const visafonePrefixes = ["07025", "07026", "0704"];

const multilinksPrefixes = ["07027", "0709"];

const zoomPrefixes = ["0707"];

const ntelPrefixes = ["0804"];

const smilePrefixes = ["0702"];

   

//display carrier icon

function displayCarrier(network) {
  if (network === "MTN") {
    carrierIcon.innerHTML = ` <img src="./images/mtn.png" alt=""> `;
  } else if (network === "Airtel") {
    carrierIcon.innerHTML = `<img src="./images/airtel.png" alt="">`;
  } else if (network === "GLO") {
    carrierIcon.innerHTML = `<img src="./images/glo.jpg" alt="">`;
  } else if (network === "Etisalat") {
    carrierIcon.innerHTML =`<img src="./images/9mobile.png" alt=""> `
  } else if (network === "starcomms") {
    carrierIcon.innerHTML = `<img src="./images/starcomms.jpg" alt="">`;
  } else if (network === "visafone") {
    carrierIcon.innerHTML = `<img src="./images/multilinks" alt="">`;
  } else if (network === "multilinks") {
    carrierIcon.innerHTML = `<img src="./images/starcomms.jpg" alt="">`;
  } else if (network === "zoom") {
    carrierIcon.innerHTML = `<img src="./images/zoom.jpg" alt="">`;
  } else if (network === "ntel") {
    carrierIcon.innerHTML = `<img src="./images/ntel.png" alt="">`;
  } else if (network === "smile") {
    carrierIcon.innerHTML = `<img src="./images/smile.jpg" alt="">`;
  }
 

}

 function resetDisplay() {
   carrierIcon.innerHTML = "";
 }


//check the network carrier

function checkNetworkCarrier(prefix) {
  if (mtnPrefixes.includes(prefix)) {
    displayCarrier("MTN");
  } else if (gloPrefixes.includes(prefix)) {
    displayCarrier("GLO");
  } else if (airtelPrefixes.includes(prefix)) {
    displayCarrier("Airtel");
  } else if (etisalatPrefixes.includes(prefix)) {
    displayCarrier("Etisalat");
  } else if (starcommsPrefixes.includes(prefix)) {
    displayCarrier("starcomms");
  } else if (visafonePrefixes.includes(prefix)) {
    displayCarrier("visafone");
  } else if (multilinksPrefixes.includes(prefix)) {
    displayCarrier("multilinks");
  } else if (zoomPrefixes.includes(prefix)) {
    displayCarrier("zoom");
  } else if (ntelPrefixes.includes(prefix)) {
    displayCarrier("ntel");
  } else if (smilePrefixes.includes(prefix)) {
    displayCarrier("smile");
  }
  
}

//checkValidity of Network carrier

function isNetworkCarrierValid(prefix) {
  if (mtnPrefixes.includes(prefix)) {
    return true;
  } else if (gloPrefixes.includes(prefix)) {
    return true;
  } else if (airtelPrefixes.includes(prefix)) {
    return true;
  } else if (etisalatPrefixes.includes(prefix)) {
    return true;
  } else if (starcommsPrefixes.includes(prefix)) {
    return true;
  } else if (visafonePrefixes.includes(prefix)) {
    return true;
  } else if (multilinksPrefixes.includes(prefix)) {
    return true;
  } else if (zoomPrefixes.includes(prefix)) {
    return true;
  } else if (ntelPrefixes.includes(prefix)) {
    return true;
  } else if (smilePrefixes.includes(prefix)) {
    return true;
  }
}

phoneInput.addEventListener("input", () => {
  let phoneInputValue = phoneInput.value;
  
  let firstFourInputPrefix = phoneInputValue.slice(0,4);
  let firstFiveInputPrefix= phoneInputValue.slice(0,5)

 if(phoneInputValue.length>=4){

      if (
        isNetworkCarrierValid(firstFourInputPrefix) &&
        isNetworkCarrierValid(firstFiveInputPrefix)
      ) {
        checkNetworkCarrier(firstFiveInputPrefix);
      } else {
        checkNetworkCarrier(firstFourInputPrefix);
      }


 }

 else {
    resetDisplay()
 }




});

resetDisplay()

//display modal for confirmation


 form.addEventListener("submit", (e) => {
   e.preventDefault();
   modal.showModal();
   console.log("ello");
 });

 closeModal.addEventListener("click", () => {
   modal.close();
   form.reset();
   resetDisplay();
 });


