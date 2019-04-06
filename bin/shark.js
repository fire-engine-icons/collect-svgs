var page = require('webpage').create();
page.open('http://gif.sharkbyte.bplaced.net/SVG/Haifisch.svg', function() {
    setTimeout(function() {
        page.render('../rendered/SHARK.png');
		console.log("Finished RENDER SHARK");
        phantom.exit();
    }, 4000);
});