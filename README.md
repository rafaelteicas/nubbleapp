#NubbleApp
This project is made in React Native CLI as part of the Coffstack course.

## Table of Contents
-[Technologies and Libraries](#🏗️-technologies-and-libraries)
-[Installation](#⬇️-installation)
-[File Structure](#📁-file-structure)
-[Screenshots](#📷-screenshots)



#### 🏗️  Technologies and Libraries
- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Restyle](https://shopify.github.io/restyle/)
- [React Navigation](https://reactnavigation.org/)
- [TanStack Query v3](https://tanstack.com/query/v3/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Axios](https://axios-http.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Jest](https://jestjs.io)

### ⬇️ Installation
Clone the repository
```
git clone https://github.com/rafaelteicas/nubbleapp
```
Project directory
```
cd project
```
Install dependencies 
```
npm install or yarn
```


### 📁 File Structure
``````
project
  ├─ __mocks__              ## Mock async storage
  ├─ .husky                 ## Husky lib for pre-commit hook
  ├─ coverage               ## Coverage from jest library
  ├─ src                    ## Source code from project
    ├─ api                  ## Api calls
    ├─ assets               
    ├─ brand                ## Brand design
    ├─ components           ## Components from UI
    ├─ domain               ## The scope and context of application
    ├─ hooks                ## Custom hooks
    ├─ infra                ## The infrastructure of application
    ├─ routes               ## Routes from application (BottomTab, Stack)
    ├─ screens              ## Screens are divided by AuthStack and AppStack
    ├─ services             ## The services from application
    ├─ test                 ## Jest setup and utils
    ├─ theme                ## Theme config with Restyle lib
    ├─ types                
    ├─ utils        
  ├─ App.tsx                ## Entry point with the providers
  ├─ jest.config.js
  ├─ tsconfig.json          ## Config of typescript and absolute paths
  ├─ babel.config.js        ## Babel and absolute paths

``````

### 📷 Screenshots
| AuthStack   |      AppStack      |  
|----------|:-------------:|
|<img src="https://i.ibb.co/qxr0JQV/sec.png">|<img src="https://i.ibb.co/FV9tpzk/first.png">|