# GitHub Blocks Template

This repository is based on a [starter template](https://github.com/githubnext/blocks-template) for building your own Blocks.

## Quickstart

vezwork's note: I've made it so that this repo has [Polytope](https://github.com/vezwork/Polytope/) as a [submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules). If you are cloning this repo, I believe you will have to run:

```bash
git submodule init
git submodule update
```

Note also that pulling will not be enough, you will also have to run `git submodule update`. Then you can run:

```bash
yarn # install dependencies
yarn start # start the dev server
# Or use npm, pnpm, you know the drill
```

When you visit [localhost:4000](https://localhost:4000) in your browser, you'll be
redirected to the Blocks app, but your locally-developed blocks will appear in the block picker:

<img alt="Block picker" src="https://user-images.githubusercontent.com/56439/181648955-101b6567-3f9b-44b3-af99-7ef3ca6161b9.png" width="418" />

(if you're using Safari (or another browser that doesn't permit calling `http` URLs from an `https` page), run `yarn start-https` and visit [https://localhost:4000](https://localhost:4000) instead.)

This template includes one example File Block and one Folder Block. The dev server supports hot reloading, so make some changes, and see what they do!

## Under the hood

Currently, Blocks are [React](https://reactjs.org/) components. They have a well-defined contract with their surroundings, and receive a [fixed set of props](https://github.com/githubnext/blocks/blob/main/docs/Developing%20blocks/4%20API%20reference%20and%20types.md) when they are instantiated. They are developed in [TypeScript](https://www.typescriptlang.org/), and bundled with [Vite](https://vitejs.dev/).

## More Info

Visit [githubnext/blocks](https://blocks.githubnext.com/githubnext/blocks) for a full tutorial, documentation, and examples.

You should also join us in our discord! There's a [#blocks channel](https://discord.com/channels/735557230698692749/1039950186136469535) where you can connect with us and other folks who are building Blocks:

> 👋 https://discord.gg/githubnext

## License

MIT

✌️ ❤️
_GitHub Next_
