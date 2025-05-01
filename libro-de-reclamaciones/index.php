<!DOCTYPE html>
<html lang="es">
<head>
    <title>Libro de reclamaciones | Inmedia Marketing Web</title>
    <?php include("../Componentes/Head/Head.php")?>
    <link rel="stylesheet" href="https://inmedia.pe/libro-de-reclamaciones/style.css">
</head>
<body>

    <?php include("../Componentes/Header/Header.php")?>

    <main>
        <div class="block-container">
            <section class="block-content d-flex-column gap-20">
                <div class="block-title-container">
                    <p class="block-title">Libro de reclamaciones</p>
                </div>

                <form action="https://formspree.io/f/mjkbzjwa" id="formulario-de-reclamos" method="post" class="complaint-form">
                    <fieldset class="complaint-target complaint-target-1">
                        <p class="text"><b>Nombre completo</b></p>
                        <input type="text" name="Nombre completo" required>
                    </fieldset>

                    <fieldset class="complaint-target complaint-target-2">
                        <p class="text"><b>Domicilio</b></p>
                        <input type="text" name="Domicilio" required>
                    </fieldset>

                    <fieldset class="complaint-target complaint-target-3">
                        <p class="text"><b>DNI</b></p>
                        <input type="text" name="DNI" oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0,7);" required>
                    </fieldset>

                    <fieldset class="complaint-target complaint-target-4">
                        <p class="text"><b>Celular</b></p>
                        <input type="text" name="Celular" oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0,9);" required>
                    </fieldset>

                    <fieldset class="complaint-target complaint-target-5">
                        <p class="text"><b>Correo electrónico</b></p>
                        <input type="email" name="Correo electrónico" required>
                    </fieldset>
                    
                    <fieldset class="complaint-target complaint-target-6">
                        <p class="text"><b>Identificación del bien contratado</b></p>
                        <select name="Identificación del bien contratado" required>
                            <option value="Seleccione una opción">Seleccione una opción</option>
                            <option value="Diseño web">Diseño web</option>
                            <option value="Marketing web">Marketing web</option>
                            <option value="Diseño gráfico">Diseño gráfico</option>
                            <option value="Gestión de redes">Gestión de redes</option>
                            <option value="Sistemas a medida">Sistemas a medida</option>
                            <option value="Aplicaciones móviles">Aplicaciones móviles</option>
                            <option value="Video marketing">Video marketing</option>
                            <option value="Hosting">Hosting</option>
                            <option value="Servidores VPS">Servidores VPS</option>
                            <option value="Servidores dedicados">Servidores dedicados</option>
                        </select>
                    </fieldset>

                    <fieldset class="complaint-target complaint-target-7">
                        <p class="text"><b>N° de contrato</b></p>
                        <input type="text" name="N° de contato" oninput="this.value = this.value.replace(/[^0-9]/g, '')" required>
                    </fieldset>

                    <fieldset class="complaint-target complaint-target-8">
                        <p class="text"><b>Descripción</b></p>
                        <input type="text" name="Descripción" required>
                    </fieldset>

                    <fieldset class="complaint-target complaint-target-9">
                        <p class="text"><b>Detalle de reclamo</b></p>
                        <textarea name="Detalle de reclamo" required></textarea>
                    </fieldset>

                    <fieldset class="complaint-target complaint-target-10">
                        <p class="text"><b>Acciones realizadas por el proveedor</b></p>
                        <textarea name="Acciones realizadas por el proveedor" required></textarea>
                    </fieldset>

                    <fieldset class="complaint-target complaint-form-11 d-flex">
                        <button type="submit" class="button-link button-link-1 margin-left" title="Enviar reclamo">
                            <p class="button-link-text">Enviar reclamo</p>
                            <i class="fa-solid fa-envelope"></i>
                        </button>
                    </fieldset>
                </form>
            </section>
        </div>
    </main>

    <div class="complaint-modal-container">
        <div class="complaint-modal">
            <i class="fa-solid fa-envelope"></i>
            
            <div class="d-flex-column">
                <p class="text-title color-blue">Enviado</p>
                <p class="text">Tu reclamo fue enviado correctamente, pronto nos comunicaremos contigo para solucionarlo.</p>
            </div>

            <i class="fa-solid fa-xmark complaint-modal-close"></i>
        </div>
    </div>

    <?php include("../Componentes/Footer/Footer.php")?>
    
    <script src="../Componentes/Header/Header.js"></script>
    <script src="../Componentes/Footer/Footer.js"></script>

    <script src="./app.js"></script>
</body>
</html>