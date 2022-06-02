import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['h', 'menu']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://c.tenor.com/dEYkyvVk4OQAAAPo/lol.mp4'
        ]
        let zerotwo = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: zerotwo }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:`
               📍 Zero Two Bot 📍

Ⓞ Hello, *${M.sender.username}* i am *Zero Two Bot*, based on *Chitoge* and *Void*.
Ⓞ All of my commands are listed below darling. Type ${this.client.config.prefix}help <Command Name> to get info about any specific command. 
Ⓞ Type ${this.client.config.prefix}support to get Zero Two support group link in your DM.
Ⓞ Contact ${this.client.config.prefix}mods to to add me in your groups.



	🍁 *Coding* 🍁

⌬ ${this.client.config.prefix}github

	🍁 *Educative Tools* 🍁

⌬ ${this.client.config.prefix}brainly
⌬ ${this.client.config.prefix}calculator
⌬ ${this.client.config.prefix}crypto
⌬ ${this.client.config.prefix}element
⌬ ${this.client.config.prefix}ip
⌬ ${this.client.config.prefix}weather
⌬ ${this.client.config.prefix}trivia
⌬ ${this.client.config.prefix}urbandictionary

	🍁 *For Fun* 🍁

⌬ ${this.client.config.prefix}ppcouple
⌬ ${this.client.config.prefix}fact
⌬ ${this.client.config.prefix}jail
⌬ ${this.client.config.prefix}joke
⌬ ${this.client.config.prefix}quote
⌬ ${this.client.config.prefix}rip
⌬ ${this.client.config.prefix}react
⌬ ${this.client.config.prefix}ship
⌬ ${this.client.config.prefix}trash
⌬ ${this.client.config.prefix}trigger
⌬ ${this.client.config.prefix}baka
⌬ ${this.client.config.prefix}wanted
⌬ ${this.client.config.prefix}why
⌬ ${this.client.config.prefix}dare
⌬ ${this.client.config.prefix}truth
⌬ ${this.client.config.prefix}wasted
⌬ ${this.client.config.prefix}chat
⌬ ${this.client.config.prefix}doge

	🍁 *Games* 🍁

⌬ ${this.client.config.prefix}chess

	🍁 *General Commands* 🍁
⌬ ${this.client.config.prefix}admins
⌬ ${this.client.config.prefix}exp
⌬ ${this.client.config.prefix}help
⌬ ${this.client.config.prefix}hi
⌬ ${this.client.config.prefix}info
⌬ ${this.client.config.prefix}invitelink
⌬ ${this.client.config.prefix}mods
⌬ ${this.client.config.prefix}profile
⌬ ${this.client.config.prefix}rank
⌬ ${this.client.config.prefix}support
⌬ ${this.client.config.prefix}zerotwo

	🍁 *Media* 🍁

⌬ ${this.client.config.prefix}karaoke
⌬ ${this.client.config.prefix}lyrics
⌬ ${this.client.config.prefix}play
⌬ ${this.client.config.prefix}spotify
⌬ ${this.client.config.prefix}ytaudio
⌬ ${this.client.config.prefix}ytvideo
⌬ ${this.client.config.prefix}ytsearch
⌬ ${this.client.config.prefix}iguser
⌬ ${this.client.config.prefix}igdl
⌬ ${this.client.config.prefix}tiktok
⌬ ${this.client.config.prefix}video
⌬ ${this.client.config.prefix}pinterest
⌬ ${this.client.config.prefix}toimg

	🍁 *Admins Only* 🍁

⌬ ${this.client.config.prefix}activate
⌬ ${this.client.config.prefix}deactivate
⌬ ${this.client.config.prefix}open
⌬ ${this.client.config.prefix}close
⌬ ${this.client.config.prefix}promote
⌬ ${this.client.config.prefix}demote
⌬ ${this.client.config.prefix}delete
⌬ ${this.client.config.prefix}everyone
⌬ ${this.client.config.prefix}groupchange
⌬ ${this.client.config.prefix}revoke
⌬ ${this.client.config.prefix}remove
⌬ ${this.client.config.prefix}purge

	🍁 *Nature* 🍁

⌬ ${this.client.config.prefix}fox

	🍁 *Utilities* 🍁

⌬ ${this.client.config.prefix}blur
⌬ ${this.client.config.prefix}circle
⌬ ${this.client.config.prefix}gif
⌬ ${this.client.config.prefix}google
⌬ ${this.client.config.prefix}retrieve
⌬ ${this.client.config.prefix}screenshot
⌬ ${this.client.config.prefix}steal
⌬ ${this.client.config.prefix}sticker
⌬ ${this.client.config.prefix}stickersearch
⌬ ${this.client.config.prefix}subred
⌬ ${this.client.config.prefix}translate
⌬ ${this.client.config.prefix}wikipedia
⌬ ${this.client.config.prefix}amazon
⌬ ${this.client.config.prefix}shorturl

	🍁 *Weeb* 🍁

⌬ ${this.client.config.prefix}anime
⌬ ${this.client.config.prefix}animeme
⌬ ${this.client.config.prefix}character
⌬ ${this.client.config.prefix}characterid
⌬ ${this.client.config.prefix}genshincharacter
⌬ ${this.client.config.prefix}kitsune
⌬ ${this.client.config.prefix}crossplay
⌬ ${this.client.config.prefix}neko
⌬ ${this.client.config.prefix}manga
⌬ ${this.client.config.prefix}pokemon
⌬ ${this.client.config.prefix}sauce
⌬ ${this.client.config.prefix}vtuber
⌬ ${this.client.config.prefix}megumin
⌬ ${this.client.config.prefix}wallpaper
⌬ ${this.client.config.prefix}randomwallpaper


  『 Zero Two 』
   Based on: Chitoge, Yotsuba and Void
   Character theme designer: Fantox
   ©️ Synthesized Infinity


`}
        )
    }
}
