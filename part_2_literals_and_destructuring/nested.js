const hours = 14;
const event = 'meeting';

console.log(`The ${event} will happen ${hours < 12 ? 'in the morning' :
  `later in the day, in the ${hours < 20 ? 'evening' : 'night'}`}.`);

const when = (hrs) =>
  hrs < 12 ? 'in the morning' :
    `later in the day, in the ${hrs < 20 ? 'evening' : 'night'}`;

console.log(`The ${event} will happen ${when(hours)}.`);