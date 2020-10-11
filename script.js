var table = 3; //unit of table
var operator = 'addition'; // type of calculation
var i = 1; // sets counter to 0
var msg = ''; //message


//if the variable says addition wile the counter is less than 15...
if (operator === 'addition') {
    while (i < 15) {
        msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
        i++;
    }
} else {  //otherwise, while the counter is less than 25
    while (i < 15) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
        i++;
    }
}
var el = document.getElementById('blackboard');
el.innerHTML = msg;