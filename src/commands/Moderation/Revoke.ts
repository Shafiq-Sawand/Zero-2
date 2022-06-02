/** @format */

import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			adminOnly: true,
			command: "revoke",
			description: "Revokes the group link.",
			category: "moderation",
			usage: `${client.config.prefix}revoke`,
			baseXp: 500,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		if (!M.groupMetadata?.admins?.includes(this.client.user.jid))
			return void M.reply(
				"📍 Darling tell me, how can I reset this group's link without being an Admin?"
			);
		await this.client.revokeInvite(M.from).catch(() => {
			return void M.reply("Failed to reset the group link");
		});
		return void M.reply("📍 Group link reset succesfull");
	};
}
