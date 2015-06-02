//Helper functions


if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.chart.helpers({
    generateChart: function() {
      console.log("making a chart");
      var data = {
        labels:["Execute", "Collaborate", "Candid", "Forward"],
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
      //var ctx = $("#histogram").get(0).getContext("2d");
      var ctx = document.getElementByID('histogram').getContext('2d');
      var myBarChart = new Chart(ctx).Bar(data,options);
    }
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
