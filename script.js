// Comprobar sesión al cargar
        window.onload = function(){
            if(localStorage.getItem('usuarioActivo')){
                mostrarLinks();
            }
        }

        function registrar(){
            let usuario = document.getElementById('usuario').value;
            let password = document.getElementById('password').value;

            if(usuario && password){
                if(localStorage.getItem(usuario)){
                    document.getElementById('mensaje').innerText = "Usuario ya registrado.";
                } else {
                    localStorage.setItem(usuario, password);
                    document.getElementById('mensaje').innerText = "Usuario registrado, ya puedes iniciar sesión.";
                }
            } else {
                document.getElementById('mensaje').innerText = "Completa todos los campos.";
            }
        }

        function login(){
            let usuario = document.getElementById('usuario').value;
            let password = document.getElementById('password').value;

            let claveGuardada = localStorage.getItem(usuario);
            if(claveGuardada && claveGuardada === password){
                localStorage.setItem('usuarioActivo', usuario);
                mostrarLinks();
            } else {
                document.getElementById('mensaje').innerText = "Usuario o contraseña incorrectos.";
            }
        }

        function mostrarLinks(){
            document.getElementById('login-register').style.display = 'none';
            document.getElementById('links').style.display = 'block';
        }

        function cerrarSesion(){
            localStorage.removeItem('usuarioActivo');
            document.getElementById('login-register').style.display = 'block';
            document.getElementById('links').style.display = 'none';
        }