var url = require('url')
		, request = require('request')
		
module.exports = function(host, title, message, cb) {
	var	qs = {
			jsonrpc:"2.0",
			method:"GUI.ShowNotification",
			params:{
				title: title,
				message: message
			},"id":1
		}
  var dets = JSON.stringify(qs).replace(/"/g, "%22")
  var endpoint = url.resolve(host, '/jsonrpc?request=' + dets);
	request(endpoint, cb)

}

