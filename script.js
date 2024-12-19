const equationType = document.getElementById("equation-type").value;

document.getElementById("equationForm").addEventListener("submit", function (event) {
    event.preventDefault();  // stoped page reloading

    const equationType = document.getElementById("equation-type").value;

    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const d = parseFloat(document.getElementById("d").value);
    const e = parseFloat(document.getElementById("e").value);
    const m = parseFloat(document.getElementById("m").value);
    const r = parseFloat(document.getElementById("r").value);
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);


    // eleven equation
    if (equationType === 'eleven') {
        if (a === 0) {
            document.getElementById("result").innerText = "The value of 'a' can not be zero";
            return;
        }
        else {
            const x = -b / a;
            document.getElementById("result").innerText = `Solution: x = ${-b}/${a} = ${x}`;
        }
    };


});








// enable and disable input field 

document.getElementById('equation-type').addEventListener('change', function () {
    const equationType = document.getElementById("equation-type").value;

    if (equationType === 'eleven') {
        console.log(equationType)
        // document.getElementById('a').setAttribute('disabled', 'true')
        // document.getElementById('b').setAttribute('disabled', 'true')
        document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        document.getElementById('e').setAttribute('disabled', 'true')
        document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        document.getElementById('x').setAttribute('disabled', 'true')
        document.getElementById('y').setAttribute('disabled', 'true')
    }
    if (equationType === 'first-y') {
        console.log(equationType)
        // document.getElementById('a').setAttribute('disabled', 'true')
        // document.getElementById('b').setAttribute('disabled', 'true')
        document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        document.getElementById('e').setAttribute('disabled', 'true')
        document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        // document.getElementById('x').setAttribute('disabled', 'true')
        document.getElementById('y').setAttribute('disabled', 'true')
    }
    if (equationType === 'first-x') {
        console.log(equationType)
        // document.getElementById('a').setAttribute('disabled', 'true')
        // document.getElementById('b').setAttribute('disabled', 'true')
        document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        document.getElementById('e').setAttribute('disabled', 'true')
        document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        document.getElementById('x').setAttribute('disabled', 'true')
        // document.getElementById('y').setAttribute('disabled', 'true')
    }
    if (equationType === 'second-y') {
        console.log(equationType)
        // document.getElementById('a').setAttribute('disabled', 'true')
        // document.getElementById('b').setAttribute('disabled', 'true')
        // document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        document.getElementById('e').setAttribute('disabled', 'true')
        document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        // document.getElementById('x').setAttribute('disabled', 'true')
        document.getElementById('y').setAttribute('disabled', 'true')
    }
    if (equationType === 'second-x') {
        console.log(equationType)
        // document.getElementById('a').setAttribute('disabled', 'true')
        // document.getElementById('b').setAttribute('disabled', 'true')
        // document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        document.getElementById('e').setAttribute('disabled', 'true')
        document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        document.getElementById('x').setAttribute('disabled', 'true')
        // document.getElementById('y').setAttribute('disabled', 'true')
    }
    if (equationType === 'third-x') {
        console.log(equationType)
        // document.getElementById('a').setAttribute('disabled', 'true')
        // document.getElementById('b').setAttribute('disabled', 'true')
        // document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        document.getElementById('e').setAttribute('disabled', 'true')
        document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        document.getElementById('x').setAttribute('disabled', 'true')
        // document.getElementById('y').setAttribute('disabled', 'true')
    }
    if (equationType === 'third-c') {
        console.log(equationType)
        // document.getElementById('a').setAttribute('disabled', 'true')
        // document.getElementById('b').setAttribute('disabled', 'true')
        document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        document.getElementById('e').setAttribute('disabled', 'true')
        document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        // document.getElementById('x').setAttribute('disabled', 'true')
        // document.getElementById('y').setAttribute('disabled', 'true')
    }
    if (equationType === 'fourth') {
        console.log(equationType)
        document.getElementById('a').setAttribute('disabled', 'true')
        document.getElementById('b').setAttribute('disabled', 'true')
        document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        document.getElementById('e').setAttribute('disabled', 'true')
        document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        // document.getElementById('x').setAttribute('disabled', 'true')
        // document.getElementById('y').setAttribute('disabled', 'true')
    }
    if (equationType === 'fifth-a') {
        console.log(equationType)
        document.getElementById('a').setAttribute('disabled', 'true')
        // document.getElementById('b').setAttribute('disabled', 'true')
        // document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        document.getElementById('e').setAttribute('disabled', 'true')
        document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        document.getElementById('x').setAttribute('disabled', 'true')
        document.getElementById('y').setAttribute('disabled', 'true')
    }
    if (equationType === 'fifth-b') {
        console.log(equationType)
        // document.getElementById('a').setAttribute('disabled', 'true')
        document.getElementById('b').setAttribute('disabled', 'true')
        // document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        document.getElementById('e').setAttribute('disabled', 'true')
        document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        document.getElementById('x').setAttribute('disabled', 'true')
        document.getElementById('y').setAttribute('disabled', 'true')
    }
    if (equationType === 'fifth-c') {
        console.log(equationType)
        // document.getElementById('a').setAttribute('disabled', 'true')
        // document.getElementById('b').setAttribute('disabled', 'true')
        document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        document.getElementById('e').setAttribute('disabled', 'true')
        document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        document.getElementById('x').setAttribute('disabled', 'true')
        document.getElementById('y').setAttribute('disabled', 'true')
    }
    if (equationType === 'eighth-m') {
        console.log(equationType)
        document.getElementById('a').setAttribute('disabled', 'true')
        document.getElementById('b').setAttribute('disabled', 'true')
        // document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        document.getElementById('e').setAttribute('disabled', 'true')
        document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        // document.getElementById('x').setAttribute('disabled', 'true')
        // document.getElementById('y').setAttribute('disabled', 'true')
    }
    if (equationType === 'eighth-y') {
        console.log(equationType)
        document.getElementById('a').setAttribute('disabled', 'true')
        document.getElementById('b').setAttribute('disabled', 'true')
        // document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        document.getElementById('e').setAttribute('disabled', 'true')
        // document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        // document.getElementById('x').setAttribute('disabled', 'true')
        document.getElementById('y').setAttribute('disabled', 'true')
    }
    if (equationType === 'eighth-x') {
        console.log(equationType)
        document.getElementById('a').setAttribute('disabled', 'true')
        document.getElementById('b').setAttribute('disabled', 'true')
        // document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        document.getElementById('e').setAttribute('disabled', 'true')
        // document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        document.getElementById('x').setAttribute('disabled', 'true')
        // document.getElementById('y').setAttribute('disabled', 'true')
    }
    if (equationType === 'eighth-c') {
        console.log(equationType)
        document.getElementById('a').setAttribute('disabled', 'true')
        document.getElementById('b').setAttribute('disabled', 'true')
        document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        document.getElementById('e').setAttribute('disabled', 'true')
        // document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        // document.getElementById('x').setAttribute('disabled', 'true')
        // document.getElementById('y').setAttribute('disabled', 'true')
    }
    if (equationType === 'ninth-e') {
        console.log(equationType)
        document.getElementById('a').setAttribute('disabled', 'true')
        document.getElementById('b').setAttribute('disabled', 'true')
        // document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        document.getElementById('e').setAttribute('disabled', 'true')
        // document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        document.getElementById('x').setAttribute('disabled', 'true')
        document.getElementById('y').setAttribute('disabled', 'true')
    }
    if (equationType === 'ninth-m') {
        console.log(equationType)
        document.getElementById('a').setAttribute('disabled', 'true')
        document.getElementById('b').setAttribute('disabled', 'true')
        // document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        // document.getElementById('e').setAttribute('disabled', 'true')
        document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        document.getElementById('x').setAttribute('disabled', 'true')
        document.getElementById('y').setAttribute('disabled', 'true')
    }
    if (equationType === 'eighth') {
        console.log(equationType)
        document.getElementById('a').setAttribute('disabled', 'true')
        document.getElementById('b').setAttribute('disabled', 'true')
        document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('e').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        document.getElementById('x').setAttribute('disabled', 'true')
        document.getElementById('y').setAttribute('disabled', 'true')
    }
    if (equationType === 'tenth') {
        console.log(equationType)
        // document.getElementById('a').setAttribute('disabled', 'true')
        // document.getElementById('b').setAttribute('disabled', 'true')
        // document.getElementById('c').setAttribute('disabled', 'true')
        document.getElementById('e').setAttribute('disabled', 'true')
        document.getElementById('d').setAttribute('disabled', 'true')
        document.getElementById('m').setAttribute('disabled', 'true')
        document.getElementById('r').setAttribute('disabled', 'true')
        document.getElementById('x').setAttribute('disabled', 'true')
        document.getElementById('y').setAttribute('disabled', 'true')
    }
})