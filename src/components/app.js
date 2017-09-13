angular.module('video-player')

.component('app', {

  controller: function() {
    this.selectVideo = function() {};

    this.searchResults = (videos) => {
      this.videos = videos;
      this.currentVideo = this.videos[0];
    };

    this.onClick = (video) => {
      this.currentVideo = video;
    };

    this.searchResults(window.exampleVideoData);

    this.failCallBack = () => {
      this.currentVideo = undefined;
      this.videos = window.exampleVideoData;
    }
  },

  // TODO
  templateUrl: 'src/templates/app.html'
});
