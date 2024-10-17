/*!
* Tabler v1.0.0-beta20 (https://tabler.io)
* @version 1.0.0-beta20
* @link https://tabler.io
* Copyright 2018-2023 The Tabler Authors
* Copyright 2018-2023 codecalm.net Paweł Kuna
* Licensed under MIT (https://github.com/tabler/tabler/blob/master/LICENSE)
*/
(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
		factory();
})((function () {
	'use strict';

	var themeStorageKey = "tablerTheme";
	var defaultTheme = "light";
	var selectedTheme;

	var roleStorageKey = "userRole";
	var defaultRole = "Student";
	var selectedRole;

	//localStorage.setItem(roleStorageKey, defaultRole);
	//console.log("initial role : " + localStorage.getItem(roleStorageKey));




	var params = new Proxy(new URLSearchParams(window.location.search), {
		get: function get(searchParams, prop) {
			return searchParams.get(prop);
		}
	});
	if (!!params.theme) {
		localStorage.setItem(themeStorageKey, params.theme);
		selectedTheme = params.theme;
	} else {
		var storedTheme = localStorage.getItem(themeStorageKey);
		selectedTheme = storedTheme ? storedTheme : defaultTheme;
	}
	if (selectedTheme === 'dark') {
		document.body.setAttribute("data-bs-theme", selectedTheme);
	} else {
		document.body.removeAttribute("data-bs-theme");
	}

	//role
	var storedRole = localStorage.getItem(roleStorageKey);
	selectedRole = storedRole ? storedRole : defaultRole;
	console.log("the change to is: ",selectedRole);



	document.addEventListener("DOMContentLoaded", function () {
		document.getElementById('user-role').innerText = selectedRole;
		updateNavbar();
	});


	//switch role
	window.switchRole = function (newRole) {
		localStorage.setItem(roleStorageKey, newRole);
		document.getElementById('user-role').innerText = newRole;
		
		selectedRole = newRole;
		updateNavbar();
		console.log("current role:" + localStorage.getItem(roleStorageKey));
		
	}

	function updateNavbar() {

		document.getElementById('nav-home').style.display = 'none';
		document.getElementById('online-chat').style.display = 'none';
		document.getElementById('AI-tutoring').style.display = 'none';
		document.getElementById('AI-learning-plan').style.display = 'none';
		document.getElementById('Student-grade-management').style.display = 'none';
		document.getElementById('AI-teaching-plan').style.display = 'none';
		document.getElementById('Child-performance').style.display = 'none';

		if (selectedRole === 'Student') {
			document.getElementById('nav-home').style.display = 'block';
			document.getElementById('online-chat').style.display = 'block';
			document.getElementById('AI-tutoring').style.display = 'block';
			document.getElementById('AI-learning-plan').style.display = 'block';
			console.log("nav role: " + selectedRole);

		} else if (selectedRole === 'Teacher') {
			document.getElementById('nav-home').style.display = 'block';
			document.getElementById('online-chat').style.display = 'block';
			document.getElementById('Student-grade-management').style.display = 'block';
			document.getElementById('AI-teaching-plan').style.display = 'block';
			console.log("nav role: " + selectedRole);

		} else if (selectedRole === 'Parent') {
			document.getElementById('nav-home').style.display = 'block';
			document.getElementById('online-chat').style.display = 'block';
			document.getElementById('Child-performance').style.display = 'block';
			console.log("nav role: " + selectedRole);


		}
	}

}));
