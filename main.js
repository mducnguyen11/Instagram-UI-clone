
$(document).ready(()=>{

    $(".story-slide").owlCarousel();
    $(".post-slide").owlCarousel();


   

    
        var owl_1 = $('.story-slide');
        owl_1.owlCarousel();
        // Go to the next item
        $('.owl-next-1').click(function() {
            owl_1.trigger('next.owl.carousel');
        })
        // Go to the previous item
        $('.owl-prev-1').click(function() {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl_1.trigger('prev.owl.carousel', [300]);
        })


        var owlslide = $('.post-slide');
        owlslide.owlCarousel();
        // Go to the next item
        $('.owl-next-2').click(function() {
            owlslide.trigger('next.owl.carousel');
        })
        // Go to the previous item
        $('.owl-prev-2').click(function() {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owlslide.trigger('prev.owl.carousel', [300]);
        })
    
    
       
    
})
$('.story-slide').owlCarousel({
    loop:true,
    margin: 15,
    nav:false,
    autoWidth:true,
    dots:false,
    dotEach:false,
    items:1
    
    })
$('.post-slide').owlCarousel({
        loop:true,
        margin: 0,
        nav:false,
        autoWidth:false,
        dots:true,
        dotEach:false,
        items:1,
        
})


    
