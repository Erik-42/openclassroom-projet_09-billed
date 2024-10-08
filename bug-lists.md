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

> test
> jest

<br>

FAIL src/**tests**/DashboardFormUI.js

    ● Test suite failed to run

    ● Validation Error:

      Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

      Configuration Documentation:
      https://jestjs.io/docs/configuration


    As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.


        Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

        Configuration Documentation:
        https://jestjs.io/docs/configuration

      As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.

### Solution

1. ```bash
   npm install jest-environment-jsdom
   ```

<br>
Ajouter dans `jest.config.js`

```javascript
module.exports = {
	testEnvironment: "jest-environment-jsdom",
};
```

<br>

2. ```bash
   npm install --legacy-peer-deps
   ```

3. ```bash
   npm install jest-html-reporter@latest
   ```

4. ```bash
   npm audit fix
   ```

5. ```bash
   npm install jest-environment-jsdom
   ```

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

FAIL src/**tests**/Login.js

    ● Test suite failed to run

    ● Validation Error:

      Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

      Configuration Documentation:
      https://jestjs.io/docs/configuration


    As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.


        Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

        Configuration Documentation:
        https://jestjs.io/docs/configuration

      As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.

Solution:

1. ```bash
   npm install jest-environment-jsdom
   ```

2.

3.

4.

5.

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

FAIL src/**tests**/Dashboard.js

    ● Test suite failed to run

    ● Validation Error:

      Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

      Configuration Documentation:
      https://jestjs.io/docs/configuration


    As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.


        Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

        Configuration Documentation:
        https://jestjs.io/docs/configuration

      As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.

Solution:

1.

2.

3.

4.

5.

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

FAIL src/**tests**/routes.js

    ● Test suite failed to run

    ● Validation Error:

      Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

      Configuration Documentation:
      https://jestjs.io/docs/configuration


    As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.


        Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

        Configuration Documentation:
        https://jestjs.io/docs/configuration

      As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.

Solution:

1.

2.

3.

4.

5.

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

FAIL src/**tests**/Logout.js

    ● Test suite failed to run

    ● Validation Error:

      Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

      Configuration Documentation:
      https://jestjs.io/docs/configuration


    As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.


        Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

        Configuration Documentation:
        https://jestjs.io/docs/configuration

      As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.

Solution:

1.

2.

3.

4.

5.

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

FAIL src/**tests**/Bills.js

    ● Test suite failed to run

    ● Validation Error:

      Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

      Configuration Documentation:
      https://jestjs.io/docs/configuration


    As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.


        Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

        Configuration Documentation:
        https://jestjs.io/docs/configuration

      As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.

Solution:

1.

2.

3.

4.

5.

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

FAIL src/**tests**/ErrorPage.js

    ● Test suite failed to run

    ● Validation Error:

      Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

      Configuration Documentation:
      https://jestjs.io/docs/configuration


    As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.


        Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

        Configuration Documentation:
        https://jestjs.io/docs/configuration

      As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.

Solution:

1.

2.

3.

4.

5.

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

FAIL src/**tests**/Actions.js

    ● Test suite failed to run

    ● Validation Error:

      Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

      Configuration Documentation:
      https://jestjs.io/docs/configuration


    As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.


        Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

        Configuration Documentation:
        https://jestjs.io/docs/configuration

      As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.

Solution:

1.

2.

3.

4.

5.

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

FAIL src/**tests**/VerticalLayout.js

    ● Test suite failed to run

    ● Validation Error:

      Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

      Configuration Documentation:
      https://jestjs.io/docs/configuration


    As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.


        Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

        Configuration Documentation:
        https://jestjs.io/docs/configuration

      As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.

Solution:

1.

2.

3.

4.

5.

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

FAIL src/**tests**/LoadingPage.js

    ● Test suite failed to run

    ● Validation Error:

      Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

      Configuration Documentation:
      https://jestjs.io/docs/configuration


    As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.


        Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

        Configuration Documentation:
        https://jestjs.io/docs/configuration

      As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.

Solution:

1.

2.

3.

4.

5.

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

FAIL src/**tests**/NewBill.js

    ● Test suite failed to run

    ● Validation Error:

      Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

      Configuration Documentation:
      https://jestjs.io/docs/configuration


    As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.


        Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

        Configuration Documentation:
        https://jestjs.io/docs/configuration

      As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.

Solution:

1.

2.

3.

4.

5.

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

FAIL src/**tests**/VerticalLayout.js

      ● Test suite failed to run

    TypeError: Cannot read properties of undefined (reading 'html')
      at new JSDOMEnvironment (node_modules/jest-environment-jsdom/build/index.js:72:44)

Solution:

1.

2.

3.

4.

5.

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

FAIL src/**tests**/NewBill.js
● Test suite failed to run

    TypeError: Cannot read properties of undefined (reading 'html')

      at new JSDOMEnvironment (node_modules/jest-environment-jsdom/build/index.js:72:44)

FAIL src/**tests**/routes.js
● Test suite failed to run

    TypeError: Cannot read properties of undefined (reading 'html')

      at new JSDOMEnvironment (node_modules/jest-environment-jsdom/build/index.js:72:44)

FAIL src/**tests**/Logout.js
● Test suite failed to run

    TypeError: Cannot read properties of undefined (reading 'html')

      at new JSDOMEnvironment (node_modules/jest-environment-jsdom/build/index.js:72:44)

FAIL src/**tests**/Login.js
● Test suite failed to run

    TypeError: Cannot read properties of undefined (reading 'html')

      at new JSDOMEnvironment (node_modules/jest-environment-jsdom/build/index.js:72:44)

FAIL src/**tests**/LoadingPage.js
● Test suite failed to run

    TypeError: Cannot read properties of undefined (reading 'html')

      at new JSDOMEnvironment (node_modules/jest-environment-jsdom/build/index.js:72:44)

FAIL src/**tests**/ErrorPage.js
● Test suite failed to run

    TypeError: Cannot read properties of undefined (reading 'html')

      at new JSDOMEnvironment (node_modules/jest-environment-jsdom/build/index.js:72:44)

FAIL src/**tests**/DashboardFormUI.js
● Test suite failed to run

    TypeError: Cannot read properties of undefined (reading 'html')

      at new JSDOMEnvironment (node_modules/jest-environment-jsdom/build/index.js:72:44)

FAIL src/**tests**/Dashboard.js
● Test suite failed to run

    TypeError: Cannot read properties of undefined (reading 'html')

      at new JSDOMEnvironment (node_modules/jest-environment-jsdom/build/index.js:72:44)

FAIL src/**tests**/Actions.js
● Test suite failed to run

    TypeError: Cannot read properties of undefined (reading 'html')

      at new JSDOMEnvironment (node_modules/jest-environment-jsdom/build/index.js:72:44)

FAIL src/**tests**/Bills.js
● Test suite failed to run

    TypeError: Cannot read properties of undefined (reading 'html')

      at new JSDOMEnvironment (node_modules/jest-environment-jsdom/build/index.js:72:44)

Solution:

1.

2.

3.

4.

5.

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<br>

Test Suites: 11 failed, 11 total

| File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| --------- | ------- | -------- | ------- | ------- | ----------------- |
| All files | 0       | 0        | 0       | 0       |
| All files | 0       | 0        | 0       | 0       |
| All files | 0       | 0        | 0       | 0       |
| All files | 0       | 0        | 0       | 0       |
| All files | 0       | 0        | 0       | 0       |

<br>

Test Suites: 11 failed, 11 total

> Tests: 0 total
>
> Snapshots: 0 total
>
> Time: 7.422 s
>
> Ran all test suites.

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

1ere erreur

les dates sont dans un format anglo-saxon et mal trié il faut les convertire en format international et les trié dans l'ordre croissant

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
