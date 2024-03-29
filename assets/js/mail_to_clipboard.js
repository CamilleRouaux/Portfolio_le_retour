
let copiedMail = document.querySelector(".mail")

copiedMail.addEventListener('click', function(){

	navigator.clipboard.writeText(copiedMail.value);
	alert("Adresse mail copiée : " + copiedMail.value);
})

let copiedMailFooter = document.querySelector(".mail_footer")

copiedMailFooter.addEventListener('click', function(){

	navigator.clipboard.writeText(copiedMailFooter.value);
	alert("Adresse mail copiée : " + copiedMailFooter.value);
})