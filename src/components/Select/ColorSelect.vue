<script setup>
import { ref } from 'vue'
const props = defineProps({
	value: {
		type: String,
		default: ''
	},
	name: {
		type: String,
		default: ''
	},
});
const emit = defineEmits(['update:value']);

const colors = ref(['#ffd1b3', '#fff1b3', '#dbffb3', '#d2f2f9', '#e7cefd','#e8eaed', '#ffe3ba', '#cfe0fc', '#ffe880']);

const selectHandler = (color) => {
	emit('update:value', color);
};
</script>

<template>
	<div class="color-box" :id="props.name">
		<div class="color-box__item" :class="{ 'color-box__item--active': props.value === color }" v-for="color in colors"
			:key="color" :style="{ 'background-color': color }" @click="selectHandler(color)">
		</div>
	</div>
</template>

<style lang="scss">
.color-box {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	padding: 4px 8px;
	border-radius: 5px;

	&__item {
		width: 42px;
		height: 42px;
		border-radius: 50%;
		cursor: pointer;

		&--active {
			border: 2px solid var(--color-secondary);
		}

		&:hover {
			border: 2px solid var(--color-secondary);
		}
	}
}
</style>