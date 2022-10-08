<script setup>
import { ref } from 'vue';
import Aside from '@includes/Aside.vue';
import Header from '@includes/Header.vue';

const toggle = ref(true);
const toggleHandler = () => {
	toggle.value = !toggle.value;
}
</script>

<template>
	<div class="panel" :class="toggle ? '':'toggled-aside'">
		<Aside @toggleAside="toggleHandler" />
		<div class="panel__content">
			<Header />
			<main>
				<router-view />
			</main>
		</div>
	</div>
</template>

<style lang="scss">
.panel {
	min-height: 100vh;
	display: grid;
	grid-template-columns: 314px auto;
	transition: all 0.3s ease-in-out;

	&.toggled-aside {
		grid-template-columns: 94px auto;

		.aside {
			width: 94px;

			.logo {
				display: none;
			}

			.nav-list {
				&__item {
					align-items: center;
				}

				&__link {
					justify-content: center;

					p {
						display: none;
					}
				}
			}

			&__footer {
				.btn {
					p {
						display: none;
					}
				}
			}
		}
	}
}
</style>