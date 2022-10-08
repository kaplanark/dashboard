<script setup>
import { useRouter } from 'vue-router'

import Input from '@components/Inputs/Input.vue';
import Button from '@components/Button/Button.vue';
import Card from '@components/Card/Card.vue';
import InputPassword from '../components/Inputs/InputPassword.vue';
import InputText from '../components/Inputs/InputText.vue';
import Divider from '../components/Divider/Divider.vue';

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
		<Card>
			<template #header>
				<h2 class="text-secondary text-center w-100 mt-1 mb-2">Login</h2>
			</template>
			<template #content>
				<div class="login__form">
					<InputText name="login" placeholder="Enter your username"></InputText>
					<Button name="Forgot password ?" variant="link" class="forgot-pass-btn"
						@click="clikHandler('/reset_password')" />
					<InputPassword name="password" placeholder="Enter password" />
					<Button name="Login" variant="primary" classes="w-100 rounded mt-3" @click="submitHandler" />
				</div>
			</template>
			<template #action>
				<Divider title="Don't have an account?" title-placement="center"></Divider>
				<div class="display-flex flex-column align-items-start">
					<Button name="Create a new account" variant="link" classes="register-btn text-secondary"
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
	}
}

.forgot-pass-btn {
	width: 100%;
	display: flex;
	justify-content: flex-end;
	margin-bottom: 8px;

	p {
		font-size: 14px;
		color: var(--color-danger);
	}
}
</style>