<script setup>
import { ref } from 'vue';

const links = ref([
	{ icon: "home", name: "Dashboard", to: '/dashboard' },
	{ icon: "view", name: "Projects", to: '/projects' },
	{ icon: "tree", name: "Modules", to: '/modules' },
	{ icon: "send", name: "Sprint", to: '/sprint' },
	{ icon: "group", name: "Members", to: '/members' },
	{ icon: "chart", name: "Reports", to: '/reports' }
]);
</script>

<template>
	<ul class="nav-list">
		<li class="nav-list__item" v-for="link in links" :key="link.name">
			<router-link :to="link.to" class="nav-list__link">
				<span>
					<icon :name="link.icon" size="22" />
				</span>
				<p>{{ link.name }}</p>
			</router-link>
		</li>
	</ul>
</template>

<style lang="scss">
.nav-list {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 8px;

	&__item {
		width: 100%;
	}

	&__link {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 18px;
		padding: 16px 30px;
		font-size: 16px;
		font-weight: 400;
		transition: all 0.15s ease-in-out;
		width: 100%;
		border-radius: 8px;
		color: var(--color-text);

		&:hover {
			background-color: var(--color-quaternary);
			font-weight: 500;
		}

		&.router-link-active {
			background-color: var(--color-quaternary);
			font-weight: 500;
			color: var(--color-primary);
		}
	}
}
</style>