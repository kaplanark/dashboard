<script setup>
import { useRouter } from 'vue-router'

import Input from '@components/Inputs/Input.vue';
import Button from '@components/Button/Button.vue';
import Card from '@components/Card/Card.vue';
import InputPassword from '../components/Inputs/InputPassword.vue';
import InputText from '../components/Inputs/InputText.vue';

const router = useRouter();

const submitHandler = () => {
	router.push('/dashboard');
}
const clikHandler = (route) => {
	router.push(route);
}
</script>
<template>
	<div class="login">
		<Card bordered="true">
			<template #header>
				<h2 class="text-secondary text-center w-100">Login</h2>
			</template>
			<template #content>
				<div class="login__form">
					<InputText name="login" placeholder="Enter your username"></InputText>
					<InputPassword name="password" placeholder="Enter password" />
					<Button name="Login" variant="primary" classes="w-100 rounded" @click="submitHandler" />
				</div>
			</template>
			<template #action>
				<div class="display-flex flex-column align-items-start">
					<Button name="Forgot password ?" variant="link" class="forgot-pass-btn mb-1"
						@click="clikHandler('/reset_password')" />
					<Button name="I don't have an account yet" variant="link" class="register-btn text-secondary"
						@click="clikHandler('/register')" />
				</div>
			</template>
		</Card>
	</div>
</template>

<style lang="scss">
.login {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;


	.card {
		max-width: 540px;
	}

	&__form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 8px;
	}
}

.forgot-pass-btn {
	p {
		font-size: 14px;
		color: var(--color-danger);
	}
}
</style>