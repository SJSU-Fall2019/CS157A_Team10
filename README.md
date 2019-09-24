# Scope
Student's  Project  
Performance Management Tool

Team #10  
Cindy Carrillo  
Abraham Tesfay  
Yulong Ran  
San Jose State University  
Fall 2019  
CS157A  

### Project Overview

The main purpose of our project is to develop a web application platform that can be used by schools to provide student’s performance review based on sets of project requirements the school or instructor’s set.  Our web application platform called “Scope” will ashier a new opportunity for transparency, improvement, and growth among students and instructors.

#### The Problem

As technology leaps into the next level, the way education is delivered and measured is also rapidly evolving. The traditional way of grading and testing to measure student skills is slowly fading and upgrading with more concrete and skilled based projects that are meant to make students ready for the ‘real world’. In real workplace scenario it’s a common practice to provide employees with their quarterly work performance review for growth, improvement, and learning opportunity.
At the moment, almost all educational institutes including San Jose State University don’t have a tool to track, measure, or provide feedback on student's project performance. Most team projects done by students are usually tracked and reviewed internally by the professor and this creates a huge gap for transparency, growth and an opportunity for improvement.


#### Why 'Scope'

Scope will usher a newer, easier, faster and dynamic way to deliver students and instructors performance review based on different sets of criteria and milestones that the instructors and the students set. Students will have an opportunity to peer review their team, instructor’s and reflect on their project performance for better growth and  improvement.

### System Requirement

![three_tier Diagram](../master/Project_Proposal/3Tier_Layers.png)

#### Presentation Tier:
In Scope, the user interface will be a web application that handles the interaction with the user and display information. Our team will build this web application with the framework “React” and programming language javascript.  

#### Logic Tier:
Scope will use Node.JS as a backend server for handling user requests and communicate with the database.

#### Data Tier:
Our project will use MySQL as our RDBMS(Relational Database Manage System) to manage and provide access to the data.


### Functional Requirements

#### Users
The users of Scope will be college students who are working on projects for their courses and instructors who assign the coursework. Both users would then have their performance reviewed and can adjust their academic performance, goals and work habits accordingly. The user groups would have access to the web application through the university. Instructors can provide links where students can create their one time account that follows them through all their courses at the university that are required to complete their degree.

#### Functionality and Features
Scope will contain a homepage where the targeted user can search for their university by school name or code. Scope also has a login/sign up page where the user can specify if they are an instructor or a student and sign in with university credentials (ID and password) or create an account if they are new. For student users, Scope will include self assessments which students can complete themselves for their courses and class projects. They can also complete peer performance reviews for students they have worked with. Additionally, they’ll have access to receive feedback from completed performance reviews from previous teammates they have worked with. The performance reviews would have an option of being anonymous for privacy reasons. For instructors, they have access to view their students’ performance reviews to better understand the work habits of those that make up the class. Instructors can search within classes for the list of students in the class and their performance. Instructors will have the ability to create performance reviews for their students based off of their projects in their course and rate if expectations were met.

### Inputs and Outputs
The inputs for Scope would include the entered student and instructor data such as name, login information, and reviews. The projected outputs would be the ability to view and collect performance reviews for the users from the database and display on the user interface.


##### User : Instructor
###### Display course:
* When a user clicks the Dashboard menu on the navigation bar, a dashboard contains a list of courses will appear on the right side of the web application.
* The system shall retrieve course data from database and display a list of courses under the instructor’s profile.

###### Add course:
* An instructor user shall be able to add a new course by clicking the plus button. After clicking the plus button, the user shall be able to fill in the name, course Id and course period on the pop-up form.
* The system shall update the database with the new course associated with the instructor and update the user interface with new courses.

###### Edit / Delete course:
* An instructor user shall be able to delete or edit a course by clicking the menu option on the top right of each displayed course.
* The system shall display a form for the user to edit course information and a warning when user trying to delete a course. The system shall update the database based on the user action.

##### Display Project details:
* When an instructor user clicks the course in the Dashboard, the Dashboard shall refresh its content and display a list of the projects in the course with its name and time period.
* The system shall retrieve the project name and time period in the database for each project and display on the dashboard as an individual component.

##### Add Project:
* An instructor user shall have the ability to create a project by clicking the plus button on the top of the dashboard. After clicking the add button, the web will have a pop-up form that asks for the name and time period of the project.
* The system shall update the database with a new project under the course.

##### Add Performance Review:
* An instructor user shall be able to create an evaluation form by clicking the option under the menu for each project component. After clicking the “creating evaluation form” button, a new form will pop-up, and instructor user can be able to add a list of millstone, requirements, and feedback followed by a set of checkpoints.
* Example:
1. Team members are respectful to each other.  [ Strongly agree, agree, disagree]
2. Project milestone 2 [On-time, Late]

##### Edit / Delete project:
* An instructor user shall be able to delete or edit a project by clicking the menu option on the top right of each displayed project.
* The system shall display a form for the user to edit project information and a warning when user trying to delete a project. The system shall update the database based on the user action.

##### Display Team Information:
* When an instructor user clicks a project component in the Dashboard, the Dashboard shall display a list of teams who participated in the project with their team names and number of members.
* The system shall retrieve a list of teams and their basic team information within the course from the database. The user interface shall refresh the dashboard to display updated information

##### Add / Edit Team:
* An instructor user shall be able to delete or edit a team by clicking the menu option on the top right of each displayed team
* The system shall display a form for the user to edit team information and a warning when user trying to delete a project. The system shall update the database based on the user action.

##### Display Team members:
* When an instructor user clicks the team component in the Dashboard, the Dashboard shall refresh its content and display a list of the students in the team with its name and id.
* The system shall retrieve the student name and id in the database for each student and display on the dashboard as an individual component.

##### Display Student History:
* An instructor user shall be able to click on the Student component and review student’s history project.
* The system shall retrieve the student history projects in the database and display on the dashboard as an individual component.




### Non Functional requirements

Non-functional requirements include many aspects such as performance, scalability, accessibility, security, etc. Within the time of CS157A course, our team aims to build a three-tier architecture application that provides student’s performance review based on their projects within the range of single University.  
In terms of scalability, students’ performance review will follow them from course to course and school to school. Student’s from different Universities will be able to review each others project performance history.  
For accessibility, Scope aims to bring high-performance websites for our users. Users can be able to access our site either on the PC or mobile platform. The navigation system for users will be simple, intuitive, and provide enough information that matches User's needs.  
For security, we plan to have two different levels of users: Instructor and Student. The instructor has access to create a project requirement, milestone, and evaluation form. Students will have access to evaluate their team members performance after the project.  
For GUI mockup and prototype designing, we will be using Adobe’s Photoshop and Sketch design and prototyping tools.
