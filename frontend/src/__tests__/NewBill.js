/**
 * @jest-environment jsdom
 */
import { fireEvent, screen, waitFor } from "@testing-library/dom";
// import userEvent from "@testing-library/user-event";
import NewBillUI from "../views/NewBillUI.js";
import NewBill from "../containers/NewBill.js";
import { ROUTES_PATH } from "../constants/routes";
import { localStorageMock } from "../__mocks__/localStorage.js";
import mockStore from "../__mocks__/store";
import router from "../app/Router.js";

jest.mock("../app/store", () => mockStore);

describe("NewBill", () => {
	beforeEach(() => {
		// Configuration du DOM: simule la structure HTML requise pour l'environnement de test.avec root div
		document.body.innerHTML = '<div id="root"></div>';
	});
	// Navigation simulée : contenu HTML correct en fonction du chemin.
	window.onNavigate = (pathname) => {
		document.getElementById("root").innerHTML = ROUTES({ pathname });
	};
	// Rendu de l'interface utilisateur : Nouvelle facture, qui est inséré dans l'élément root
	const html = NewBillUI();
	document.getElementById("root").innerHTML = html;

	const store = mockStore;

	// Initialisation de l'objet NewBill : simule le comportement de l'application réelle lors de la création d'une nouvelle facture.
	const newBill = new NewBill({
		document,
		onNavigate: window.onNavigate,
		store,
		localStorage: window.localStorage,
	});
});
test("Should show alert when network error occurs during file upload", async () => {
	// Mock du store: permet de tester la manière dont l'application gère ces erreurs.
	jest.spyOn(mockStore.bills(), "create").mockImplementationOnce(() => {
		return Promise.reject(new Error("Erreur 404"));
	});

	// Simulation du téléchargement de fichiers : déclenche la logique de téléchargement de fichiers du formulaire.
	const fileInput = screen.getByTestId("file");
	const file = new File(["content"], "file.png", { type: "image/png" });

	fireEvent.change(fileInput, { target: { files: [file] } });

	// Assertions: vérifie qu'une alerte avec le message d'erreur correct est affichée à l'utilisateur.
	await expect(mockStore.bills().create).toHaveBeenCalled();
	expect(window.alert).toHaveBeenCalledWith("Erreur 404");
});

test("should render NewBill page", () => {
	router();
	expect(document.getElementById("root")).not.toBeNull();
	expect(screen.getByTestId("form-new-bill")).toBeInTheDocument();
});

describe("Given I am connected as an employee", () => {
	beforeEach(() => {
		// Mock localStorage
		Object.defineProperty(window, "localStorage", { value: localStorageMock });
		window.localStorage.setItem(
			"user",
			JSON.stringify({ type: "Employee", email: "employee@test.com" })
		);
		// Render NewBill UI
		const html = NewBillUI();
		document.body.innerHTML = html;
		router();
	});

	describe("When I am on NewBill Page", () => {
		test("Then the form should be rendered", () => {
			expect(screen.getByTestId("form-new-bill")).toBeTruthy();
		});

		test("Then the file input should be rendered", () => {
			const fileInput = screen.getByTestId("file");
			expect(fileInput).toBeTruthy();
		});
	});

	describe("When I upload a file with an incorrect format", () => {
		test("Then an alert should be displayed", () => {
			window.alert = jest.fn();
			const newBill = new NewBill({
				document,
				onNavigate: jest.fn(),
				store: mockStore,
				localStorage: window.localStorage,
			});
			const fileInput = screen.getByTestId("file");
			const file = new File(["test"], "test.pdf", { type: "application/pdf" });
			fireEvent.change(fileInput, { target: { files: [file] } });

			expect(window.alert).toHaveBeenCalledWith(
				"Seuls les fichiers JPG, JPEG et PNG sont autorisés."
			);
		});
	});

	describe("When I upload a file with a correct format", () => {
		test("Then the file should be uploaded successfully", async () => {
			const newBill = new NewBill({
				document,
				onNavigate: jest.fn(),
				store: mockStore,
				localStorage: window.localStorage,
			});
			const fileInput = screen.getByTestId("file");
			const file = new File(["image"], "image.png", { type: "image/png" });
			const handleChangeFile = jest.fn(newBill.handleChangeFile);
			fileInput.addEventListener("change", handleChangeFile);
			fireEvent.change(fileInput, { target: { files: [file] } });

			expect(handleChangeFile).toHaveBeenCalled();
			await waitFor(() => expect(newBill.fileUrl).toBeTruthy("testUrl"));
		});
	});

	describe("When I submit the form", () => {
		test("Then the form data should be submitted and navigated to the Bills page", () => {
			const onNavigate = jest.fn();
			const newBill = new NewBill({
				document,
				onNavigate,
				store: mockStore,
				localStorage: window.localStorage,
			});

			const form = screen.getByTestId("form-new-bill");
			const handleSubmit = jest.fn(newBill.handleSubmit);
			form.addEventListener("submit", handleSubmit);
			fireEvent.submit(form);

			expect(handleSubmit).toHaveBeenCalled();
			expect(onNavigate).toHaveBeenCalledWith(ROUTES_PATH["Bills"]);
		});
	});

	describe("When a network error occurs during file upload", () => {
		test("Then an alert should be displayed", async () => {
			jest.spyOn(mockStore.bills(), "create").mockImplementationOnce(() => {
				return Promise.reject(new Error("Erreur réseau"));
			});

			const newBill = new NewBill({
				document,
				onNavigate: jest.fn(),
				store: mockStore,
				localStorage: window.localStorage,
			});
			const fileInput = screen.getByTestId("file");
			const file = new File(["image"], "image.png", { type: "image/png" });
			fireEvent.change(fileInput, { target: { files: [file] } });

			await waitFor(() => {
				expect(window.alert).toHaveBeenCalledWith("Erreur réseau");
			});
		});
	});
	describe("When I submit a valid file and form data", () => {
		test("Then it should create a new bill and return fileUrl and key", async () => {
			// Mock localStorage to simulate a logged-in employee
			Object.defineProperty(window, "localStorage", {
				value: localStorageMock,
			});
			window.localStorage.setItem(
				"user",
				JSON.stringify({ type: "Employee", email: "employee@test.com" })
			);

			// Mock the file input and store behavior
			const file = new File(["image"], "image.png", { type: "image/png" });
			const fileUrl = "https://test-url.com/file.png";
			const key = "12345";

			const mockBillsCreate = jest.fn().mockResolvedValue({
				fileUrl: fileUrl,
				key: key,
			});

			mockStore.bills = jest.fn(() => {
				return { create: mockBillsCreate };
			});

			const newBill = new NewBill({
				document,
				onNavigate: jest.fn(),
				store: mockStore,
				localStorage: window.localStorage,
			});

			// Select file input and simulate a file upload
			const fileInput = screen.getByTestId("file");
			fireEvent.change(fileInput, { target: { files: [file] } });

			// Mock the form data and submission process
			const form = screen.getByTestId("form-new-bill");
			const handleSubmit = jest.fn((e) => newBill.handleSubmit(e));
			form.addEventListener("submit", handleSubmit);
			fireEvent.submit(form);

			// Wait for the promise to resolve and check the results
			await waitFor(() => expect(mockBillsCreate).toHaveBeenCalled());
			await waitFor(() => expect(newBill.fileUrl).toBe(fileUrl));
			await waitFor(() => expect(newBill.billId).toBe(key));
		});

		test("Then it should log an error if the request fails", async () => {
			const errorMessage = "Network Error";
			mockStore.bills = jest.fn(() => {
				return {
					create: jest.fn().mockRejectedValue(new Error(errorMessage)),
				};
			});

			const newBill = new NewBill({
				document,
				onNavigate: jest.fn(),
				store: mockStore,
				localStorage: window.localStorage,
			});

			const form = screen.getByTestId("form-new-bill");
			const handleSubmit = jest.fn((e) => newBill.handleSubmit(e));
			form.addEventListener("submit", handleSubmit);
			fireEvent.submit(form);

			await waitFor(() =>
				expect(console.error).toHaveBeenCalledWith(new Error(errorMessage))
			);
		});
	});

	describe("When I upload an invalid file format", () => {
		test("Then it should reset the input and alert the user", () => {
			const newBill = new NewBill({
				document,
				onNavigate: jest.fn(),
				store: mockStore,
				localStorage: window.localStorage,
			});
			const fileInput = screen.getByTestId("file");
			const file = new File(["test"], "test.txt", { type: "text/plain" });

			window.alert = jest.fn();
			fireEvent.change(fileInput, { target: { files: [file] } });

			// Expect alert to be triggered
			expect(window.alert).toHaveBeenCalledWith(
				"Seuls les fichiers JPG, JPEG et PNG sont autorisés."
			);
			// Ensure the input is reset
			expect(fileInput.value).toBe("");
		});
	});
	describe("When I upload a valid file and submit the form", () => {
		test("Then it should create FormData and send it successfully", async () => {
			const file = new File(["image"], "image.png", { type: "image/png" });
			const fileUrl = "https://test-url.com/file.png";
			const key = "12345";

			const mockBillsCreate = jest.fn().mockResolvedValue({ fileUrl, key });
			mockStore.bills = jest.fn(() => ({ create: mockBillsCreate }));

			const newBill = new NewBill({
				document,
				onNavigate: jest.fn(),
				store: mockStore,
				localStorage: window.localStorage,
			});

			const fileInput = screen.getByTestId("file");
			fireEvent.change(fileInput, { target: { files: [file] } });

			// Submit form
			const form = screen.getByTestId("form-new-bill");
			fireEvent.submit(form);

			// Wait for file upload success
			await waitFor(() => expect(mockBillsCreate).toHaveBeenCalled());
			await waitFor(() => expect(newBill.fileUrl).toBe(fileUrl));
			await waitFor(() => expect(newBill.billId).toBe(key));
		});
	});
	describe("When a network error occurs during file upload", () => {
		test("Then it should display an alert", async () => {
			jest.spyOn(mockStore.bills(), "create").mockImplementationOnce(() => {
				return Promise.reject(new Error("Erreur réseau"));
			});

			const newBill = new NewBill({
				document,
				onNavigate: jest.fn(),
				store: mockStore,
				localStorage: window.localStorage,
			});

			const fileInput = screen.getByTestId("file");
			const file = new File(["image"], "image.png", { type: "image/png" });
			fireEvent.change(fileInput, { target: { files: [file] } });

			await waitFor(() => {
				expect(window.alert).toHaveBeenCalledWith("Erreur réseau");
			});
		});
	});
});
