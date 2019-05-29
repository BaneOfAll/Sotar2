const COOLDOWN_DURATION = 10 * 60000;

if (!Monitor.nickphraseInitialized) {
    Events.on(["N"], (id, room, type, msg) => {
        let user = Users.get(msg);
        if (user.welcomeCooldown && user.welcomeCooldown[room.id] && user.welcomeCooldown[room.id] > Date.now()) return;
        
        let phrase = Db("nickphrase").get([room.id, user.userid], null);
        if (phrase) {
            room.send(null, phrase);

            if (!user.welcomeCooldown) user.welcomeCooldown = {};
            user.welcomeCooldown[room.id] = Date.now() + COOLDOWN_DURATION;
        }
    });
    Monitor.nickphraseInitialized = true;
}

exports.commands = {
    "np": 'nickphrase',
    "nickphrase": function (target, room, user) {
      //  if (!this.can("joinphrase")|| !room) return false;
        if (!target) {
            if (Db("nickphrase").get([room.id, user.userid])) return this.send("Your current message for this room is: " + Db("nickphrase").get([room.id, user.userid]));
            return false;
        }
        if (target === "off") {
            Db("nickphrase").delete([room.id, user.userid]);
            return this.send("Your nick phrase has been removed");
        } else if (target === 'clearall') {
            if (!this.can('set')) return this.send('Only room owners can clear all leave phrases from a room.');
            Db("nickphrase").delete([room.id]);
            return this.send('All nick phrases have been cleared from this room.');
        }
        target.trim();
        if (/^(\/|\!)(?!me\b|mee\b).+?/i.test(target)) return this.send("Sorry the only command accepted for these messages is /me");
        Db("nickphrase").set([room.id, user.userid], target);
        this.send("Your nick phrase has been set to: " + target);
    },
};
