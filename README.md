# BrainWaves

BrainWaves is an ED Tech (Education Technology) web application developed using the MERN stack.

## Note

This project is intended as a learning tool and can be used as a sample project for educational or personal projects.


***
## Features

* User Authentication: BrainWaves provides secure user registration and authentication using JWT (JSON Web Tokens). Users can sign up, log in, and manage their 
  profiles with ease.
  
* Courses and Lessons: Instructors can create and edit created courses. Students can enroll in courses, access course materials, and track their progress.
  
* Progress Tracking: BrainWaves allows students to track their progress in enrolled courses. They can view completed lessons, scores on quizzes and 
  assignments, and overall course progress.
  
* Payment Integration: BrainWaves integrates with Razorpay for payment processing. Users can make secure payments for course enrollment and other services 
  using various payment methods supported by Razorpay.
  
* Search Functionality: Users can easily search for courses, lessons, and resources using the built-in search feature. This makes it convenient to find relevant 
  content quickly.
  
* Instructor Dashboard: Instructors have access to a comprehensive dashboard to view information about their courses, students, and income. The 
 dashboard provides charts and visualizations to present data clearly and intuitively. Instructors can monitor the total number of students enrolled in 
 each course, track course performance, and view their income generated from course sales.


## Important
* Backend is  in the server folder.
* First create the categories e.g. web dev, Python, etc. (without categories courses cannot be added). To create categories create an Admin account and go to dashboard then admin panel.
* To create an Admin account first sign up with a student or instructor account then go to your Database under the users model and change that 'accountType' to 'Admin'.

## Getting Started
Create env file in root dir.
```
REACT_APP_BASE_URL = http://localhost:4000/api/v1  or render backend url
RAZORPAY_KEY = Razorpay Key ID get from Razorpay website
```

Create env file in server
```
MAIL_HOST = smtp.gmail.com # your mail host
MAIL_USER = # your email
MAIL_PASS = # your mail host key
CORS_ORIGIN = ["http://localhost:3000"]



JWT_SECRET = "create a JWT secret"
FOLDER_NAME = "images"  # cloudinary folder name where you want to save images
FOLDER_VIDEO = "videos" # cloudinary folder name where you want to save videos



RAZORPAY_KEY = # your razorpay key get from razorpay website Mandatory to run server
RAZORPAY_SECRET = # your razorpay secret 


CLOUD_NAME = # your cloudinary name
API_KEY = # your cloudinary api key
API_SECRET = # your cloudinary api secret

CONTACT_MAIL = sangwanhimanshu8443@gmail.com    # Enter your mail, User enquiries will be sent to this mail



PORT = "4000" # server port number
MONGODB_URL = # your mongodb url
```

## Installation

1. Clone the repository to your local machine.
    ```sh
    git clone ...
    ```

2. Install the required packages.
    ```sh
    cd Brain-Waves-master
    npm install
    
    cd server
    npm install
    ```

3. Set up the environment variables:

   Create a .env file in the root directory and /server
   Add the required environment variables, such as database connection details, JWT secret, and any other necessary configurations check .env.example files for more info.


4. Start the development server.
    ```sh
    npm run dev
    ```

5. Open the project in your browser at [`http://localhost:3000`](http://localhost:3000) to view your project.

The project is set up to use `postcss-cli` to process your CSS files. You can add your own `tailwind.config.js` file to customize your Tailwind setup.
