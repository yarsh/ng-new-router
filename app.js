angular
  .module('myapp', [
    'ngNewRouter',
    'myapp.home',
    'myapp.users'
  ])

.config(function ($componentLoaderProvider) {
  $componentLoaderProvider.setTemplateMapping(function (name) {
    // name is component name
    return name + '.tpl.html';
  });
})