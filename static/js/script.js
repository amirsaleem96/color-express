
// ---------------------Method to attach Event Handlers to Elements----------------- //

function bindEvent(elem, eventName, eventHandler){
  if (elem.addEventListener){
    elem.addEventListener(eventName, eventHandler);
  } else if (elem.attachEvent){
    elem.attachEvent('on'+eventName, eventHandler);
  }
}

  // ---------------------Shrink Header on Scroll----------------- //

function header_scroll(num){
  var header = document.getElementsByClassName('header')[0];
  var bar = document.getElementsByClassName('bar-wrapper')[0];
  var wid = document.documentElement.clientWidth || window.innerWidth;
  var pageHeight = window.pageYOffset;
  if(wid > 768){
    if(pageHeight > num){
      header.className = 'header header-after';
      bar.style.top = '3px';
    } else if (pageHeight <= num) {
      header.className = 'header header-before';
      bar.style.top = '10px';
    }
  }
}

//---------------------Dashboard toggle method-----------------//

function toggle_dashboard(){
  var dashboard = document.getElementsByClassName('dashboard-container')[0];
  var bar1 = document.getElementById('bar1');
  var bar2 = document.getElementById('bar2');
  var bar3 = document.getElementById('bar3');

  if (dashboard.className == 'dashboard-container hidden'){

         dashboard.className = 'dashboard-container visible';
         bar1.style.cssText += 'transform: rotate(-40deg); top: 10px;';
         bar2.style.opacity = '0';
         bar3.style.cssText += 'transform: rotate(40deg); bottom: 10px;';
  }
  else if (dashboard.className == 'dashboard-container visible'){

         dashboard.className = 'dashboard-container dashboard-hidden';
         bar1.style.cssText += 'transform: rotate(0deg); top: 0; color: white;';
         bar2.style.opacity = '1';
         bar3.style.cssText += 'transform: rotate(0deg); bottom: 0; color: white;';
         setTimeout(complete_hide, 200);
  }

  function complete_hide(){
    dashboard.className = 'dashboard-container hidden';
  }

}
function toggle_dashboard_bg(){
  var inp = document.getElementById('toggle-dashboard-bg');
  var board = document.getElementsByClassName('dashboard-container')[0];
  if(inp.checked){
    board.style.cssText += 'background-color: white; color: black;';
  } else {
    board.style.cssText += 'background-color: black; color: white;';
  }
}

function toggle_body_bg(){
  var inp = document.getElementById('toggle-body-bg');
  var board = document.body;
  if(inp.checked){
    board.style.cssText += 'background-color: black;';
  } else {
    board.style.cssText += 'background-color: white;';
  }
}

function close_dashboard(){
  var dashboard = document.getElementsByClassName('dashboard-container')[0];
  var bar1 = document.getElementById('bar1');
  var bar2 = document.getElementById('bar2');
  var bar3 = document.getElementById('bar3');
  dashboard.className = 'dashboard-container dashboard-hidden';
  bar1.style.cssText += 'transform: rotate(0deg); top: 0; color: white;';
  bar2.style.opacity = '1';
  bar3.style.cssText += 'transform: rotate(0deg); bottom: 0; color: white;';
  setTimeout(complete_hide, 200);
  function complete_hide(){
    dashboard.className = 'dashboard-container hidden';
  }
}
//---------------------Toggle Custom Color Container----------------- //

function toggle_custom_color_container(){
  var container = document.getElementsByClassName('custom-color-container')[0];
  var btn = document.getElementById('toggle-custom-color-btn');
  if (container.className == 'custom-color-container hidden clearfix'){
       container.className = 'custom-color-container visible clearfix';
       btn.style.transform = 'rotate(-45deg) scale(1.2)';
  } else if (container.className == 'custom-color-container visible clearfix'){
       container.className = 'custom-color-container hidden clearfix';
       btn.style.transform = 'rotate(0) scale(1)';
  }
}

  //---------------------Generate Random Numbers----------------- //

  function random(max,min){
    return Math.floor((Math.random() * max - min) + min);
  }

  //-------------------------Copy functions------------------------//

  function executeCopy(text) {
    var input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = text.replace("copyinfosave",'').split(')')[1];
    input.focus();
    input.select();
    document.execCommand('Copy');
    input.remove();
  }

  function executeCopy2(e,html) {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    var text = doc.body.textContent;
    var that = e;
    open_error_modal();
    document.getElementById('error-text').innerHTML = 'Copied';
    return executeCopy(text);
  }

  //---------------------------------------------------------------------//
  // --------------------- Color Converter Function ---------------------//
  //---------------------------------------------------------------------//

  function colourName2Hex(colour)
  {
      var colours = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
      "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
      "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
      "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
      "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
      "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
      "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
      "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
      "honeydew":"#f0fff0","hotpink":"#ff69b4",
      "indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
      "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
      "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
      "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
      "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
      "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
      "navajowhite":"#ffdead","navy":"#000080",
      "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
      "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
      "rebeccapurple":"#663399","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
      "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
      "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
      "violet":"#ee82ee",
      "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
      "yellow":"#ffff00","yellowgreen":"#9acd32"};

      if (typeof colours[colour.toLowerCase()] != 'undefined')
          return colours[colour.toLowerCase()];

      return false;
  }

function splitRGB(rgb){
  var myRGB = rgb.split('(');
  var r = myRGB[1].split(',')[0];
  var g = myRGB[1].split(',')[1];
  var b = myRGB[1].split(',')[2].split(')')[0];
  return [r, g, b];
}

function splitHSL(hsl){
  //hsl(0,30%,40%)
  var myHSL = hsl.split('(');
  var h = myHSL[1].split(',')[0];
  var s = myHSL[1].split(',')[1].split('%')[0];
  var l = myHSL[1].split(',')[2].split('%')[0];
  return [h, s, l];
}
  /*
     convert rgb to hex
     @param: pass rgb values as a string
     @param example: rgb(0,0,0) will return #000000;
  */

  function rgb2hex(rgb){
   rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
   return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
  }

  // Hex to RGB

  // convert hex to rgb
  function hex2rgb(hex) {
      return 'rgb(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }) + ')';
  }


  // convert rgb to hsl
  function rgb2hsl(rgb){
      //rgb(0,0,0);
      var r = splitRGB(rgb)[0];
      var g = splitRGB(rgb)[1];
      var b = splitRGB(rgb)[2];
      r /= 255, g /= 255, b /= 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;

      if(max == min){
          h = s = 0; // achromatic
      }else{
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch(max){
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
      }

      //return [Math.floor(h * 360), Math.floor(s * 100), Math.floor(l * 100)];
      return 'hsl('+Math.floor(h * 360)+', '+Math.floor(s * 100)+'%, '+Math.floor(l * 100)+'%)';
  }

  //convert hsl to rgb

  function hsl2rgb(h, s, l) {
  	var m1, m2, hue;
  	var r, g, b
  	s /=100;
  	l /= 100;
  	if (s == 0)
  		r = g = b = (l * 255);
  	else {
  		if (l <= 0.5)
  			m2 = l * (s + 1);
  		else
  			m2 = l + s - l * s;
  		m1 = l * 2 - m2;
  		hue = h / 360;
  		r = HueToRgb(m1, m2, hue + 1/3);
  		g = HueToRgb(m1, m2, hue);
  		b = HueToRgb(m1, m2, hue - 1/3);
  	}
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);
  	return  'rgb('+r+','+g+','+b+')';
  }

  function HueToRgb(m1, m2, hue) {
  	var v;
  	if (hue < 0)
  		hue += 1;
  	else if (hue > 1)
  		hue -= 1;

  	if (6 * hue < 1)
  		v = m1 + (m2 - m1) * hue * 6;
  	else if (2 * hue < 1)
  		v = m2;
  	else if (3 * hue < 2)
  		v = m1 + (m2 - m1) * (2/3 - hue) * 6;
  	else
  		v = m1;

  	return 255 * v;
  }

  //---------------------Return black or white based on RGB value----------------- //

  function contrastForeground(rgb){
    var r  = splitRGB(rgb)[0];
    var g  = splitRGB(rgb)[1];
    var b  = splitRGB(rgb)[2];
    var check = Math.round(((parseInt(r) * 299) + (parseInt(g) * 587) + (parseInt(b) * 114)) / 1000);
    return (check > 125) ? 'black' : 'white';
  }

  //---------------------Generate Random Colors----------------- //

  function createNewRandom(){
    var elem = document.createElement('div');
    var parent = document.getElementsByClassName('random-color-container')[0];
    parent.appendChild(elem);
    elem.className = 'random-color';

    var R = random(255,0), G = random(255,0), B = random(255,0);
    var RGB = 'rgb('+R+','+G+','+B+')';
    var HEX = rgb2hex(RGB);
    var foreground = contrastForeground(RGB);
    elem.style.cssText += 'background-color: '+RGB+'; color: '+foreground+';';
    elem.innerHTML = '<span class = "hidden" id = "bg">'+RGB+'</span><h4 class = "color-name">'+HEX+'</h4><span class="color-icon copy-icon"><i class="fa fa-copy" aria-hidden = "true"></i>copy</span><span class = "color-icon details-icon"><i class="fa fa-info-circle"></i>info</span><span class = "color-icon save-icon"><i class="fa fa-save"></i>save</span>';
  }

 function evaporate(e){
   var run = e.parentNode.innerHTML.split('span')[2].split('>')[2].split('<')[0]
   e.innerHTML = '<i class="fa fa-save"></i>saved';
   save_to_my_space(run);
 }


  //---------------------Destroy Every Child of Parent----------------- //

  function destroy(parent){
    var parentElem = document.getElementsByClassName(parent)[0];
    while(parentElem.firstChild){
      parentElem.removeChild(parentElem.firstChild);
    }
  }

  //--------------------------OPEN SHADE BOX-------------------------------//

  function open_shade_modal(RGB){
    var modal = document.getElementsByClassName('shade-modal-container')[0];
    modal.className = 'shade-modal-container visible clearfix';

    var colorValue = document.getElementsByClassName('color-value');
    var hexOutput = colorValue[0];
    var rgbOutput = colorValue[1];
    var hslOutput = colorValue[2];
    var HEX = rgb2hex(RGB);
    var HSL = rgb2hsl(RGB);
    hexOutput.innerHTML = 'HEX: ' +HEX;
    rgbOutput.innerHTML = 'RGB: ' +RGB;
    hslOutput.innerHTML = 'HSL: ' +HSL;
    var colorBox = document.getElementsByClassName('color-box')[0];
    colorBox.style.cssText += 'background-color: '+RGB+';';
    generateShades(HSL);
  }

  function close_shade_modal(){
    var elem = document.getElementsByClassName('shade-modal-container')[0];
    elem.className = 'shade-modal-container hidden clearfix';
  }

  // -------------------generate shades--------------------- //

  function generateShades(hsl){
   // hsl(0,10%,40%);
   var shadeBar;
   var parentShadeBar = document.getElementsByClassName('color-shades')[0];
   var background;
   var foreground;
   var RGB,R,G,B,HEX;
   var h = splitHSL(hsl)[0];
   var s = splitHSL(hsl)[1];
   var count = 0;

   destroy('color-shades');

    for(var i = 0; i < 34; i++){
      shadeBar = document.createElement('div');
      parentShadeBar.appendChild(shadeBar);
      shadeBar.className = 'shades';
      background = 'hsl('+h+', '+s+'%, '+count+'%)';
      RGB = hsl2rgb(h,s,count);
      HEX = rgb2hex(RGB);
      foreground = contrastForeground(RGB);
      shadeBar.style.cssText = 'background-color: '+RGB+'; color: '+foreground+';';
      shadeBar.innerHTML = '<h4 class = "shade-name">'+HEX+'</h4>';
      count += 3;
    }

  }

// save to my space
function save_to_my_space(color){
  var elem = document.createElement('div');
  var parent = document.getElementsByClassName('dashboard')[0];
  var background;
  var foreground;
  var RGB;
   parent.appendChild(elem);
  RGB = hex2rgb(color);
  var foreground = contrastForeground(RGB);
  background = color;
  elem.className = 'saved-color';
  elem.style.cssText += 'color: '+foreground+'; background-color: '+background+';';
  elem.innerHTML = '<h4 class = "color-name">'+background+'</h4><span style = "color: '+foreground+';" class = "remove-saved">&times;</span>';
  saved_count();
  open_error_modal();
  document.getElementById('error-text').innerHTML = 'Saved to My Space';
  setCookie();
}
// custom color addition

function add_custom_color(){
  var modal = document.getElementsByClassName('add-custom-modal-container')[0];
  var elem = document.createElement('div');
  var parent = document.getElementsByClassName('custom-color-container')[0];
  var color = document.getElementById('custom-color-value');
  var NAME,HEX,RGB,R,G,B;

  if(color.value == null || color.value == ''){
    open_error_modal();
    document.getElementById('error-text').innerHTML = 'Input field is empty';
  } else {
       try {
         parent.appendChild(elem);
         if(!color.value.match('#') && !color.value.match(',')){
           NAME = color.value;
           HEX  = colourName2Hex(NAME);
           RGB  = hex2rgb(HEX);
         } else if (color.value.match('#')){
           HEX = color.value;
           RGB = hex2rgb(HEX);
         } else if (color.value.match('(')){
           RGB = color.value;
           HEX = rgb2hex(HEX);
         }
         var foreground = contrastForeground(RGB);
         var background = color.value;
         elem.className = 'custom-color';
         elem.innerHTML = '<h4 class = "color-name">'+HEX+'</h4><span class = "color-icon details-icon"><i class="fa fa-info-circle"></i>info</span>'
         elem.style.cssText += 'background-color: '+HEX+'; color: '+foreground+';';
         modal.className = 'add-custom-modal-container hidden';
         color.value = '';
       } catch (e) {
         open_error_modal();
         document.getElementById('error-text').innerHTML = 'An error occured while adding a color, wrong color value';
         color.value = '';
       }
    }

}

function open_custom_color_modal(){
  var modal = document.getElementsByClassName('add-custom-modal-container')[0];
  modal.className = 'add-custom-modal-container visible';
}

function close_custom_color_modal(){
  var modal = document.getElementsByClassName('add-custom-modal-container')[0];
  modal.className = 'add-custom-modal-container hidden';
}

function saved_count(){
  var elem = document.getElementsByClassName('saved-color');
  var total = elem.length;
  document.getElementById('saved-count').innerHTML = total;
}

function open_error_modal(){
  var modal = document.getElementsByClassName('error-modal-container')[0];
  modal.className = 'error-modal-container visible';
}

function close_error_modal(){
  var modal = document.getElementsByClassName('error-modal-container')[0];
  modal.className = 'error-modal-container hidden';
}

function hasClass(elem, match){
  return elem.className.split(" ").indexOf(match) > -1 ;
}
function hasId(elem, match){
    return elem.id.split(" ").indexOf(match) > -1
}

function getEventTarget(e){
  evt = e || window.event;
  return e.target || e.srcElement;
}
  //---------------------Method Calls----------------- //
bindEvent(document.getElementById('toggle-dashboard-bg'), 'change', function(){
  toggle_dashboard_bg();
});

bindEvent(document.getElementById('toggle-body-bg'), 'change', function(){
  toggle_body_bg();
});

bindEvent(document.getElementById('add-custom-color-btn'),'click',function(){
 open_custom_color_modal();
});

bindEvent(document.getElementById('close-error-btn'),'click',function(){
 close_error_modal();
});

bindEvent(document.getElementById('save-btn'),'click',function(){
 var val = document.getElementById('hex-value');
 if(!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g,'');
  };
}
 var HEX = val.innerHTML.split(':')[1].trim();
 save_to_my_space(HEX);
});

bindEvent(document.getElementById('add-to-custom-list'),'click',function(){
 add_custom_color();
 bindEvent(document.getElementsByClassName('custom-color-container')[0], 'click', function(e){
    var RGB, HEX, HSL;
    if(e.target && hasClass(e.target,'details-icon')){
       e.stopPropagation();
       HEX = e.target.parentNode.innerHTML.split('>')[1].split('<')[0]
       RGB = hex2rgb(HEX);
       //HSL = rgb2hsl(RGB);
       open_shade_modal(RGB);
       bindEvent(document.getElementsByClassName('color-shades')[0], 'click', function(e){
          var RGB, HEX, HSL;
          var target = getEventTarget(e);
          if(target && hasClass(target,'shade-name')){
             HEX = target.innerHTML;
             RGB = hex2rgb(HEX);
             HSL = rgb2hsl(RGB);
             open_shade_modal(RGB);
         }
      });
   }
});
});

bindEvent(document.getElementById('close-shade-modal'),'click',function(){
 close_shade_modal();
});

bindEvent(document.getElementById('close-custom-modal-btn'),'click',function(){
 close_custom_color_modal();
});

bindEvent(window, 'scroll', function(){
  header_scroll(500);
});

bindEvent(document.getElementsByClassName('bar-wrapper')[0],'click',function(){
  toggle_dashboard();
});

bindEvent(document.getElementById('toggle-custom-color-btn'), 'click', function(){
  toggle_custom_color_container();
});

bindEvent(document.getElementsByClassName('dashboard')[0], 'click', function(e){
  //e.target.parentNode.removeChild(e.target);
});

bindEvent(document.getElementById('generate'),'click',function(){
  createMultiple();
});

bindEvent(document.getElementsByClassName("dashboard")[0],'click', function(e){
   var target = getEventTarget(e);
   if(target.className == 'remove-saved'){
     target.parentNode.parentNode.removeChild(target.parentNode);
   }
   saved_count();
});
function createMultiple(){
  var num = document.getElementById('no-of-colors');
  var val = num.value;
  var intVal = Math.round(parseInt(val));
  var pattern = /\d/;
  if(val == null || val == ''){
    open_error_modal();
    document.getElementById('error-text').innerHTML = 'Input field is empty';
  } else if(val > 150){
    open_error_modal();
    document.getElementById('error-text').innerHTML = 'Value too high';
  } else if(!val.match(pattern)){
    open_error_modal();
    document.getElementById('error-text').innerHTML = 'Value must be a number';
  } else {
    destroy('random-color-container');
    for(var i = 0;  i < intVal; i++){
      createNewRandom();
    }
  }
}
function doKey(e){
  var evt =  e || window.event; // IE 6  support
  var y = evt.which || evt.keyCode || 0;
  if(y == 13){ // if key pressed is Enter key
    createMultiple();
  }
  if(y == 27){ // key is escaped
    close_shade_modal();
    close_custom_color_modal();
    close_dashboard();
    close_error_modal();
  }
  if(y == 17){
    toggle_dashboard(); // key is m or M
  }
}
bindEvent(document.body, 'keydown', function(event){
   var that = event;
   doKey(that);
});

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var cont=getCookie("content");
    if (cont != "") {
        document.getElementsByClassName('dashboard')[0].innerHTML = cont;
    } else {
       cont = document.getElementsByClassName('dashboard')[0].innerHTML;
       if (cont != "" && cont != null) {
           setCookie("content", cont, 30);
       }
    }
}

bindEvent(window, 'load',function(){
  createMultiple();

  bindEvent(document.getElementsByClassName('random-color-container')[0], 'click', function(e){
    var target = getEventTarget(e);
    if(target && hasClass(target, 'details-icon')){
      open_shade_modal(e.target.parentNode.innerHTML.split('>')[1].split('<')[0]);
      bindEvent(document.getElementsByClassName('color-shades')[0], 'click', function(e){
         var RGB, HEX, HSL;
         var target = getEventTarget(e);
         if(target && hasClass(target,'shade-name')){
            HEX = target.innerHTML;
            RGB = hex2rgb(HEX);
            HSL = rgb2hsl(RGB);
            open_shade_modal(RGB);
        }
     });
    }

    if(target && hasClass(target, 'copy-icon')){
      executeCopy2(target, target.parentNode.innerHTML);
    }

    if(target && hasClass(target, 'save-icon')){
        HEX = e.target.parentNode.innerHTML.split('span')[2].split('>')[2].split('<')[0];
        save_to_my_space(HEX);
    }
  });

});
