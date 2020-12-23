var para = document.location.href.split("?"); 
		if($(para).length > 1){
			console.log($(para).length);
			$('#focusMove').focus();
		}
