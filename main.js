console.log('extension loaded');

var targetNode = document.body;

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true };

// Callback function to execute when mutations are observed
var callback = function(mutationsList) {
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList') {
            console.log('A child node has been added or removed.');
            removeSig();
        }
        else if (mutation.type == 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

document.addEventListener('paste', function (e) {
	//console.log('paste event');
	setTimeout(function() {
	    removeSig();
	}, 500);
}, false);

// Later, you can stop observing
function removeSig(){

	var element = document.getElementsByClassName('mt-signature');
	lngth = element.length;
	console.log("entered removeSig");
	console.log(lngth);
	if(lngth > 0){
		for(i=0; i<lngth; i++){
			console.log(i);
			element[0].parentNode.removeChild(element[0]);
		}
	}	
}