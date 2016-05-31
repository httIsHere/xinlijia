//注册
$(sRegister);
function sRegister(){
	    $('.registerPage').hide();
	    $('.doctorMessage').hide();
	    $('.qLogin').hide();
	    // $('.loginPage').hide();
	    // $('body').css('background-color','#fff');
	$('#register').click(function() {
		$('.loginPage').hide();
		$('.registerPage').show();
		$('body').css('background-color','#fff');
	});
	$('.rowReturn').click(function() {
		$('.loginPage').show();
		$('.registerPage').hide();
		$('.doctorMessage').hide();
		$('.qLogin').hide();
		$('body').css('background-color','#1E90FF');
	});
	$('#regBtn').click(function() {
		$('.doctorMessage').show();
		$('.registerPage').hide();
	});
	$('#phoneLogin').click(function() {
		$('.qLogin').show();
		$('.loginPage').hide();
		$('body').css('background-color','#fff');
	});
	$('#logBtn').click(function() {
		window.location.href="firstpage.html";
	});
}
//获取验证码60秒倒计时
var countdown=60;
function verTime(obj){
        if(countdown==0){
        	obj.removeAttribute("disabled");
        	obj.value="重新发送";
        	$(obj).css({
			'background-color': '#1E90FF'
		});
        	countdown=60;
        	return;
        }
        else{
        	 obj.setAttribute("disabled", true); 
        	 $(obj).css({
			'background-color': '#a1a1a1'
		});
             obj.value= countdown + "秒"; 
             countdown--; 
        }
        setTimeout(function() { 
        verTime(obj) }
        ,1000) 
}

// page-change--页面切换
$(change);
function change(){
	// 默认状态
	$('.firstPage').show();
	$('.page1').css('color','#1E90FF');
	$('.secondPage').hide();
	$('.type').hide();
	$('.thirdPage').hide();
	$('.forthPage').hide();

	$('.page1').click(function() {
		$('.firstPage').show();
	    $('.page1').css('color','#1E90FF');
	    $('.secondPage').hide();
	    $('.page2').css('color','#000');
	    $('.thirdPage').hide();
	    $('.type').hide(); 
	    $('.page3').css('color','#000');
	    $('.forthPage').hide();
	    $('.page4').css('color','#000');
	});
	$('.page2').click(function() {
		$('.firstPage').hide();
	    $('.page1').css('color','#000');
	    $('.secondPage').show();
	    $('.page2').css('color','#1E90FF');
	    $('.thirdPage').hide();
	    $('.type').hide(); 
	    $('.page3').css('color','#000');
	    $('.forthPage').hide();
	    $('.page4').css('color','#000');
	});
	$('.page3').click(function() {
		$('.firstPage').hide();
	    $('.page1').css('color','#000');
	    $('.secondPage').hide();
	    $('.page2').css('color','#000');
	    $('.thirdPage').show();
	    $('.type').show();
	    $('.page3').css('color','#1E90FF');
	    $('.forthPage').hide();
	    $('.page4').css('color','#000');
	});
	$('.page4').click(function() {
		$('.firstPage').hide();
	    $('.page1').css('color','#000');
	    $('.secondPage').hide();
	    $('.page2').css('color','#000');
	    $('.thirdPage').hide();
	    $('.type').hide();
	    $('.page3').css('color','#000');
	    $('.forthPage').show();
	    $('.page4').css('color','#1E90FF');
	});
}
// 状态设置
$(set);

function set(){
	$('.setDiv').hide();
	$('.clDiv').hide();
	$('.set').click(function() {
		$('.setDiv').show();
		$('.clDiv').show();
		$('#start').click(function() {
			$('.status').text('继续接单');
			$('.status').css('background-color','#00CD00');
			$('.setDiv').hide();
			$('.clDiv').hide();
		});
		$('#stop').click(function() {
			$('.status').text('不再接单');
			$('.status').css('background-color','red');
            $('.setDiv').hide();
            $('.clDiv').hide();
		});
	});
	$('.clDiv').click(function() {
		$('.setDiv').hide();
		$('.clDiv').hide();
	});
}
// 聊天界面的进入
$(chatIn);

function chatIn(){
    $('#patient1').click(function() {
    	// $(this).find(".tip").hide();
    });
}

//thirdPage-typechange--状态切换
$(typeChange);

function typeChange(){
	$('.patientList1').show();
	$('.patientList2').hide();
	$('.accepted').click(function() {
		$('.accepted').css({'color':'#1E90FF','background-color':'#fff'});
		$('.un-accepted').css({'color':'#fff','background-color':'#1E90FF'});
	    $('.patientList1').show();
	    $('.patientList2').hide();
	});
	$('.un-accepted').click(function() {
		$('.un-accepted').css({'color':'#1E90FF','background-color':'#fff'});
		$('.accepted').css({'color':'#fff','background-color':'#1E90FF'});
	    $('.patientList2').show();
	    $('.patientList1').hide();
	});
}


// chatPage
	$(btnchange);
	$(Enter);

function btnchange(){
	$('#inputText').keyup(function() {
		$('#btn').css('background-color','#1E90FF');
	});
}
function Enter(){
	var pic='doctorHead.jpg';
	$('#btn').click(function() {
		if($('#inputText').val()==''){
		   // $('#warning').show();
		   $('#warning').slideDown(100);
		   //警告2秒后消失
           $('#warning').delay(1000).hide();
		}
		else{
			$('.chatContent').append('<li><img src="'+pic+'"><span>'+$('#inputText').val()+'</span></li>');
		}
		$('#inputText').val("");
		$('#btn').css('background-color','#c1c1c1'); 
	});
}
