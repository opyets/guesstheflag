const countries = [
  {code: "AD", name: "Andorra"},
  {code: "AE", name: "United Arab Emirates"},
  {code: "AF", name: "Afghanistan"},
  {code: "AG", name: "Antigua and Barbuda"},
  {code: "AI", name: "Anguilla"},
  {code: "AL", name: "Albania"},
  {code: "AM", name: "Armenia"},
  {code: "AO", name: "Angola"},
  {code: "AQ", name: "Antarctica"},
  {code: "AR", name: "Argentina"},
  {code: "AS", name: "American Samoa"},
  {code: "AT", name: "Austria"},
  {code: "AU", name: "Australia"},
  {code: "AW", name: "Aruba"},
  {code: "AX", name: "Åland Islands"},
  {code: "AZ", name: "Azerbaijan"},
  {code: "BA", name: "Bosnia and Herzegovina"},
  {code: "BB", name: "Barbados"},
  {code: "BD", name: "Bangladesh"},
  {code: "BE", name: "Belgium"},
  {code: "BF", name: "Burkina Faso"},
  {code: "BG", name: "Bulgaria"},
  {code: "BH", name: "Bahrain"},
  {code: "BI", name: "Burundi"},
  {code: "BJ", name: "Benin"},
  {code: "BL", name: "Saint Barthélemy"},
  {code: "BM", name: "Bermuda"},
  {code: "BN", name: "Brunei Darussalam"},
  {code: "BO", name: "Bolivia"},
  {code: "BQ", name: "Bonaire, Sint Eustatius and Saba"},
  {code: "BR", name: "Brazil"},
  {code: "BS", name: "Bahamas"},
  {code: "BT", name: "Bhutan"},
  {code: "BW", name: "Botswana"},
  {code: "BY", name: "Belarus"},
  {code: "BZ", name: "Belize"},
  {code: "CA", name: "Canada"},
  {code: "CC", name: "Cocos (Keeling) Islands"},
  {code: "CD", name: "Congo, The Democratic Republic Of The"},
  {code: "CF", name: "Central African Republic"},
  {code: "CG", name: "Congo"},
  {code: "CH", name: "Switzerland"},
  {code: "CI", name: "Côte D'Ivoire"},
  {code: "CK", name: "Cook Islands"},
  {code: "CL", name: "Chile"},
  {code: "CM", name: "Cameroon"},
  {code: "CN", name: "China"},
  {code: "CO", name: "Colombia"},
  {code: "CR", name: "Costa Rica"},
  {code: "CU", name: "Cuba"},
  {code: "CV", name: "Cape Verde"},
  {code: "CW", name: "Curaçao"},
  {code: "CY", name: "Cyprus"},
  {code: "CZ", name: "Czech Republic"},
  {code: "DE", name: "Germany"},
  {code: "DJ", name: "Djibouti"},
  {code: "DK", name: "Denmark"},
  {code: "DM", name: "Dominica"},
  {code: "DO", name: "Dominican Republic"},
  {code: "DZ", name: "Algeria"},
  {code: "EC", name: "Ecuador"},
  {code: "EE", name: "Estonia"},
  {code: "EG", name: "Egypt"},
  {code: "ER", name: "Eritrea"},
  {code: "ES", name: "Spain"},
  {code: "ET", name: "Ethiopia"},
  {code: "FI", name: "Finland"},
  {code: "FJ", name: "Fiji"},
  {code: "FK", name: "Falkland Islands (Malvinas)"},
  {code: "FM", name: "Micronesia, Federated States Of"},
  {code: "FO", name: "Faroe Islands"},
  {code: "FR", name: "France"},
  {code: "GA", name: "Gabon"},
  {code: "GB", name: "United Kingdom"},
  {code: "GD", name: "Grenada"},
  {code: "GE", name: "Georgia"},
  {code: "GH", name: "Ghana"},
  {code: "GI", name: "Gibraltar"},
  {code: "GL", name: "Greenland"},
  {code: "GM", name: "Gambia"},
  {code: "GN", name: "Guinea"},
  {code: "GQ", name: "Equatorial Guinea"},
  {code: "GR", name: "Greece"},
  {code: "GT", name: "Guatemala"},
  {code: "GU", name: "Guam"},
  {code: "GW", name: "Guinea-Bissau"},
  {code: "GY", name: "Guyana"},
  {code: "HK", name: "Hong Kong"},
  {code: "HN", name: "Honduras"},
  {code: "HR", name: "Croatia"},
  {code: "HT", name: "Haiti"},
  {code: "HU", name: "Hungary"},
  {code: "ID", name: "Indonesia"},
  {code: "IE", name: "Ireland"},
  {code: "IL", name: "Israel"},
  {code: "IM", name: "Isle of Man"},
  {code: "IN", name: "India"},
  {code: "IQ", name: "Iraq"},
  {code: "IR", name: "Iran"},
  {code: "IS", name: "Iceland"},
  {code: "IT", name: "Italy"},
  {code: "JE", name: "Jersey"},
  {code: "JM", name: "Jamaica"},
  {code: "JO", name: "Jordan"},
  {code: "JP", name: "Japan"},
  {code: "KE", name: "Kenya"},
  {code: "KG", name: "Kyrgyzstan"},
  {code: "KH", name: "Cambodia"},
  {code: "KI", name: "Kiribati"},
  {code: "KM", name: "Comoros"},
  {code: "KN", name: "Saint Kitts And Nevis"},
  {code: "KP", name: "North Korea"},
  {code: "KR", name: "South Korea"},
  {code: "KW", name: "Kuwait"},
  {code: "KY", name: "Cayman Islands"},
  {code: "KZ", name: "Kazakhstan"},
  {code: "LA", name: "Laos"},
  {code: "LB", name: "Lebanon"},
  {code: "LC", name: "Saint Lucia"},
  {code: "LI", name: "Liechtenstein"},
  {code: "LK", name: "Sri Lanka"},
  {code: "LR", name: "Liberia"},
  {code: "LS", name: "Lesotho"},
  {code: "LT", name: "Lithuania"},
  {code: "LU", name: "Luxembourg"},
  {code: "LV", name: "Latvia"},
  {code: "LY", name: "Libya"},
  {code: "MA", name: "Morocco"},
  {code: "MC", name: "Monaco"},
  {code: "MD", name: "Moldova"},
  {code: "ME", name: "Montenegro"},
  {code: "MG", name: "Madagascar"},
  {code: "MH", name: "Marshall Islands"},
  {code: "MK", name: "North Macedonia"},
  {code: "ML", name: "Mali"},
  {code: "MM", name: "Myanmar"},
  {code: "MN", name: "Mongolia"},
  {code: "MO", name: "Macao"},
  {code: "MR", name: "Mauritania"},
  {code: "MT", name: "Malta"},
  {code: "MU", name: "Mauritius"},
  {code: "MV", name: "Maldives"},
  {code: "MW", name: "Malawi"},
  {code: "MX", name: "Mexico"},
  {code: "MY", name: "Malaysia"},
  {code: "MZ", name: "Mozambique"},
  {code: "NA", name: "Namibia"},
  {code: "NE", name: "Niger"},
  {code: "NG", name: "Nigeria"},
  {code: "NI", name: "Nicaragua"},
  {code: "NL", name: "Netherlands"},
  {code: "NO", name: "Norway"},
  {code: "NP", name: "Nepal"},
  {code: "NR", name: "Nauru"},
  {code: "NU", name: "Niue"},
  {code: "NZ", name: "New Zealand"},
  {code: "OM", name: "Oman"},
  {code: "PA", name: "Panama"},
  {code: "PE", name: "Peru"},
  {code: "PG", name: "Papua New Guinea"},
  {code: "PH", name: "Philippines"},
  {code: "PK", name: "Pakistan"},
  {code: "PL", name: "Poland"},
  {code: "PT", name: "Portugal"},
  {code: "PW", name: "Palau"},
  {code: "PY", name: "Paraguay"},
  {code: "QA", name: "Qatar"},
  {code: "RO", name: "Romania"},
  {code: "RS", name: "Serbia"},
  {code: "RU", name: "Russia"},
  {code: "RW", name: "Rwanda"},
  {code: "SA", name: "Saudi Arabia"},
  {code: "SB", name: "Solomon Islands"},
  {code: "SC", name: "Seychelles"},
  {code: "SD", name: "Sudan"},
  {code: "SE", name: "Sweden"},
  {code: "SG", name: "Singapore"},
  {code: "SI", name: "Slovenia"},
  {code: "SK", name: "Slovakia"},
  {code: "SL", name: "Sierra Leone"},
  {code: "SM", name: "San Marino"},
  {code: "SN", name: "Senegal"},
  {code: "SO", name: "Somalia"},
  {code: "SR", name: "Suriname"},
  {code: "SS", name: "South Sudan"},
  {code: "ST", name: "Sao Tome and Principe"},
  {code: "SV", name: "El Salvador"},
  {code: "SY", name: "Syria"},
  {code: "SZ", name: "Eswatini"},
  {code: "TD", name: "Chad"},
  {code: "TG", name: "Togo"},
  {code: "TH", name: "Thailand"},
  {code: "TJ", name: "Tajikistan"},
  {code: "TL", name: "Timor-Leste"},
  {code: "TM", name: "Turkmenistan"},
  {code: "TN", name: "Tunisia"},
  {code: "TO", name: "Tonga"},
  {code: "TR", name: "Turkey"},
  {code: "TT", name: "Trinidad and Tobago"},
  {code: "TV", name: "Tuvalu"},
  {code: "TW", name: "Taiwan"},
  {code: "TZ", name: "Tanzania"},
  {code: "UA", name: "Ukraine"},
  {code: "UG", name: "Uganda"},
  {code: "US", name: "United States"},
  {code: "UY", name: "Uruguay"},
  {code: "UZ", name: "Uzbekistan"},
  {code: "VA", name: "Vatican City"},
  {code: "VC", name: "Saint Vincent And The Grenadines"},
  {code: "VE", name: "Venezuela"},
  {code: "VN", name: "Vietnam"},
  {code: "VU", name: "Vanuatu"},
  {code: "WS", name: "Samoa"},
  {code: "YE", name: "Yemen"},
  {code: "ZA", name: "South Africa"},
  {code: "ZM", name: "Zambia"},
  {code: "ZW", name: "Zimbabwe"}
];


const flagImage = document.getElementById("flag-image");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");
const nextBtn = document.getElementById("next-btn");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const progressEl = document.getElementById("progress");

let currentCountry;
let score = 0;
let questionNum = 1;
let gameCountries = [];

function shuffleArray(array) {
  let shuffled = [];
  
  for (let i = 0; i < array.length; i++) {
    shuffled.push(array[i]);
  }

  for (let i = 0; i < 50; i++) {
    let pos1 = Math.floor(Math.random() * shuffled.length);
    let pos2 = Math.floor(Math.random() * shuffled.length);
    
    let temp = shuffled[pos1];
    shuffled[pos1] = shuffled[pos2];
    shuffled[pos2] = temp;
  }
  
  return shuffled;
}

function loadFlag(countryCode) {
  submitBtn.disabled = true;
  flagImage.src = "";
  
  let apiUrl = `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;
  
  fetch(apiUrl)
    .then(response => {
      if (response.ok) {
        return response.url;
      } else {
        throw new Error("Flag not found");
      }
    })
    .then(url => {
      flagImage.src = url;
      submitBtn.disabled = false;
      answerInput.focus();
    })
}

function startGame() {
  gameCountries = shuffleArray(countries);
  
  questionNum = 1;
  score = 0;
  scoreEl.textContent = "Score: 0";
  
  loadNewFlag();
}

function loadNewFlag() {
  nextBtn.style.display = "none";
  feedbackEl.textContent = "";
  answerInput.value = "";
  answerInput.disabled = false;
  
  progressEl.textContent = `Progress: ${questionNum}/${gameCountries.length}`;
  
  currentCountry = gameCountries[questionNum - 1];
  
  loadFlag(currentCountry.code);
}

function checkAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = currentCountry.name.toLowerCase();

  answerInput.disabled = true;
  submitBtn.disabled = true;
  
  if (userAnswer === correctAnswer) {
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "#2ecc71";
    score = score + 1;
    scoreEl.textContent = `Score: ${score}`;
  } else {
    feedbackEl.textContent = `Wrong! It was ${currentCountry.name}.`;
    feedbackEl.style.color = "#e74c3c";
  }
  
  nextBtn.style.display = "block";
}

submitBtn.addEventListener("click", function() {
  checkAnswer();
});

answerInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter" && !answerInput.disabled) {
    checkAnswer();
  }
});

nextBtn.addEventListener("click",  function() {
  questionNum = questionNum + 1;
  if (questionNum <= gameCountries.length) {
    loadNewFlag();
  } else {
    endGame();
  }
});

function endGame() {
  flagImage.style.display = "none";
  answerInput.style.display = "none";
  submitBtn.style.display = "none";
  nextBtn.style.display = "none";
  
  feedbackEl.textContent = `Game Over! Your final score is ${score} out of ${gameCountries.length}.`;
  feedbackEl.style.color = "#333";
  
  const replayBtn = document.createElement("button");
  replayBtn.textContent = "Play Again";
  replayBtn.addEventListener("click", function() {
    flagImage.style.display = "block";
    answerInput.style.display = "block";
    submitBtn.style.display = "block";
    startGame();
    document.querySelector(".game-container").removeChild(replayBtn);
  });
  
  document.querySelector(".game-container").appendChild(replayBtn);
}

window.onload = startGame;