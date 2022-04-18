<h1 align="center">Welcome to @thaddeusjiang/react-promise-data 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@thaddeusjiang/react-promise-data" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@thaddeusjiang/react-promise-data.svg">
  </a>
  <a href="https://github.com/ThaddeusJiang/react-promise-data#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/ThaddeusJiang/react-promise-data/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/ThaddeusJiang/react-promise-data/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/ThaddeusJiang/@thaddeusjiang/react-promise-data" />
  </a>
  <a href="https://twitter.com/ThaddeusJiang" target="_blank">
    <img alt="Twitter: ThaddeusJiang" src="https://img.shields.io/twitter/follow/ThaddeusJiang.svg?style=social" />
  </a>
</p>

> Don't wrong again about "isLoading? 🔄 : isError ? ❌ : 👍"

<!-- ### 🏠 [Homepage](https://github.com/ThaddeusJiang/react-promise-data#readme) -->

<!-- ### ✨ [Demo](https://react-promise-data.vercel.app/) -->

## Features

- [x] isLoading? 🔄 : isError ? ❌ : 👍

## Install

```sh
yarn add @thaddeusjiang/react-promise-data
```

## Usage

```js
export const DefaultLoading = () => {
  return (
    <PromiseDataRender isLoading={true} isError={false} data={'anything'}>
      {({ data }) => <div>{data}</div>}
    </PromiseDataRender>
  );
};

export const DefaultError = () => {
  return (
    <PromiseDataRender isLoading={false} isError={true} data={'anything'}>
      {({ data }) => <div>{data}</div>}
    </PromiseDataRender>
  );
};

export const DefaultData = () => {
  return (
    <PromiseDataRender isLoading={false} isError={false} data={'anything'}>
      {({ data }) => <div>{data}</div>}
    </PromiseDataRender>
  );
};

export const CustomLoading = () => {
  return (
    <PromiseDataRender
      isLoading={true}
      isError={false}
      data={'anything'}
      loadingComponent={() => <div>🔄 Custom Loading...</div>}
    >
      {({ data }) => <div>{data}</div>}
    </PromiseDataRender>
  );
};

export const CustomError = () => {
  return (
    <PromiseDataRender
      isLoading={false}
      isError={true}
      data={'anything'}
      error={new Error('💥 Custom Error!')}
      errorComponent={(error) => <div>💥 Custom Error: {error}</div>}
    >
      {({ data }) => <div>{data}</div>}
    </PromiseDataRender>
  );
};
```

## Development
### Storybook

Run inside another terminal:

```bash
yarn storybook
```


### Example

Then run the example inside another:

```bash
yarn link

cd example
yarn link "@thaddeusjiang/react-promise-data"
yarn # or yarn to install dependencies
yarn start #

```

### Run tests

```sh
yarn test
```

## Author

👤 **Thaddeus Jiang**

* Website: https://thaddeusjiang.com/
* Twitter: [@ThaddeusJiang](https://twitter.com/ThaddeusJiang)
* Github: [@ThaddeusJiang](https://github.com/ThaddeusJiang)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ThaddeusJiang/react-promise-data/issues). You can also take a look at the [contributing guide](https://github.com/ThaddeusJiang/react-promise-data/blob/main/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Thaddeus Jiang](https://github.com/ThaddeusJiang).<br />
This project is [MIT](https://github.com/ThaddeusJiang/react-promise-data/blob/main/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_