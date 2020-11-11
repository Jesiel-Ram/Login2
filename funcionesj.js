function obtener(){

	usuario="Jesiel";
	correoo="neafzm3r@gmail.com";
	contrasena="300320jlg"

	  n=document.querySelector("#nom").
            value; 

	corre=document.querySelector("#cor").value;

	contrase=document.querySelector("#contra").value;

	/*if (n==usuario){
		if(corre=correoo){
			if(contrase=contrasena){

				alert("Datos correctos");

			}else{
				alert("Los datos son incorrectos ");
			}
		}else{

			alert("Uno de los datos es incorrecto ");
		}

	}else{
		alert("Dato incorrecto");
	}*/

	if(n==usuario&&corre==correoo&&contrase==contrasena){
		alert("Datos correctos");
	}else{
		alert("Datos incorrectos");
	}



}