document.addEventListener("DOMContentLoaded", () => {
    const disenoDesarrolloContainer = document.getElementById("diseno-y-desarrollo");
    const videoMarketingContainer = document.getElementById("video-marketing");
    const portafolioContainer = document.getElementById("portafolio");

    // Cargar JSON
    fetch("https://inmedia.pe/portafolio/portafolio.json") // Reemplaza con la ruta correcta
    .then(response => response.json())
    .then(data => {
        // Renderizar los proyectos de diseño (web y gráfico)
        const proyectos = data.portafolio[0].proyectos; 
        proyectos.forEach(proyecto => {
            const card = document.createElement("div");
            card.classList.add("portfolio-card", proyecto.etiqueta);
            card.innerHTML = `
                <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
                <div>
                    <p class="color-white text-title">${proyecto.titulo}</p>
                    <p class="color-white">${proyecto.texto}</p>
                </div>
            `;
            disenoDesarrolloContainer.appendChild(card);
        });

        // Renderizar los videos de video marketing
        const videos = data.portafolio[1]["video-marketing"];
        videos.forEach(video => {
            const videoCard = document.createElement("div");
            videoCard.classList.add("portfolio-card", "video-marketing");
            
            if (video.etiqueta === "short") {
                videoCard.classList.add("short");
            }

            videoCard.innerHTML = `
                <iframe class="border-radius-10" src="${video.link}" frameborder="0" allowfullscreen></iframe>
            `;
            videoMarketingContainer.appendChild(videoCard);
        });

        // Mostrar todos los elementos por defecto
        filterPortfolio("all");
    })
    .catch(error => console.error("Error al cargar el JSON:", error));

    // Filtro de portafolio
    const buttons = document.querySelectorAll(".portfolio-button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const filter = button.getAttribute("data-filter");

            // Eliminar la clase 'active' de todos los botones
            buttons.forEach(btn => btn.classList.remove("active"));
            // Añadir la clase 'active' al botón actual
            button.classList.add("active");

            // Filtrar el portafolio basado en el botón presionado
            filterPortfolio(filter);

            // Si se selecciona cualquier categoría excepto "Todos", agregar la clase "active" a #portafolio
            if (filter !== "all") {
                portafolioContainer.classList.add("active");
            } else {
                portafolioContainer.classList.remove("active");
            }
        });
    });

    // Función para filtrar el portafolio
    function filterPortfolio(category) {
        const cards = document.querySelectorAll(".portfolio-card");

        cards.forEach(card => {
            if (category === "all") {
                card.classList.add("active");
            } else {
                if (card.classList.contains(category)) {
                    card.classList.add("active");
                } else {
                    card.classList.remove("active");
                }
            }
        });
    }
});
