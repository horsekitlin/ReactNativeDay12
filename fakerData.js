var faker = require('faker');
var fs = require('fs');
var _  = require('lodash');

var range = _.range(1, 100);

faker.locale = 'zh_TW';

var data = [];

range.map(index => {
    var name =faker.name.findName();

    var json = {
        name: {
            full: name,
            first: name.split(' ')[0],
            last: name.split(' ')[1],
        },
        job: {
            type: faker.name.jobType(),
            name: faker.name.jobTitle(),
            description: faker.name.jobDescriptor(),
        },
        age: _.random(18, 65, false),
    };

    data.push(json);
});
console.log(__dirname);
fs.writeFile('./data.json', JSON.stringify(data), function(){
    console.log('create faker data success!');
});
