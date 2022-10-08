<script setup>
import { ref } from 'vue'

const props = defineProps(['name', 'value', 'validation', 'placeholder']);
const emit = defineEmits(['update:value', 'update:validation']);

const message = ref('');

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
</script>

<template>
	<div class="input input--validation">
		<slot name="label"></slot>
		<input type="email" :name="props.name" :id="props.name" class="input__input" :placeholder="props.placeholder"
			@input="inputHandler" @focusout="focusHandler" maxlength="20" minlength="8">
		<span class="input__feedback">{{ message }}</span>
	</div>
</template>