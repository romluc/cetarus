// Listening for auth status changes
auth.onAuthStateChanged(user => {
	if (user) {
		db.collection('aluno')
			.get()
			.then(snapshot => {
				setupContent(snapshot.docs);
			});
	} else {
		setupContent([]);
		// window.location.assign('index.html');
	}
});
