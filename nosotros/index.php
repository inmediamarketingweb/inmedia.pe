<!DOCTYPE html>
<html lang="es">
<head>
    <title>Nosotros | Inmedia Marketing Web</title>

    <?php include("../Componentes/Head/Head.php")?>

    <link rel="stylesheet" href="./index.css">
    <link rel="canonical" href="https://inmedia.pe/nosotros" />

    <meta name="description" content="Somos Inmedia Marketing web, agencia de marketing digital con más de 5 años de experiencia posicionando negocios a través de internet.">
    <meta name="keywords" content="agencia de marketing digital, marketing web, diseño web, desarrollo web, desarrollo de paginas web, paginas web, diseño de paginas web, desarrollo web, agencias de diseño web, agencias de desarrollo web, inmedia marketing web, SEO, seo">

    <meta property="og:title" content="Nosotros | Inmedia Marketing Web">
    <meta property="og:description" content="Somos Inmedia Marketing web, agencia de marketing digital con más de 5 años de experiencia posicionando negocios a través de internet.">
    <meta property="og:image" content="https://inmedia.pe/Imagenes/diseno-web.webp">
    <meta property="og:url" content="https://inmedia.pe/nosotros">
    <meta property="og:type" content="website">

    <meta name="twitter:card" content="https://inmedia.pe/Imagenes/diseno-web.webp">
    <meta name="twitter:title" content="Nosotros | Inmedia Marketing Web">
    <meta name="twitter:description" content="Somos Inmedia Marketing web, agencia de marketing digital con más de 5 años de experiencia posicionando negocios a través de internet.">
    <meta name="twitter:image" content="https://inmedia.pe/Imagenes/diseno-web.webp">
    <meta name="twitter:site" content="">
</head>
<body>

    <?php include("../Componentes/Header/Header.php")?>

    <main>
        <div class="block-container">
            <section class="block-content d-flex-column gap-20">
                <img src="./Imagenes/page-nosotros-1.webp" alt="Nosotros | Inmedia Marketing Web" class="simple-img" width="1400" height="290">

                <div class="d-grid-2-1 gap-20 d-flex-wrap">
                    <div class="card-flex card-flex-2 d-flex-column gap-10">
                        <div class="block-title-container">
                            <h1 class="block-title">¿Quienes <b>somos?</b></h1>
                        </div>
                        
                        <ul class="card-ul">
                            <li><p class="text">En <b class="color-blue">Inmedia Marketing Web</b> somos un equipo multidisciplinario de profesionales, expertos en desarrollo de soluciones web y en comunicación a través de las distintas plataformas digitales.</p></li>
                            <li><p class="text">Aportamos en cada uno de nuestros proyectos todo nuestro conocimiento, experiencia y pasión por lo que desarrollamos.</p></li>
                            <li><p class="text">Sabemos que el mundo digital está en permanente cambio y eso es justamente lo que nos motiva a crear soluciones innovadoras, pero que a la vez entreguen a nuestros clientes los resultados que esperan y necesitan.</p></li>
                            <li><p class="text">Entendemos la importancia y valor de cada una de las marcas que confían en nosotros, por lo que en Inmedia Marketing Web nos involucramos y hacemos nuestros los objetivos de cada proyecto.</p></li>
                        </ul>
                    </div>

                    <div class="card-flex card-flex-2 d-flex-column gap-10">
                        <p class="block-title color-blue">Visión</p>
                        
                        <ul class="card-ul">
                            <li><p class="text">Nuestra visión es impulsar a nuestros clientes hacia la competitividad en la era digital, logrando la consolidación y liderazgo de cada uno de ellos en su rubro.</p></li>
                            <li><p class="text">En <b class="color-blue">Inmedia Marketing Web</b> buscamos liderar la transformación digital en Latinoamérica con servicios a la medida de cada uno de nuestros clientes.</p></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>

        <?php include("../Componentes/ProyectosRecientes/ProyectosRecientes.php")?>
        
        <?php include("../Componentes/Clientes/Clientes.php")?>

    </main>

    <?php include("../Componentes/Footer/Footer.php")?>
    
    <script src="../Componentes/Header/Header.js"></script>
    <script src="../Componentes/Footer/Footer.js"></script>
</body>
</html>