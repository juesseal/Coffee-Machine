/* The new version.
1. A new coffee... Mocka!!!
2. A new drink... with Chocolateee!!!
3. New capacities... double and TRIPLE!!!
4. Add cookies... for only $1!!!
5. Password for... admin features!!!
6. View your credit... for more in future features***
DONATE for support and upgrades ;) ;) enjoy!!! */

let type = 0;
let re = false;
let varAction = '';
let size = 0;
let cookies = '';
let myAccount = 0;
let acc = false;
let ind = -1;
let pass = 0;
let myPass = 0;
const mySecure = 1010;
const secure = 101010;

const array = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [250, 0, 16, 0, 0, 0, 0, -4],
  [350, 75, 20, 0, 0, 0, 0, -7],
  [200, 100, 12, 0, 0, 0, 0, -6],
  [300, 50, 8, 24, 0, 0, 0, -8],
  [400, 540, 120, 240, 9, 10, 11, 550],
  ['water', 'milk', 'beans', 'chocolate', 'cups', 'double cups', 'triple cups', 'money'],
  [10],
  [{
    8991: 100, 8992: 200, 8993: 300, 8994: 400, 8995: 500,
  }],
];

const accountsK = Object.keys(array[8][0]);
const accountsV = Object.values(array[8][0]);

function remaining() {
  console.log(`The coffee machine has:
${array[5][0]} ml of water
${array[5][1]} ml of milk
${array[5][2]} g of coffee beans
${array[5][3]} g of chocolate powder
${array[5][4]} disposable cups
${array[5][5]} double cups
${array[5][6]} triple cups
${array[5][7]} of money
${array[7][0]} packs of cookies`);
}

function take() {
  console.log(`I gave you $${array[5][7]}`);
  array[5][7] -= array[5][7];
}

function fill() {
  array[5][0] += Number(prompt('Write how many ml of water do you want to add:'));
  array[5][1] += Number(prompt('Write how many ml of milk do you want to add:'));
  array[5][2] += Number(prompt('Write how many grams of coffee beans do you want to add:'));
  array[5][3] += Number(prompt('Write how many grams of chocolate powder do you want to add'));
  array[5][4] += Number(prompt('Write how many disposable cups of coffee do you want to add:'));
  array[5][5] += Number(prompt('Write how many double disposable cups do you want to add:'));
  array[5][6] += Number(prompt('Write how many triple disposable cups do you want to add:'));
  array[7][0] += Number(prompt('Write how many packs of cookies do you want to add:'));
}

function buy() {
  re = true;
  type = prompt('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - mocka, back - to main menu: ');
  if (type !== 'back') { type = Number(type); }
  if (type === 1 || type === 2 || type === 3 || type === 4) {
    size = Number(prompt('Would you like 1 - single, 2 - double or 3 - triple in size: '));
    if (size === 1 || size === 2 || size === 3) {
      array[type][(size + 3)] += 1;
      array[5][(size + 3)] += (size - 1);
      array[type].forEach((value, index) => {
        if ((value * size) > array[5][index]) {
          re = false;
          console.log(`Sorry, not enough ${array[6][index]}`);
        } else if (re) {
          array[0][index] += (value * size);
        }
      });
    }
    if (re) {
      array[0].forEach((v, i) => {
        array[5][i] -= v;
        array[0][i] -= v;
      });
      console.log('I have enough resources, making you a coffe!');
      if (array[7][0] > 0) {
        cookies = prompt('For only $1 more... Would you like to bring cookies? (Write: yes, no)');
        if (cookies === 'yes' || cookies === 'YES') {
          array[7][0] -= 1;
          array[5][7] += 1;
          console.log('Excellent! Enjoy your coffee and cookies ;)');
        } else { console.log('All right, enjoy your coffee'); }
      }
    } else { array[5][(size + 3)] -= (size - 1); }
    array[type][(size + 3)] -= 1;
  }
}

function credit() {
  myAccount = prompt('Write the number of your account or write exit: ');
  if (myAccount !== 'exit') {
    myAccount = Number(myAccount);
    accountsK.forEach((v, i) => {
      if (myAccount === Number(v)) { acc = true; ind = i; }
    });
    if (acc) {
      acc = false;
      myPass = prompt('Write your code or write exit: ');
      if (myPass !== 'exit') {
        myPass = Number(myPass);
        if (myPass === mySecure) {
          console.log(`Hi, user #${ind + 1}. This is your credit: $${accountsV[ind]}`);
        } else {
          console.log('The code is wrong');
          credit();
        }
      } else { credit(); }
    } else {
      console.log('We couldn\'t find this account, try again');
      credit();
    }
  }
}

while (varAction !== 'exit') {
  varAction = prompt('Write action (buy, fill, take, remaining, exit, credit):');
  switch (varAction) {
    case 'buy':
      buy();
      break;
    case 'fill':
      pass = Number(prompt('Write the code: '));
      if (pass === secure) { fill(); }
      break;
    case 'take':
      pass = Number(prompt('Write the code: '));
      if (pass === secure) { take(); }
      break;
    case 'remaining':
      pass = Number(prompt('Write the code: '));
      if (pass === secure) { remaining(); }
      break;
    case 'credit':
      credit();
      break;
    default:
  }
}
