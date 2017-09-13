angular.module('video-player')

.component('search', {

  bindings: {
    onUpdate: '<',
    onFail: '<'
  },


  controller: function(youTube) {
    this.result = () => {
      youTube.search(this.input, this.onUpdate, this.onFail);

    }

  },
  // TODO
  templateUrl: 'src/templates/search.html'
});
