document.getElementById("equationForm").addEventListener("submit", function (event) {
    event.preventDefault();

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
    
    let result = "";

    switch (equationType) {
        case "eleven": // ax + b = 0 ; x = ?
            if (a === 0) {
                result = "The value of 'a' cannot be zero.";
            } else {
                result = `x = ${-b} / ${a} = ${-b / a}`;
            }
            break;

        case "first-y": // ax + by + 1 = 0 ; y = ?
            if (b === 0) {
                result = "The value of 'b' cannot be zero.";
            } else {
                result = `y = (-${a}x - 1) / ${b} = ${(-a * x - 1) / b}`;
            }
            break;

        case "first-x": // ax + by + 1 = 0 ; x = ?
            if (a === 0) {
                result = "The value of 'a' cannot be zero.";
            } else {
                result = `x = (-${b}y - 1) / ${a} = ${(-b * y - 1) / a}`;
            }
            break;

        case "second-y": // ax + by + c = 0 ; y = ?
            if (b === 0) {
                result = "The value of 'b' cannot be zero.";
            } else {
                result = `y = (-${a}x - ${c}) / ${b} = ${(-a * x - c) / b}`;
            }
            break;

        case "second-x": // ax + by + c = 0 ; x = ?
            if (a === 0) {
                result = "The value of 'a' cannot be zero.";
            } else {
                result = `x = (-${b}y - ${c}) / ${a} = ${(-b * y - c) / a}`;
            }
            break;

        case "third-x": // ax² + bx + c = 0 ; x = ?
            const discriminant = b * b - 4 * a * c;
            if (a === 0) {
                result = "The value of 'a' cannot be zero.";
            } else if (discriminant < 0) {
                result = "No real solutions exist.";
            } else {
                const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                result = `x₁ = ${root1}, x₂ = ${root2}`;
            }
            break;

        case "third-c": // ax² + bx + c = 0 ; c = ?
            result = `c = ${a * x * x + b * x}`;
            break;

        case "fourth": // x² + y² = r² ; r = ?
            result = `r = √(${x}² + ${y}²) = ${Math.sqrt(x * x + y * y)}`;
            break;

        case "fifth-a": // a² + b² = c² ; a = ?
            result = `a = √(${c}² - ${b}²) = ${Math.sqrt(c * c - b * b)}` || 'Complex number';
            break;

        case "fifth-b": // a² + b² = c² ; b = ?
            result = `b = √(${c}² - ${a}²) = ${Math.sqrt(c * c - a * a)}`;
            break;

        case "fifth-c": // a² + b² = c² ; c = ?
            result = `c = √(${a}² + ${b}²) = ${Math.sqrt(a * a + b * b)}`;
            break;

        case "eighth-m": // y = mx + c ; m = ?
            if (x === 0) {
                result = "The value of 'x' cannot be zero.";
            } else {
                result = `m = (${y} - ${c}) / ${x} = ${(y - c) / x}`;
            }
            break;

        case "eighth-y": // y = mx + c ; y = ?
            result = `y = ${m} * ${x} + ${c} = ${m * x + c}`;
            break;

        case "eighth-x": // y = mx + c ; x = ?
            if (m === 0) {
                result = "The value of 'm' cannot be zero.";
            } else {
                result = `x = (${y} - ${c}) / ${m} = ${(y - c) / m}`;
            }
            break;

        case "eighth-c": // y = mx + c ; c = ?
            result = `c = ${y} - ${m} * ${x} = ${y - m * x}`;
            break;

        case "ninth-e": // E = mc² ; E = ?
            result = `E = ${m} * ${c}² = ${m * c * c}`;
            break;

        case "ninth-m": // E = mc² ; m = ?
            if (c === 0) {
                result = "The value of 'c' cannot be zero.";
            } else {
                result = `m = ${e} / (${c}²) = ${e / (c * c)}`;
            }
            break;

        case "tenth": // x = (-b ± √(b² - 4ac)) / 2a ; x = ?
            const D = b * b - 4 * a * c;
            if (a === 0) {
                result = "The value of 'a' cannot be zero.";
            } else if (D < 0) {
                result = "Complex number";
            } else {
                const x1 = (-b + Math.sqrt(D)) / (2 * a);
                const x2 = (-b - Math.sqrt(D)) / (2 * a);
                result = `x₁ = ${x1}, x₂ = ${x2}`;
            }
            break;

        default:
            result = "Please select a valid equation type.";
    }

    document.getElementById("result").innerText = result;
});
