$(function(){
	$("#navbartoggle").blur(function (event){
		var screenwidth= window.innerWidth;
		if(screenwidth<992){
			$("#navbarTogglerDemo02").collapse('hide')
		}
	});
	$("#navbartoggle").click(function (event) {
		$(event.target).focus();
  });
});
