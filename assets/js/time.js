// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date

window.onload = displayClock();
function displayClock() {
	const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
	const dayNames = ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日',
	'11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日',
	'21日', '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日',
	'31日'];

	var d = new Date();
	var mm = monthNames[d.getMonth()];
	var dd = dayNames[d.getDate() - 1];
	var min = (mins = ('0' + d.getMinutes()).slice(-2));
	var hh = d.getHours();
	var ampm = '';

	if (CONFIG.twelveHourFormat) {
		ampm = hh >= 12 ? ' pm' : ' am';
		hh = hh % 12;
		hh = hh ? hh : 12;
	}

	document.getElementById('hour').innerText = hh;
	document.getElementById('separator').innerHTML = ' : ';
	document.getElementById('minutes').innerText = min + ampm;

	document.getElementById('month').innerText = mm;
	document.getElementById('day').innerText = dd;

	setTimeout(displayClock, 1000);
}
