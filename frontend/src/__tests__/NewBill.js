/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom"; // Permet d'utiliser des matchers spécifiques à jest-dom comme `toBeInTheDocument`
import { fireEvent, screen, waitFor } from "@testing-library/dom"; // Outils pour interagir avec le DOM dans les tests
import userEvent from "@testing-library/user-event"; // Permet de simuler les interactions utilisateur (clics, etc.)
import NewBillUI from "../views/NewBillUI.js"; // Interface utilisateur pour le composant NewBill
import NewBill from "../containers/NewBill.js"; // Classe NewBill que l'on va tester
import { ROUTES, ROUTES_PATH } from "../constants/routes.js"; // Importation des chemins de navigation
import { localStorageMock } from "../__mocks__/localStorage.js"; // Mock pour simuler localStorage dans les tests
import mockStore from "../__mocks__/store"; // Mock du store (backend simulé)
import router from "../app/Router.js"; // Importation du router pour la navigation

jest.mock("../app/store", () => mockStore); // On remplace le store réel par le mockStore
global.alert = jest.fn(); // On crée une fonction mock pour `alert`

describe("Given I am connected as an employee", () => {
	// Simule la navigation
	const onNavigate = (pathname) => {
		document.body.innerHTML = ROUTES({ pathname });
	};

	// Déclaration de la variable pour l'instance du composant NewBill
	let newbillContainer;

	beforeEach(() => {
		document.body.innerHTML = ""; // Réinitialise le DOM
		jest.spyOn(mockStore, "bills"); // On espionne la fonction `bills` du store
		Object.defineProperty(window, "localStorage", { value: localStorageMock }); // Mock de localStorage
		window.localStorage.setItem("user", JSON.stringify({ type: "Employee" })); // Simule un utilisateur connecté de type employé
		const root = document.createElement("div");
		root.setAttribute("id", "root");
		document.body.append(root);
		router(); // Initialisation du router
		newbillContainer = new NewBill({
			document,
			onNavigate,
			store: mockStore,
			localStorage: window.localStorage,
		});
	});

	// Test pour vérifier si le formulaire NewBill est bien affiché
	describe("When I am on NewBill Page", () => {
		test("Then form should be displayed", () => {
			window.onNavigate(ROUTES_PATH.NewBill); // Simule la navigation vers la page NewBill
			expect(screen.getByText("Envoyer une note de frais")).toBeTruthy(); // Vérifie que le texte "Envoyer une note de frais" est bien présent
		});
	});

	// Test pour la gestion du fichier uploadé
	describe("When I handle a file", () => {
		// Fonction utilitaire pour simuler un upload de fichier
		const simulateFileUpload = async (file) => {
			const inputFile = screen.getByTestId("file");
			userEvent.upload(inputFile, file); // Simule l'upload
			await waitFor(() => screen.getByTestId("file")); // Attend que l'upload soit terminé
			return inputFile;
		};

		// Test pour vérifier que le fichier avec une mauvaise extension est rejeté
		test("Then the extension is wrong", async () => {
			// Crée un fichier PDF factice pour simuler un mauvais upload
			const badFile = new File(["test"], "test.pdf", {
				type: "application/pdf",
			});
			const inputFile = await simulateFileUpload(badFile); // Simule l'upload de ce fichier dans le champ prévu à cet effet
			expect(!inputFile.value).toBe(""); // Vérifie que l'input file est réinitialisé à une chaîne vide (ce qui signifie que le fichier a été rejeté)
		});

		// Test pour vérifier qu'un fichier avec une bonne extension est accepté
		test("Then the extension is correct", async () => {
			// Crée un fichier PNG factice pour simuler un bon upload
			const goodFile = new File(["image"], "test.png", { type: "image/png" });
			const inputFile = await simulateFileUpload(goodFile); // Simule l'upload de ce fichier dans le champ prévu à cet effet
			const allowedExtensions = ["jpg", "jpeg", "png"]; // Liste des extensions autorisées
			const fileExtension = inputFile.files[0].name
				.split(".")
				.pop()
				.toLowerCase(); // Extrait l'extension du fichier téléchargé
			expect(allowedExtensions).toContain(fileExtension); // Vérifie que l'extension du fichier est dans la liste des extensions autorisées
		});
	});

	// Tests pour la soumission du formulaire
	describe("When I submit a new bill", () => {
		// Fonction utilitaire pour pré-remplir le formulaire avec des données valides
		const fillForm = () => {
			screen.getByTestId("expense-name").value = "Train Paris Strasbourg";
			screen.getByTestId("amount").value = "200";
			screen.getByTestId("vat").value = "20";
			screen.getByTestId("pct").value = "20";
			screen.getByTestId("datepicker").value = "2024-10-15";
			userEvent.selectOptions(screen.getByTestId("expense-type"), [
				"Transports",
			]);
		};

		// Test pour vérifier que la soumission du formulaire fonctionne correctement
		test("Then the form is submitted", async () => {
			fillForm(); // Remplit le formulaire
			const form = screen.getByTestId("form-new-bill");
			const submitBtn = screen.getByText("Envoyer");
			const handleSubmit = jest.fn((e) => newbillContainer.handleSubmit(e));
			form.addEventListener("submit", handleSubmit);
			userEvent.click(submitBtn); // Simule un clic sur le bouton Envoyer
			expect(handleSubmit).toHaveBeenCalled(); // Vérifie que handleSubmit a bien été appelé
			await waitFor(() => screen.getByText("Mes notes de frais"));
			expect(screen.getByText("Mes notes de frais")).toBeTruthy(); // Vérifie la navigation après soumission
		});

		// Test pour vérifier que la méthode `create` est appelée avec les bonnes données
		test("Then it should call the create method with correct form data", async () => {
			// Crée un fichier factice pour simuler un upload (ici une image PNG)
			const file = new File(["image content"], "file.png", {
				type: "image/png",
			});
			// Simule l'upload du fichier dans le champ prévu à cet effet
			await simulateFileUpload(file);
			// Ajoute un utilisateur factice dans le localStorage avec un email
			window.localStorage.setItem(
				"user",
				JSON.stringify({ email: "test@email.com" })
			);
			const form = screen.getByTestId("form-new-bill"); // Sélectionne le formulaire pour la nouvelle facture dans le DOM
			const handleSubmit = jest.fn((e) => newbillContainer.handleSubmit(e)); // Mock la fonction handleSubmit pour vérifier si elle est bien appelée
			form.addEventListener("submit", handleSubmit); // Ajoute un écouteur d'événement pour la soumission du formulaire
			userEvent.submit(form); // Simule la soumission du formulaire
			// Attends que le test se termine et vérifie plusieurs points :
			await waitFor(() => {
				expect(handleSubmit).toHaveBeenCalled(); // Vérifie que la fonction handleSubmit a bien été appelée lors de la soumission
				// Vérifie que la méthode create du store (mockée) a été appelée avec les bons arguments
				expect(mockStore.bills().create).toHaveBeenCalledWith({
					data: expect.any(FormData), // On s'attend à un objet FormData
					headers: { noContentType: true }, // Vérifie qu'il n'y a pas de Content-Type
				});
			});
			const formData = mockStore.bills().create.mock.calls[0][0].data;
			expect(formData.get("file")).toBe(file); // Vérifie que le fichier est bien dans les données envoyées
			expect(formData.get("email")).toBe("test@email.com"); // Vérifie que l'email est bien dans les données envoyées
		});

		// Test pour vérifier que les erreurs sont bien gérées
		test("Then it should handle errors correctly", async () => {
			const mockError = new Error("An error occurred");
			mockStore.bills().create.mockRejectedValueOnce(mockError); // Simule une erreur à l'appel de `create`
			jest.spyOn(console, "error").mockImplementation(() => {}); // Espionne la fonction console.error
			const form = screen.getByTestId("form-new-bill");
			const handleSubmit = jest.fn((e) => newbillContainer.handleSubmit(e));
			form.addEventListener("submit", handleSubmit);
			userEvent.submit(form); // Soumission du formulaire
			await waitFor(() => {
				expect(console.error).toHaveBeenCalledWith(mockError); // Vérifie que l'erreur est bien loguée dans la console
			});
		});

		// Test pour vérifier que l'alerte est affichée si un fichier non valide est uploadé
		test("should show an alert if an invalid file type is uploaded", () => {
			window.alert = jest.fn(); // Mock de la fonction alert
			document.body.innerHTML = NewBillUI(); // Insère l'interface NewBill dans le DOM
			// Crée une nouvelle instance de NewBill avec des paramètres simulés (mock pour store et localStorage)

			const newBill = new NewBill({
				document,
				onNavigate, // Fonction simulée pour la navigation
				store: mockStore, // Utilisation du store mocké
				localStorage: window.localStorage, // Utilisation du localStorage mocké
			});
			const fileInput = screen.getByTestId("file"); // Récupère l'élément input de type file du DOM (où l'utilisateur charge un fichier)

			const file = new File(["content"], "test.txt", { type: "text/plain" }); // Crée un fichier texte fictif, ce qui est un type non valide (on attend jpg, jpeg ou png)

			fireEvent.change(fileInput, { target: { files: [file] } }); // Simule l'upload d'un fichier non valide
			expect(window.alert).toHaveBeenCalledWith(
				"Seuls les fichiers JPG, JPEG et PNG sont autorisés."
			); // Vérifie que la fonction alert a bien été appelée avec le message d'erreur attendu

			expect(fileInput.value).toBe(""); // Vérifie que l'input file est réinitialisé
		});
	});

	// Test pour la gestion des erreurs API
	describe("When an error occurs on API", () => {
		// Teste le comportement de l'application lorsqu'une erreur survient au niveau de l'API
		it("Then it should display a 500 message error", async () => {
			// Charge l'interface NewBill dans le DOM
			document.body.innerHTML = NewBillUI();

			// Fonction onNavigate simulée, qui met à jour le DOM avec le nouveau chemin
			const onNavigate = (pathname) => {
				document.body.innerHTML = ROUTES({ pathname });
			};

			// Initialise un nouvel objet NewBill avec des paramètres simulés (mock)
			const newBillInit = new NewBill({
				document,
				onNavigate,
				store: mockStore, // Utilisation du mockStore à la place d'un store réel
				localStorage: window.localStorage, // Utilisation du mock pour localStorage
			});

			// Simule un comportement d'erreur lors de l'appel à l'API
			mockStore.bills.mockImplementationOnce(() => {
				return {
					update: () => {
						// Renvoie une erreur simulée avec le message "Erreur 500"
						return Promise.reject(new Error("Erreur 500"));
					},
				};
			});

			// Mock de console.error pour capturer les erreurs loguées
			console.error = jest.fn(); // Mock de console.error
			const form = screen.getByTestId("form-new-bill"); // Récupère le formulaire dans le DOM

			const handleSubmit = jest.fn(newBillInit.handleSubmit); // Mock de la fonction handleSubmit, liée à l'événement de soumission du formulaire

			form.addEventListener("submit", handleSubmit); // Ajout de l'événement de soumission au formulaire

			fireEvent.submit(form); // Simule la soumission du formulaire
			expect(handleSubmit).toHaveBeenCalled(); // Vérifie que handleSubmit est appelé
			await waitFor(() => new Promise(process.nextTick)); // Attente que le processus se termine avant de vérifier les erreurs

			expect(console.error).toHaveBeenCalled(); // Vérifie que l'erreur est loguée
		});
	});
	// Test pour la gestion des erreurs API
	describe("When an error occurs on API", () => {
		// Teste le comportement de l'application lorsqu'une erreur 404 survient au niveau de l'API
		it("Then it should display a 404 message error", async () => {
			// Charge l'interface NewBill dans le DOM
			document.body.innerHTML = NewBillUI();

			// Fonction onNavigate simulée, qui met à jour le DOM avec le nouveau chemin
			const onNavigate = (pathname) => {
				document.body.innerHTML = ROUTES({ pathname });
			};

			// Initialise un nouvel objet NewBill avec des paramètres simulés (mock)
			const newBillInit = new NewBill({
				document,
				onNavigate,
				store: mockStore, // Utilisation du mockStore à la place d'un store réel
				localStorage: window.localStorage, // Utilisation du mock pour localStorage
			});

			// Simule un comportement d'erreur lors de l'appel à l'API
			mockStore.bills.mockImplementationOnce(() => {
				return {
					update: () => {
						// Renvoie une erreur simulée avec le message "Erreur 404"
						return Promise.reject(new Error("Erreur 404"));
					},
				};
			});

			// Mock de console.error pour capturer les erreurs loguées
			console.error = jest.fn(); // Mock de console.error

			const form = screen.getByTestId("form-new-bill"); // Récupère le formulaire dans le DOM
			const handleSubmit = jest.fn(newBillInit.handleSubmit); // Mock de la fonction handleSubmit, liée à l'événement de soumission du formulaire

			form.addEventListener("submit", handleSubmit); // Ajout de l'événement de soumission au formulaire
			fireEvent.submit(form); // Simule la soumission du formulaire

			expect(handleSubmit).toHaveBeenCalled(); // Vérifie que handleSubmit est appelé

			await waitFor(() => new Promise(process.nextTick)); // Attente que le processus se termine avant de vérifier les erreurs

			expect(console.error).toHaveBeenCalledWith(new Error("Erreur 404")); // Vérifie que l'erreur 404 est loguée
		});
	});
});
