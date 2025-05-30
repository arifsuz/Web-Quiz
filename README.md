# Web Quiz

This Web Quiz is a simple website to do a question from the program we have created. We made this program to complete the big task 2 of the web programming course taught by lecturer ZICO ALAMSYAH, S.SI, MTI.

## Features

- Store questions in the database.
- Display questions one by one randomly.
- Displays the answer options for each question.
- Calculates and displays the final score after all questions have been answered.
- Gives input option for user name.
- Stores the user name and score in the database.
- Displays ranking based on the highest score of all users who have inputted their names and stored in the database.

## Documentation

### **HTML**
This project consists of four main HTML files, each with a specific purpose and content:

1. **index.html** - Home Page
- **Purpose:** Displays the main page of the quiz application, with options to start the game or view high scores.
- **Main Content:**
    1. Application title ("The Quizzify Game").
    2. Button to start the game (`Play`).
    3. Button to view high scores (`High Scores`).

2. **game.html** - Game Page
- **Purpose:** Presents the game interface, including questions and answer choices.
- **Main Content:**
    1. Temporary loader (`#loader`).
    2. Questions and four answer choices (`A`, `B`, `C`, `D`).
    3. Progress indicator and current score.

3. **end.html** - End Game Page
- **Purpose:** Displays the player's final score and offers an option to save the score with a username.
- **Main Content:**
    1. Final score (`#finalScore`).
    2. Form to save the score (`#saveScoreForm`).
    3. Button to play again and return to the home page.

4. **highscores.html** - High Scores Page
- **Purpose:** Displays a list of high scores from all players.
- **Main Content:**
    1. Page title (`High Scores`).
    2. High scores list (`#highScoresList`).
    3. Button to return to the home page (`Go Home`).
    
**Conclusion :**
Each HTML file in this project serves as a part of the web quiz application, ranging from the home page for navigation, the game page for user interaction, the end game page for displaying results, and the high scores page for viewing achievements. The design and structure of these pages allow users to interact with the application intuitively, with smooth transitions between different parts of the game.

### **Cascading Style Sheet (CSS)**
This project contains three CSS files, each dedicated to styling different aspects of a web-based quiz application. Here's an overview of each file and its purpose:

1. **highscores.css**
- **Purpose:** Styles the high scores page.
- **Key Styles:**
    1. Removes list styling and margins for the high scores list.
    2. Increases font size and adds a hover effect to scale up high score entries for better visibility and interactivity.

2. **game.css**
- **Purpose:** Styles the game page, where users interact with quiz questions and answers.
- **Key Styles:**
    1. Styles choice containers with a flexible box layout, border, and background color.
    2. Adds hover effects to choice containers for better user feedback.
    3. Differentiates correct and incorrect answers with distinct background colors.
    4. Styles the heads-up display (HUD) for showing game progress and scores.
    5. Implements a loader animation for asynchronous operations like fetching questions.

3. **app.css**
- **Purpose:** Provides global styles that apply across the entire application.
- **Key Styles:**
    1. Sets a root font size and background color for the app.
    2. Ensures consistent box-sizing, font family, margins, and padding.
    3. Styles headings ([`h1`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FMUHAMAD%20NUR%20ARIF%2FDocuments%2FWeb-Quiz%2Fcss%2Fapp.css%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A13%2C%22character%22%3A2%7D%5D "css/app.css") to [`h4`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FMUHAMAD%20NUR%20ARIF%2FDocuments%2FWeb-Quiz%2Fcss%2Fapp.css%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A16%2C%22character%22%3A2%7D%5D "css/app.css")) with specific sizes, weights, and margins.
    4. Defines utility classes for common layout patterns like centering and flexbox columns.
    5. Styles buttons with a consistent look and interactive hover effect.
    6. Styles forms and inputs for user interactions like entering a username to save scores.

**Conclusion :**
Each CSS file in this project plays a crucial role in ensuring a cohesive look and feel across the quiz application, enhancing user experience through visual cues, consistent styling, and interactive feedback.

### **Javascript (JS)**
This project includes three JavaScript files, each serving a distinct purpose within the web-based quiz application:

1. **end.js**
- **Purpose:** Manages the end game functionality, including displaying the final score and handling the score submission.
- **Key Features:**
    1. Retrieves the most recent score from local storage and displays it.
    2. Enables the save button only when a username is entered.
    3. Submits the score along with the username to a server endpoint using a `POST` request.
    4. Redirects to the home page upon successful submission.

2. **game.js**
- **Purpose:** Controls the game's core functionality, including fetching questions, presenting them to the user, and handling user interactions.
- **Key Features:**
    1. Fetches quiz questions from a server endpoint and formats them for the game.
    2. Manages the game state, including keeping track of the score, the current question, and the number of questions answered.
    3. Displays questions one at a time and listens for user selections.
    4. Updates the score based on correct answers and moves to the next question.
    5. Redirects to the end game page when the quiz is completed or the maximum number of questions is reached.

3. **highscores.js**
- **Purpose:** Fetches and displays the high scores from a server endpoint.
- **Key Features:**
    1. Fetches high scores using a `GET` request.
    2. Sorts the high scores in descending order.
    3. Dynamically generates and displays a list of high scores.
    4. Handles errors in fetching high scores and displays an error message.

**Conclusion :**
Each JavaScript file in this project plays a crucial role in facilitating user interaction with the quiz application, from starting the game and answering questions to submitting scores and viewing high scores. They work together to create a seamless and interactive user experience.

### **Backend - (server.js)**
The provided JavaScript file is a server-side application using Node.js and Express framework, integrated with Supabase for database operations. It's designed to serve a quiz application by handling API requests for fetching quiz questions, managing user scores, and retrieving high scores. Here's a detailed explanation of its components and the technology stack used:

### Technology Stack:
- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine, used for creating server-side applications.
- **Express:** A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **Supabase:** An open-source Firebase alternative providing database storage, real-time subscriptions, authentication, and more, using PostgreSQL.
- **dotenv:** A module that loads environment variables from a [`.env`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FMUHAMAD%20NUR%20ARIF%2FDocuments%2FWeb-Quiz%2F.env%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\MUHAMAD NUR ARIF\Documents\Web-Quiz\.env") file into [`process.env`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2FMUHAMAD%2520NUR%2520ARIF%2FAppData%2FLocal%2FMicrosoft%2FTypeScript%2F5.4%2Fnode_modules%2F%2540types%2Fnode%2Fglobals.d.ts%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FMUHAMAD%20NUR%20ARIF%2FAppData%2FLocal%2FMicrosoft%2FTypeScript%2F5.4%2Fnode_modules%2F%40types%2Fnode%2Fglobals.d.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A43%2C%22character%22%3A4%7D%5D "../../AppData/Local/Microsoft/TypeScript/5.4/node_modules/@types/node/globals.d.ts"), making it easier to manage sensitive information like database credentials.
- **CORS (Cross-Origin Resource Sharing):** A node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

### File Explanation:
- **Environment Variables:** The application begins by loading environment variables using [`dotenv.config()`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FMUHAMAD%20NUR%20ARIF%2FDocuments%2FWeb-Quiz%2Fnode_modules%2Fdotenv%2Flib%2Fmain.d.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A2%2C%22character%22%3A0%7D%5D "node_modules/dotenv/lib/main.d.ts"). It specifically uses [`SUPABASE_URL`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5CMUHAMAD%20NUR%20ARIF%5C%5CDocuments%5C%5CWeb-Quiz%5C%5Cserver.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2FMUHAMAD%2520NUR%2520ARIF%2FDocuments%2FWeb-Quiz%2Fserver.js%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FMUHAMAD%20NUR%20ARIF%2FDocuments%2FWeb-Quiz%2Fserver.js%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A11%2C%22character%22%3A0%7D%5D "server.js") and [`SUPABASE_SERVICE_ROLE`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5CMUHAMAD%20NUR%20ARIF%5C%5CDocuments%5C%5CWeb-Quiz%5C%5Cserver.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2FMUHAMAD%2520NUR%2520ARIF%2FDocuments%2FWeb-Quiz%2Fserver.js%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FMUHAMAD%20NUR%20ARIF%2FDocuments%2FWeb-Quiz%2Fserver.js%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A12%2C%22character%22%3A0%7D%5D "server.js") for connecting to the Supabase client.
  
- **Express Setup:** Initializes an Express application and uses middleware for CORS and JSON body parsing, allowing the server to accept JSON in request bodies and respond to requests from different origins.

- **Supabase Client:** Creates a Supabase client using the [`SUPABASE_URL`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5CMUHAMAD%20NUR%20ARIF%5C%5CDocuments%5C%5CWeb-Quiz%5C%5Cserver.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2FMUHAMAD%2520NUR%2520ARIF%2FDocuments%2FWeb-Quiz%2Fserver.js%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FMUHAMAD%20NUR%20ARIF%2FDocuments%2FWeb-Quiz%2Fserver.js%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A11%2C%22character%22%3A0%7D%5D "server.js") and [`SUPABASE_SERVICE_ROLE`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5CMUHAMAD%20NUR%20ARIF%5C%5CDocuments%5C%5CWeb-Quiz%5C%5Cserver.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2FMUHAMAD%2520NUR%2520ARIF%2FDocuments%2FWeb-Quiz%2Fserver.js%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FMUHAMAD%20NUR%20ARIF%2FDocuments%2FWeb-Quiz%2Fserver.js%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A12%2C%22character%22%3A0%7D%5D "server.js") environment variables. This client is used to interact with the Supabase database.

- **API Endpoints:**
  - **GET /API/questions:** Fetches quiz questions from the `questions` table in Supabase. It selects specific fields (`question`, `correct_answer`, `incorrect_answers`) and returns them in the response.
  - **POST /API/users:** Accepts a username and scores in the request body and inserts them into the `users` table in Supabase. It handles errors and returns the operation status.
  - **GET /API/highscores:** Retrieves high scores from the `users` table, selecting the `username` and `scores` fields. It handles errors and returns the data in the response.

- **Server Initialization:** The application listens on a specified port (`3000` by default), ready to accept incoming requests.

### Conclusion:
This file is a backend server for a quiz application, using the Express framework for handling HTTP requests and Supabase as a backend service for database operations. The use of environment variables for sensitive information and CORS for cross-origin requests makes it a secure and flexible solution for real-world applications.

## Installation

### Step 1: Install Node.js and npm
Ensure you have Node.js and npm (Node Package Manager) installed. You can download them from [https://nodejs.org/](https://nodejs.org/). npm is included with Node.js installation.

### Step 2: Clone the Project Repository
Clone this repository and open project by copying and pasting the command below into your terminal.

```shell
git clone https://github.com/Pemrograman-Web-VT-D-101/Web-Quiz.git
cd Web-Quiz
```

### Step 3: Install Project Dependencies
Navigate to the project directory and install the necessary dependencies listed in the `package.json` file using npm.

```shell
npm install
```

In the dotenv `.env` file you can enter the token from your respective Supabase API which already consists of the `questions` and `users` tables as shown below

![Cuplikan layar 2024-06-30 201125](https://github.com/arifsuz/Web-Quiz/assets/149920438/45c9f2f7-ba3e-496c-bae3-426f7cbc7edc)
In the question table, create the title of each column as shown above which consists of `id` `question` `correct_answer` `incorrect_answers`. 

![Cuplikan layar 2024-06-30 201141](https://github.com/arifsuz/Web-Quiz/assets/149920438/422705c8-b311-4794-bf6e-058ecef32a4e)
In the users table, create the title of each column as shown above which consists of `id` `username` `scores`. 

### Step 4: Start the Server
Run the server using Node.js before running `index.html`. The commands you use may vary depending on how the project is set up, but will usually be the same:

```shell
cd api
npm start
```

Or if the project uses `nodemon` for hot reloading:

```shell
cd api
npm run dev
```

### Step 5: Verify Installation
Make sure the server is running on [http://localhost:3000](http://localhost:3000) and then run the `index.html` file using the Extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

### Additional Steps:
- Depending on the project's setup, you might need to perform additional configuration, such as setting up CORS policies or configuring additional middleware in Express.
- If the project includes a frontend, follow the setup instructions specific to that part of the project, which might include installing dependencies and environment variables for the frontend as well.

## Requirements & Suggestions
1. Make sure you have **[Visual Studio Code](https://code.visualstudio.com/download)** installed or you can download and install by clicking the link in the Support section. This serves as a code editor to help you write and create programs.
2. Make sure you have installed **[Node.JS](https://nodejs.org/en/download/package-manager/current)** with at least version 22.1.7.3 or the latest.
3. It is recommended to install the **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)** extension that you can download in Visual Studio Code to make it easier to develop or view program results.

## Authors

### **Muhamad Nur Arif (41523010147)**
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ariftsx.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/arifsuz)
[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marif8/)
[![instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/ariftsx/)

### **Bagas Indra Lesmana (41523010002)**
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bagasil123)

### **Aubrel Ibrahim (41523010102)**
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/cynafx)

### **Diaz Rama Putra Sopyan (41520010012)**
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/thereisnousername)
