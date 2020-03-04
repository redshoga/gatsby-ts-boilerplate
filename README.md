# gatsby-ts-boilerplate

Gatsby + Typescript + Linter + Formatter + VSCode config + Testing framework + UI component explorer

This project was based on [gatsbyjs/gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default).

Example build page: https://gatsby-ts-boilerplate.web.app/

## 🚀 Quick start

1.  Clone the repo

    ```shell
    git clone git@github.com:redshoga/gatsby-ts-boilerplate
    ```

1.  **Start developing.**

    ```shell
    cd gatsby-ts-boilerplate
    yarn
    yarn start
    ```

## 🐱 Features

### 🕶 Main features

- [x] TypeScript (strict: true) (using `gatsby-plugin-typescript`)
- [x] Linters, Formatter (ESlint, stylelint, Prettier)
- [ ] Storybook (UI component explorer)
- [ ] Testing framework (Jest + Enzyme)
- [x] Support SCSS (using `gatsby-plugin-sass`)

### 🏹 Other features

- [x] Normalize.css
- [x] VSCode config (Format *.css, *.scss, *.ts, *.tsx, *.js, *.jsx files on save)
- [x] Call `src/gatsby/node.ts` from `gatsby-node.js`
- [x] Auto generate query type (using `gatsby-plugin-graphql-codegen`)
- [x] Markdown pages sample code (with reference to the official [docs](https://www.gatsbyjs.org/docs/adding-markdown-pages/))
- [x] Example built page: https://gatsby-ts-boilerplate.web.app/ (Gatsby Cloud -> Firebase Hosting)

### 🔥 Default support features from [gatsbyjs/gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default)

- [x] PWA + Offline (using `gatsby-plugin-manifest`, `gatsby-plugin-offline`)
- [x] `<SeoInfo />`: SEO Component (using `gatsby-plugin-react-helmet`)
- [x] `<Img />`: Optimized image component (using `gatsby-image`)

## Recommend VSCode extensions

Please refer to `/.vscode/extensionts.json`.

## License

MIT
