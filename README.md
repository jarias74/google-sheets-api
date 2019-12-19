Hey TTT members 👋

So you're looking to convert your Google Sheet into a RESTful API? You're in luck!

With the power of AWS Lambda and Serverless Framework, you can do this literally for free
(saving you more than $500/year if you're using services like Sheetsu.com)

Here's an example you can play with:
GET API: https://oy9aarlfn3.execute-api.us-east-1.amazonaws.com/prod/google-sheets-api/get
Sheet (feel free to edit it to see changes): https://docs.google.com/spreadsheets/d/1Q1npTBexJfIdJ3lMg1v_0MzbiFRqP0NA-fHEasSCANI/edit?usp=sharing

# TODO

1. PUT/POST/DELETE endpoints (Right now I've only created the GET API call)
2. Make GET response 5x faster
3. Reduce steps to get this service running

Now on to the main thing, here's how you can get started

# Get Started

1. Create a free AWS account (if you don't already have one)
Video tutorial: https://serverless.com/learn/tutorial/create-an-aws-account/

2. Open your Mac/Windows terminal and install serverless framework
Command: `npm install serverless -g`
Video tutorial: https://serverless.com/learn/tutorial/installing-serverless-framework-via-npm/

3. Run the following command in your terminal to open your project folder
`git clone git@github.com:pdaryani/lambda-google-sheets.git && cd google-sheets-api && open .`

4. Find `serverless.yml` file and replace example SHEET_KEY with your own sheet key: https://tinyurl.com/wwbkkjg

5. Execute 'serverless deploy' in your terminal and you'll get your API as an output after the deployment is done: https://tinyurl.com/r4kop4e

6. Enjoy!

If you have any questions, hit me up on TTT :)