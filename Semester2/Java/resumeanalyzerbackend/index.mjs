import express from "express";
import OpenAI from "openai"; // Import for interacting with OpenAI API (if needed later)
import { OpenAIStream, StreamingTextResponse } from 'ai';
import cors from "cors";
import ExtractTextPDF from "./ExtractTextPDF.mjs";

const app = express();
const port = 3000;

app.use(express.json({ limit: '10mb' }));

app.use(cors());

const openai = new OpenAI({
  apiKey: " ",
});

app.post("/", async (req, res) => {
  try {
    const str = await ExtractTextPDF().then((x)=>{
      return x;
    });
    
    const regex = /(?:\b(?:WORK EXPERIENCE|EDUCATION|PROJECTS|SKILLS|INTERESTS)\b|\b(?:LinkedIn|LeetCode|GitHub)\b:\/\/\s*(?:\S+\s*|\s*)|[\d\s\.\-+()]{10,}|\b(?:\d{2,}\s*-\s*Present|\w+\s*\d{2,}\s*-\s*\w+\s*\d{2,})\b|\b(?:\d{2,}\s*\/\s*\d{2,}\s*\/\s*\d{2,}|\d{2,}\s*\/\s*\d{2,}\s*\/\s*\d{4,})\b|https?:\/\/\S+|\s{2,})/g;

    let messages = str.replace(regex, '');

    if (messages.length > 2048) {
      messages = messages.substring(0, 2048);
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `CONTEXT: You are an expert at predicting the dollar worth of resumes.
          -------
          TASK: 
          - You will receive a resume from a user as a test input.
          - Analyze the resume and provide an estimated worth in INR 
          - Provide 4 short bullet points explanation of the key factors contributing to the assessment,
          and 4 tips on how they can improve their worth. Each bullet point should be less than 1 line.
          -------
          **HTML Code Prompt:**
            OUTPUT FORMAT: 
            html
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Job Requirements</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
                .container {
                  max-width: 600px;
                  margin: 50px auto;
                  padding: 20px;
                  background-color: #f4f4f4;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                  text-align: center;
                  color: #333;
                }
                ul {
                  list-style-type: none;
                  padding: 0;
                }
                ul li {
                  margin-bottom: 10px;
                }
                ul li::before {
                  color: #28a745; /* Green bullet color */
                  font-weight: bold;
                  display: inline-block;
                  width: 1em;
                  margin-left: -1em;
                }
              </style>
            </head>
            <body>
              <div class="container">
                // Worth will come here
                <h1>₹ Estimated worth: ... - worth Resume</h1>
                <div>
                  <h2>Achievements:</h2>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div>
                  <h2>Additional Suggestions:</h2>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </body>
            </html> ${messages}`
        },
      ],
      temperature: 1,
    });
    // console.log(JSON.stringify(response.choices[0].message))
    const outputText = response.choices[0].message.content;
    res.send(outputText);
  } catch (error) {
    // console.log(error)
    return res.status(500).json({ message: "Error processing request" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
