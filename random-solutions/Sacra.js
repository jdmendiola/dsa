const users = [
  {
      'name': 'Jeff'
  },
  {
      'name': 'Kim',
      'referredBy': 'Jeff'
  },
  {
      'name': 'Katie',
      'referredBy': 'Kim'
  },
  {
      'name': 'Rebecca',
      'referredBy': 'Jeff'
  },
  {
      'name': 'Arthur',
      'referredBy': 'Cassandra'
  },
  {
      'name': 'Cassandra'
  }
];

// 1. Output a list of all organic users.
let organicUsers = users.filter(value => {
  if (!value.hasOwnProperty('referredBy')){
      return true;
  } else {
      return false;
  }
  
});

//console.log(organicUsers);

// 2. Write a function that returns ALL of a user's referrals (both direct and indirect)

function getReferrals(name, users){
    
    let referrals = [];

    function findReferrals(name){
        users.forEach(element => {
            if (element.referredBy === name){
                referrals.push(element.name);
                findReferrals(element.name);
            }
        });
    }

    findReferrals(name);

    return referrals;

}

console.log(getReferrals('Jeff', users));

// 3. Output a map of each user to ALL their referrals (both direct and indirect)

/*

{
    'Jeff': [Kim, Katie, Rebecca],
    'Kim': [Katie],
    'Katie': [],
    'Rebecca': [],
    'Arthur': [],
    'Cassandra': [Arthur]
}

*/

let refMap = {}

users.forEach(element => {
    if (!refMap[element.name]){
        refMap[element.name] = [];
    }
    
    refMap[element.name] = getReferrals(element.name, users);
});

console.log(refMap);
console.log(refMap['Jeff']);
