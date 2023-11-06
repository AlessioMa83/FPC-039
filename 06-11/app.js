let num1=1
let num2=2
let num3=3
let num4=4
let num5=5

let arrNum= [num1,num2,num3,num4,num5]
/* indice     0 1 2 3 4 */
let arrNum1= [1,2,3,4,5]

console.log(num5);
console.log(arrNum1[0]);
/*  let arrNuovo = array(1,2,3,4,5) */

let tipoDati = [1,2,3,'stringhe', true, false, null, undefined, {nome: 'Alessio', anni: 40}, [1,2,3], function (nome){alert(`ciao ${nome}`)}]
console.log(tipoDati[8].anni);

let arr3 = new Array(1,2,3,4,5)/* prog ogetti */

let vuoto = [];
console.log(vuoto.length);
 vuoto=['bmw']
vuoto[1]='audi'

vuoto[0]='fiat'
/* 
push => inserisce alla fine dell'array
unshift => inserisce all'inizio dell'array
pop => rimuove l'ultima posizione dell'array
shift => rimuove l'inizio dell'array

*/
/* metodi per inserire */
vuoto.push('bmw')/* verrà inserito in coda */
vuoto.unshift('ferrari')/* verrà inserito in testa */
console.log(vuoto);
/* metodi per rimuovere */
vuoto.pop()/* in automatico rimuove l'ultimo */
let rimosso = vuoto.pop()
console.log(`elemento ${rimosso.toUpperCase()} rimsso in maniera corretta `);
vuoto.shift()/* in automatico rimuove l'inizio */
 console.log(vuoto);

 let frutta = ['mela','Pera','Banana','arancia','pere']

 console.log(frutta.slice(1,4));/* da indice 1 fino all'indice 4 */
 console.log(frutta);

 console.log([...frutta].sort()); 
 console.log([...frutta].reverse());
 /* console.log(frutta.join(' ').toLowerCase().split().sort()); catena dei metofi */
 let frutta2 = [...frutta].join(' ')/* .toLowerCase().split() */
 frutta2 = frutta2.toLowerCase()/* trasforma in minuscolo gli elementi */
 frutta2 = frutta2.split(' ')/* divide i singoli elemnti */
 frutta2 = [...frutta2].sort()/* ordina i nuovi elemnti */
 console.log(frutta2);

 /* desrtucturing  */

 let car = ['bmw', 'audi', 'fiat','audi','mercedes']

 let [auto1,auto2,...restanti] = car/* destructuring + spred operator */
 console.log(typeof restanti);/* array */
 console.log(typeof auto1);/* stringa */
/*  console.log(car[1]); */

let numeriStringa = '123467810'

console.log(Array.from(numeriStringa));

console.log(Array.of(1,2,3,4,5));

/* array multidimensionale */
let multidimensionalArray = [
 /* 0 */ [1,/* 0 */ 2,/* 1 */ 3/* 2 */],
  /* 1 */[4,/* 0 */ 5,/* 1 */ 6/* 2 */],
  /* 2 */[7,/* 0 */ 8,/* 1 */ 9/* 2 */]
];

console.log(multidimensionalArray[1][1]);

/* object */
let utetente ={
    nome: 'Alessio',
    anni: 40,
    indirizzo:{via: 'via roma', citta: 'lecce',nCivico: 10},
    hobby:['videogiochi','musica'],
    /* funzione */
    presentazione: function(){
        alert(`ciao ${this.nome}`)
    }
}
/* console.log(utetente.presentazione()); */

console.log(utetente.anni);
let {citta, via, nCivico} = utetente.indirizzo
console.log(via);
let {nome, anni, hobby} = utetente
let [video, musica]= hobby 
console.log(video); 



