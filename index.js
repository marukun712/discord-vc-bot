const Discord = require('discord.js');

const client = new Discord.Client();

const { Client } = require('voicevox-api-client')

require('dotenv').config();

const token = process.env.TOKEN

const cllient = new Client('http://localhost:50021')

const fs = require('fs')

client.on('ready', () => {
    console.log('起動完了！');
});
client.on('message', message => {
    var msg = message.content

    if (message.member.voiceChannel) {
        const createVoice = async(text) => {
            const query = await cllient.query.createQuery(0, text)
            const voice = await cllient.voice.createVoice(0, query)
            const buf = Buffer.from(voice)

            fs.writeFile('voice.mp3', buf, (err) => {
                if (err) console.log(`error!::${err}`);

            });
        }

        function sendfile() {
            message.member.voiceChannel.join().then(connection => {
                connection.playFile('voice.mp3');
            })
        }

        function read() {
            createVoice(msg)
            setTimeout(sendfile, 1500)
        }

        read()
    }

});


client.login(token)