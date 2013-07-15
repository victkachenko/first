function Draggable() {
	var draggable = null;
	
	this.capture = function (event) {
		if(!draggable) {
			draggable = this;
		}
	};
	
	this.release = function () {
		draggable = null;
	};
	
	this.move = function (event) {
		if(draggable) {
			draggable.style.left = event.pageX - 20 + "px"; 
			draggable.style.top = event.pageY - 20 + "px";  // Style in controller © Cap
		}
	};
}