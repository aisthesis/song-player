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
                mp3: "resources/01_You_Did_It.mp3",
                oga: "resources/01_You_Did_It.ogg"
            });
        },
        swfPath: "js",
        supplied: "mp3, oga",
        volume: 0.4
    });
});
