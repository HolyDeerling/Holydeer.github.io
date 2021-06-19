$(document).ready(function(){
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
    e.preventDefault();
    var t = 300;
    var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
    $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
    });
    
    window.addEventListener("resize", AutoScale); 

    AutoScale(); 
    function AutoScale()
    {
        let width = window.innerWidth; 
    
        if(width > 1280)
        {
            ChangeScale("big");
        }
        else if(width <= 1280 && width > 720)
        {
            ChangeScale("normal");
        }
        else if(width < 720)
        {
            ChangeScale("small");
        }
    }