var express = require('express')
    , app = module.exports = express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

var fs = require('fs');

function writePost(){
fs.readFile('./posts.json', 'utf-8', function(err, data) {
	if (err) throw err

	var arrayOfObjects = JSON.parse(data)
	arrayOfObjects.posts.push({

		"post1", "postName"
		// getElementById('newPost')

		
	})

	console.log(arrayOfObjects)

	fs.writeFile('./posts.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
		if (err) throw err
		console.log('Done!')
	})
})
}


app.get('/', function(req, res){
  res.render('header', {
    // PLACEHOLDER
    pageTitle: 'forum'
  });
});
 
if (!module.parent) {
  app.listen(8080);
  console.log('EJS Demo server started on port 8080');
}

