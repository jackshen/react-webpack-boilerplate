# react-webpack-boilerplate

React-based boilerplate using Webpack bundler, written for personal use as a template repository.

## Installation

### GitHub installation

[Link to GitHub docs](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)

### Non-GitHub installation

1. Create a new repository on your GitHub and a directory on your machine with the same name.

```bash
mkdir your-project
```

2. Clone this boilerplate to your local directory.

```bash
git clone https://github.com/jackshen/react-webpack-boilerplate.git your-project
cd your-project
```

3. Remove `.git` and reinitialize with the repository you created in step 1.

```bash
rm -rf .git
git init
git remote add origin git@github.com:path/to/your-project.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

## Setup

Copy `.env.example` into `.env`; sensible default configuration values have been provided for your convenience, but feel free to update these as you wish.

From there, run the following commands to run the application:

```sh
yarn
yarn start
```

## Testing

To run Cypress E2E tests:

```sh
yarn test:cypress
```

Make sure that the app is running in a separate terminal prior to running the tests.

## Technologies

- **Bundler:** Webpack
- **Framework:** React/TypeScript
- **Linting:** ESLint, Prettier
- **Styling:** CSS, Sass, styled-components
- **Testing:** Cypress

## License

[MIT](https://choosealicense.com/licenses/mit/)
