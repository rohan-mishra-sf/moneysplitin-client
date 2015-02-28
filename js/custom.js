function fb_logout(){
	$.removeCookie("fblogin");
	window.location = '/moneysplitin-client/login.html';
}

function check_login(){
	var cookieValue = $.cookie("fblogin");
	if(typeof cookieValue != 'undefined'){
		return true;
	}
	else{
		return false;
	}

}
