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

const patterns = ref(['triangle-pattern', 'line-pattern', 'symbol-pattern', 'cross-pattern', 'daimond-pattern', 'zigzag-pattern', 'mixed-pattern', 'stripe-pattern', 'gradient-pattern']);

const selectHandler = (pattern) => {
	emit('update:value', pattern);
};
</script>

<template>
	<div class="pattern-box" :id="props.name">
		<div class="pattern-box__item" v-for="pattern in patterns" :key="pattern" :class="pattern"
			@click="selectHandler(pattern)">
		</div>
	</div>
</template>

<style lang="scss">
.pattern-box {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	padding: 14px 16px;
	border-radius: 5px;
	border: 1px solid var(--color-tertiary);

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