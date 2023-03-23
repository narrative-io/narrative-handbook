# narrative-handbook
Narrative Employee Handbook

## Setup

1. Follow [asdf setup instructions](https://asdf-vm.com/guide/getting-started.html#_3-install-asdf)
2. Install NodeJS using asdf

    ```bash
    asdf plugin add nodejs
    asdf install
    asdf reshim
    npm install -g npm@9.5.0
    npm install -g pnpm
    ```
3. Install dependencies

    Install dependencies with `npm install`, `yarn install`, or `pnpm install`

    ```bash
    cd docs && pnpm install
    ````
4. Start development server

    Start development server with `npm run dev`, `yarn dev`, or `pnpm run dev`

    ```bash
    cd docs && pnpm run dev
    ```

## Technology Stack

The project has been initially setup using [Docus](https://docus.dev/), which relies on [Nuxt 3](https://nuxt.com/) and its [Nuxt Content Plugin](https://content.nuxtjs.org/) that provides a file-based CMS.

```
pnpm dlx nuxi init -t themes/docus
```

## Deploy

```bash
cd docs && pnpm run generate && pnpm run deploy
```

The docs provide two static files that are needed to get the static site to work on Github Pages:
- `public/CNAME`: Needed to configure the domain name that the site should be accessible from
- `public/.nojekyll`: See https://github.com/nuxt/nuxt/issues/12480