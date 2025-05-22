Live Deemo:http://127.0.0.1:5500/

📄 File Descriptions
✅ index.html
Contains the full layout of the SIP calculator.

Includes:

A Bootstrap-based navbar

Input sliders for investment amount, interest rate, and period

Output boxes to display results

Donut chart canvas to visualize data

Informative section with related financial calculators

✅ style.css
Custom styles for consistent branding and better visuals.

Includes:

.heading-btn, .display-box, .invest-button

Legend indicators .invested-square, .return-square

Responsive styling for the canvas

✅ script.js
Handles:

Reading input slider values

Calculating:

Total investment

Estimated returns

Final maturity value

Updating the UI accordingly

Rendering/updating a Chart.js donut chart dynamically

💡 SIP Calculation Formula
If:

P = Monthly Investment

r = Annual Rate of Return / 12 / 100

n = Time Period in months

Then:

java
Copy
Edit
Maturity Amount = P × [(1 + r)^n – 1] / r × (1 + r)
📊 Chart Behavior
Uses Chart.js's doughnut type

Two segments:

Invested Amount

Estimated Returns

Updates dynamically when slider values change

✅ Features
Real-time updates with slider changes

Currency formatting (Indian Rupees)

Smooth user experience with Bootstrap and custom styles

Visual understanding via donut chart

Mobile-responsive layout

![Screenshot 2025-05-22 201508](https://github.com/user-attachments/assets/caa70404-5e78-4d01-bbe7-a455dbdb5d15)
