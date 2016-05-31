// chatPage
window.onload=function(){
	// // $('#btn').text('hdvnsbd');
	// if ($('#inputText').val()=='') {
	// 	$('#btn').css('background-color','#c1c1c1');
	// }
	// else {
	// 	$('#btn').css('background-color','#1E90FF');
	// }
	$(btnchange);
	$(Enter);
}

function btnchange(){
	$('#inputText').keyup(function() {
		$('#btn').css('background-color','#1E90FF');
	});
}
function Enter(){
	var pic='doctorHead.jpg';
	$('#btn').click(function() {
		if($('#inputText').val()==''){
		   alert("无法发送空消息");
		}
		else{
			$('.chatContent').append('<li><img src="'+pic+'"><span>'+$('#inputText').val()+'</span></li>');
		}
		$('#inputText').val("");
		$('#btn').css('background-color','#c1c1c1'); 
	});
}