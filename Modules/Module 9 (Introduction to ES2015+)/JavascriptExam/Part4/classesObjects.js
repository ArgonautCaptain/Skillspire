class Human {
  constructor(name, strength = 3, intelligence = 3, dexterity = 3, health = 100) {
    this.name = name;
    this.strength = strength;
    this.intelligence = intelligence;
    this.dexterity = dexterity;
    this.health = health;
    this.maxHealth = health;
  }

  attack(target) {
    if (!(target instanceof Human)) {
      console.log(`${this.name} can only attack another Human!`);
      return;
    }
    const damage = 5 * this.strength;
    target.health -= damage;
    console.log(`${this.name} attacks ${target.name}`);
    console.log(`${this.name} deals ${damage} damage to ${target.name}!`);
    console.log(`${target.name}'s health is now ( ${target.health} / ${target.maxHealth} )`);
  }
}

class Wizard extends Human {
  constructor(name) {
    super(name, 3, 25, 3, 50);
  }

  heal() {
    const amount = 10 * this.intelligence;
    this.health += amount;
    console.log(`${this.name} heals for ${amount}.`);
    console.log(`${this.name}'s health is now ( ${this.health} / ${this.maxHealth} )`);
    console.log(`---------------------------------`);
  }

  fireball(target) {
    if (!(target instanceof Human)) return;
    const damage = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
    target.health -= damage;
    console.log(`${this.name} casts fireball on ${target.name}`);
    console.log(`The fireball deals ${damage} damage to ${target.name}!`);
    console.log(`${target.name}'s health is now ( ${target.health} / ${target.maxHealth} )`);
    console.log(`---------------------------------`);
  }
}

class Ninja extends Human {
  constructor(name) {
    super(name, 3, 3, 175, 100);
  }

  steal(target) {
    if (!(target instanceof Human)) return;
    this.attack(target);
    this.health += 10;
    console.log(`${this.name} attacks ${target.name} and steals 10 health.`);
    console.log(`${target.name}'s health is now ( ${target.health} / ${target.maxHealth} )`);
    console.log(`${this.name}'s health is raised to ( ${this.health} / ${this.maxHealth} )`);
    console.log(`---------------------------------`);
  }

  getAway() {
    this.health -= 15;
    console.log(`${this.name} gets away, losing 15 health.`);
    console.log(`${this.name}'s health is now ( ${this.health} / ${this.maxHealth} )`);
    console.log(`---------------------------------`);
  }
}

class Samurai extends Human {
  constructor(name) {
    super(name, 3, 3, 3, 200);
  }

  deathBlow(target) {
    if (!(target instanceof Human)) return;
    if (target.health < 50) {
      console.log(`${this.name} performs DEATH BLOW on ${target.name}.`);
      console.log(`${target.name}'s health is currently ${target.health}, which is less than 50.`);
      console.log(`${target.name} is defeated!`);
      target.health = 0;
      console.log(`---------------------------------`);
    } else {
      console.log(`${this.name} attempts DEATH BLOW on ${target.name}.`);
      console.log(`${target.name}'s health is currently ${target.health}, which is more than 50.`);
      console.log(`DEATH BLOW failed.`);
      this.attack(target);
      console.log(`---------------------------------`);
    }
  }

  meditate() {
    this.health = 200;
    console.log(`${this.name} meditates and is restored to full health.`);
    console.log(`${this.name}'s health is now ( ${this.health} / ${this.maxHealth} )`);
    console.log(`---------------------------------`);
  }
}

const wizard = new Wizard("Shang Tsung");
const ninja = new Ninja("Sub-Zero");
const samurai = new Samurai("Kenshi");

/* shangTsung.fireball(subZero);
subZero.steal(shangTsung);
kenshi.deathBlow(shangTsung);
shangTsung.heal();
subZero.getAway();
kenshi.meditate(); */

function updateUI() {
  document.getElementById("wizardName").textContent = wizard.name;
  document.getElementById("wizardHealth").textContent = wizard.health;

  document.getElementById("ninjaName").textContent = ninja.name;
  document.getElementById("ninjaHealth").textContent = ninja.health;

  document.getElementById("samuraiName").textContent = samurai.name;
  document.getElementById("samuraiHealth").textContent = samurai.health;
}

// Initial render
document.addEventListener("DOMContentLoaded", updateUI);
