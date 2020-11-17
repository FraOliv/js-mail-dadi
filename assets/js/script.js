// creo due variabili una per il risultato che vogliamo ottenere e una per il bottone di verifica.

var risultato = document.getElementById ("risultato");
var btn = document.getElementById ("btnVerifica");

btn.addEventListener("click", function () {

//mail utente

var mailUser = document.getElementById ("mailUser").value;

console.log("mail utente", mailUser);

//creo il mio array per le mail

var mail = ["pippo@gmail.com", "pluto@gmail.com", "topolino@gmail.com", "paperino@gmail.com", "paperina@gmail.com", "topolina@gmail.com", "qui@gmail.com", "quo@gmail.com", "qua@gmail.com", "ziopaperone@gmail.com" ]; 


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

  risultato.innerHTML = "Complimenti! La mail inserita è valida!!!";

  console.log(risultato.innerHTML);

} else {

  risultato.innerHTML = "Attenzione! La mail inserita non è corretta!!!";

  console.log(risultato.innerHTML);

}

});
