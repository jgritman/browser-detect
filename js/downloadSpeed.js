(function() {

	// code from http://stackoverflow.com/questions/5529718/how-to-detect-internet-speed-in-javascript/5529841#5529841
	var init = false;
	var imageAddr = "img/treebeard.jpg" + "?n=" + Math.random();
	var startTime, endTime;
	var downloadSize = 17535;
	var download = new Image();
	var downloadDuration = null;

	var speedBps = function() {
		var bitsLoaded = downloadSize * 8;
		return (bitsLoaded / downloadDuration).toFixed(2);
	}

	var speedKbps = function() {
		return (speedBps() / 1024).toFixed(2);
	}

	var speedMbps = function() {
		return (speedKbps() / 1024).toFixed(2);
	}

	download.onload = function () {
	    endTime = (new Date()).getTime();
	    downloadDuration = (endTime - startTime) / 1000;
	    //TODO find a way to expose this as an api
	    $('#connectionSpeedText').html(speedMbps() + " Mbps")
	}
	startTime = (new Date()).getTime();
	download.src = imageAddr;



})();