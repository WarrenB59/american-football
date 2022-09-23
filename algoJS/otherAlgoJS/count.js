/* 
Fonction Javascript afin de trouver
toutes les combinaisons d'un score donné
==========
Aucun fichier HTML associé !
Code à exécuter dans le terminal avec Code Runner
*/

// Score voulu à entrer dans variable "n"
let n = 5;
let size = 100;
let arr = new Array(size).fill(0);

function printCompositions(arr, n, i) {
  let MAX_POINT = n;
  if (n == 0) {
    printArray(arr, i);
  } else if (n > 0) {
    for (let k = 1; k <= MAX_POINT; k++) {
      arr[i] = k;
      printCompositions(arr, n - k, i + 1);
    }
  }
}

function printArray(arr, m) {
  for (let i = 0; i < m; i++) console.log(arr[i] + " ");

  console.log();
  ("<br/>");
}

console.log(
  "Different compositions formed " + "by 1, 2 and 3 of " + n + " are" + "<br/>"
);
printCompositions(arr, n, 0);
