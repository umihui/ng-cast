angular.module('video-player')
.service('youTube', function($http) {

  this.search = function(query) {
    console.log(query);
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        q: 'cat',
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        maxResults: 5
      }
    }).then (
      function successCallback(data) {
        console.log('success', data);

    },
        

      function errorCallback(data) {
        console.error('failed');
      }
    );
  };

  
});
