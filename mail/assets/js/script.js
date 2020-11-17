// creo due variabili una per il risultato che vogliamo ottenere e una per il bottone di verifica.

var risultati = document.getElementById ("risultati");
var btn = document.getElementById ("btnVerifica");

btn.addEventListener("click", function () {

//mail utente

var mailUser = document.getElementById ("mailUser").value;

console.log("mail utente", mailUser);

//creo il mio array per le mail

var mail = [ "paperino@gmail.com", "paperina@gmail.com", "topolina@gmail.com", "qui@gmail.com", "quo@gmail.com", "qua@gmail.com", "ziopaperone@gmail.com"]; 


console.log(mail);

// verifico la mail utente con le mails dell'array

var ok = 0;

for (var i = 0; i < mail.length; i++ ) {

  console.log(mail[i]);

  if (mailUser == mail[i]) {

    ok++;

  }

};

console.log(ok);

if (ok > 0) {

  risultati.innerHTML = "Complimenti! La mail inserita è valida!!!";

  console.log(risultati.innerHTML);

} else {

  risultati.innerHTML = "Attenzione! La mail inserita non è corretta!!!";

  console.log(risultati.innerHTML);

}

});
