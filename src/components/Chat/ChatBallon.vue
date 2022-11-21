<script setup>
const props = defineProps({
	transfer: {
		type: String,
		default: '' // 'send' or 'receive'
	},
	data: {
		type: Object,
		default: {}
	}
});
</script>
<template>
	<div class="chat-ballon" :class="'chat-ballon--' + props.transfer">
		<div class="chat-ballon__content">
			<div class="chat-ballon__content__message">
				{{ props.data.message }}
			</div>
			<div class="chat-ballon__content__time">
				{{ props.data.time }}
			</div>
		</div>
	</div>
</template>
<style lang="scss">
.chat-ballon {
	&--send {
		align-self: flex-end;
		background: #ffe6e6;
		border-radius: 10px 10px 0 10px;
		width: 50%;
		margin-left: auto;
	}

	&--receive {
		align-self: flex-start;
		background: var(--color-tertiary);
		border-radius: 10px 10px 10px 0;
		width: 50%;
	}

	&__content {
		padding: 10px 20px;

		&__message {
			margin-bottom: 5px;
		}

		&__time {
			color: var(--color-secondary);
		}
	}
}
</style>