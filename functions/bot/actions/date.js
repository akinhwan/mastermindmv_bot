module.exports = (ctx) => {
  const { order1 } = ['Andrew', 'Ben', 'Sebastien', 'Ethan']; // 2/2/2021
  const { order2 } = ['Ben', 'Sebastien', 'Ethan', 'Andrew']; // 2/9/2021
  const { order3 } = ['Sebastien', 'Ethan', 'Andrew', 'Ben']; // 2/16/2021
  const { order4 } = ['Ethan', 'Andrew', 'Ben', 'Sebastien']; // 2/23/2021

  const date1 = new Date('2/2/2021');
  const date2 = new Date('2/9/2021');
  const date3 = new Date('2/16/2021');
  const date4 = new Date('2/23/2021');

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  const diffTime = Math.abs(today - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  // console.log(diffTime + ' milliseconds');
  // console.log(diffDays + ' days');

  try {
    return ctx.reply('date function test');
  } catch (e) {
    return ctx.reply(`Error occured`);
  }
};
