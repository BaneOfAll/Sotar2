'use strict';
var Db = require('origindb')('./database');
exports.commands = {
    addteam: function(target, user, room) {
       // if (!['noxiousabyss', 'pixelpusher'].includes(toId(this.by))) return false;
        const [author, link, ...team] = target.split(",");
        if (!author || !link || team.length < 3) return this.send(".addteam author, link, mon 1, mon 2...");

        const author_id = toId(author);
        
      
        Db('sampleteam')
            .set([author_id, "author"], author)
            .set([author_id, "link"], link.trim())
            .set([author_id, "team"], team);

        return this.send('Team added');
    },


    sampleteams: function(target, user, room) {

        const stDB = Db('sampleteam').object();
        const teams = Object.keys(stDB);
        let display = `<center><img src="https://i.imgur.com/tbhAES5.png" width="320" height="80"><br><font style="color: Black; font-family: Arial">If you want your 1v1 Team added to the bot PM Zeruora to have it added.<br>Click on the sprites for importable.</font></center><br><table style="width: 100%; background-color: #252357 ; color: black ; border: 2px solid Black ; padding: 2px; border-radius: 9px" cellspacing="2" cellpadding="3" border="1"><tbody><tr><th style="color: White; border-radius: 9px ; border: 2px solid Black ; background: #5954b0 ; font-family: Arial; width: 30%">Author</th><th style="color: White;border-radius: 9px ; border: 2px solid Black ; background: #5954b0 ; font-family: Arial">1v1 Team</th></tr>`;

        for (let i = 0, len = teams.length; i < len; i++) {
            const team = stDB[teams[i]];
            const author = team.author;
            const link = team.link;
            const pkmn = (team.team).reverse();

            display += `<tr><td style="color: #FFF; border-radius: 9px; border: 2px solid #000; background: #5954B0; font-family: Arial; text-align: center;"><strong><button style="background: #0000ff; border: 2px solid darkblue; border-radius: 10pxclass="astext" name="parseCommand" value="/user ${author}"><font color="red">${author}</font></button></strong></td><td style="color: #FFF; border-radius: 9px; border: 2px solid #000; background: #5954B0; font-family: Arial;"><a style="color: #FFF; text-decoration: none;" href="${link}"></center>`;

            let pkmnNum = pkmn.length;

            while (pkmnNum--) {
                const currPKMN = (pkmn[pkmnNum]).trim();
                display += `<psicon pokemon="${currPKMN}">&nbsp;&nbsp;&nbsp;`;
                console.log(`<img src="https://www.serebii.net/pokedex-sm/icon/${currPKMN}.png" width="32" height="32">`);
            }

            display += "</center></a></td></tr>";
        }

        return this.send(`/addhtmlbox ${display}</tbody></table>`);
    }
};