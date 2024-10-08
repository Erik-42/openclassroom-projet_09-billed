# Liste des bugs

<a name="readme-top"></a>

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>

### Liste de bugs répertoriés par mes soins

## Mise en place

- 1 Commande de lancement du serveur Backend érronée:

      npm run run:dev

  au lieu de

      npm run dev

- 2

  ```bash
  npm install jest-environment-jsdom
  ```

  dans le fichier `jest.config.js`

```js
const config = {
	testEnvironment: "jest-environment-jsdom",
};
```

- 2.1

```bash
npm audit fix --force
```

- 2.2
  fix available via `npm audit fix --force`

Will install express@2.5.11, which is a breaking change
node_modules/cookie
express >=3.0.0-alpha1
Depends on vulnerable versions of cookie
node_modules/express

4 vulnerabilities (1 moderate, 3 high)

- 2.3
  To address all issues (including breaking changes), run:
  npm audit fix --force

fix available via `npm audit fix --force`
Will install express@2.5.11, which is a breaking change
node_modules/cookie
express >=3.0.0-alpha1
Depends on vulnerable versions of cookie
node_modules/express

2 low severity vulnerabilities

## Backend

<br>

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

  - 4.1 Incorrect use of `<label for=FORM_ELEMENT><br>`
    The label's for attribute doesn't match any element id. This might prevent the browser from correctly autofilling the form and accessibility tools from working correctly.

    To fix this issue, make sure the label's for attribute references the correct id of a form field.

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Frontend

- 1
  - 1.1
- 2
  - 2.1

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Liste de bugs répertorier par Jest

Commande pour lancer les tests :

```bash
npm run test
```

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

1ere erreur

les dates sont dans un format anglo-saxon et mal trié il faut les convertire en format international et les trié dans l'ordre croissant

solution:

```js
const rows = (data) => {
	if (data && data.length) {
		data.sort((a, b) => {
			const dateA = new Date(
				a.date.split("-")[0],
				parseInt(a.date.split("-")[1]) - 1,
				a.date.split("-")[2]
			);
			const dateB = new Date(
				b.date.split("-")[0],
				parseInt(b.date.split("-")[1]) - 1,
				b.date.split("-")[2]
			);
			return dateB - dateA;
		});
		return data.map((bill) => row(bill)).join("");
	}
	return "";
};
```

2eme erreur

```js
 ● Given that I am a user on login page › When I do fill fields in correct format and I click on admin button Login In › Then I should be identified as an HR admin in app

    TypeError: Cannot read properties of null (reading 'value')

      42 |     const user = {
      43 |       type: "Admin",
    > 44 |       email: e.target.querySelector(`input[data-testid="employee-email-input"]`).value,
         |              ^
      45 |       password: e.target.querySelector(`input[data-testid="employee-password-input"]`).value,
      46 |       status: "connected"
      47 |     }
```

L'erreur vient de employee-password-input au lieu de admmin-password-input

3eme erreur

Je suis connecté en tant qu'employé, je saisis une note de frais avec un justificatif qui a une extension différente de jpg, jpeg ou png, j'envoie. J'arrive sur la page Bills, je clique sur l'icône "voir" pour consulter le justificatif : la modale s'ouvre, mais il n'y a pas d'image.

Si je me connecte à présent en tant qu'Admin, et que je clique sur le ticket correspondant, le nom du fichier affiché est null. De même, lorsque je clique sur l'icône "voir" pour consulter le justificatif : la modale s'ouvre, mais il n'y a pas d'image.

solution:

```js
// Vérification de l'extension du fichier
const allowedExtensions = ["jpg", "jpeg", "png"];
const fileExtension = fileName.split(".").pop();

if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
	alert("Seuls les fichiers JPG, JPEG et PNG sont autorisés.");
	this.document.querySelector(`input[data-testid="file"]`).value = ""; // Réinitialise l'input file
	return;
}
```

4eme erreur

Je suis connecté en tant qu'administrateur RH, je déplie une liste de tickets (par exemple : statut "validé"), je sélectionne un ticket, puis je déplie une seconde liste (par exemple : statut "refusé"), je ne peux plus sélectionner un ticket de la première liste.

Comportement attendu : pourvoir déplier plusieurs listes, et consulter les tickets de chacune des deux listes.

Pas besoin d'ajouter de tests.

solution:

dans le 'constructor'

```js
this.activeLists = {};
```

dans 'handleEditTicket'

```js
if (this.activeBillId !== bill.id) {
	this.activeBillId = bill.id;
	$(".dashboard-right-container div").html(DashboardFormUI(bill));
	$(".vertical-navbar").css({ height: "150vh" });
} else {
	this.activeBillId = null;
	$(".dashboard-right-container div").html(
		`<div id="big-billed-icon" data-testid="big-billed-icon">${BigBilledIcon}</div>`
	);
	$(".vertical-navbar").css({ height: "120vh" });
}
```

dans 'handleShowTicket'

```js
const isListOpen = this.activeLists[index] || false;

if (!isListOpen) {
	$(`#arrow-icon${index}`).css({ transform: "rotate(0deg)" });
	$(`#status-bills-container${index}`).html(
		cards(filteredBills(bills, getStatus(index)))
	);
	this.activeLists[index] = true;
} else {
	$(`#arrow-icon${this.index}`).css({ transform: "rotate(90deg)" });
	$(`#status-bills-container${this.index}`).html("");
	this.activeLists[index] = false;
}
```

Listes indépendantes : j'ai remplacé l' approche this.counter et this.index par this.activeLists pour suivre quelles listes sont ouvertes ou fermées individuellement.
Listes multiples : Chaque liste peut désormais être ouverte ou fermée indépendamment, sans affecter les autres.
