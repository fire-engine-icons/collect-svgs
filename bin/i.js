var page = require('webpage').create();
page.open('http://gif.sharkbyte.bplaced.net/SVG/TYPES/Inkscape.svg', function() {
    setTimeout(function() {
        page.render('../rendered/inkscape.png');
		console.log("Finished RENDER INKSCAPE TEXT");
		console.log("Finished RENDER all");
		phantom.exit();
    }, 3000);
});