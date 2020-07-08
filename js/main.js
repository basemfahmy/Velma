$(document).ready(function(){
  
/*start scroll to element smoothly*/    
$(".navbar-light .navbar-nav .nav-link").click(function(e){
    e.preventDefault();
   // console.log( $(this).data("location") )  //test only
    $("body,html").animate(
        { scrollTop: $("#"+$(this).data("location") ).offset().top-65 },1500 )
})    
/*end scroll to element smoothly*/    
    
/*start sync section with links*/  
$(window).scroll(function(){
 $(".my-block").each(function(){
    if( $(window).scrollTop() > $(this).offset().top-66  )  {
    var myelement = $(this).attr("id"); // define variable
    // console.log(  myelement  ) // for test only
        $('.navbar-light .nav-link[data-location="'+myelement+'"]').parent()
            .addClass("active").siblings().removeClass("active")
            }
        })
    })
/*end sync section with links*/ 
    
/*start go-up button */
 $(window).scroll(function(){ // for show - hide the button
     if( $(window).scrollTop() > 240){
         $(".go-up").fadeIn(300) // show it
     }
     else{
        $(".go-up").fadeOut(300) // hide it again 
     }
 })   
    $(".go-up").click(function(){ //  go up to the top of page
        $("body,html").animate({scrollTop:0},1500)
    })
/*end go-up button */
    
/*start header section*/    
$(".header .info a").click(function(e){ // will scroll to about
    e.preventDefault()
    $("html,body").animate({scrollTop: $(".about").offset().top-65},1500)
})
/*end header section*/ 
    
/*start our-courses section*/ 
$(".courses .course-card .image").mouseenter(function(){ // on hover in course
    $(this).find("img").css({ transform:" scale(1.1,1.1)"})
})    
    
$(".courses .course-card .image").mouseleave(function(){ // on mouse leave
    $(this).find("img").css({ transform:" scale(1,1)"})
})    
    
    
$(".courses .buttons button").click(function(){  /*for main buttons in shuffle */    
    $(this).addClass("active").siblings().removeClass("active")
})       
/*end our-courses section*/ 
    
 /* start about section*/    
    $(".about .my-button").click(function(e){
        e.preventDefault();
        $("body,html").animate({scrollTop: $(".our-price").offset().top-65 },1500)
    })
/* end about section*/    
    
/*start blogs section */
$(".blog .blog-card .image").mouseenter(function(){ //on mouse enter 
    $(this).find("img").css({transform:"scale(1.1,1.1)"})
})
    
$(".blog .blog-card .image").mouseleave(function(){ //on mouse leave
    $(this).find("img").css({transform:"scale(1,1)"})
})    
/*end blogs section */

/*start faqs section*/  
$(".faqs section i").click(function(){   // for click on icon
$(this).toggleClass("fa-chevron-right fa-chevron-down") // for toggle class on click
    $(this).parent().find("p").slideToggle()
})  
  
$(".faqs section h3").click(function(){ // for click on h3
    $(this).parent().find("p").slideToggle()
 $(this).parent().find("i").toggleClass("fa-chevron-right fa-chevron-down")//toggle icon
})    
/*end faqs section*/    
    
// start our courses section - mixit up  shuffle plugin   
var mixer = mixitup('.mix-container');
var mixer = mixitup(containerEl);

    var mixer = mixitup(mix-container, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
})
// end our courses section - mixit up  shuffle plugin   
    
})//end main function do not touch
