<script setup>
import { useRouter } from 'vue-router'

import Input from '@components/Inputs/Input.vue';
import Button from '@components/Button/Button.vue';
import Card from '@components/Card/Card.vue';

const router = useRouter();

const submitHandler = () => {
	router.push('/');
}
const clikHandler = () => {
	router.push('/login');
}
</script>
<template>
	<div class="register">
		<Card>
			<template #header>
				<h2 class="text-secondary text-center w-100 mt-2 mb-2">Register</h2>
			</template>
			<template #content>
				<div class="register__form mb-2">
					<Input name="username" type="text" placeholder="Enter username" classes="w-100" />
					<Input name="email" type="email" placeholder="Enter email" classes="w-100" />
					<Input name="password" type="password" placeholder="Enter password" classes="w-100" />
					<Input name="confirmPassword" type="password" placeholder="Confirm password" classes="w-100" />
				</div>
			</template>
			<template #action>
				<Button name="Register now" variant="primary" classes="w-100 rounded" @click="submitHandler" />
				<Button name="I already have an account" variant="link" class="text-secondary" @click="clikHandler" />
			</template>
		</Card>
	</div>
</template>
	
<style lang="scss">
.register {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;


	.card {
		max-width: 500px;

		&__action {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 16px;
		}
	}

	&__form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 16px;
	}
}
</style>