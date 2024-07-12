# Calculator

## Project Preview
https://liubovua.github.io/calculator/

## HTML:
<div id="calc-wrap">
    <div id="calc">
        <textarea id=inputVal>0</textarea>
    </div>
</div>

## JS:
1. Event window.onload - The code will start executing after the page has loaded.
2. Necessary buttons signs
3. Calculator form calc
4. Text field with mathematical expression textArea
5. Adding buttons:
- Create a new div element.
- Set the class of the element to 'btn'.
- innerHTML gets and assigns the inner HTML text to the DOM element.
- appendChild allows inserting an element at the end of another element.
6. Click handler - Add an action that is performed when any button is clicked.
7. Function for clicking the calculator button:
- Button 'AC' clears everything from the text field to '0'.
- '=' evaluates the value by converting the expression in the text field to JS:
eval() executes JavaScript code represented as a string.
- '0' clears and writes the button's value.
- '√' calculates the square root using Math.sqrt().
- 'x²', 'x³' calculates the number to the power using Math.pow.
- or add the button's value to the text field using +=.




