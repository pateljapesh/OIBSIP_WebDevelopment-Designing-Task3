# OIBSIP_WebDevelopment-Designing-Task3


📝 Internship Task Details
Task Assignment: > "The user will input a temperature in either Fahrenheit or Celsius and press a 'convert' button. The converted temperature will then be displayed with the correct unit.  

# Interactive Temperature Converter 🌡️⚡

A sleek, responsive web application that converts temperatures seamlessly between Celsius, Fahrenheit, and Kelvin. This project was developed as part of my Web Development and Designing Internship at Oasis Infobyte.

---

## 🎯 Objective
The primary objective of this project was to build an interactive client-side converter layout to practice JavaScript logical execution and dynamic DOM updates. By completing the core features and successfully taking on the **extra challenge** requirement, this tool computes multi-unit conversion equations simultaneously from a single user input.

---

## 🛠️ Tools & Technologies Used
* **HTML5:** For creating structured user input forms, interactive action buttons, and individual result container grids.
* **CSS3:** For styling a modern dark-themed graphical interface, layout centering, rounded element borders, and custom active state properties.
* **JavaScript (ES6+):** For validating raw user inputs, executing mathematical temperature conversion formulas, and dynamically altering target text elements.

---

## 📝 Steps Performed
1. **Structuring Form Layouts:** Built a centralized application frame containing a numeric entry field, interactive source selectors, a conversion execution trigger button, and a dynamic results visualization panel.
2. **Implementing Math Logic (JavaScript):** Programmed the underlying logic algorithms mapping out precise mathematical multi-unit conversion steps:
   * **From Celsius:** $F = (C \times 9/5) + 32$ and $K = C + 273.15$
   * **From Fahrenheit:** $C = (F - 32) \times 5/9$ and $K = ((F - 32) \times 5/9) + 273.15$
   * **From Kelvin:** $C = K - 273.15$ and $F = ((K - 273.15) \times 9/5) + 32$
3. **Adding State Listeners:** Added active button toggle properties to instantly modify source unit labels (`°C`, `°F`, `K`) depending on which selector button is highlighted.
4. **Input Control Validation:** Coded validation checks inside the application form field to reject non-numeric inputs and protect functional equations from computation faults.
5. **Output Rendering:** Connected the action trigger to simultaneously reveal calculated results onto high-contrast Fahrenheit, Celsius, or Kelvin highlighted dashboard cards.

---

## 🚀 Key Outcomes
* Developed a high-performance web script that handles complex math conversions cleanly without refreshing the webpage.
* Successfully executed the advanced option criteria by integrating a complete tri-unit matrix matching Celsius, Fahrenheit, and Kelvin standards.
* Maintained clean UI/UX consistency across error inputs, empty inputs, and massive metric calculations.
* Mastered conditional front-end scripting paradigms by connecting input values to varied mathematical outcomes seamlessly.
