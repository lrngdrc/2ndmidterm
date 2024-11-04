console.log("littlebambi");
const switchToggle = document.getElementById('switch');
switchToggle.addEventListener('change', () =>
    {document.body.classList.toggle('dark-mode', switchToggle.checked);
  });
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    switchToggle.checked = true;
}
switchToggle.addEventListener('change', () => {
    if (switchToggle.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled');
    }
});
function changeImage(src) {
  document.getElementById("mainImage").src = src;
}
function redireccion() {
  let respuesta = window.confirm("¿Quieres realizar una reserva?");
    if(respuesta == true){
        window.alert("¡Excelente!");
        window.location.href = "reserva.html"
    }else{
        window.alert("Puedes seguir viendo nuestro catálogo.")
    }
}
document.getElementById('sendEmail').addEventListener('click', function() {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const asunto = document.getElementById('asunto').value;
  const mensaje = document.getElementById('mensaje').value;

  const mailtoLink = `mailto:lolitalittlebambi@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`)}`;

  window.location.href = mailtoLink;
});
function addItem(item) {
  const selectedItems = document.getElementById('selectedItems');
  const listItem = document.createElement('li');
  listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  listItem.textContent = item;
  const removeButton = document.createElement('button');
  removeButton.classList.add('btn', 'btn-danger', 'btn-sm');
  removeButton.textContent = 'Eliminar';
  removeButton.onclick = function() {
    selectedItems.removeChild(listItem);
  };
  listItem.appendChild(removeButton);
  selectedItems.appendChild(listItem);
}