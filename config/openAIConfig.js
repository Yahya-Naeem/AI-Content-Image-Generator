/**
 * Open AI COnfig file
 */

const OpenAI = require('openai');
require('dotenv').config();
const keys = process.env.OPEN_AI_KEYS.split(',');
let currIndex = 0;

function getClient(){
    return new OpenAI({apiKey: keys[currIndex]});
}

const safeRequest = async(requestFN, ...args) =>{
    let attempt = 0;
    while(attempt < keys.length){
        const client = getClient();
        try{
            return await requestFN(client,...args);
        }
        catch(ex){
            console.error(`Error with key ${keys[currIndex]}:`, ex.message);
            currIndex = (currIndex + 1) % keys.length;
            attempt++;
        }
    }
    throw new Error("All API keys exhausted. Please check your keys and billing.");
}
module.exports = {safeRequest};