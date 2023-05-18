let userName = prompt("Lütfen İsminizi Giriniz.");
let enteredName = document.querySelector("#myName");
let time = document.querySelector("#myClock");
enteredName.innerHTML = `${userName.charAt(0).toUpperCase()}${userName.slice(1)}`;

let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

function updateTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let dayOfWeek = days[currentDate.getDay()];

  let formattedTime = `${hours}:${minutes}:${seconds} ${dayOfWeek}`;

  time.innerHTML = formattedTime;
}

// İlk çağrıyı yaparak saat bilgisini anlık olarak güncelleyelim
updateTime();

// Her saniye updateTime() fonksiyonunu çağıralım
setInterval(updateTime, 1000);
