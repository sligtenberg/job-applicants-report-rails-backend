# OnWater Code Challenge - Job Applicant Report

job-applicant-report is a JavaScript and React frontend that turns json data into an HTML page. In this case, we use fetch json data from our rails backend. This readme will only pertain to the client folder.

## Local implementation

Node Version: v20.11.0  
Ruby Version: v2.7.4

To run on a development server:  
 - First, use the readme for the backend to start the rails server
 - Install dependencies: $ npm install

If you are on a mac, the following command should work:
 - In a separate terminal window run the frontend in a browser: $ npm start

If you are using Windows, try the following instead:
 - Change the start script in /package.json to: "start": "set PORT=4000 && react-scripts start"
 - In a separate terminal window run the frontend in a browser: $ npm start

## Future plans and other notes

 - This app was originally build for a simle json server. It has been slightly adapted to use run on a more robust rails server here. The primary modification to the frontend app is that we only make one fetch request. The rails server serializes our data as a single nested object. This also means we don't have to use the nesting algorithm in the Main.js component, greatly simplifying the frontend workload.

 - At this time, we create a static html page, meaning React is pretty unnecessary and we could just use Vanilla JavaScript. However, if we wish to add the capacity to modify data through this page, React will be helpful.

##

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).