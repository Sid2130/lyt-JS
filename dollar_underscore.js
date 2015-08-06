// var lyt = function(id){
 
//    console.log("asafdsfdsef");
//    // About object is returned if there is no 'id' parameter
//    var about = {
//       Version: 0.1,
//       Author: "Sadique Quraishi",
//    };
 
//    if (id) {
 
//       // Avoid clobbering the window scope:
//       // return a new lyt object if we're in the wrong scope
//       if (window === this) {
//          return new lyt(id);
//       }
 
//       // We're in the correct object scope:
//       // Init our element object and return the object
//       this.e = document.getElementById(id);
//       return this;
//    }
//    else {
//       // No 'id' parameter was given, return the 'about' object
//       return about;
//    }
// };

//var lyt = {};


lyt = {
   test: function(){
      console.log('testing');
   },

   removeSpace: function(passedString){
      return passedString.replace(/\s+/g,'');
   },

   removeWord: function(passedString, wordToRemove){
      var regex = new RegExp(wordToRemove,"g");
      return passedString.replace(regex, "");
   },


   replaceWord: function(passedString, wordToReplace, replaceWithWord){
      var regex = new RegExp(wordToReplace,"g");
      return passedString.replace(regex, replaceWithWord);
   },

   replaceSpace: function(passedString, replaceWithWord){
      return passedString.replace(/\s+/g, replaceWithWord);
   },


   validateEmail: function(passedEmailId){
      if( this.isUndefined(passedEmailId) || this.isNull(passedEmailId) || passedEmailId === "" ){
         return null;
      }
      var emailRegex= /^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]+\.[A-Za-z]{2,6}$/;
      var emailValidityStatus = emailRegex.test(passedEmailId);
      return emailValidityStatus;
   },



   find : function(selector, selectorType, parentReference, index){
      selectorType = selectorType.toUpperCase();

      if( index !== undefined){
         index = parseInt(index);
         if(isNaN(index) || index+"" === "NaN"){
            //throw Error
            return;
         }
      }

      if( parentReference === undefined || parentReference === '' || parentReference === null){
         parentReference = document;
      }

      if(selectorType === 'ID'){
         return document.getElementById(selector);
      }

      else if(selectorType === 'CLASS'){

         if(index === undefined){
            console.log("no index");
            //return parentReference.getElementsByClassName(selector);
            this.element = parentReference.getElementsByClassName(selector);
         }
         else{

            //return parentReference.getElementsByClassName(selector)[index];
            this.element = parentReference.getElementsByClassName(selector)[index];
         }
         
      }

      else if( selectorType === 'TAG' || selectorType === 'TAGNAME' ){
         
         if(index === undefined){
            return parentReference.getElementsByTagName(selector);
         }
         else{
            return parentReference.getElementsByTagName(selector)[index];
         }
      }

      else if(selectorType === 'NAME'){
         return parentReference.getElementsByName(selector);
      }

      else{
         if(index === undefined){
            return parentReference.querySelectorAll(selector);
         }
         else{
            return parentReference.querySelectorAll(selector)[index];
         }
      }

      return this;
   },


   findFirst : function(selector, selectorType, parentReference){
      selectorType = selectorType.toUpperCase();

      if(this.element){
         parentReference = this.element;
      }


      if( parentReference === undefined || parentReference === '' || parentReference === null){
         parentReference = document;
      }

      if(selectorType === 'CLASS'){
         this.element = parentReference.getElementsByClassName(selector)[0];
      }
      else if( selectorType === 'TAG' || selectorType === 'TAGNAME' ){
         this.element = parentReference.getElementsByTagName(selector)[0];
      }

      else{
         this.element = parentReference.querySelectorAll(selector)[0];
      }

      return this;
   },


   css : function(element, styleArg1, styleArg2){
      var styleElement = element.style;

      if( styleArg2 !== undefined ){
         styleElement[styleArg1] = styleArg2;
      }
      else{
         for(cssProp in styleObject){
            styleElement[cssProp] = styleObject[cssProp];
         }
      }
   },


   hasClass : function(element, classToVerify){
      return element.classList.contains(classToVerify);
   },


   addClass : function(element, classToAdd, callback){
      var classExists = this.hasClass(element, classToAdd);
      if(!classExists){
         element.classList.add(classToAdd);
      }

      if(callback !== undefined){
         callback();
      }
   },


   removeClass : function(element, classToRemove, callback){
      var classExists = this.hasClass(element, classToRemove);
      if(classExists){
         element.classList.remove(classToRemove);
      }

      if(callback !== undefined){
         callback();
      }
   },


   toggleClass : function(element, classToToggle, callback){
      var classExists = this.hasClass(element, classToToggle);
      if(classExists){
          element.classList.remove(classToToggle);
      }
      else{
         element.classList.add(classToToggle);
      }

      if(callback !== undefined){
         callback();
      }
   },

   hide: function(element, callback){
      element.style.display = 'none';
      if(callback !== undefined){
         callback();
      }
   },

   show: function(element, callback){
      element.style.opacity = 1;
      element.style.removeProperty('display');
      if(callback !== undefined){
         callback();
      }
   },

   toggle: function(element, callback){
      if( element.style.display === 'none' ){
         this.show(element);
      }
      else{
         this.hide(element);
      }

      if(callback !== undefined){
         callback();
      }
   },


   fadeIn : function(element){
      element.style.opacity = 0;
      element.style.removeProperty('display');
      function fadeIt(){
         var val = parseFloat(element.style.opacity);
          if ( ((val += 0.05) < 1) ) {
            console.log(val);
            element.style.opacity = val;
            requestAnimationFrame(fadeIt);
          }
          else{
            element.style.opacity = 1;

          }
      }
      fadeIt();
   },


   fadeOut : function(element){
      element.style.opacity = 1;
      function fadeIt(){
         var val = parseFloat(element.style.opacity);
          if ( ((val -= 0.05) > 0) ) {
            element.style.opacity = val;
            requestAnimationFrame(fadeIt);
          }
          else{
            element.style.opacity = 0;
            element.style.display = 'none';
          }
      }
      fadeIt();
   },

   addScript: function(scriptUrl){
      var head = document.head;
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = scriptUrl;
      head.appendChild(script);
      return;
   },

   capitalize : function(passedString){
      passedString = passedString.split("");
      passedString[0] = passedString[0].toUpperCase();
      passedString = passedString.join('');
      return passedString;
   },

   removeSeparatorAndCapitalize: function(passedString,separator){
      var stringToReturn = '';
      passedString = passedString.split(separator);
      for(var index=0; index<passedString.length; index++ ){
         console.log(passedString[index]);
         var capitalizedString = this.capitalize(passedString[index]);
         stringToReturn += capitalizedString;

      };
      return stringToReturn;
   },

   convertToCamelCase: function(stringPassed, separator, firstLetterUpperCase){
      if(stringPassed === undefined || stringPassed === null || stringPassed === ""){
         throw "Error: Arguments passed to function 'convertToCamelCase' are either undefined or contain empty string,\n  \
         Description : convertToCamelCase(stringPassed, separator, firstLetterUpperCase);\n \
         stringPassed : String to be converted into CamelCase;\n \
         separator : separator that needs to be removed while converting to Case (defaultValue: \'\');\n " +
         "firstLetterUpperCase: true/false, if true firstletter of the string will be in upperCase (defaultValue: false)";
      }
      
      if(firstLetterUpperCase === undefined || firstLetterUpperCase !== true){
         firstLetterUpperCase = false;
      }
      
      if(separator === undefined || separator === ''){
         separator = "";
      }

      stringPassed = this.removeSeparatorAndCapitalize(stringPassed, ' ');

      if(separator !== ''){
         stringPassed = this.removeSeparatorAndCapitalize(stringPassed, separator);
      }

      stringPassed = stringPassed.split("");
      if(firstLetterUpperCase){
         stringPassed[0] = stringPassed[0].toUpperCase();
      }
      else{
         stringPassed[0] = stringPassed[0].toLowerCase();
      }
      stringPassed = stringPassed.join("");
      return stringPassed;
   },
   
   
   serializeObject: function(parentId){
       var objectToReturn = {};
       var fetchBySingleValueElements = ["textarea", "text", "radio", "select-one"];
       var fetchByMultipleValueElements = ["checkbox", "select-multiple"];

       var parentElement = document.getElementById(parentId);
       objectElements = parentElement.getElementsByClassName('objectElement');
       var objectElementLength = objectElements.length;

       for( var index=0; index<objectElementLength; index++){
         var keyName = '',
            value = '',
            valueArray = [];
         keyName = objectElements[index].getAttribute("data-name");
         if( fetchBySingleValueElements.indexOf(objectElements[index].type) > -1){
            if(objectElements[index].type === "radio"){
               if(objectElements[index].checked){
                  value = objectElements[index].value;
                  objectToReturn[keyName] = value;
               }
            }
            else{
               if(objectElements[index].type === "select-one"){
                  var currentElement = objectElements[index];
                  value = currentElement.options[currentElement.selectedIndex].value;
               }
               else{
                  value = objectElements[index].value;
               }
               objectToReturn[keyName] = value;
            }
            // objectToReturn[keyName] = value;
         }

         else if( fetchByMultipleValueElements.indexOf(objectElements[index].type) > -1 ){
            if(objectElements[index].type === "checkbox"){
               if(objectElements[index].checked){
                  value = objectElements[index].value;
                  if(objectToReturn.hasOwnProperty(keyName)){
                     objectToReturn[keyName].push(value);
                  }
                  else{
                     objectToReturn[keyName] = [];
                     objectToReturn[keyName].push(value);
                  }
               }
            }
            else{
               var options = objectElements[index].options;
               value = [];
               for(var jindex=0; jindex<options.length; jindex++){
                  if(options[jindex].selected){ 
                     value.push(options[jindex].value);
                  }
               };
               objectToReturn[keyName] = value;
            }
         }

         else{
            value = objectElements[index].innerText;
            objectToReturn[keyName] = value;
         }
      }
      console.log(JSON.stringify(objectToReturn));
      return objectToReturn;
   },


   data : function(elementSelector, dataName, dataValue){
      var element = document.querySelector(elementSelector);
      console.log(element);
      console.log(dataName +" ==== "+dataValue);

      if((dataName !== undefined && dataName !== '') && (dataValue !== undefined && dataValue !== '')){
         element.setAttribute('data-'+dataName, dataValue);
         return dataValue;
      }

      else if((dataName !== undefined && dataName !== '') && (dataValue === undefined || dataValue === '')){
         var dataElement = element.dataset;
         return element.dataset[dataName];
      }
      else{
         var dataElement = element.dataset;
         dataElement = JSON.stringify(dataElement);
         dataElement = JSON.parse(dataElement);
         return dataElement;
      }
   },

   convertStringToHTML : function(passedString){
      var frame = document.createElement('iframe');
      frame.style.display = 'none';
      document.body.appendChild(frame);             
      frame.contentDocument.open();
      frame.contentDocument.write(passedString);
      frame.contentDocument.close();
      var markup = frame.contentDocument.body.children;
      document.body.removeChild(frame);
      console.log(markup);
      return markup;
   }

}