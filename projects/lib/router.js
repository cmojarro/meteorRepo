Router.configure({
layoutTemplate: 'projects'
//layoutTemplate: 'projects'

});
//Router.route('/', {name: 'projects'});
Router.route('/', {'/':'homepage','/projects':'projects', '/employees':'employees'});
//Router.route('/', {name: 'projects'});
// Meteor.Router.add({'/':'homepage','/projects':'projects', '/employees':'employees'})