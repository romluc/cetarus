// Sign Up
// const signupForm = document.querySelector('#signup-form');
// signupForm.addEventListener('submit', e => {
// 	e.preventDefault();

// 	const email = signupForm['signup-email'].value;
// 	const password = signupForm['signup-password'].value;

// 	console.log(email, password);
// });
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
