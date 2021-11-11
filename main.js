const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const prefix = '-';

client.once('ready', ()=>{
    console.log("PoopyHead is Ready");
});

const forbidden = ["rmt","$","usd","sgd","paypal","cheaper rates","real money trade", "gamekiller"];

client.on('message', message=>{

    let toCheck = message.content.toLowerCase();
    if(toCheck.includes("s>") && (toCheck.includes("meso") ||(toCheck.includes("gml") ))){
        message.delete();
    }

    if(toCheck.includes("selling") && (toCheck.includes("gml") || toCheck.includes("meso"))){
        message.delete();
    }

    for(let i = 0; i< forbidden.length; i++){
        if(toCheck.includes(forbidden[i])){
            message.delete();
        }
    }
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();
    const ownerString = "<@&783093013047410700>"+ ", Hey Lazy Heads We Have a Customer, His Discord is ";
    if(command.includes('meso')){
        message.channel.send('Im Broke');
    }
    if(command == 'poop'){
        message.channel.send('https://cdn.discordapp.com/attachments/783131676758507521/783442099563266078/unknown.png');
    }
    if(command == 'buy'){
        const customerMessage = "Hello Welcome to the PAY2WIN Route, " + message.member.toString() + " Customer Statisfaction is our motto! We have "+
        "taken note of your request ^_^. One of our bosses will message you sortly. If you are a returning Customer, Thank you for Coming again :D."
        message.guild.channels.cache.find(i => i.name === 'i-have-aids').send(ownerString + message.member.toString());
        try{
            message.author.send(customerMessage);
            
        }catch(err){
            console.log(err);
        }
        message.delete();
        
    }
});
client.login(process.env.DISCORD_TOKEN);
