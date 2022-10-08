<script setup>
import { ref } from 'vue'

const props = defineProps(['name', 'value', 'validation', 'placeholder', 'disabled']);
const emit = defineEmits(['update:value', 'update:validation']);

const message = ref('');
const type = ref('password');
const visibleIcon = ref('eye-slash');

const inputHandler = (e) => {
	emit('update:value', e.target.value);
	if (e.target.value.length < 8 || e.target.value.length > 20) {
		message.value = 'Your password must be between 8 and 20 characters long.';
		emit('update:validation', false);
		return;
	}
	message.value = '';
	emit('update:validation', true);
}
const focusHandler = (e) => {
	e.target.value.length === 0 && (message.value = 'This field cannot be left blank.');
}
const mouseDownHandler = () => {
	type.value = 'text';
	visibleIcon.value = 'eye';
}
const mouseUpHandler = () => {
	type.value = 'password';
	visibleIcon.value = 'eye-slash';
}
</script>

<template>
	<div class="input input--validation">
		<slot name="label"></slot>
		<input :type="type" :name="props.name" :id="props.name" class="input__input" :placeholder="props.placeholder"
			@input="inputHandler" @focusout="focusHandler" maxlength="20" minlength="8" :disabled="props.disabled">
		<span class="input__feedback">{{ message }}</span>
		<div class="input__eye" @mousedown="mouseDownHandler" @mouseup="mouseUpHandler">
			<icon :name="visibleIcon" size="22" />
		</div>
	</div>
</template>

<style lang="scss">
.input {
	width: 100%;

	&--validation {
		position: relative;
		padding-bottom: 22px;
	}

	&__input {
		border: 1px solid var(--color-text-light);
		border-radius: 8px;
		padding: 14px 16px;
		font-size: 16px;
		color: var(--color-text);
		outline: none;
		transition: all 0.3s ease-in-out;
		width: 100%;

		&:focus {
			border-color: var(--color-primary);
		}
	}

	&__feedback {
		position: absolute;
		bottom: 0;
		left: 0;
		font-size: 13px;
		font-weight: 400;
		color: var(--color-error);
	}

	&__eye {
		position: absolute;
		top: calc(50% - 12px);
		right: 22px;
		transform: translateY(-50%);
		width: 24px;
		height: 24px;
		background: #fff;
		background-size: cover;
		cursor: pointer;

		svg {
			fill: var(--color-text-light);
			opacity: 0.3;
			transition: all 0.15s ease-in-out;
		}

		&:hover {
			svg {
				opacity: 1;
			}
		}
	}
}
</style>