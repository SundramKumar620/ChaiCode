# JS Foundation

Summary:-

1. **Variables & Constants:**<br>
   - Declaring variables using `let` and `const`.<br>
   - `let` allows re-assignment, while `const` does not.<br>

2. **Data Types:**<br>
   - **Primitive Types:**<br>
     - String (`"Hello"`)<br>
     - Number (`42`)<br>
     - Boolean (`true`, `false`)<br>
     - Null (`null`)<br>
     - Undefined (`undefined`)<br>
     - Symbol (`Symbol()`)<br>

   - **Object:**<br>
     - Creating an object (`let person = { name: "Hitesh", age: 19, isStudent: true }`).<br>

3. **Type Conversion:**<br>
   - Converting strings to numbers: `Number(num)`, `+num`, and `parseInt(num)`.<br>
   - Converting numbers to strings: `String(str)`.<br>

4. **Basic Arithmetic Operations:**<br>
   - Sum (`+`), Difference (`-`), Product (`*`), Quotient (`/`), Remainder (`%`), Exponentiation (`**`).<br>

5. **Comparison Operators:**<br>
   - Equality (`==`), Not Equal (`!=`), Greater Than (`>`), Less Than (`<`), Greater or Equal (`>=`), Less or Equal (`<=`).<br>

6. **Math Methods:**<br>
   - `Math.max()`, `Math.min()`, and `Math.random()` for random number generation.<br>

7. **String Methods:**<br>
   - **Concatenation:** Joining strings using `+`.<br>
   - **String Manipulation:** `toUpperCase()`, `indexOf()`, `slice()`.<br>

8. **Template Literals:**<br>
   - Using backticks and `${}` to insert variables in strings.<br>

9. **Arrays:**<br>
   - Arrays are created using square brackets `[]`.<br>
   - **Common array methods:** `.push()`, `.pop()`, `.indexOf()`, `.splice()`, `.forEach()`, `.concat()`, spread operator (`...`).<br>
   - Example: `.push("Herbal Tea")` adds an element, `.pop()` removes an element.<br>
   - Using `.forEach()` to iterate over array elements.<br>

10. **Objects:**<br>
    - Objects have key-value pairs, and nested objects can store more complex data (e.g., `chaiRecipe` with ingredients).<br>
    - **Object Destructuring:** `{ name, myingredients } = chaiRecipe`.<br>

11. **Functions:**<br>
    - **Defining Functions:** `function functionName() {}`.<br>
    - **Conditional Statements:** Using `if` statements for decision-making.<br>
    - **Switch Statements:** Handling multiple conditions based on a variable (e.g., `trafficLight()`).<br>

12. **Truthy & Falsy Values:**<br>
    - Values that evaluate to `true` or `false` in a condition.<br>
    - Example: `0`, `""`, `null`, `undefined`, and `NaN` are falsy, while other values are truthy.<br>

13. **Practical Coding Examples:**<br>
    - **E-commerce discount system:** Function to calculate total price with discount.<br>
    - **Traffic light system:** Using switch-case to determine the light's action.<br>
    - **Login system:** Using conditions to check credentials.<br>
    - **Reduce and Filter Methods:** Summing up sales, finding low stock items, and finding the most active user.<br>

14. **Advanced Array Handling:**<br>
    - Using `.reduce()` to find the "most active" user from an array of objects.<br>
