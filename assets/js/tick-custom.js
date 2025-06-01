function handleCountdownTickInit(tick) {
    var locale = {
        YEAR_PLURAL: 'Anos',
        YEAR_SINGULAR: 'Ano',
        MONTH_PLURAL: 'Meses',
        MONTH_SINGULAR: 'Mês',
        WEEK_PLURAL: 'Semanas',
        WEEK_SINGULAR: 'Semana',
        DAY_PLURAL: 'Dias',
        DAY_SINGULAR: 'Dia',
        HOUR_PLURAL: 'Horas',
        HOUR_SINGULAR: 'Hora',
        MINUTE_PLURAL: 'Minutos',
        MINUTE_SINGULAR: 'Minuto',
        SECOND_PLURAL: 'Segundos',
        SECOND_SINGULAR: 'Segundo',
        MILLISECOND_PLURAL: 'Milisegundos',
        MILLISECOND_SINGULAR: 'Milisegundo'
    };

    for (var key in locale) {
        if (!locale.hasOwnProperty(key)) { continue; }
        tick.setConstant(key, locale[key]);
    }

        // format of due date is ISO8601
    // https://en.wikipedia.org/wiki/ISO_8601

    // '2018-01-31T12:00:00'        to count down to the 31st of January 2018 at 12 o'clock
    // '2019'                       to count down to 2019
    // '2018-01-15T10:00:00+01:00'  to count down to the 15th of January 2018 at 10 o'clock in timezone GMT+1


    var initialDate = tick._element.dataset.initialValue

    if (isNaN(Tick.helper.date(initialDate))) {
        alert('Invalid date for countdown!!')
    }

    console.log({d: Tick.helper.date(initialDate)})

    var counter = Tick.count.down(initialDate)

    counter.onupdate = function (value) {
        tick.value = value;
    };

    counter.onended = function () {
        // redirect, uncomment the next line
        // window.location = 'my-location.html'
        // hide counter, uncomment the next line
        // tick.root.style.display = 'none';
        // show message, uncomment the next line
        // document.querySelector('.tick-onended-message').style.display = '';
    };
}
