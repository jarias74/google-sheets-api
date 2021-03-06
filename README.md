Hey TTT members 👋

So you're looking to convert your Google Sheet into a RESTful API? You're in luck!

With the power of [AWS](https://aws.amazon.com) and [Serverless Framework](https://serverless.com), you can do this literally for free  
(saving you more than $500 - $1000/year if you're using services like sheetsu.com and sheetapi.co)

# Example

**GET API**: https://oy9aarlfn3.execute-api.us-east-1.amazonaws.com/prod/google-sheets-api/get

**Source Sheet** (feel free to edit it to see changes): https://docs.google.com/spreadsheets/d/1Q1npTBexJfIdJ3lMg1v_0MzbiFRqP0NA-fHEasSCANI/edit?usp=sharing

# TODO

1. PUT/POST/DELETE endpoints (Right now I've only created the GET API call)
2. Make GET response 5x faster
3. Reduce steps to get this service running
4. Have the option to make the URL pretty so instead of  
https://oy9aarlfn3.execute-api.us-east-1.amazonaws.com/prod/google-sheets-api/get  
you can use something like this for example:  
https://api.yourdomain.com/get

Now onto the main thing, here's how you can get started

# Get Started

1. Create a free AWS account (if you don't already have one)  
**Video tutorial**: https://serverless.com/learn/tutorial/create-an-aws-account/

2. Open your Mac/Windows terminal and install serverless framework
Command: `npm install serverless -g`  
**Video tutorial**: https://serverless.com/learn/tutorial/installing-serverless-framework-via-npm/

3. Run the following command in your terminal to open your project folder  
`git clone https://github.com/pdaryani/google-sheets-api.git && cd google-sheets-api && open .`    
**Note**: if you don't have and don't want to install `git`, just download the zip file of this repo and open it up: https://tinyurl.com/sl29ask

4. Find `serverless.yml` file in your project folder and replace example **SHEET_KEY** value with your own google sheet key: https://tinyurl.com/wwbkkjg

5. Execute `serverless deploy` in your terminal and you'll get your API as an output after the deployment is done: https://tinyurl.com/r4kop4e

6. Enjoy!

If you have any questions, hit me up in TTT Slack group :)