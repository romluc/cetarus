const loggedOutLinks = $('li.logged-out');
const loggedInLinks = $('li.logged-in');
const loggedInDivs = $('div.login');
const privateSection = $('.private');

const contentList = $('div.aluno > ul');

const setupUI = user => {
	if (user) {
		loggedInLinks.filter('.logged-in').show();
		loggedOutLinks.filter('.logged-out').hide();
		loggedInDivs.hide();

		privateSection.show();
	} else {
		loggedInLinks.filter('.logged-in').hide();
		loggedOutLinks.filter('.logged-out').show();
		loggedInDivs.show();

		privateSection.hide();
	}
};

// setup content
const setupContent = data => {
	if (data.length) {
		let html = '';

		data.forEach(doc => {
			const content = doc.data();
			const asdf = `
        <li style="list-style: none;" class="ml-5">
					${content.title}
					</li>
					<a href="pdf/curso de bloqueio.pdf">
      `;

			html += asdf;
		});
		contentList.html(html);
	} else {
		contentList.html(
			`
        <h5>Faça o login para ver o conteúdo da área do aluno</h5>
      `
		);
	}
};
