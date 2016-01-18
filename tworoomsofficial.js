if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      //change this to a function that plays the sound and use music file
      var s = new buzz.sound('/sounds/truck.ogg', {
          loop: true
      });
      var played = s.play();
          played.play();
      console.log(played);
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
      var s = new buzz.sound('/sounds/truck.ogg');
      var played = s.play();
          played.play();
      console.log(played);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
