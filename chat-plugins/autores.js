/*exports.commands = {
    autores: function(target, user, room) {
        //if (!Bot.canUse('autores', room, by)) return false;
        if (target) return this.send(room, 'Please specify how I should respond to that certain phrase. .autores [add|delete|list] ([input]::[output])');
        var command = target.split(' ')[0];
        if (!target.split(' ')[1] && command !== 'list') return this.send(room, 'Please specify how I should respond to that certain phrase. .autores [add|delete|list] ([input]::[output])');
        var text = target.split(' ').slice(1).join(' ');
        var input = text.split('::')[0].toLowerCase().replace(/(\*\*|\_\_|\~\~|\`\`)/g, '');
        if (input.length < 2 && command !== 'list') return this.send(room, 'Please specify a longer phrase for me to search for.');
        if (command === 'regex') {
            command = 'add';
        }
        if (command === 'add') {
            input = input.split('');
            for (var i = 0; i < input.length; i++) {
                if (/[^a-z0-9]/i.test(input[i])) {
                    input[i] = '\\' + input[i];
                }
            }
            input = input.join('');
        }
        if (command === 'regex') {
            var tempInput = input.replace(/(\*|\?)/g, '');
            if (input.length / tempInput.length >= 2) {
                return this.send( room, 'Please specify more text to search for.');
            }
        }
        var output = text.split('::').slice(1).join('::').replace(/(!mod|!driver|!leader|!op|!voice|!admin|\/mod|\/driver|\/voice|\/leader|\/op|\/admin|!deauth|\/deauth|!promote|\/promote|\/demote|!demote|!ban|!lock|\/ban|\/lock|\/transferbucks|\/givebucks|\/takebucks|\/givebuck|\/givemoney|!givebucks|!givemoney|!givebuck|!takebucks|!takebuck|!takemoney|\/takebuck|\/takemoney|!transfer|\/transfer|\/transferbucks|\/transferbuck|\/transfermoney|!transfer|!transferbucks|!transferbuck|!transfermoney)/g, '/me does stuff to ');
        var autoRes = fs.readFileSync('config/autores.txt').toString().split('\n');
        switch (command) {
            case 'regex':
            case 'add':
                if (!output) return this.send(room, 'Please specify how I should respond to that certain phrase. .autores [add|delete|list] ([input]::[output])');
                    //check if it triggers
                for (var i = 0; i < autoRes.length; i++) {
                    var spl = autoRes[i].split('||');
                    if (spl[2] === room) {
                        var regex = new RegExp(spl[3], 'i');
                        if (!regex.test(input.replace(/\\/g, ''))) {
                            continue;
                        }
                        regex = new RegExp(input, 'i');
                        if (!regex.test(spl[3].replace(/\\/g, ''))) {
                            continue;
                        }
                        return this.send(room, 'There is already an auto response with the searching for a similar combination of characters.');
                    }
                }
                fs.appendFile('data/autores.txt', '||' + room + '||' + input + '||' + output + '\n');
                this.send(room, 'Added the search for /' + input + '/i');
                break;
            case 'delete':
                for (var i = 0; i < autoRes.length; i++) {
                    spl = autoRes[i].split('||');
                    if (spl[2] === room && input === spl[3]) {
                        autoRes.splice(i, 1);
                        fs.writeFileSync('data/autores.txt', autoRes.join('\n'));
                        return this.send(room, 'Deleted!');
                    }
                }
                this.send(room, 'I can\'t seem to find this auto response anywhere....');
                break;
            case 'list':
                var uploadText = ['AutoResponse list for room: ', this.rooms[room].name, '-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-', ' '];
                for (var i = 0; i < autoRes.length; i++) {
                    spl = autoRes[i].split('||');
                    if (spl[2] === room) {
                        uploadText.push('Input: ' + spl[3]);
                        uploadText.push('***Output: ' + spl.slice(4).join('||'));
                        uploadText.push(' ');
                        uploadText.push(' ');
                    }
                }
                Tools.uploadToHastebin(uploadText.join('\n'), function(link) {
                    this.send(room, 'AutoResponse(s): ' + link);
                }.bind(this));
                break;
        }
    },
};*/
