// Import stylesheets
import './style.css';

const exo1tab1 = [1, 2, 3, 4, 5, 6, 7, 8];
const exo1tab2 = [1, 2, 3, 4, 4, 6, 7, 8];
const exo1tab3 = [1, 2, 3, 4, 6, 6, 7, 8];
const exo1tab4 = [1, 2, 3, 4, 6, 6, 7, 8];
//Ecrire une fonction permettant de comparer deux tableaux, cette fonction doit retourner true si les tableaux sont identiques, et false si c'est l'inverse

function onEstJumeaux(tableau1: number[], tableau2: number[]): boolean {
  //
  // Ici le code doit être jeune padawan, si en dehors de cette fonction tu codes, ton maître déprimera
  //
}

console.log(onEstJumeaux(exo1tab1, exo1tab2));
console.log(onEstJumeaux(exo1tab2, exo1tab2));
console.log(onEstJumeaux(exo1tab3, exo1tab2));
console.log(onEstJumeaux(exo1tab4, exo1tab3));

const exo2tab1 = [1, 0, 0, 1, 0, 0, 1]; // palindrome
const exo2tab2 = [1, 0, 0, 0, 0, 1]; // palindrome
const exo2tab3 = [1, 0, 1, 0, 0, 1]; // pas palindrome

// Ecrire une fonction permettant de déterminer si ce tableau est un palindrome ou non (un palindrome est une chaine de caractère qui se lis dans les deux sens, "level" est un palindrome, "oui" donnerait "iuo" donc pas un palindrome)
// NB: Tu as le droit de me détester :D

function palindromeJeSuis(value: number[]): boolean {
  //
  // Code ici, pas ailleurs, ici (le mot "ici" est un palindrome :D)
  //
}

console.log(palindromeJeSuis(exo2tab1));
console.log(palindromeJeSuis(exo2tab2));
console.log(palindromeJeSuis(exo2tab3));
