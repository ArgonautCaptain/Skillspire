const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to wait for user input
function waitForInput(message) {
    return new Promise(resolve => {
        rl.question(message, () => {
            resolve();
        });
    });
}

class BigCat {
    constructor() {
        this.speed = 5;
        this.strength = 5;
        this.intelligence = 5;
        this.health = 5;
        this.durability = 5;
    }
}

class Lion extends BigCat {
    constructor() {
        super();
        this.strength = 50;
        this.health = 50;
    }

    king(other) {
        if (other instanceof Cheetah && Math.random() <= 0.6) {
            console.log("Cheetah escaped unscathed! The Lion hurt itself chasing the Cheetah. It loses 20 health.");
            this.health -= 20;
            if (this.health <= 0) {
                console.log("The Lion has died!");
            }
            return;
        }
        console.log(`The ${other.constructor.name} was defeated by the Lion's king ability!`);
        other.speed = 0;
        other.strength = 0;
        other.intelligence = 0;
        other.health = 0;
        other.durability = 0;
    }
}

class Leopard extends BigCat {
    constructor() {
        super();
        this.strength = 30;
        this.intelligence = 30;
        this.health = 30;
    }

    attack(other) {
        if (other instanceof Lion) {
            other.king(this);
        } else if (other instanceof Cheetah && Math.random() <= 0.6) {
            console.log("Cheetah escaped the Leopard unscathed! The Leopard hurt itself chasing the Cheetah. It loses 20 health.");
            this.health -= 20;
            if (this.health <= 0) {
                console.log("The Leopard has died!");
            }
            return;
        } else {
            console.log("The Cheetah failed to escape the Leopard's attack and loses 15 health!");
            other.health -= 15;
        }
    }
}

class Cheetah extends BigCat {
    constructor() {
        super();
        this.speed = 75;
        this.strength = 25;
        this.intelligence = 25;
        this.health = 25;
        this.durability = 25;
    }

    run(other) {
        if (other instanceof Leopard) {
            other.attack(this);
            if (this.health <= 0) {
                console.log("The Cheetah has died!");
            }
        } else if (other instanceof Lion) {
            other.king(this);
            if (this.health <= 0) {
                console.log("The Cheetah has died!");
            }
        }
    }
}

async function game() {
    const lion = new Lion();
    const leopard = new Leopard();
    const cheetah = new Cheetah();

    const animals = [lion, leopard, cheetah];

    console.log("Welcome!");
    console.log("You are a cheetah trying to survive in the same territory as a Lion and a Leopard.");
    await waitForInput("Press Enter to continue...");
    console.log("-------------------------------------");

    const userCat = animals[2];

    while (animals.filter(cat => cat.health > 0).length > 1) {
        if (userCat.health > 0) {
            const otherCats = animals.filter(cat => cat !== userCat && cat.health > 0);
            const encounterCat = otherCats[Math.floor(Math.random() * otherCats.length)];

            console.log(`Your Cheetah encountered a ${encounterCat.constructor.name} and tried to run.`);
            await waitForInput("Press Enter to see the result...");
            userCat.run(encounterCat);
            await waitForInput("Press Enter to continue...");
            console.log("-------------------------------------");

            console.log("Current HP of Big Cats:");
            animals.forEach(cat => {
                console.log(`${cat.constructor.name}: Health = ${cat.health}`);
            });
        }

        if (userCat.health <= 0 && leopard.health > 0 && lion.health > 0) {
            console.log("Your cat is dead!");
            console.log("The Lion and the Leopard fight for dominance!");
            await waitForInput("Press Enter to continue...");
            console.log("-------------------------------------");
            leopard.attack(lion);
            console.log("The Lion defeats the leopard with its king ability!");
            break;
        }

        await waitForInput("Press Enter to continue...");
        console.log("-------------------------------------");
    }

    if (userCat.health > 0) {
        console.log("You have defeated all of the other big cats!");
    }
    const winner = animals.reduce((a, b) => a.health > b.health ? a : b);
    console.log(`The winner is: ${winner.constructor.name} with ${winner.health} health remaining.`);
    
    rl.close();
}

// Start the game
game();
