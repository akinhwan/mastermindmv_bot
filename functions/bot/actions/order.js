const { getNextDayOfWeek } = require('../components/helper');

module.exports = (ctx) => {
  const order1 = ['Andrew', 'Ben', 'Sebastien', 'Ethan'];
  const order2 = ['Ben', 'Sebastien', 'Ethan', 'Andrew'];
  const order3 = ['Sebastien', 'Ethan', 'Andrew', 'Ben'];
  const order4 = ['Ethan', 'Andrew', 'Ben', 'Sebastien'];

  const date1 = new Date('1/5/2021');
  const date2 = new Date('1/12/2021');
  const date3 = new Date('1/19/2021');
  const date4 = new Date('1/26/2021');

  // today's date
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  let nextTuesday = getNextDayOfWeek(new Date(), 2);

  const diffTime1 = Math.abs(nextTuesday - date1);
  const diffDays1 = Math.ceil(diffTime1 / (1000 * 60 * 60 * 24));

  const diffTime2 = Math.abs(nextTuesday - date2);
  const diffDays2 = Math.ceil(diffTime2 / (1000 * 60 * 60 * 24));

  const diffTime3 = Math.abs(nextTuesday - date3);
  const diffDays3 = Math.ceil(diffTime3 / (1000 * 60 * 60 * 24));

  const diffTime4 = Math.abs(nextTuesday - date4);
  const diffDays4 = Math.ceil(diffTime4 / (1000 * 60 * 60 * 24));
  // console.log(diffTime + ' milliseconds');
  // console.log(diffDays + ' days');

  try {
    if (diffTime1 % 28 === 0) {
      return ctx.reply(`${order1.join(', ')}`);
    } else if (diffTime1 % 35 === 0) {
      return ctx.reply(`${order2.join(', ')}`);
    } else if (diffTime1 % 42 === 0) {
      return ctx.reply(`${order2.join(', ')}`);
    } else if (diffTime1 % 49 === 0) {
      return ctx.reply(`${order2.join(', ')}`);
    } else {
      return ctx.reply('Theres a bug yo.');
    }

    // switch (diffTime1) {
    //   case 28:
    //     return ctx.reply(`${order1.join(', ')}`);
    //     break;
    //   case 35:
    //     return ctx.reply(`${order2.join(', ')}`);
    //     break;
    //   case 42:
    //     return ctx.reply(`${order3.join(', ')}`);
    //     break;
    //   case 49:
    //     return ctx.reply(`${order4.join(', ')}`);
    //     break;
    // }
  } catch (e) {
    return ctx.reply(`Error occured`);
  }
};
