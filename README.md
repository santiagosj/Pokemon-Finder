# Pokemon Finder

Aplicación de prueba con [pokeAPI](https://pokeapi.co/) y [ReactJS](https://reactjs.org/)

## Instalación ⚡

1. Clonar este repo ```git clone https://github.com/santiagosj/Pokemon-Finder.git ``` si tenes git instalado. Si no descargarlo en zip. 
2. Entrar con cmd en el root del repo e instalar dependencias ```npm install ```
3. Ejecutar el servidor local en localhost:3000   ```npm start ```



## Arquitectura general 🏡

```
src/
   -Components/ 
              -PokemonSection/ 
                             - PokemonCard.js 
              -scss/ 
                   -_app.scss
                   -_buttons.scss
                   -_form.scss
                   -_card.scss
                   -_custom_mixins.scss
                   -_layout.scss
                   -_variables.scss
                   -styles.scss
              -SearchBar/
                        - SearchBar.js
   -Pages/
         -Home.js
   -Services/ 
            -Firebase/
                    -Config.js
                    -Firebase.js
            -Hooks/
                  -CustomAsyncHook.js
                  -CustomFormHook.js  
            -Store/
                  - Actions.js
                  - PokemonProvider.js
                  - PokemonReducer.js
   -App.js
   -Index.js

```

## Deploy 🚀
Usé firebase para hacer el deploy. Puede correr en local sin la correspondiente configuración de firebase.
👉[Demo](https://busca-pokemon.web.app)

## Objetivo 🎯
Traer un pokemón específico haciendo un call al api [PokeApi](https://pokeapi.co/)
creando una barra de Search 🔍 con un botón que ejecute el evento que dispara el call.

## Aproach ☕



## License
[MIT](https://choosealicense.com/licenses/mit/)

