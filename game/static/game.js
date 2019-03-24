window.onload = function() {

    var stage       = document.getElementById('cnvs')
    var ctx         = stage.getContext('2d')
    var ctx_titles  = stage.getContext('2d')
    var ctx_text    = stage.getContext('2d')
   var map_loaded = [
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
    var username = ''
    var map = []
    var monsters = {}

    var mouse_x = 0;
    var mouse_y = 0;

    var cell_width = 132;
    var cell_height = 69;
    var screen_steps = 12;

    var screen_step_x = cell_width / screen_steps;
    var screen_step_y = cell_height / screen_steps

    var player_x;
    var player_y;
    var player_dir = 'r';

    var draw_start_x;
    var draw_start_y;

    var new_draw_start_x;
    var new_draw_start_y;

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

    var tileX
    var tileY

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
            ctx.drawImage(img_player_r, coords.x-cell_width/4, coords.y-cell_height+30);
        }
        else {
            ctx.drawImage(img_player_l, coords.x-cell_width/4, coords.y-cell_height+30);
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
        ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.closePath();
    }

    function drawWall(x, y) {
        ctx.drawImage(img_wall, x-cell_width/2, y-cell_height-35);
    }

    function drawFloor(x, y) {
        ctx.drawImage(img_floor, x-cell_width/2, y);
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
                    // console.log(cur_row, cur_clm);
                }

                if (map[cur_row][cur_clm]['obj'] == 'wall') {
                    coord = ConvertToCoord(cur_clm, cur_row);
                    if (coord.x<-100 | coord.y<-100 | coord.x>1900 | coord.y>1000) {
                        continue;
                    }
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


                for(var key in monsters) {
                    if (monsters[key].x==cur_clm && monsters[key].y==cur_row) {
                        drawPlayer(monsters[key].x, monsters[key].y, wid, hei);
                    }
                }

                if (cur_row==monster_y && cur_clm==monster_x) {
                    drawMonster(monster_x, monster_y, wid, hei);
                }

            }
        }

    }


    function drawMap() {
        drawMap_background();
    }

    function collision(x, y) {
        if (map[y][x]['obj'] == 'wall' ) {
            return true
        }
        return false

    }

    // document.onkeydown = function(event) {
    //     var key = event.keyCode; //Key code of key pressed
    //     // console.log(key);

    //     if(key === 68 && player_x<=1200 && !collision(player_x+1, player_y-1)) {
    //         player_x = player_x+1;
    //         player_y = player_y-1;
    //         player_dir = 'r';
    //         // draw_start_x = draw_start_x-cell_width;

    //         new_draw_start_x = new_draw_start_x-cell_width;

    //     } // right
    //     else if(key === 69 && x>0 && !collision(player_x, player_y-1)) {
    //         player_y = player_y-1;
    //         player_dir = 'r';
    //         new_draw_start_x = new_draw_start_x-cell_width/2;
    //         new_draw_start_y = new_draw_start_y+cell_height/2;
    //     } // right up
    //     else if(key === 67 && x>0 && !collision(player_x+1, player_y)) {
    //         player_x = player_x+1;
    //         player_dir = 'r';
    //         new_draw_start_x = new_draw_start_x-cell_width/2;
    //         new_draw_start_y = new_draw_start_y-cell_height/2;
    //     } // rigth down
    //     else if(key === 65 && x>0 && !collision(player_x-1, player_y+1)) {
    //         player_x = player_x-1;
    //         player_y = player_y+1;
    //         player_dir = 'l';
    //         new_draw_start_x = new_draw_start_x+cell_width;
    //     } // left
    //     else if(key === 81 && player_x>0 && !collision(player_x-1, player_y)) {
    //         player_x = player_x-1;
    //         player_dir = 'l';
    //         new_draw_start_x = new_draw_start_x+cell_width/2;
    //         new_draw_start_y = new_draw_start_y+cell_height/2;
    //     } // left up
    //     else if(key === 87 && y>0 && !collision(player_x-1, player_y-1)) {
    //         player_x = player_x-1;
    //         player_y = player_y-1;
    //         new_draw_start_y = new_draw_start_y+cell_height;
    //     } // up
    //     else if(key === 88 && y<=600 && !collision(player_x+1, player_y+1)) {
    //         player_x = player_x+1;
    //         player_y = player_y+1;
    //         new_draw_start_y = new_draw_start_y-cell_height;
    //     } // down
    //     else if(key === 90 && player_x>0 && !collision(player_x, player_y+1)) {
    //         player_y = player_y+1;
    //         player_dir = 'l';
    //         new_draw_start_x = new_draw_start_x+cell_width/2;
    //         new_draw_start_y = new_draw_start_y-cell_height/2;
    //     } // left down


    //     if (monster_x > player_x)       {
    //         monster_x = monster_x - 1   }
    //     else if (monster_x < player_x)    {
    //         monster_x = monster_x + 1   }
    //     if (monster_y > player_y)       {
    //         monster_y = monster_y - 1;  }
    //     else if (monster_y < player_y)  {
    //         monster_y = monster_y + 1;  }

    // }


    stage.addEventListener('mousemove', function(evnt) {
        var rect = stage.getBoundingClientRect();
        mouse_x = evnt.clientX - rect.left;
        mouse_y = evnt.clientY - rect.top;
    }, false);

    function drawPointer() {
        tileX = Math.round((mouse_x - draw_start_x ) / cell_width + (mouse_y-draw_start_y) / cell_height);
        tileY = Math.round((mouse_y - draw_start_y) / cell_height - (mouse_x-draw_start_x) / cell_width);

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
    }

    var FPS = 20;

    function mainLoop() {
        if (new_draw_start_x < draw_start_x) {
            draw_start_x = draw_start_x - screen_step_x;
        }
        else if (new_draw_start_x > draw_start_x) {
            draw_start_x = draw_start_x + screen_step_x;
        }
        if (new_draw_start_y < draw_start_y) {
            draw_start_y = draw_start_y - screen_step_y;
        }
        if (new_draw_start_y > draw_start_y) {
            draw_start_y = draw_start_y + screen_step_y;
        }
        ctx.clearRect(0, 0, 1800, 900); //clearing anything drawn on canvas
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, stage.width, stage.height);
        if (map.length) {
            drawMap();
            drawPointer();
        }
        requestAnimationFrame(mainLoop);
    }

    requestAnimationFrame(mainLoop);


    // WEB SOCKETS //

    // Correctly decide between ws:// and wss://
    var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
    var ws_path = ws_scheme + '://' + window.location.host + "/chat/stream/";
    console.log("Connecting to " + ws_path);
    var socket = new ReconnectingWebSocket(ws_path);


    // Handle incoming messages

    socket.onmessage = function (message) {

        console.log("Got websocket message " + message.data);  // Decode the JSON
        var data = JSON.parse(message.data);

        if (data.error) {  // Handle errors
            alert(data.error);
            return;
        }

        if (data.join) {  // Handle joining

            console.log("Joining room " + data.join);

            map = data.message.field;
            username = data.message.username;
            console.log('Saved local var username', data.message.username)
            player_x = data.message.start_x;
            player_y = data.message.start_y;

            draw_start_x = 900 - ( (player_x) * cell_width/2 ) + ( (player_y) * cell_width/2 );
            draw_start_y = 450 - ( (player_y) * cell_height/2 ) - ( (player_x) * cell_height/2 );
            new_draw_start_x = draw_start_x;
            new_draw_start_y = draw_start_y;

            var roomdiv = $(
                    "<div class='room' id='room-" + data.join + "'>" +
                    "<h2>" + data.title + "</h2>" +
                    "<div class='messages'></div>" +
                    // "<form><input><button>Send</button></form>" +
                    "</div>"
            );

            // hook up mouse click
            stage.addEventListener('click', function(evnt) {
                if (collision(tileX, tileY)) {
                    return;
                }
                socket.send(JSON.stringify({
                    "command": "send",
                    "room": data.join,
                    "message": {
                        'username': data.message.username,
                        'old_x': player_x,
                        'old_y': player_y,
                        'new_x': tileX,
                        'new_y': tileY
                    }
                }));
            }, false);

            // Hook up hotkey
            document.onkeydown = function(event) {
                var key = event.keyCode; // Key code of key pressed
                socket.send(JSON.stringify({
                    "command": "send",
                    "room": data.join,
                    "message": key
                }));
            }

            // Hook up send button to send a message
            roomdiv.find("form").on("submit", function () {
                socket.send(JSON.stringify({
                    "command": "send",
                    "room": data.join,
                    "message": roomdiv.find("input").val()
                }));
                roomdiv.find("input").val("");
                return false;
            });
            $("#chats").append(roomdiv);


        } else if (data.leave) { // Handle leaving

            console.log("Leaving room " + data.leave);
            $("#room-" + data.leave).remove();
            map = []


        } else if (data.message || data.msg_type != 0) {  // Handle getting a message

            var msgdiv = $("#room-" + data.room + " .messages");
            var ok_msg = "";
            // msg types are defined in chat/settings.py
            // Only for demo purposes is hardcoded, in production scenarios, consider call a service.
            // console.log(data.msg_type)
            switch (data.msg_type) {
                case 0: // Message

                    if (data.username == username) {
                        player_x = data.message.new_x;
                        player_y = data.message.new_y;
                        new_draw_start_x = 900 - ( (player_x) * cell_width/2 ) + ( (player_y) * cell_width/2 );
                        new_draw_start_y = 450 - ( (player_y) * cell_height/2 ) - ( (player_x) * cell_height/2 );
                    }
                    else {
                        console.log('>>> monsters', monsters);
                        console.log('>>> another player moved', data.username);
                        monsters[data.username] = {'x': data.message.new_x, 'y': data.message.new_y};
                    }

                    // ok_msg = "<div class='message'>" +
                    //         "<span class='username'>" + data.username + "</span>" +
                    //         "<span class='body'>" + data.message + "</span>" +
                    //         "</div>";
                    break;
                case 1: // Warning / Advice messages

                    ok_msg = "<div class='contextual-message text-warning'>" + data.message +
                            "</div>";
                    break;
                case 2: // Alert / Danger messages

                    ok_msg = "<div class='contextual-message text-danger'>" + data.message +
                            "</div>";
                    break;
                case 3: // "Muted" messages

                    ok_msg = "<div class='contextual-message text-muted'>" + data.message +
                            "</div>";
                    break;
                case 4:  // User joined room
                    monsters[data.username] = {'x': data.x, 'y': data.y };
                    console.log('>>> pushed to monsters', data.username);
                    ok_msg = "<div class='contextual-message text-muted'>" + data.username +
                            " joined the room!" +
                            "</div>";
                    break;
                case 5:  // User left room
                    delete monsters[data.username]
                    ok_msg = "<div class='contextual-message text-muted'>" + data.username +
                            " left the room!" +
                            "</div>";
                    break;
                default:
                    console.log("Unsupported message type!");
                    return;
            }
            msgdiv.append(ok_msg);
            msgdiv.scrollTop(msgdiv.prop("scrollHeight"));

        } else {

            console.log("Cannot handle message!");

        }
    };

    // Says if we joined a room or not by if there's a div for it
    inRoom = function (roomId) {
        return $("#room-" + roomId).length > 0;
    };
    // Room join/leave
    $("li.room-link").click(function () {
        roomId = $(this).attr("data-room-id");
        if (inRoom(roomId)) {
            // Leave room
            $(this).removeClass("joined");
            socket.send(JSON.stringify({
                "command": "leave",
                "room": roomId
            }));
        } else {
            // Join room
            $(this).addClass("joined");
            socket.send(JSON.stringify({
                "command": "join",
                "room": roomId
            }));
        }
    });

    socket.onopen = function () {
        console.log("Connected to chat socket");
    };
    socket.onclose = function () {
        console.log("Disconnected from chat socket");
    }

}





