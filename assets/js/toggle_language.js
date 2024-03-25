


	document.querySelector('#language-toggle').addEventListener('input', (event) => {
		let locale = event.currentTarget.checked ? 'eng' : 'fr';

  	document.querySelector('#welcomeContent').textContent = language[locale].welcome;
		document.querySelector('#introContent').innerHTML = language[locale].intro;
		document.querySelector('#cv').textContent = language[locale].resume;
		document.querySelector('#aboutContent').textContent = language[locale].about;
		document.querySelector('#skillsContent').textContent = language[locale].skills;
		document.querySelector('#projectsContent').textContent = language[locale].projects;
		document.querySelector('#other').textContent = language[locale].other;
		document.querySelector('#loading').textContent = language[locale].loading;
		document.querySelector('#title_skills_section').textContent = language[locale].title_skills_section;
		
		document.querySelector('#title_projects_section').textContent = language[locale].title_projects_section;
		document.querySelector('#portfolio_description').textContent = language[locale].portfolio_description;
		document.querySelector('#lotr_description').textContent = language[locale].lotr_description;
		document.querySelector('#hpf_description').textContent = language[locale].hpf_description;
		
		document.querySelectorAll('.project_card_button').forEach(element => 
			element.textContent = language[locale].project_card_button	
		); 

		document.querySelector('#right_reserved').textContent = language[locale].right_reserved;
	});

	// Define the language reload anchors
	let language = {
			eng: {
					welcome : "Hey there ! I'm -",
					intro : "I'm a <b>Backend Developper</b>, and I like to do some shenanigans with CSS and other Front features.",
					about : "About",
					skills : "Skills",
					other : "Other",
					loading :"Loading .. ",
					projects : "Projects",
					resume : "Resume",
					title_skills_section :"Skills",
					title_projects_section :"Projects",
					portfolio_description :"You're on it right now !",
					lotr_description : "Personal project to help me practice React/Redux.",
					hpf_description : "Graduation project, achieve as a team of 5.",
					project_card_button : "See more",
					right_reserved :"© 2024 Camille ROUAUX - All rights reserved."
			},

			fr: {
				welcome : "Hey ! Moi c'est -",
				intro : "Je suis <b>Développeuse Backend</b>, et j'aime aussi m'exercer sur du CSS ou d'autres features en Front.",
				about : "À propos",
				skills : "Skills",
				other : "Autre",
				loading :"En cours .. ",
				projects : "Projets",
				resume : "Mon CV",
				title_skills_section :"Compétences",
				title_projects_section :"Projets",
				portfolio_description :"Vous y êtes en ce moment même !",
				lotr_description : "Projet personnel afin de pratiquer React/Redux.",
				hpf_description : "Projet de fin d'année réalisé en équipe de 5.",
				project_card_button : "Voir",
				right_reserved :"© 2024 Camille ROUAUX - Tous droits réservés."
			}	
	};
