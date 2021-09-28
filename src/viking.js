// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  };
  attack() {
    return this.strength
  };
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else { return `${this.name} has died in act of combat` }
  };

  // battleCry(){};
  // }

  battleCry() {
    return "Odin Owns You All!"
  }

}


// Saxon
class Saxon extends Soldier {
  // super(health, strength);
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  };
}



// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  };
  addViking(oneViking) {
    this.vikingArmy.push(oneViking);
  };
  addSaxon(oneSaxon) {
    this.saxonArmy.push(oneSaxon);
  };
  vikingAttack(){
    let randomVikingIndex = Math.floor(Math.random()* this.vikingArmy.length);
    let randomSaxonIndex = Math.floor(Math.random()* this.saxonArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
  
    //should make a Saxon receiveDamage() equal to the strength of a Viking
    let damageOfSaxon = randomSaxon.receiveDamage(randomViking.strength);
    //should remove dead saxons from the army
    if (randomSaxon.health < 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1)
    };
    //should return result of calling receiveDamage() of a Saxon with the strength of a Viking
   return damageOfSaxon;
  };  
  saxonAttack(){
    let randomVikingIndex1 = Math.floor(Math.random()* this.vikingArmy.length);
    let randomSaxonIndex1 = Math.floor(Math.random()* this.saxonArmy.length);
    let randomViking1 = this.vikingArmy[randomVikingIndex1];
    let randomSaxon1 = this.saxonArmy[randomSaxonIndex1];
    //should make a Viking receiveDamage() equal to the strength of a Saxon
    let damageOfViking = randomViking1.receiveDamage(randomSaxon1.strength);
    //should remove dead vikings from the army
    console.log('prout');
    console.log(randomViking1.health);
    if (randomViking1.health < 0) {
      this.vikingArmy.splice(randomVikingIndex1, 1) 
    };
    return damageOfViking;
  };

}


console.log(War.saxonAttack);
//POUR COMPRENDRE
// let ragnar = new Viking('ragnar', 100, 30);
// let ww2 = new War;
// ww2.addViking(ragnar);
// console.log(ww2.vikingArmy);


// 
// showStatus()


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
