# Roman Numerals

Roman to Decimal Converter
This TypeScript project provides a simple utility function to convert Roman numerals to decimal numbers.

## Installation

Clone the repository to your local machine:

Copy code

```sh
git clone <repository-url>
```

Navigate to the project directory:

Copy code

```sh
cd roman-to-decimal-converter
```

Install dependencies:

Copy code

```sh
npm install
```

## Usage

To use the Roman to Decimal converter, you need to import the romanToDecimal function from the `romanConverter.ts` file.

```sh
import { romanToDecimal } from './src/romanConverter';

const decimalNumber = romanToDecimal('MMVI');
console.log(decimalNumber); // Output: 2006
```

## Running Tests

run test file
npm start

The project uses Jest for testing. Run the following command to execute the test suite:

```sh
npm test
```

This command will run all the test cases in the `src/romanConverter.test.ts` file and report the results.

## Start the Application

To start the application and test the Roman to Decimal converter with a custom input, use the following command:

```sh
npm start
```

This command runs the `main.ts` file, which contains an example usage of the `romanToDecimal` function. The output will be displayed in the console.

## Functionality

The `romanToDecimal` function takes a string representing a Roman numeral as input and returns the corresponding decimal number. The conversion follows the rules of Roman numerals, including handling subtractive notation.

## Rules for Roman Numerals

- Roman numerals consist of the following symbols and their values:

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

- The symbols "I," "X," "C," and "M" can be repeated up to three times in succession.

- Subtraction is allowed in specific cases (e.g., IV for 4, IX for 9).

- No subtraction is allowed for "V," "L," and "D."

- Larger values precede smaller values, and subtraction is applied when needed.

## Contributing

If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Write tests for your changes.
5. Ensure all tests pass.
6. Submit a pull request.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.
