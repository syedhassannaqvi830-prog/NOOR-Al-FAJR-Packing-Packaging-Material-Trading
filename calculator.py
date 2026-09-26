"""
Interactive Command-Line & GUI Calculator in Python
Supports basic arithmetic operations, history tracking, and interactive CLI.
"""

import math

class Calculator:
    def __init__(self):
        self.history = []

    def add(self, a: float, b: float) -> float:
        return a + b

    def subtract(self, a: float, b: float) -> float:
        return a - b

    def multiply(self, a: float, b: float) -> float:
        return a * b

    def divide(self, a: float, b: float) -> float:
        if b == 0:
            raise ValueError("Error: Cannot divide by zero.")
        return a / b

    def power(self, base: float, exp: float) -> float:
        return math.pow(base, exp)

    def square_root(self, n: float) -> float:
        if n < 0:
            raise ValueError("Error: Cannot calculate square root of a negative number.")
        return math.sqrt(n)

    def calculate(self, expression: str) -> float:
        """Evaluates basic math expressions safely."""
        try:
            # Clean expression and convert symbols
            expr = expression.replace('×', '*').replace('÷', '/').replace('^', '**')

            # Simple security check to restrict code execution
            allowed_chars = "0123456789+-*/.() %**"
            if not all(c in allowed_chars for c in expr):
                raise ValueError("Invalid characters in expression.")

            result = eval(expr, {"__builtins__": None}, {})
            self.history.append(f"{expression} = {result}")
            return result
        except ZeroDivisionError:
            raise ValueError("Error: Division by zero.")
        except Exception as e:
            raise ValueError(f"Error evaluating expression: {e}")

    def show_history(self):
        if not self.history:
            print("\n--- History is empty ---")
        else:
            print("\n--- Calculation History ---")
            for idx, item in enumerate(self.history, 1):
                print(f"{idx}. {item}")
            print("---------------------------")


def cli_main():
    calc = Calculator()
    print("=" * 45)
    print("        Welcome to Python Calculator       ")
    print("=" * 45)
    print("Commands:")
    print("  Type any mathematical expression (e.g. 12 + 4 * 2)")
    print("  'history' - View calculation history")
    print("  'exit' or 'quit' - Exit the program\n")

    while True:
        try:
            user_input = input("Calc > ").strip()
            if not user_input:
                continue

            if user_input.lower() in ('exit', 'quit'):
                print("Goodbye!")
                break
            elif user_input.lower() == 'history':
                calc.show_history()
                continue

            res = calc.calculate(user_input)
            print(f"Result: {res}\n")

        except ValueError as ve:
            print(f"{ve}\n")
        except (KeyboardInterrupt, EOFError):
            print("\nGoodbye!")
            break

if __name__ == "__main__":
    cli_main()
