# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

``React Calculator``
``This is a simple calculator built using React. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

``To access the web application :- 

``Installation :-``

    You can clone the whole github repository by the given link:- https://github.com/sahilsinghs15/calculator-react.io.git
    `` `` cd react-calc
    `` `` npm run dev


``      ``Features:-State Management: The component utilizes the useState hook to manage the state of three variables:

``        ``    number1: Represents the value of the first number entered by the user.
``        ``    number2: Represents the value of the second number entered by the user.
``        ``    result: Represents the result of the arithmetic operation performed by the calculator.
                        State Initialization: Each state variable (number1, number2, and result) is initialized using the useState hook with an initial value of 0.
                        
``          ``State Updates: The setNumber1, setNumber2, and setResult functions returned by the useState hook are used to update the state variables in response                                          to user input or arithmetic operations.
                        
``           ``Dynamic Rendering: The JSX elements within the component render dynamically based on the current state values of number1, number2, and result. For                                               example,the value of the input fields (number1 and number2) and the result display (result) are updated in real-time as the state                                             variables change.
