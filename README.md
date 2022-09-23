## Démarrer projet

## BACK-END

### `cd backend`

Ouvrez votre terminal et dirigez vous dans le répertoire "backend" avec la commande : cd backend

### `npm install`

Une fois dans le répertoire, lancez la commande : npm install
=> [fichier npm_install](./captures_ecran/installation_dependances/step1.png)
Un dossier "node_modules" sera créé et toutes les dépendances nécessaires au projet seront installées
=> [fichier npm_install](./captures_ecran/installation_dependances/step2.png)

### `npm start`

Ensuite, lancez la commande : npm start
Le serveur sera lancé sur [http://localhost:3000] sur votre navigateur

## FRONT-END

### `cd frontend`

Ouvrez un nouveau terminal et dirigez vous dans le répertoire "frontend" avec la commande : cd frontend

### `npm install`

Une fois dans le répertoire, lancez la commande : npm install
Un dossier "node_modules" sera créé et toutes les dépendances nécessaires au projet seront installées

### `npm start`

Ensuite, lancez la commande : npm start
Votre terminal vous indiquera qu'un processus est déjà lancé sur le port 3000 (le serveur backend)
Il vous proposera donc le lancer sur le port 3001 en tapant sur : Y
Le front sera donc lancé sur [http://localhost:3001] sur votre navigateur

## Captures d'écran

Vous trouverez différentes captures d'écran illustrant comment utiliser le programme et les résultats obtenus
Veuillez ouvrir le dossier [captures_ecran](./captures_ecran)
Et les différents sous-dossiers :
=> [dossier algoJS](./captures_ecran/algoJS/)
=> [dossier back](./captures_ecran/back/)
=> [dossier front](./captures_ecran/front/)
=> [dossier front](./captures_ecran/installation_dependances/)
=> [fichier terminaux_back+front](./captures_ecran/terminaux_back%2Bfront.png)

## Utilisation du programme

Dirigez-vous sur le front React [http://localhost:3001]
Inscrivez le score désiré (exemple : TeamX => 48 TeamY => 60)

Résultat obtenu sur le front
=> [fichier résultat_front](./captures_ecran/front/results.png)

Résultat obtenu sur le serveur back
=> [fichier résultat_back](./captures_ecran/back/score_post_backend_axios.png)
En retournant sur le terminal de commande et grâce au paquet "nodemon"
les résultats obtenus sont rafraîchit en temps réel et visibles côté back

## Dossier algoJS

En alternative, vous pouvez vous rendre dans le dossier
=> [dossier algoJS](./captures_ecran/algoJS/)
Vous y trouverez l'algorithme travaillé sans React
=> [fichier index.js](./algoJS/index.js)

Pour ouvrir un serveur dans le but d'afficher ce petit programme alternatif
Si vous ne possédez pas l'extension Live Server,
veuillez la télécharger dans l'onglet "extensions de votre IDE"
=> [image Live Server](./captures_ecran/algoJS/extension_live_server.png)

Ensuite, à la racine du projet "/weekera"
Cliquez sur le bouton Go Live (de l'extension Live Server)
=> [image Live Server](./captures_ecran/algoJS/open_with_live_server.png)
Ou faites un clic droit : Open With Live Server depuis le fichier HTML
=> [fichier index.html](./algoJS/index.html)

Enfin, vous pourrez tester l'algorithme où le Point After Touchdown est mieux implémenté
=> [image algo](./captures_ecran/algoJS/touchdown_pat.png)
Field Goal
=> [image algo](./captures_ecran/algoJS/touchdown_fieldgoal.png)
