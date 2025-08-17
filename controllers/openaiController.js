const {safeRequest} = require('../config/openAIConfig');

const generateMeta = async(title) => {
    const response = await safeRequest(async (client) => {
        return client.chat.completions.create({
        model:"gpt-5",
        messages: [
            {
                role:'user',
                content: `Generate a description for the title: ${title}`
            }
        ],
        max_tokens: 100
    });
    });
    console.log(response.choices[0].message.content);
};

module.exports={
    generateMeta
}