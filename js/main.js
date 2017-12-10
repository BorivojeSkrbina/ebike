$(document).ready(function () {

    $('.izracunaj').click(function (e) {
        e.preventDefault();
        var series = parseInt($('input[name="series"]').val());
        var parallel = parseFloat($('input[name="parallel"]').val());
        var cellcapacity = parseFloat($('input[name="cellcapacity"]').val());
        var cellcurrent = $('input[name="cellcurrent"]').val();
        var config = series * parallel;


        var voltage = (series * 3.6).toFixed(1);
        var capacity = (cellcapacity * parallel).toFixed(1);
        var power = (voltage * capacity).toFixed(0);
        $('h1.battery').text('Battery: ' + voltage + 'V, ' + series + 's' + parallel + 'p, ' + config + ' cells');
        $('h1.capacity').text('Capacity: ' + capacity + "Ah");
        $('h1.power').text('Power: ' + power + "Wh");
        $('h1.maxcurrent').text('Max current: ' + cellcurrent * parallel + "A");


//PRIKAZ BATERIJE
        var i;
        var a;
        $('.battery-row ul li').empty();

        for (i = 1; i <= series; i++) {
            if (i % 2 === 0) {
                $('.battery-row ul li').append('<img src="img/batnegative.png" class="d-inline-block">' + " ");
            } else {
                $('.battery-row ul li').append('<img src="img/batpositive.png" class="d-inline-block">' + " ");
            }
        }

        var seriesModule = $('.battery-row ul').html();

        for (a = 1; a < parallel; a++) {
            $('.battery-row ul').append(seriesModule);

        }

        var r;
        
        $('.battery-row ul li').css({"top": "0","left": "0"});
        var top = 25;
        var left = 10;
        for (r = 1; r <= parallel; r++) {
            $('.battery-row ul li').eq(r).css({"top": top,"left": left});
            top += 25;
            left += 10;
            console.log(r);

        }




    });//BUTTON CLICK END


    //$('.battery-row li + li').



});