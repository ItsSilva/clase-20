const render = () => {
    const formulario = document.querySelector("#formulario");

    const correo = document.querySelector("#correo");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        // alert(correo.value); // Muestra el valor del input. Sin embargo no es una buena práctica.
        
        const valorCorreo = e.target.correo.value;
        alert(valorCorreo);
    });

    correo.addEventListener("input", (e) => {
        console.log(e.target.value);
    });
};

document.addEventListener("DOMContentLoaded", render);