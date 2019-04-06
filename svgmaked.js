var page = require('webpage').create();
console.log("COLLECTING");
page.open('http://gif.sharkbyte.bplaced.net/SVG/', function() {
    setTimeout(function() {
        page.render('svgs.png');
        phantom.exit();
    }, 3000);
});