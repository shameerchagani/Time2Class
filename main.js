$(function () {
    var dte = new Date();
    let d = document.getElementById('d');
    let m = document.getElementById('m');
    let y = document.getElementById('y');
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    
   if (dte.getDay() === 1) {
        d.value = dte.getDate() + 2;
        d.value = d.value > 31 ? alert('Something is not right with the date \nPlease check and correct Manually') : d.value;
        m.value = dte.getMonth() + 1;
        m.value = m.value > 12 ? alert('Something is not right with the month \nPlease check and correct Manually') : m.value;
        y.value = dte.getFullYear();
        hh.value = 19;
        mm.value = 30;
    } else if (dte.getDay() === 2) {
        d.value = dte.getDate() + 1;
        d.value = d.value > 31 ? alert('Something is not right with the date \nPlease check and correct Manually') : d.value;
        m.value = dte.getMonth() + 1;
        m.value = m.value > 12 ? alert('Something is not right with the month \nPlease check and correct Manually') : m.value;
        y.value = dte.getFullYear();
        hh.value = 19;
        mm.value = 30;
    } else if (dte.getDay() === 3) {
        d.value = dte.getDate();
        d.value = d.value > 31 ? alert('Something is not right with the date \nPlease check and correct Manually') : d.value;
        m.value = dte.getMonth() + 1;
        m.value = m.value > 12 ? alert('Something is not right with the month \nPlease check and correct Manually') : m.value;
        y.value = dte.getFullYear();
        hh.value = 19;
        mm.value = 30;
    } else  if (dte.getDay() === 0){
        y.value = dte.getFullYear();
        m.value = dte.getMonth() + 1;
        m.value = m.value > 12 ? alert('Something is not right with the month \nPlease check and correct Manually') : m.value;
        d.value = dte.getDate();
        d.value = d.value > 31 ? alert('Something is not right with the date \nPlease check and correct Manually') : d.value;
        hh.value = 17;
        mm.value = '00';
    } else  if (dte.getDay() === 4){
        y.value = dte.getFullYear();
        m.value = dte.getMonth() + 1;
        m.value = m.value > 12 ? alert('Something is not right with the month \nPlease check and correct Manually') : m.value;
        d.value = dte.getDate() + 3;
        d.value = d.value > 31 ? alert('Something is not right with the date \nPlease check and correct Manually') : d.value;
        hh.value = 17;
        mm.value = '00';
    }else  if (dte.getDay() === 5){
        y.value = dte.getFullYear();
        m.value = dte.getMonth() + 1;
        m.value = m.value > 12 ? alert('Something is not right with the month \nPlease check and correct Manually') : m.value;
        d.value = dte.getDate() + 2;
        d.value = d.value > 31 ? alert('Something is not right with the date \nPlease check and correct Manually') : d.value;
        hh.value = 17;
        mm.value = '00';
    }else  if (dte.getDay() === 6){
        y.value = dte.getFullYear();
        m.value = dte.getMonth() + 1;
        m.value = m.value > 12 ? alert('Something is not right with the month \nPlease check and correct Manually') : m.value;
        d.value = dte.getDate() + 1;
        d.value = d.value > 31 ? alert('Something is not right with the date \nPlease check and correct Manually') : d.value;
        hh.value = 17;
        mm.value = '00';
    } else {
        y.value = dte.getFullYear();
        m.value = dte.getMonth() + 1;
        d.value = dte.getDate() + 1;
        hh.value = 23;
        mm.value = 59;
    }
    
    var calcNewYear = setInterval(function () {
        date_future = new Date(y.value, m.value - 1, d.value, hh.value, mm.value);
         date_now = new Date();
        seconds = Math.floor((date_future - (date_now)) / 1000);
        minutes = Math.floor(seconds / 60);
        hours = Math.floor(minutes / 60);
        days = Math.floor(hours / 24);

        hours = hours - (days * 24);
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
        seconds = seconds < 10 ? '0' + seconds : seconds;

        if (y.value !== '' && m.value !== '' && d.value !== '' && hh.value !== '' && mm.value !== '' && date_now < date_future) {
            $("#time").html("<h2 id='heading2'>Remaining Time For Next Session</h2> <p id='timeLeft'>" + days + "<span class='red'>D </span>: " + hours + "<span class='red'>H</span> : " + minutes + "<span class='red'>M</span> : " + seconds + "<span class='red'>S</span> </p>")
        } else if (date_future < date_now) {
            $('#time').html("<h2 id='heading2'>Date/Time Cannot be Less than Current Date/Time nor can be Blank</h2>");
        }
        else {
            $('#time').html("<h2 id='heading2'>CountDown Rules: </h2> <ul id='white'><li>Date/Time Cannot be Blank</li><li>Date/Time Cannot be Past Date.");
        }
    }, 1000);
});