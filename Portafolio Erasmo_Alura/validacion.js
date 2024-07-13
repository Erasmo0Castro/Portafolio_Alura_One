document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms["form"];

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = form["nombre"].value.trim();
    const email = form["email"].value.trim();
    const asunto = form["asunto"].value.trim();
    const mensaje = form["mensaje"].value.trim();

    let errors = [];

    if (!nombre) {
      errors.push("Por favor, ingrese su nombre.");
    }

    if (!email) {
      errors.push("Por favor, ingrese su email.");
    } else if (!validateEmail(email)) {
      errors.push("Por favor, ingrese un email válido.");
    }

    if (!asunto) {
      errors.push("Por favor, ingrese un asunto.");
    }

    if (!mensaje) {
      errors.push("Por favor, ingrese un mensaje.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Formulario enviado exitosamente.");
      form.submit();
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});

if (!nombre) {
  errors.push("Por favor, ingrese su nombre.");
  form["nombre"].classList.add("error");
} else {
  form["nombre"].classList.remove("error");
}
