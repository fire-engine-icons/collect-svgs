var page = require('webpage').create();
page.open('http://gif.sharkbyte.bplaced.net/SVG/TYPES', function() {
    setTimeout(function() {
        page.render('../rendered/svgs2.png');
		console.log("Finished part two");
        phantom.exit();
    }, 4000);
});