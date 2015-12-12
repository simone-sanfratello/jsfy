var jsfy = require('jsfy');

var _test = {
    astring: 'katia',
    anarray: [1, 'alice', 'rico', 'mimi', 2, 3, new Date()],
    aquoting: 'hi "mr ',
    abool: true,
    anotherbool: false,
    anundefined: undefined,
    anull: null,
    amath: function(x, y) { return Math.min(x, y) },
    anan: NaN,
    ainfinity: Infinity,
    aclass: {
        afunction: function() { return 'hi'; },
        afloat: 7.8
    },
    aregexp: /(\w)+/,
    atree: {
        one: 1,
        two: 'two',
        three: {
            threeone: {
                1: '3.1'
            }
        },
        four: 4.01,
        five: 5
    },
    "1astrangekey": 123,
    "strange-key_two": 0,
    normal_key: -1,
    "awful key ": 'a',
    "dotted.key.com": 'www',
    "very\".awsul.key": '123',
    "why use a string for a key? 'cause I can ...": "?'\"",
    adefered: new jsfy.Defered('my.Custom.ENUM')
};

console.log(jsfy(_test, 2, '\n'));
