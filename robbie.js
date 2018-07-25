

var robbieQuotes=["Have you tried crazy 8's?", "Have you thought about AI?", "Chill", "Let's be disruptive", "Don't forget to think about the story guys", "Make full use of the design sprint"
					, "Sorry guys!...On behalf of Finton", "Standup guys!", "Please take the time to do this- it's really important", "Let's keep up the momentum this week", "Awesome work this week guys", "You killed it",
					"Let's hit the ground running", "Hey dude", "I feel like today is a good day..", "Thumbs up!"];

$(document).ready(function(){
  $("body").keyup(function(e){
  	if(e.keyCode==32){
  		$(".thumb").fadeTo("fast", 0);
	    $({deg: 0}).animate({deg: 30}, {
	        duration: 100,
	        step: function(now) {
	            // in the step-callback (that is fired each step of the animation),
	            // you can use the `now` paramter which contains the current
	            // animation-position (`0` up to `angle`)
	            $("#robbiebot").css({
	                transform: 'rotate(' + now + 'deg)'
	            });
	        },
	        complete:function(){
			     $({deg: 30}).animate({deg: -30}, {
			        duration: 200,
			        step: function(now) {
			            // in the step-callback (that is fired each step of the animation),
			            // you can use the `now` paramter which contains the current
			            // animation-position (`0` up to `angle`)
			            $("#robbiebot").css({
			                transform: 'rotate(' + now + 'deg)'
			            });
			        },
			        complete: function(){
			        	$({deg: -30}).animate({deg: 0}, {
					        duration: 100,
					        step: function(now) {
					            // in the step-callback (that is fired each step of the animation),
					            // you can use the `now` paramter which contains the current
					            // animation-position (`0` up to `angle`)
					            $("#robbiebot").css({
					                transform: 'rotate(' + now + 'deg)'
					            });
					        },
					        complete:function(){
					            var randomPhrase = robbieQuotes[Math.floor(Math.random()*robbieQuotes.length)];
	    						$("#quote").html("<b>"+randomPhrase+"</b>");
	    						
	    						if(randomPhrase=="Thumbs up!"){
	    							$("#thumb1").fadeTo("fast",1, function(){
	    								$("#thumb2").fadeTo("fast",1, function(){
	    									$("#thumb3").fadeTo("fast",1);	
	    								});
	    							});
	    							
	    						}
	    						if(randomPhrase=="Have you thought about AI?"){
	    							$("#android").fadeTo("fast",1);
	    							
	    						}	
					        }
					        
			    		});	
			        }
			    });	
	        }
	    });


	}

  });
 });