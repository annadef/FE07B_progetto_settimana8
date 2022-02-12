// Interfaccia smartphone
interface Smartphone {
    // Inserire proprietà interfaccia
    credito: number;
    numeroChiamate: number;
    // Dichiarare i metodi
    ricarica(unaRicarica: number): void;
    chiamata(minutiDurata: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}

// Prima classe
class FirstUser implements Smartphone {
    // Modificatori di accesso sulle proprietà
    public numeroChiamate: number
    public credito: number
    // Dichiarazione del costruttore
    constructor(_credito: number, _numeroChiamate: number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    // Implementazione metodo ricarica
    public ricarica(unaRicarica: number): void {
        this.credito += unaRicarica;
    }
    // Implementazione metodo chiamata
    public chiamata(minutiDurata: number): void {
        this.credito -= (0.20 * minutiDurata);
        this.numeroChiamate++;
    }
    // Implementazione metodo numero 404 (return)
    public numero404(): number {
        return this.credito;
    }
    // Implementazione metodo getNumeroChiamate (return)
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    // Implementazione metodo azzeraChiamate
    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

// Implementazione della classe
const utenteUno = new FirstUser(65, 3);
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
class SecondUser implements Smartphone {

    public credito: number;
    public numeroChiamate: number;

    constructor(_credito: number, _numeroChiamate: number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }

    public ricarica(unaRicarica: number): void {
        this.credito += unaRicarica;
    }

    public chiamata(minutiDurata: number): void {
        this.numeroChiamate++;
        this.credito -= (0.20 * minutiDurata);
    }

    public numero404(): number {
        return this.credito;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
    
}

const utenteDue = new SecondUser(38, 3);

console.log('--- SECONDO UTENTE ---');
utenteDue.ricarica(30);
utenteDue.chiamata(2);
console.log('Valore della carica disponibile: ' + utenteDue.numero404());
console.log('Numero chiamate: ' + utenteDue.numeroChiamate);
console.log('dopo l\'azzeramento delle chiamate:');
utenteDue.azzeraChiamate();
console.log('Numero chiamate: ' + utenteDue.numeroChiamate);



class ThirdUser implements Smartphone {

    public credito: number;
    public numeroChiamate: number;

    constructor(_credito: number, _numeroChiamate: number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }

    public ricarica(unaRicarica: number): void {
        this.credito += unaRicarica;
    }

    public chiamata(minutiDurata: number): void {
        this.numeroChiamate++;
        this.credito -= (0.20 * minutiDurata);
    }

    public numero404(): number {
        return this.credito;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
    
}

const utenteTre = new ThirdUser(40, 2);

console.log('--- TERZO UTENTE ---')
utenteTre.ricarica(30);
utenteTre.chiamata(5);
console.log('Valore della carica disponibile: ' + utenteTre.numero404());
console.log('Numero chiamate: ' + utenteTre.numeroChiamate);
console.log('dopo l\'azzeramento delle chiamate:');
utenteTre.azzeraChiamate();
console.log('Numero chiamate: ' + utenteTre.numeroChiamate);