# Frontend and AWS Lambda Task

This project demonstrates the creation of a responsive webpage with frontend features like a fixed navbar, collapsible left menu, and adjustable content based on screen width. Additionally, it includes AWS Lambda functions to add two numbers and store a document or PDF in an S3 bucket.

## Table of Contents
1. [Frontend Development](#frontend-development)
   - [Responsive Webpage Features](#responsive-webpage-features)
   - [JavaScript Function for Screen Size Adjustment](#javascript-function-for-screen-size-adjustment)
2. [AWS Lambda Functions](#aws-lambda-functions)
   - [Add Two Numbers Lambda](#add-two-numbers-lambda)
   - [Store Document in S3 Lambda](#store-document-in-s3-lambda)
3. [Installation](#installation)
4. [Usage](#usage)
5. [License](#license)

## Frontend Development

### Responsive Webpage Features
- **Fixed Navbar**: A navigation bar at the top of the page that remains fixed while scrolling.
- **Three Sections**: 
  - **Left Menu**: A collapsible menu on the left side of the page.
  - **Main Content Area**: The main section of the page for content.
  - **Right-side Panel**: A sidebar to the right for additional content.
- **Footer**: A footer section fixed at the bottom of the page.

### JavaScript Function for Screen Size Adjustment
A JavaScript function is included that adjusts the page width based on the screen size:
- For screens between 992px and 1600px, the page shrinks to 90%.
- For screens between 700px and 767px, the page shrinks to 80%.
- For screens between 600px and 700px, the page shrinks to 75%.
- For screens below or equal to 600px, the page shrinks to 50%.

## AWS Lambda Functions

### Add Two Numbers Lambda
This Lambda function accepts two numbers as input, adds them together, and returns the result in a structured response.

### Store Document in S3 Lambda
This Lambda function stores a document or PDF file in an S3 bucket. The file is provided as a hex-encoded string in the event and is uploaded to the specified S3 bucket.

## Installation

### Frontend
1. Clone the repository:
   ```bash
   git clone https://github.com/AbhaysinhM16/90-North-Internship-Task
   ```

2. Open the `index.html` file in your browser to view the webpage. The JavaScript function for screen resizing is automatically applied based on the viewport size.

### AWS Lambda Functions
1. Ensure you have AWS CLI installed and configured with your credentials.
2. Deploy the Lambda functions:
   - Create a new Lambda function in AWS Console or use the AWS CLI to deploy the functions.
   - Set up the appropriate permissions for the Lambda functions, including permissions to interact with S3 for the document upload function.

3. Invoke the Lambda functions via the AWS Console or programmatically through API Gateway or AWS SDK.

## Usage

### Frontend
- The page will automatically adjust based on screen size due to the JavaScript function.
- The left menu can be collapsed and expanded by clicking on the menu icon.
- The navbar will stay fixed at the top of the page while scrolling.

### AWS Lambda Functions
- **Add Two Numbers Lambda**: Pass the numbers as input in the event to the Lambda function, and it will return the sum of the two numbers.
- **Store Document in S3 Lambda**: Pass the file content as a hex-encoded string along with the file name to store the document in the specified S3 bucket.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
