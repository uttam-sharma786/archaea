
$(document).ready(function () {
	$("#name").keyup(function () {
		var val = $(this).val();
		$.ajax({
			method: "POST",
			url: "get_name_ajax.cgi",
			data: { key: val}
		}).done(function( data ) {
			if(data == ''){
				$("#results").hide().html('');
			}else{
				$("#results").show().html(data);
				$("#results div").each(function () {
					$(this).click(function () {
						var text = $(this).text();
						$("#name").val(text);
						$("#results").hide().html('');
					});	
				});
			}
		});
	});		
});
