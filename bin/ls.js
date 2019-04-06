var page = require('webpage').create();
page.open('http://gif.sharkbyte.bplaced.net/SVG/LANDSCAPE.svg', function() {
    setTimeout(function() {
        page.render('../rendered/LANDSCAPE.png');
		console.log("Finished RENDER LANDSCAPE");
        phantom.exit();
    }, 4000);
});