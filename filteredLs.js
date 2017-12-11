var fs = require('fs');
var path = require('path');

var file = process.argv[2]


fs.readdir(file, (err, data) => {

	var liste = data

	function callback(item){
			if (path.extname(item)=='.md'){
			console.log(item);	
			}
	}
	liste.forEach(callback)
})

