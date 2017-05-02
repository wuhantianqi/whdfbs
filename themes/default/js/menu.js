$(document).ready(function(){

	$(".main_visual").hover(function(){
		$("#btn_prev,#btn_next").fadeIn()
	},function(){
		$("#btn_prev,#btn_next").fadeOut()
	});

	$dragBln = false;

	$(".main_image").touchSlider({
		flexible : true,
		speed : 200,
		btn_prev : $("#btn_prev"),
		btn_next : $("#btn_next"),
		paging : $(".flicking_con a"),
		counter : function (e){
			$(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
		}
	});

	$(".main_image").bind("mousedown", function() {
		$dragBln = false;
	});

	$(".main_image").bind("dragstart", function() {
		$dragBln = true;
	});

	$(".main_image a").click(function(){
		if($dragBln) {
			return false;
		}
	});

	timer = setInterval(function(){
		$("#btn_next").click();
	}, 5000);

	$(".main_visual").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			$("#btn_next").click();
		},5000);
	});

	$(".main_image").bind("touchstart",function(){
		clearInterval(timer);
	}).bind("touchend", function(){
		timer = setInterval(function(){
			$("#btn_next").click();
		}, 5000);
	});

});
var mybox = document.getElementById("ul").getElementsByTagName("a");
var mybgmove = document.getElementById("bgmove");

for (var i = 0; i < mybox.length; i++) {
	mybox[i].index = i;
	mybox[0].style.color = "#f6f6f6";
	mybgmove.style.width = mybox[0].offsetWidth + "px";
	mybgmove.style.left = mybox[0].offsetLeft + "px";
	mybox[i].onmousemove = function () {
		mybgmove.style.width = this.offsetWidth + "px";
		mybgmove.style.left = this.offsetLeft + "px";
		this.style.color = "#f6f6f6";
		if (this.index == 0) {
			return;
		} else {
			mybox[0].style.color = "#000";
		}
	};
	mybox[i].onmouseout = function () {
		mybgmove.style.width = mybox[0].offsetWidth + "px";
		mybgmove.style.left = mybox[0].offsetLeft + "px";
		this.style.color = "#000";
		mybox[0].style.color = "#f6f6f6";

	};
}

var mytop = document.getElementById("mytop");
var navs = document.getElementById("navs");
var upload = document.getElementById("upload");
window.onscroll = function () {
	var myTop = document.documentElement.scrollTop || document.body.scrollTop;
	var myNavs = document.documentElement.scrollTop || document.body.scrollTop;
	if (myTop >= 400) {
		mytop.style.display = "block";
		upload.style.display = "block";
	} else {
		mytop.style.display = "none";
		upload.style.display = "none";
	}
	if (myNavs >= 61) {
		navs.style.display = "block";
	} else {
		navs.style.display = "none";
	}
}


