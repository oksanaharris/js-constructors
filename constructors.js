/*jshint esversion: 6*/
/**
 * Creates a generic spell that can be cast.
 *
 * @name Spell
 * @param {string} name         The name of the spell.
 * @param {number} cost         The amount needed to cast this spell.
 * @param {string} description  A short description of the spell.
 * @property {string} name
 * @property {number} cost
 * @property {string} description
 * @method   getDetails
 */

   /**
   * Returns a string of all of the spell's details.
   * The format doesn't matter, as long as it contains the spell name, cost, and description.
   *
   * @name getDetails
   * @return {string} details containing all of the spells information.
   */

   /**
 * A spell that deals damage.
 * We want to keep this code DRY (Don't Repeat Yourself).
 *
 * So you should use `Spell.call()` to assign the spell name, cost, and description.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call*/

  /*
 * In addition, you will also want to assign `DamageSpell.prototype`
 * a value so that it inherits from `Spell`.
 * Make sure to call this OUTSIDE of the function declaration.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype
 *
 * @name DamageSpell
 * @param {string} name         The name of the spell.
 * @param {number} cost         The amount needed to cast this spell.
 * @param {number} damage       The amount of damage this spell deals.
 * @param {string} description  A short description of the spell.
 * @property {string} name
 * @property {number} cost
 * @property {number} damage
 * @property {string} description
 */

 function Spell (name, number, description){
  this.name = name;
  this.cost = number;
  this.description = description;
 }

 Spell.prototype.getDetails = function (){
  let details = this.name + ' ' + this.cost + ' ' + this.description;
  console.log(details);
  return details;
 };


 function DamageSpell (name, number, damage, description){
    Spell.call(this, name, number, description);
    this.damage = damage;
 }

 DamageSpell.prototype = Object.create(Spell.prototype);


function Spellcaster (name, health, mana){
  this.name = name;
  this.health = health;
  this.mana = mana;
  this.isAlive = true;
}




/**
 * Now that you've created some spells, let's create
 * `Spellcaster` objects that can use them!
 *
 * @name Spellcaster
 * @param {string} name         The spellcaster's name.
 * @param {number} health       The spellcaster's health points.
 * @param {number} mana         The spellcaster's mana points, used for casting spells.
 * @property {string} name
 * @property {number} health
 * @property {mana} mana
 * @property {boolean} isAlive  Default value should be `true`.
 * @method  inflictDamage
 * @method  spendMana
 * @method  invoke
 */

   /**
   * @method inflictDamage
   *
   * The spellcaster loses health equal to `damage`.
   * Health should never be negative.
   * If the spellcaster's health drops to 0,
   * its `isAlive` property should be set to `false`.
   *
   * @param  {number} damage  Amount of damage to deal to the spellcaster
   */

Spellcaster.prototype.inflictDamage = function (damage){
  if (this.isAlive === true){
    if (this.health > damage){
      this.health -= damage;
    } else {
      this.health = 0;
      this.isAlive = false;
    }
  }
  
};

// Spellcaster.prototype.inflictDamage = function (damage, target){
//   if (target instanceof Spellcaster){
//     if (target.isAlive === true){
//       if (target.health > damage){
//         target.health -= damage;
//       } else {
//         target.health = 0;
//         thtargetis.isAlive = false;
//       }
//     }
//   } else {
//     throw new Error ('Target is not a spellcaster.')
//   }
  
// };

  /**
   * @method spendMana
   *
   * Reduces the spellcaster's mana by `cost`.
   * Mana should only be reduced only if there is enough mana to spend.
   *
   * @param  {number} cost      The amount of mana to spend.
   * @return {boolean} success  Whether mana was successfully spent.
   */

Spellcaster.prototype.spendMana = function (cost){
  if (this.mana >= cost){
      this.mana -= cost;
      return true;
    } else {
      return false;
    }
};


  /**
   * @method invoke
   *
   * Allows the spellcaster to cast spells.
   * The first parameter should either be a `Spell` or `DamageSpell`.
   * If it is a `DamageSpell`, the second parameter should be a `Spellcaster`.
   * The function should return `false` if the above conditions are not satisfied.
   *
   * You should use `instanceof` to check for these conditions.
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
   */

Spellcaster.prototype.invoke = function (spell, target){
  if (spell instanceof Spell) {
    if (spell instanceof DamageSpell){
      if (target instanceof Spellcaster){
        if (this.mana >= spell.cost){
          this.spendMana(spell.cost);
          target.inflictDamage(spell.damage);
          return true;
        } else {
          return false;
        }
      } else {
        console.log('target is not a spellcaster');
        return false;
      }
    } else {
      if (this.mana >= spell.cost){
        this.spendMana(spell.cost);
        return true;
      } else {
        return false;
      }
    } 
  } else {
    console.log('This is not a spell.');
    return false;
  } 
};




   /* Next check if the spellcaster has enough mana to cast the spell.
   * If it can cast a spell, it should lose mana  equal to the spell's cost.
   * If there is not enough mana, return `false`.
   *
   * If there is enough mana to cast the spell, return `true`.
   * In addition, if it is a `DamageSpell` reduce the target's health by the spell's damage value.
   *
   * Use functions you've previously created: (`inflictDamage`, `spendMana`)
   * to help you with this.
   *
   * @param  {(Spell|DamageSpell)} spell  The spell to be cast.
   * @param  {Spellcaster} target         The spell target to be inflicted.
   * @return {boolean}                    Whether the spell was successfully cast.
   */
