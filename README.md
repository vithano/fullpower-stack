<p align="center">
  <a href="https://github.com/kaminskypavel/fullpower-stack">
    <img alt="fullpower-stack" src="./docs/logo.png" width="546">
  </a>
</p>

<p align="center">
  an opinionated stack for building full power web applications  
</p>

<p align="center">
  <a href="https://github.com/kaminskypavel/fullpower-stack/actions/workflows/ci.yml"><img alt="GitHub CI Status" src="https://github.com/kaminskypavel/fullpower-stack/actions/workflows/ci.yml/badge.svg"></a>
</p>

### Introduction

This is a monorepo containing a set of packages that can be used to build full power web applications. It is an opinionated stack that is based on the following principles:

- DX (Developer Experience)
- Speed of iteration

---

## Supported Frameworks

<br/>

[<img src="./docs/apps/nextjs.svg" height="90">](./apps/nextjs/) [<img src="./docs/apps/vite.svg" height="90">](./apps/vite/) [<img src="./docs/apps/remix.png" height="90">](./apps/remix/)[<img src="./docs/apps/astro.svg" height="70">](./apps/astro/)

all apps are built with the same set of packages and tools (see [workspace packages](./packages.json)
and preconfigured to pick changes from shared packages

---

## Getting Started

clone this repository

```
pnpx degit https://github.com/kaminskypavel/fullpower-stack my-app
```

install dependeciens (we use pnpm)

```
pnpm install
```

### Dev Tool (WIP)

<table>
  <tr>
    <th>Framework</th>
    <th>FullPower Stack</th>
    <th>Implemented</th>
    <th>Version</th>
  </tr>
  <tr>
    <td>Package manager</td>
    <td align="center"><a aria-label="PNPM" href="https://pnpm.io">
        <img height="50" width="fit-content" alt="" src="https://user-images.githubusercontent.com/4253088/196271039-0b998d0d-5867-47bf-a627-e36825175aeb.png">
       </a>
      </td>
    <td align="center">✅</td>
    <td align="center">
      <a aria-label="NPM version" href="https://www.npmjs.com/package/pnpm">
        <img alt="" src="https://img.shields.io/npm/v/pnpm.svg?style=for-the-badge&labelColor=000000">
       </a>
    </td>
  </tr>
  <tr>
    <td>Monorepo manager</td>
    <td align="center"><a aria-label="turbo repo" href="https://turborepo.org/docs">
        <img height="50" width="fit-content" alt="" src="https://user-images.githubusercontent.com/4253088/196269627-8da367d0-5e1a-40a6-b261-d0f4e00498c1.png">
       </a>
      </td>
    <td align="center">✅</td>
    <td align="center">
      <a aria-label="NPM version" href="https://www.npmjs.com/package/turbo">
        <img alt="" src="https://img.shields.io/npm/v/turbo.svg?style=for-the-badge&labelColor=000000">
       </a>
    </td>
  </tr>
  <tr>
    <td>Frontend</td>
    <td align="center"><a aria-label="next js" href="https://nextjs.org/docs/getting-started">
        <img height="50" width="fit-content" alt="" src="https://user-images.githubusercontent.com/4253088/196269841-32444c2d-7798-471d-8c7d-455323680297.png">
       </a>
      </td>
    <td align="center">✅</td>
    <td align="center">
      <a aria-label="NPM version" href="https://www.npmjs.com/package/next">
        <img alt="" src="https://img.shields.io/npm/v/next.svg?style=for-the-badge&labelColor=000000">
       </a>
    </td>
  </tr>
   <tr>
    <td>Frontend css</td>
    <td align="center"><a aria-label="Tailwind CSS" href="https://tailwindcss.com/docs/installation">
        <img height="50" width="fit-content" alt="" src="https://user-images.githubusercontent.com/4253088/196271439-de4d436c-fb47-4a7e-84a6-fcc01d86026b.png">
       </a>
      </td>
    <td align="center">✅</td>
    <td align="center">
      <a aria-label="NPM version" href="https://www.npmjs.com/package/tailwindcss">
        <img alt="" src="https://img.shields.io/npm/v/tailwindcss.svg?style=for-the-badge&labelColor=000000">
       </a>
    </td>
  </tr>
  <tr>
    <td>Server-Client communication</td>
    <td align="center"><a aria-label="TRPC" href="https://trpc.io/">
        <img height="50" width="fit-content" alt="" src="https://trpc.io/img/logo-text-black.svg">
       </a>
      </td>
    <td align="center">✅</td>
    <td align="center">
      <a aria-label="NPM version" href="https://www.npmjs.com/package/@trpc/server">
        <img alt="" src="https://img.shields.io/npm/v/@trpc/server.svg?style=for-the-badge&labelColor=000000">
       </a>
    </td>
  </tr>
   <tr>
    <td>Backend</td>
    <td align="center"><a aria-label="Express" href="https://expressjs.com/">
        <img height="50" width="fit-content" alt="" src="https://camo.githubusercontent.com/0566752248b4b31b2c4bdc583404e41066bd0b6726f310b73e1140deefcc31ac/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67">
       </a>
      </td>
    <td align="center">✅</td>
    <td align="center">
      <a aria-label="NPM version" href="https://www.npmjs.com/package/express">
        <img alt="" src="https://img.shields.io/npm/v/express.svg?style=for-the-badge&labelColor=000000">
       </a>
    </td>
  </tr>
  <tr>
    <td>ORM</td>
    <td align="center"><a aria-label="Prisma" href="https://prisma.io/">
        <img height="50" width="fit-content" alt="" src="https://website-v9.vercel.app/logo-dark.svg">
       </a>
      </td>
    <td align="center">🛠️</td>
    <td align="center">
      <a aria-label="NPM version" href="https://www.npmjs.com/package/prisma">
        <img alt="" src="https://img.shields.io/npm/v/prisma.svg?style=for-the-badge&labelColor=000000">
       </a>
    </td>
  </tr>
  <tr>
    <td>Testing</td>
    <td align="center"><a aria-label="Vitest" href="https://vitest.dev/">
        <img height="50" width="fit-content" alt="" src="https://user-images.githubusercontent.com/4253088/196270525-cea1d088-d329-4dba-879d-5e48ef779544.png">
       </a>
      </td>
    <td align="center">✅</td>
    <td align="center">
      <a aria-label="NPM version" href="https://www.npmjs.com/package/vitest">
        <img alt="" src="https://img.shields.io/npm/v/vitest.svg?style=for-the-badge&labelColor=000000">
       </a>
    </td>
  </tr>
    <tr>
    <td>Testing components</td>
    <td align="center"><a aria-label="Vitest" href="https://testing-library.com/docs/react-testing-library/intro/">
        <img height="50" width="fit-content" alt="" src="https://user-images.githubusercontent.com/4253088/196271647-0265eca3-61e4-44c2-8641-fabdb07e875f.png">
       </a>
      </td>
    <td align="center">✅</td>
    <td align="center">
      <a aria-label="NPM version" href="https://www.npmjs.com/package/@testing-library/react">
        <img alt="" src="https://img.shields.io/npm/v/@testing-library/react.svg?style=for-the-badge&labelColor=000000">
       </a>
    </td>
  </tr>
  </tr>
    <tr>
    <td>Component library</td>
    <td align="center"><a aria-label="Story book" href="https://storybook.js.org/blog/first-class-vite-support-in-storybook">
        <img height="50" width="fit-content" alt="" src="./docs/apps/storybook.png">
       </a>
      </td>
    <td align="center">🛠️</td>
    <td align="center">
      Waiting for vite support in Version 7.0
    </td>
  </tr>
   <tr>
    <td>Test mocks</td>
    <td align="center"><a aria-label="MSW" href="https://mswjs.io/docs/">
        <img height="50" width="fit-content" alt="" src="https://user-images.githubusercontent.com/11342649/204375767-0075e85e-3602-41d7-a9e7-03c4f8c36f32.png">
       </a>
      </td>
    <td align="center">✅</td>
    <td align="center">
        <a aria-label="NPM version" href="https://www.npmjs.com/package/msw">
          <img alt="" src="https://img.shields.io/npm/v/msw.svg?style=for-the-badge&labelColor=000000">
       </a>
    </td>
  </tr>
  <tr>
    <td>Lint</td>
    <td align="center">
      Eslint + Prettier
     </td>
    <td align="center">✅</td>
    <td align="center">
        <a aria-label="NPM version" href="https://www.npmjs.com/package/eslint">
          <img alt="" src="https://img.shields.io/npm/v/eslint.svg?style=for-the-badge&labelColor=000000">
       </a>
    </td>
  </tr>
  <tr>
    <td>Git</td>
    <td align="center">
      Lint-staged + Husky
     </td>
    <td align="center">✅</td>
    <td align="center">
        <a aria-label="NPM version" href="https://www.npmjs.com/package/husky">
          <img alt="" src="https://img.shields.io/npm/v/husky.svg?style=for-the-badge&labelColor=000000">
       </a>
    </td>
  </tr>
   <tr>
    <td>CI</td>
    <td align="center">
      Github Actions
     </td>
    <td align="center">✅</td>
    <td align="center"></td>
  </tr>
</table>
### Todo

- consider moving to Rome tools [Link1](https://twitter.com/sebmck/status/1589987087780302848) [Link2](https://rome.tools/blog/2022/11/08/rome-10.html)

- maybe add a PWA support for [Vite](https://vite-pwa-org.netlify.app/guide/)

### Contributors

<table>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/kaminskypavel>
            <img src=https://avatars.githubusercontent.com/u/4253088?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Pavel 'PK' Kaminsky/>
            <br />
            <sub style="font-size:14px"><b>Pavel 'PK' Kaminsky</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/vithano>
            <img src=https://avatars.githubusercontent.com/u/11342649?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=vithano/>
            <br />
            <sub style="font-size:14px"><b>vithano</b></sub>
        </a>
    </td>
</tr>
</table>
