'use strict';

const createPlayMethodProxy = function(instance) {
  const handler = {
    get: function(target, property) {
      if (property.startsWith("play")) {
        const activity = property.substring(4);

        if (instance.activities.includes(activity)) {
          return () => `I love to play ${activity}`
        } else {
          return () => `I don't love play ${activity}`;
        }
      } else {
        throw new Error(`${property} is not a function`);
      }
    }
  };

  return new Proxy(instance, handler);
};

const proxy = createPlayMethodProxy({ activities: ['Football', 'Tennis'] });

console.log(proxy.playTennis());    // I love to play Tennis
console.log(proxy.playFootball());  // I love to play Football
console.log(proxy.playPolitics());  // I don't play Politics

try {
  console.log(proxy.dance());
} catch(ex) {
  console.log(ex.message); // dance is not a function
}
