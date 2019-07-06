import Clarifai from 'clarifai';
require('dotenv').config();

const app = new Clarifai.App({
    apiKey: process.env.CLARIFAI_API_KEY
   });

const statusCode = 200;
const headers = {
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Headers": "Content-Type"
  };

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode,
        headers,
        body: "This was not a post request. Only post requests allowed!" };
  }

  const params = JSON.parse(event.body);
  const input = params.input;

  if (!params.input) {
    const message = "Required information is missing!";

    console.error(message);

    return {
      statusCode,
      headers,
      body: JSON.stringify({
        status: "failed",
        message
      })
    };
  }

  return app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
  .then(generalModel => {
    return generalModel.predict(input);
  })
  .then(response => {
    return {
      statusCode,
      headers,
      body: JSON.stringify(response)
    }
  })
  .catch(err => console.log(err))

  
};

