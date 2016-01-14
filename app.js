
/*window.location = '#start';*/
$('.entrance').hide();
/*function passWord() {
	var testV = 1;
	var pass1 = prompt('Please Enter Your Password',' ');
	while (testV < 3) {
		if (!pass1) 
			history.go(-1);
		if (pass1 == "?10famTHREE") {
			alert('You Got it Right!');
			$('.entrance').hide();
			showTree();
			break;
		} 
		testV+=1;
		var pass1 =  prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
	}
	if (pass1.toLowerCase()!="password" & testV ==3) 
		history.go(-1);
	return " ";
} 
*/
/*function showTree() {*/
// Use the display:block option to show the element before the new scale animation starts.
$("li").velocity("transition.slideLeftIn", {stagger:250})
	.delay(500);
	

//z-index attributes on hover
$('.tree li').on('mouseenter',function() {
	$(this).css('z-index','20');
	}).on('mouseleave', function() {
		$(this).css('z-index','10');
	});
//velocity slideDown and slideUp functions for .info sections
$('.tree li a').on('mouseenter', function(e) {
	console.log('velocity');
	e.preventDefault();
	$(this).find('.info').velocity("slideDown",{ display:"block"});
	$(this).find('span').delay(500).velocity("slideDown", {display:"inline-block"});
	});

$('.tree li a').on('mouseleave', function(e) {
	console.log('velocity');
	e.preventDefault();
	$(this).find('.info').velocity("slideUp",{ display:"none"});
	$(this).find('span').velocity("slideUp", {display:"none"});
	});
/*}*/
