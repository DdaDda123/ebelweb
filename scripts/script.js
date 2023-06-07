class Slider{
                constructor(elem){
                    this.elem = elem;
                }
                PrevImage(){
                    let left = 0;
                    const children = $(this.elem).children();
                    $(children[children.length - 1]).prependTo(this.elem);
                    left = Number($(this.elem).css("margin-left").slice(0, - 2)) - Number($(children[0]).css("width").slice(0, - 2)) - Number($(this.elem).css("gap").slice(0, - 2));
                    	$(this.elem).css("margin-left", left+"px");
                    $(this.elem).css("margin-left", left+"px");
         				left = Number($(this.elem).css("left").slice(0, - 2)) + Number($(children[0]).css("width").slice(0, - 2)) + Number($(this.elem).css("gap").slice(0, - 2));
         				$(this.elem).css("left", left+"px");
                }
                NextImage(){
                    let left = 0;
                    const children = $(this.elem).children();
                    left = Number($(this.elem).css("left").slice(0, -2)) - Number($(children[0]).css("width").slice(0, - 2)) - Number($(this.elem).css("gap").slice(0, - 2));
                    $(this.elem).css("left", left+"px");
                    setTimeout(() => {
                    	$(children[0]).appendTo(this.elem);
                    	left = Number($(this.elem).css("margin-left").slice(0, -2)) + Number($(children[0]).css("width").slice(0, - 2)) + Number($(this.elem).css("gap").slice(0, - 2));
                    	$(this.elem).css("margin-left", left+"px");
                    }, Number($(this.elem).css("transition").slice(5,-9))*1000);
                    
                }
            }
var MainPageSlider = new Slider("#main-page-slider .slider-window");
setInterval(nextImageMainSlider, 9000);
function nextImageMainSlider() {
	MainPageSlider.NextImage();
}
var Page2Slider = new Slider("#page2 .slider-window");
function ChangeImg2Page(type) {
	if (type == "next") {
		$(".slider-list").attr('disabled', true);
		Page2Slider.NextImage();
		setInterval(() => {
			$(".slider-list").attr('disabled', false);
		}, Number($("#page2-slider .slider-window").css("transition").slice(5,-9))*1000)
	}
	else {
		$(".slider-list").attr('disabled', true);
		Page2Slider.PrevImage();
		setInterval(() => {
			$(".slider-list").attr('disabled', false);
		}, Number($("#page2-slider .slider-window").css("transition").slice(5,-9))*1000)
	}
}
let windowWidth = $(window).width();
// $(window).resize(() => {
// 	let left = Number($("#page2 .slider-window").css("left").slice(0,-2)) + $(window).width() - windowWidth;
// 	console.log(Number($("#page2 .slider-window").css("left").slice(0,-2)) + $(window).width() - windowWidth)
// 	$("#page2 .slider-window").css("left", left+"px")
// 	windowWidth = $(window).width();
// });