$(function(){
	var video = document.querySelector("#vid");
	var canvas = document.querySelector('#canvas');
	var ctx = canvas.getContext('2d');
	var booth_canvas = document.querySelector('#booth');
	var booth_ctx = booth_canvas.getContext('2d');
	var localMediaStream = null;

	window.onCameraFail = function (e) {
		console.log('Camera did not work.', e);
	};

	window.snapshot=function() {
			ctx.drawImage(booth_canvas, 0, 0,100,100);
	};
	window.bothRefresh = function(){
		if (localMediaStream) {
			booth_ctx.drawImage(video, 0, 0,400,400,0,0,400,400);
		}
			setTimeout(window.bothRefresh,100);
	};
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
	window.URL = window.URL || window.webkitURL;
	navigator.getUserMedia({video:true}, function (stream) {
		video.src = window.URL.createObjectURL(stream);
		localMediaStream = stream;
	}, window.onCameraFail);

	window.bothRefresh();

});
