# Skyscanner starter

Skyscanner sets an example of how to develop a simple react app. 

It includes everything you need, including:

- [React](https://react.dev) for the views
- [Docker](https://www.docker.com/) for containerization
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- And some more nice-to-have features such as prettier, eslint, etc.


## Using this template

Clone the repository:

```sh
git clone https://github.com/m-polo/skyscanner.git
```

Start everything with docker:

```sh
docker build . -t skyscanner
docker run -p 127.0.0.1:3000:3000 --name skyscanner skyscanner
```

### Build

To build the app, run the following command:

```
npm run build
```

### Start

To start the app, run the following command:

```
npm run start
```