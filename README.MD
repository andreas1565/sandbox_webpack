# sandbox webpack

## projektberivelse
Grunden til at jeg laver denne sand box med webpack  Er at nemmere konfigurere Sass til CSS og når jeg style med for eksempel flex box og grid er det ikke alle browser der kan understøtte det og jeg ville gerne kunne bruge nogle af de nyeste javascript som browser ikke kan  understøtte og f.eks. hvis jeg får nogle billeder jeg skal have en mindre fin størrelse så de hurtigere kan vi downloadet i browseren kan webpack gør billederne mindre så jeg ikke behøver at åbne for eksempel photoshop og jeg vil gerne kunne komprimere min css og javascript

## list over npm pakker
* babel-core er API. For v5 er babel-pakken CLI og afhænger af babel-core. For v6 er babel-cli-pakken CLI (CLI-bin-kommandoen er dog stadig babel[npm docs](https://www.npmjs.com/package/babel-core)

* babel-plugin-transform-runtime jeg, at det kun er runtime (polyfill og helpers), der understøtter kode, der allerede er blevet transformeret.[npm docs](https://www.npmjs.com/package/babel-plugin-transform-runtime) og npm docs anbefalede at man også installer @babel/runtime

* Babel preset-env er en forudindstillet der komprimere ned til minimum ES5 (preset-es2015)[npm docs](https://www.npmjs.com/package/babel-preset-env)

* Autoprefixer. PostCSS-plugin til parse CSS og præfikser til CSS-regler ved hjælp af værdier og det er anbefalede af google og brugt i Twitter and Alibaba. [npm docs](https://www.npmjs.com/package/autoprefixer)

* babel-loader. Denne pakke tillader transpilering af JavaScript-filer ved hjælp af Babel og webpack. Bemærk: Problemer med output skal rapporteres på Babel Issues tracker. [npm docs](https://www.npmjs.com/package/babel-loader)

* babel-minify-webpack-plugin kan komprimere javascript [npm docs](https://www.npmjs.com/package/babel-minify-webpack-plugin)

* clean-webpack-plugin gør det muligt at slette dist mappen efter `npm run build` [npm docs](https://www.npmjs.com/package/clean-webpack-plugin)

* css-loader  style-loader er en Webpack-læsser, der kan indlæse noget CSS og injicere det i dokumentet via et <link> -tag. css-loader er den loader, der kan analysere en CSS-fil og anvende forskellige transformeringer på den. Af afgørende betydning har den en CSS-modultilstand, der kan tage vores CSS og hash de klasser som nævnt ovenfor [npm docs](https://www.npmjs.com/package/css-loader)

* cssnano kan komprimere css [npm docs](https://www.npmjs.com/package/gulp-cssnano)

* file-loader. Fillæsseren løser import /require() på en fil til en url og udsender filen til outputmappen. [npm docs](https://www.npmjs.com/package/file-loader)

* image-webpack-loader gøre Optimering af billeder se dokumentationen for at kunne ændre optimering af billeder [npm docs](https://www.npmjs.com/package/image-webpack-loader)

* mini-css-extract-plugin får alle dinne css filer til at blive til en css file [npm docs](https://www.npmjs.com/package/mini-css-extract-plugin)

* postcss-loader postCSS er en forbehandler, der bruger JS-plugins til at transformere CSS-stilarter. Disse plugins kan fylde din CSS, understøtte variabler og mixins, transportere fremtidig CSS-syntaks, inline-billeder og mere[npm docs](https://github.com/postcss/postcss-loader)

* Sass er lige some css men med flere features [officeelle docs](https://sass-lang.com/documentation) [npm docs](https://www.npmjs.com/package/sass) 

* sass-loader er en loader til Webpack til kompilering af SCSS / Sass-filer. stil-loader indsprøjter vores stilarter i vores DOM. css-loader tolker @import og @url () og løser dem. mini-css-extract-plugin udtrækker vores CSS ud af JavaScript-bundtet i en separat fil, der er vigtig for produktionsopbygning. [npm docs](https://github.com/postcss/sass-loader)

* Webpack er en modulbundter. Webpack kan tage sig af bundling sammen med en separat opgaveløber. ... Nogle gange bruges disse plugins til at udføre opgaver, der normalt udføres uden for webpack, såsom rengøring af build-biblioteket eller implementering af build [officeelle docs](https://webpack.js.org/concepts/)

*  webpack CLI leverer et fleksibelt sæt kommandoer til udviklere for at øge hastigheden, når du opretter et tilpasset webpack-projekt. Fra webpack v4 forventer webpack ikke en konfigurationsfil, men ofte ønsker udviklere at oprette en mere tilpasset webpack-konfiguration baseret på deres brugssager og behov [npm docs](https://www.npmjs.com/package/webpack-cli)

* webpack-dev-server lokal http server med hot reloading [npm docs](https://www.npmjs.com/package/webpack-dev-server)


## kommandoer
  for at installer devDependencies fra package.json skriv `npm i` for at køre dette projekt `npm run dev` det vil starter en lokal http server med hot reloading hvis du ville installer en nye pakke/moduler hvis pakken kun skal bruge på fro-end se kode-eksempler ellers skriv `npm i pakkenavn` hvis du vill fjern en pakke/moduler skriv `npm uninstall pakkenavn` for at opdatere alle pakke devDependencies skrive `npm update` denne komando bør skrives før `npm i` for produktion skrive `npm run build` og upload dist mappen til din http server 