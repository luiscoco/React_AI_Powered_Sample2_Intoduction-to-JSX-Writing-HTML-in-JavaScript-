# Prompt for the Code Agent (Codex, Gemini Code Assistant or Copilot)

Objective: Modify our “Hello World” application to replace the default content with a simple component that uses the JSX rules we just learned.

Context:

Objective: Practice basic JSX rules.

Project: We are working on the project 01-hola-mundo-react created with Vite.

Files to modify: src/App.tsx and src/App.css.

Versions: React v18+, TypeScript.

Task:

Replace the content in App.tsx and App.css to create a simple user profile card.

Steps for src/App.tsx:

Delete all current content inside the App component.

Inside the App component, create a string variable called userName with the value "Ada Lovelace".

Create an object called userProfile with the following properties:

imageUrl (value: https://i.imgur.com/YfeOqp2.jpeg)

description (value: "Pioneer in programming and mathematician")

In the return statement of the component, implement the following JSX structure:

A main div with the className attribute set to "profile-card".

Inside the div, an img that displays the profile picture. The src attribute should use the imageUrl property from the userProfile object. Make sure the img tag is self-closing.

Below the image, an h1 that shows the value of the userName variable.

Finally, a p element that displays the profile description.

Steps for src/App.css:

Delete all content in the file.

Add basic styles for the .profile-card class so it looks like a card (border, shadow, padding, centered text).

Deliverables:

The final code for src/App.tsx.

The final code for src/App.css.

No new commands are needed; the Vite development server will auto-refresh if already running.

Acceptance Criteria:

When saving the files, the page in localhost:5173 updates automatically.

The page no longer shows the spinning React logo but instead a simple profile card with Ada Lovelace’s picture, her name as a title, and her description.

The card has basic visual styling (border, shadow, etc.) thanks to the CSS.

Verification Instructions:

• Open the browser developer tools (F12 or right-click > Inspect).

• Select the main element and verify that it is a div with the attribute class="profile-card" — not className. This confirms that React correctly translated your JSX into standard HTML.
