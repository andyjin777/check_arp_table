var arp = require('node-arp');
var network = require('network');

network.get_gateway_ip(function(err, ip) {
	arp.getMAC((err||ip), function(err, mac) {

		var my_mac = mac;

		setInterval(function() {
			arp.getMAC((err||ip), function(err, mac) {
		    	if (!err) {
		    		if(my_mac != mac) {
		    			console.log("CHANGE!!");
		    		}
		    	}
		    });
		}, 1000);
	});
})