
let copiedMail = document.querySelector(".mail")

copiedMail.addEventListener('click', function(){

	navigator.clipboard.writeText(copiedMail.value);
	alert("Adresse mail copiée : " + copiedMail.value);
})