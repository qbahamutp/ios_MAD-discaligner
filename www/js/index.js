/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.	See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.	 The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.	You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.	 See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var video = {};
var swipesliderlinksonder, swipesliderrechtsonder;

function setTransitions() {
	var sInAnimation = 'fadeInUp';
	var sOutAnimation = 'fadeOutUp';
	$(window).trigger('resize');

	$('.triggerbutton').click(function(){
		var sTarget = '#' + $(this).attr('data-target');
		
		$(sTarget).addClass('animated ' + sInAnimation);
		
		if ($(sTarget).find('video').length > 0) {
			$(sTarget + ' video').get(0).play();

/*
			video = $(sTarget).find('video').get(0);
			video.load();

			video.addEventListener('loadeddata', function() {
				video.play();

				video.webkitEnterFullscreen();
			}, false);
			
			video.addEventListener('ended', function(){
				webkitExitFullScreen();
			});
*/
		} else {
		
			if ($(sTarget).find('.swipe').length > 0) {
				/* if modal has no video, it will have a slider... */
				setTimeout(function(){
					var sCurrentSlider = 'swipeslider' + $(sTarget).attr('id');
					var sCurrentSliderId = '#' + sCurrentSlider;
					window[sCurrentSlider] = $(sTarget).find('.swipe').Swipe({
						continuous: false
					}).data('Swipe');
				
					//console.log(sCurrentSliderId + ' .next');
					$(sCurrentSliderId + ' .next').on('click', window[ sCurrentSlider ].next);
					$(sCurrentSliderId + ' .prev').on('click', window[ sCurrentSlider ].prev);
				},100);
			}
			
			// console.log('die bitches bam');
		}
	});











	$('.closebutton').click(function(){
		$(this).parents('.modal').removeClass(sInAnimation).addClass('hideable ' + sOutAnimation);

//ios		if (Object.keys(video).length > 0) { video.pause(); }

		if ($(this).parents('.modal').find('video').length > 0) { 
			$(this).parents('.modal').find('video').get(0).pause();
		} else {
			// console.log('What video? I donno wat yer talkinbout... o_o'); 
		}
	});

	$('body').on('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', '.modal.hideable', function(){ $(this).removeClass('hideable animated fadeOutUp'); } );
}

var app = {
	// Application Constructor
	initialize: function() {
			this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		app.receivedEvent('deviceready');

		setTransitions();
	},
	// Update DOM on a Received Event
	receivedEvent: function(id) {
/*
		listeningElement.setAttribute('style', 'display:none;');
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		receivedElement.setAttribute('style', 'display:block;');
*/


		console.log('Received Event: ' + id);
	}
};
