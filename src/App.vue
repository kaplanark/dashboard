<script setup>
import { ref } from 'vue'

import Aside from '@layouts/Aside.vue';
import Header from '@layouts/Header.vue';
import Main from '@layouts/Main.vue';
import Navigation from '@layouts/Navigation.vue';
import Message from './components/Message/Message.vue';

const pageTitle = ref('Projects');
const toggle = ref(true);

const activePage = (name) => {
	pageTitle.value = name;
};
const toggleAside = () => {
	toggle.value = !toggle.value;
};
</script>

<template>
	<div class="app" :class="toggle ? '':'toggled-aside'">
		<Aside @activeLink="activePage" @toggleAside="toggleAside" />
		<div class="app__content">
			<Header :title="pageTitle" />
			<Navigation />
			<Main />
		</div>
	</div>
</template>