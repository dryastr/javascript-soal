// TODO 3: Impor class Tiger dan Wolf
const Tiger = require('./tiger');
const Wolf = require('./wolf');

const fight = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
        return tiger.growl();
    } else if (wolf.strength > tiger.strength) {
        return wolf.howl();
    } else {
        return 'Harimau dan serigala sama-sama kuat!';
    }
}

const myTiger = new Tiger();
const myWolf = new Wolf();
const result = fight(myTiger, myWolf);
console.log(result);

// TODO 4: Ekspor fungsi fight, myTiger, myWolf, dan result
module.exports = { fight, myTiger, myWolf, result };
