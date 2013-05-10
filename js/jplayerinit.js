/**
 * Initialize jPlayer
 *
 * @author Marshall Farrier
 * @created 5/9/13
 */

var myJPlayer = window.myJPlayer || {};

$(document).ready(function() {
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
                oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
            });
        },
        swfPath: "/js",
        supplied: "m4a, oga"
    });
});
