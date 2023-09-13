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