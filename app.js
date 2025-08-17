const readline = require('readline');
const {generateMeta} = require('./controllers/openaiController');
const { title } = require('process');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Youtube video title: \n', async (answer) => {
    await generateMeta(answer); 
    rl.close();
});
