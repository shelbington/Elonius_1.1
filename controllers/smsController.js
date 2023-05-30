const MessagingResponse = require('twilio').twiml.MessagingResponse;
const openaiService = require('../services/openaiService');

exports.handleSMS = async (req, res) => {
  try {
    const twiml = new MessagingResponse();
    const incomingMessage = req.body.Body;

    // use openaiService to generate AI message
    const aiMessage = await openaiService.generateAIMessage(incomingMessage);

    twiml.message(aiMessage);

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while processing your request.');
  }
};
