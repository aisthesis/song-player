/**
 * Initialize jPlayer
 *
 * @author Marshall Farrier
 * @created 5/9/13
 */

var myJPlayer = window.myJPlayer || {};

$(document).ready(function() {
    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [{
            title: "You Did It",
            mp3: "resources/01_You_Did_It.mp3",
            oga: "resources/01_You_Did_It.ogg"
        },{
            title: "Everything I Need Is You",
            mp3: "resources/02_Everything_I_Need_Is_You.mp3",
            oga: "resources/02_Everything_I_Need_Is_You.ogg"
        },{
            title: "You've Got to Hide Your Love Away (Lennon/McCartney)",
            mp3: "resources/03_Youve_Got_To_Hide_Your_Love_Away.mp3",
            oga: "resources/03_Youve_Got_To_Hide_Your_Love_Away.ogg"
        },{
            title: "Hey, Girl!",
            mp3: "resources/04_Hey_Girli.mp3",
            oga: "resources/04_Hey_Girl.ogg"
        },{
            title: "Folsom Prison Blues (Cash)",
            mp3: "resources/06_Folsom_Prison_Blues.mp3",
            oga: "resources/06_Folsom_Prison_Blues.ogg"
        },{
            title: "Love Is a Dream",
            mp3: "resources/07_Love_Is_a_Dream.mp3",
            oga: "resources/07_Love_Is_a_Dream.ogg"
        },{
            title: "Officer Anderson",
            mp3: "resources/08_Officer_Anderson.mp3",
            oga: "resources/08_Officer_Anderson.ogg"
        },{
            title: "The Galaxy of Love",
            mp3: "resources/09_The_Galaxy_of_Love.mp3",
            oga: "resources/09_The_Galaxy_of_Love.ogg"
        },{
            title: "Honky Tonk Surfer",
            mp3: "resources/10_Honky_Tonk_Surfer.mp3",
            oga: "resources/10_Honky_Tonk_Surfer.ogg"
        }
    ], {
        swfPath: "js",
        supplied: "mp3, oga",
        volume: 0.4
    });
});
