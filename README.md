#Scope
# Student's  Project  
# Performance Management Tool

## Team #10  
## Cindy Carrillo  
## Abraham Tesfay  
## Yulong Ran  
## San Jose State University  
## Fall 2019  
## CS157A  

#Project Overview

The main purpose of our project is to develop a web application platform that can be used by schools to provide student’s performance review based on sets of project requirements the school or instructor’s set.  Our web application platform called “Scope” will ashier a new opportunity for transparency, improvement, and growth among students and instructors.

#### The Problem

As technology leaps into the next level, the way education is delivered and measured is also rapidly evolving. The traditional way of grading and testing to measure student skills is slowly fading and upgrading with more concrete and skilled based projects that are meant to make students ready for the ‘real world’. In real workplace scenario it’s a common practice to provide employees with their quarterly work performance review for growth, improvement, and learning opportunity.
At the moment, almost all educational institutes including San Jose State University don’t have a tool to track, measure, or provide feedback on student's project performance. Most team projects done by students are usually tracked and reviewed internally by the professor and this creates a huge gap for transparency, growth and an opportunity for improvement.


#### Why 'Scope'

Scope will usher a newer, easier, faster and dynamic way to deliver students and instructors performance review based on different sets of criteria and milestones that the instructors and the students set. Students will have an opportunity to peer review their team, instructor’s and reflect on their project performance for better growth and  improvement.

#System Requirement

![three_tier Diagram](../master/Project_Proposal/3Tier_Layers.png)

#### Presentation Tier:
In Scope, the user interface will be a web application that handles the interaction with the user and display information. Our team will build this web application with the framework “React” and programming language javascript.  

#### Logic Tier:
Scope will use Node.JS as a backend server for handling user requests and communicate with the database.

#### Data Tier:
Our project will use MySQL as our RDBMS(Relational Database Manage System) to manage and provide access to the data.


#Functional Requirements

#### Users
The users of Scope will be college students who are working on projects for their courses and instructors who assign the coursework. Both users would then have their performance reviewed and can adjust their academic performance, goals and work habits accordingly. The user groups would have access to the web application through the university. Instructors can provide links where students can create their one time account that follows them through all their courses at the university that are required to complete their degree.

#### Functionality and Features
Scope will contain a homepage where the targeted user can search for their university by school name or code. Scope also has a login/sign up page where the user can specify if they are an instructor or a student and sign in with university credentials (ID and password) or create an account if they are new. For student users, Scope will include self assessments which students can complete themselves for their courses and class projects. They can also complete peer performance reviews for students they have worked with. Additionally, they’ll have access to receive feedback from completed performance reviews from previous teammates they have worked with. The performance reviews would have an option of being anonymous for privacy reasons. For instructors, they have access to view their students’ performance reviews to better understand the work habits of those that make up the class. Instructors can search within classes for the list of students in the class and their performance. Instructors will have the ability to create performance reviews for their students based off of their projects in their course and rate if expectations were met.

### Inputs and Outputs
The inputs for Scope would include the entered student and instructor data such as name, login information, and reviews. The projected outputs would be the ability to view and collect performance reviews for the users from the database and display on the user interface.


#Non Functional requirements

Non-functional requirements include many aspects such as performance, scalability, accessibility, security, etc. Within the time of CS157A course, our team aims to build a three-tier architecture application that provides student’s performance review based on their projects within the range of single University.  
In terms of scalability, students’ performance review will follow them from course to course and school to school. Student’s from different Universities will be able to review each others project performance history.  
For accessibility, Scope aims to bring high-performance websites for our users. Users can be able to access our site either on the PC or mobile platform. The navigation system for users will be simple, intuitive, and provide enough information that matches User's needs.  
For security, we plan to have two different levels of users: Instructor and Student. The instructor has access to create a project requirement, milestone, and evaluation form. Students will have access to evaluate their team members performance after the project.  
For GUI mockup and prototype designing, we will be using Adobe’s Photoshop and Sketch design and prototyping tools.

##Usability
*User will be able to understand easily the way the program application function.
*User should able to create project, assign project objectives and review the student’s project performance   
*System administrators will be able to use the database to effectively manage projects, student accounts and user information without any error or downtime.

*The application usability is designed to be easily accessed by instructors and students.
*Instructors and students can view projects, deadlines by type, timeline   and perform essential database transaction with basic and admin access privileges.
*Administrators with managerial privileges will be able to perform essential transaction to produce variety of projects and assigned the projects to users such as students.

##Reliability

*System will see minimal downtime apart from maintenance and errors.
*Users will not encounter system failures, exceptions will be caught, and users will be given useful information to avoid any error that might arise.
*There will be easy steps for troubleshooting on both ends of use (Administrator or regular user side).

##Performance

*The system should be able to support larger number of users without affecting any performance of the system operations.
*The system should be able to support a large number of projects and user database transaction simultaneously.
*The database should be able to show the correct project tasks and other related data that specifically assigned the corresponding instructors and students
*Users shall be able to find relevant projects, students and instructors by searching through via the Scope platform.
*Loading the database to the system should take no more than a few seconds per page given the user’s machine required the minimal device requirements.

##Supportability

*The system should allow to fix bugs for any competent.
*The system should allow to add additional functions to adapt changes.
*The system should work on any operating systems.
*The system should work on any size of screen.
*For development the system should work on React JS, Node JS, and MySQL runtime environment implemented on locally or on remote cloud server

##Implementation

*This system will implement the Oracle’s MySQL database, allowing the user to perform a variety of database transactions related to the project performance tool.
*This system will be written using React JS, MySQL query and JavaScript.
*This system will be hosted by an online web host servicer and also available in local machine
*This system implements adding, editing, updating and deleting of users (Instructors and students), related projects, and projects objectives and milestones.
*The system implements the functionality of producing reports and invoices to keep track of productivity and performance of projects and the stakeholders who are involved.
*The system will save user’s activities, profiles, and their tasks in a timely manner that suit the project requirements
*The system will also keep track the status of projects, tasks and milestones and notify users appropriately.
*The system will also allow administrators of the system to add new users, manage the account and set different privileges.
*The project will show or produce overall report of the status of the projects, timelines and milestones to show overall performance of a class project.  

##Interface

*This system will interface via online web application using a remote hosting service or can be implemented using local machine running Node Js web server .
*All users’ requests will be handled in a web browser.


##Legal

*This project will not be legally licensed under any professional contracts.
*The project does not display Company Information, business name, place of registration, registered number, its registered office address and is only intended for the sole purpose school project.
*The system might Display a Privacy Policy informing the user what the business does with the data and that it conforms to the The Data Protection Act.
*The Privacy Policy needs to explain what cookies the website will create and what they are for. (Only for the sole purpose of the school project)
*Have Terms & Conditions, user Data Privacy  Policy pages to show information on how user data is collected
