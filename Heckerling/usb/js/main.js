
$(document).ready(function() {
    // CHECK FOR PREVIOUS ACCEPTANCE OF DISCLAIMERS
    // check for first run
//     userReturn();

    $("#clsmenu").click(closeVideo);

// Opening Screen, click to proceed
    $("#accept1").click(function() {
        $("#disclaimer1").hide(300);
		$("#leftcolfixed").toggle(300);
        $(".display").toggle(300);
        $(".headerblock").toggle(300);

//         $("#disclaimer2").toggle(170);
//         localStorage.setItem("disclaim", "1");
    });

    $("#accept2").click(function() {
        $("#disclaimer2").toggle(1200);
        $("#leftcolfixed").toggle(1000);
        $(".display").toggle(1000);
        localStorage.setItem("disclaim", "2");
    });

    $("#col1").click(function() {
    console.log('col1 click');
        $(".sidebarright").toggle(500);
        $(".menuright").toggle(500);
        
    });
    
//     $('#cmenu').click(function() {
//     alert('cmenu');
// 		$(".playerbox").hide(500);
// 	});

    $("#clsvmenu").click(function() {
        $(".sidebarright").toggle(500);
        $(".menuright").toggle(500);
    });

    $("#toggleHelp").click(function() {
    $(".helpScreen").toggle(600);
    });

// SHOW FULLSCREEN BUTTON FOR PAGE IF SUPPORTED BY BROWSER
    setFSbutton();
    var fs = false;

    $("#fullscreen").click(function() {
        //fs = dumpFullscreen();
        console.log("fs = " + fs);
        if (fs == true) {
            exitFullscreen();
        } else {
            launchFullscreen(document.documentElement);
        };
        fs = !fs;
    });

});

function userReturn() {
    d1 = 2 //localStorage.getItem("disclaim");
    if (d1 == 2) {
        $("#disclaimer1").toggle(500);
        $("#leftcolfixed").toggle(500);
        $(".display").toggle(500);
    };
//    fr = localStorage.getItem("firstRun");
//         console.log("firstrun = " + fr);
//         if (fr == null) {
//             //loadHLS(1);
//             $(".menublock").toggle(600);
//             $(".headerblock").toggle(600);
//             $(".playerbox").toggle(600);
//             }
};

function closeVideo() {
    $(".playerbox").toggle(600);
    $(".menublock").toggle(600);
//     $(".headerblock").toggle(600);
    $(".menublock").scrollTop();
};

function setFSbutton() {
    if (dumpFullscreen() == true) {
    $("#fullscreen").show();
    }
    };

function setDivHeight() {
    //console.log("set height called");
    var pH = $(".sidebarright").height();
    console.log("sidebar height = " + pH);
};

// TODO rename as PDF handler
function loadVideo(num) {
//     num = parseInt(num);
    $(".helpScreen").hide(100);
    $(".menublock").toggle(600);
//     $(".headerblock").toggle(600);
    $(".playerbox").toggle(600);
//     jwplayer().playlistItem(num);
	$("#nowplaying").text(num);
	px=('pdf/' + num);
	var success = new PDFObject({ url:px }).embed("pdf");
// 	console.log(success.data);
    $('#videoplayer').focus();
};


function setText() {
//     curr = jwplayer().getPlaylistItem().chapter + ': ' + jwplayer().getPlaylistItem().title;
//     $("#nowplaying").text(curr);
};

// PLAY INTRO AND RETURN TO MENU ON FIRST RUN
function isIntro(ndx) {
    if (ndx == 0) {
        fr = localStorage.getItem("firstRun");
        console.log("firstrun = " + fr);
        if (fr == null) {
            closeVideo();
            localStorage.setItem("firstRun", 1);
        }
    };
};