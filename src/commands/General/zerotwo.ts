/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "zerotwo",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}yotsuba`,
			baseXp: 30,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/z6GMGNV3teMAAAPo/darling-in-the-franxx-zero-two.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `š *Zero Two* š\n\nš *Description: A WhatsApp Bot With advanced features developed and hosted by SHAFIQ.*\n\nš *SHAFIQ's GitHub URL: https://github.com/Shafiq-Sawand* \n\n  š¾ *Zero Two's URL:https://github.com/Shafiq-Sawand/Zero-2* \n\n š  *Facebook: https://www.facebook.com/AHMED.BALOCHH* \n\n`,
			}
		);
	};
}
