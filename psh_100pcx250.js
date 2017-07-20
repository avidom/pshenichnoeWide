(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 2000,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/arrow2.png", id:"arrow2"},
		{src:"images/bgWide.jpg", id:"bgWide"},
		{src:"images/bottle.png", id:"bottle"},
		{src:"images/bottleGlow.png", id:"bottleGlow"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,491,300);


(lib.arrow2 = function() {
	this.initialize(img.arrow2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,463,300);


(lib.bgWide = function() {
	this.initialize(img.bgWide);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,300);


(lib.bottle = function() {
	this.initialize(img.bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,564);


(lib.bottleGlow = function() {
	this.initialize(img.bottleGlow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,662);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiRFXIAAqtIEjAAIAABiIi3AAIAADAICRAAIAABfIiRAAIAADKIC3AAIAABig");
	this.shape.setTransform(155.3,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABQFXIgTh9IiDAAIgSB9IhjAAIBtqtICdAAIBtKtgAg4B9IBmAAIgylZg");
	this.shape_1.setTransform(118.7,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA8FXIAAknIh5AAIAAEnIhsAAIAAqtIBsAAIAAEmIB5AAIAAkmIBuAAIAAKtg");
	this.shape_2.setTransform(79.8,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA7FXIAAkVQgSAUgaAJQgYAJgXAAQhCAAgigsQghgrgBhEIAAkjIBsAAIAAEaQAAAiATARQATAOAXAAQAZAAAQgQQAPgSAAgiIAAkXIBrAAIAAKtg");
	this.shape_3.setTransform(40.2,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0FXIAAqtIBqAAIAAKtg");
	this.shape_4.setTransform(13,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA8FXIAAknIh5AAIAAEnIhsAAIAAqtIBsAAIAAEmIB5AAIAAkmIBuAAIAAKtg");
	this.shape_5.setTransform(-15.3,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABPFXIgSh9IiDAAIgTB9IhiAAIBuqtICbAAIBuKtgAg4B9IBmAAIgxlZg");
	this.shape_6.setTransform(-54.1,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Aj9FXIAAqtIBsAAIAAJLIBcAAIAApLIBqAAIAAJLIBeAAIAApLIBsAAIAAKtg");
	this.shape_7.setTransform(-101.5,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA8FXIAApLIh5AAIAAJLIhsAAIAAqtIFTAAIAAKtg");
	this.shape_8.setTransform(-149.8,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.8,-53,345.6,106);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhsD/IAAn9IDZAAIAABJIiJAAIAACOIBsAAIAABHIhsAAIAACWICJAAIAABJg");
	this.shape.setTransform(128.7,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA7D/IgNhcIhhAAIgPBcIhJAAIBSn9IBzAAIBSH9gAgpBdIBLAAIglkAg");
	this.shape_1.setTransform(102,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAsD/IAAjbIhZAAIAADbIhQAAIAAn9IBQAAIAADbIBZAAIAAjbIBSAAIAAH9g");
	this.shape_2.setTransform(73.5,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABUEhIAAhEIipAAIAABEIhOAAIAAiMIAfAAQAKgOAEgOQAFgQABgXIASlzIDfAAIAAG2IAjAAIAACMgAghBRQgCAegGAOQgEAPgLAJIBnAAIAAltIhCAAg");
	this.shape_3.setTransform(42,5.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhnD/IAAhIQAfACASgHQARgJAFgbIABgFIhvmIIBQAAIAsCvIAWB2IATh2IAkivIBVAAIhXF7QgHAjgLAZQgKAagSARQgQAQgcAIQgUAFgaAAIgYgBg");
	this.shape_4.setTransform(11.5,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA7D/IgOhcIhhAAIgOBcIhJAAIBSn9IBzAAIBSH9gAgpBdIBLAAIglkAg");
	this.shape_5.setTransform(-16.3,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah2D/IAAn9IB2AAQA7AAAeAgQAeAgAAA/IAABCQAAA9geAfQgeAgg7AAIglAAIAADAgAglgIIAlAAQASAAAKgKQAKgKAAgdIAAhMQAAgbgKgKQgKgLgSAAIglAAg");
	this.shape_6.setTransform(-41.8,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAsD/IAAm0IhZAAIAAG0IhQAAIAAn9ID7AAIAAH9g");
	this.shape_7.setTransform(-70.2,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA7D/IgOhcIhhAAIgOBcIhJAAIBSn9IBzAAIBSH9gAgpBdIBLAAIglkAg");
	this.shape_8.setTransform(-98.6,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhYDkQgeghAAg+IAAkIQAAg+AeghQAegiA6AAQA7AAAeAiQAeAhAAA+IAAAyIhMAAIAAg3QAAgcgLgLQgLgMgTAAQgRAAgLAMQgMALAAAcIAAESQAAAbAMALQALAMARAAQATAAALgMQALgLAAgbIAAhJIBMAAIAABEQAAA+geAhQgeAhg7AAQg6AAgeghg");
	this.shape_9.setTransform(-125.5,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag+ASQgUgUgBglIAxAAQACAVAIAGQAJAHAPAAQAPAAAKgHQAJgGACgVIAwAAQAAAlgVAUQgVAWgqAAQgpAAgVgWg");
	this.shape_10.setTransform(13,-31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.7,-40,283.5,80);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoCvIgJhAIhCAAIgJBAIgzAAIA4lcIBPAAIA4FcgAgcA/IAzAAIgYiug");
	this.shape.setTransform(160.4,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhHCvIAAlcICPAAIAAAxIhYAAIAAErg");
	this.shape_1.setTransform(142.8,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAoCvIgJhAIhCAAIgJBAIgzAAIA4lcIBPAAIA4FcgAgcA/IAzAAIgYiug");
	this.shape_2.setTransform(124.8,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeCvIAAiXIg8AAIAACXIg3AAIAAlcIA3AAIAACWIA8AAIAAiWIA4AAIAAFcg");
	this.shape_3.setTransform(105.5,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeCvIAAiOQgJAKgNAGQgMAEgLAAQgiAAgSgWQgRgXAAgiIAAiTIA3AAIAACPQAAASAKAIQAJAHALAAQANgBAIgGQAIgKAAgRIAAiOIA3AAIAAFcg");
	this.shape_4.setTransform(85.7,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaCvIAAlcIA1AAIAAFcg");
	this.shape_5.setTransform(72.3,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeCvIAAiXIg8AAIAACXIg3AAIAAlcIA3AAIAACWIA8AAIAAiWIA4AAIAAFcg");
	this.shape_6.setTransform(58.4,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAoCvIgJhAIhCAAIgJBAIgzAAIA4lcIBPAAIA4FcgAgcA/IAzAAIgYiug");
	this.shape_7.setTransform(39,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiBCvIAAlcIA3AAIAAEpIAwAAIAAkpIA1AAIAAEpIAwAAIAAkpIA3AAIAAFcg");
	this.shape_8.setTransform(15.4,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAeCvIAAkrIg8AAIAAErIg3AAIAAlcICrAAIAAFcg");
	this.shape_9.setTransform(-8.8,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAoCvIgJhAIhCAAIgJBAIgzAAIA4lcIBPAAIA4FcgAgcA/IAzAAIgYiug");
	this.shape_10.setTransform(-34.4,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhHCvIAAlcICPAAIAAAxIhYAAIAAErg");
	this.shape_11.setTransform(-52,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAoCvIgJhAIhCAAIgJBAIgzAAIA4lcIBPAAIA4FcgAgcA/IAzAAIgYiug");
	this.shape_12.setTransform(-70,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAiCvIgziMIgRAgIAABsIg3AAIAAlcIA3AAIAACYIBGiYIA2AAIhMCbIBMDBg");
	this.shape_13.setTransform(-88.3,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag8CcQgVgXAAgrIAAi0QAAgqAVgXQAVgWAngBQAoABAVAWQAUAXAAAqIAAAiIg0AAIAAglQAAgTgHgHQgIgJgNAAQgLAAgIAJQgIAHAAATIAAC7QAAATAIAIQAIAHALAAQANAAAIgHQAHgIAAgTIAAgyIA0AAIAAAuQAAArgUAXQgVAWgoAAQgnAAgVgWg");
	this.shape_14.setTransform(-107.4,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA6DGIAAgvIh0AAIAAAvIg1AAIAAhgIAVAAQAHgJADgKQADgLABgPIAMj+ICYAAIAAErIAYAAIAABggAgWA4QgBATgEAKQgEALgHAGIBGAAIAAj5IgsAAg");
	this.shape_15.setTransform(-128,3.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaCvIAAlcIA1AAIAAFcg");
	this.shape_16.setTransform(-143.3,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhiCvIAAgyIAQgBQAGgBAEgEQAEgEACgHQACgHAAgMIAJkHICaAAIAAFcIg4AAIAAkqIguAAIgGDSQgCAwgSAUQgTAVgpAAg");
	this.shape_17.setTransform(-158.7,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.2,-28,342.4,56.1);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlDVIAAj0IgWBUIgsCgIg5AAIAAlcIAxAAIAADcIAUhNIAriPIA9AAIAAFcgAgpisQgNgPgBgZIAiAAQABAOAGAEQAFAFAJgBQAMABAGgFQAGgEABgOIAiAAQAAAZgPAPQgOAPgeAAQgbAAgOgPg");
	this.shape.setTransform(148.9,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAoCuIgJg/IhCAAIgJA/IgzAAIA4lcIBPAAIA4FcgAgcBAIAzAAIgYiwg");
	this.shape_1.setTransform(129.5,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhQCuIAAlcIBQAAQAoAAAVAXQAUAVAAArIAAAtQAAAqgUAVQgVAWgoAAIgZAAIAACDgAgZgFIAZAAQAMAAAHgHQAHgHAAgTIAAg0QAAgUgHgGQgHgIgMABIgZAAg");
	this.shape_2.setTransform(112.1,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiCuIgziLIgRAgIAABrIg3AAIAAlcIA3AAIAACZIBGiZIA3AAIhNCdIBNC/g");
	this.shape_3.setTransform(93.9,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhGCuIAAgxQAVACAMgGQAMgFADgTIABgDIhMkMIA3AAIAdB3IAPBQIAOhPIAYh4IA6AAIg7EDQgFAXgHASQgIASgLALQgLALgTAFQgOAEgSAAIgQgBg");
	this.shape_4.setTransform(67.9,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNCbQgVgWAAgqIAAhCIgpAAIAACVIg3AAIAAlcIA3AAIAACWIApAAIAAhBQAAgrAVgXQAUgXAoABQApgBAVAXQAWAXAAArIAAC0QAAAqgWAWQgVAYgpAAQgoAAgUgYgAAbh4QgIAIAAATIAAC7QAAATAIAIQAHAHANAAQANAAAIgHQAIgIAAgTIAAi7QAAgTgIgIQgIgHgNgBQgNABgHAHg");
	this.shape_5.setTransform(38.1,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaCuIAAlcIA1AAIAAFcg");
	this.shape_6.setTransform(19.7,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8CbQgVgWAAgqIAAi0QAAgrAVgXQAVgXAnABQAogBAVAXQAUAXAAArIAAAhIg0AAIAAglQAAgTgHgIQgIgHgNgBQgLABgIAHQgIAIAAATIAAC7QAAATAIAHQAIAIALAAQANAAAIgIQAHgHAAgTIAAgyIA0AAIAAAvQAAAqgUAWQgVAYgoAAQgnAAgVgYg");
	this.shape_7.setTransform(6.9,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhQCuIAAlcIBQAAQApAAAUAXQAUAVAAArIAAAtQAAAqgUAVQgUAWgpAAIgZAAIAACDgAgZgFIAZAAQAMAAAHgHQAHgHAAgTIAAg0QAAgUgHgGQgHgIgMABIgZAAg");
	this.shape_8.setTransform(-10.1,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhGCuIAAgxQAVACAMgGQAMgFADgTIABgDIhMkMIA2AAIAeB3IAPBQIAOhPIAYh4IA6AAIg7EDQgFAXgHASQgIASgLALQgLALgTAFQgOAEgSAAIgQgBg");
	this.shape_9.setTransform(-28.9,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAiCuIgziLIgSAgIAABrIg2AAIAAlcIA2AAIAACZIBGiZIA3AAIhMCdIBMC/g");
	this.shape_10.setTransform(-47.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag8CbQgVgWAAgqIAAi0QAAgrAVgXQAVgXAnABQAogBAUAXQAWAXgBArIAAAhIgzAAIAAglQgBgTgHgIQgIgHgNgBQgLABgIAHQgHAIgBATIAAC7QABATAHAHQAIAIALAAQANAAAIgIQAHgHABgTIAAgyIAzAAIAAAvQABAqgWAWQgUAYgoAAQgnAAgVgYg");
	this.shape_11.setTransform(-66.4,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAiCuIgziLIgRAgIAABrIg3AAIAAlcIA3AAIAACZIBGiZIA2AAIhMCdIBMC/g");
	this.shape_12.setTransform(-84.2,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag8CbQgVgWAAgqIAAgqIA0AAIAAAtQAAATAJAHQAHAIANAAQALAAAIgIQAIgHgBgTIAAhLIgwAAIAAgxIAwAAIAAg/QABgTgIgIQgIgHgLgBQgNABgHAHQgJAIAAATIAAAhIgzAAIAAgdQAAgrAVgXQAUgXAnABQAogBAVAXQAUAXAAArIAAC0QAAAqgUAWQgVAYgoAAQgnAAgVgYg");
	this.shape_13.setTransform(-103.6,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAoCuIgJg/IhCAAIgJA/IgzAAIA4lcIBPAAIA4FcgAgcBAIAzAAIgYiwg");
	this.shape_14.setTransform(-128.1,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAeCuIAAiVIg8AAIAACVIg3AAIAAlcIA3AAIAACWIA8AAIAAiWIA4AAIAAFcg");
	this.shape_15.setTransform(-147.4,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgqAMQgNgNgBgZIAhAAQACAOAFAEQAGAFAKAAQAKAAAHgFQAGgEABgOIAhAAQAAAZgOANQgOAPgdAAQgcAAgOgPg");
	this.shape_16.setTransform(68.4,-21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.2,-28,320.4,56.1);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAjDOIAAioIgWAAQgVAAgJALQgKANAAAdIAABBIgBAUIgBAOIgCAIIgCAIIhCAAQAEgMABgLQACgMAAgPIAAhAQAAggAJgXQAJgXAZgKQgrgSAAg/IAAghQAAgwAXgYQAXgXAwAAIBiAAIAAGbgAgTiIQgIAKAAAXIAAAoQAAAZALAJQAKAKAQAAIAZAAIAAh/IgfAAQgPAAgIAKg");
	this.shape.setTransform(120.5,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhHC4QgYgbAAgyIAAjVQAAgyAYgbQAZgaAugBQAwABAYAaQAYAbAAAyIAAAoIg9AAIAAgsQAAgXgJgIQgJgJgPAAQgOAAgJAJQgJAIAAAXIAADdQAAAXAJAIQAJAJAOAAQAPAAAJgJQAJgIAAgXIAAg7IA9AAIAAA3QAAAygYAbQgYAbgwAAQguAAgZgbg");
	this.shape_1.setTransform(100,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhXDOIAAmbICvAAIAAA7IhuAAIAABzIBXAAIAAA5IhXAAIAAB5IBuAAIAAA7g");
	this.shape_2.setTransform(80.1,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA1DqIAAg4IioAAIAAmbIBBAAIAAFgIBIAAIAAlgIBCAAIAAFhIAcAAIAAByg");
	this.shape_3.setTransform(58,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAsD8IAAkhIgaBjIg1C+IhDAAIAAmbIA7AAIAAEEIAXhbIAzipIBHAAIAAGbgAgwjLQgQgSgCgeIApAAQABARAGAFQAIAFALAAQANAAAHgFQAIgFABgRIAnAAQABAegSASQgRASgiAAQghAAgQgSg");
	this.shape_4.setTransform(33.4,-3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhTDOIAAg6QAZACAOgHQAOgGAFgWIAAgEIhak9IBBAAIAjCNIASBfIAPheIAeiOIBEAAIhGEyQgGAcgIAVQgJAVgOANQgNANgWAGQgQAFgWAAIgTgBg");
	this.shape_5.setTransform(10.7,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhfDOIAAmbIBfAAQAwAAAYAaQAYAaAAAyIAAA2QAAAxgYAZQgYAagwgBIgeAAIAACcgAgegGIAeAAQAOAAAJgIQAIgJAAgWIAAg+QAAgXgIgIQgJgIgOAAIgeAAg");
	this.shape_6.setTransform(-9.6,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfDOIAAlgIhEAAIAAg7IDHAAIAAA7IhEAAIAAFgg");
	this.shape_7.setTransform(-30.1,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhHC4QgYgbAAgyIAAjVQAAgyAYgbQAZgaAugBQAwABAYAaQAYAbAAAyIAAAoIg9AAIAAgsQAAgXgJgIQgJgJgPAAQgOAAgJAJQgJAIAAAXIAADdQAAAXAJAIQAJAJAOAAQAPAAAJgJQAJgIAAgXIAAg7IA9AAIAAA3QAAAygYAbQgYAbgwAAQguAAgZgbg");
	this.shape_8.setTransform(-49.8,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfDOIAAmbIA/AAIAAGbg");
	this.shape_9.setTransform(-64.9,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhUDOIAAmbICpAAIAAA7IhoAAIAAFgg");
	this.shape_10.setTransform(-79,1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhHC4QgYgbAAgyIAAgxIA9AAIAAA1QAAAXAJAIQAJAJAQAAQANAAAJgJQAJgIAAgXIAAhZIg5AAIAAg5IA5AAIAAhLQAAgXgJgIQgJgJgNAAQgQAAgJAJQgJAIAAAXIAAAnIg8AAIAAgjQAAgyAYgbQAXgaAvgBQAvABAZAaQAYAbAAAyIAADVQAAAygYAbQgZAbgvAAQgvAAgYgbg");
	this.shape_11.setTransform(-99.5,1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhfDOIAAmbIBfAAQAwAAAYAaQAYAaAAAyIAAA2QAAAxgYAZQgYAagwgBIgeAAIAACcgAgegGIAeAAQAOAAAJgIQAIgJAAgWIAAg+QAAgXgIgIQgJgIgOAAIgeAAg");
	this.shape_12.setTransform(-119,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-32.7,266.1,65.4);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABPFTIgTh7IiBAAIgTB7IhhAAIBsqlICbAAIBsKlgAg3B7IBkAAIgxlVg");
	this.shape.setTransform(205.2,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AijFTIAAqlIChAAQBRAAAlAmQAmAoAABOIAAAZQAAA0gRAiQgQAhgkARQArARASAjQASAlAAA2IAAA4QAABPgoApQgpAphRAAgAg5DyIA7AAQAcAAANgPQAPgOAAgmIAAg7QAAgwgQgRQgRgSgiAAIgwAAgAg5g9IAqAAQAcgBARgPQARgQAAgoIAAgmQAAglgNgRQgNgQgaAAIg0AAg");
	this.shape_1.setTransform(168.4,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0FTIAAqlIBpAAIAAKlg");
	this.shape_2.setTransform(140.8,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA7FTIAApEIh3AAIAAJEIhrAAIAAqlIFPAAIAAKlg");
	this.shape_3.setTransform(112.9,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiJFTIAAhfQApADAXgLQAXgKAHglIABgGIiUoKIBqAAIA7DoIAeCdIAZicIAxjpIBwAAIhzH4QgKAugOAiQgNAjgYAWQgWAWglAKQgbAGglAAIgdgBg");
	this.shape_4.setTransform(61.4,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABRFTIhVkNIhYENIhkAAIB3lbIhvlKIBuAAIBPD7IBSj7IBjAAIhwFKIB4Fbg");
	this.shape_5.setTransform(22.7,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA7FTIAAkUIglAAQgjAAgQATQgRATAAAwIAABqIAAAjIgCAWIgEAOIgEANIhsAAQAHgUACgTQADgSAAgaIAAhoQAAg1AOgmQAPglApgRQhGgeAAhqIAAg1QAAhOAlgoQAmgmBRAAIChAAIAAKlgAggjhQgNARAAAlIAABDQAAAoARAQQARAQAcAAIAqAAIAAjRIg0AAQgaAAgNAQg");
	this.shape_6.setTransform(-16.6,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai/FUIAAhiQASAAANgBQAMgDAHgGQAJgIACgOQAFgOAAgYIASn/IErAAIAAKmIhtAAIAApFIhaAAIgMGZQgDBdglAnQgkAohQABg");
	this.shape_7.setTransform(-56.7,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Aj7FTIAAqlIBrAAIAAJEIBcAAIAApEIBpAAIAAJEIBcAAIAApEIBrAAIAAKlg");
	this.shape_8.setTransform(-103.9,2.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABPFTIgTh7IiBAAIgTB7IhhAAIBsqlICbAAIBsKlgAg3B7IBkAAIgxlVg");
	this.shape_9.setTransform(-163.8,2.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA7FTIAApEIh3AAIAAJEIhrAAIAAqlIFPAAIAAKlg");
	this.shape_10.setTransform(-202.2,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-52.4,450.1,105);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhuEDIAAoFIDdAAIAABKIiLAAIAACRIBuAAIAABIIhuAAIAACXICLAAIAABLg");
	this.shape.setTransform(110.7,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABDElIAAhFIjUAAIAAoEIBSAAIAAG6IBaAAIAAm6IBTAAIAAG7IAkAAIAACOg");
	this.shape_1.setTransform(82.5,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnEDIAAoFIBPAAIAAIFg");
	this.shape_2.setTransform(59.9,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhZDnQgfgiABg/IAAg5IBMAAIAAA+QAAAdAMALQALALATAAQASABALgMQAMgMAAgjIAAgpQAAgkgNgPQgNgPgZABIgVAAIAAhIIAYAAQAVAAANgNQAOgLAAgfIAAgdQAAgjgMgMQgLgMgSAAQgTAAgMALQgMALAAAcIAAArIhKAAIAAgnQAAg+AdgiQAeggA7gBQA8AAAeAiQAfAiAAA/IAAANQAABTg5AXQAfAOANAaQANAbAAAoIAAApQAAA/gfAiQgeAhg8AAQg6AAgfghg");
	this.shape_3.setTransform(40.3,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABWElIAAhFIisAAIAABFIhPAAIAAiOIAfAAQALgNAEgQQAEgPABgXIATl4IDiAAIAAG7IAjAAIAACOgAgiBSQgBAegGAPQgFAPgLAJIBpAAIAAlxIhDAAg");
	this.shape_4.setTransform(9.4,5.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA3E8IAAlrIghB+IhCDtIhUAAIAAoEIBJAAIAAFGIAehyIBAjUIBaAAIAAIEgAg9j/QgUgXgBglIAyAAQABAUAJAHQAIAHAOAAQARAAAKgHQAJgHACgUIAxAAQAAAlgVAXQgWAWgsAAQgoAAgVgWg");
	this.shape_5.setTransform(-22.4,-4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA8EDIgOhfIhiAAIgPBfIhKAAIBToFIB1AAIBTIFgAgqBeIBMAAIglkEg");
	this.shape_6.setTransform(-51.3,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah3EDIAAoFIB3AAQA8ABAeAgQAeAhAAA+IAABEQAAA+geAfQgeAgg8AAIgmAAIAADEgAgmgIIAmAAQASAAAKgKQALgLAAgcIAAhOQAAgbgLgLQgKgLgSAAIgmAAg");
	this.shape_7.setTransform(-77.2,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAtEDIAAm7IhbAAIAAG7IhRAAIAAoFID/AAIAAIFg");
	this.shape_8.setTransform(-106,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.9,-40.5,247.9,81.1);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA3DtIgNhWIhaAAIgNBWIhEAAIBLnaIBsAAIBMHagAgnBWIBGAAIghjug");
	this.shape.setTransform(120.6,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhhDtIAAnaIDDAAIAABFIh4AAIAAGVg");
	this.shape_1.setTransform(95.6,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA3DtIgNhWIhaAAIgNBWIhEAAIBLnaIBsAAIBNHagAgmBWIBGAAIgijug");
	this.shape_2.setTransform(70.1,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AApDtIAAjLIhTAAIAADLIhLAAIAAnaIBLAAIAADMIBTAAIAAjMIBNAAIAAHag");
	this.shape_3.setTransform(42.7,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoDtIAAi/QgMANgRAHQgRAGgPAAQgvAAgXgeQgXgeAAgvIAAjKIBLAAIAADDQAAAZAMALQANAJAQAAQASAAAKgKQALgMgBgYIAAjCIBLAAIAAHag");
	this.shape_4.setTransform(14.8,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkDtIAAnaIBJAAIAAHag");
	this.shape_5.setTransform(-4.5,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AApDtIAAjLIhTAAIAADLIhLAAIAAnaIBLAAIAADMIBTAAIAAjMIBNAAIAAHag");
	this.shape_6.setTransform(-24.5,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA3DtIgNhWIhaAAIgNBWIhFAAIBNnaIBrAAIBMHagAgnBWIBGAAIghjug");
	this.shape_7.setTransform(-51.8,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AivDtIAAnaIBKAAIAAGXIBBAAIAAmXIBJAAIAAGXIBBAAIAAmXIBKAAIAAHag");
	this.shape_8.setTransform(-85.1,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AApDtIAAmVIhTAAIAAGVIhLAAIAAnaIDrAAIAAHag");
	this.shape_9.setTransform(-119,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.5,-37.4,271.2,74.8);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAvDtIhHi9IgXAsIAACRIhLAAIAAnaIBLAAIAADQIBgjQIBKAAIhoDVIBoEFg");
	this.shape.setTransform(45.3,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA3DtIgNhWIhaAAIgNBWIhFAAIBNnaIBrAAIBMHagAgnBWIBGAAIghjug");
	this.shape_1.setTransform(17.4,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABWDtIAAlTIg0FTIhFAAIg3lOIAAFOIhBAAIAAnaIBnAAIA1FRIA0lRIBnAAIAAHag");
	this.shape_2.setTransform(-13.9,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhSDUQgcgfAAg5IAAj3QAAg5AcgfQAdgfA1AAQA2AAAdAfQAcAfAAA5IAAAvIhHAAIAAgzQAAgagLgLQgKgKgRAAQgQAAgKAKQgLALAAAaIAAD/QAAAaALAKQAKAKAQAAQARAAAKgKQALgKAAgaIAAhEIBHAAIAABAQAAA5gcAfQgdAfg2AAQg1AAgdgfg");
	this.shape_3.setTransform(-44.3,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-37.4,119.1,74.8);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABfDtIAAnaIBKAAIAAHagAioDtIAAnaIBLAAIAACzIAjAAQA5ABAZAdQAcAcAAA6IAAA+QAAA6gcAeQgZAdg5AAgAhdCqIAjAAQASAAAJgKQAKgKAAgZIAAhIQAAgagKgJQgJgJgSAAIgjAAg");
	this.shape.setTransform(52.9,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhyDtIAAnaIDPAAIAABFIiFAAIAAB5IAqAAQA5AAAcAeQAcAcAAA6IAAAzQAAA6gcAeQgcAdg5AAgAgoCqIAqAAQASAAAKgKQAKgKAAgZIAAg9QAAgZgKgKQgKgKgSAAIgqAAg");
	this.shape_1.setTransform(20.4,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhTDUQgdgfAAg5IAAj3QAAg5AdgfQAdgfA2AAQA2AAAeAfQAdAfAAA5IAAD3QAAA5gdAfQgeAfg2AAQg2AAgdgfgAgbikQgKALAAAaIAAD/QAAAaAKAKQALALAQAAQARAAAKgLQALgKAAgaIAAj/QAAgagLgLQgKgKgRAAQgQAAgLAKg");
	this.shape_2.setTransform(-6.4,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhSDUQgcgfAAg5IAAj3QAAg5AcgfQAcgfA2AAQA3AAAcAfQAcAfAAA5IAAAvIhHAAIAAgzQABgagLgLQgKgKgSAAQgQAAgKAKQgLALAAAaIAAD/QAAAaALAKQAKAKAQAAQASAAAKgKQALgKgBgaIAAhEIBHAAIAABAQAAA5gcAfQgcAfg3AAQg2AAgcgfg");
	this.shape_3.setTransform(-31.9,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA3DtIgNhWIhaAAIgNBWIhFAAIBMnaIBsAAIBMHagAgnBWIBGAAIghjug");
	this.shape_4.setTransform(-58,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.8,-37.4,147.6,74.8);


(lib.Symbol20 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A85E00","rgba(168,94,0,0)"],[0,1],-300,0,300,0).s().p("Egu2ATiMAAAgnDMBdtAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-125,600,250);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bgWide, null, new cjs.Matrix2D(1,0,0,1,-375,-150)).s().p("EjM5AXcMAAAgu3MGZzAAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1311.5,-150,2623,300);


(lib.Symbol15copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bgWide, null, new cjs.Matrix2D(1,0,0,1,-375,-247.9)).s().p("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");
	this.shape.setTransform(0,44.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1459,-7.4,2918,104.3);


(lib.Symbol15copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bgWide, null, new cjs.Matrix2D(1,0,0,1,-375,-232.7)).s().p("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");
	this.shape.setTransform(0,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1459,-37.8,2918,134.6);


(lib.Symbol15copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bgWide, null, new cjs.Matrix2D(1,0,0,1,-375,-217.9)).s().p("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");
	this.shape.setTransform(0,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1459,-67.3,2918,164.1);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bgWide, null, new cjs.Matrix2D(1,0,0,1,-375,-203.2)).s().p("Ejj9APIIAA4kQAvgBAygLQBbgTBggxQBJgmBghCQBthNA2gmQApgcAcgOQAagOAYgIICDAAIAKAEQA1AQA0AlQAlAZA3AxQBBA4AaATQBNA8BAgCQA+gCA7g6QAXgXBGhbQAjgvApgrIEHAAIAfBiQAWBKAaAvQAhA9AyAoQA3AsA+AEQA3AFBZgiIA6gUQAdAMAygNQAsgMApgSIAOgHQArgUApgcQAtggAWgPQApgYAjgEQAjgFA3AQQBIAVASADQBKAJBUgrQA4gcBUhEQA0BWAxAvQBDBBBJANQA8AKBCgXQA4gUA5grQAjgaA+g7QBAg6AigaQAYgSAWgLIBoAAQAVAKAkAWIDuCZQBeA7A9AXQBbAiBKgUQAYgGAxgYQAvgXAagGQBQgTCCA5IBoAtQA8AYAwADQBLAGBRgkQA3gXBag8QBphGAngVQBUgtBIgHQBNgIBvAgQB7AqA+AOQB/AbCCgXQBFgNBAgaQAjAJAigPQAbgLAsgkQAvgmAYgMQAbgNAdgFIBAAAQAdAFAfAKQBQAdBaBGQBqBTA4AcQBgAyBUgPQAlgGAugYQAKgFBGgoQBjg5BBAJQAqAEA/AlQBIAqAeAKQBTAXBigtQBDgfBfhNQAtAnBQAFICOgEQCVgECIA6QBSAoAqAUQBJAiA4AFQBuAMCAhMQAsgaBCgxIBrhNQAhgWAWgKQAhgNAcACQAYACAdAOIAxAaQBsA0CLgVQA7gJA7gWQAOAFARACQAPABA9gDQA3gDBMAPICDAdQCjAkBdgjQAdAbAoAvQArA1AWAZQBQBaBMAYQBpAgCahGQCmhKCHh6IAngmIATgBIBZgCQA0gCAjgJIAdgHQAQgEAMADQAMABAQAJIAcAPQAVAIAcADQARAAAhgBQAhgCARgDQAdgFASgMQAagTAOgHIATgHIATgHIARgJQAKgEAIgBQAJgBALAFIDQEtQAoA4AaAbQApAqAtALQBLAVBeg3QAZgQAwgjQAvgiAagQQA/glBZgXQAIAbAbAVQAtAlAogaQAQgJASgaQAVgdAJgKQAggbAxABQAsACAqAXQAZANAxAmQAvAiAcAOQArAVAtgDQAxgCAcghQAUArA5gGQA2gEAjgoQAUgXAhg8QAeg5AYgZQgqBpA7ByQA5BwBvApQBnAoB6gbQBugaBfhMQBThDBGhnQA4hVA2h3QAoBaAbAuQAsBHA0AsQA8AyBNAKQBSAMA6gsQAggYAYgrQAQgbAXg3IA/iYQAYg5AhgGQAigEAmAwQAgAqA7BYQA3BNAwAqQA/A5BNASQBUAVBDgiQBCgjA5hxIAvhbQAcgyAeggQBRDHCdCUQB0BsBjgQQA7gJAvgzQAgghAthOQAyhaAXgdQAtg9A2gYQASgIAkgJIAUAHQB5AuAWAFQBSAXA/gPQAagHBFggQA7gcAmgDQA3gEBEAjQAoATBOAtQCDA/CsgYQCNgTChhOQBmgwAjgNQBPgcBAAHQBPAKBRBAQAqAiBeBkQBUBZA0AjQBPA1BRgHQA+gGBag5QBrhDAqgOQBAgWBUAIQA1AFBkAYQBqAZAvAGQBVALBCgRQBbgYBshgQAegaA7g4QA1gwAngdQAsgeArgPIB8AAQAfAOAdAbQAXAWAmAvQBrCEBuA/QCLBRB5guQAkgOBWg9QBLg1A0gJQA8gLB7AsQB4ArA+gNQAxgJAxgmQAegXA0g5QA2g5AcgXQAxgoAwgLQBSgRB1A/IBhA2QA5AgArALQA5APBAgHQgMAZAKAaQARAoA2ADQAsACA2gVIEThoQBYgiAxgLQBOgSA/ANQBEAOBfBEQBwBQAuATQBYAlBtgLQBRgJB3goIDNhJQB4gnBYgEQAugDC9ATQCPAOBWgcQAegKA7gaQA1gVAnAAQAsAAAzAZQAYAKBCApQA4AiAhALQAyASAsgMQAkgJBWhFQBIg5A0AJQAyAHA4BNQA9BVAoAQQAjAPAygJQARgCBFgUQBBgSB4gSQCDgTA2gNQBmgZBKgvQBCgpAng4IAqAAQCMDuDPCyQAmAhAdARQAnAXAmAEQBbALBchlQAOgOA9hNQAvg4AhgcQAOBIBTAdQBOAcBKghQA9gcA4hCQAigqA0hXQBmBcCWgPQCWgPBShuQAnCCBNA1IAAajg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1459,-96.8,2918,193.6);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,141.6).s().p("AxDREQnEnFgBp/QABp+HEnFQHFnEJ+gBQJ/ABHFHEQHEHFABJ+QgBJ/nEHFQnFHEp/ABQp+gBnFnEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.5,-154.5,309,309);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(6,1,1,3,true).rr(-200,-33,400,66,5);
	this.shape.setTransform(-120,-18,1,1,0,0,0,-120,-16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203,-38,406,72);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghDZIAAiQIhWkgIBIAAIAyDGIA0jGIBBAAIhWEgIAACQg");
	this.shape.setTransform(178.1,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhoDZIAAmwIBnAAQAzAAAYAYQAYAZAAAzIAAAOQAAAjgKAVQgLAWgXAKQAcALALAVQAMAYAAAjIAAAjQAAAzgaAaQgaAag0ABgAgkCaIAlAAQASAAAJgJQAJgJAAgYIAAgmQAAgfgLgLQgKgLgVAAIgfAAgAgkgnIAbAAQARAAALgKQALgKAAgaIAAgYQAAgYgIgKQgJgLgQABIghAAg");
	this.shape_1.setTransform(155.4,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAgIAAg/IA/AAIAAA/g");
	this.shape_2.setTransform(138.3,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAkDZIgCgIIgCgKIgCgOIAAgWIAAhEQAAgegKgNQgLgNgWAAIgXAAIAACyIhEAAIAAmwIBnAAQAzAAAYAYQAYAZAAAzIAAAiQAABDgtASQAaALAKAYQAJAXAAAjIAABDIABAcQACAMAEANgAgkgUIAaAAQASAAALgKQAKgKAAgaIAAgrQAAgYgIgKQgIgLgQABIghAAg");
	this.shape_3.setTransform(122.4,-1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhbDZIAAmwIC3AAIAAA+IhzAAIAAB4IBbAAIAAA9IhbAAIAAB+IBzAAIAAA/g");
	this.shape_4.setTransform(100,-1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhbDZIAAmwIC3AAIAAA+IhzAAIAAB4IBbAAIAAA9IhbAAIAAB+IBzAAIAAA/g");
	this.shape_5.setTransform(78.9,-1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhoDZIAAmwIBnAAQAzAAAYAYQAYAZAAAzIAAAOQAAAjgKAVQgLAWgXAKQAcALALAVQAMAYAAAjIAAAjQAAAzgaAaQgaAag0ABgAgkCaIAlAAQASAAAJgJQAJgJAAgYIAAgmQAAgfgLgLQgKgLgVAAIgfAAgAgkgnIAbAAQARAAALgKQALgKAAgaIAAgYQAAgYgIgKQgJgLgQABIghAAg");
	this.shape_6.setTransform(56.7,-1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghDZIAAlyIhHAAIAAg+IDRAAIAAA+IhIAAIAAFyg");
	this.shape_7.setTransform(34.4,-1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAyDZIgMhPIhSAAIgLBPIg/AAIBGmwIBhAAIBGGwgAgjBPIBAAAIgfjag");
	this.shape_8.setTransform(12.4,-1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhbDZIAAmwIC3AAIAAA+IhzAAIAAB4IBbAAIAAA9IhbAAIAAB+IBzAAIAAA/g");
	this.shape_9.setTransform(-9.5,-1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAmDZIAAi7IhMAAIAAC7IhEAAIAAmwIBEAAIAAC5IBMAAIAAi5IBFAAIAAGwg");
	this.shape_10.setTransform(-32.8,-1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAaDZIgZjmIgWDmIhfAAIgwmwIBCAAIAlFUIAhlUIA/AAIAjFWIAjlWIA8AAIgxGwg");
	this.shape_11.setTransform(-61.8,-1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfAgIAAg/IA/AAIAAA/g");
	this.shape_12.setTransform(-83.3,16.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAaDZIgZjmIgXDmIheAAIgvmwIBBAAIAlFUIAhlUIA/AAIAjFWIAklWIA6AAIgwGwg");
	this.shape_13.setTransform(-104.8,-1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAaDZIgZjmIgWDmIhfAAIgvmwIBBAAIAlFUIAhlUIA/AAIAjFWIAklWIA6AAIgwGwg");
	this.shape_14.setTransform(-138,-1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaDZIgZjmIgWDmIhfAAIgvmwIBBAAIAlFUIAhlUIA/AAIAjFWIAjlWIA8AAIgxGwg");
	this.shape_15.setTransform(-171.2,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.8,-37.3,381.6,68.6);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.arrow2();
	this.instance.setTransform(-299,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-299,-164,463,300);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.setTransform(-245,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245,-150,491,300);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.565)","rgba(255,255,255,0.431)","rgba(255,255,255,0.349)","rgba(255,255,255,0.239)","rgba(255,255,255,0.098)","rgba(255,255,255,0.031)","rgba(255,255,255,0.008)"],[0.267,0.408,0.486,0.596,0.69,0.816,0.91,1],0,0,0,0,0,265.6).s().p("A+QeRQsisjAAxuQAAxtMisjQMjsiRtAAQRuAAMjMiQMiMjAARtQAARusiMjQsjMixuAAQxtAAsjsig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274,-274,548,548);


(lib.link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuDXcMAAAgu3IcHAAMAAAAu3g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFDpQgJAAAAgdIAAjDIgUAAIAADgIgKAAIAAnRIAKAAIAADjIAUAAIAAjGQABgdANAAIAKAAQAPAAAAAdIAAGXQAAAdgLAAgAAFjLIAAGOQAAAXAHAAIAGAAQAGAAAAgXIAAmOQABgNgFgBIgLAAQgEABAAANg");
	this.shape.setTransform(108.1,106.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSDpIAAgPIAGAAQAGAAAAgPIgXmzIAKAAIATF2IASl2IAMAAIgbG2QgCAbgHAAg");
	this.shape_1.setTransform(99.2,106.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIDpQgLAAAAgdIAAmXQAAgdAPAAIAJAAQAPAAAAAdIAAGXQAAAdgLAAgAgJjLIAAGOQABAXAGAAIAFAAQAGAAABgXIAAmOQAAgNgFgBIgJAAQgFABAAANg");
	this.shape_2.setTransform(91.9,106.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTDpIAAnRIAfAAQAIAAAAAOIAADHQAAASgFAEQgGAGgGAAIgMAAIAADggAgJgFIAMAAQAHAAgBgQIAAi9QAAgGgBgBIgRAAg");
	this.shape_3.setTransform(85.5,106.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATDpIgHicIgVAAIgICcIgMAAIAcnRIAGAAIAZHRgAgIA+IATAAIgJjLg");
	this.shape_4.setTransform(78.1,106.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASD/IAAgrIgkAAIAAArIgJAAIAAg7IAEAAQAIAAgBgWIAAmsIAoAAIAAHCIAEAAIAAA7gAgFC3IgBANIAUAAIAAmyIgTAAg");
	this.shape_5.setTransform(69.9,108.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJDpQgKAAAAgdIAAh6IAKAAIAABxQAAAXAHAAIAFAAQAGAAAAgXIAAitQAAgNgFAAIgSAAIAAgOIASAAQAFAAAAgQIAAi2QAAgNgDgBIgLAAQgEABAAANIAAB5IgKAAIAAh5QAAgdAOAAIAKAAQAPAAAAAdIAAC4QAAASgHABIADACQAEACAAAPIAAC5QAAAdgLAAg");
	this.shape_6.setTransform(62.7,106.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSDpIAAgPIAGAAQAGAAAAgPIgXmzIAKAAIATF2IASl2IAMAAIgbG2QgCAbgHAAg");
	this.shape_7.setTransform(50.6,106.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AATDpIAAj+IgOD+IgJAAIgPj+IAAD+IgKAAIAAnRIAKAAIATF5IATl5IALAAIAAHRg");
	this.shape_8.setTransform(42.3,106.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATDpIgHicIgVAAIgICcIgMAAIAcnRIAGAAIAZHRgAgIA+IATAAIgJjLg");
	this.shape_9.setTransform(33.9,106.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiDpIAAnRIAKAAIAAHCIAUAAIAAnCIAJAAIAAHCIAUAAIAAnCIAKAAIAAHRg");
	this.shape_10.setTransform(25,106.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AATDpIgHicIgVAAIgICcIgMAAIAcnRIAGAAIAZHRgAgIA+IATAAIgJjLg");
	this.shape_11.setTransform(16,106.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTDpIAAnRIAgAAQAHAAAAAOIAADHQAAASgHABIADACQAEACAAAPIAADIQAAAOgFAAgAgJDaIAPAAQAEAAgBgMIAAi4QAAgNgFAAIgNAAgAgJgFIANAAQAFAAAAgQIAAi9QAAgGgCgBIgQAAg");
	this.shape_12.setTransform(8.7,106.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYEhIAApBIANAAIAAEaIAQAAQAHAAAGAGQAHAHAAAWIAADyQAAASgJAAgAgLENIAUAAQADAAAAgHIAAjnQAAgUgHAAIgQAAg");
	this.shape_13.setTransform(108.5,47.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AATE8IAAg2IgxAAIAApAIAMAAIAAItIAYAAIAAotIANAAIAAItIAMAAIAABJg");
	this.shape_14.setTransform(99.4,50.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFEhIAApBIALAAIAAJBg");
	this.shape_15.setTransform(92.2,47.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLEhQgNAAAAgkIAAiYIAMAAIAACOQAAAaAJAAIAGAAQAJAAAAgaIAAjYQAAgQgIAAIgVAAIAAgRIAVAAQAIAAAAgVIAAjiQAAgPgFAAIgNAAQgGAAAAAPIAACYIgMAAIAAiYQAAgjASAAIANAAQASAAAAAjIAADlQAAAWgIACIAEACQAEADAAASIAADmQAAAkgNAAg");
	this.shape_16.setTransform(85.8,47.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAXE8IAAg2IgtAAIAAA2IgNAAIAAhJIAHAAQAJAAAAgbIAAoSIAxAAIAAItIAFAAIAABJgAgHDiIgBARIAYAAIAAoaIgXAAg");
	this.shape_17.setTransform(76.3,50.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKEhQgNAAAAgkIAAn6QAAgjASAAIALAAQASAAAAAjIAAH6QAAAkgNAAgAgLj9IAAHwQAAAaAJAAIAFAAQAJAAAAgaIAAnwQAAgPgGAAIgLAAQgGAAAAAPg");
	this.shape_18.setTransform(66.8,47.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAMEhIgYkWIAAEWIgMAAIAApBIAMAAIAAEaIAYkaIANAAIgZEfIAZEig");
	this.shape_19.setTransform(58.5,47.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgrEhIAApBIAMAAIAAItIAaAAIAAotIALAAIAAItIAZAAIAAotIANAAIAAJBg");
	this.shape_20.setTransform(48.2,47.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAYEhIgJjBIgaAAIgLDBIgOAAIAjpBIAHAAIAfJBgAgKBNIAYAAIgMj9g");
	this.shape_21.setTransform(32.5,47.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYEhIAApBIAoAAQAJAAAAASIAAD2QAAAWgIACIAEACQAEADAAASIAAD4QAAASgHAAgAgMENIAUAAQAEAAAAgNIAAjlQAAgQgIAAIgQAAgAgMgGIAQAAQAIAAAAgVIAAjqQAAgHgCAAIgWAAg");
	this.shape_22.setTransform(22.9,47.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgFEhIAApBIALAAIAAJBg");
	this.shape_23.setTransform(16.3,47.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAMEhIAAotIgYAAIAAItIgMAAIAApBIAxAAIAAJBg");
	this.shape_24.setTransform(9.8,47.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgaFuIAArbIA0AAIAAAZIgkAAIAAFLIAkAAIAAAXIgkAAIAAFHIAkAAIAAAZg");
	this.shape_25.setTransform(106.1,-23.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAPFuIAAlgIgdAAIAAFgIgQAAIAArbIAQAAIAAFkIAdAAIAAlkIAQAAIAALbg");
	this.shape_26.setTransform(95.4,-23.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAPFuIAAlgIgdAAIAAFgIgRAAIAArbIARAAIAAFkIAdAAIAAlkIAQAAIAALbg");
	this.shape_27.setTransform(84.2,-23.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAfFuIgMj0IghAAIgOD0IgSAAIAsrbIAKAAIAnLbgAgNBhIAfAAIgPlAg");
	this.shape_28.setTransform(71.5,-23.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgfFuIAArbIAzAAQALAAAAAXIAAE4QAAAcgKACIAGADQAEADAAAXIAAE5QAAAYgHAAgAgPFVIAZAAQAFAAABgRIAAkiQAAgUgKAAIgVAAgAgPgJIAVAAQAKABAAgaIAAkpQAAgJgEAAIgbAAg");
	this.shape_29.setTransform(58.9,-23.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAoFuIAArbIAQAAIAALbgAg3FuIAArbIAQAAIAAFkIAXAAQAJAAAHAJQAHAJAAAbIAAEzQAAAXgJAAgAgnFVIAdAAQADAAAAgKIAAkjQAAgagJAAIgXAAg");
	this.shape_30.setTransform(45.3,-23.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAoFuIghlgIAAFgIgOAAIAAlgIggFgIgQAAIAilvIgilsIAQAAIAgFkIAAlkIAOAAIAAFkIAhlkIAQAAIgiFsIAiFvg");
	this.shape_31.setTransform(29.3,-23.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgcFuIAAgZIAIAAQAKAAAAgVIgkqtIAQAAIAdJMIAepMIASAAIgqKwQgDAqgLABg");
	this.shape_32.setTransform(14.2,-23.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgXFHIAAqNIAvAAIAAAWIggAAIAAEpIAgAAIAAAUIggAAIAAEkIAgAAIAAAWg");
	this.shape_33.setTransform(106.8,-97.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAcFHIgLjaIgeAAIgMDaIgQAAIAnqNIAKAAIAiKNgAgMBXIAcAAIgOkeg");
	this.shape_34.setTransform(96.1,-97.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAOFHIAAk6IgbAAIAAE6IgOAAIAAqNIAOAAIAAE/IAbAAIAAk/IAOAAIAAKNg");
	this.shape_35.setTransform(84.9,-97.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgbFHIAAqNIAtAAQAKAAAAAUIAAEXQAAAZgHAHQgHAIgJAAIgSAAIAAE6gAgNgHIASAAQAJAAAAgXIAAkKQAAgIgDAAIgYAAg");
	this.shape_36.setTransform(75.1,-97.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgXFHIAAqNIAvAAIAAAWIggAAIAAEpIAgAAIAAAUIggAAIAAEkIAgAAIAAAWg");
	this.shape_37.setTransform(65.8,-97.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAbFHIAAlkIgUFkIgOAAIgTlkIAAFkIgOAAIAAqNIAOAAIAaISIAboSIAPAAIAAKNg");
	this.shape_38.setTransform(55.1,-97.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNFHQgOAAAAgoIAAisIAOAAIAACgQAAAeAKAAIAHAAQAKAAAAgeIAAj0QAAgSgJAAIgYAAIAAgUIAYAAQAJAAAAgXIAAkBQAAgRgGAAIgPAAQgGAAAAARIAACsIgOAAIAAisQAAgnAUAAIAPAAQAUAAAAAnIAAEEQAAAZgJACIAFACQAEAEAAAUIAAEFQAAAogOAAg");
	this.shape_39.setTransform(44,-97.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAbFHIgKjaIgeAAIgMDaIgQAAIAoqNIAJAAIAiKNgAgLBXIAbAAIgOkeg");
	this.shape_40.setTransform(32.9,-97.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgbFHIAAqNIAtAAQAKAAAAAUIAAEXQAAAZgHAHQgHAIgJAAIgSAAIAAE6gAgNgHIASAAQAJAAAAgXIAAkKQAAgIgDAAIgYAAg");
	this.shape_41.setTransform(21.7,-97.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAOFHIAAp3IgbAAIAAJ3IgOAAIAAqNIA3AAIAAKNg");
	this.shape_42.setTransform(11.9,-97.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.2,-145.3,110,290.7);


(lib.bottle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottle();
	this.instance.setTransform(-142,-282);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.bottleGlow();
	this.instance_1.setTransform(-190,-331);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190,-331,380,662);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EicOATiMAAAgnDME4dAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1000,-125,2000,250);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.t2 = new lib.Symbol31();
	this.t2.setTransform(0,32.4);

	this.t1 = new lib.Symbol30();
	this.t1.setTransform(0,-50.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.8,-90.6,345.6,176);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.t2 = new lib.Symbol26();
	this.t2.setTransform(0,35);

	this.t1 = new lib.Symbol25();
	this.t1.setTransform(0,-46.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-87.4,450.1,175);


(lib.Symbol24 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0YFQIAAhgQASAAANgCQAMgCAHgHQAIgIADgNQAEgOABgXIARn6IEqAAIAAKeIhrAAIAAo+IhcAAIgMGUQgCBcglAoQgkAnhOAAgEAoiAFPIgSh6IiCAAIgSB6IhhAAIBrqeICbAAIBrKegEAmbAB5IBmAAIgylRgAftFPIAAqeIEXAAIAABgIitAAIAAI+gAdlFPIgSh6IiCAAIgSB6IhhAAIBrqeICbAAIBrKegAbeB5IBmAAIgylRgAXVFPIAAkgIh4AAIAAEgIhpAAIAAqeIBpAAIAAEgIB4AAIAAkgIBsAAIAAKegARtFPIgTh6IiCAAIgSB6IhgAAIBrqeICbAAIBrKegAPmB5IBmAAIgzlRgAIPFPIAAqeICgAAQBSAAAlAmQAlAnAABNIAAAYQAAA1gQAhQgRAhgjARQArAQASAkQARAlAAA1IAAA2QAABPgoAoQgoAphQAAgAJ5DvIA8AAQAbAAAOgOQAOgOAAgmIAAg7QAAgvgQgRQgQgSgkAAIgvAAgAJ5g9IApAAQAegBARgPQAQgPAAgoIAAglQAAglgMgQQgOgRgbAAIgzAAgAGIFPIgSh6IiCAAIgSB6IhhAAIBrqeICbAAIBrKegAEBB5IBmAAIgylRgAi3FPIAAqeICbAAQBOAAAnArQAnApAABSIAABXQAABSgnAoQgnArhOAAIgyAAIAAD8gAhOgMIAyAAQAZAAAMgNQANgOAAgkIAAhlQAAgkgNgOQgMgNgZAAIgyAAgAmqFPIAAo+IhuAAIAAhgIFGAAIAABgIhuAAIAAI+gAteFPIAAqeIBqAAIAAD8IAyAAQBQABAmAqQAnAoAABSIAABXQAABSgnAqQgmAqhQAAgAr0DvIAyAAQAZAAANgNQANgOAAglIAAhkQAAgkgNgOQgNgNgZAAIgyAAgA2cFPIAAqeIBpAAIAAKegA78FPIAAhMIgnAAQhQAAgngqQgngrAAhRIAAi1QAAhSAngqQAngrBQAAIAnAAIAAhQIBoAAIAABQIAnAAQBQAAAnArQAnAqAABSIAAC1QAABRgnArQgnAqhQAAIgnAAIAABMgA6UCnIAnAAQAZAAAOgQQAOgPAAgkIAAjDQAAgkgOgQQgOgPgZAAIgnAAgA9KiTQgOAQAAAkIAADDQAAAkAOAPQAOAQAZAAIAnAAIAAlJIgnAAQgZAAgOAPgEgkFAFPIAAqeIEgAAIAABgIi3AAIAAC8ICRAAIAABdIiRAAIAADFIC3AAIAABggEgmqAFPIAAkgIh4AAIAAEgIhpAAIAAqeIBpAAIAAEgIB4AAIAAkgIBsAAIAAKeg");
	mask.setTransform(2.3,2.3);

	// mc
	this.mc = new lib.Symbol2();
	this.mc.setTransform(-9.2,1.8,4.356,3.066);

	this.mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267.7,-31.3,540.2,67.3);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t1
	this.t1 = new lib.Symbol12();

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// t2
	this.t2 = new lib.Symbol13();

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203,-38,406,72);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mc4
	this.mc4 = new lib.Symbol15copy3();
	this.mc4.setTransform(0,53.2);

	this.timeline.addTween(cjs.Tween.get(this.mc4).wait(1));

	// mc3
	this.mc3 = new lib.Symbol15copy2();
	this.mc3.setTransform(0,53.2);

	this.timeline.addTween(cjs.Tween.get(this.mc3).wait(1));

	// mc2
	this.mc2 = new lib.Symbol15copy();
	this.mc2.setTransform(0,53.2);

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(1));

	// mc1
	this.mc1 = new lib.Symbol15();
	this.mc1.setTransform(0,53.2);

	this.timeline.addTween(cjs.Tween.get(this.mc1).wait(1));

	// mc
	this.mc = new lib.Symbol19();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1459,-150,2918,300);


(lib.bg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// sun4
	this.sun4 = new lib.Symbol14();
	this.sun4.setTransform(-127.9,-240.9,0.353,7.011,0,-63.2,116.8);
	this.sun4.alpha = 0.09;
	this.sun4.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.sun4).wait(1));

	// sun3
	this.sun3 = new lib.Symbol14();
	this.sun3.setTransform(-127.9,-240.9,0.56,3.377,-39.7);
	this.sun3.alpha = 0.09;
	this.sun3.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.sun3).wait(1));

	// sun2
	this.sun2 = new lib.Symbol14();
	this.sun2.setTransform(-127.9,-240.9,0.27,3.374,9.8);
	this.sun2.alpha = 0.09;
	this.sun2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.sun2).wait(1));

	// sun1
	this.sun1 = new lib.Symbol14();
	this.sun1.setTransform(-127.9,-240.9,0.353,4.542,35.5);
	this.sun1.alpha = 0.09;
	this.sun1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.sun1).wait(1));

	// sun
	this.sun = new lib.Symbol14();
	this.sun.setTransform(-152.5,-256.4,3.472,2.392);
	this.sun.alpha = 0.102;
	this.sun.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.sun).wait(1));

	// mc
	this.mc = new lib.Symbol1();
	this.mc.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1215.8,-843.8,2431.6,1205.8);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.site = new lib.Symbol11();
	this.site.setTransform(0,116.5);

	this.timeline.addTween(cjs.Tween.get(this.site).wait(1));

	// Layer 1 copy
	this.t3 = new lib.Symbol29();
	this.t3.setTransform(0,48.7);

	this.t2 = new lib.Symbol28();
	this.t2.setTransform(0,-1.1);

	this.t1 = new lib.Symbol27();
	this.t1.setTransform(0,-53.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203,-86.6,406,237.1);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.t4 = new lib.Symbol24();
	this.t4.setTransform(0.1,47.3);

	this.t3 = new lib.Symbol23();
	this.t3.setTransform(138.8,-33.2);

	this.t2 = new lib.Symbol22();
	this.t2.setTransform(-61.6,-33.2);

	this.t1 = new lib.Symbol21();
	this.t1.setTransform(-200.3,-33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1202.6,-790.8,2386.9,1679.9);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var r = this;
		//var count = 1;
		//var repeat = 2000;
		var time2 = 4.0;
		var time3 = time2 + 4.0;
		var time4 = time3 + 3.0;
		
		//TweenMax.to(r.beer.mc, 1.2, {x:"-=4", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		//TweenMax.to(r.beer.mc, 1.8, {y:"-=4", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(r.bg.sun, 2.0, {alpha:0.15, yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut})
		TweenMax.to(r.bg.sun2, 4.0, {scaleY:2.0, yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut})
		TweenMax.to(r.bg.sun4, 3.0, {scaleY:2.0, yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut})
		TweenMax.to(r.bg.mc.mc, 4.5, {delay:0.0, x:"-=10", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut})
		TweenMax.to(r.bg.mc.mc1, 4.5, {delay:0.1, x:"-=20", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut},)
		TweenMax.to(r.bg.mc.mc2, 4.5, {delay:0.3, x:"-=30", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut})
		TweenMax.to(r.bg.mc.mc3, 4.5, {delay:0.5, x:"-=40", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut})
		TweenMax.to(r.bg.mc.mc4, 4.5, {delay:0.7, x:"-=50", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut})
		
		
		
		var tl = new TimelineMax();
		tl.fromTo(r.blk, 0.7, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .from(r.bg, 2.5, {scaleX:2.0, scaleY:2.0, ease:Expo.easeOut}, 0.0)
		  .from(r.bg.mc, 10.0, {scaleX:1.0, scaleY:1.0, ease:Power0.easeNone}, 0.0)
		  
		  //1
		  .from(r.bottle, 2.0, {y:"+=350", rotation:"+=70", ease:Expo.easeOut}, 0.5)
		  .from(r.t1.t4.mc, 2.0, {x:"-=2500", y:"-=2000", ease:Sine.easeOut}, 0.5)
		  .staggerFrom([r.t1.t1, r.t1.t2, r.t1.t3], 1.2, {y:"+=80", alpha:0, ease:Expo.easeOut}, 0.05, 1.00)
		  .from(r.t1.t4, 2.0, {y:"+=60", alpha:0, ease:Expo.easeOut}, 1.4)
		  
		
		  //2
		  .staggerTo([r.t1.t4, r.t1.t3, r.t1.t2, r.t1.t1], 0.7, {y:"+=200", alpha:0, ease:Expo.easeIn}, 0.05, time2+0.00)
		  .to(r.bottle, 1.0, {y:"+=450", rotation:"-=20", ease:Expo.easeIn}, time2+0.00)
		  .staggerFrom([r.t2.t2, r.t2.t1], 1.2, {y:"-=80", alpha:0, ease:Expo.easeOut}, 0.05, time2+1.00)
		  .from(r.arr1, 1.0, {y:"+=0", rotation:"-=90", ease:Elastic.easeOut.config(1,0.9)}, time2+1.00)
		  
		  
		  //3
		  .staggerTo([r.t2.t2, r.t2.t1], 0.7, {y:"+=200", alpha:0, ease:Expo.easeIn}, 0.05, time3+0.00)
		  .to(r.arr1, 1.0, {y:"+=150", rotation:"+=90", ease:Expo.easeIn}, time3+0.00)
		  .staggerFrom([r.t3.t1, r.t3.t2, r.t3.t3], 1.2, {x:"+=200", alpha:0, ease:Expo.easeOut}, 0.08, time3+0.70)
		  .from(r.t3.site, 1.02, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut.config(1,0.9)}, time3+1.30)
		  .from(r.arr2, 1.0, {y:"+=0", rotation:"-=90", ease:Elastic.easeOut.config(1,0.9)}, time3+1.00)
		  
		  
		  //4
		  .staggerTo([r.t3.site, r.t3.t3, r.t3.t2, r.t3.t1], 0.7, {y:"+=200", alpha:0, ease:Expo.easeIn}, 0.05, time4+0.00)
		  .to(r.arr2, 1.0, {y:"+=150", rotation:"+=90", ease:Expo.easeIn}, time4+0.00)
		  .from(r.bottle2, 2.0, {y:"+=350", rotation:"+=70", ease:Expo.easeOut}, time4+1.00)
		  .staggerFrom([r.t4.t2, r.t4.t1], 1.2, {y:"-=150", alpha:0, ease:Expo.easeOut}, 0.06, time4+1.00)
		  
		  
		  
		  //.call(replay)
		  .to(this.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 17)
		  ;
		
		
		
		function replay() {
		  if (count == repeat){
			  tl.kill();
			  createjs.Ticker.setFPS(1);
		  } else {
		  if (count != repeat) {
			  count++;
			  tl.play();
		  }
		  }
		}
		
		
		function restart() {
			tl.play(0);
		}
		
		
		
		
		
		function onResize() {
		 var newWidth = window.innerWidth;
		 //
		 if (newWidth > 1000 && newWidth < 2000) {
			 var diff = (newWidth - 1000) * 0.5;
			 TweenMax.to(r.warn, 0.6, {x:-500-diff, scaleX:1+diff*0.002, ease:Expo.easeOut})
			 } else {
				 TweenMax.to(r.warn, 0.6, {x:-500, ease:Expo.easeOut})
				 }
		}
		
		window.onresize = function () {
		 onResize();
		}
		
		onResize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.298)").ss(2,1,1,3,true).p("EicPgThME4fAAAMAAAAnDMk4fAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// blk
	this.blk = new lib.blk();

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// warn
	this.warn = new lib.Symbol5();
	this.warn.setTransform(-499.9,0,1,0.9);
	this.warn.alpha = 0.102;
	this.warn.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.warn).wait(1));

	// t4
	this.t4 = new lib.t4();
	this.t4.setTransform(179,2,1,1,0,0,0,1,1);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.setTransform(176,-33,1,1,0,0,0,1,1);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(216.1,-0.4,1,1,0,0,0,1,1);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(152,-12,1,1,0,0,0,1,1);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// bottle2
	this.bottle2 = new lib.bottle_1();
	this.bottle2.setTransform(-274,-12);

	this.timeline.addTween(cjs.Tween.get(this.bottle2).wait(1));

	// arr2
	this.arr2 = new lib.Symbol3copy();
	this.arr2.setTransform(-247,331.9,1,1,0,0,0,-10,306.9);

	this.timeline.addTween(cjs.Tween.get(this.arr2).wait(1));

	// arr1
	this.arr1 = new lib.Symbol3();
	this.arr1.setTransform(-247,331.9,1,1,0,0,0,-10,306.9);

	this.timeline.addTween(cjs.Tween.get(this.arr1).wait(1));

	// bottle
	this.bottle = new lib.bottle_1();
	this.bottle.setTransform(-274,-12);

	this.timeline.addTween(cjs.Tween.get(this.bottle).wait(1));

	// Layer 4
	this.instance = new lib.Symbol20();
	this.instance.setTransform(701,0,1,1,180);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Symbol20();
	this.instance_1.setTransform(-701,0);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// bg_pattern
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EicOATiMAAAgnDME4dAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1215.8,-843.8,2551.1,1719.9);


// stage content:
(lib.psh_100pcx250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btnMain.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("./ext_click/?redirect_uri="+encodeURIComponent("http://lidskae.by/"), "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btnMain
	this.btnMain = new lib.link();
	this.btnMain.setTransform(1000,125,11.111,0.833);
	new cjs.ButtonHelper(this.btnMain, 0, 1, 2, false, new lib.link(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMain).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EicPATiMAAAgnDME4fAAAMAAAAnDg");
	mask.setTransform(1000,125);

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(1000,125);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1000,125,2000,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;