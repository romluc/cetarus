// Sign Up
$('#signup-form').submit(function(e) {
	e.preventDefault();

	const signupForm = $(this);

	const email = signupForm.find('#signup-email').val();
	const password = signupForm.find('#signup-password').val();

	auth
		.createUserWithEmailAndPassword(email, password)
		.then(cred => {
			console.log(cred.user);
			$('#modalSignUp').modal('toggle');
			document.querySelector('#signup-form').reset();
		})
		.catch(function(error) {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			if (errorCode == 'auth/weak-password') {
				alert('The password is too weak.');
			} else {
				alert(errorMessage);
			}
			console.log(error);
		});
});

// Logout
const logout = $('a.logout');
logout.click(e => {
	e.preventDefault();
	auth.signOut().then(() => {
		// $('#modalLogout').modal('toggle');
		window.location.assign('index.html');
	});
});

// Login
$('#login-form').submit(function(e) {
	e.preventDefault();

	const loginForm = $(this);

	const email = loginForm.find('#login-email').val();
	const password = loginForm.find('#login-password').val();

	auth
		.signInWithEmailAndPassword(email, password)
		.then(cred => {
			console.log(cred.user);
			$('#modalLogin').modal('toggle');
			document.querySelector('#login-form').reset();
		})
		.catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			if (errorCode === 'auth/wrong-password') {
				alert('Wrong password.');
			} else {
				alert(errorMessage);
			}
			console.log(error);
		});
});
