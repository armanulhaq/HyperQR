QR Buddy - Project Overview
QR Buddy is a minimal web-based QR code generator. The project consists of a single-page HTML interface where users can enter a URL. Upon submitting the URL, a QR code image file will be generated and downloaded to the user's system.

How To Run The Project
Navigate to the project folder and run npm install to install dependencies.
Run node server.js to start the backend server.
Open index.html in your browser to access the frontend.
File Structure
index.html
This is the main HTML file. It contains the layout of the webpage, which includes an input box for URLs and a button to trigger the QR code generation.

styles.css
Contains all the styles for the HTML elements defined in index.html. This ensures the page looks decent and the UI elements are clearly visible.

server.js
This is the server-side Node.js file. It handles the QR code generation using the qr-image library and serves it to the frontend upon request.

README.txt
You are reading it! It serves as the project documentation.

How It Works
Frontend: The user enters a URL in the input field and presses the 'Generate QR image' button.

Backend Call: When the button is clicked, a fetch request is sent to the backend, passing along the URL to be converted into a QR code.

QR Code Generation: The backend receives the URL, generates a QR code, and converts it to a base64 encoded PNG image.

Downloading the Image: The front-end receives the base64 image, creates a hidden anchor (<a>) element, and triggers a click event programmatically to start downloading the image file.
