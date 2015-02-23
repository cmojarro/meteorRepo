if (Meteor.isServer) 
{
Projects = new Meteor.Collection('projects');
Meteor.startup(funciton(){});	
}