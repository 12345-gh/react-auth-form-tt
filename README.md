# React Sign Up Form - Test Task

This project is a React application featuring a sign-up form with validation. It leverages TypeScript, React Hook Form, Zod for schema validation, and styled-components for styling. Unit tests are written using Vitest.

## Project Setup

### Prerequisites

- Node.js (version 16 or later)
- npm

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-repository/react-auth-form-tt.git
cd react-auth-form-tt
```

2. Install the dependencies:

```
npm install
```

## How to Run the Application (Available Scripts)

### Development Server
Start the development server with hot reloading.

```sh
npm run dev
```

### Build
Compile the TypeScript code and build the project for production.

```sh
npm run build
```

### Lint
Run ESLint to check for code quality issues.

```sh
npm run lint
```

### Prettier Check
Check code formatting with Prettier.

```sh
npm run prettier:check
```

### Test
Run unit tests using Vitest.

```sh
npm run test
```

### Test UI
Run Vitest with a graphical user interface.

```sh
npm run test:ui
```

### Coverage
Generate code coverage reports.

```sh
npm run coverage
```

## Folder Structure
* `src/:` Contains all the source code.
  * `components/:` React components by Atomic Design.
  * `hooks/:` Custom hooks.
  * `styles/:` CSS-in-JS styles.
  * `validations/:` Zod schemes for form validation.
  * `utils/:` Utility functions.
  * `App.tsx:` Main application component.
  * `index.tsx:` Entry point for the React application.

### Configuration
* `Vite:` Build tool and development server configuration is located in vite.config.ts.
* `ESLint:` Linting rules are specified in .eslintrc.js.
* `Prettier:` Code formatting rules are in .prettierrc.
* `Vitest:` Testing configuration can be found in vitest.config.ts.

