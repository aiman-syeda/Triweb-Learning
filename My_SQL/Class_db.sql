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

