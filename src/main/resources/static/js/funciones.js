
function guardar() {

    let names = document.getElementById('name').value.trim();
    let email = document.getElementById('inputEmail').value.trim();
    let password = document.getElementById('inputPassword').value.trim();
    let password2 = document.getElementById('inputPassword2').value.trim();
    let cajamensaje = document.getElementById('alert');


    if (names != "" && email != "" && password != "" && password2 != "") {


        if (password != password2) {

            /* alert("constraseña no coincide"); */
            cajamensaje.innerHTML = '<span class="alert"> Las contraseñas no coinciden</span>'


        } else {
            $.ajax({
                url: 'http://localhost:8080/api/user/new',
                data: JSON.stringify({
                    "email": email,
                    "password": password,
                    "name": names
                }),
                type: 'POST',
                contentType: 'application/json',
                dataType: 'json',
                error: function (response) {
                    alert("Usuario no resgistrado")
                    console.log(response);
                },
                success: function (result) {
                    console.log(result);
                    if (result.id == null) {
                        alert("ya existe email");
                        $("#name").focus();
                        $("#email").focus();
                    } else {
                        alert("La cuenta se creo correctamente.");
                    }
                    $(':input').val(" ");
                    $('#name').focus();

                }

            });
        }


    }
    return false;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(1);
})

function login() {
    let email = document.getElementById('inputEmail').value.trim();
    let password = document.getElementById('inputPassword').value.trim();
    if (email != "" && password != "") {
        $.ajax({
            url: 'http://localhost:8080/api/user/' + email + '/' + password,
            contenType: 'application/json',
            dataType: 'json',
            error: function (response) {
                alert("Usuario no existe")
                console.log(response);
            },

            success: function (result) {
                console.log(result);
                console.log(result.id);
                if (result.id == null) {
                    alert("No existe un usuario con estos datos");
                } else {
                    alert("Se ha registrado correctamente" + " " + result.name);
                }
                $(':input').val("");
                $('#email').focus();
            }

        });
        return false;
    }
}