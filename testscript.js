// const grid = document.querySelector('.image_box');

// const options = { };

// const observer = new IntersectionObserver(function(entries, observer) {
//     if (!entries.isIntersecting) {
//         return;
//     }

//     console.log(entries);
//     window.addEventListener('scroll', function(e) {
    
//         const target = document.querySelector('.grid__column');
    
//         var scrolled = window.pageYOffset;
//         var rate = scrolled * -0.03;
    
//         target.style.transform = `translate3d(0px, ${rate}px, 0px)`;
//     });

// }, options);

// observer.observe(grid);





// const options = {};

// const section = document.querySelector('.connection');
  
// const observer = new IntersectionObserver(function(entries, observer) {
//     entries.forEach((entry) => {
//         if(entry.isIntersecting) {
//             console.log(entry.target);
//             entry.target.style.backgroundColor = 'red';
//             document.querySelector('.grid__column-1').style.backgroundColor = 'blue';

//             var scrolled = window.pageYOffset;
//             var rate = scrolled * -1;
//             document.querySelector('.grid__column-1').style.transform = `translate3d(0px, ${rate}px, 0px)`;
//             window.addEventListener('scroll', function(e) {
//                 const column = document.querySelector('.grid__column-1');
//                 var scrolled = window.pageYOffset;
//                 var rate = scrolled * -3;
            
//                 column.style.transform = `translate3d(0px, ${rate}px, 0px)`;
//                 // target.forEach(element => {
//                 // });
//             });
//         } else {
//             console.log('out of view');
//         }
        
//     });
// }, options)


// observer.observe(section);









// window.addEventListener('scroll', function(e) {
//     const column = document.querySelector('.grid__column-1');

//     var scrolled = window.pageYOffset;
//     var rate = scrolled * -3;

//     column.style.transform = `translate3d(0px, ${rate}px, 0px)`;
//     // target.forEach(element => {
//     // });
// });




























// Function to test if element is in viewport
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};



// let isInView = (element) => {
//     const boundings = element.getBoundingClientRect();

//     return (
//         boundings.top >= 0 &&
//         boundings.left >= 0 &&
//         boundings.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         boundings.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// };


var imageBox = document.querySelector('.grid');
// const evenColumns = document.querySelectorAll('.even');
// const oddColumns = document.querySelectorAll('.odd');
// var scrolled, rate;

// add eventlistener to window
window.addEventListener('scroll', function (event) {
	if (isInViewport(imageBox)) {
		console.log('In viewport!');
	} else {
    console.log('Nope...');
  }
}, false);


window.addEventListener('scroll', (e) => {
    if (isInView(imageBox)) {
        console.log('in view');
        scrolled = window.pageYOffset;
        rate = scrolled * -2;

        evenColumns.forEach(el => {
            el.style.transform = `translate3d(0px, ${rate}px, 0px)`;
        });
    } else {
        console.log('not in view');
        // return;
    }
}, false);


