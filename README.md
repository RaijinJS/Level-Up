![logo1](./public/logo1.png)
# Level Up - The App to Develop Useless Skills

## Introduction
Welcome to "The App to Develop Useless Skills" - a unique and playful web application built with Next.js, MongoDB, Mongoose, Tailwind CSS (then converted to TypeScript and updated with NextAuth, Redux, and Jest).
This app is designed to offer users a fun way to discover and engage in various whimsical and unavailing skills.
Perfect for those moments when you want to distract yourself and learn something new yet delightfully useless.

## Features
- Interactive tasks to develop unconventional skills
- Progress tracking with a visually appealing progression bar
- Celebratory animations upon completing milestones
- Responsive design for a seamless experience across devices

## Collaborators
Founded by: Giacomo Impoco
Updated by: Christopher Heinzmann, Niels Koop

## Getting Started

### Prerequisites
- Node.js
- MongoDB

Ensure you have Node.js and MongoDB installed on your system. You can download them from:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

 **Clone the repository**
   ```bash

   git clone git@github.com:RaijinJS/Level-Up.git
   cd Level-Up

### Install dependencies
   npm install

   ```

- Import the TasksWithAdded.tasks.json into your MongoDB. For example, in MongoDB Compass:
   1. Connect and click the + next to the Databases list to add a new Database
   2. Name the Database Tasks and the colleciton tasks, then click the Create Database button
   3. In the new database, click ADD DATA and select Import JSON or CSV file
   4. Navigate to the TasksWithAdded.tasks.json and select it. You'll find it at data\TasksWithAdded.tasks.json
   5. Import, and done!

### Start the development server
Run `npm run dev`

Visit http://localhost:3000 in your browser to view the app.

Sign up with any character combination to get into the app, just make sure it matches upon sign in!

## Demo Screenshots

Welcome page.

![1.png](./Screenshots/1.png)

Log in page.

![2.png](./Screenshots/2.png)

No account? Register here!

![3.png](./Screenshots/3.png)

Click the plus in the bottom right corner to add cards to your profile. Click In Progress to toggle it to "Complete" on the card.
Remove cards by pressing the trash (bin) icon.

![4.png](./Screenshots/4.png)

See more by clicking the information icon or clicking on another part of the card.

![5.png](./Screenshots/5.png)

Click the profile button in the nav bar to be redirected to your progress view.

![6.png](./Screenshots/6.png)

Click on the challenge names to see their info here too.

![7.png](./Screenshots/7.png)

Complete all your current challenges to reach 100%.
Hurray! you've mastered all your favorite useless skills!

![8.png](./Screenshots/8.png)