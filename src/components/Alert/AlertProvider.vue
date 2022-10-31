<script setup>
const props = defineProps({
	position: {
		type: String,
		default: 'top-right'
	}
});
</script>

<template>
	<div class="alert-provider" :class="'alert-provider--' + props.position">
		<slot></slot>
	</div>
</template>

<style lang="scss">
.alert-provider {
	position: fixed;
	z-index: 1000;

	&--top-right {
		top: 16px;
		right: 16px;
	}

	&--top-left {
		top: 16px;
		left: 16px;
	}

	&--bottom-right {
		bottom: 16px;
		right: 16px;
	}

	&--bottom-left {
		bottom: 16px;
		left: 16px;
	}
}
</style>