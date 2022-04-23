
// $(document).ready(function(){
//     $(".btn").click(function(){
//         $(".content__image").slideToggle(1000);
        
//         $(this).toggleClass("active");
//     });
// });

// $(document).ready(function(){
//     $(".btn").click(function(){

//         $(".content__image").animate({opacity: "0.1", left: "+=400"}, 1200)
//         .animate({opacity: "0.4", top: "+=160", height: "20", width: "20"}, "slow")
//         .animate({opacity: "1", left: "0", height: "100", width: "100"}, "slow")
//         .animate({top: "0"}, "fast")
//         .slideUp()
//         .slideDown("slow")
//         return false;
//     }); 
// });

// $(document).ready(function(){

//     $(".rek .del").click(function(){
//         $(this).parents(".rek").animate({ opacity: "hide" }, "slow");
//     });

// });

const formWrap = document.getElementById('form-wrap');

function openForm() {
    formWrap.classList.add('open');
}