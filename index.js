$(document).ready(function() {
    $('.banner').hover(function(){
        this.classList.add('bannerLarge');
    }, function() {
       this.classList.remove('bannerLarge')
    });
});