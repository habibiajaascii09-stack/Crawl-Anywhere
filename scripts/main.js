import { world, system } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((data) => {
    const player = data.sender;
    const message = data.message.toLowerCase();

    if (message === "/crawl on") {
        system.run(() => {
            player.addTag("crawl_enabled");
            player.sendMessage("§b[Ability] §aCrawl Mode: ACTIVE");
        });
        data.cancel = true;
    }

    if (message === "/crawl off") {
        system.run(() => {
            player.removeTag("crawl_enabled");
            player.sendMessage("§b[Ability] §cCrawl Mode: DISABLED");
        });
        data.cancel = true;
    }
});
