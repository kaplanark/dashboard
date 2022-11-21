<script setup>
import { ref } from 'vue'
const props = defineProps({
	value: {
		type: String,
		default: ''
	},
});
const active = ref(false);

const toggleHandler = () => {
	active.value = !active.value;
}
</script>

<template>
	<div class="ball-menu" :class="{ 'ball-menu--active': active }">
		<div class="ball-menu__item">
			<icon name="file" size="20" />
		</div>
		<div class="ball-menu__item">
			<icon name="mic" size="22" />
		</div>
		<div class="ball-menu__item">
			<icon name="video" size="22" />
		</div>
		<div class="ball-menu__item" @click="toggleHandler">
			<icon name="add" size="22" />
		</div>
	</div>
</template>

<style lang="scss">
.ball-menu {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 44px;
	height: 44px;

	&__item {
		height: 42px;
		width: 42px;
		border-radius: 50%;
		background-color: var(--color-quaternary);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		svg {
			fill: var(--color-secondary);
		}
	}

	&__item:not(:last-child) {
		position: absolute;
	}

	&--active {
		.ball-menu__item {
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
			&:nth-child(1) {
				transform: translateY(-360%);
			}

			&:nth-child(2) {
				transform: translateY(-240%);
			}

			&:nth-child(3) {
				transform: translateY(-120%);
			}
		}
	}
}
</style>