'use strict';

/** @typedef {((this: CommandContext, target: string, room: Room?, user: string, cmd: string, message: string) => any)} ChatCommand */
/** @typedef {{[k: string]: string | ChatCommand}} ChatCommands */

/** @type {ChatCommands} */
const commands = {
	ivs: function(target, room, user) {
		var types = ['dark','dragon','ice','psychic','electric','grass','water','fire','steel','ghost','bug','rock','ground','poison','flying','fighting'];
		var text = '';
		if (!target) return this.reply('__You must input a type to display IVs for ;-;__');
		if (target.indexOf(",") > -1 || target.indexOf("/") > -1) {
			if (target.indexOf(",") > -1) var stats = target.replace(/ /g, '').split(",");
			else var stats = target.replace(/ /g, '').split("/");
			var statsOutput = stats.join("/");
			if (stats.length < 6) return this.reply('__You must include all 6 stat IVs!__');
			var a = parseInt(stats[0]) % 2;
			var b = parseInt(stats[1]) % 2;
			var c = parseInt(stats[2]) % 2;
			var e = parseInt(stats[3]) % 2;
			var f = parseInt(stats[4]) % 2;
			var d = parseInt(stats[5]) % 2;
			var type = '';
			var n = '';
			var typeNum = Math.floor(((a + (2 * b) + (4 * c) + (8 * d) + (16 * e) + (32 * f)) * 15) / 63);
			var damage = Math.floor(((a + (2 * b) + (4 * c) + (8 * d) + (16 * e) + (32 * f)) * 40) / 63) + 30;
			switch (typeNum) {
				case 0: type += 'Fighting';
					break;
				case 1: type += 'Flying';
					break;
				case 2: type += 'Poison';
					break;
				case 3: type += 'Ground';
					break;
				case 4: type += 'Rock';
					break;
				case 5: type += 'Bug';
					break;
				case 6: type += 'Ghost';
					break;
				case 7: type += 'Steel';
					break;
				case 8: type += 'Fire';
					break;
				case 9: type += 'Water';
					break;
				case 10: type += 'Grass';
					break;
				case 11: type += 'Electric';
				n += 'n';
					break;
				case 12: type += 'Psychic';
					break;
				case 13: type += 'Ice';
				n += 'n';
					break;
				case 14: type += 'Dragon';
					break;
				case 15: type += 'Dark';
					break;
			}
			this.reply('The IVs ' + statsOutput + ' give a' + n + ' **' + type + '** type Hidden Power, with a damage of **' + damage + '**!');
		} else {
		var type = toId(target);
		if (types.indexOf(type) < 0) return this.reply('__That is not a valid type!__');
		if (type === 'dark') return this.reply('IV\'s required for Dark type Hidden Power: 31/31/31/31/31/31');
		if (type === 'dragon') return this.reply('IV\'s required for Dragon type Hidden Power: 30/31/31/31/31/31, 31/30/31/31/31/31, 30/30/31/31/31/31, 31/31/30/31/31/31');
		if (type === 'ice') return this.reply('IV\'s required for Ice type Hidden Power: 30/31/30/31/31/31, 31/30/30/31/31/31, 30/30/30/31/31/31, 31/31/31/31/31/30');
		if (type === 'psychic') return this.reply('IV\'s required for Psychic type Hidden Power: 30/31/31/31/31/30, 31/30/31/31/31/30, 30/30/31/31/31/30, 31/31/30/31/31/30');
		if (type === 'electric') return this.reply('IV\'s required for Electric type Hidden Power: 30/31/30/31/31/30, 31/30/30/31/31/30, 30/30/30/31/31/30, 31/31/31/30/31/31');
		if (type === 'grass') return this.reply('IV\'s required for Grass type Hidden Power: 30/31/31/30/31/31, 31/30/31/30/31/31, 30/30/31/30/31/31, 31/31/30/30/31/31, 30/31/30/30/31/31');
		if (type === 'water') return this.reply('IV\'s required for Water type Hidden Power: 31/30/30/30/31/31, 30/30/30/30/31/31, 31/31/31/30/31/30, 30/31/31/30/31/30');
		if (type === 'fire') return this.reply('IV\'s required for Fire type Hidden Power: 31/30/31/30/31/30, 30/30/31/30/31/30, 31/31/30/30/31/30, 30/31/30/30/31/30');
		if (type === 'steel') return this.reply('IV\'s required for Steel type Hidden Power: 31/30/30/30/31/30, 30/30/30/30/31/30, 31/31/31/31/30/31, 30/31/31/31/30/31');
		if (type === 'ghost') return this.reply('IV\'s required for Ghost type Hidden Power: 31/30/31/31/30/31, 30/30/31/31/30/31, 31/31/30/31/30/31, 30/31/30/31/30/31');
		if (type === 'bug') return this.reply('IV\'s required for Bug type Hidden Power: 31/30/30/31/30/31, 30/30/30/31/30/31, 31/31/31/31/30/30, 30/31/31/31/30/30, 31/30/31/31/30/30');
		if (type === 'rock') return this.reply('IV\'s required for Rock type Hidden Power: 30/30/31/31/30/30, 31/31/30/31/30/30, 30/31/30/31/30/30, 31/30/30/31/30/30');
		if (type === 'ground') return this.reply('IV\'s required for Ground type Hidden Power: 30/30/30/31/30/30, 31/31/31/30/30/31, 30/31/31/30/30/31, 31/30/31/30/30/31');
		if (type === 'poison') return this.reply('IV\'s required for Poison type Hidden Power: 30/30/31/30/30/31, 31/31/30/30/30/31, 30/31/30/30/30/31, 31/30/30/30/30/31');
		if (type === 'flying') return this.reply('IV\'s required for Flying type Hidden Power: 30/30/30/30/30/31, 31/31/31/30/30/30, 30/31/31/30/30/30, 31/30/31/30/30/30');
		if (type === 'fighting') return this.reply('IV\'s required for Fighting type Hidden Power: 30/30/31/30/30/30, 31/31/30/30/30/30, 30/31/30/30/30/30, 31/30/30/30/30/30, 30/30/30/30/30/30');
		}
	},
senpai: function(target, room, user) {

		this.reply('n-notice me ' + target + '-senpai... ;~;');
	},
	kitty: function(arg, by, room, con) {
	
		this.reply('ima kitty =^.^= mew :3');
	},
	cry: 'cri',
	cri: function(arg, by, room, con) {
		if (!this.canUse('cri', by) || room.charAt(0) === ',') return false;
		this.say(con, room, 'Don\'t worry, it will be okay^~^');
		this.say(con, room, '/me hugs ' + by + ' gently');
	},

	js: 'eval',
	eval: function (target, room, user) {
		if (!this.can('eval') || !target) return;
		try {
			let result = Tools.stringify(eval(target));
			result = result.replace(/\n/g, '');
			if (result.length > 250) {
				result = `${result.slice(0, 247)}...`;
			}
			this.reply(`<< ${result}`);
		} catch (e) {
			this.replyPM(`<< An error was thrown while trying to eval; please check the console.`);
			console.log(`[Commands.eval] An error occurred: ${e.stack}`);
		}
	},
	c: function (target, room, user) {
		if (!this.can('eval') || !target) return;
		this.reply(target);
	},
	git: function () {
		this.replyPM(`https://github.com/BaneOfAll/UmbreonBot`);
	},
	help: function () {
		this.replyPM(`PM Zeru`);
	},
	hotpatch: function (target) {
		if (!this.can('eval')) return;
		Chat.uncacheDirectory('./plugins');
		Chat.uncacheFile('./commands.js');
	

		debug('HOTPATCHING');
		try {
			Chat.listeners = {};
			
			Chat.loadCommands();
		} catch (e) {
			this.replyPM(e);
		}
		this.replyPM('done. remember to recreate cooldown/iso if they were modified');
	},
	update: function (target) {
		if (!this.can('eval')) return;
		let result = '';
		try {
			result = String(require('child_process').execSync('git fetch origin master && git merge origin master'));
		} catch (e) {
			this.replyHTMLPM(e ? e.replace(/\n/g, '<br/>') : 'Crash while updating');
		}
		this.replyHTMLPM(result ? result.replace(/\n/g, '<br/>') : 'Error while updating');
	},
	loadcredentials: function (target, room) {
		if (!this.can('eval')) return false;
		Chat.Slaves.LoadCredentials();
		this.reply(`Reloaded credentials. ${Chat.Slaves.CountCredentials()} accounts are available.`);
	},
  intro: function (target) {
  if (!this.can('eval')) return;
    this.reply("/addhtmlbox " + "<div style=\"background: url(&quot;https:\/\/wallpapercave.com/wp/wp1935284.jpg&quot;)\"><center><h1><b><i><font color=\"blue\">HI! I'm A Rando Bot!</font></i></b></h1><br><font color=\"white\">I'm Zeru's cool bot!</font><br><font color=\"white\"><details><summary>Commands</summary>-diglett - best command<br>-dice - rolls the dice<br>-tour - gets a tour<br>-objective - defines objective<br>-roast - insults<br>-pokemon - gives you images and details of a Pokemon</details></font></center></div>")

  },
        dice: function (target) {
          if (!this.can('eval')) return;
          let cointoss = Math.floor(Math.random() * 6)
          let dice = Math.floor(Math.random() * 6)

          this.reply ("/addhtmlbox <center><div style=\"background: red ; border-radius: 10px\"><font color=\"green\" size=\"5\">Your results were <strong>" + cointoss + " and " + dice + "!</strong></font></div></center>")
        },
          
    randpoke: function (target, room, user) {
    this.reply("!randpoke")
    
  },
  cointoss: function () {
    const rand = 2 * Math.floor(Math.random());
    switch (rand)
		{
	 		case 1: this.reply("/addhtmlbox <center><img src=\"https://i.dailymail.co.uk/i/pix/2009/11/25/article-1230900-06ACACE3000005DC-846_306x300.jpg\" height=\"100\" width=\"100\"></center>")

        break;
	  		case 2: this.reply("/addhtmlbox <center><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXIMD6orKjaSl5gHWEPYEWZzfCU1-v1zTUVbxhcRLHDWp7i2mP\" style=\"width: auto ; height: auto\"></center>")
    
        break;
    }
  },
   
  ag: function (target, room, user) {
    if (!this.can('games')) return;
    this.reply("/tour new [Gen 7] 1v1, roundrobin")
     this.reply("/tour rules ")
     this.reply("/tour name AG 1v1")
     this.reply("/tour autostart 3")
    this.reply("/tour autodq 2")
  },
  stab: function (target, room, user) {
    this.reply("/tour new [Gen 7] 1v1, elim")
     this.reply("/tour rules -tapu lele, -spore")
    this.reply("/tour autostart 3")
    this.reply("/tour autodq 2")
    this.reply("/tour name STABmons 1v1")
  },
   aaa: function (target, room, user) {
    if (!this.can('games')) return;
    this.reply("/tour new [Gen 7] 1v1, elim")
     this.reply("/tour rules -keldeo, -kartana, -kyurem-black, -weavile, -zygarde, -archeops, -dragonite, -hoopa-unbound, -shedninja, -slaking, -regigigas, -terrakion Ability Clause, Ignore Illegal Abilities")    
     this.reply("/tour name AAA 1v1")
     this.reply("/tour autostart 3")
    this.reply("/tour autodq 2")
  },
  inverse: function (target, room, user) {
    if (!this.can('games')) return;
    this.reply("/tour new [Gen 7] 1v1, elim")
     this.reply("/tour rules Inverse Mod, -Porygon-Z")     
    this.reply("/tour name Inverse 1v1")
    this.reply("/tour autostart 3")
    this.reply("/tour autodq 2")
  },
  "2v2": function (target, room, user) {
    if (!this.can('games')) return;
    this.reply("/tour new [Gen 7] 2v2doubles, elim")
    this.reply("/tour name 2v2 Doubles")
    this.reply("/tour autostart 3")
    this.reply("/tour autodq 2")
  },
  mono: function (target, room, user) {
    if (!this.can('games')) return;
    this.reply("/tour new [Gen 7] 1v1, elim")
     this.reply("/tour rules Same Type Clause, -Necrozma")     
    this.reply("/tour name Monotype 1v1")
    this.reply("/tour autostart 3")
    this.reply("/tour autodq 2")
  },
  pokemon: function (target) {
  if (!this.can('pokemon')) return;
    this.reply("/addhtmlbox " + "<center><img src=\"https://play.pokemonshowdown.com/sprites/xyani/" + target + ".gif\" height=\"0\" width=\"0\" style=\"width:auto;height:auto\"><img src=\"https://play.pokemonshowdown.com/sprites/xyani-back/" + target + ".gif\" height=\"0\" width=\"0\" style=\"width:auto;height:auto\"><img src=\"https://play.pokemonshowdown.com/sprites/xyani-shiny/" + target + ".gif\" height=\"0\" width=\"0\" style=\"width:auto;height:auto\"><img src=\"https://play.pokemonshowdown.com/sprites/xyani-back-shiny/" + target + ".gif\" height=\"0\" width=\"0\" style=\"width:auto;height:auto\"><br><br><a href=\"https://bulbapedia.bulbagarden.net/wiki/" + target + "_(Pok%C3%A9mon)\">Bulbapedia page</a><br><br><a href=\"https://www.smogon.com/dex/sm/pokemon/" + target + "/\">Smogon Analysis</a><br><br><a href=\"https://www.pokemon.com/us/pokedex/" + target + ">More Info</a></center>")
    this.reply("!dt " + target)
  },
  wow: function (target) {
  if (!this.can('eval')) return;
    this.reply("/addhtmlbox " + "<div style=\"background: url(&quot;https:\/\/wallpapercave.com/wp/wp1935284.jpg&quot;)\"><center><h1><b><i><font color=\"blue\">HI! What's up?</font></i></b></h1><br><font color=\"white\">I'm awesome!</font><br><font color=\"white\"><details><summary>Wow</summary>WOWWOWWOWWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOW Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!Wow!</details></font></center></div>")

  },
  diglett: function (target) {
  if (!this.can('games')) return;
    this.reply("/addhtmlbox " + "<marquee scrollamount=\"15\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani\/diglett.gif\" class=\"fa fa-spin\" width=\"43\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani\/diglett.gif\" class=\"fa fa-spin\" width=\"43\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani\/diglett.gif\" class=\"fa fa-spin\" width=\"43\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani\/diglett.gif\" class=\"fa fa-spin\" width=\"43\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani\/diglett.gif\" class=\"fa fa-spin\" width=\"43\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani\/diglett.gif\" class=\"fa fa-spin\" width=\"43\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani\/diglett.gif\" class=\"fa fa-spin\" width=\"43\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani\/diglett.gif\" class=\"fa fa-spin\" width=\"43\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani\/diglett.gif\" class=\"fa fa-spin\" width=\"43\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani\/diglett.gif\" class=\"fa fa-spin\" width=\"43\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani\/diglett.gif\" class=\"fa fa-spin\" width=\"43\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani\/diglett.gif\" class=\"fa fa-spin\" width=\"43\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani\/diglett.gif\" class=\"fa fa-spin\" width=\"43\" height=\"35\"> <img src=\"https:\/\/images.emojiterra.com\/twitter\/v11\/512px\/1f1e9.png\" width=\"43\" height=\"35\" class=\"fa fa-spin\"> <img src=\"https:\/\/images.emojiterra.com\/twitter\/v11\/512px\/1f1ee.png\" width=\"43\" height=\"35\" class=\"fa fa-spin\"> <img src=\"https:\/\/images.emojiterra.com\/twitter\/v11\/512px\/1f1ec.png\" width=\"43\" height=\"35\" class=\"fa fa-spin\"> <img src=\"https:\/\/images.emojiterra.com\/twitter\/v11\/512px\/1f1f1.png\" width=\"43\" height=\"35\" class=\"fa fa-spin\"> <img src=\"https:\/\/images.emojiterra.com\/twitter\/v11\/512px\/1f1ea.png\" width=\"43\" height=\"35\" class=\"fa fa-spin\"> <img src=\"https:\/\/images.emojiterra.com\/twitter\/v11\/512px\/1f1f9.png\" width=\"43\" height=\"35\" class=\"fa fa-spin\"> <img src=\"https:\/\/images.emojiterra.com\/twitter\/v11\/512px\/1f1f9.png\" width=\"43\" height=\"35\" class=\"fa fa-spin\"> <\/marquee> <center> <span style=\"font-size: 0.9em;\">Moves Like Diglett | Eye of the Diglett | I\'ll Make a Diglett Out of You<\/span> <\/center> <center> Click the Diglett -&gt; <a href=\"https:\/\/youtu.be\/6Zwu8i4bPV4\"><img src=\"https:\/\/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com\/intermediary\/f\/578a8319-92b6-4d81-9d5f-d6914e6535a0\/d5o541m-54dae5d4-710c-44d4-a898-71ea71d7bd28.jpg\" width=\"85\" height=\"100\"><\/a> <a href=\"https:\/\/youtu.be\/8LYwT9Nf1Ic\"><img src=\"https:\/\/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com\/intermediary\/f\/578a8319-92b6-4d81-9d5f-d6914e6535a0\/d5o541m-54dae5d4-710c-44d4-a898-71ea71d7bd28.jpg\" width=\"85\" height=\"100\"><\/a> <a href=\"https:\/\/youtu.be\/uzdvnB8SJV8\"><img src=\"https:\/\/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com\/intermediary\/f\/578a8319-92b6-4d81-9d5f-d6914e6535a0\/d5o541m-54dae5d4-710c-44d4-a898-71ea71d7bd28.jpg\" width=\"85\" height=\"100\"><\/a> &lt;- Click the Diglett <\/center> <marquee scrollamount=\"15\"> <img src=\"https:\/\/images.emojiterra.com\/twitter\/v11\/512px\/1f1e9.png\" width=\"43\" height=\"35\" class=\"fa fa-spin\"> <img src=\"https:\/\/images.emojiterra.com\/twitter\/v11\/512px\/1f1ee.png\" width=\"43\" height=\"35\" class=\"fa fa-spin\"> <img src=\"https:\/\/images.emojiterra.com\/twitter\/v11\/512px\/1f1ec.png\" width=\"43\" height=\"35\" class=\"fa fa-spin\"> <img src=\"https:\/\/images.emojiterra.com\/twitter\/v11\/512px\/1f1f1.png\" width=\"43\" height=\"35\" class=\"fa fa-spin\"> <img src=\"https:\/\/images.emojiterra.com\/twitter\/v11\/512px\/1f1ea.png\" width=\"43\" height=\"35\" class=\"fa fa-spin\"> <img src=\"https:\/\/images.emojiterra.com\/twitter\/v11\/512px\/1f1f9.png\" width=\"43\" height=\"35\" class=\"fa fa-spin\"> <img src=\"https:\/\/images.emojiterra.com\/twitter\/v11\/512px\/1f1f9.png\" width=\"43\" height=\"35\" class=\"fa fa-spin\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani-back\/diglett.gif\" class=\"fa fa-spin\" width=\"44\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani-back\/diglett.gif\" class=\"fa fa-spin\" width=\"44\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani-back\/diglett.gif\" class=\"fa fa-spin\" width=\"44\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani-back\/diglett.gif\" class=\"fa fa-spin\" width=\"44\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani-back\/diglett.gif\" class=\"fa fa-spin\" width=\"44\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani-back\/diglett.gif\" class=\"fa fa-spin\" width=\"44\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani-back\/diglett.gif\" class=\"fa fa-spin\" width=\"44\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani-back\/diglett.gif\" class=\"fa fa-spin\" width=\"44\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani-back\/diglett.gif\" class=\"fa fa-spin\" width=\"44\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani-back\/diglett.gif\" class=\"fa fa-spin\" width=\"44\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani-back\/diglett.gif\" class=\"fa fa-spin\" width=\"44\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani-back\/diglett.gif\" class=\"fa fa-spin\" width=\"44\" height=\"35\"> <img src=\"https:\/\/play.pokemonshowdown.com\/sprites\/xyani-back\/diglett.gif\" class=\"fa fa-spin\" width=\"44\" height=\"35\"> <\/marquee>");

  },
  
  	roast: function (target, user, room) {
				this.reply(target + " is a total loser. Don’t feel bad, " + target + " there are many people who have no talent! " + target + ", as an outsider, what do you think of the human race? " + target + ", I’d like to kick you in the teeth, but why should I improve your looks? If I had a face like " + target + ", I’d sue my parents.");
	},
  
 
  "8ball": function(target, user, room)
	{
		let text;
		const rand = ~~(20 * Math.random()) + 1;

		switch (rand)
		{
	 		case 1: text = "Signs point to yes. Definitely."; break;
	  		case 2: text = "Yes."; break;
			case 3: text = "Reply hazy, try again."; break;
			case 4: text = "Without a doubt."; break;
			case 5: text = "My sources say no."; break;
			case 6: text = "As I see it, yes."; break;
			case 7: text = "You may rely on it."; break;
			case 8: text = "Concentrate and ask again."; break;
			case 9: text = "Outlook not so good."; break;
			case 10: text = "It is decidedly so."; break;
			case 11: text = "Better not tell you now."; break;
			case 12: text = "Very doubtful."; break;
			case 13: text = "Yes - definitely."; break;
			case 14: text = "It is certain."; break;
			case 15: text = "Cannot predict now."; break;
			case 16: text = "Most likely."; break;
			case 17: text = "Ask again later."; break;
			case 18: text = "My reply is no."; break;
			case 19: text = "Outlook good."; break;
			case 20: text = "Don't count on it."; break;
		}

		this.reply(room, text);
	}
  
};

exports.commands = commands;