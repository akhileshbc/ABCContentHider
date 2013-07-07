/*
	jQuery Plugin - ContentHider
	Developed by Akhilesh.B.Chandran aka akhileshbc
	www.akhileshbc.com
	March 2013
*/

		(function( $ ){

			$.fn.abcContentHider = function( options ) {  
	
				// Create some defaults, extending them with any options that were provided
				var settings = $.extend( {
					'cutoff_length'         : 10,
					'showbtn_display'		: 'inline',		// inline | block
					'showbtn_text'			: 'See More',
					'use_fbstyle'			: true
				}, options);
			
				if(settings['use_fbstyle'])	//inject CSS for FBstyle
					$('head').append('<style>.abcContentHider_content{color: gray;border-left: 2px solid #ccc; padding-left: 8px; font-family: \'lucida grande\',tahoma,verdana,arial,sans-serif; font-size: 11px; line-height: 1.28;} .abcContentHider_content a{color: #3b5998;cursor: pointer;text-decoration: none;}</style>');
					
				return this.each(function() {

					var $this = $(this);
				
					var content = $this.text();
					
					if(settings['use_fbstyle']) $this.addClass('abcContentHider_content');	//use FBstyle
					
					var show_btn = '<span class="abcContentHider_dots">...</span><a style="display:'+settings['showbtn_display']+';" class="abcContentHider_showbtn" href="#">'+settings['showbtn_text']+'</a>';
					if(content.length > settings['cutoff_length'])
					{
						// add event to the show button
						$('body').on('click', '.abcContentHider_showbtn', function(event){
							//console.log($(this)); 
							var parent = $(this).hide().parent();
							$(parent).children('.abcContentHider_dots').hide();
							$(parent).children('.abcContentHider_hidden').show();
							
							event.preventDefault();
						});
						
						var hidden_ele = '<span class="abcContentHider_hidden" style="display:none;">'+content.substr(settings['cutoff_length']-1)+'</span>';
						// overwrite the html of the container containing the text with, stripped_down_text + show_button + hidden_balance_text
						$this.html(content.substr(0, settings['cutoff_length']-1) + show_btn + hidden_ele);
					}
				
				});

			};
		})( jQuery );