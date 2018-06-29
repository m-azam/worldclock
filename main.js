$(document).ready(function(){
	timezoneJS.timezone.zoneFileBasePath = '/tz';
	var dt = new timezoneJS.Date();
	dt.setTimezone('America/Chicago');
	$("#hours").val(dt.getHours());
});