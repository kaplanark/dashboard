<script setup>
const props = defineProps(['name', 'placeholder', 'value', 'classes', 'disabled']);
const emit = defineEmits(['update:value']);

const inputHandler = (e) => {
	emit('update:value', e.target.value);
};
</script>

<template>
	<div class="input" :class="props.classes">
		<slot name="label"></slot>
		<input type="text" :name="props.name" :id="props.name" class="input__input" :placeholder="props.placeholder"
			:class="props.classes" :value="props.value" @input="inputHandler" :disabled="props.disabled" />
	</div>
</template>

<style lang="scss">
.input {
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
}
</style>