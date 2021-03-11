# Clubcus Phase 1

## Description 
Clubcus is web app that allows users to create groups for others to join, make announcements to members, and manage member listing. Official clubs recognized by the University are also able to create their own pages, with added verification to distinguish their registered status. This will provide any university student the ease to find like-minded friends.

## Key Features
* Login and Signup
  - Users can create user accounts to join groups or create an admin account to make a new group.
* Profile Page
  * Users can edit the information displayed to other group members and manage their club memberships.
* Group Search
  * Users can search for other groups and official clubs and apply for membership.
* Commenting
  * Users can comment and like group posts.
* Club Management
  * Group admins can create new posts, manage group members, and link external group resources.

## Instructions
1. Upon running web app, you will come to the 'home' page for unregistered users. Here, you can browse some clubs and read what they are about but functionality is limited until the user is logged in.
2. Click on Sign In or New User in the banner to be taken to a form to fill out. (New Users will be routed to a premade user and admin account, respectively.)
* To log into a user account: user, user
* To log into an admin account: admin, admin
* To log into a super admin account: superadmin, superadmin

### User Account
* Signed in users will be taken to their Main Feed. Here they can view all the recent posts from their groups.

* Group Page:
  * Using the group list box in the main feed, or navigating through the NavBar, you can go to the respective group pages to view posts.
  * Here, you can view posts created by the admin, comment on posts for other members to see, and browse links for members' social media accounts, and external sites that the group also communicates through.
* User Account Page:
  * Using the NavBar to press Account Info will take you to the user's profile page.
  * Here, you can change your personal information that is displayed to other members, and manage your current club memberships, will also viewing your pending memberships.
  * You can also sign out from this page or use the associated button in the NavBar.
* Group Search Page:
  * Clicking the Find a New Group option in the My Groups submenu of the NavBar will take you to the group search page.
  * Here, you can view other groups like an unregistered user, but you will now have the option to request to join.     
  * The verified check distinguishes between user-created groups and clubs officially recognized by UofT.

### Admin Account
* Signed in Admins will be taken to their respective club pages, for our purposes, it is the math club.
* Admins can create posts, and accept members requesting to join.
* They can also edit the external links diaplyed on their group's page.

### Super Admin
* Super Admins will be taken to a page where they can view all current clubs.
* Here, they can view  can officiate groups wanting verification as a recognized official club of UofT on the platform. 

## Requirements to Run
You need Node.js installed on your machine. You also need npm installed. 
The following are dependencies we used:
* @testing-library/jest-dom
* @testing-library/react
* @testing-library/user-event
* antd
* react
* react-dom"
* react-infinite-scroller
* react-router-dom
* react-scripts
* web-vitals

Note: For specific details and version numbers, check the package.json files in the directory.

Steps to run application:
 1. Open a terminal window. Go to the backend directory.
 2. Run `npm i` and then `npm start`. This should start the web app on your local machine.
 3. Go to http://localhost:3000/ to view the web application.
