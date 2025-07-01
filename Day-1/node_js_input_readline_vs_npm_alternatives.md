# 🧠 Node.js Input: `readline` vs NPM Alternatives

You can take user input in Node.js in two main ways: using the **built-in ****\`\`**** module** or via an **NPM package** like `readline-sync` or `inquirer`.

---

## ✅ Option 1: Use Built-in `readline` (No NPM Needed)

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
```

### ▶️ Run It

```bash
node app.js
```

- Uses callbacks (asynchronous)
- Great for non-blocking command-line apps

---

## 📦 Option 2: Use `readline-sync` (NPM)

This module allows synchronous user input, like `input()` in Python.

### 🔧 Step 1: Install the package

```bash
npm install readline-sync
```

### 💻 Step 2: Use it in your code

```js
const readlineSync = require('readline-sync');

const name = readlineSync.question('Enter your name: ');
console.log(`Hello, ${name}!`);
```

### ✅ Advantages:

- Simple and synchronous
- Good for quick scripts and CLIs

---

## 🧩 Option 3: Use `inquirer` (NPM)

`inquirer` is a powerful CLI tool that provides interactive prompts and menus.

### 🔧 Step 1: Install it

```bash
npm install inquirer
```

### 💻 Step 2: Use it like this:

```js
const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    name: 'username',
    message: 'What is your name?'
  },
  {
    type: 'list',
    name: 'language',
    message: 'Choose your favorite programming language:',
    choices: ['JavaScript', 'Python', 'C++', 'Java']
  }
]).then(answers => {
  console.log(`Hello, ${answers.username}! You like ${answers.language}.`);
});
```

### ✅ Advantages:

- User-friendly interfaces
- Supports input, lists, checkboxes, confirmations, etc.
- Great for professional CLI tools and project scaffolding

---

## 🧠 Which One Should You Use?

| Use Case             | Recommended Module    |
| -------------------- | --------------------- |
| Native & async input | `readline` (built-in) |
| Simple, sync input   | `readline-sync` (npm) |
| Advanced CLI/UX      | `inquirer` (npm)      |

---

## Want to go further?

- Try building a **quiz**, **calculator**, or **menu-driven app**
- For stylish prompts, use [`inquirer`](https://www.npmjs.com/package/inquirer) to enhance UX

