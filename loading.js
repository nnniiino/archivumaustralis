$(document).ready(function () {
    $('#uploadfile').on("change", validateFile);
    setupAutocomplete();

    // Mostrar pantalla de carga al enviar el formulario
    $("#form").on("submit", function () {
        $("#loading-screen").show(); // Muestra la pantalla de carga
    });
});

function validateFile() {
    // Aquí va la función de validación de archivo
}

function setupAutocomplete() {
    // Aquí va la configuración del autocompletar
}
