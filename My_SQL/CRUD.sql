CREATE DATABASE Class;
USE Class_data;
create TABLE teachers(
id int(11) NOT null AUTO_INCREMENT PRIMARY KEY, 
teacher_name varchar(255) NOT null,
mobile varchar(100) NOT null    
)

CREATE TABLE classes(
id int(11) not null AUTO_INCREMENT,
class_name varchar(100) not null,
teacher_id int(11) NOT null,
PRIMARY KEY(id),
FOREIGN KEY(teacher_id) REFERENCES teacher(id)   
)  

CREATE TABLE Students (
id INT(11) NOT NULL AUTO_INCREMENT ,PRIMARY KEY(id),
student_name VARCHAR(255) NOT NULL,
class INT(11) DEFAULT 5,
mobile INT(15) NOT NULL)

ALTER TABLE Students
CHANGE mobile std_mobile VARCHAR(30) NOT NULL;

ALTER table students
ADD COLUMN class_id INT(30) NOT NULL;

ALTER table students
ADD FOREIGN KEY (class_id) REFERENCES classes(id);