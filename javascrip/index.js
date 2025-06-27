document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    const fm = document.getElementById("fm");
    const na = document.getElementById("na");

    const body = document.getElementsByTagName("body");

    const imagenes = [
        "../assets/Confucio.d.jpg",
        "../assets/Peter Drucker.jpg",
        "../assets/Vidal Sassoon.d.jpg",
        "../assets/Muhammad Ali.jpg",
        "../assets/Teddy Roosevelt.jpg"
    ]

    const frases = [
        "El éxito es aprender a ir de fracaso en fracaso sin desesperarse.",
        "La vida es 10% lo que me ocurre y 90% cómo reacciono a ello.",
        "Cree en ti y todo será posible.",
        "No cuentes los días, haz que los días cuenten.",
        "Lo que no te mata, te hace más fuerte."
    ];

    const autores = [
        "Winston Churchill",
        "Charles R. Swindoll",
        "Eliza Doolittle (personaje de ficción en My Fair Lady)",
        "Muhammad Ali",
        "Friedrich Nietzsche"
    ];

    // Mostrar la primera frase y autor al cargar
    fm.textContent = frases[0];
    na.textContent = autores[0];

    btn.addEventListener("click", () => {
        // Elegir índice aleatorio para frase y autor
        num = Math.floor(Math.random() * 5);
        fm.textContent = frases[num];
        na.textContent = autores[num];
    });
});
