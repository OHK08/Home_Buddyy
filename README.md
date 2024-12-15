# Buy & Sell Home 
### A secure  home buying and selling application.

#### App Frontend Made With 
- React & Vite
- Typescript
- CSS
- Ant Design


<hr/>

### Contrubution are welcome here is the step ->

1) **Fork Repositories.**


2) **Clone to to your local system by using following comand.**
  ```
  git clone https://github.com/<your_user_name>/___________
  ```

3) **Navigate to the project directory 📁.**
  ```
  cd ____________
  ```

4) **Create a branch.**

```
  git checkout -b <branch-name>
```

5) **Do the needful changes**


- First Install packegs
  ```
    npm install
  ```

- Run app using 
  ```
    npm run dev
  ```

- Do needful changes


6) **Add and commit the changes.**

```
  git add .
  git commit -m "<Clear and concise commit message>"
```

7) 


## For Production

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```