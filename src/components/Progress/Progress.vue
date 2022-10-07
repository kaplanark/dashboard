<script setup>
const props = defineProps(['name', 'percentage', 'max', 'classes'])
</script>

<template>
	<div :class="['progress', props.classes]">
		<div class="progress__content">
			<p class="progress__name">{{ props.name }}</p>
			<p class="progress__value">{{ `${props.percentage / props.max * 100}%` }}</p>
		</div>
		<div class="progress__bar">
			<div class="progress__bar__fill" :style="{ width: `${props.percentage / props.max * 100}%` }"></div>
		</div>
	</div>
</template>

<style lang="scss">
.progress {
	&__content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 8px;
	}

	&__name {
		font-size: 13px;
		font-weight: 500;
		color: var(--color-text);
	}

	&__value {
		font-weight: 400;
		font-size: 12px;
		line-height: 14px;
		color: var(--color-text);
	}

	&__bar {
		height: 8px;
		width: 100%;
		background-color: #e5e5e5;
		border-radius: 4px;
		overflow: hidden;

		&__fill {
			height: 100%;
			background-color: var(--color-primary);
			transition: all 0.3s ease;
		}
	}
}
</style>