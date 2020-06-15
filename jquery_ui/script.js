function replaceEmpty(elem) {
    return elem == null || elem == undefined ? '' : elem;
}

function IsEmpty(elem) {
    return elem == null || elem == undefined || elem == '';
}

$(function() {

    $( "#departureDate" ).datepicker();
    var spinner = $("#departureDays").spinner();

    spinner.on("spinstop", function(){
        if(spinner.val() <= 0)
            spinner.val(1);
    });
   
    $( "#departureRange" ).slider({
        range: true,
        min: 100,
        max: 5000,
        values: [ 0, 5000 ],
        slide: function( event, ui ) {
            $('#startPrice').text(ui.values[0]);
            $('#endPrice').text(ui.values[1]);
        }
    });

    $.getJSON('locations.json', function(data) {

        var countries = data['countries'];
        var cities = data['cities'];
        var hotels = data['hotels'];

        $('.country').each(function (index, value) {
           $(value).autocomplete({source: countries});
        });

        $('.city').each(function (index, value) {
            $(value).autocomplete({source: cities});
         });

        $("#hotel").autocomplete({source: hotels});
        // var tours = [];
        // var now = new Date();

        // for (let index = 0; index < 200; index++) {
        
        //     now.setDate(now.getDate() + index);
        //     var tour = {};
        //     tour['hotel'] = hotels[index];
        //     tour['name'] = 'Крутой тур';
        //     tour['country'] = countries[(Math.random() * (countries.length - 1 - 0) + 0).toFixed(0)];
        //     tour['city'] = cities[(Math.random() * (cities.length - 1 - 0) + 0).toFixed(0)];
        //     tour['departureCountry'] = countries[(Math.random() * (countries.length - 1 - 0) + 0).toFixed(0)];
        //     tour['departureCity'] = cities[(Math.random() * (cities.length - 1 - 0) + 0).toFixed(0)];
        //     tour['departureRange'] = (Math.random() * (5000 - 100) + 100).toFixed(2);
        //     tour['departureDays'] = (Math.random() * (30 - 3) + 3).toFixed(0);
        //     tour['departureDate'] = now.toLocaleDateString();
        //     tours.push(tour);

        // }

        // $('#test').text(JSON.stringify(tours));
    });

    function fillAccordion(tour) {
        
        $('#accordion').append(`<p>${tour.name}: ${tour.country}</p>`);
        $('#accordion').append(`<div>
        <p>Отель: ${tour.hotel}</p>
        <p>Страна: ${tour.country}</p>
        <p>Город: ${tour.city}</p>
        <p>Страна отправления: ${tour.departureCountry}</p>
        <p>Город отправления: ${tour.departureCity}</p>
        <p>Цена: ${tour.departureRange}</p>
        <p>Количество дней: ${tour.departureDays}</p>
        <p>Дата отправления: ${tour.departureDate}</p>
        </div>`);

    }

    $('#search').click(e => {

        var filters = [{name: 'country', value: $('#country').val()}, 
        {name: 'city', value: $('#city').val()}, 
        {name: 'hotel', value: $('#hotel').val()}, 
        {name: 'departureCountry', value: $('#departureCountry').val()}, 
        {name: 'departureCity', value: $('#departureCity').val()}, 
        {name: 'departureRange', value: $('#departureRange').slider("values")}, 
        {name: 'departureDays', value: $('#departureDays').val()},
        {name: 'departureDate', value: $('#departureDate').val().replace("/", ".")}]

        $.getJSON('tours.json', function(data) {

            $('#accordion').remove();
            $('body').append(`<div id="accordion"></div>`);
            
            // $('#accordion').empty();
            console.log(data);

            for (let index = 0; index < data.length; index++) {

                var simpleCount = 0;
                var emptyCount = 0;

                for (let i = 0; i < filters.length; i++) {

                    var fName = filters[i]['name'];

                    if(IsEmpty(filters[i]['value']))
                        ++emptyCount;

                    else if(fName != 'departureRange' && filters[i]['value'] == data[index][fName])
                        ++simpleCount;

                    else if(fName == 'departureRange' && data[index][fName] >= filters[i]['value'][0] && 
                    data[index][fName] <= filters[i]['value'][1])
                        ++simpleCount;
                }

                if(simpleCount + emptyCount == filters.length)
                    fillAccordion(data[index]);

            }

            $('#accordion').accordion();

            if($('#accordion').children().length == 0)
                $('#accordion').append('<h1>Не найдено подходящих туров!</h1>');
        });

    });

 });