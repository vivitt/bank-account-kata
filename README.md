# bank-account-kata

Back account kata is a solution for a technical challenge for a frontend job position.
It is bank account browser application that presents a UI where users can intereact with their account movements and create new ones.

🔗 [View the deployed project](https://bank-account-kata-git-main-vivitts-projects.vercel.app/)

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

This project is a [Next.js](https://nextjs.org/) application with [Next's app router](https://nextjs.org/docs/app).

I used [Tailwind CSS](https://tailwindcss.com/) for styling and the [@heroicons/react](https://www.npmjs.com/package/@heroicons/react) package to add icons.

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
The first and main improvement I would add to this UI is enhancing accessibility and usability by adding error messages. These messages would inform users of the specific issues when they attempt to submit invalid input values. Also, implementing a more secure method for validating IBAN numbers would further improve the app.

There is also room for improvement in the flexibility of the layout, making it more adaptable to smaller screens.

Finally, the movements are currently stored in a `ts` file with placeholder data, and new movements aren't saved. So, adding user authentication and a database connection would be the next step if I were to continue working on this project.
