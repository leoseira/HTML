function do_math(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);

    if (a===0){
        let result;
        result = c * (-1) / b
        document.getElementById('result').innerHTML = result;
    }else{
        let delta = (b * b) - (4 * a * c);
        if (delta < 0){
            document.getElementById('result').innerHTML = "Vo Nghiem";
        }else if (delta == 0){
            let xkep = -b /(2*a);
            document.getElementById('result').innerHTML = "Nghiem kep: " + xkep ;
        }else{
            let x1 = -(b + delta ** (1/2))/(2*a);
            let x2 = -(b - delta ** (1/2))/(2*a);
            document.getElementById('result').innerHTML = 'Nghiem 1: ' + x1 + "<br>" + 'Nghiem 2:' + x2;
        }
    }
}