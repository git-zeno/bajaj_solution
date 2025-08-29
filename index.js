const express = require('express');
const app = express();

app.use(express.json());

app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Please provide a valid array for the 'data' field in your request."
      });
    }

    const oddNumbers = [];
    const evenNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    let totalSum = 0;

    data.forEach(item => {
      if (/^-?\d+$/.test(item)) {
        const number = parseInt(item, 10);
        if (number % 2 === 0) {
          evenNumbers.push(item);
        } else {
          oddNumbers.push(item);
        }
        totalSum += number;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        specialCharacters.push(item);
      }
    });

    const allAlphabets = alphabets.join('');
    const reversedAlphabets = allAlphabets.split('').reverse().join('');

    let finalConcatenatedString = '';
    for (let i = 0; i < reversedAlphabets.length; i++) {
      finalConcatenatedString += i % 2 === 0
        ? reversedAlphabets[i].toUpperCase()
        : reversedAlphabets[i].toLowerCase();
    }

    const responsePayload = {
      is_success: true,
      user_id: "john_doe_17091999", 
      email: "john@xyz.com", 
      roll_number: "ABCD123",    
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialCharacters,
      sum: totalSum.toString(),
      concat_string: finalConcatenatedString
    };

    res.status(200).json(responsePayload);
  } catch (error) {
    res.status(500).json({
      is_success: false,
      message: `Whoops! An unexpected error occurred: ${error.message}`
    });
  }
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is happily running on http://localhost:${PORT}`);
  });
}
module.exports = app;
