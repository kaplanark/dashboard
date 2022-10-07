<script setup>
import Button from '../components/Button/Button.vue';

</script>

<template>
	<div class="no-page-found">
		<h1>Page Not Found</h1>
		<p>Sorry, the page you are looking for could not be found.</p>

		<router-link to="/">
			<Button name="Go to back" variant="link" classes="text-primary">
				<template #icon>
					<icon name="back" size="20" />
				</template>
			</Button>
		</router-link>
	</div>
</template>

<style scoped>
.no-page-found {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	gap: 24px;
}

.btn--go-back {
	display: inline-block;
	padding: 12px 24px;
	border-radius: 20px;
	background-color: var(--color-primary);
	color: var(--color-tertiary);
	font-size: 16px;
	font-weight: 500;
	transition: all 0.15s ease-in-out;
}
</style>