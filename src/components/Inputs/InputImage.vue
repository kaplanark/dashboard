<script setup>
import { ref } from 'vue'
const props = defineProps({
	value: {
		type: File,
		default: null
	},
	name: {
		type: String,
		default: ''
	},
});
const emit = defineEmits(['update:value']);

const info = ref('Add image');

const changeHandler = (e) => {
	emit('update:value', e.target.files[0]);
	info.value = e.target.files[0].name;
};
</script>

<template>
	<label class="img-input" :for="props.name">
		<input type="file" :name="props.name" :id="props.name" class="img-input__input" @change="changeHandler">
		<div class="img-input__info">
			<icon name="add" size="24" />
			<span>{{ info }}</span>
		</div>
	</label>
</template>

<style lang="scss">
.img-input {
	display: block;
	border-radius: 8px;
	border: 1px dashed var(--color-secondary);
	padding: 48px;
	background-color: var(--color-tertiary);
	cursor: pointer;
	&__input {
		display: none;
	}
	&__info {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-secondary);
		gap: 10px;
	}
}
</style>