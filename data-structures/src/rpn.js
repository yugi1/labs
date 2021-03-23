/**
Write a javascript program that takes in a string that 
contains a Reverse Polish Notation expression and 
returns the result of the expression. Use your stack 
and queue implementation to help you with the algorithm.

Examples:
    Input: 4 5 *
    Result: 20
    Input: 3 5 10 + * 
    Result: 45

Note: the expression will always have space separated 
      inputs like "4 5 *" rather than "45*" or "4 4*"
 */

      function rpn(expression) {
        const items = expression.split(' ');

        const operands = new Stack();
        const operators = new Queue();

        items.forEach(item => {
            if(isNaN(item)) {
                operators.enqueue(item);

            } else {
                operands.push(+item);
            }
        });
        let operator = operators.dequeue();
        while(operator) {
            const operand1 = operands.pop();
            const operand2 = operands.pop();

            let result;
            switch (operator) {
                case '+':
                    result = operand1 + operand2;
                break;
                case '-':
                    result = operand1 - operand2;
                break;
                case '*':
                    result = operand1 * operand2;
                break;
                case '/':
                    result = operand1 / operand2;
                break;
            }
            operands.push(result);

            operator = operators.dequeue();
        }
        return operands.pop();
    }

    rpn('3 5 10 + *');