<script setup>
const props = defineProps(['image', 'size', 'classes', 'status']);
</script>

<template>
	<div class="avatar" :class="{ 'avatar--active': props.status }, props.classes">
		<img class="avatar__image" :src="props.image" :width="props.size" :height="props.size" />
	</div>
</template>

<steyle lang="scss">
.avatar {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--color-text-light);
	border-radius: 50%;
	&__image {
		border-radius: 50%;
		overflow: hidden;
	}

	&--active {
		position: relative;

		&::before {
			content: '';
			position: absolute;
			bottom: 2px;
			right: 2px;
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background-color: var(--color-success);
		}
	}
}
</steyle>