/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = 
{
    "hotelName": "Grand City Hotel",
    "checkInDate": "2024-05-15",
    "checkOutDate": "2024-05-20",
    "guests": [
        {
            "name": "Alice Johnson",
            "age": 30,
            "email": "alice.johnson@example.com"
        },
        {
            "name": "Bob Smith",
            "age": "undefined",
            "email": "bob.smith@example"
        }
    ],
    "roomDetails": {
        "type": "Suite",
        "pricePerNight": 200,
        "amenities": [
            "WiFi",
            "Breakfast",
            "Parking"
        ]
    }
}


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong? There was about 4-5 errors.
  1. The age of Bob Smith was set to undefined, which is not a valid JSON value. I changed it to a number (e.g., 35).
  2. The email of Bob Smith was missing a top-level domain. I added ".com" to make it a valid email format.
  3. There was a trailing comma after "Parking" in the amenities array, which is not allowed in JSON. I removed the trailing comma.
  • Why is it a problem in JSON? JSON does not allow undefined values, requires valid email formats, and does not permit trailing commas.
  • What did you change to fix it?
- Ensure the final JSON is properly formatted and valid
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
- I used a JSON linter to validate the JSON structure and identify syntax errors.

2️⃣ How did you confirm that your corrected JSON file was valid?
- I re-ran the JSON linter on the corrected JSON file, and it passed without any errors.

3️⃣ Which errors were the most difficult to spot? Why?
- The most difficult error to spot was the undefined value for Bob Smith's age because it was not immediately obvious that "undefined" is not a valid JSON value.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
- Using a JSON linter regularly, employing syntax highlighting in code editors, and writing JSON by example can help avoid these errors in the future.
*/
