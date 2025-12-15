const form = document.getElementById("regForm");
const msg = document.getElementById("message");
const title = document.getElementById("title");

// Language messages for some countries
const languages = {
  NG: { title: "Aviva Company Registration Website", thanks: "Thanks for registering!" },
  US: { title: "Aviva Company Registration Website", thanks: "Thanks for registering!" },
  BR: { title: "Aviva Company Registration Website", thanks: "Obrigado pelo registro!" },
  FR: { title: "Aviva Company Registration Website", thanks: "Merci pour votre inscription !" },
  ES: { title: "Aviva Company Registration Website", thanks: "¡Gracias por registrarte!" },
  DE: { title: "Aviva Company Registration Website", thanks: "Danke für Ihre Registrierung!" },
  IT: { title: "Aviva Company Registration Website", thanks: "Grazie per esserti registrato!" },
  JP: { title: "Aviva Company Registration Website", thanks: "登録ありがとうございました！" },
  CN: { title: "Aviva Company Registration Website", thanks: "感谢您的注册！" }
};

// Full country names
const countryNames = {
  NG: "Nigeria",
  US: "United States",
  BR: "Brazil",
  FR: "France",
  ES: "Spain",
  DE: "Germany",
  IT: "Italy",
  JP: "Japan",
  CN: "China",
  IN: "India",
  RU: "Russia",
  CA: "Canada",
  MX: "Mexico",
  GB: "United Kingdom"
};

form.addEventListener("submit", e => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const countryCode = document.getElementById("country").value;
  const country = countryNames[countryCode] || countryCode; // fallback to code if name not found
  const lang = languages[countryCode] || { title: "Aviva Company Registration Website", thanks: "Thanks for registering!" };

  // Update title and message
  title.textContent = lang.title;
  msg.innerHTML = `<span style="color:#4a90e2;">${lang.thanks}</span> ${fullName}${country ? ' from ' + country : ''}!`;

  // Reset form
  form.reset();
});
