/**
 * Configuration file
 *
 * This file stores the configuration for the bot.
 */

'use strict';

// Connection details - where Sotar2 should connect to. Note: DO NOT USE [server].psim.us. That is the client URL.

// play.pokemonshowdown.com
exports.server = 'sim.smogon.com';
exports.port = 8000;
exports.serverid = 'showdown';



// Time to wait before trying to reconnect in seconds. Set to 0 to disable autoreconnects.
exports.reconnectTime = 5;

// Nickname and password for Sotar2
exports.nick = '';
exports.pass = '';

// Avatar number for the Sotar2. Generally the avatar for bots is 120 so 
exports.avatar = 52;

// List of rooms to try and join after the Sotar2 starts
exports.autojoin = [''];
// Use this room's auth for commands in PMs. Example: if the bot was in both Bot Development and Tech&Code, but only Tech&Code is listed here, only T&C's roomauth can use the bot in PMs.
exports.primaryRoom = '';
// Command characters for the bot
exports.commandTokens = ['-'];

// Debug mode - Prints more info to the console, useful for fixing issues
exports.debugMode = false;
// Verbose mode - Prints a lot more debug info to the console, including all messages
exports.verboseMode = false;
// Mafia debug mode - Prints information about mafia games - true will print to chat, truthy will print to console

// Developers have access to everything on Sotar2, and are the only ones that can use eval. These need to be user IDs.
exports.developers = [''];
// Messages containing any of these words will be blocked by lighthouse/anon. Note that these all need to be IDs
exports.bannedWords = [''];

// for the lb tracking

exports.leaversEnabled = true;
/**
 * Permissions by rank
 *
 * The permissions for each rank are stored here.
 * permission: true - Always let this rank perform these commands
 * permission: 'u' - This rank can use commands on users of lesser rank
 * if no target user is provided in the check, it will allow the command to run anyways
 * permission: 's' - This rank can use these commands on themselves, but nobody else
 * permission: false - This rank cannot use commands that require this permission
 * simply not defining the permission for the rank will act as if its set to false
 *
 * Inheriting lower rank positions
 *
 * inherit: 'ranksymbol' can be used to inherit a lower rank's permissions.
 * If there are duplicates, the higher rank will overide the lower rank.
 * EX: if & inherits @ which inherits % and % has perm: u and @ has perm: true
 * "perm" will be true for & since the highest rank with perm defined (@) is true
 * explicit perm: false declarations will also be inherited, but undefined permissions may be overwritten.
 *
 * Permissions List
 * root - This group automatically has all permissions set to true, only supports true.
 * listen - If this is not set to a truthy value, the bot will ignore users of this rank.
 * games - This group can run games using the bot.
 * roommanagement - This group lets user manage the bot's settings for the room.
 *
 */
/** @type {{[k: string]: {[k: string]: any}}} "good enough" */
exports.groups = {
	'~': {
		name: 'Administrator',
		id: 'administrator',
		root: true,
	},
	'&': {
		name: 'Leader',
		id: 'leader',
		inherit: '#',
	},
	'#': {
		name: 'Room Owner',
		id: 'roomowner',
		inherit: '@',
		roommanagement: true,
	},
	'*': {
		name: 'Bot',
		id: 'bot',
		inherit: '@',
	},
	'@': {
		name: 'Moderator',
		id: 'moderator',
		inherit: '%',
	},
	'%': {
		name: 'Driver',
		id: 'driver',
		inherit: '+',
		games: true,
    pokemon: true,
	},
	'+': {
		name: 'Voice',
		id: 'voice',
		inherit: ' ',
	},
	' ': {
		name: 'Regular User',
		id: 'regularuser',
		listen: true,
	},
	'!': {
		name: 'Muted',
		id: 'muted',
		inherit: ' ',
		listen: false,
	},
	'\u203d': {
		name: 'Locked',
		id: 'locked',
		inherit: '!',
	},
};
