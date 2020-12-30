document.addEventListener("DOMContentLoaded", function () {
    //code JavaScript
    var slideshow = document.querySelectorAll(".img img");
    var nextslide = document.querySelector(".next");
    var prevslide = document.querySelector(".prev");

    /* 
        click chuyen slide
    */
        // next slide 
    nextslide.addEventListener("click",function(){
        var slide= document.querySelector('img.active');
        var vitri =0;
        for (vitri=0;slide=slide.previousElementSibling;vitri++){
        }
        console.log("vi tri " + vitri);
        if (vitri < (slideshow.length-1)){
            for (var i=0;i<slideshow.length;i++){
                slideshow[i].classList.remove("active");
            }
            slideshow[vitri].nextElementSibling.classList.add('active');
        }else {
            for (var i=0;i<slideshow.length;i++){
                slideshow[i].classList.remove("active");
            }
            slideshow[0].classList.add('active');
        }
    });
        // prev slide
    prevslide.addEventListener("click",function(){
        var slide= document.querySelector('img.active');
        var vitri =0;
        var slidecuoi = slideshow.length -1;
        for (vitri=0;slide=slide.previousElementSibling;vitri++){
        }
        console.log(vitri);
        for (var i=0;i<slideshow.length;i++){
            slideshow[i].classList.remove("active");
        }
        if((vitri==0)||(vitri< 0)){
            
            slideshow[slidecuoi].classList.add("active");
        }else{
            vitri = vitri-1;
            slideshow[vitri].classList.add("active");
        }
    });

    autoslideshow();
    function autoslideshow() {
        var vitri = 0;
        var thoigian =setInterval(function () {
            var slide= document.querySelector('img.active');
            var vitri =0;
            // tinh vi tri cua slide
            for (vitri=0;slide=slide.previousElementSibling;vitri++){
            }

           /*
                auto slide
           */
            if (vitri < (slideshow.length-1)){
                for (var i=0;i<slideshow.length;i++){
                    slideshow[i].classList.remove("active");
                }
                slideshow[vitri].nextElementSibling.classList.add('active');
            }else {
                for (var i=0;i<slideshow.length;i++){
                    slideshow[i].classList.remove("active");
                }
                slideshow[0].classList.add('active');
            }

        },4000)
    }
    /*
    show menu khi responsive < 992px
    
    */
//    var Browser = window.innerWidth
//     || document.documentElement.clientWidth
//     || document.body.clientWidth;
    var show =document.querySelector('.click-show-menu a');
    var ulli = document.querySelector('#menu ul');
    // console.log(show);
    // console.log(Browser);
    // console.log(ulli);
       show.addEventListener("click",function(){
           if(window.pageXOffset < 992){
            // console.log("hoangbeo");
            ulli.classList.toggle("show-menu");
           }else{
               console.log("sai");
           }
       });
    /*
       su kien cuon chuot
    */
   var pageY = 400;
   const up= document.querySelector(".knife-and-fork");
   const up1= document.querySelector(".icon-laugh");
   const up2= document.querySelector(".birthday");
   let chuyendongbaking =document.querySelectorAll(".baking-image"); 
   let chuyendong = document.querySelectorAll(".baking-gioithieu p");
//    console.log(chuyendong);
//     console.log(window.pageYOffset);
    window.addEventListener("scroll",function(){
    // console.log(window.pageYOffset);
     if((window.pageYOffset > 70)){
            pageY=600;
            up.classList.add("up");
            up.classList.remove("xuong");
            up1.classList.add("up");
            up1.classList.remove("xuong");
            up2.classList.add("up");
            up2.classList.remove("xuong");
            if(window.pageYOffset >= 400 && window.pageYOffset <= 650){
                chuyendongbaking[0].classList.add("chuyendong-baking");

                for(i=0;i<chuyendong.length;i++){
                    if(i%2 == 0){
                        chuyendong[i].classList.add("chuyendong-baking");
                    }else{
                        chuyendong[i].classList.add("chuyendongsau");
                    }
                }
            }else if(window.pageYOffset > 1300 && window.pageYOffset <= 1400){
                chuyendongbaking[1].classList.add("chuyendong-baking");
                for(i=0;i<chuyendong.length;i++){
                    if(i%2 == 0){
                        chuyendong[i].classList.add("chuyendong-baking");
                    }else{
                        chuyendong[i].classList.add("chuyendongsau");
                    }
                }
            }
     }
     else if(window.pageYOffset <= 250){
        if( pageY == 600){
            this.console.log("hoangbeoooo");
            up.classList.add("xuong");      
            up.classList.remove("up");
            up1.classList.add("xuong");
            up1.classList.remove("up");
            up2.classList.add("xuong");
            up2.classList.remove("up");
        }
     }

})
}, false);  