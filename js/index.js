$(document).ready(function () {
    var per = 0;

    $("#kirim").click(function () {
        var berat = parseInt($("#berat-inp").val());
        var tinggi = parseInt($("#tinggi-inp").val());
        if ( isNaN(berat) || isNaN(tinggi) ) {
            if ( isNaN(berat) ) {
                $("p.berat-help").html("Wrong Format");
                $("p.berat-help").removeClass("abu").addClass("red");
            }
            if ( isNaN(tinggi) ) {
                $("p.tinggi-help").html("Wrong Format");
                $("p.tinggi-help").removeClass("abu").addClass("red");
            }
            $("#main .cal").toggleClass("shake");
            $("input#ip").addClass("error");
            $("#main .hasil").removeClass("removeMargin");
            $("#main .cal .form").removeClass("shadow");

        } else {
            $("input#ip").removeClass("error");
            
            $("p.help")[0].innerHTML = "Body Weight Eg : 65";
            $("p.help")[1].innerHTML = "Body Height Eg : 175";
            
            $("p.help").removeClass("red").addClass("abu");
            $("#main .hasil").addClass("removeMargin");
            $("#main .cal .form").addClass("shadow");

            // alert('msg');

            tinggi /= 100;
            var bmi = (berat / (tinggi*tinggi)).toFixed(2);
            var hasil = "";

            if(bmi>27){
                hasil = "Obesitas";
            } else if(bmi>25.1){
                hasil = "Gemuk";
            } else if(bmi>18.5){
                hasil = "Ideal";
            } else if(bmi>17){
                hasil = "Kurus";
            } else {
                hasil = "Gizi Buruk";
            }

            $('#berat-bdn').html($("#berat-inp").val() + " Kg");
            $('#tinggi-bdn').html($("#tinggi-inp").val() + " Cm");
            $('#bmi').html(bmi);
            $('#kategori').html("<b>"+hasil+"</b>");
        }
    });

    $("span#kanan").click(function () {
        $("#main .hasil").removeClass("removeMargin");
        $("#main .cal .form").removeClass("shadow");
    });
    $("#slider-Per").slider({
        range: "max"
        , min: 1
        , max: 30
        , value: 1
        , slide: function (event, ui) {
            $("#amount").html(ui.value);
            per = ui.value;
        }
    });
    $("#amount").val($("#slider-Per").slider("value"));



});