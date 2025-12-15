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

form.addEventListener("submit", e => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const country = document.getElementById("country").value;
  const lang = languages[country] || { title: "Aviva Company Registration Website", thanks: "Thanks for registering!" };

  // Update title and message
  title.textContent = lang.title;
  msg.innerHTML = `<span style="color:#4a90e2;">${lang.thanks}</span> ${fullName}${country ? ' from ' + country : ''}!`;

  // Reset form fields
  form.reset();
});
