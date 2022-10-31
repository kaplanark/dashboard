<script setup>
const props = defineProps({
	position: {
		type: String,
		default: 'top-center'
	}
});
</script>

<template>
	<div class="message-provider" :class="'message-provider--' + props.position">
		<slot></slot>
	</div>
</template>

<style lang="scss">
.message-provider {
	position: fixed;
	width: 100%;
	z-index: 1000;

	&--top-center {
		top: 16px;
		left: 50%;
		transform: translateX(-50%);
	}

	&--top-bottom {
		bottom: 16px;
		left: 50%;
		transform: translateX(-50%);
	}
}
</style>