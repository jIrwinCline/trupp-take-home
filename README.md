# Trupp HR Frontend Excersise

Thank you for the fun little problem and I hope to hear back from your team!

## Project completely developed in _Typescript_ and the _React Library_.

## Thought Process on structure and what I would do differently.

I decided to tackle the project in Typescript and React. Since I'm more familiar with React and wanted to show how fast I could effectively complete the project, but still used TypeScript since I know this is what Trupp uses in their front end with Angular.

I used CSS styling since for simplicity, and I didn't want to use react specific styling (like styled components or MUI MakeStyles) since Trupp's stack likely uses either css or sass files.

I set the project up with a pages (sometimes called containers) and componenets directory. I would have liked to have further brok down the components, but ultimately it was a small project and I didn't think it was necessary. Though, if new pages were added to the app eventually, it would be easy to start adding them to the /pages directory and adding some app routing.

I included one custom reusable component for the unique section titles in the modal. This just shows I can think in a component mindset and dry up code when appropriate. Other areas I could have done this would have been like buttons, inputs, drop downs, etc.

## Current Bugs

On the Radio button selection, canceling or exiting the modal will still result in the gender changing state.
