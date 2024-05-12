DROP DATABASE IF EXISTS weekly_running_planner;
CREATE DATABASE weekly_running_planner;
USE weekly_running_planner;

CREATE TABLE routes (
    route_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    route_name VARCHAR(255),
    run_type VARCHAR(255),
    distance VARCHAR(255)
);

CREATE TABLE running_plans (
    running_plan_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    monday VARCHAR(255),
    tuesday VARCHAR(255),
    wednesday VARCHAR(255),
    thursday VARCHAR(255),
    friday VARCHAR(255),
    saturday VARCHAR(255),
    sunday VARCHAR(255)
);
select * from routes;
select * from running_plans;
