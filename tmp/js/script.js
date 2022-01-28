$(function(){
    $("#before").hide();
    $("#after").hide();
    $("#outputimg").show();
    $("#loading").hide();
    $('#contents div[id !="tab1"]').hide();
    
    $(".modeselect ul li a").click(function(){
        $(this).attr("href");
        $("#contents div").hide();
        $($(this).attr("href")).show();
        $(".current").removeClass("current");
        $(this).addClass("current");
        return false;
    });

    $("#spring").click(function(){
        $("#inputimg").hide();
        $("#outputimg").hide();
        $("#before").attr("src","../tmp/img/springA.png");
        $("#after").attr("src","../tmp/img/springB.png");
        $("#before").show();
        $("#after").show();
    });
    
    $("#summer").click(function(){
        $("#inputimg").hide();
        $("#outputimg").hide();
        $("#before").attr("src","../tmp/img/summerA.png");
        $("#after").attr("src","../tmp/img/summerB.png");
        $("#before").show();
        $("#after").show();
    });
    
    $("#autumn").click(function(){
        $("#inputimg").hide();
        $("#outputimg").hide();
        $("#before").attr("src","../tmp/img/autumnA.png");
        $("#after").attr("src","../tmp/img/autumnB.png");
        $("#before").show();
        $("#after").show();
    });
    
    $("#winter").click(function(){
        $("#inputimg").hide();
        $("#outputimg").hide();
        $("#before").attr("src","../tmp/img/winterA.png");
        $("#after").attr("src","../tmp/img/winterB.png");
        $("#before").show();
        $("#after").show();
    });
    
    $("#aurora").click(function(){
        $("#inputimg").hide();
        $("#outputimg").hide();
        $("#before").attr("src","../tmp/img/auroraA.png");
        $("#after").attr("src","../tmp/img/auroraB.png");
        $("#before").show();
        $("#after").show();
    });
    
    $("#kagoshima").click(function(){
        $("#inputimg").hide();
        $("#outputimg").hide();
        $("#before").attr("src","../tmp/img/kagoshimaA.png");
        $("#after").attr("src","../tmp/img/kagoshimaB.png");
        $("#before").show();
        $("#after").show();
    });
    
    $("#europe").click(function(){
        $("#inputimg").hide();
        $("#outputimg").hide();
        $("#before").attr("src","../tmp/img/europeA.png");
        $("#after").attr("src","../tmp/img/europeB.png");
        $("#before").show();
        $("#after").show();
    });
    
    $("#hanabi").click(function(){
        $("#inputimg").hide();
        $("#outputimg").hide();
        $("#before").attr("src","../tmp/img/hanabiA.png");
        $("#after").attr("src","../tmp/img/hanabiB.png");
        $("#before").show();
        $("#after").show();
    });
    
    $("#fantasy").click(function(){
        $("#inputimg").hide();
        $("#outputimg").hide();
        $("#before").attr("src","../tmp/img/fantasyA.png");
        $("#after").attr("src","../tmp/img/fantasyB.png");
        $("#before").show();
        $("#after").show();
    });
    
    $("#mirai").click(function(){
        $("#inputimg").hide();
        $("#outputimg").hide();
        $("#before").attr("src","../tmp/img/miraiA.png");
        $("#after").attr("src","../tmp/img/miraiB.png");
        $("#before").show();
        $("#after").show();
    });
    
    $("#horror").click(function(){
        $("#inputimg").hide();
        $("#outputimg").hide();
        $("#before").attr("src","../tmp/img/horrorA.png");
        $("#after").attr("src","../tmp/img/horrorB.png");
        $("#before").show();
        $("#after").show();
    });
    
    $("#atlantis").click(function(){
        $("#inputimg").hide();
        $("#outputimg").hide();
        $("#before").attr("src","../tmp/img/atlantisA.png");
        $("#after").attr("src","../tmp/img/atlantisB.png");
        $("#before").show();
        $("#after").show();
    });
    
    
    
    $("#sakurajima").click(function(){
        $("#inputimg").hide();
        $("#outputimg").hide();
        $("#before").attr("src","../tmp/img/sakurajimaA.png");
        $("#after").attr("src","../tmp/img/sakurajimaB.png");
        $("#before").show();
        $("#after").show();
    });
    
    $("#fujisan").click(function(){
        $("#inputimg").hide();
        $("#outputimg").hide();
        $("#before").attr("src","../tmp/img/fujisanA.png");
        $("#after").attr("src","../tmp/img/fujisanB.png");
        $("#before").show();
        $("#after").show();
    });
    
    $("#hyozan").click(function(){
        $("#inputimg").hide();
        $("#outputimg").hide();
        $("#before").attr("src","../tmp/img/hyozanA.png");
        $("#after").attr("src","../tmp/img/hyozanB.png");
        $("#before").show();
        $("#after").show();
    });
    
    $("#ukiyoe").click(function(){
        $("#inputimg").hide();
        $("#outputimg").hide();
        $("#before").attr("src","../tmp/img/ukiyoeA.png");
        $("#after").attr("src","../tmp/img/ukiyoeB.png");
        $("#before").show();
        $("#after").show();
    });
    
    $("#oil").click(function(){
        $("#inputimg").hide();
        $("#outputimg").hide();
        $("#before").attr("src","../tmp/img/oilA.png");
        $("#after").attr("src","../tmp/img/oilB.png");
        $("#before").show();
        $("#after").show();
    });
    
    
    $("#file-7").on("change", function(e){
        $("#after").hide();
        var reader = new FileReader();
        reader.onload = function(e){
            $("#before").attr("src",e.target.result);
        }
        reader.readAsDataURL(e.target.files[0]);
        $("#before").show();
    });
    
    $("#sendimg").click(function(){
        $("#loading").show();
        var counter = 0;
        var c = 0;
        var i = setInterval(function(){
          $(".loading-page .counter h1").html(c + "%");
          $(".loading-page .counter hr").css("width", c + "%");
          //$(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");
    
        /*
        $(".loading-page .counter h1.color").css("width", c + "%");
        */
        counter++;
        c++;
          
        if(counter == 101) {
            clearInterval(i);
        }
      }, 100);
    });
    
    
});

