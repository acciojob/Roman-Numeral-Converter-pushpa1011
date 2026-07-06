function convertToRoman(num) {
    const roman = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let result = "";

    for (let i = 0; i < roman.length; i++) {
        while (num >= roman[i][1]) {
            result += roman[i][0];
            num -= roman[i][1];
        }
    }

    return result;
}

function convert() {
    const input = document.getElementById('numberInput');
    const resultEl = document.getElementById('result');
    const raw = input.value.trim();

    if (raw === '') {
        resultEl.textContent = 'Please enter a number.';
        return;
    }

    const num = parseInt(raw, 10);
    if (Number.isNaN(num) || num <= 0) {
        resultEl.textContent = 'Enter a positive integer.';
        return;
    }

    // Standard Roman numerals cover 1..3999
    if (num > 3999) {
        resultEl.textContent = 'Number too large (max 3999).';
        return;
    }

    resultEl.textContent = convertToRoman(num);
}

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('numberInput');
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') convert();
    });
    // Expose function to global scope for inline onclick
    window.convert = convert;
});
