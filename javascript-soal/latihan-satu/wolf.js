class Wolf {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    howl() {
        return 'Auuuuuuuuu';
    }
}

// TODO 2: Ekspor nilai dari class Wolf
module.exports = Wolf;
