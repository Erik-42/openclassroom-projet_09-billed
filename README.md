<div align="center">
<p>Projet OpenClassRoom</p>
</div>
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1>Billed</h1>
  <a href="https://github.com/Erik-42">
    <img src="./frontend/src/assets/images/logo/logo-billed.png" alt="Logo Billed" width="250">
  </a>
</div>
<p></p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li> <a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#testez-le-projet">Testez le projet</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![wakatime](https://wakatime.com/badge/github/Erik-42/openclassroom-projet_09-billed.svg)](https://wakatime.com/badge/github/Erik-42/openclassroom-projet_09-billed)

</div>

Débuggez et testez un SaaS RH

<p></p>
Il faut fiabiliser et améliorer le parcours employé est décrit dans ce <a href="./Documentions-projet/Billed+-+Description+des+fonctionnalités.pdf">document</a>.

Il correspond à la description pratique des besoins pour la mise en place de la fonctionnalité. Il faut le lire très attentivement.

Tu y trouveras notamment le <a href="https://openclassrooms.notion.site/a7a612fc166747e78d95aa38106a55ec?v=2a8d3553379c4366b6f66490ab8f0b90">rapport avec les bugs identifiés</a> (Kanban Notion) ainsi qu’un <a href="[text](Documentions-projet/Billed+-+E2E+parcours+administrateur.docx)">exemple</a> de plan de tests End-to-End.

L’essentiel a déjà été développé:

Le back-end des deux parcours est prêt en version alpha.

Côté front-end :
↳ Parcours administrateur : il a été testé, il faut désormais le débugger.

↳ Parcours employé : il faut entièrement le tester et le débugger.

Chrome Debugger à déjà été utiliser, il faudra continuer avec cet outil.

## Built with

<p> </p>
<a href=https://github.com/Erik-42?tab=repositories&q=&type=&language=html&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/html.svg'> </a>
<a href=https://github.com/Erik-42?tab=repositories&q=&type=&language=css&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/css.svg'> </a>
<a href= https://github.com/Erik-42?tab=repositories&q=&type=&language=sass&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/sass.svg'> </a>
<a href=https://github.com/Erik-42?tab=repositories&q=&type=&language=javascript&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/javascript.svg'> </a>
<a href=https://github.com/Erik-42?tab=repositories&q=&type=&language=reactjs&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/reactjs.svg'> </a>
<a href= https://github.com/Erik-42?tab=repositories&q=&type=&language=github&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/github.svg'> </a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation:

<div>
<a href=https://nodejs.org>NodeJS</a> & <a href=https://github.com/coreybutler/nvm-windows>NVM</a>
</div>
<div>
<a href=https://npmjs.com>Npm</a>
</div>

### Backend Dependencies:

    "bcrypt": "^5.0.1",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "helmet": "^4.6.0",
    "jsonwebtoken": "^9.0.2",
    "multer": "^1.4.3",
    "nvm": "^0.0.4",
    "sequelize": "^6.9.0",
    "short-uuid": "^4.2.0",
    "sqlite3": "^5.0.2"

### Frontend Dependencies:

    "eslint": "^9.9.1",
    "eslint-plugin-jest": "^28.8.3",
    "express": "^4.17.1",
    "global": "^4.4.0",
    "jquery": "^3.5.1",
    "path": "^0.12.7"

## Launching the project

Fork the repository<br>
Clone it on your computer.

### Backend

    Installer NVM (Node Version Manager) - https://github.com/nvm-sh/nvm
    changer la version de node pour une version compatible (par exemple 18.16.1) pous cela suivre les instruction de NVM:
        nvm install 18.16.1
        nvm use 18.16.1

Acceder au repertoire du projet :

`cd backend`

Installer les dépendances du projet :

`npm install`

Lancer l'API :

`npm run:dev`

Accéder à l'API :

L'api est accessible sur le port 5678 en local, c'est à dire http://localhost:5678

### Frontend

étape 1 - Lancer le backend :

Suivez les indications dans le README du projet backend.
étape 2 - Lancer le frontend :

Allez au repo cloné :

`cd frontend`

Installez les packages npm (décrits dans package.json) :

`npm install`

Installez live-server pour lancer un serveur local :

`npm install -g live-server`

Lancez l'application :

`live-server`

Puis allez à l'adresse : http://127.0.0.1:8080/
Comment lancer tous les tests en local avec Jest ?

`npm run test`

Comment lancer un seul test ?

Installez jest-cli :

`npm i -g jest-cli`
`jest src/**tests**/your_test_file.js`

Comment voir la couverture de test ?

http://127.0.0.1:8080/coverage/lcov-report/

### Comptes et utilisateurs :

Vous pouvez vous connecter en utilisant les comptes:

    administrateur :

    utilisateur : admin@test.tld
    mot de passe : admin

<p></p>

    employé :

    utilisateur : employee@test.tld
    mot de passe : employee

## Testez le projet

Github: [https://erik-42.github.io/openclassroom-projet_09-billed/](https://erik-42.github.io/openclassroom-projet_09-billed/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Liste des bugs

### Backend

- 1 Connexions

  - 1.1 La connexion Administrateur ne fonctionne pas.

- 2 Note de frais

  - 2.1 Les justificatifs ne sont pas centré dans la modal.
  - 2.2 Les champs TVA ne sont pas clairs.
  - 2.3 Le taux de TVA devrait être une liste avec les différents taux de TVA.
  - 2.4 Certains justificatif n'apparraissent pas.

- 3 Navigation

  - 3.1 L'enveloppe représente une nouvelle note de frais, ce n'est pas le bon icone.
  - 3.2 Il n'y a pas de bouton retoursur les pages

- 4 Code

  - 4.1 Incorrect use of `<label for=FORM_ELEMENT><br>`<br>
    The label's for attribute doesn't match any element id. This might prevent the browser from correctly autofilling the form and accessibility tools from working correctly.

    To fix this issue, make sure the label's for attribute references the correct id of a form field.

### Frontend

- 1
  - 1.1
- 2
  - 2.1

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

Formation OpenClassRoom Développeur d'application - JavaScript React

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

<div align="center">

[![GitHub followers][github followers-shield]][github followers-url]
[![Stargazers][stars-shield]][stars-url]
[![GitHub repo][github repo-shield]][github repo-url]
[![wakatime](https://wakatime.com/badge/user/f84d00d8-fee3-4ca3-803d-3daa3c7053a5.svg)](https://wakatime.com/@f84d00d8-fee3-4ca3-803d-3daa3c7053a5)

[![Github Badge][github badge-shield]][github badge-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<a href = 'https://basillecorp.dev'> <img width = '32px' align= 'center' src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/portfolio.png"/> basillecorp.dev</a>

mesen.erik@gmail.com

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: ./images/screenshot.png
[wakatime-shield]: https://wakatime.com/badge/user/f84d00d8-fee3-4ca3-803d-3daa3c7053a5.svg
[wakatime-url]: https://wakatime.com/@f84d00d8-fee3-4ca3-803d-3daa3c7053a5
[github badge-shield]: https://img.shields.io/badge/Github-Erik--42-155?style=for-the-badge&logo=github
[github badge-url]: https://github.com/Erik-42
[github repo-shield]: https://img.shields.io/badge/Repositories-48-blue
[github repo-url]: https://github.com/Erik-42/Erik-42?tab=repositories
[github repo file count (file type)-shield]: https://img.shields.io/github/directory-file-count/Erik-42/openclassroom-projet_09-billed
[github repo file count (file type)-url]: https://github.com/directory-file-count/Erik-42/openclassroom-projet_09-billed
[github followers-shield]: https://img.shields.io/github/followers/Erik-42
[github followers-url]: https://github.com/followers/Erik-42
[github all releases-shield]: https://github.com/Erik-42/openclassroom-projet_09-billed/total
[github all releases-url]: https://github.com/Erik-42/openclassroom-projet_09-billed/releases
[github repo size-shield]: https://img.shields.io/github/repo-size/Erik-42/openclassroom-projet_09-billed
[github repo size-url]: https://github.com/Erik-42/openclassroom-projet_09-billed
[contributors-shield]: https://img.shields.io/github/contributors/Erik-42/openclassroom-projet_09-billed
[contributors-url]: https://github.com/Erik-42/openclassroom-projet_09-billed/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Erik-42/openclassroom-projet_09-billed
[forks-url]: https://github.com/Erik-42/openclassroom-projet_09-billed/forks
[stars-shield]: https://img.shields.io/github/stars/Erik-42
[stars-url]: https://github.com/Erik-42?tab=stars
[issues-shield]: https://img.shields.io/github/issues-raw/Erik-42/openclassroom-projet_09-billed
[issues-url]: https://github.com/Erik-42/openclassroom-projet_09-billed/issues
[license-shield]: https://img.shields.io/github/license/Erik-42/openclassroom-projet_09-billed
[license-url]: https://github.com/Erik-42/openclassroom-projet_09-billed/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/erik-mesen/
[html-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[html-url]: https://html.spec.whatwg.org/
[css-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[css-url]: https://www.w3.org/TR/CSS/#css
[javascript-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[javascript-url]: https://www.ecma-international.org/publications-and-standards/standards/ecma-262/
