# tsxx <a href="https://npm.im/tsxx"><img src="https://badgen.net/npm/v/tsxx"></a> <a href="https://npm.im/tsxx"><img src="https://badgen.net/npm/dm/tsxx"></a> <a href="https://packagephobia.now.sh/result?p=tsxx"><img src="https://packagephobia.now.sh/badge?p=tsxx"></a>

tsxx is a Node.js runtime HMR (Hot Module Replacement) tool developed based on tsx. Its usage is completely identical to tsx. When using it, HMR functionality is enabled by default compared to tsx, helping you significantly speed up program restarts.

[read tsx README.md](https://github.com/esbuild-kit/tsx/tree/develop)

---

install to npm devDependencies : 
```
npm i -D tsxx
```

global install:
```
npm i -g tsxx
```

now, you can use `tsxx` command in your terminal.
```
tsxx ./src/index.ts
```

usage:
```json
{
  "scripts": {
    "dev": "tsxx ./src/index.tsx"
  }
}
```

# warning ⚠️⚠️⚠️⚠️

not set `"type": "module"` in `package.json`, if you use `.js`, change file extension to `.mjs` or `.cjs`
. 

determining the file type helps tsx better address import issues.
