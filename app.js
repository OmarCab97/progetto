//variabili
// var,let,const

//vecchia variabile: var
//nuove variabili: let,const


var eta='Mario';
console.log(eta);

var dio='madonna';
console.log(dio);

var percentuale= '4 percento';
console.log(percentuale);

var circostanza='casuale';
console.log(circostanza);

var numeri='tutti';
console.log(numeri);

let materiale= 'cemento';
console.log(materiale);

//SPIEGAZIONE 


const nome='mario';   
console.log(typeof nome);    

const numero= '2';
console.log(typeof numero);

const eMaggiorenne=false;
console.log(typeof eMaggiorenne);

let anonimo;
console.log(anonimo)

const simbolo=Symbol(1);
console.log(simbolo);


//--------------------
//Dati di riferimento-Reference type

//Arrays

const nomi= ['andrea','billy','gionny'];
console.log(nomi);


//Oggetti

const persona={
    name:'billy',
    eta:25,
}
persona.name='jonny';

console.log(persona);


//TYPE CONVERSION

//1. Numero a stringa



valor=String(5);

console.log(valor);
console.log(typeof valor);

//2. Boolean a stringa

valor=String(true);

console.log(valor);
console.log(typeof valor);

//toString

valore=(5).toString();

//3. Da stringa a valore

valore=Number('5');

//4. Boolean a numero

valore=Number(false)

//5.Stringa a numero

valore= parseInt('100.3');


//TYPE COERCTION= Unione di dati

const name='Mario';
const surname='Rossi';
const eta2=24;

console.log(name+'      '+surname+eta2);

//Esempio: Sono Marco Rossi e ho 21 anni.sono Maschio? True

const nome1= 'marco';
const cognome='rossi';
const eta3=23;
const emaschio= false;

console.log('sono' +" "+nome1 +' '+cognome+" "+'e ho'+" "+eta3+" "+'anni'+" "+ 'sono maschio?'+" "+emaschio);
console.log(typeof eta3);
console.log(typeof emaschio)






const nome25= ['Carlo','Massimo','Piero'];
console.log(nome25);

const profilo='destra'
const altezza=170
const surname456='pyrex'

console.log('profilo'+'altezza'+'surname456');

let name35='Omar';
console.log(name35);

const statura='alto'
const taglia='magra' 
const altezza453= 175
const domanda= false

console.log(statura+" "+taglia+" "+altezza453+" "+domanda)

//NUMERI----------------NUMERI

const num1= 278
const num2= 5

let risultato;


risultato= num1+num2;
risultato=num1-num2;
risultato=num1*num2;
risultato=num1%num2; //25 essendo un dividendo di 5 dara' 0 


//VALORI MATH----------
risultato= Math.PI //risultato PI GRECO
risultato=Math.round(5.6467) //arrotonda a 6
risultato= Math.ceil(42.7) //arrotonda a 43
risultato= Math.floor(43.4) //arrotonda per difetto
risultato= Math.sqrt(25) //restituisce radice quadrata
risultato= Math.abs(-5.9) //numeri negativi diventano positivi
risultato= Math.pow(10, 4) //potenza 
risultato= Math.min(2,4,567) //restituisce il piu' basso
risultato= Math.max(2,4,567)//restituisce il piu' alto
risultato=Math.random(2,4,567,87,97)//restituisce numeri random



console.log(risultato);

//STRINGHE:

const nome478= 'Gesualdo';
let risultato444;

risultato444= nome478.length //Gesualdo=8 lettere
risultato444= nome478.toUpperCase(); //ritorna gesualdo in Maiuscolo
risultato444= nome478.toLowerCase();//ritorna gesualdo in minuscolo
risultato444= nome478[2];//ritorna la seconda lettera che in Gesualdo e' 'S'
//LA PRIMA LETTERA DI UN ARRAY E' CONSIDERATA 0 LA SECONDA 1 e via dicendo
risultato444= nome478.indexOf('s');//restituisce l'indice
risultato444= nome478.charAt(3)
risultato444= nome478.substring(0, 2)//restituisce le lettere da 0 a 2





console.log(risultato444);

//ARRAY-struttura di dati

const nome100= 'Matteo';
const nome200= 'Riccardo';
const nome300= 'Paolo';
                  //0      //1          //2
const nomiDati= ['Matteo','Riccardo','Paolo'];

const mix= ['stringa',45,true,false];

             

nomiDati[1]= 'nuovo nome'

console.log(nomiDati.length);
console.log(nomiDati);

//ARRAYS - Metodi

const colori= ['rosso','blu','verde'];

//push=aggiunge
colori.push('rosa');
//pop=rimuove ultimo elemento 'verde'
colori.pop();
//unshift= aggiunge elemento all'inizio ''prima di rosso'
colori.unshift('rosa');
//shift=elimina primo elemento
colori.shift();
//indexof=indice di verde=2
colori.indexOf('verde');
//slice=
colori.slice(0, 2);
//concat=concatenare elementi
const arr1=['facebook','instagram'];
const arr2= ['twitter'];

console.log(arr1.concat(arr2));


console.log(colori.indexOf('verde'));

const colori650=['Magenta','Nero','Corallo','Fucsia'];

colori650.shift();

//OGGETTI-Struttura di dati

const arr=['valore1','valore2'];

const persone={
    //chiave  valore
     nome: 'Billy',
     eta: 25,
     indirizzo: {citta:'roma',via: 'viale del carro'},
     emaggiorenne: true,
     coloripreferiti: ['rosso','blu'],
    
}

//prendere valore di un array

console.log(persone.eta) //restituisce eta
console.log(persone.indirizzo.via)
console.log(persone['coloripreferiti'][0]) //0 e' rosso

//metodo alternativo per creare oggetti

const persona23= {};


persona23.etnia='Caucasico';

console.log(persona23)


///DATE

let oggi= new Date();
let compleanno= new Date ('08-07-1997-10:25:00');

compleanno.setDate(9)
compleanno.setFullYear(1999)


let valorr;


valori= oggi.getMonth()
console.log(compleanno)
console.log(valori)

//OPERATORI BASE

let x = 20;
//no dry
x++
// dry=don't repeat yourself
x*=2
console.log(x)

//COMPARAZIONE
const maggioreEta=18
const etaBilly= 15

console.log(maggioreEta>etaBilly) //comparazione
console.log

//IF ELSE 

//if (condizione){
//    'fai qualcosa'
// } else {
 //   'faiqualcosaltro'
// }

const maggiorEta1= 18;
const etaBilly1= 15;

if (maggiorEta1<11){
    console.log('e un adulto')
    
}else(
    console.log('e un bambino')
)

// AND &&

if(etaBilly<11){
    console.log('billy e un bambino')

} else if(etaBilly<11 && etaBilly<19){
    console.log('billy e un ragazzo')
} else{
    console.log('billy e un adulto')
}    

// or 
const eta35= 101

if(eta35<3|| eta>99){
    console.log('non puoi giocare')
} else{
    console.log('puoi giocare')
}

// NOT !

const id= 100 

if(id===100) {
    console.log('id e uguale a 100')
}
    else {
        console.log('id non e 100')
    }

    //ternary operator

    const id1=100

    id1==100 ? console.log('id1 e 100') : console.log('id1 non e 100')


    // SWITCH 

    const nome2= 'billy2'

    switch(nome2) {
        case 'jonny2':
        console.log ('nome e jonny2')

        break;
        
        case 'gesualdo2':
        console.log('nome e gesualdo2')

        case 'billy2':
            console.log ('nome e marco')


        default: console.log('nome non e jonny2,gesualdo2,marco')
            break; 
    }

    //FUNZIONI

    //function declaration

    function saluta() {
        console.log('ciao a tutti')
    }

    saluta();

    function saluta(_nome,_cognome) {
        console.log ('ciao'+ ' '+'paolo')
    }

    saluta('manuel','rossi')

    //function expression

    const doppio= function(x) {
        return x * 2
    }
    
    console.log(doppio(35)); 

    //IFEE (immediately invoked funtction expression)

    (function saluta(nome45 ) 
    {
        console.log('hello'+nome45)
    })('Gianni')

    //property methods o metodi
    
    const persona60={
        saluta: function(_nome,_cognome){
            console.log('ciao a tutti io sono'+ _nome+' '+'_cognome')
        }
    }

    persona60.saluta('mario', 'rossi')

    //LOOP-for loop

for (let i= 0; i<10; i++) {
    if(i===8) {
        console.log('mi piace 8')
    }
        console.log(i)
    }

    //Loop-while loop

    let i=0;

    while(i<10){
        console.log(i);
        i++
    }

    let ii= 1;

    //DO WHILE
    do{
        console.log(i);
        ii++
    }

    while(ii<15)

    
    
    const fruits=['mela','banana','kiwi'];

    

    for(let=i=0; i<fruits.length; i++)
{
    console.log(fruits[i])
}




    