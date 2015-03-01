function fb_logout(){
	var date = new Date();
	date.setTime(date.getTime() - (10 * 60 * 1000));
	$.cookie("fblogin", "", { expires: date });
	window.location = 'login.html';
}

function check_login(){
	var cookieValue = $.cookie("fblogin");
	if(typeof cookieValue != null ){
		return true;
	}
	else{
		return false;
	}

}
