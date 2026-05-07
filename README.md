# React Form - Cypress Study

A simple form project developed in React for study and automated testing with Cypress.

## Technologies

- React 19.2.5
- Vite 8.0.10
- Cypress 15.14.2

## Form Structure

The form contains the following fields:

- **Name** (text field)
- **Surname** (text field)
- **Age** (number field)
- **City** (text field)
- **Phone** (phone field)
- **Email** (email field)
- **Checkbox** to accept the privacy policy
- **Radio button** (Yes/No) to receive email updates
- **Submit button**

## Installation

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Install dependencies

```bash
npm install
```

## Running the Project

### Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## Cypress - Automated Testing

### Install Cypress

Cypress is already configured in the project. If you need to reinstall:

```bash
npm install cypress --save-dev
```

### Open Cypress

To open the Cypress interface:

```bash
npx cypress open
```

This will open the Cypress interactive interface where you can:
- View all available tests
- Run tests individually
- See results in real-time
- Record new tests

### Run tests in terminal

To run all tests in the terminal (headless):

```bash
npx cypress run
```

To run a specific test file:

```bash
npx cypress run --spec "cypress/e2e/nome-do-arquivo.cy.js"
```

### Run tests in browser

To run tests with browser visualization:

```bash
npx cypress run --headed
```

## Cypress Test Structure

E2E tests should be placed in the `cypress/e2e/` folder.

Example of basic test structure:

```javascript
describe('Registration Form', () => {
  it('should fill and submit the form successfully', () => {
    cy.visit('http://localhost:5173/')
    cy.get('input[name="nome"]').type('João')
    cy.get('input[name="sobrenome"]').type('Silva')
    // ... continue filling the fields
    cy.get('button[type="submit"]').click()
  })
})
```

## Available Commands

- `npm run dev` - Start the development server
- `npm run build` - Create a production build
- `npm run preview` - Preview the production build
- `npx cypress open` - Open the Cypress interface
- `npx cypress run` - Run tests in terminal

## Tips for Studying with Cypress

1. **Always keep the server running**: Run `npm run dev` in a terminal before running tests
2. **Use Cypress Selector Playground**: In the Cypress interface, click the target icon to select elements and get selectors
3. **Record tests interactively**: Use Cypress recording feature to create tests faster
4. **Check assertions**: Use `cy.should()` to validate expected behavior
5. **Test negative scenarios**: Test validations, required fields, and error messages

## Useful Resources

- [Cypress official documentation](https://docs.cypress.io/)
- [React official documentation](https://react.dev/)
- [Vite official documentation](https://vitejs.dev/)
