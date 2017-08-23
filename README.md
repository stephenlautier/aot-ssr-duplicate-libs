# angular SSR + AOT emitting twice libs
- Run the following
```
git clone https://github.com/stephenlautier/aot-ssr-duplicate-libs
npm i
npm run build:rel
```
 - Open `ClientApp/dist/main-server.js` and `ClientApp/dist/vendor.js`
 - Search for `[translate],[ngx-translate]` (you should find 2x, one in each file)