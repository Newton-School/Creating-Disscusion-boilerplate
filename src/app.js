const fs = require("fs");
const express = require("express");
const app = express();

// Importing discussions from discussions.json file
const discussions = JSON.parse(fs.readFileSync(`data/discussions.json`));

// Middlewares
app.use(express.json());


app.get("/api/v1/discussions", (req, res) => {

    res.status(200).json({
        status: "Success",
        message: "Discussions fetched successfully",
        data: {
          discussions,
        },
      });

});

// Write POST endpoint for creating discussions

/*

Endpoint - /api/v1/discussions
req.body = {
      "heading":"xyz",
      "body": "kddk djddk dkdkkd",
      "creator_id": "kkdkdk"
    }
  
Save req.body along with id that will be 1+ the id of last object in the discussions.json file.

Response ==> 

Return 200 Status code
json = {
        status: "Success",
        message: "Discussions added successfully"
      }

*/

app.post("/api/v1/discussions", (req, res) => {
  

});

module.exports = app;