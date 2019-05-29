"use strict";

const COOLDOWN_DURATION = 7 * 60000;

if (!Monitor.leavephraseInitialized) {
    Events.on(["l", "L"], (id, room, type, msg) => {
        let user = Users.get(msg);
        if (user.welcomeCooldown && user.welcomeCooldown[room.id] && user.welcomeCooldown[room.id] > Date.now()) return;
        
        let phrase = Db("leavephrase").get([room.id, user.userid], null);
        if (phrase) {
            room.send(null, phrase);

            if (!user.welcomeCooldown) user.welcomeCooldown = {};
            user.welcomeCooldown[room.id] = Date.now() + COOLDOWN_DURATION;
        }
    });
    Monitor.leavephraseInitialized = true;
}

exports.commands = {
    "lp": 'leavephrase',
    "leavephrase": function (target, room, user) {
        if (!user.hasRank(room,'+')| !room) return false;
        if (!target) {
            if (Db("leavephrase").get([room.id, user.userid])) return this.send("Your current message for this room is: " + Db("leavephrase").get([room.id, user.userid]));
            return false;
        }
        if (target === "off") {
            Db("leavephrase").delete([room.id, user.userid]);
            return this.send("Your leave phrase has been removed");
        } else if (target === 'clearall') {
            if (!this.can('set')) return this.send('Only room owners can clear all leave phrases from a room.');
            Db("leavephrase").delete([room.id]);
            return this.send('All leave phrases have been cleared from this room.');
        }
        target.trim();
        if (/^(\/|\!)(?!me\b|mee\b).+?/i.test(target)) return this.send("Sorry the only command accepted for these messages is /me");
        Db("leavephrase").set([room.id, user.userid], target);
        this.send("Your leave phrase has been set to: " + target);
    },
};
