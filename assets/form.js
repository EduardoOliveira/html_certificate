$(function(){
	$(".go").click(function(){
		window.snapshot();
		$(".nome").html($("#name").val());
		$(".modal").hide();
		$("html").css("overflow","auto");
	});
});