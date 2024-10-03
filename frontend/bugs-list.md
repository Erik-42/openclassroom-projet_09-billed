# Liste des bugs

<a name="readme-top"></a>

<p align="right">(<a href="./README.md">back to Bugs list</a>)</p>

### Liste de bugs répertoriés par mes soins

## Backend

- 0 Mise en place

  - 0.1 Commande de lancement du serveur Backend érronée:

        npm run run:dev

    au lieu de

        npm run:dev

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

### Solution:

1.  ```bash
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

2.  ```bash
    npm install --legacy-peer-deps
    ```

3.  ```bash
    npm install jest-html-reporter@latest
    ```

4.  ```bash
    npm audit fix
    ```

5.  ```bash
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

1.  ```bash

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

<br>

Test Suites: 11 failed, 11 total
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
| All files | 0 | 0 | 0 | 0 |
| All files | 0 | 0 | 0 | 0 |
| All files | 0 | 0 | 0 | 0 |
| All files | 0 | 0 | 0 | 0 |
| All files | 0 | 0 | 0 | 0 |

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
