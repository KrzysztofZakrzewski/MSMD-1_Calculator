# MSMD-1_Calculator

MonkeSeeMonkeDo - it is "my series" of waching tutorials how to create thing in JS.

Calculator.


My first project during barake time.
I do not actualy understand everythig I saw, but here actualy I find one bug of creator:
In function showResults()
 line:
51	let a = Number(previusNumber.innerHTML);
52	let b = Number(currentNumber.innerHTML);
52	let operator = mathSihg.innerHTML;

I swap previusNumber with currentNumber :
51	let a = Number(currentNumber.innerHTML);
52	let b = Number(previusNumber.innerHTML);
52	let operator = mathSihg.innerHTML;

Before this change positive result become negative result and vice versa.
After swap calculator start to work correct.


Technologie I used:
- HTML
- SaaS
- JS
