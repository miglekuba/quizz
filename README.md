# Migle-Kubiliute-SP 
## Quiz Manager 
## How to run this project:

To run this project you only need Docker and `docker-compose` installed.

- To install Docker click [here](https://docs.docker.com/get-docker/)
- To install `docker-compose` click [here](https://docs.docker.com/compose/install/)

Clone the repository in the location of your choice:

`https://github.com/makersacademy/Migle-Kubiliute-SP.git`

 In your terminal, cd to the project directory and run the command `docker-compose up`

Then open your browser and go to localhost:3000

## User Guide

The users are pre-seeded in the database. To access the Quiz page use the following credentials to login. 


Role | Username | Password
------------- | ------------- | ------------- 
EDIT  | edituser  | test123 
VIEW | viewuser  | test123 
RESTRICTED | restricteduser  | test123 


Note: Users with restricted permissions will be able to click "Add Quiz" and "Edit" buttons, but they won't be able to submit any changes. Due to time contrains these buttons were not hidden. 

Unfortunatelly Log out functionality doesn't work so if you would like to login as a different user, you need to remove the cookie manually (Application tab in the developer tools)
