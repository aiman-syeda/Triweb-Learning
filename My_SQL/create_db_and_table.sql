CREATE DATABASE Raw_data;
USE Raw_data;
CREATE TABLE `Raw_data`.`User_Data`;
CREATE TABLE `Raw_data`.`User_Data` (`Id` INT NOT NULL AUTO_INCREMENT ,
`User_Name` VARCHAR(255) NOT NULL , `Email` VARCHAR(255) NOT NULL , 
`Password` VARCHAR(255) NOT NULL , `Remark` VARCHAR(255) NOT NULL , PRIMARY KEY (`Id`))
INSERT INTO User_Data (`Id`, `User_Name`, `Email`, `Password`, `Remark`)
 VALUES (1, 'Akshay', 'akshay@gmail.com', '1234', 'done'), 
(2, 'Sanjay', 'sanjay@gmail.com', '2468', 'done'),
(3, 'Rajiv', 'rajiv@gmail.com', '1369','pending');

INSERT INTO User_data (User_name,Email,Password,Remark) 
VALUES ('Amit','amit@gmail.com','123456','done');

SELECT * FROM User_data;

UPDATE User_data SET Remark='done' WHERE Remark='pending';

ALTER TABLE User_Data 
ADD Created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

CREATE TABLE Course(Std_name VARCHAR(255) NOT NULL, 
                   Course_name VARCHAR(255) NOT NULL,
                   status VARCHAR(25) NOT NULL);
INSERT INTO Course(Std_name,Course_name,status) 
 VALUES ('Akshay','my_sql','pending'),
        ('Akshay', 'Python', 'done'),
         ('Amit', 'my_sql', 'done'),
         ('Sanjay', 'Python', 'pending'),
         ('Akshay', 'Java', 'not started'),
          ('Sanjay', 'my_sql', 'done'),
          ('Amit', 'Python', 'pending'),
          ('Amit', 'Java', 'done'),
          ('Sanjay', 'Java', 'not started');


SELECT c.Std_name,c.Course_name,c.Status,u.User_name 
FROM User_Data u
INNER JOIN Course c 
ON c.Std_name = u.User_name; 

