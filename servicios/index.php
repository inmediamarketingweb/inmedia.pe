<!DOCTYPE html>
<html lang="es">
<head>
    <title>Servicios | Inmedia Marketing Web</title>

    <?php include("../Componentes/Head/Head.php")?>

    <link rel="stylesheet" href="./style.css">
    <link rel="canonical" href="https://inmedia.pe/servicios/" />

    <meta name="description" content="Contamos con servicios completos como diseño web, desarrollo web, optimización SEO y más, para impulsar tu negocio a través de internet.">

    <meta property="og:title" content="Servicios | Inmedia Marketing Web">
    <meta property="og:description" content="Inmedia Marketing Web: Agencia con más de 5 años de experiencia en diseño web, marketing estratégico, diseño gráfico, hosting y gestión de redes sociales. Potenciamos tu negocio con soluciones digitales efectivas.">
    <meta property="og:image" content="https://inmedia.pe/Imagenes/Slider/banner-3.webp">
    <meta property="og:url" content="https://inmedia.pe/servicios/">
    <meta property="og:type" content="website">
</head>
<body>

    <?php include("../Componentes/Header/Header.php")?>

    <main>
        <div class="block-container">
            <section class="block-content">
                <div class="block-title-container margin-bottom-20">
                    <div class="block-title-container">
                        <h1 class="block-title">Nuestros <b>servicios</b></h1>
                    </div>
                </div>

                <nav class="services-slider-container">
                    <ul class="services-slider" id="slider">
                        <li>
                            <img src="./Imagenes/desarrollo-web.webp" alt="Diseño web | Inmedia Marketing Web" width="1400" height="400">
                        </li>
                        <li>
                            <img src="./Imagenes/marketing-web.webp" alt="Marketing estratégico | Inmedia Marketing Web" width="1400" height="400">
                        </li>
                        <li>
                            <img src="./Imagenes/gestion-de-redes-sociales.webp" alt="Publicidad digital | Inmedia Marketing Web" width="1400" height="400">
                        </li>
                        <li>
                            <img src="./Imagenes/diseno-grafico.webp" alt="Diseño gráfico | Inmedia Marketing Web" width="1400" height="400">
                        </li>
                        <li>
                            <img src="./Imagenes/gestion-de-redes-sociales.webp" alt="Video marketing | Inmedia Marketing Web" width="1400" height="400">
                        </li>
                        <li>
                            <img src="./Imagenes/gestion-de-redes-sociales.webp" alt="Chatbot & ventas | Inmedia Marketing Web" width="1400" height="400">
                        </li>
                        <li>
                            <img src="./Imagenes/infraestructura.webp" alt="Infraestructura TI | Inmedia Marketing Web" width="1400" height="400">
                        </li>
                        <li>
                            <img src="./Imagenes/infraestructura.webp" alt="Gestión de redes sociales | Inmedia Marketing Web" width="1400" height="400">
                        </li>
                    </ul>
                </nav>
            </section>
        </div>

        <div class="block-container">
            <section class="block-content">
                <div class="page-services-container">
                    <nav class="page-services-list-container d-flex-column gap-20">
                        <ul class="page-services-list d-flex-column gap-5" id="lista-servicios">
                            <li>
                                <button type="button" class="services-button services-button-0 active" data-category="all" title="Todos">
                                    <i class="fa-solid fa-chevron-right"></i>
                                    <h2>Todos</h2>
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <div class="services-container d-flex-column gap-20">
                        <div class="d-flex-column gap-10 category category-1 category-diseno-web">
                            <p class="block-title">Diseño web</p>

                            <div id="diseno-web" class="d-flex-justify-center gap-10 d-flex-wrap"></div>
                        </div>

                        <div class="d-flex-column gap-10 category category-2 category-marketing-estrategico">
                            <p class="block-title">Marketing estratégico</p>

                            <div id="marketing-estrategico" class="d-flex-justify-center gap-10 d-flex-wrap"></div>
                        </div>

                        <div class="d-flex-column gap-10 category category-3 category-gestion-de-redes-sociales">
                            <p class="block-title">Publicidad digital</p>

                            <div id="publicidad-digital" class="d-flex-justify-center gap-10 d-flex-wrap"></div>
                        </div>

                        <div class="d-flex-column gap-10 category category-4 category-publicidad-digital">
                            <p class="block-title">Diseño gráfico</p>

                            <div id="diseno-grafico" class="d-flex-justify-center gap-10 d-flex-wrap"></div>
                        </div>

                        <div class="d-flex-column gap-10 category category-5 category-diseno-grafico">
                            <p class="block-title">Video marketing</p>

                            <div id="video-marketing" class="d-flex-justify-center gap-10 d-flex-wrap"></div>
                        </div>

                        <div class="d-flex-column gap-10 category category-6 category-video-marketing">
                            <p class="block-title">Chatbot & ventas</p>

                            <div id="chatbot-&-ventas" class="d-flex-justify-center gap-10 d-flex-wrap"></div>
                        </div>

                        <div class="d-flex-column gap-10 category category-7 category-chatbot-y-ventas">
                            <p class="block-title">Infraestructura TI</p>

                            <div id="infraestructura-ti" class="d-flex-justify-center gap-10 d-flex-wrap"></div>
                        </div>

                        <div class="d-flex-column gap-10 category category-8 category-infraestructura-ti">
                            <p class="block-title">Gestión de redes sociales</p>

                            <div id="gestion-de-redes-sociales" class="d-flex-justify-center gap-10 d-flex-wrap"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>

    <?php include("../Componentes/Footer/Footer.php")?>
    
    <script src="../Componentes/Header/Header.js"></script>
    <script src="../Componentes/Footer/Footer.js"></script>

    <script src="./app.js"></script>

    <script src="../../Componentes/Js/Faq.js"></script>
</body>
</html>