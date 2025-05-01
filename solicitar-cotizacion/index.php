<!DOCTYPE html>
<html lang="es">
<head>
    <title>Solicitar cotización | Inmedia Marketing Web</title>
    <?php include("../Componentes/Head/Head.php")?>
    <link rel="stylesheet" href="https://inmedia.pe/solicitar-cotizacion/style.css">
</head>

<body>
    <?php include("../Componentes/Header/Header.php")?>

    <main class="main">
        <div class="block-container d-flex-column gap-10">
            <section class="block-content">
                <div class="block-title-container">
                    <p class="block-title block-title-no-bottom">Solicita una <b>cotización</b></p>
                </div>

                <div class="d-flex-column gap-10">
                    <ul class="card-ul">
                        <li><p class="text">Puede solicitar una cotizacion a través de este formulario.</p></li>
                        <li><p class="text">Para mayor seguridad de nuestros clientes, es necesario complete la mayor información posible. Garantizamos total resguardo y confidencialidad de los datos ingresados.</p></li>
                        <li><p class="text">También, enlaces a otras páginas web similares a la que desea para usted serán de mucha ayuda para realizar una cotizacion certera.</p></li>
                    </ul>

                    <form action="https://formspree.io/f/mvgpnpbg" method="post" id="formulario-de-cotizacion" class="d-flex-column gap-10 quote-form">
                        <fieldset class="d-flex-column">
                            <p class="card-text-title color-light-blue"><b>Datos personales</b></p>

                            <ul class="d-flex-justify-center gap-10 d-flex-wrap">
                                <li class="card-flex-4 d-flex-column">
                                    <label for="name">Nombres:</label>
                                    <input type="text" name="Nombres" id="name" minlength="3" maxlength="20" required>
                                </li>

                                <li class="card-flex-4 d-flex-column">
                                    <label for="lastname">Apellidos:</label>
                                    <input type="text" name="Apellidos" id="lastname" minlength="3" maxlength="20">
                                </li>

                                <li class="card-flex-4 d-flex-column">
                                    <label for="email">Correo electrónico:</label>
                                    <input type="email" name="Correo electrónico" id="email" minlength="10" maxlength="100" required>
                                </li>

                                <li class="card-flex-4 d-flex-column">
                                    <label for="Teléfono">Teléfono:</label>
                                    <input type="text" name="Teléfono" id="Teléfono" oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0,9);">
                                </li>
                            </ul>
                        </fieldset>

                        <fieldset class="d-flex-column form-quote-list-check">
                            <p class="card-text-title color-light-blue"><b>Servicios a cotizar</b></p>

                            <ul class="d-flex-column">
                                <li>
                                    <input type="radio" name="Servicio" id="service-1" value="Página web estándar">
                                    <label for="service-1">Página web estándar</label>
                                </li>

                                <li>
                                    <input type="radio" name="Servicio" id="service-2" value="Página web con catálogo de productos">
                                    <label for="service-2">Página web con catálogo de productos</label>
                                </li>

                                <li>
                                    <input type="radio" name="Servicio" id="service-3" value="Desarrollo de aplicación web">
                                    <label for="service-3">Desarrollo de aplicación web</label>
                                </li>

                                <li>
                                    <input type="radio" name="Servicio" id="service-4" value="Marketing digital">
                                    <label for="service-4">Marketing digital</label>
                                </li>

                                <li>
                                    <input type="radio" name="Servicio" id="service-5" value="Paquete taxi App">
                                    <label for="service-5">Paquete taxi App</label>
                                </li>

                                <li>
                                    <input type="radio" name="Servicio" id="service-6" value="Página web con manejador de contenido">
                                    <label for="service-6">Página web con manejador de contenido</label>
                                </li>

                                <li>
                                    <input type="radio" name="Servicio" id="service-7" value="Planes de hosting">
                                    <label for="service-7">Planes de hosting</label>
                                </li>

                                <li>
                                    <input type="radio" name="Servicio" id="service-8" value="Sistemas para negocio">
                                    <label for="service-8">Sistemas para negocio</label>
                                </li>

                                <li>
                                    <input type="radio" name="Servicio" id="service-9" value="Paquete e-commerce">
                                    <label for="service-9">Paquete e-commerce</label>
                                </li>
                            </ul>
                        </fieldset>

                        <fieldset>
                            <label for="quote-message"><p class="card-text-title color-light-blue"><b>Mensaje</b></p></label>
                            <textarea name="Mensaje" id="quote-message"></textarea>
                        </fieldset>

                        <fieldset class="d-flex-align-start gap-5">
                            <input type="checkbox" name="Condiciones de servicio" required>
                            <p class="text">He leído y acepto las <a href="https://inmedia.pe/condiciones-de-servicios" class="color-blue text-underline"><b>condiciones de servicios</b></a> de la empresa para el envío de la cotización solicitada, además autorizo a Movlim a contactarme para solicitar información relativa al producto a cotizar e inscribirme en la base de datos de la misma para fines de calidad del servicio.</p>
                        </fieldset>

                        <fieldset class="d-flex">
                            <button type="submit" class="button-link button-link-1 margin-left">
                                <p class="button-link-text">Solicitar cotización</p>
                                <i class="fa-solid fa-envelope"></i>
                            </button>
                        </fieldset>
                    </form>
                </div>
            </section>
        </div>
    </main>

    <div class="quote-modal-container">
        <div class="quote-modal">
            <i class="fa-solid fa-envelope"></i>
            
            <div class="d-flex-column">
                <p class="text-title color-blue">Solicitus enviada</p>
                <p class="text">En breve nos comunicaremos contigo para continuar con el proceso</p>
            </div>

            <i class="fa-solid fa-xmark quote-modal-close"></i>
        </div>
    </div>

    <?php include("../Componentes/Footer/Footer.php")?>

    <script src="../Componentes/Header/Header.js"></script>
    <script src="../Componentes/Footer/Footer.js"></script>
    <script src="./app.js"></script>
</body>
</html>