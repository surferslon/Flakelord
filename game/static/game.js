window.onload = function() {

    var stage       = document.getElementById('cnvs')
    var ctx         = stage.getContext('2d')
    var ctx_titles  = stage.getContext('2d')
    var ctx_text    = stage.getContext('2d')
   var map = [
    [{'obj': 'wall'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none', 'alpha': 1}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'},{'obj': 'none'},{'obj': 'none'},{'obj': 'none'},{'obj': 'none'},{'obj': 'none'},{'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'},{'obj': 'none'},{'obj': 'none'},{'obj': 'none'},{'obj': 'none'},{'obj': 'none'},{'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'},{'obj': 'none'},{'obj': 'none'},{'obj': 'none'},{'obj': 'none'},{'obj': 'none'},{'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'floor', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}],
    [{'obj': 'none', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'wall', 'alpha': 1}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none'}, {'obj': 'none', 'alpha': 1}]
]


    var cell_height = 40;
    var cell_width = 60;


    var player_x = 8;
    var player_y = 5;
    var player_dir = 'r';

    var draw_start_x = 900 - (player_x) * cell_width/4;
    var draw_start_y = 450 - (player_y) * cell_height;

    var new_draw_start_x = draw_start_x;
    var new_draw_start_y = draw_start_y;
    
    var y = draw_start_y + 5*cell_height,
        x = (draw_start_x - 8*cell_width) + 5*cell_width, // Start positions 
        wid = 20, 
        hei = 30; 

    var img_player_l = new Image();
    var img_player_r = new Image();
    var img_wall = new Image();
    var img_floor = new Image();

    img_player_l.src = '/static/img/player_l.png';
    img_player_r.src = '/static/img/player_r.png';
    img_wall.src   = '/static/img/wall0.png';
    img_floor.src  = '/static/img/floor.png';

    var monster_x = 18;
    var monster_y = 15;
    var monster_dir = 'r';

    var img_monster_l = new Image();
    var img_monster_r = new Image();
    img_monster_r.src = '/static/img/ork.png'
    img_monster_r.src = '/static/img/ork.png'

    stage.width  = stage.offsetWidth;
    stage.height = stage.offsetHeight;
    
    function ConvertToCoord(x, y) {
        return {
            x: draw_start_x + ((x - y) * cell_width/2),
            y: draw_start_y + (y + x) * cell_height/2
        }
    }

    function drawPlayer(x, y, wid, hei) {
        coords = ConvertToCoord(x, y)
        drawRhomb(coords.x, coords.y);
        if (player_dir=='r'){
            ctx.drawImage(img_player_r, coords.x-cell_width/4, coords.y-cell_height+13, 35, 50);
        }
        else {
            ctx.drawImage(img_player_l, coords.x-cell_width/4, coords.y-cell_height+13, 35, 50);
        }
    }

    function drawMonster(x, y, wid, hei) {
        coords = ConvertToCoord(x, y)
        if (monster_dir=='r'){
            ctx.drawImage(img_monster_r, coords.x-cell_width/4, coords.y-cell_height+3);
        }
        else {
            ctx.drawImage(img_monster_l, coords.x-cell_width/4, coords.y-cell_height+3);   
        }
    }

    function drawRhomb(x, y) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + cell_width / 2, y + cell_height / 2);
        ctx.lineTo(x, y + cell_height);
        ctx.lineTo(x - cell_width / 2, y + cell_height / 2);
        ctx.lineTo(x, y);
        // ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.closePath();
    }

    function drawWall(x, y) {
        ctx.drawImage(img_wall, x-22, y-cell_height-16, cell_width+5, cell_height+57);
    }

    function drawFloor(x, y) {
        ctx.drawImage(img_floor, x-23, y, cell_width, cell_height);
    }

    function drawMap_background() {

        // Floor
        for(var cur_clm=0; cur_clm<60; cur_clm++) {
            for(var cur_row=0; cur_row<30; cur_row++) {

                // let cell_x = (600 + cur_clm * cell_width / 2) - cur_row * cell_width / 2;
                // let cell_y = cur_clm * cell_height / 2 + cur_row * cell_height / 2;

                if (map[cur_row][cur_clm]['obj'] == 'floor') {
                    coord = ConvertToCoord(cur_clm, cur_row);
                    drawFloor(coord.x, coord.y); 
                }
            }
        }

        // Background walls
        for(var cur_clm=0; cur_clm<60; cur_clm++) {
            for(var cur_row=0; cur_row<30; cur_row++) {
                if (map[cur_row][cur_clm]['obj'] == undefined) {
                    console.log(cur_row, cur_clm);
                }

                if (map[cur_row][cur_clm]['obj'] == 'wall') {
                    coord = ConvertToCoord(cur_clm, cur_row);
                    // if ( Math.abs(cur_row - player_y) < 4 && Math.abs(cur_clm - player_x) < 4 ) {
                    let diff_x = cur_clm - player_x;
                    let diff_y = cur_row - player_y;
                    if (cur_clm >= player_x && cur_row >= player_y && diff_y < 2 && diff_x<2) {
                        ctx.globalAlpha = 0.1;
                    }
                    else if (cur_clm >= player_x && cur_row >= player_y && diff_y < 4 && diff_x<4) {
                        ctx.globalAlpha = 0.3;
                    }
                    else if (cur_clm >= player_x && cur_row >= player_y && diff_y < 6 && diff_x<6) {
                        ctx.globalAlpha = 0.6;
                    }
                    else if (cur_clm >= player_x && cur_row >= player_y && diff_y < 7 && diff_x<7) {
                        ctx.globalAlpha = 0.8;
                    }
                    drawWall(coord.x, coord.y); 
                    ctx.globalAlpha = 1;
                }
                if (cur_row==player_y && cur_clm==player_x) {   
                    drawPlayer(player_x, player_y, wid, hei);
                }

                // if (cur_row==monster_y && cur_clm==monster_x) {   
                //     drawMonster(monster_x, monster_y, wid, hei);
                // }                

            }
        }

    }


    function drawMap() {
        ctx.clearRect(0, 0, 1800, 900); //clearing anything drawn on canvas
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, stage.width, stage.height);
        drawMap_background();
    }

    function collision(x, y) {
        if (map[y][x]['obj'] == 'wall' ) {
            return true
        }
        return false

    }

    document.onkeydown = function(event) {
        var key = event.keyCode; //Key code of key pressed
        // console.log(key);
        
        if(key === 68 && player_x<=1200 && !collision(player_x+1, player_y-1)) { 
            player_x = player_x+1;
            player_y = player_y-1;
            player_dir = 'r';
            // draw_start_x = draw_start_x-cell_width;

            new_draw_start_x = new_draw_start_x-cell_width;

        } // right
        else if(key === 69 && x>0 && !collision(player_x, player_y-1)) { 
            player_y = player_y-1;
            player_dir = 'r';
            new_draw_start_x = new_draw_start_x-cell_width/2;
            new_draw_start_y = new_draw_start_y+cell_height/2;
        } // right up
        else if(key === 67 && x>0 && !collision(player_x+1, player_y)) { 
            player_x = player_x+1; 
            player_dir = 'r';
            new_draw_start_x = new_draw_start_x-cell_width/2;
            new_draw_start_y = new_draw_start_y-cell_height/2;
        } // rigth down
        else if(key === 65 && x>0 && !collision(player_x-1, player_y+1)) { 
            player_x = player_x-1; 
            player_y = player_y+1;
            player_dir = 'l';
            new_draw_start_x = new_draw_start_x+cell_width;
        } // left
        else if(key === 81 && player_x>0 && !collision(player_x-1, player_y)) {
            player_x = player_x-1;
            player_dir = 'l';
            new_draw_start_x = new_draw_start_x+cell_width/2;
            new_draw_start_y = new_draw_start_y+cell_height/2;
        } // left up
        else if(key === 87 && y>0 && !collision(player_x-1, player_y-1)) { 
            player_x = player_x-1;
            player_y = player_y-1;
            new_draw_start_y = new_draw_start_y+cell_height;
        } // up
        else if(key === 88 && y<=600 && !collision(player_x+1, player_y+1)) {
            player_x = player_x+1;
            player_y = player_y+1; 
            new_draw_start_y = new_draw_start_y-cell_height;
        } // down
        else if(key === 90 && player_x>0 && !collision(player_x, player_y+1)) {
            player_y = player_y+1; 
            player_dir = 'l';
            new_draw_start_x = new_draw_start_x+cell_width/2;
            new_draw_start_y = new_draw_start_y-cell_height/2;
        } // left down
        
      
        if (monster_x > player_x)       {
            monster_x = monster_x - 1   }
        else if (monster_x < player_x)    {
            monster_x = monster_x + 1   }
        if (monster_y > player_y)       {
            monster_y = monster_y - 1;  }
        else if (monster_y < player_y)  {
            monster_y = monster_y + 1;  }

    }


    stage.addEventListener('mousemove', function(evnt) {
 
        var rect = stage.getBoundingClientRect();
        x = evnt.clientX - rect.left;
        y = evnt.clientY - rect.top;

        tileX = Math.round((x - draw_start_x ) / cell_width + (y-draw_start_y) / cell_height);
        tileY = Math.round((y - draw_start_y) / cell_height - (x-draw_start_x) / cell_width);

        ctx.clearRect(0, 0, 1800, 900); //clearing anything drawn on canvas

        // drawMap()

        coord = ConvertToCoord(tileX, tileY);
        drawRhomb(coord.x, coord.y);

        ctx.font = "15px Courier";
        ctx.fillStyle = 'white';

        if (tileY < 30 && tileY >= 0 && tileX <= 60 && tileX >= 0) {
            ctx.fillText(map[tileY][tileX]['obj'], coord.x+20, coord.y);
        }
        else if (tileY == player_y && tileX == player_x) {
            ctx.fillText("Player", coord.x+20, coord.y);
        }

    }, false);

    var FPS = 20;

    function mainLoop() {
        if (new_draw_start_x < draw_start_x) {
            draw_start_x = draw_start_x - 6;
        }
        else if (new_draw_start_x > draw_start_x) {
            draw_start_x = draw_start_x + 6;
        }
        
        if (new_draw_start_y < draw_start_y) {
            draw_start_y = draw_start_y - 5;   
        }
        if (new_draw_start_y > draw_start_y) {
            draw_start_y = draw_start_y + 5;   
        }
        drawMap();
        requestAnimationFrame(mainLoop);
    }

    requestAnimationFrame(mainLoop);

}



