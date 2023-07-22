/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).load(function(){
	handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid'); 
	}
	else{
		$('#site-nav').removeClass('navbar-solid'); 
	}
}

/*
 * SmoothScroll
*/

smoothScroll.init();

/*
 * WOW
*/

wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       false,      // default
        live:         true        // default
        }
                        )
        wow.init();

    /*------------------------IOSIF------------------*/

//	** Academic **
var academic = ['assets/images/oc/teams/academics/1.png','assets/images/oc/teams/academics/2.png','assets/images/oc/teams/academics/3.png','assets/images/oc/teams/academics/4.png', 'assets/images/oc/teams/academics/5.png','assets/images/oc/teams/academics/6.png','assets/images/oc/teams/academics/7.png','assets/images/oc/teams/academics/8.png'];
var academicNames = ['Xenofon Aggelidis','Tasos Alexandridis','Haris Geremtzes','Giorgos Kefalas','Antonis Magriotis','Tilemahos Mitroudas','Giannis Nanis','Konstantinos Skoutelis'];

//	**Logistic **
var logistic = ['assets/images/oc/teams/logistics/1.png','assets/images/oc/teams/logistics/2.png','assets/images/oc/teams/logistics/3.png','assets/images/oc/teams/logistics/4.png', 'assets/images/oc/teams/logistics/5.png','assets/images/oc/teams/logistics/6.png','assets/images/oc/teams/logistics/7.png','assets/images/oc/teams/logistics/8.png','assets/images/oc/teams/logistics/9.png'];
var logisticNames = ['Christina Ioannidou','Eugenios Kakalopoulos','Giorgos Manikas','Michalis Martinis','Thanasis Mpimplias','Triantafilos Samoladas','Eleftheria Sioula','Elisavet Spanoudi','Chara Tzimoragka'];

//	**	PR  **
var pr = ['assets/images/oc/teams/pr/1.png','assets/images/oc/teams/pr/2.png','assets/images/oc/teams/pr/3.png','assets/images/oc/teams/pr/4.png','assets/images/oc/teams/pr/5.png','assets/images/oc/teams/pr/6.png','assets/images/oc/teams/pr/7.png'];
var prNames = ['Vasilis Andreou','Tasos Alexandridis','Giannis Giannou','Antonis Koutsouras','Dimitris Mposkos','Ariadni Pantoudi','Anastasia Chouliara'];

//	**	Fr  **
var fr = ['assets/images/oc/teams/fr/1.png','assets/images/oc/teams/fr/2.png','assets/images/oc/teams/fr/3.png','assets/images/oc/teams/fr/4.png'];
var frNames = ['Vasilis Andreou','Giannis Pavlidis','Andreas Sidiropoulos','Ilias Chanis'];

//	**	IT  **
var it = ['assets/images/oc/teams/it/1.png','assets/images/oc/teams/it/2.png','assets/images/oc/teams/it/3.png','assets/images/oc/teams/it/4.png','assets/images/oc/teams/it/5.png'];
var itNames = ['Giannis Gallos','Giorgos Kefalas','Iosif Lazaridis','Antonis Magriotis','Ilias Chanis'];

//get modal
var modal = document.getElementById('simpleModal');
//get open modal button
var modalBtn = document.getElementsByClassName('modalBtn')[0];
//get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
//get modal body
var modalBody = document.getElementsByClassName('modal-body')[0];
//get members
var member1 = document.getElementsByClassName('member')[0];
var member2 = document.getElementsByClassName('member')[1];
var member3 = document.getElementsByClassName('member')[2];
var member4 = document.getElementsByClassName('member')[3];
var member5 = document.getElementsByClassName('member')[4];
var member6 = document.getElementsByClassName('member')[5];

member2.addEventListener('click', openModal);
member2.addEventListener('click', () => {
	createContainer(logistic, logisticNames);
    document.getElementById("teams").innerHTML = "Logistics Team";
    document.getElementById("modal-body").setAttribute("style","grid-template-columns: 1fr 1fr 1fr 1fr 1fr;");
});

member3.addEventListener('click', openModal);
member3.addEventListener('click', () => {
	createContainer(pr, prNames);
    document.getElementById("teams").innerHTML = "PR Team";
    document.getElementById("modal-body").setAttribute("style","grid-template-columns: 1fr 1fr 1fr 1fr;");
});

member4.addEventListener('click', openModal);
member4.addEventListener('click', () => {
	createContainer(fr, frNames);
    document.getElementById("teams").innerHTML = "FR Team";
    document.getElementById("modal-body").setAttribute("style","grid-template-columns: 1fr 1fr 1fr 1fr;");
});

member5.addEventListener('click', openModal);
member5.addEventListener('click', () => {
	createContainer(academic, academicNames);
    document.getElementById("teams").innerHTML = "Academics Team";
    document.getElementById("modal-body").setAttribute("style","grid-template-columns: 1fr 1fr 1fr 1fr;");
});

member6.addEventListener('click', openModal);
member6.addEventListener('click', () => {
	createContainer(it, itNames);
    document.getElementById("teams").innerHTML = "IT Team";
    document.getElementById("modal-body").setAttribute("style","grid-template-columns: 1fr 1fr 1fr 1fr 1fr;");
});

var txtAcademic= document.createTextNode('Academic');
var txtLogistic= document.createTextNode('Logistic');
var txtFr= document.createTextNode('Fr');
var txtPr= document.createTextNode('Pr');
var txtiT= document.createTextNode('IT');

//Open click
function openModal() {
	modal.style.display = 'block';
}

//Close click
closeBtn.addEventListener('click', () => {
	modal.style.display = 'none';
	});
closeBtn.addEventListener('click', deleteContainer);

//Close with esc
window.addEventListener('keydown', (k) => {
	if(k.keyCode == "27") {
		modal.style.display = 'none';
		deleteContainer();
	}
}, false);
	
//Close with outside click
window.addEventListener('click', outsideClick);

function outsideClick(e) {
	if(e.target == modal) {
		modal.style.display = 'none';
		deleteContainer();
	}
}

//create container
function createContainer(team, name) {	
	//top
	modalBody.scrollTop = 0;
	for(var i = 0; i < team.length; i++) {
		//create container
		var containerDiv = document.createElement('div');
		containerDiv.setAttribute('class', 'allmembers');
		//append container
		modalBody.appendChild(containerDiv);
		
		//create figure
		var figure = document.createElement('figure');
		//append figure
		containerDiv.appendChild(figure);
		
		//create image
		var img = document.createElement('img');
		img.setAttribute('src', team[i]);
		img.setAttribute('alt', i+1);
		//append image
		figure.appendChild(img);

		//create h4
		var h4 = document.createElement('h4');
		//append h4
		containerDiv.appendChild(h4);	
		
		//create text node
		var txt= document.createTextNode(name[i]);
		//append txt
		h4.appendChild(txt);
	}
} 


//delete container
function deleteContainer() {
	while(modalBody.firstChild) {
		modalBody.removeChild(modalBody.firstChild);
	}
}

    /*------------------------IOSIF------------------*/

        /*------------------------GIORGOS------------------*/

jQuery(document).ready(function($){
	var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
	var transitionsSupported = ( $('.csstransitions').length > 0 );
	//if browser does not support transitions - use a different event to trigger them
	if( !transitionsSupported ) transitionEnd = 'noTransition';
	
	//should add a loding while the events are organized 

	function SchedulePlan( element ) {
		this.element = element;
		this.timeline = this.element.find('.timeline');
		this.timelineItems = this.timeline.find('li');
		this.timelineItemsNumber = this.timelineItems.length;
		this.timelineStart = getScheduleTimestamp(this.timelineItems.eq(0).text());
		//need to store delta (in our case half hour) timestamp
		this.timelineUnitDuration = getScheduleTimestamp(this.timelineItems.eq(1).text()) - getScheduleTimestamp(this.timelineItems.eq(0).text());

		this.eventsWrapper = this.element.find('.events');
		this.eventsGroup = this.eventsWrapper.find('.events-group');
		this.singleEvents = this.eventsGroup.find('.single-event');
		this.eventSlotHeight = this.eventsGroup.eq(0).children('.top-info').outerHeight();

		this.modal = this.element.find('.event-modal');
		this.modalHeader = this.modal.find('.header');
		this.modalHeaderBg = this.modal.find('.header-bg');
		this.modalBody = this.modal.find('.body'); 
		this.modalBodyBg = this.modal.find('.body-bg'); 
		this.modalMaxWidth = 800;
		this.modalMaxHeight = 480;

		this.animating = false;

		this.initSchedule();
	}

	SchedulePlan.prototype.initSchedule = function() {
		this.scheduleReset();
		this.initEvents();
	};

	SchedulePlan.prototype.scheduleReset = function() {
		var mq = this.mq();
		if( mq == 'desktop' && !this.element.hasClass('js-full') ) {
			//in this case you are on a desktop version (first load or resize from mobile)
			this.eventSlotHeight = this.eventsGroup.eq(0).children('.top-info').outerHeight();
			this.element.addClass('js-full');
			this.placeEvents();
			this.element.hasClass('modal-is-open') && this.checkEventModal();
		} else if(  mq == 'mobile' && this.element.hasClass('js-full') ) {
			//in this case you are on a mobile version (first load or resize from desktop)
			this.element.removeClass('js-full loading');
			this.eventsGroup.children('ul').add(this.singleEvents).removeAttr('style');
			this.eventsWrapper.children('.grid-line').remove();
			this.element.hasClass('modal-is-open') && this.checkEventModal();
		} else if( mq == 'desktop' && this.element.hasClass('modal-is-open')){
			//on a mobile version with modal open - need to resize/move modal window
			this.checkEventModal('desktop');
			this.element.removeClass('loading');
		} else {
			this.element.removeClass('loading');
		}
	};

	SchedulePlan.prototype.initEvents = function() {
		var self = this;

		this.singleEvents.each(function(){
			//create the .event-date element for each event
			var durationLabel = '<span class="event-date" style="display: none">'+$(this).data('start')+' - '+$(this).data('end')+'</span>';
			$(this).children('a').prepend($(durationLabel));

			//detect click on the event and open the modal
			$(this).on('click', 'a', function(event){
				event.preventDefault();
				if( !self.animating ) self.openModal($(this));
			});
		});

		//close modal window
		this.modal.on('click', '.close', function(event){
			event.preventDefault();
			if( !self.animating ) self.closeModal(self.eventsGroup.find('.selected-event'));
		});
		this.element.on('click', '.cover-layer', function(event){
			if( !self.animating && self.element.hasClass('modal-is-open') ) self.closeModal(self.eventsGroup.find('.selected-event'));
		});
	};

	SchedulePlan.prototype.placeEvents = function() {
		var self = this;
		this.singleEvents.each(function(){
			//place each event in the grid -> need to set top position and height
			var start = getScheduleTimestamp($(this).attr('data-start')),
				duration = getScheduleTimestamp($(this).attr('data-end')) - start;

			var eventTop = self.eventSlotHeight*(start - self.timelineStart)/self.timelineUnitDuration,
				eventHeight = self.eventSlotHeight*duration/self.timelineUnitDuration;
			
			$(this).css({
				top: (eventTop -1) +'px',
				height: (eventHeight+1)+'px'
			});
		});

		this.element.removeClass('loading');
	};

	SchedulePlan.prototype.openModal = function(event) {
		var self = this;
		var mq = self.mq();
		this.animating = true;

		//update event name and time
		this.modalHeader.find('.event-name').text(event.find('.event-name').text());
		this.modalHeader.find('.event-date').text(event.find('.event-date').text());
		this.modal.attr('data-event', event.parent().attr('data-event'));

		//update event content
		this.modalBody.find('.event-info').load(event.parent().attr('data-content')+'.html .event-info > *', function(data){
			//once the event content has been loaded
			self.element.addClass('content-loaded');
		});

		this.element.addClass('modal-is-open');

		setTimeout(function(){
			//fixes a flash when an event is selected - desktop version only
			event.parent('li').addClass('selected-event');
		}, 10);

		if( mq == 'mobile' ) {
			self.modal.one(transitionEnd, function(){
				self.modal.off(transitionEnd);
				self.animating = false;
			});
		} else {
			var eventTop = event.offset().top - $(window).scrollTop(),
				eventLeft = event.offset().left,
				eventHeight = event.innerHeight(),
				eventWidth = event.innerWidth();

			var windowWidth = $(window).width(),
				windowHeight = $(window).height();

			var modalWidth = ( windowWidth*.8 > self.modalMaxWidth ) ? self.modalMaxWidth : windowWidth*.8,
				modalHeight = ( windowHeight*.8 > self.modalMaxHeight ) ? self.modalMaxHeight : windowHeight*.8;

			var modalTranslateX = parseInt((windowWidth - modalWidth)/2 - eventLeft),
				modalTranslateY = parseInt((windowHeight - modalHeight)/2 - eventTop);
			
			var HeaderBgScaleY = modalHeight/eventHeight,
				BodyBgScaleX = (modalWidth - eventWidth);

			//change modal height/width and translate it
			self.modal.css({
				top: eventTop+'px',
				left: eventLeft+'px',
				height: modalHeight+'px',
				width: modalWidth+'px',
			});
			transformElement(self.modal, 'translateY('+modalTranslateY+'px) translateX('+modalTranslateX+'px)');

			//set modalHeader width
			self.modalHeader.css({
				width: eventWidth+'px',
			});
			//set modalBody left margin
			self.modalBody.css({
				marginLeft: eventWidth+'px',
			});

			//change modalBodyBg height/width ans scale it
			self.modalBodyBg.css({
				height: eventHeight+'px',
				width: '1px',
			});
			transformElement(self.modalBodyBg, 'scaleY('+HeaderBgScaleY+') scaleX('+BodyBgScaleX+')');

			//change modal modalHeaderBg height/width and scale it
			self.modalHeaderBg.css({
				height: eventHeight+'px',
				width: eventWidth+'px',
			});
			transformElement(self.modalHeaderBg, 'scaleY('+HeaderBgScaleY+')');
			
			self.modalHeaderBg.one(transitionEnd, function(){
				//wait for the  end of the modalHeaderBg transformation and show the modal content
				self.modalHeaderBg.off(transitionEnd);
				self.animating = false;
				self.element.addClass('animation-completed');
			});
		}

		//if browser do not support transitions -> no need to wait for the end of it
		if( !transitionsSupported ) self.modal.add(self.modalHeaderBg).trigger(transitionEnd);
	};

	SchedulePlan.prototype.closeModal = function(event) {
		var self = this;
		var mq = self.mq();

		this.animating = true;

		if( mq == 'mobile' ) {
			this.element.removeClass('modal-is-open');
			this.modal.one(transitionEnd, function(){
				self.modal.off(transitionEnd);
				self.animating = false;
				self.element.removeClass('content-loaded');
				event.removeClass('selected-event');
			});
		} else {
			var eventTop = event.offset().top - $(window).scrollTop(),
				eventLeft = event.offset().left,
				eventHeight = event.innerHeight(),
				eventWidth = event.innerWidth();

			var modalTop = Number(self.modal.css('top').replace('px', '')),
				modalLeft = Number(self.modal.css('left').replace('px', ''));

			var modalTranslateX = eventLeft - modalLeft,
				modalTranslateY = eventTop - modalTop;

			self.element.removeClass('animation-completed modal-is-open');

			//change modal width/height and translate it
			this.modal.css({
				width: eventWidth+'px',
				height: eventHeight+'px'
			});
			transformElement(self.modal, 'translateX('+modalTranslateX+'px) translateY('+modalTranslateY+'px)');
			
			//scale down modalBodyBg element
			transformElement(self.modalBodyBg, 'scaleX(0) scaleY(1)');
			//scale down modalHeaderBg element
			transformElement(self.modalHeaderBg, 'scaleY(1)');

			this.modalHeaderBg.one(transitionEnd, function(){
				//wait for the  end of the modalHeaderBg transformation and reset modal style
				self.modalHeaderBg.off(transitionEnd);
				self.modal.addClass('no-transition');
				setTimeout(function(){
					self.modal.add(self.modalHeader).add(self.modalBody).add(self.modalHeaderBg).add(self.modalBodyBg).attr('style', '');
				}, 10);
				setTimeout(function(){
					self.modal.removeClass('no-transition');
				}, 20);

				self.animating = false;
				self.element.removeClass('content-loaded');
				event.removeClass('selected-event');
			});
		}

		//browser do not support transitions -> no need to wait for the end of it
		if( !transitionsSupported ) self.modal.add(self.modalHeaderBg).trigger(transitionEnd);
	}

	SchedulePlan.prototype.mq = function(){
		//get MQ value ('desktop' or 'mobile') 
		var self = this;
		return window.getComputedStyle(this.element.get(0), '::before').getPropertyValue('content').replace(/["']/g, '');
	};

	SchedulePlan.prototype.checkEventModal = function(device) {
		this.animating = true;
		var self = this;
		var mq = this.mq();

		if( mq == 'mobile' ) {
			//reset modal style on mobile
			self.modal.add(self.modalHeader).add(self.modalHeaderBg).add(self.modalBody).add(self.modalBodyBg).attr('style', '');
			self.modal.removeClass('no-transition');	
			self.animating = false;	
		} else if( mq == 'desktop' && self.element.hasClass('modal-is-open') ) {
			self.modal.addClass('no-transition');
			self.element.addClass('animation-completed');
			var event = self.eventsGroup.find('.selected-event');

			var eventTop = event.offset().top - $(window).scrollTop(),
				eventLeft = event.offset().left,
				eventHeight = event.innerHeight(),
				eventWidth = event.innerWidth();

			var windowWidth = $(window).width(),
				windowHeight = $(window).height();

			var modalWidth = ( windowWidth*.8 > self.modalMaxWidth ) ? self.modalMaxWidth : windowWidth*.8,
				modalHeight = ( windowHeight*.8 > self.modalMaxHeight ) ? self.modalMaxHeight : windowHeight*.8;

			var HeaderBgScaleY = modalHeight/eventHeight,
				BodyBgScaleX = (modalWidth - eventWidth);

			setTimeout(function(){
				self.modal.css({
					width: modalWidth+'px',
					height: modalHeight+'px',
					top: (windowHeight/2 - modalHeight/2)+'px',
					left: (windowWidth/2 - modalWidth/2)+'px',
				});
				transformElement(self.modal, 'translateY(0) translateX(0)');
				//change modal modalBodyBg height/width
				self.modalBodyBg.css({
					height: modalHeight+'px',
					width: '1px',
				});
				transformElement(self.modalBodyBg, 'scaleX('+BodyBgScaleX+')');
				//set modalHeader width
				self.modalHeader.css({
					width: eventWidth+'px',
				});
				//set modalBody left margin
				self.modalBody.css({
					marginLeft: eventWidth+'px',
				});
				//change modal modalHeaderBg height/width and scale it
				self.modalHeaderBg.css({
					height: eventHeight+'px',
					width: eventWidth+'px',
				});
				transformElement(self.modalHeaderBg, 'scaleY('+HeaderBgScaleY+')');
			}, 10);

			setTimeout(function(){
				self.modal.removeClass('no-transition');
				self.animating = false;	
			}, 20);
		}
	};

	var schedules = $('.cd-schedule');
	var objSchedulesPlan = [],
		windowResize = false;
	
	if( schedules.length > 0 ) {
		schedules.each(function(){
			//create SchedulePlan objects
			objSchedulesPlan.push(new SchedulePlan($(this)));
		});
	}

	$(window).on('resize', function(){
		if( !windowResize ) {
			windowResize = true;
			(!window.requestAnimationFrame) ? setTimeout(checkResize) : window.requestAnimationFrame(checkResize);
		}
	});

	$(window).keyup(function(event) {
		if (event.keyCode == 27) {
			objSchedulesPlan.forEach(function(element){
				element.closeModal(element.eventsGroup.find('.selected-event'));
			});
		}
	});

	function checkResize(){
		objSchedulesPlan.forEach(function(element){
			element.scheduleReset();
		});
		windowResize = false;
	}

	function getScheduleTimestamp(time) {
		//accepts hh:mm format - convert hh:mm to timestamp
		time = time.replace(/ /g,'');
		var timeArray = time.split(':');
		var timeStamp = parseInt(timeArray[0])*60 + parseInt(timeArray[1]);
		return timeStamp;
	}

	function transformElement(element, value) {
		element.css({
		    '-moz-transform': value,
		    '-webkit-transform': value,
			'-ms-transform': value,
			'-o-transform': value,
			'transform': value
		});
	}
});

    /*------------------------GIORGOS------------------*/

/*-----------------------COUTDOWN---------------------------*/

var countDownDate = new Date("May 13, 2018 09:00:00").getTime();
    
var now = new Date().getTime();
    
var distance = countDownDate - now;

var d = Math.floor(distance / (1000 * 60 * 60 * 24));
var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var s = Math.floor((distance % (1000 * 60)) / 1000);

// Create Countdown
var Countdown = {
  
  // Backbone-like structure
  $el: $('.countdown'),
  
  // Params
  countdown_interval: null,
  total_seconds     : 0,
  
  // Initialize the countdown  
  init: function() {
    
    // DOM
		this.$ = {
        days   : this.$el.find('.bloc-time.days .figure'),
    	hours  : this.$el.find('.bloc-time.hours .figure'),
    	minutes: this.$el.find('.bloc-time.min .figure'),
    	seconds: this.$el.find('.bloc-time.sec .figure')
   	};
      
    // Change Init countdown values
    this.values = {
        days   : this.$.days.parent().attr('data-init-value', d),
	    hours  : this.$.hours.parent().attr('data-init-value', h),
        minutes: this.$.minutes.parent().attr('data-init-value', m),
        seconds: this.$.seconds.parent().attr('data-init-value', s),
    };

    // Init countdown values
    this.values = {
        days   : this.$.days.parent().attr('data-init-value'),
	    hours  : this.$.hours.parent().attr('data-init-value'),
        minutes: this.$.minutes.parent().attr('data-init-value'),
        seconds: this.$.seconds.parent().attr('data-init-value'),
    };
    
    // Initialize total seconds
    this.total_seconds = this.values.days * 24 * 60 * 60 + this.values.hours * 60 * 60 + (this.values.minutes * 60) + this.values.seconds;

    // Animate countdown to the end 
    this.count();    
  },
  
  count: function() {
    
    var that    = this,
        $day_1 = this.$.days.eq(0),
        $day_2 = this.$.days.eq(1),
        $hour_1 = this.$.hours.eq(0),
        $hour_2 = this.$.hours.eq(1),
        $min_1  = this.$.minutes.eq(0),
        $min_2  = this.$.minutes.eq(1),
        $sec_1  = this.$.seconds.eq(0),
        $sec_2  = this.$.seconds.eq(1);
    
        this.countdown_interval = setInterval(function() {

        if(that.total_seconds > 0) {

            --that.values.seconds;              

            if(that.values.minutes >= 0 && that.values.seconds < 0) {

                that.values.seconds = 59;
                --that.values.minutes;
            }

            if(that.values.hours >= 0 && that.values.minutes < 0) {

                that.values.minutes = 59;
                --that.values.hours;
            }
            
            if(that.values.days >= 0 && that.values.hours < 0) {

                that.values.hours = 23;
                --that.values.days;
            }

            // Update DOM values
            // Days
            that.checkHour(that.values.days, $day_1, $day_2);
            
            // Hours
            that.checkHour(that.values.hours, $hour_1, $hour_2);

            // Minutes
            that.checkHour(that.values.minutes, $min_1, $min_2);

            // Seconds
            that.checkHour(that.values.seconds, $sec_1, $sec_2);

            --that.total_seconds;
        }
        else {
            clearInterval(that.countdown_interval);
        }
    }, 1000);    
  },
  
  animateFigure: function($el, value) {
    
     var that         = this,
		     $top         = $el.find('.top'),
         $bottom      = $el.find('.bottom'),
         $back_top    = $el.find('.top-back'),
         $back_bottom = $el.find('.bottom-back');

    // Before we begin, change the back value
    $back_top.find('span').html(value);

    // Also change the back bottom value
    $back_bottom.find('span').html(value);

    // Then animate
    TweenMax.to($top, 0.8, {
        rotationX           : '-180deg',
        transformPerspective: 300,
	      ease                : Quart.easeOut,
        onComplete          : function() {

            $top.html(value);

            $bottom.html(value);

            TweenMax.set($top, { rotationX: 0 });
        }
    });

    TweenMax.to($back_top, 0.8, { 
        rotationX           : 0,
        transformPerspective: 300,
	      ease                : Quart.easeOut, 
        clearProps          : 'all' 
    });    
  },
  
  checkHour: function(value, $el_1, $el_2) {
    
    var val_1       = value.toString().charAt(0),
        val_2       = value.toString().charAt(1),
        fig_1_value = $el_1.find('.top').html(),
        fig_2_value = $el_2.find('.top').html();

    if(value >= 10) {

        // Animate only if the figure has changed
        if(fig_1_value !== val_1) this.animateFigure($el_1, val_1);
        if(fig_2_value !== val_2) this.animateFigure($el_2, val_2);
    }
    else {

        // If we are under 10, replace first figure with 0
        if(fig_1_value !== '0') this.animateFigure($el_1, 0);
        if(fig_2_value !== val_1) this.animateFigure($el_2, val_1);
    }    
  }
};

// Let's go !
Countdown.init();

/*------------------------------COUNTDOWN---------------------------*/
