// var isInViewport = function (elem) {
// 	var distance = elem.getBoundingClientRect();
// 	return (
// 		distance.top >= 0 &&
// 		distance.left >= 0 &&
// 		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
// 		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
// 	);
// };

function elementInViewport2(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }

var findMe = document.querySelector('#gridd');

window.addEventListener('scroll', function (event) {
	if (elementInViewport2(findMe)) {

        var columns = document.querySelectorAll('.grid__column');
        
        columns.forEach(el => {
            var rate = window.pageYOffset * el.dataset.rate;

            el.style.transform = `translate3d(0px, ${rate}px, 0px)`;
        });
	} else {
        return;
        // el.style.transform = `translate3d(0px, 0px, 0px)`;
    }
}, false);