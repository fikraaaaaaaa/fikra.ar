const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];
const numStars = 150;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.5 + 0.1
    });
  }
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();

    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(animateStars);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createStars();
});

resizeCanvas();
createStars();
animateStars();



const cities = {
  "SA": { city: "الرياض", country: "السعودية" },
  "EG": { city: "القاهرة", country: "مصر" },
  "AE": { city: "أبو ظبي", country: "الإمارات العربية المتحدة" },
  "JO": { city: "عمان", country: "الأردن" },
  "TR": { city: "أنقرة", country: "تركيا" },
  "DZ": { city: "الجزائر", country: "الجزائر" },
  "MA": { city: "الرباط", country: "المغرب" },
  "SD": { city: "الخرطوم", country: "السودان" },
  "IQ": { city: "بغداد", country: "العراق" },
  "KW": { city: "مدينة الكويت", country: "الكويت" },
  "QA": { city: "الدوحة", country: "قطر" },
  "BH": { city: "المنامة", country: "البحرين" },
  "OM": { city: "مسقط", country: "عمان" },
  "YE": { city: "صنعاء", country: "اليمن" },
  "SY": { city: "دمشق", country: "سوريا" },
  "LB": { city: "بيروت", country: "لبنان" },
  "TN": { city: "تونس", country: "تونس" },
  "PS": { city: "غزة", country: "فلسطين" },
  "LY": { city: "طرابلس", country: "ليبيا" },
  "PK": { city: "إسلام أباد", country: "باكستان" },
  "IN": { city: "نيودلهي", country: "الهند" },
  "BD": { city: "دكا", country: "بنغلاديش" },
  "ID": { city: "جاكرتا", country: "إندونيسيا" },
  "MY": { city: "كوالالمبور", country: "ماليزيا" },
  "NG": { city: "أبوجا", country: "نيجيريا" },
  "US": { city: "واشنطن", country: "الولايات المتحدة" },
  "FR": { city: "باريس", country: "فرنسا" },
  "DE": { city: "برلين", country: "ألمانيا" },
  "GB": { city: "لندن", country: "المملكة المتحدة" },
  "CA": { city: "أوتاوا", country: "كندا" },
  "AU": { city: "كانبرا", country: "أستراليا" },
  "CN": { city: "بكين", country: "الصين" },
  "JP": { city: "طوكيو", country: "اليابان" },
  "RU": { city: "موسكو", country: "روسيا" },
  "ES": { city: "مدريد", country: "إسبانيا" },
  "IT": { city: "روما", country: "إيطاليا" },
  "SE": { city: "ستوكهولم", country: "السويد" },
  "BR": { city: "برازيليا", country: "البرازيل" },
  "AR": { city: "بوينس آيرس", country: "الأرجنتين" },
  "MX": { city: "مدينة مكسيكو", country: "المكسيك" }
};
  

const currencies = {
  "SA": "ريال سعودي",
  "EG": "جنيه مصري",
  "AE": "درهم إماراتي",
  "JO": "دينار أردني",
  "TR": "ليرة تركية",
  "DZ": "دينار جزائري",
  "MA": "درهم مغربي",
  "SD": "جنيه سوداني",
  "IQ": "دينار عراقي",
  "KW": "دينار كويتي",
  "QA": "ريال قطري",
  "BH": "دينار بحريني",
  "OM": "ريال عماني",
  "YE": "ريال يمني",
  "SY": "ليرة سورية",
  "LB": "ليرة لبنانية",
  "TN": "دينار تونسي",
  "PS": "شيكل فلسطيني",
  "LY": "دينار ليبي",
  "PK": "روبية باكستانية",
  "IN": "روبية هندية",
  "BD": "تاكا بنغلاديشي",
  "ID": "روبية إندونيسية",
  "MY": "رينغيت ماليزي",
  "NG": "نايرا نيجيري",
  "US": "دولار أمريكي",
  "FR": "يورو",
  "DE": "يورو",
  "GB": "جنيه إسترليني",
  "CA": "دولار كندي",
  "AU": "دولار أسترالي",
  "CN": "يوان صيني",
  "JP": "ين ياباني",
  "RU": "روبل روسي",
  "ES": "يورو",
  "IT": "يورو",
  "SE": "كرونا سويدية",
  "BR": "ريال برازيلي",
  "AR": "بيزو أرجنتيني",
  "MX": "بيزو مكسيكي"
};

  
    async function loadPrayerTimes() {
      const selectedCode = document.getElementById("country").value;
      const { city, country } = cities[selectedCode];
      const tbody = document.querySelector("#prayerTable tbody");
  
      tbody.innerHTML = `<tr><td colspan="2">جارٍ التحميل...</td></tr>`;
  
      try {
        const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`);
        const data = await response.json();
        const timings = data.data.timings;
  
        const prayers = {
          "الفجر": timings.Fajr,
          "الظهر": timings.Dhuhr,
          "العصر": timings.Asr,
          "المغرب": timings.Maghrib,
          "العشاء": timings.Isha
        };
  
        tbody.innerHTML = "";
        for (const [prayer, time] of Object.entries(prayers)) {
          const row = `<tr><td>${prayer}</td><td>${time}</td></tr>`;
          tbody.innerHTML += row;
        }
  
      } catch (error) {
        tbody.innerHTML = `<tr><td colspan="2">حدث خطأ في تحميل البيانات</td></tr>`;
        console.error(error);
      }
    }
  
  const countrySelect = document.getElementById("country");
  for (const code in cities) {
  const option = document.createElement("option");
  option.value = code;
  option.textContent = `${cities[code].country}`;
  countrySelect.appendChild(option);
  }
  
  if (localStorage.getItem("selectedCountry")) {
    countrySelect.value = localStorage.getItem("selectedCountry");
    loadPrayerTimes(); 
    loadPrayerTimesAndCurrency(); 
}

countrySelect.addEventListener("change", () => {
    localStorage.setItem("selectedCountry", countrySelect.value);
    loadPrayerTimes(); 
    loadPrayerTimesAndCurrency(); 
});
  
    loadPrayerTimes();




    function loadPrayerTimesAndCurrency() {
      const select = document.getElementById("country");
      const currencySpan = document.getElementById("currency");
      const selectedCode = select.value;
    
      const selectedCurrency = currencies[selectedCode] || "العملة غير معروفة";
    
      currencySpan.textContent = selectedCurrency;
    }
    
const zakahInput = document.getElementById("zakahinput");
const kdrSpan = document.getElementById("kdr");

if (localStorage.getItem("zakahValue")) {
    const savedValue = parseFloat(localStorage.getItem("zakahValue"));
    zakahInput.value = savedValue;
    kdrSpan.textContent = (savedValue * 0.025).toFixed(2);
}

zakahInput.addEventListener("input", () => {
    const value = parseFloat(zakahInput.value);
    if (!isNaN(value)) {
        const zakahAmount = value * 0.025;
        kdrSpan.textContent = zakahAmount.toFixed(2);
        localStorage.setItem("zakahValue", value);
    } else {
        kdrSpan.textContent = "0";
        localStorage.removeItem("zakahValue"); 
    }
});
