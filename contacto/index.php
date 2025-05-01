<!DOCTYPE html>
<html lang="es">
<head>
    <?php include("../Componentes/Head/Head.php")?>

    <title>Contacto | Inmedia Marketing Web</title>

    <link rel="stylesheet" href="./style.css">

    <link rel="canonical" href="https://inmedia.pe/contacto" />
    <meta name="description" content="Agencia de marketing digital con más de 5 años de experiencia en servicios como marketing digital, desarrollo web y gestión de redes sociales.">
    <meta name="keywords" content="agencia de marketing digital, marketing web, diseño web, desarrollo web, desarrollo de paginas web, paginas web, diseño de paginas web, desarrollo web, agencias de diseño web, agencias de desarrollo web, inmedia marketing web, SEO, seo">

    <meta property="og:title" content="Inmedia Marketing Web">
    <meta property="og:description" content="Agencia de marketing digital con más de 5 años de experiencia en servicios como marketing digital, desarrollo web y gestión de redes sociales.">
    <meta property="og:image" content="https://inmedia.pe/Imagenes/diseno-web.webp">
    <meta property="og:url" content="https://inmedia.pe/contacto">
    <meta property="og:type" content="website">

    <meta name="twitter:card" content="https://inmedia.pe/Imagenes/diseno-web.webp">
    <meta name="twitter:title" content="Inmedia Marketing Web">
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
                    <p class="block-title">Contacto</p>
                </div>

                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1160.4335311117818!2d-77.04537645201958!3d-11.959431855968214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cfd09d90bef1%3A0x74121759483992f7!2sSta.%20Rosa%20158%2C%20Lima%2015328!5e0!3m2!1ses!2spe!4v1727989169181!5m2!1ses!2spe" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <div class="contact-form-container gap-20">
                    <div class="d-flex-column gap-10">
                        <p class="block-title">Escríbenos</p>

                        <ul class="card-ul">
                            <li><p class="text">Escríbanos para cualquier consulta o sugerencia.</p></li>
                            <li><p class="text">Estaremos gustosos en resolver sus dudas e inquietudes.</p></li>
                            <li><p class="text">Responderemos a la brevedad posible. Gracias por contactarnos!</p></li>
                        </ul>

                        <form class="d-flex-justify-center gap-10 d-flex-wrap" method="post" action="https://formspree.io/f/mnnawylq" id="formulario-de-contacto">
                            <fieldset class="card-flex-3 d-flex-column">
                                <label for="names" class="text margin-right"><b>Nombres completos</b></label>
                                <input id="names" type="text" class="input" name="Nombres completos" minlength="3" maxlength="100" required>
                            </fieldset>
                            <fieldset class="card-flex-3 d-flex-column">
                                <label for="email" class="text margin-right"><b>Correo electrónico</b></label>
                                <input id="email" type="email" class="input" name="Correo electrónico" minlength="3" maxlength="100" required>
                            </fieldset>
                            <fieldset class="card-flex-3 d-flex-column">
                                <label for="cellphone" class="text margin-right"><b>Celular</b></label>
                                <input id="cellphone" type="text" class="input" name="Celular"oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0,9);" required>
                            </fieldset>
                            <fieldset class="card-flex-3 d-flex-column">
                                <label for="company" class="text margin-right"><b>Empresa</b></label>
                                <input id="company" type="text" class="input" name="Empresa" minlength="3" maxlength="100">
                            </fieldset>
                            <fieldset class="card-flex-3 d-flex-column">
                                <label for="post" class="text margin-right"><b>Cargo</b></label>
                                <input id="post" type="text" class="input" name="Cargo" minlength="3" maxlength="100">
                            </fieldset>
                            <fieldset class="d-flex-column">
                                <label for="message" class="text margin-right"><b>Mensaje</b></label>
                                <textarea id="message" name="Mensaje"></textarea>
                            </fieldset>

                            <div class="d-flex-align-start gap-10">
                                <input type="checkbox" name="Términos y condiciones" required>

                                <p class="text">He leído y acepto las <a href="https://inmedia.pe/condiciones-de-servicios" class="color-blue text-underline" title="Condiciones de servicios">condiciones de servicios</a> de la empresa y además autorizo a <b class="color-blue">Inmedia Marketing Web</b> a contactarme para enviar información relevante sobre los productos y servicios que esta ofrece e inscribirme en la base de datos de la misma para fines de calidad del servicio.</p>
                            </div>

                            <div class="d-flex">
                                <button type="submit" class="button-link button-link-1 margin-left" title="Enviar datos">
                                    <p class="button-link-text">Enviar datos</p>
                                    <img src="https://inmedia.pe/Imagenes/Iconos/blanco/envelope-solid.svg" width="16" height="16" alt="icono de un avion de papel">
                                </button>
                            </div>
                        </form>
                    </div>

                    <div class="d-flex-column gap-10">
                        <div class="d-flex-align-center gap-5">
                            <div class="icon-img icon-img-blue">
                                <img src="https://inmedia.pe/Imagenes/Iconos/blanco/location-dot-solid.svg" width="16" height="16" alt="icono de un dot de locacion">
                            </div>
                            <div class="d-flex-column d-flex-align-left">
                                <p class="text"><b class="text">Dirección:</b></p>
                                <ul class="card-ul">
                                    <li><p class="text"><a href="https://www.google.com/maps/@-11.9436457,-77.0480063,3a,75y,272.22h,65.39t/data=!3m7!1e1!3m5!1su8QkI52TJxrg5IC3Drp8_Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D24.611771285947512%26panoid%3Du8QkI52TJxrg5IC3Drp8_Q%26yaw%3D272.21988993847145!7i16384!8i8192?coh=205410&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D" class="color-blue text-underline">Jr. Santa Rosa 178 - Comas</a></p></li>
                                </ul>
                            </div>
                        </div>
                        <div class="d-flex-align-center gap-5">
                            <div class="icon-img icon-img-blue">
                                <img src="https://inmedia.pe/Imagenes/Iconos/blanco/phone-volume-solid.svg" width="16" height="16" alt="icono de un telefono">
                            </div>
                            <div class="d-flex-column d-flex-align-left">
                                <p class="text"><b class="text">Teléfono:</b></p>
                                <ul class="card-ul">
                                    <li><p class="text"><a href="tel:+51 920210938" class="color-blue text-underline" title="Nuestro teléfono: 920210938">920210938</a></p></li>
                                </ul>
                            </div>
                        </div>
                        <div class="d-flex-align-center gap-5">
                            <div class="icon-img icon-img-blue">
                                <img src="https://inmedia.pe/Imagenes/Iconos/blanco/whatsapp-brands-solid.svg" width="16" height="16" alt="icono de whatsapp">
                            </div>
                            <div class="d-flex-column d-flex-align-left">
                                <p class="text"><b class="text">WhatsApp:</b></p>
                                <ul class="card-ul">
                                    <li><p class="text"><a href="https://wa.me/51920210938" class="color-blue text-underline" title="Nuestro teléfono: 920210938">920210938</a></p></li>
                                </ul>
                            </div>
                        </div>
                        <div class="d-flex-align-center gap-5">
                            <div class="icon-img icon-img-blue">
                                <img src="https://inmedia.pe/Imagenes/Iconos/blanco/envelope-solid.svg" width="16" height="16" alt="icono de un correo electronico">
                            </div>
                            <div class="d-flex-column d-flex-align-left">
                                <p class="text"><b class="text">Correo:</b></p>
                                <ul class="card-ul">
                                    <li><p class="text"><a href="mailto:servicios@inmedia.pe" class="color-blue text-underline" title="Escribenos a nuestro correo: servicios@inmedia.pe">servicios@inmedia.pe</a></p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>

    <div class="contact-modal-container">
        <div class="contact-modal">
            <div class="icon-img icon-img-blue">
                <img src="https://inmedia.pe/Imagenes/Iconos/blanco/envelope-solid.svg" width="22" height="22" alt="icono de un correo">
            </div>
            
            <div class="d-flex-column">
                <p class="text-title color-blue">Formulario enviado</p>
                <p class="text">En breve nos comunicaremos contigo.</p>
            </div>

            <img src="https://inmedia.pe/Imagenes/Iconos/azul/x-solid.svg" width="16" height="16" class="quote-modal-close" alt="icono para cerrar modal">
        </div>
    </div>

    <?php include("../Componentes/Footer/Footer.php")?>
    
    <script src="../Componentes/Header/Header.js"></script>
    <script src="../Componentes/Footer/Footer.js"></script>
    <script src="./app.js"></script>
</body>
</html>