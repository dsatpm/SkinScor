const handleLogout = async () => {
	const response = await fetch('/api/users/logout', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	});

	if (response.ok) {
		document.location.replace('/');
	} else {
		alert('Failed to log out.');
	}
};

let logoutProfile = document.querySelector('#logout');
if (logoutProfile) {
	logoutProfile.addEventListener('click', handleLogout);
}
3