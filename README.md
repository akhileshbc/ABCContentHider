ABCContentHider
===============

This is my first jQuery plugin. And I made it to be simple as possible :P

This plugin truncates big text into a smaller one and appends a "See More" at the end. It's works just like in Facebook, where you would see trimmed text for post descriptions. When clicked on this "See More" button, it expands the full text.
Demo is also attached. It has been styled to mimic just like in Facebook. :)

Usage:
------

Include the plugin to your html page along with the jQuery library(if you have not already included it):
```html
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script> <!-- jQuery Library -->
  
  <script src="js/abc_contenthider.js"></script> <!-- ABCContentHider Plugin File -->
```  
Then, to apply the plugin, simply call abcContentHider() to the element.
Eg:
```javascript
  $('.content').abcContentHider();
```

Customization:
--------------
```javascript
  $('.content').abcContentHider({
        'cutoff_length'         : 10,			// when should the content be stripped down, ie. here, it would strip the content when it reaches 10 character. The rest would be hidden
		'showbtn_display'		: 'inline',		// inline | block = inline would show the button in the same line which the text ends, but block would show it in the next line all the time
		'showbtn_text'			: 'See More',	// what text should be displayed on the button. eg: "See More"
		'use_fbstyle'			: true			// if TRUE, the CSS styles for FB like looks would be applied
	});
```
