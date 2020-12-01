# react-webpack-boilerplate

React-based boilerplate using Webpack bundler, written for personal use as a template repository.

## Installation

### Github installation

[Link to Github docs](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)

### Non-Github installation

1. Create a new repository and a local directory on your machine with the same name.

```bash
mkdir your-project
```

2. Clone the boilerplate to your local directory.

```bash
git clone --depth 1 https://github.com/jackshen/react-webpack-boilerplate.git your-project
cd your-project
```

3. Remove and reinitialise `.git`.

```bash
rm -rf .git
git init
git remote add origin git@gitlab.com:path/to/your-project.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

## Technologies

- **Bundler:** Webpack
- **CLI tools:** Commitizen
- **Framework:** React
- **Linting:** ESLint, Prettier
- **Styling:** CSS, Sass, styled-components
- **Testing:** _TODO_
- **Transpiler:** Babel

## License

[MIT](https://choosealicense.com/licenses/mit/)
