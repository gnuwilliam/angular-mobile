App.factory('User', [
  function() {
    return {
      query: function() {
        return users;
      }
    }
  }
]);