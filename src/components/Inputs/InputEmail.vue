<script setup>
import { ref } from 'vue'

const props = defineProps(['name', 'value', 'validation', 'placeholder', 'disabled']);
const emit = defineEmits(['update:value', 'update:validation']);

const message = ref('');

const focusHandler = (e) => {
	const { value } = e.target;
	const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if (!regex.test(value)) {
		message.value = 'Please enter a valid email address';
		emit('update:validation', false);
		return;
	}
	message.value = '';
	emit('update:validation', true);
}
</script>

<template>
	<div class="input input--validation">
		<slot name="label"></slot>
		<input type="email" :name="props.name" :id="props.name" class="input__input" :placeholder="props.placeholder"
			@focusout="focusHandler" :disabled="props.disabled">
		<span class="input__feedback">{{ message }}</span>
	</div>
</template>