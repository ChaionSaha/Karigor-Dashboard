'use strict';

const sidebar = document.querySelector('#sidebar');

const sidebarToggle = () => {
	sidebar.classList.toggle('sidebar-show');
};

const tabDetails = document.querySelectorAll('.tab-details');
const tabs = document.querySelectorAll('.tab');

tabs.forEach((t) => {
	t.addEventListener('click', (e) => {
		e.preventDefault();
		tabs.forEach((t) => t.classList.remove('tab-active'));
		e.target.classList.add('tab-active');
		tabDetails.forEach((tb) => {
			tb.classList.add('hidden');
			if (tb.id === e.target.dataset.target) tb.classList.remove('hidden');
		});
	});
});
