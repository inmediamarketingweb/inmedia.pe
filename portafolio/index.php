<!DOCTYPE html>
<html lang="es">
<head>
    <?php include("../Componentes/Head/Head.php")?>

    <title>Portafolio | Inmedia Marketing Web</title>

    <link rel="stylesheet" href="./style.css">

    <link rel="canonical" href="https://inmedia.pe/portafolio" />
    <meta name="description" content="Agencia de marketing digital con más de 5 años de experiencia en servicios como marketing digital, desarrollo web y gestión de redes sociales.">
    <meta name="keywords" content="agencia de marketing digital, marketing web, diseño web, desarrollo web, desarrollo de paginas web, paginas web, diseño de paginas web, desarrollo web, agencias de diseño web, agencias de desarrollo web, inmedia marketing web, SEO, seo">

    <meta property="og:title" content="Portafolio | Inmedia Marketing Web">
    <meta property="og:description" content="Agencia de marketing digital con más de 5 años de experiencia en servicios como marketing digital, desarrollo web y gestión de redes sociales.">
    <meta property="og:image" content="https://inmedia.pe/Imagenes/diseno-web.webp">
    <meta property="og:url" content="https://inmedia.pe/portafolio">
    <meta property="og:type" content="website">

    <meta name="twitter:card" content="https://inmedia.pe/Imagenes/diseno-web.webp">
    <meta name="twitter:title" content="Portafolio | Inmedia Marketing Web">
    <meta name="twitter:description" content="Agencia de marketing digital con más de 5 años de experiencia en servicios como marketing digital, desarrollo web y gestión de redes sociales.">
    <meta name="twitter:image" content="https://inmedia.pe/Imagenes/diseno-web.webp">
    <meta name="twitter:site" content="">
</head>
<body>

    <?php include("../Componentes/Header/Header.php")?>

    <main>
        <div class="block-container">
            <section class="block-content d-flex-column gap-20">
                <div class="block-title-container">
                    <p class="block-title">Portafolio</p>
                </div>

                <nav class="portfolio-buttons-container">
                    <ul class="portfolio-buttons">
                        <li>
                            <button type="button" class="portfolio-button portfolio-button-1 active" data-filter="all">
                                <img src="https://inmedia.pe/Imagenes/Iconos/azul/shapes-solid.svg" width="16" height="16" alt="icono de varias figuras">
                                <p>Todos</p>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="portfolio-button portfolio-button-2" data-filter="diseno-web">
                                <img src="https://inmedia.pe/Imagenes/Iconos/azul/paintbrush-solid.svg" width="16" height="16" alt="icono de un pincel">
                                <p>Diseño web</p>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="portfolio-button portfolio-button-3" data-filter="diseno-grafico">
                                <img src="https://inmedia.pe/Imagenes/Iconos/azul/pen-fancy-solid.svg" width="16" height="16" alt="icono de un lapiz">
                                <p>Diseño gráfico</p>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="portfolio-button portfolio-button-4" data-filter="video-marketing">
                                <img src="https://inmedia.pe/Imagenes/Iconos/azul/video-solid.svg" width="16" height="16" alt="icono de un video">
                                <p>Video marketing</p>
                            </button>
                        </li>
                    </ul>
                </nav>

                <div id="portafolio">
                    <div id="diseno-y-desarrollo"></div>
                    <div id="video-marketing"></div>
                </div>
            </section>
        </div>
    </main>

    <?php include("../Componentes/Footer/Footer.php")?>
    
    <script src="../Componentes/Header/Header.js"></script>
    <script src="../Componentes/Footer/Footer.js"></script>

    <script src="./app.js"></script>
</body>
</html>