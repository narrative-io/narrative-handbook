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

The project has been initially setup using [Docus](https://docus.dev/), which relies on a number of underlying technologies: 
- [pnpm](https://pnpm.io/): The Node Package Manager used to build the project. Provides similar functionality as [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), etc.
- [Nuxt 3](https://nuxt.com/): The underlying web framework that provides conventions and tooling on top of [Vue 3](https://vuejs.org/), and makes it possible to generate static/pre-rendered websites.
- [Vue 3](https://vuejs.org/): The vue framework that provides the ability to compose and render web components.
- [Nuxt Content](https://content.nuxtjs.org/): A Nuxt 3 Module that provides the file-based CMS functionality.
- [Typography](https://typography.nuxt.space/): Provides a set of customizable "prose" components (paragraphs, links, block quotes, etc) that are used by Nuxt Content to render Markdown.
- [Elements](https://elements.nuxt.space/): a set of components designed to be used as Markdown Components using Nuxt Content.

### Documentation
Because the stack is made of so many projects, figuring out where to find relevant documentation can be a bit tricky. Here are a few useful starting points:
- Using the Elements components from Markdown pages:
  - [Overview of the Elements components](https://docus.dev/api/components)
  - [Reference documentation of the Elements components](https://elements.nuxt.space/getting-started)
  - [The icons that can be used from the icon Elements component](https://icones.js.org/)
  - [MDC Syntax: The syntax used to call VueJS components from Markdown](https://content.nuxtjs.org/guide/writing/mdc/)
- Customizing the output of the Markdown rendering process
  - [Typography documentation](https://typography.nuxt.space/)
  - [The original Typography Prose components (Source Code)](https://github.com/nuxt-themes/typography/tree/main/components)
  - [The overrides to these components made by Nuxt Content (Source Code)](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose)
  
  The Typography Prose components can also be used from custom components to produce output similar to rendered Markdown.
- Using layouts:
  - [The default layouts that Docus provides](https://docus.dev/api/layouts)
  - [How layouts work in Nuxt 3](https://nuxt.com/docs/guide/directory-structure/layouts)
- Using the docus objects from components
  - [Docus composables](https://docus.dev/api/composables)
  - [How Nuxt 3 composables work](https://nuxt.com/docs/guide/directory-structure/composables)
 
### Project Skeleton
The project was initially set-up using

```bash
pnpm dlx nuxi init -t themes/docus
```

## Deploy

To deploy manually:

```bash
cd docs && pnpm run generate && pnpm run deploy
```

To deploy automatically, simply push code to the `main` branch and the Github Actions `docs` workflow will take care of the deployment.

The docs bundle two static files that are needed to get the static site to work on Github Pages:
- `public/CNAME`: Needed to configure the domain name that the site should be accessible from
- `public/.nojekyll`: See https://github.com/nuxt/nuxt/issues/12480

Also worth mentioning: the docs workflow does not use the self-hosted Github runners because using them crashes with the following error:
```
/lib64/libm.so.6: version `GLIBC_2.27' not found (required by node)
```

## IDE Support

### Visual Studio Code
- [MDC Extension](https://marketplace.visualstudio.com/items?itemName=Nuxt.mdc)
- [Markdown All in One Extension](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

