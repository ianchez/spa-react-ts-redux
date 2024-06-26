# SPA App - Images loader

Single page application to fetch data from an API (photo items)
Made with:
- React
- Typescript
- Redux
- React-router-dom

## Installation

First, you need to install the dependencies with the following command:

```bash
npm install
```

## Configuration

You need to create a `.env` file in the root directory following the [.env.example](./.env.example) file.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Docker

First, run the following command to create the docker image:

```bash
docker build -t app .
```

After that, you can run the docker container with the following command:

```bash
docker run -p 3000:3000 app
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
