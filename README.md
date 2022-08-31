# Recipe Box App ⚡️

## Features

⚡️ Modern UI Design + Reveal and Motion Animations\
⚡️ Multiple Pages Layouts\
⚡️ Styled with Tailwind css v3.1\
⚡️ Available only on Desktop for now\
⚡️ Clean Code + Awesome Design\
⚡️ Well organized documentation\
⚡️ You can create recipes that have names and ingredients\
⚡️ You can see an index view where the names of all the recipes are visible\
⚡️ You can click on any of those recipes to view them\
⚡️ You can edit these recipes\
⚡️ You can delete these recipes\
⚡️ All new recipes you add are saved in your browser's local storage. If you refresh the page, these recipes will still be there\
⚡️ You can search for ingredients and display all the recipes that contain these ingredients\
⚡️ You can chose category that you want\
⚡️ You can display details of recipes\
⚡️ You can go to the top of the page whenever you scroll

To view the demo: **[click here](https://recipe-box-app-2022.netlify.app)**

---

## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.

```
node@v16.4.2 or higher
npm@7.18.1 or higher
git@2.30.1 or higher
```

Also, you can use [Yarn](https://yarnpkg.com/) instead of NPM ☝️

```
yarn@v1.22.10 or higher
```

---

## How To Use 🔧

From your command line, first clone recipe-box:

```bash
# Clone the repository
$ git clone https://github.com/mahmoudzanoun13/recipe-box

# Move into the repository
$ cd recipe-box

# Remove the current origin repository
$ git remote remove origin
```

After that, you can install the dependencies either using NPM or Yarn.

Using NPM: Simply run the below commands.

```bash
# Install dependencies
$ npm install

# Start the development server
$ npm start
```

Using Yarn: Be aware of that you'll need to delete the `package-lock.json` file before executing the below commands.

```bash
# Install dependencies
$ yarn

# Start the development server
$ yarn start
```

**NOTE**:
The categories feature won't work because I'm using an API from **[SPOONACULAR](https://spoonacular.com/food-api)** So, if you wanted to activate it just follow steps:

### Step 1

- Go to Spoonacular website and create an account
- Once you created it, Click on MY CONSOLE on the website
- Then click on Profile on the left side
- Then copy your API key
- Once you get it, create `.env` file inside your directory
- Inside your `.env` file write `REACT_APP_API_KEY=Your_API_KEY`

**Note**:
After you created `.env` file, make sure that you stopped your server and started it again to work.

Once your server has started, go to this url `http://localhost:3000/` to see the Application locally.

## Technologies used 🛠️

- [React 18.2.0](https://reactjs.org) - Framework or Library
- [React Router Dom 6.3.0](https://v5.reactrouter.com/web/guides/quick-start) - For Routes
- [React Icons 4.4.0](https://react-icons.github.io/react-icons) - Icons
- [Tailwind CSS 3.1.8](https://tailwindcss.com) - Frontend component Library
- [Splidejs 0.7.8](https://splidejs.com) - For Slider/Carousel
- [Farmer Motion 7.2.0](https://www.framer.com/motion) - For Animations

## Authors

- **Mahmoud Zanoun** - [https://github.com/mahmoudzanoun13](https://github.com/mahmoudzanoun13)

## Acknowledgments 🎁

I was motivated to create this project because I wanted to contribute on something useful for the dev community.
