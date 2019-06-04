$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			document.getElementById('box').style.display = 'block';
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				document.getElementById('box').style.display = 'none';
			}, 5000);
		});
		return false;
	});
});