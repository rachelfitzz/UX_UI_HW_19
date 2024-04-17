// $(".banner").on("mouseover", function() {
//     $(this).animate({height: +=10%});
// });
// $(".banner").on("mouseout", function() {
//     $(this).animate({height: '-=20px'},500);
// });

$(document).ready(function() {
    $('.banner').hover(function(){
        this.classList.add('bannerLarge');
    }, function() {
       this.classList.remove('bannerLarge')
    });
});