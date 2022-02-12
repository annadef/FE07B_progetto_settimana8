// Prima classe
var FirstUser = /** @class */ (function () {
    // Dichiarazione del costruttore
    function FirstUser(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    // Implementazione metodo ricarica
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    // Implementazione metodo chiamata
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.credito -= (0.20 * minutiDurata);
        this.numeroChiamate++;
    };
    // Implementazione metodo numero 404 (return)
    FirstUser.prototype.numero404 = function () {
        return this.credito;
    };
    // Implementazione metodo getNumeroChiamate (return)
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    // Implementazione metodo azzeraChiamate
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
// Implementazione della classe
var utenteUno = new FirstUser(65, 3);
// Utilizzo dei metodi giusti per effettuare 2 ricariche e 2 chiamate
// console.log():
/* "primo utente"
"valore carica disponibile: " -> metodo
"numero chiamate: " -> metodo
"dopo l'azzeramento"
"numero chiamate: " -> metodo */
console.log('--- PRIMO UTENTE ---');
utenteUno.ricarica(10);
utenteUno.chiamata(2);
console.log('Valore della carica disponibile: ' + utenteUno.numero404());
console.log('Numero chiamate: ' + utenteUno.numeroChiamate);
console.log('dopo l\'azzeramento delle chiamate:');
utenteUno.azzeraChiamate();
console.log('Numero chiamate: ' + utenteUno.numeroChiamate);
// Seconda classe e terza classe sono IDENTICHE alla prima
var SecondUser = /** @class */ (function () {
    function SecondUser(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate++;
        this.credito -= (0.20 * minutiDurata);
    };
    SecondUser.prototype.numero404 = function () {
        return this.credito;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondUser;
}());
var utenteDue = new SecondUser(38, 3);
console.log('--- SECONDO UTENTE ---');
utenteDue.ricarica(30);
utenteDue.chiamata(2);
console.log('Valore della carica disponibile: ' + utenteDue.numero404());
console.log('Numero chiamate: ' + utenteDue.numeroChiamate);
console.log('dopo l\'azzeramento delle chiamate:');
utenteDue.azzeraChiamate();
console.log('Numero chiamate: ' + utenteDue.numeroChiamate);
var ThirdUser = /** @class */ (function () {
    function ThirdUser(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate++;
        this.credito -= (0.20 * minutiDurata);
    };
    ThirdUser.prototype.numero404 = function () {
        return this.credito;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
var utenteTre = new ThirdUser(40, 2);
console.log('--- TERZO UTENTE ---');
utenteTre.ricarica(30);
utenteTre.chiamata(5);
console.log('Valore della carica disponibile: ' + utenteTre.numero404());
console.log('Numero chiamate: ' + utenteTre.numeroChiamate);
console.log('dopo l\'azzeramento delle chiamate:');
utenteTre.azzeraChiamate();
console.log('Numero chiamate: ' + utenteTre.numeroChiamate);
