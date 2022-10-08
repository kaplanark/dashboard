<script setup>
const props = defineProps(['title', 'title-placement']);
</script>

<template>
	<div class="divider" :class="'divider--' + props.titlePlacement">
		<div class="divider__line divider__line--left"></div>
		<div class="divider__title">{{ props.title }}</div>
		<div class="divider__line divider__line--right"></div>
	</div>
</template>

<style lang="scss">
.divider {
	display: flex;
	align-items: center;
	margin: 0 0 8px 0;
	width: 100%;

	&__line {
		flex: 1;
		height: 1px;
		background-color: #cdd1e9;
	}

	&__title {
		margin: 0 8px;
		color: var(--color-text-light);
		font-size: 12px;
		font-weight: 500;
	}

	&--left {
		.divider__line {
			&--left {
				max-width: 4px;
				height: 4px;
				border-radius: 50%;
				background-color: #cdd1e9;
			}
		}
	}

	&--right {
		.divider__line {
			&--right {
				max-width: 4px;
				height: 4px;
				border-radius: 50%;
				background-color: #cdd1e9;
			}
		}
	}

}
</style>