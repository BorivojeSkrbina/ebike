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
        $('.battery-row ul li + li').remove();
        $('.battery-row ul li img').remove();


        for (i = 1; i <= series; i++) {
            if (i % 2 === 0) {
                $('.battery-row ul li').append('<img src="img/batnegative.png" class="d-inline-block">');
            } else {
                $('.battery-row ul li').append('<img src="img/batpositive.png" class="d-inline-block">');
            }
        }

        var seriesModule = $('.battery-row ul').first().html();

        for (a = 1; a < parallel; a++) {
            $('.battery-row ul').append(seriesModule);

        }

        var r;
        
        var top = 21;
        var left = 15;
        for (r = 1; r <= parallel; r++) {
            $('.battery-row ul li').eq(r).css({"top": top,"left": left});
            top += 21;
            left += 15;
            console.log(r);

        }


//        alert('.battery-row ul li').html();


    });//BUTTON CLICK END


    



});