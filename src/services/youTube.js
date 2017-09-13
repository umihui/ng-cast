angular.module('video-player')
.service('youTube', function($http, $window) {

  this.search = function(query, callback, failback) {
    $http.get('https://www.googleapis.com/youtube/v3/search',{
      params: {
        q: query,
        part: 'snippet',
        type: 'video',
        key: window.YOUTUBE_API_KEY,
        maxResults: 5,
        videoEmbeddable: 'true'
      }
    }).then (
      function successCallback({data}) {
        callback(data.items);

    }, function errorCallback({data}) {
        failback();
    });

  };


});
