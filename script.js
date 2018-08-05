$(document).ready(function() {
	$(".header").css({
        "height": "15%",
        "width" : "100%",
        "background-color" : "aqua"    
    }),

    $(".header-image li").css ({
        "display" : "block",
        "float" : "left",
    }),

    $("img").css ({
        "height" : "100%",       
    })

    $(".middle_portion").css ({
        "height" : "70%",
        "background-color" : "blueviolet",
        "position" : "relative"
    }),
    
    $(".left-one").css ({
        "height": "100%",
        "width" : "10%",
        "background-color" : "black",
        "position" : "absolute",
        "top" : "0",
        "left" : "0"
    })
    
    $(".middle-one").css ({
        "height" : "100%",
        "width" : "80%",
        "background-color" : "darkgoldenrod",
        "position" : "absolute",
        "top": "0",
        "left" : "10%"
    }),
    
    $(".right-one").css ({
        "height" : "100%",
        "width" : "10%",
        "background-color" : "brown",
        "position" : "absolute",
        "top" : "0",
        "left" : "90%"
    }),
    
    $(".footer_portion").css ({
        "height" : "15%",
        "background-color" : "darkcyan"
    })

    var ImageNo=0;

    function differentSize() {
        if(window.innerWidth>=1000)
        {
            ImageNo=10;
        }

        else if (window.innerWidth>=800)
        {
            ImageNo=8;
        }

        else if (window.innerWidth>=600)
        {
            ImageNo=6;
        }

        else {
            ImageNo=4;
        }
    }

    function ImageSet() {
        totalWidth = $(window).innerWidth();
        console.log("window width : " + totalWidth);
        singleWidth = totalWidth / ImageNo;
        console.log("single width" + singleWidth);
        console.log("single height" + singleWidth);
        $("img").css ({
            "width" : singleWidth,
            "height" : singleWidth,
        })
    }

    $(window).resize(function(){
        differentSize();
        ImageSet();
    });
    
    
});

