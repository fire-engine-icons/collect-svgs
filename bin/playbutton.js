var page = require('webpage').create();
page.open('http://gif.sharkbyte.bplaced.net/SVG/Play%20Button.svg', function() {
    setTimeout(function() {
        page.render('../rendered/PLAY.png');
		console.log("Finished RENDER PLAY");
		phantom.exit();
    }, 3000);
});