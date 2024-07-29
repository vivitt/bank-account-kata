# bank-account-kata

Back account kata is a solution for a technical challenge for a frontend job position.
It is bank account browser application that presents a UI where users can intereact with their account movements and create new ones.

<div align='center'>
<img src='./public/Screen Shot 2024-07-29 at 22.07.34.png' alt='App view screenshot' width='600'/>
</div>

---

### Contents

- [Project details](#project-details)
- [Usage and features](#usage-and-features)
- [Project set up](#project-set-up)
- [Further improvements](#further-improvements)

---

## Project details

This is a Next.js application. I used the Next's app router and Tailwind CSS for styling.

## Usage and features

The app includes one main view divided in two sections:

### Account actions

This section includes a toolbar where users can select the action they want to take. From this section, users can create new deposit, withdraw, or transfer movements, or filter existing movements by date or type.

<div align='center'>
<img src='./public/Screen Shot 2024-07-29 at 22.11.38.png' alt='Home view screenshot' width='600'/>
</div>

#### Deposit or Withdraw

Users can perform deposit or withdrawal movements by entering an amount greater than 0.

#### Make a transfer

Making a transfer requires users to enter a valid IBAN number. The validation of this input is performed using a regular expression, and the 'Transfer' button is disabled until this validation is verified.

<div align='center'>
<img src='./public/Screen Shot 2024-07-29 at 22.07.48.png' alt='Home view screenshot' width='600'/>
</div>

##### Filter movements

Existing movements can be filtered by date by selecting both a starting and ending date. They can also be filtered by type, and both filters can be combined to refine the results.

<div align='center'>
<img src='./public/Screen Shot 2024-07-29 at 22.08.00.png' alt='Home view screenshot' width='600'/>
</div>

### Account movements

The UI displays a list of all existing movements, sorted by decreasing date. This sort can be changed to ascending date by clicking the small arrow in the 'Date' column header.

<div align='center'>
<img src='./public/Screen Shot 2024-07-29 at 22.08.10.png' alt='Home view screenshot' width='600'/>
</div>

## Project set up

To set up this project locally:

- clone this repo: `git clone git@github.com:vivitt/bank-account-kata.git`
- navigate to the api folder `cd bank-account-kata`
- `npm install` to install dependencies
- `npm run dev` to start the server in port 3000

## Further Improvements
Currently, the movements are stored in a ts file with placeholder data, and new movements aren't saved. Adding user authentication and a database connection would allow persisting and storing user data. 
Also, implementing a safer way to validate the IBAN number would be a nice improvement for the app. 
Finally, there is some code repetition in the component that renders the list of movements that could be improved.
