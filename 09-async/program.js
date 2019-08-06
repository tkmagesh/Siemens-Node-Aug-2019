function f1Sync(){
	console.log('f1Sync Started');
	console.log('f1Sync Completed');
}

function f2Sync(){
	console.log('f2Sync Started');
	console.log('f2Sync Completed');
}

function f3Sync(){
	console.log('f3Sync Started');
	console.log('f3Sync Completed');
}

function f4Sync(){
	console.log('f4Sync Started');
	console.log('f4Sync Completed');
}

function runSync(){
	f1Sync();
	f2Sync();
	f3Sync();
	f4Sync();
}

module.exports['runSync'] = runSync;

function f1Async(){
	console.log('f1Async Started');
	setTimeout(function(){
		console.log('f1Async Completed');
	}, 2000)
}

function f2Async(){
	console.log('f2Async Started');
	setTimeout(function(){
		console.log('f2Async Completed');
	}, 5000)
}

function f3Async(){
	console.log('f3Async Started');
	setTimeout(function(){
		console.log('f3Async Completed');
	}, 1000)
}

function f4Async(){
	console.log('f4Async Started');
	setTimeout(function(){
		console.log('f4Async Completed');
	}, 3000)
}

function runAsync(){
	f1Async();
	f2Async();
	f3Async();
	f4Async();
}

module.exports['runAsync'] = runAsync;

