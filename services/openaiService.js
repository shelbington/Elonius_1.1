const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

exports.generateAIMessage = async (incomingMessage) => {
  const aiResponse = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: "answer as Elon Musk:" + incomingMessage,
    max_tokens: 100,
  });

  return aiResponse.data.choices[0].text;
};
