@echo off
title COLLECTING SVG
echo RENDER SVG's TO PNG
echo FROM http://gif.sharkbyte.bplaced.net/SVG/
echo.
cd bin
phantomjs.exe svgmaked.js
phantomjs.exe svgmaked2.js
phantomjs.exe ls.js
phantomjs.exe kerze.js
phantomjs.exe shark.js
phantomjs.exe playbutton.js
phantomjs.exe g.js
phantomjs.exe i.js