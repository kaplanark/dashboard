<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
	tags: { type: Array, default: [] },
	maximum: { type: Number, default: 15 }
});
const emit = defineEmits(['update:tags']);

const input = ref('');

const keyupHandler = (e) => {
	const { value } = e.target;
	if (value.length > 0) {
		emit('update:tags', [...props.tags, value]);
		input.value = '';
	}
};
const clickHadler = (index) => {
	emit('update:tags', props.tags.filter((_, i) => i !== index));
};

const isDisabled = computed(() => {
	return props.maximum === props.tags.length;
});
const forResize = computed(() => {
	return {
		width: `${input.value.length + 3}ch`
	};
});
</script>

<template>
	<div class="tags">
		<div class="tags__list">
			<div class="tags__item" v-for="(tag, index) in props.tags" :key="tag">
				<span class="tags__text">{{ tag }}</span>
				<button class="tags__button" @click="clickHadler(index)">
					<icon name="close" size="16" />
				</button>
			</div>
			<input type="text" class="tags__input" placeholder="#" v-model="input" @keyup.enter="keyupHandler"
				:disabled="isDisabled" :style="forResize">
		</div>
	</div>
</template>

<style lang="scss">
.tags {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
	width: 100%;
	gap: 8px;

	&__list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 8px;
	}

	&__item {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 8px;
		padding: 6px 8px 6px 12px;
		border-radius: 8px;
		background-color: var(--color-quaternary);
		font-size: 14px;
		font-family: var(--font-primary);
		color: var(--color-text-light);
	}

	&__text {
		font-size: 14px;
		color: var(--color-text-light);
	}

	&__button {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		border: none;
		cursor: pointer;
		transition: all 0.3s ease-in-out;

		svg {
			fill: var(--color-quinary);
		}
	}

	&__input {
		padding: 6px 12px;
		border-radius: 8px;
		background-color: var(--color-quaternary);
		font-size: 14px;
		color: var(--color-text-light);
		min-width: 72px;
		border: none;

		&::placeholder {
			color: var(--color-text-light);
		}
	}
}
</style>