
var lyt = {

	jQueryCdnUrl: 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js',

	removeSpace: function(stringToOperate){
		return stringToOperate.replace(/\s+/g,'');
	},

	removeWord: function(stringToOperate, wordToRemove){
		var regex = new RegExp(wordToRemove,"g");
 		return stringToOperate.replace(regex, "");
	},


	replaceWord: function(stringToOperate, wordToReplace, replaceWithWord){
		var regex = new RegExp(wordToReplace,"g");
		return stringToOperate.replace(regex, replaceWithWord);
	},

	replaceSpace: function(stringToOperate, replaceWithWord){
		return stringToOperate.replace(/\s+/g, replaceWithWord);
	},


	validateEmail: function(passedEmailId){
    	if( this.isUndefined(passedEmailId) || this.isNull(passedEmailId) || passedEmailId === "" ){
        	return null;
    	}
    	var emailRegex= /^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]+\.[A-Za-z]{2,6}$/;
    	var emailValidityStatus = emailRegex.test(passedEmailId);
    	return emailValidityStatus;
	},

	convertToCamelCase: function(stringPassed,separator,firstLetterUpperCase){
		if(stringPassed === undefined || stringPassed === null || stringPassed === ""){
			throw "Error: Arguments passed to function 'convertToCamelCase' are either undefined or contain empty string,\n  \
			Description : convertToCamelCase(stringPassed, separator, firstLetterUpperCase);\n \
			stringPassed : String to be converted into CamelCase;\n \
			separator : separator that needs to be removed while converting to Case (defaultValue: \'\');\n " +
			"firstLetterUpperCase: true/false, if true firstletter of the string will be in upperCase (defaultValue: false)";
		}
		
		if(separator === undefined){
			separator = "";
			
			var validateSpaceInString = stringPassed;
			if(validateSpaceInString.split(" ").length === 1){
				return stringPassed;
			}
		}
		
		
		if(stringPassed.indexOf(separator) < 0){
			return stringPassed;
		}
		
		if(firstLetterUpperCase === undefined || firstLetterUpperCase !== true){
			firstLetterUpperCase = false;
		}
		
	    stringPassed = stringPassed.toLowerCase();
	    stringPassed = stringPassed.split('');
	    
	    if(firstLetterUpperCase === true){
	    	stringPassed[0] = stringPassed[0].toUpperCase();
	    }
	    
	    
	    for(var index=0; index<stringPassed.length; index++){
	        if((stringPassed[index] === separator &&  stringPassed[index+1] !== "") || stringPassed[index] === " " ){
	        	stringPassed[index] = "";
	            stringPassed[index+1] = stringPassed[index+1].toUpperCase();
	        }
	    }
	    
	    stringPassed = stringPassed.join("");
	    stringPassed = this.removeSpace(stringPassed);
	    return stringPassed;
	},
	
	
	checkElementInArray: function(passedArray, elementToCheck){
		if(passedArray.indexOf(elementToCheck) < 0 ){
			return false;
		}
		else{
			return true;
		}
	},

	createObjectForThisGroupOfInputs: function(parentSelector){
		if(parentSelector === undefined){
			throw "Error: parentSelector argument is undefined,\n  \
			Description : createObjectForThisGroupOfInputs(parentSelector);\n \
			parentSelector : Selector which contains the input fields to be converted into JSON Object;\n \ ";
		}
		var ObjectToReturn = {};
		$('[data-object-key="true"]',parentSelector).each(function(){
			var key = $(this).attr('name');
			if($(this).is(':radio')){
				if($(this).is(':checked')){
					ObjectToReturn[key] = $('input[type="radio"][name="'+key+'"]:checked').val();
				}
			}
			else{
				ObjectToReturn[key] = $(this).val();
			}
			
		});
		
		return ObjectToReturn;
	},

	validateJQuery: function(){
		if(typeof $ === "function" || typeof jQuery === "function"){
			return true;
		}
		else{
			return false;
		}
	},


	hideAndShowWithFade: function(hideSelector, showSelector, hideTime, showTime){
		if(this.validateJQuery()){
			if(this.isUndefined(hideTime)){
				hideTime = "";
			}
			if(this.isUndefined(showTime)){
				showTime = "";
			}

			$(hideSelector).fadeOut(hideTime);
			$(showSelector).fadeIn(showTime);
		}
		else{
			if(confirm("jQuery library not found. \n Do you want to add it ?")){
				addScriptDynamically(this.jQueryCdnUrl);
				this.hideAndShowWithFade(hideSelector, showSelector, hideTime, showTime);
			}
			else{
				alert("");
			}
		}
	},


	hideAfterShowWithFade: function(hideSelector, showSelector, hideTime, showTime){
		if(this.validateJQuery()){
			if(this.isUndefined(hideTime)){
				hideTime = "";
			}
			if(this.isUndefined(showTime)){
				showTime = "";
			}


			$(showSelector).fadeIn(showTime, function(){
				$(hideSelector).fadeOut(hideTime);
			});
		}
		else{
			if(confirm("jQuery library not found. \n Do you want to add it ?")){
				addScriptDynamically(this.jQueryCdnUrl);
			}
			else{

			}
		}
	},


	hideBeforeShowWithFade: function(hideSelector, showSelector, hideTime, showTime){
		if(this.validateJQuery()){
			if(this.isUndefined(hideTime)){
				hideTime = "";
			}
			if(this.isUndefined(showTime)){
				showTime = "";
			}


			$(showSelector).fadeOut(hideTime, function(){
				$(hideSelector).fadeIn(showTime);
			});
		}
		else{
			if(confirm("jQuery library not found. \n Do you want to add it ?")){
				addScriptDynamically(this.jQueryCdnUrl);
			}
			else{

			}
		}
	},


	addAndRemoveClass: function(addClassSelectors, classToAdd, removeClassSelectors, classToRemove){
		if(this.validateJQuery()){
			var arguments = [];	
			arguments.push(addClassSelectors, classToAdd, removeClassSelectors, classToRemove);
			var argumentsStatus = this.argumentsBasicValidity(arguments);
			if(!argumentsStatus){
				throw "Error: Arguments passed to function 'addAndRemoveClass' are either undefined or contain empty string,\n  \
				Description : addAndRemoveClass(addClassSelectors, classToAdd, removeClassSelectors, classToRemove);\n \
				addClassSelectors : Selector(s) to which class will be added;\n \
				classToAdd : Name of the Class which needs to be added;\n  \
				removeClassSelectors : Selector(s) from which class will be removed;\n \
				classToRemove : Name of the Class which needs to be removed;\n ";
			}
			
			$(showSelector).fadeOut(hideTime, function(){
				$(hideSelector).fadeIn(showTime);
			});
		}
		else{
			if(confirm("jQuery library not found. \n Do you want to add it ?")){
				addScriptDynamically(this.jQueryCdnUrl);
			}
			else{

			}
		}
	},



	addMarkup: function(sourceSelector, destinationSelector, position){
		var errorMessage = "\ " +
				"\nError: Arguments passed to function 'appendMarkup' are either undefined or contain empty string,\n \
				Description : addMarkup(sourceSelector, destinationSelector, position); \n \
				sourceSelector : Selector(s) which child to be copied;\n \
				position:(append/prepend)  defaultValue - 'append', if undefined/null/true/'' i.e empty string, default value will be used; \n \
				destinationSelector : Selector(s) where markup should be appended; \n ";
		
		
		
		if(this.validateJQuery()){
			var arguments = [];	
			arguments.push(sourceSelector, destinationSelector);	
			var argumentsStatus = this.argumentsBasicValidity(arguments);
			
						
			if(!argumentsStatus){
				throw errorMessage;
			}
			
			if(this.isUndefined(position) || this.isNull(position) || this.isEmptyString(position) ){
				position = true;
			}
			else if(position.toUpperCase() === 'APPEND'|| (position+'').toUpperCase() === 'TRUE' ){
				position = true;
			}
			else if(position.toUpperCase() === 'PREPEND' || (position+'').toUpperCase() === 'FALSE' ){
				position = false;
			}
			else{
				throw errorMessage;  
			}

			if(position){
				$(destinationSelector).append($(sourceSelector).html());
				return $(destinationSelector).children().last();
			}
			else{
				$(destinationSelector).prepend($(sourceSelector).html());
				return $(destinationSelector).children().first();
			}

			
		}
		else{
			if(confirm("jQuery library not found. \n Do you want to add it ?")){
				addScriptDynamically(this.jQueryCdnUrl);
			}
			else{

			}
		}
		
	},

	
	
	addScriptDynamically: function(scriptUrl){
		var head = document.head;
  		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = scriptUrl;
		head.appendChild(script);
		return;
	},


	argumentsBasicValidity : function(argumentsArrayToTest){
		var validityStatusFlag = true;
		for(var index=0; index<argumentsArrayToTest.length; index++){
			if(this.isUndefined(argumentsArrayToTest[index])){
				console.log(index+" ===== undefined");
				validityStatusFlag = false;
				break;
			}

			if(this.isEmptyString(argumentsArrayToTest[index])){
				console.log(index+" ===== undefined");
				validityStatusFlag = false;
				break;
			}

			if(this.isNull(argumentsArrayToTest[index])){
				console.log(index+" ===== undefined");
				validityStatusFlag = false;
				break;
			}
		}
		return validityStatusFlag;
	},

	isUndefined: function(identifierToCheck){
		return identifierToCheck === undefined;
	},

	isNull: function(identifierToCheck){
		return (identifierToCheck + "") === "null";
	},

	isEmptyString: function(identifierToCheck){
		return (identifierToCheck+"") === "";
	},

}