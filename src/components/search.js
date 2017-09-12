angular.module('video-player')

.component('search', {


  controller: function(youTube) {
    this.result = youTube.search;



  },
  // TODO
  templateUrl: 'src/templates/search.html'
});
