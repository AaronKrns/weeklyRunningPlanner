Application: Weekly Running Planner
Date: 12/05/2024


# Application Dependencies
1. Node.js (v16.13.0 used for creating this application)
2. Node Package Manager (v8.1.0 used for creating this application)
3. MySQL Workbench CE (v8.0.27 used for creating this application)


# How to Install Application Dependencies
1. Open a command line terminal window on your PC.
2. Type `cd` in the command line terminal window and drag and drop the 'Weekly_running_planner' application folder into the terminal.
3. If the node_modules folder is not present in the application folder,run the command `npm install` to install it.
4. Run the command `npm install express-validator`.


# How to Run the Application
1. Open MySQL Workbench and connect to your local instance of MySQL. 
2. Open the SQL script file `weekly_running_planner_database.sql`, and run all of the code in the script.
3. On line 15, column 47 of the `www` file in the `bin` folder, change the server port number to your own number. The server that was used for running this application was http://localhost:3000.
4. On line 2, column 17 of `connection_info.js` in the `modules` folder of the application folder, change the password to your own for connecting to your local instance of MySQL.
5. With the application folder directory navigated to, type `npm start` into the terminal to start the production server.
6. To disconnect from your server, press `Ctrl` and `c` simultaneously and then `y` in the command line terminal window.