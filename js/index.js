const contentList = $('div.aluno > ul');

// setup content
const setupContent = data => {
	if (data.length) {
		let html = '';

		data.forEach(doc => {
			const content = doc.data();
			const asdf = `
        <li>
          ${content.title}
        </li>
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
