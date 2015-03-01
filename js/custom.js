function fb_logout(){
	$.removeCookie("fblogin");
	window.location = 'login.html';
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
