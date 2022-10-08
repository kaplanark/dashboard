<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

import Input from '@components/Inputs/Input.vue';
import Button from '@components/Button/Button.vue';
import Card from '@components/Card/Card.vue';
import InputText from '@components/Inputs/InputText.vue';
import InputPassword from '@components/Inputs/InputPassword.vue';
import InputEmail from '@components/Inputs/InputEmail.vue';
import Divider from '@components/Divider/Divider.vue';

const router = useRouter();
const store = useStore();

const submitHandler = () => {
	store.commit('setMessage', { show: true, text: 'Account created successfully.', type: 'success' });
}
const clikHandler = () => {
	router.push('/login');
}
</script>
<template>
	<div class="register">
		<Card>
			<template #header>
				<h2 class="text-secondary text-center w-100">Register</h2>
			</template>
			<template #content>
				<div class="register__form">
					<Divider title="Personal Information" title-placement="left"></Divider>
					<div class="input-group mb-2">
						<Input name="name" type="text" placeholder="Enter name"></Input>
						<Input name="surname" type="text" placeholder="Enter surname"></Input>
					</div>
					<Divider title="Login Information" title-placement="left"></Divider>
					<InputText name="username" placeholder="Enter your username"></InputText>
					<InputEmail name="email" placeholder="Enter your email"></InputEmail>
					<InputPassword name="password" placeholder="Enter password"></InputPassword>
					<InputPassword name="confirmPassword" placeholder="Confirm password" :disabled="true">
					</InputPassword>
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
.input-group {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	gap: 16px;
}

.register {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;


	.card {
		max-width: 540px;

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
		gap: 8px;
	}
}
</style>