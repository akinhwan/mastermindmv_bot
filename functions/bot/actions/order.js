const { getNextDayOfWeek } = require('../components/helper');

module.exports = (ctx) => {
  const order1 = ['Andrew', 'Ben', 'Sebastien', 'Ethan'];
  const order2 = ['Ben', 'Sebastien', 'Ethan', 'Andrew'];
  const order3 = ['Sebastien', 'Ethan', 'Andrew', 'Ben'];
  const order4 = ['Ethan', 'Andrew', 'Ben', 'Sebastien'];

  const date1 = new Date('1/5/2021');
  // const date2 = new Date('1/12/2021');
  // const date3 = new Date('1/19/2021');
  // const date4 = new Date('1/26/2021');

  // today's date
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  let nextTuesday = getNextDayOfWeek(new Date(), 2);

  const diffTime = Math.abs(nextTuesday - date1);
  console.log(`diff time ${diffTime}`);
  const diffDays = Math.ceil(diffTime1 / (1000 * 60 * 60 * 24));
  console.log(`diff days ${diffDays}`);

  try {
    console.log(`modulus 28 ${diffDays % 28}`);
    console.log(`modulus 35 ${diffDays % 35}`);
    console.log(`modulus 42 ${diffDays % 42}`);
    console.log(`modulus 49 ${diffDays % 49}`);

    console.log(`${order1.join(', ')}`);

    if (diffDays % 28 === 0) {
      return ctx.reply(`${order1.join(', ')}`);
    } else if (diffDays % 35 === 0) {
      return ctx.reply(`${order2.join(', ')}`);
    } else if (diffDays % 42 === 0) {
      return ctx.reply(`${order2.join(', ')}`);
    } else if (diffDays % 49 === 0) {
      return ctx.reply(`${order4.join(', ')}`);
    } else {
      return ctx.reply('Theres a bug yo.');
    }
  } catch (e) {
    return ctx.reply(`Error occured`);
  }
};
