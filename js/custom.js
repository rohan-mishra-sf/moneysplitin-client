function fb_logout(){
	$.removeCookie("fblogin");
	window.location = 'login.html';
}

function check_login(){
	var cookieValue = $.cookie("fblogin");
	if(typeof cookieValue != 'undefined' || cookieValue != null){
		return true;
	}
	else{
		return false;
	}

}
