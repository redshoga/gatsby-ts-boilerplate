# gatsby-ts-boilerplate

Gatsby + TypeScript + Linter + Formatter + VSCode config + Testing framework + UI component explorer

This project was based on [gatsbyjs/gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default).

Example build page: https://gatsby-ts-boilerplate.web.app/

## 🚀 Quick start

1.  Clone the repo

    ```shell
    git clone git@github.com:redshoga/gatsby-ts-boilerplate your-project-name
    ```

    or

    ```shell
    gatsby new your-project-name https://github.com/redshoga/gatsby-ts-boilerplate
    ```

2.  **Start developing.**

    ```shell
    cd your-project-name
    yarn
    yarn start
    ```

## 🐱 Features

### 🕶 Main features

- [x] TypeScript (strict: true) (using `gatsby-plugin-typescript`)
- [x] Linters, Formatter (ESlint, stylelint, Prettier)
- [x] Storybook (UI component explorer)
- [x] Testing framework (Jest + Enzyme)
- [x] CI config for GitHub Actions
- [x] Support SCSS (using `gatsby-plugin-sass`)

### 🏹 Other features

- [x] Normalize.css
- [x] VSCode config (Format _.css, _.scss, _.ts, _.tsx, _.js, _.jsx files on save)
- [x] Call `src/gatsby/node.ts` from `gatsby-node.js`
- [x] Auto generate query type (using `gatsby-plugin-graphql-codegen`)
- [x] Markdown pages sample code (with reference to the official [docs](https://www.gatsbyjs.org/docs/adding-markdown-pages/))
- [x] Example built page: https://gatsby-ts-boilerplate.web.app/ (Gatsby Cloud -> Firebase Hosting)

### 🔥 Default support features from [gatsbyjs/gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default)

- [x] PWA + Offline (using `gatsby-plugin-manifest`, `gatsby-plugin-offline`)
- [x] `<SeoInfo />`: SEO Component (using `gatsby-plugin-react-helmet`)
- [x] `<Img />`: Optimized image component (using `gatsby-image`)

## Recommend VSCode extensions

Please refer to `/.vscode/extensions.json`.

## Recommended pipeline

### on PR created

- Create preview of Storybook (by Netlify)
- Create preview of web (by Gatsby Cloud)
- Run CI(Continuous Integration) (by GitHub Actions)

### on Merge

- Deploy storybook files to Netlify (by Netlify)
- Deploy web to Firebase Hosting (by Gatsby Cloud)

## License

MIT
