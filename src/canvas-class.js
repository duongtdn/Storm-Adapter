/* -------------------------------------------------------------------------------------------------
   PROJECT     : STORM ADAPTER
   MODULE      : Canvas-class
   AUTHOR      : DuongTDN
   DESCRIPTION :

   -----------------------------------------------------------------------------------------------*/

(function(){
	
	var DEFAULTCANVAS = 'storm-canvas';
	
	Storm.Canvas = fabric.util.createClass(fabric.Canvas, {
		
		type : "StormCanvas",
		
		initialize : function() {
			var id = DEFAULTCANVAS,
			    prop;			
			if (arguments.length == 1) {
					if (typeof arguments[0] == 'string') {
						id = arguments[0] || DEFAULTCANVAS;
					} else if (typeof arguments[0] == 'object') {
						prop = arguments[0];
						id = prop.id || DEFAULTCANVAS;
					} else {
						console.log ("# ERROR : Storm.Canvas: invalid arguments");
						return;
					}
			} else if (arguments.length > 1) {
				id = arguments[0] || DEFAULTCANVAS;
				prop = arguments[1] || {};
			}
			
			this.callSuper('initialize',id,prop);
			
		}
		
	});
	
})();