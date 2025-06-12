function getNthWeekday(year, month, weekday, occurrence) {
  var firstOfMonth = new Date(Date(year, month, 1));
  var firstWeekday = firstOfMonth.getDay(); // 0=Sun...6=Sat
  var weekdayOffset = (7 + weekday - firstWeekday) % 7;
  var targetDay = 1 + weekdayOffset + (occurrence - 1) * 7;
  return new Date(Date(year, month, targetDay));
}

function getNextEvent(now, weekday = 1, occurrence = 2) {
    // Current month event date
    var year = now.getFullYear();
    var month = now.getMonth(); // 0-based
    var currentMonthEvent = getNthWeekday(year, month, weekday, occurrence);

    // Next month event date
    var nextMonth = (month + 1) % 12;
    var nextYear = month === 11 ? year + 1 : year;
    var nextMonthEvent = getNthWeekday(nextYear, nextMonth, weekday, occurrence);

    // Keep showing the countdown to 0 on the next day of the event
    var gracePeriodEnd = new Date(currentMonthEvent.getTime() + 2 * 24 * 60 * 60 * 1000);

    console.log({
        currentMonthEvent,
        nextMonthEvent
    })

    if (now < gracePeriodEnd) {
        return currentMonthEvent;
    }

    return nextMonthEvent;
}

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
    // default: Second
    var occurrence = tick._element.dataset.occurrence ? parseInt(tick._element.dataset.occurrence, 10) : 2; 
    // default: Monday
    var weekday = tick._element.dataset.weekday ? parseInt(tick._element.dataset.weekday, 10) : 1;
    // default: 17:30
    var time = tick._element.dataset.time || '17:30:00+01:00';

    var eventDate = null;

    if (initialDate) {
        if (isNaN(Tick.helper.date(initialDate))) {
            alert('Invalid date for countdown!!')
            return;
        }

        if (Tick.helper.date(initialDate) > Tick.helper.date()) {
            eventDate = initialDate;
        }
    }

    if (!eventDate) {
        eventDate = getNextEvent(Tick.helper.date(), weekday, occurrence);
        eventDate = `${eventDate.getFullYear()}-${eventDate.getMonth()}-${eventDate.getDay()}T${time}`
        console.log({eventDate})
        if (isNaN(Tick.helper.date(eventDate))) {
            alert('Invalid generated date for countdown!!')
            return;
        }
        console.info(`Setting next event to ${eventDate}`)
    }

    var counter = Tick.count.down(eventDate)

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
