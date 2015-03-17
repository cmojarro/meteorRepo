Meteor.subscribe('posts', 'bob-smith');

Template.posts.helpers({
posts: function(){
return Posts.find({author: 'bob-smith', category: 'JavaScript'});
}
});

Meteor.publish('allPosts', function(){
return Posts.find();
});