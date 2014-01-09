var users = [
  { 
    picture: 'http://placehold.it/90x90', 
    name: 'William Oliveira', 
    ocupation: 'Freelance Web Developer',
    email: 'sudowilliam@gmail.com'
   },
   { 
    picture: 'http://placehold.it/90x90', 
    name: 'Darth Vader', 
    ocupation: 'Sith Lord',
    email: 'vader@gmail.com'
   },
   { 
    picture: 'http://placehold.it/90x90', 
    name: 'Luke Skywalker', 
    ocupation: 'Jedi Knight',
    email: 'sudowilliam@gmail.com'
   },
   { 
    picture: 'http://placehold.it/90x90', 
    name: 'Han Solo', 
    ocupation: 'Pilot',
    email: 'solo@gmail.com'
   }
];

App.factory('User', [
  function() {
    return {
      query: function() {
        return users;
      }
    }
  }
]);