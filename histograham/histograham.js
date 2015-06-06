//Helper functions
//
CalledWords = new Meteor.Collection("CalledWords");
Words=["Execute", "Collaborate", "Candid", "Forward"];

Router.route('/', function () {
  this.render('main');
});
Router.route('/howtoplay', function () {
  this.render('howtoplay');
});
Router.route('/halloffame', function () {
  this.render('halloffame');
});
Router.route('/hallofshame', function () {
  this.render('hallofshame');
});

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.buttons.helpers({
    list: [ 
      {word:"Execute", count:0},
      {word:"Collaborate", count:0},
      {word:"Candid", count:0},
      {word:"Forward", count:0}
  ]
  });

  Template.chart.helpers({
    generateChart : function() {
      var x = document.createElement('canvas');
      x.id = 'histogram';
      console.log("made the canvas")
      return Handlebars.SafeString(x.innerHTML);
    }
  });

  Template.chart.onRendered(function() {
      console.log("making a chart");
      var data = {
        labels:Words,
        datasets:[
        {
          label: "dataset_one",
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: [4,3,12,10]
        },
        {
          label: "dataset_two",
          fillColor: "rgba(151,187,205,0.5)",
          strokeColor: "rgba(151,187,205,0.8)",
          highlightFill: "rgba(151,187,205,0.75)",
          highlightStroke: "rgba(151,187,205,1)",
          data: [3,1,10,5]
        }
        ]
      };
      var ctx = $("#histogram").get(0).getContext('2d');
      var myBarChart = new Chart(ctx).Bar(data);
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
