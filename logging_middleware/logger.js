require("dotenv").config();
const axios = require("axios");

async function Log(stack, level, pkg, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.ACCESS_TOKEN,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error("STATUS:", err.response?.status);
    console.error("DATA:", err.response?.data);
  }
}

module.exports = Log;