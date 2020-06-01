var fs = require('fs');

fs.writeFile(__dirname + "/test.txt", '["values": {"a":1,"b":2,"c":3}]\n',
    { encoding: "utf8", flag: 'a' },
    (err) => {
        if (err) {
            console.log(err.message);
            return;
        }
    });
