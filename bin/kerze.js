var page = require('webpage').create();
page.open('http://gif.sharkbyte.bplaced.net/SVG/Kerze.svg', function() {
    setTimeout(function() {
        page.render('../rendered/candle.png');
		console.log("Finished RENDER CANDLE");
		phantom.exit();
    }, 3000);
});