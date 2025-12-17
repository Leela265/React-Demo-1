# React + Vite
# DEMO CLIP:-  https://drive.google.com/file/d/1w5x8XoQ1PBvAoukewtd0sbOLFhwnh7pE/view?usp=drive_link
# React Registration Form

## Description

This project is a **React-based registration form** built as part of an assignment. The form includes multiple input fields with **real-time validation**, **conditional error messages**, and a **submit button that is disabled until all fields are valid**.

It demonstrates **React fundamentals** such as:

* `useState` for state management
* Conditional rendering for validation messages
* Form input tracking
* Simple validation logic for PAN, Aadhaar, Email, and Phone Number
* Password show/hide toggle

The UI is **minimal, responsive, and centered**.

---

## Features

* **First Name, Last Name, Username, Email, Password** (with show/hide)
* **Phone Number** with country code
* **Country and City**
* **PAN & Aadhaar validation**
* Conditional **error messages**
* **Submit button disabled** until all fields are valid
* **Minimal and responsive design**
* **All input values are tracked using `useState`**

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/react-registration-form.git
```

2. Navigate to the project folder:

```bash
cd react-registration-form
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser at [http://localhost:5173](http://localhost:5173)

---

## Usage

1. Fill in all the required fields:

   * First Name, Last Name, Username
   * Email (valid format)
   * Password (minimum 6 characters)
   * Phone Number (minimum 10 digits)
   * Country and City
   * PAN (e.g., `ABCDE1234F`)
   * Aadhaar (12-digit number)

2. Errors will be displayed **below inputs** if the field is invalid.

3. **Submit button will remain disabled** until all fields are valid.

4. Toggle password visibility with **Show/Hide** button.

---

## Example Input Values

| Field                   | Example Value                               |
| ----------------------- | ------------------------------------------- |
| First Name              | John                                        |
| Last Name               | Doe                                         |
| Username                | johndoe123                                  |
| Email                   | [john@example.com](mailto:john@example.com) |
| Password                | 123456                                      |
| Phone No + Country Code | +911234567890                               |
| Country                 | India                                       |
| City                    | Mumbai                                      |
| PAN                     | ABCDE1234F                                  |
| Aadhaar                 | 123412341234                                |

---

## Screenshots / Demo

You can include a **screenshot** of your form or a **short GIF** showing form validation and submit button enabling.

```text
[Insert Screenshot Here]
```

---

## Technologies Used

* React (Vite)
* JavaScript (ES6)
* HTML5 & CSS3

---

## Folder Structure

```
react-registration-form/
├─ src/
│  ├─ App.jsx
│  ├─ App.css
│  └─ main.jsx
├─ package.json
├─ vite.config.js
└─ README.md
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
