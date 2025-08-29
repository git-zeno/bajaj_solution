# BFHL REST API

A simple REST API for the **BFHL Challenge**.  
Built with **Node.js + Express** and deployed on a hosting provider (Render).

---

## Features
- Accepts POST request at `https://bajaj-solution.onrender.com/bfhl`
- Input: `{ "data": [ ... ] }`
- Returns:
  - `is_success` (true/false)
  - `user_id` → `<full_name_ddmmyyyy>` (lowercase, underscores)
  - `email`, `roll_number`
  - Arrays of `odd_numbers`, `even_numbers`, `alphabets` (uppercase), `special_characters`
  - `sum` of numbers (as string)
  - `concat_string`: reversed alphabets with alternating caps

---

## Example

**Request**
```json
POST /bfhl
{
  "data": ["a","1","334","4","R","$"]
}
