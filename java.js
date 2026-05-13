function toggleContrast() {
  document.body.classList.toggle("dark-theme")
}


function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.add("modal__overlay--visible");
  emailjs
    .sendForm(
      "service_19mqubv",
      "template_h5xk6ft",
      event.target,
      "SxZAkz0gnMLtcL-GL",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList.add("modal__overlay--visible");
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please email me directly @qkamarie@gmail.com ",
      );
    });
}
function toggleModal() {
  document.body.classList.toggle("modal--open");
}