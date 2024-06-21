document.getElementById("tagline").innerHTML = "Kami Siap Melayani";
function opennav() {
  const navbar = document.getElementById("navbar");
  // navbar.style.display = "inline-block";
  navbar.className = navbar.className !== "show" ? "show" : "hide";
  if (navbar.className === "show") {
    // navbar.style.display='block';
    window.setTimeout(() => {
      navbar.style.display = "block";
    }, 300);
  }
  if (navbar.className === "hide") {
    window.setTimeout(() => {
      navbar.style.display = "none";
    }, 300);
  }
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const thn = new Date().getFullYear();
var bln = new Date().getMonth();
const tgl = new Date().getDate();
var hri = new Date().getDay();
switch (hri) {
  case 0:
    hri = "Minggu";
    break;
  case 1:
    hri = "Senin";
    break;
  case 2:
    hri = "Selasa";
    break;
  case 3:
    hri = "Rabu";
    break;
  case 4:
    hri = "Kamis";
    break;
  case 5:
    hri = "Jum'at";
    break;
  case 6:
    hri = "Sabtu";
    break;
}

switch (bln) {
  case 0:
    bln = "Januari";
    break;
  case 1:
    bln = "Februari";
    break;
  case 2:
    bln = "Maret";
    break;
  case 3:
    bln = "April";
    break;
  case 4:
    bln = "Mei";
    break;
  case 5:
    bln = "Juni";
    break;
  case 6:
    bln = "Juli";
    break;
  case 7:
    bln = "Agustus";
    break;
  case 8:
    bln = "September";
    break;
  case 9:
    bln = "Oktober";
    break;
  case 10:
    bln = "November";
    break;
  case 11:
    bln = "Desember";
    break;
}
document.getElementById("tanggal").innerHTML =
  hri + ", " + tgl + " - " + bln + " - " + thn;

document.getElementById("nama").addEventListener("keyup", function () {
  const isi = document.getElementById("nama").value;
  document.getElementById("result-nama").innerHTML = isi;
});

document.getElementById("email").addEventListener("keyup", function () {
  const isi = document.getElementById("email").value;
  document.getElementById("result-email").innerHTML = isi;
});
document.getElementById("telp").addEventListener("keyup", function () {
  const isi = document.getElementById("telp").value;
  document.getElementById("result-tlp").innerHTML = isi;
});
const radioButtons = document.querySelectorAll('input[name="kelamin"]');

// Attach a change event listener to each radio button
radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("change", function () {
    // Retrieve the selected value
    const selectedValue = document.querySelector(
      'input[name="kelamin"]:checked',
    ).value;

    // Do something with the selected value
    document.getElementById("result-kelamin").innerHTML = selectedValue;
  });
});

function handleKeyUp(event) {
  const hasil = event.target.value;
  document.getElementById("result-pesan").innerHTML = hasil;
}

function kirim() {
  const inputElement = document.querySelectorAll('input[type="text"],input[type="date"],input[type="radio"],input[name="kelamin"], textarea ');
  inputElement.forEach(function(inputElement){
    inputElement.value = '';
    inputElement.checked = false;
    document.getElementById("result-nama").innerHTML = '';
    document.getElementById("result-email").innerHTML = '';
    document.getElementById("result-tlp").innerHTML = '';
    document.getElementById("result-pesan").innerHTML = '';
  });

  const popup = document.getElementById("popup-container");
  popup.style.display='flex';
  console.log("berhasil");
}
function validateInput(input) {
  input.value = input.value.replace(/[^0-9]/g, '');
}