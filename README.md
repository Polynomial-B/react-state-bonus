# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) React State Bonus Lab

- `npm i` to install everything
- `npm run dev` to run the development server


## CombinationLock

Create a component `CombinationLock` that has 4 counters in it. 

**Part 1**

These counters should meet the following requirements: 
- You should be able to increase and decrease a counter independently 
- The __valid range__ for a counter is 0-9. It cannot go below 0 or above 9.
- All counters starting value (0-9) should be **randomised**.

**Part 2**

The valid combination for the lock is **1234**. Update your program so that, when the user adjusts all 4 counters to the correct positions to match the combination, your component displays `<p>Unlocked!</p>`. You can display this message below all your counters in your JSX.


## NandGate

In digital electronics, a NAND gate (NOT-AND) is a logic gate which produces an output which is false only if all its inputs are true (wikipidia).

Create a component `NandGate` that has two conditions, and two buttons to toggle each of those two conditions `true/false` (much like the `YesAnd` exercise from the previous lab). 

If, and only if, both conditions are true, your component should show `<p>The gate is now closed</p>`. Otherwise you should show `<p>The gate is open</p>`.


## Password Strength Checker

Create a `PasswordStrengthChecker` component that checks the strength of a password.

Your component should have a single `input` element (to type your password into), and a `button` to check your password.

When the button is clicked, your component should check the text inside your input, using the following logic:
- Must have at least 8 characters.
- Must have at least 1 uppercase character.
- Must have at least 1 lowercase character.
- Must have at least 1 number.

If the password meets all these criteria, you should show: `<p>'Password looks good!</p>` in your JSX. 

If your password check fails, you should show _the first criteria that failed_. E.g. if your password is `spoon`, you should show `<p>Must have at least 8 characters.</p>` in your JSX. 

If you haven't checked your password yet, you should show nothing.
