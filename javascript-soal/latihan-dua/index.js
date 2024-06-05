class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

function validateNumberInput(a, b, c) {
    if (typeof a !== 'number') {
        throw new ValidationError('Argumen pertama harus number');
    }
    if (typeof b !== 'number') {
        throw new ValidationError('Argumen kedua harus number');
    }
    if (typeof c !== 'number') {
        throw new ValidationError('Argumen ketiga harus number');
    }
}

function detectTriangle(a, b, c) {
    try {
        validateNumberInput(a, b, c);
    } catch (error) {
        if (error instanceof ValidationError) {
            return error.message;
        } else {
            throw error;
        }
    }

    if (a === b && b === c) {
        return 'Segitiga sama sisi';
    } else if (a === b || a === c || b === c) {
        return 'Segitiga sama kaki';
    } else {
        return 'Segitiga sembarang';
    }
}

console.log(detectTriangle(3, 1, 1));
console.log(detectTriangle(1, false, 1));
console.log(detectTriangle('a', 3, 5));
console.log(detectTriangle(12, 2, null)); 
