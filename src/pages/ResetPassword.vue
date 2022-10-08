<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

import Input from '@components/Inputs/Input.vue';
import Button from '@components/Button/Button.vue';
import Card from '@components/Card/Card.vue';

const router = useRouter();
const store = useStore();

const email = ref('');

const submitHandler = (payload) => {
	payload == ''
		? store.commit('setMessage', { show: true, text: 'Please enter your email or username.', type: 'error' })
		: store.commit('setMessage', { show: true, text: 'Password reset email sent', type: 'success' });
}
const clikHandler = () => {
	router.push('/login');
}
</script>
<template>
	<div class="forgot">
		<Card bordered="true">
			<template #header>
				<h2 class="text-secondary text-center w-100">Reset your password</h2>
			</template>
			<template #content>
				<p class="text-secondary mb-2">
					Enter your user account's verified email address and we will send you a password reset link.
				</p>
				<div class="forgot__form">
					<Input name="email" type="email" v-model:value="email" placeholder="Enter email address"
						classes="w-100" />
					<Button name="Send password reset mail" variant="primary" classes="w-100 rounded"
						@click="submitHandler(email)" />
				</div>
			</template>
			<template #action>
				<div class="display-flex flex-column align-items-start">
					<Button name="Back to login page" variant="link" class="register-btn text-secondary"
						@click="clikHandler">
						<template #icon>
							<icon name="prev" size="22" />
						</template>
					</Button>
				</div>
			</template>
		</Card>
	</div>
</template>

<style lang="scss">
.forgot {
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
		gap: 16px;
	}
}
</style>