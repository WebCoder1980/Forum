var source =
    [':smale:', ':yes:'];
var result =
    ['<img src="../pictures/smales/smile.gif"></img>',
    '<img src="../pictures/smales/yes.gif"></img>'];
/*document.body.innerHTML = document.body.innerHTML.replace(source[0], result[0]);
document.body.innerHTML = document.body.innerHTML.replace(source[1], result[1]);*/
for(var ind = 0; ind < source.length; ind++) {
    document.body.innerHTML = document.body.innerHTML.replace(source[ind], result[ind]);
}