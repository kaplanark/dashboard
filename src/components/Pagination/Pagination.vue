<script setup>
import { computed } from 'vue';

const props = defineProps(['page', 'pageCount']);
const emit = defineEmits(['update:page']);

const prevPage = () => {
	emit('update:page', props.page - 1);
};
const nowPage = (page) => {
	emit('update:page', page);
};
const nextPage = () => {
	emit('update:page', props.page + 1);
};
const isPrevDisabled = computed(() => props.page === 1);
const isNextDisabled = computed(() => props.page === props.pageCount);
</script>

<template>
	<div class="pagination">
		<button class="pagination__button" :disabled="isPrevDisabled" @click="prevPage">
			<icon name="left" size="20" />
		</button>
		<button class="pagination__button" v-for="page in props.pageCount" :key="page" @click="nowPage(page)"
			:class="page === props.page ? 'active':''">
			{{ page }}
		</button>
		<button class="pagination__button" :disabled="isNextDisabled" @click="nextPage">
			<icon name="right" size="20" />
		</button>
	</div>
</template>

<style lang="scss">
.pagination {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;

	.pagination__button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border-radius: 8px;
		background-color: var(--color-quaternary);
		color: var(--color-text);
		cursor: pointer;
		border: 1px solid var(--color-tertiary);

		&:disabled {
			cursor: default;
			opacity: 0.5;
		}

		&.active {
			background-color: var(--color-quinary);
			color: var(--color-tertiary);
		}
	}
}
</style>