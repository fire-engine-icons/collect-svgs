var page = require('webpage').create();
page.open('http://gif.sharkbyte.bplaced.net/SVG/glass.svg', function() {
    setTimeout(function() {
        page.render('../rendered/glass.png');
		console.log("Finished RENDER glass");
		phantom.exit();
    }, 3000);
});