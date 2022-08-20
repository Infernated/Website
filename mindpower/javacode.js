function submited(){
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	if (name == "" | email == ""){
		alert("Input correct values!");
	}
	else{
		alert("Thank you "+name+" for subscribing to our newsletter!"+"\nWe will sent you more information on your mail:\n"+email);
	}
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
}

function searchbut(){
	var menu = document.getElementById("menu");
	menu.style.visibility = visible;
}
