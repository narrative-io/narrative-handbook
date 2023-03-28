# narrative-handbook
Narrative Employee Handbook

## Setup

1. Follow [asdf setup instructions](https://asdf-vm.com/guide/getting-started.html#_3-install-asdf)
2. Install NodeJS using asdf

    ```bash
    asdf plugin add nodejs
    asdf install
    asdf reshim
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

To deploy manually:

```bash
cd docs && pnpm run generate && pnpm run deploy
```

To deploy automatically, simply push code to the `main` branch and the Github Actions `docs` Workflow will take care of the deployment.

The docs provide two static files that are needed to get the static site to work on Github Pages:
- `public/CNAME`: Needed to configure the domain name that the site should be accessible from
- `public/.nojekyll`: See https://github.com/nuxt/nuxt/issues/12480

Also worth mentioning: the docs workflow does not use the self-hosted Github runners because using crashes with the following error:
```
/lib64/libm.so.6: version `GLIBC_2.27' not found (required by node)
```