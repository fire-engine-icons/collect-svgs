var page = require('webpage').create();
console.log("GITHUB REPOS: https://github.com/fire-engine-icons/collect-svgs");
console.log("COLLECTING");
page.open('http://gif.sharkbyte.bplaced.net/SVG/', function() {
    setTimeout(function() {
        page.render('../rendered/svgs.png');
		console.log("Finished part one");
		phantom.exit();
    }, 3000);
});