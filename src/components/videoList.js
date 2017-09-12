angular.module('video-player')
.component('videoList', {
 
  bindings: {
    videos: '<',
    onClick: '<'
  },
  // TODO
  controller: function() {
    console.log(this)
    // this.onClick = () => {

    //console.log('list', this);
    // };
    

  },
  
  templateUrl: 'src/templates/videoList.html'
});
