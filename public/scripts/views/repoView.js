'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#project');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };


  let render = Handlebars.compile($('#repo-template').text());
  repoView.index = function() {
    ui();
    repoView.myProject = app.Project.filtered
    // .filter(repos=>repos.name.match(/^\D/g))
    // .filter(repos=>repos.owner.login == "han8909227")
    // .filter(repos=>repos.name.match(/^(?!learning).*/));

    $('#project').append(
      repoView.myProject.map(render))
  };

  module.repoView = repoView;
})(app);
