# Basic_Project_In_NodeJS

This is a simple application's backend where a user can be added, it's credentials can be updated , validated and deleted.


## Prerequisites

- [**Visual_Studio_Code**](https://code.visualstudio.com/Download):I have used [VS_Code](https://code.visualstudio.com/Download) to create this app.As it is really useful tool for a web developer and provides amazing editing features and properties.

- [**Postman**](https://www.postman.com/downloads/):To use Get and Post methods for a URL you will need this.

-[**Xampp**](https://www.apachefriends.org/download_success.html):In our application store and manipulate our data on phpmyadmin and for that we need to install and setup xampp and start Apache server and MySQL before executing the application.


## Contents

-[**Package.json**](https://github.com/aiman-syeda/Triweb-Learning/blob/main/BasicProjectNodeJS/package.json):This file consists of package's details that are installed during app creation, with the appropriate version name.

-[**Package-lock.json**](https://github.com/aiman-syeda/Triweb-Learning/blob/main/BasicProjectNodeJS/package-lock.json):This is the file where the packages that are used in the app are locked and when some other developer want to  modify the app and add additional features, he must have these two files "package.json and package-lock.json" along with the other codes.As the code supports only the version that was is by the owner at the time of creation and hence it avoids version control issues.

-[**Main-File**](https://github.com/aiman-syeda/Triweb-Learning/blob/main/BasicProjectNodeJS/app.js):In the main file,express app is created, data is parsed, and directed to the router files as per the requests. 

-[**Routers**](https://github.com/aiman-syeda/Triweb-Learning/blob/main/BasicProjectNodeJS/routers/user.js):They generally sends request to the controller file for further processing.

-[**Controllers**](https://github.com/aiman-syeda/Triweb-Learning/blob/main/BasicProjectNodeJS/controllers/user.js):All the functionalities of our app lies within this folde.

-[**Models**](https://github.com/aiman-syeda/Triweb-Learning/blob/main/BasicProjectNodeJS/models/user.js):Queries are written in this file. 

-[**Util**](https://github.com/aiman-syeda/Triweb-Learning/blob/main/BasicProjectNodeJS/util/database.js):Model directs the response to this file and here are the details of the database that is used to store user data.

## Here are the screenshots from Postman. 


<p align="left">
- Register User.
<img width="500" alt="Screenshot 2023-09-28 at 10 03 07" src="https://github.com/aiman-syeda/Triweb-Learning/assets/137302844/7cf817aa-5070-4bce-988e-e3f3c7cf2114">
</p>

<p align="right">
- Get user deatils.
<img width="500" alt="Screenshot 2023-09-28 at 10 03 31" src="https://github.com/aiman-syeda/Triweb-Learning/assets/137302844/a8c015b8-590d-41e0-9e26-f181673868e4">
</p>

<p align="left">
- Update user data password is updated here.
<img width="1309" alt="Screenshot 2023-09-28 at 10 04 08" src="https://github.com/aiman-syeda/Triweb-Learning/assets/137302844/f72af11d-ef28-4d54-a297-d25a1ca0c3bd">
</p>

<p align="right">
- Delete user.
<img width="1309" alt="Screenshot 2023-09-28 at 10 05 13" src="https://github.com/aiman-syeda/Triweb-Learning/assets/137302844/5ab0255d-0ada-4d21-afc6-7b67594da130">
</p>


Feel free to collaborate and share your ideas and experience.

