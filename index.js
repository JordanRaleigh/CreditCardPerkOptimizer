const mongoose = require('mongoose');
const Card = require('./models/Card');

mongoose.connect(
  'mongodb://127.0.0.1:27017/churnit?retryWrites=true&w=majority',
  (e) => {
    if (e) return console.log('Db could not connect');
    console.log('db connected');

    addCard('Chase', 'Sapphire', 'Visa', 'personal', [
      {
        points: 3,
        category: 'alcohol',
      },
    ]);
  }
);

const addCard = async (issuer, name, network, useType, perks, others) => {
  // perks --> [  {  category : String  , points :   number    }   ]

  var card = new Card({
    issuer: issuer,
    name: name,
    network: network,
    useType: useType,
    perks: perks,
  });

  console.log(await card.save());
};
