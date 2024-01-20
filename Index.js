/*Search bar JS Start*/


$("#searchBar").keyup(function (){
    let searchText = $(this).val().toLowerCase();

    $(".col").filter(function (){
      
      let cardText = $(this).text().toLowerCase();

      if(cardText.indexOf(searchText) > -1){
        $(this).show()
      }
      else{
        $(this).hide()
      }
    })
})


/*Search bar JS End*/


/*Cards Carousel JS Start*/
$('#carouselExample').on('slide.bs.carousel', function (e) {

  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 4;
  var totalItems = $('.carousel-item').length;
  
  if (idx >= totalItems-(itemsPerSlide-1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i=0; i<it; i++) {
          // append slides to end
          if (e.direction=="left") {
              $('.carousel-item').eq(i).appendTo('.carousel-inner');
          }
          else {
              $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
      }
  }
});
/*Cards Carousel JS End*/



 /* Review slider javascript start */
//reviews data
const reviews = [
  {
    id: 1,
    name: "Hania Shahid",
    job:     "Amazing Selection and Quality",
    img:
      "https://images.unsplash.com/photo-1568044852337-9bcc3378fc3c?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODA4Nzc4OA&ixlib=rb-1.2.1&q=85",
    text:
    "I've been shopping at this e-commerce site for a while now, and I'm always impressed with their wide selection and the quality of their garments. Whether I'm looking for casual wear or something more formal, I can always find what I need here"
  },
  {
    id: 2,
    name: "Sara Nawaz",
    job:    "Great Prices and Deals",
    img:
      "https://images.unsplash.com/photo-1620122303020-87ec826cf70d?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODA4NzQ4Nw&ixlib=rb-1.2.1&q=85",
    text:
    "What I love most about this website is the fantastic prices and the frequent deals and discounts. I've been able to refresh my wardrobe without breaking the bank, and the quality has never disappointed me"

  },
  {
    id: 3,
    name: "Sameer Ahmed",
    job:     "Responsive Customer Service",
    img:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODA4Nzg2NQ&ixlib=rb-1.2.1&q=85",
    text:

    "I had a minor issue with one of my orders, and their customer service team was quick to respond and resolve the problem. Their dedication to ensuring a positive shopping experience is commendable.",
  },
  {
    id: 4,
    name: "Arham Raza",
    job:     "Efficient Shipping and Excellent Packaging",
    img:
      "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODA4Nzg2NQ&ixlib=rb-1.2.1&q=85",
    text:

    "I can't praise their shipping and packaging enough. My orders have always arrived on time, and the garments are neatly packed to ensure they arrive in perfect condition. It's clear they care about their customers' satisfaction",
  },
];
// select items to change
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set first item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// save person data
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

/* Review slider javascript end */




/* Project Counter Start */

$.fn.jQuerySimpleCounter = function( options ) {
  var settings = $.extend({
      start:  0,
      end:    100,
      easing: 'swing',
      duration: 400,
      complete: ''
  }, options );

  var thisElement = $(this);

  $({count: settings.start}).animate({count: settings.end}, {
  duration: settings.duration,
  easing: settings.easing,
  step: function() {
    var mathCount = Math.ceil(this.count);
    thisElement.text(mathCount);
  },
  complete: settings.complete
});
};


$('#number1').jQuerySimpleCounter({end: 15000,duration: 6000});
$('#number2').jQuerySimpleCounter({end: 13000,duration: 6000});
$('#number3').jQuerySimpleCounter({end: 1000,duration: 4000});
$('#number4').jQuerySimpleCounter({end: 13206,duration: 4000});



/* AUTHOR LINK */
 $('.about-me-img').hover(function(){
        $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
    }, function(){
        $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
    });


/* Project Counter End */ 