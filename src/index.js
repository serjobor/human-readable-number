module.exports = function toReadable (number) {

    const numbers = [
        'zero'     ,
        'one'      ,
        'two'      ,
        'three'    ,
        'four'     ,
        'five'     ,
        'six'      ,
        'seven'    ,
        'eight'    ,
        'nine'     ,
        'ten'      ,
        'eleven'   ,
        'twelve'   ,
        'thirteen' ,
        'fourteen' ,
        'fifteen'  ,
        'sixteen'  ,
        'seventeen',
        'eighteen' ,
        'nineteen' ,
        'twenty'
    ];

    const tensNumbers = [
        '0',
        '1',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];

    if(number < 21){
        return numbers[number];
    }

    const arrNum = ('' + number).split('');

    if (number < 100){
        return (arrNum[1] != '0') ? `${tensNumbers[+arrNum[0]]} ${numbers[+arrNum[1]]}` : tensNumbers[+arrNum[0]];
    }

    if (number < 1000){
        return (arrNum[1] === '0' && arrNum[2] === '0') ? `${numbers[+arrNum[0]]} hundred`: 
                (+(arrNum[1] + arrNum[2]) < 21) ? `${numbers[+arrNum[0]]} hundred ${numbers[+(arrNum[1] + arrNum[2])]}`:
                (arrNum[1] != '0' && arrNum[2] === '0') ? `${numbers[+arrNum[0]]} hundred ${tensNumbers[+arrNum[1]]}`: 
                `${numbers[+arrNum[0]]} hundred ${tensNumbers[+arrNum[1]]} ${numbers[+arrNum[2]]}`;
    }
}
