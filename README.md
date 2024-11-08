This Keeper App project is based on Angula Yu's 2024 complete web develoment cource on Udemy.

While the original source codes allows adding and deleting notes in a temporary page, this project enables note editing, and makes data persistent using PostgreSQL.

This repo contains two parts: frontend (React) and backend (server).

## frontend page:
sreenshot
## How to start:

Firstly, set up the database:
- cd server
- npm i 
- Change the .env.example file to .env, and add your own username, password, port and accordingly database name in the file.
- node index.js or nodemon index.js if you have installed nodemon.

Then, run the frontend:
- cd React
- npm i
- change the .env.example file to .env, and add your own localhost port in which your server is listing to. In this project, the port is set to be 5000 in server/index.js.
- npm run dev