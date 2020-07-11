# Pokemon Finder

Aplicación de prueba con [pokeAPI](https://pokeapi.co/) y [ReactJS](https://reactjs.org/)

## Instalación ⚡

1.  ```git clone https://github.com/santiagosj/Pokemon-Finder.git ``` 
2.  cd en el repo ```npm install ```
3. ```npm start ```

#### Dependencias.

* [axios](https://www.npmjs.com/package/axios) 
* [dotenv](https://www.npmjs.com/package/dotenv)

#### Dev-dependencias
* [node-sass](https://www.npmjs.com/package/node-sass)
* [enzyme](https://www.npmjs.com/package/enzyme)
* [enzyme-adapter-react-16](https://www.npmjs.com/package/enzyme-adapter-react-16)
* [react-test-renderer](https://www.npmjs.com/package/react-test-renderer)
## Estructura general 🏡

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
Usé [firebase](https://firebase.google.com/?hl=es) para hacer el deploy. Puede correr en local sin la correspondiente configuración de firebase. 

## Objetivo 🎯
Traer un pokemón específico haciendo un call al api [PokeApi](https://pokeapi.co/)
creando una barra de Search 🔍 con un botón que ejecute el evento que dispara el call.

## Aproach ☕

#### Administración del Estado de la App
Configuré un estado general utilizando Context, para proveer el estado a toda la aplicación, sin necesidad de pasarlo a través de propiedades entre componentes, lo cual a medida de que el proyecto tome nuevos requerimientos, volvería un pesadilla de herencia el mantenimiento del código. Modifico este estado despachando una acción ```FIND_POKEMON```en el evento ```handleSubmit``` desde el componente ```<SearchBar/>```, ayudandome de dos custom hooks, ```useCustomFormHook``` y ```useAsyncHook```. El componente Home se encarga de escuchar este estado a traves del ```{PokemonContext}``` y renderiza un componente ```<PokemonCard pokemon={pokemon}/>``` que recibe dentro de una propiedad 'pokemon' el pokemon(objeto) a renderizar.

#### useCustomFormHook
Este custom hook escucha los cambios los inputs de cada formulario que pueda llegar a necesitar en la app. Y la idea principal es agarrar las tareas repetitivas que conlleva armar la lógica de un formulario y reutilizarla en otros formularios.

#### useAsyncHook
Este Hook se encarga de pedir de manera asíncrona, la data, y actualiza el estado en context despachando en el la acción definida en el Store de la app.

##### Automation Testing - Unit Testings
Configuración -> Enzyme + Jest  ```npm test -a``` 

##### Styles

Configuración básica de un sistema SASS implementando @mixins, variables y breakpoints, centralizando las hojas de estilo.