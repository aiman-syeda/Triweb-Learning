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


INSERT INTO teachers(mobile,teacher_name)
 VALUES ('2345','Raju'),('33333','Basha'),('2134345','Ramesh'),('44433' ,'Razaq');

INSERT INTO classes(class_name,teacher_id) 
 VALUES ('One',2),('Two',1),('Three',2),('Two',1);

INSERT into students(id,student_name,std_mobile,class,class_id) 
 VALUES(1,'Akshay','1122',4,2),(2,'Amit','114253',3,1),(3,'Ajay','11425333',7,2);

SELECT * FROM Students;
SELECT * FROM classes;
SELECT * FROM teachers;
