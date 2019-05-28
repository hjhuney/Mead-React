# Hello React

## Installation Notes on Node and Yarn

Can see Node version via the command prompt with:

```
node -v
```

"npm" stands for Node Package Manager. npm and Yarn aim to do the same job. To see npm version:

```
npm -v
```

Install Yarn

```
npm install -g yarn
```

To check Yarn version:

```
yarn --version
```

## Install React

Install React via CDN tag. 

```
<script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
<script src="/scripts/app.js"></script>
```

## Compile with Babel

Babel is a JavaScript compiler. Most common use for Babel is taking ES6 / ES7 JS code back to ES5. Babel is also used to compile JSX into regular JS. You can see how the code is translated with [this tool](https://babeljs.io/repl). 

[Babel Plugins](https://babeljs.io/docs/en/plugins)

## Install Babel Locally

We are going to install Babel, env, and react. 

```
npm i -g babel-cli@6.24.1
```
-g stands for global

To see babel help menu:

```
babel --help
```

Add react package via Yarn:

```
yarn add babel-preset-react@6.24.1
```

Or with npm

```
npm i babel-preset-react@6.24.1
```

Install env

```
npm i babel-preset-env@1.5.2
```

app.js in src folder contains our JSX. app.js in scripts folder contains babel transformations.

In order to use babel:

```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

* Path to our code (src/app.js). 
* Output file (--out-file=public/scripts/app.js). This will override the file. 
* Presets (--presets=env, react)
* Watch (--watch); watches our source app.js for changes; automatically create new scripts app.js file with changes





