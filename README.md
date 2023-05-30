Elonius -- SMS AI Chatbot with Twilio and OpenAI

This project is a simple SMS-based chatbot application, utilizing Twilio for SMS communication and OpenAI's GPT-3 for conversational responses from AI Elon Musk.

Installation

1. Clone this repository.
2. Navigate to the project directory and run `npm install` to install all necessary dependencies.

Usage

1. Create a .env file in the project root directory and provide your OpenAI API key:
   OPENAI_API_KEY=your_openai_api_key
2. Start the application by running `node app.js` in your terminal.
3. Start ngrok in a new terminal with `ngrok http 3001` to expose your local server to the internet.
4. Copy the ngrok URL and append /sms to it.
5. Go to the Twilio console, navigate to your phone number settings, and paste the ngrok URL in the "A Message Comes In" webhook field.

You can now send a text message to your Twilio number and receive an AI-generated response.
