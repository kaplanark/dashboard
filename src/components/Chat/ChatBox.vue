<script setup>
import Avatar from '@/components/Avatar/Avatar.vue';
const props = defineProps({
	data: {
		type: Object,
		default: {}
	}
});
</script>
<template>
	<div class="chat-box"
		:class="{ 'chat-box--active': props.data.status }">
		<Avatar :image="props.data.image" size="48" :status="props.data.status" classes="chat-box__avatar" />
		<div class="chat-box__content">
			<div class="chat-box__content__header">
				<div class="chat-box__content__header__name">
					{{ props.data.name }}
				</div>
				<div class="chat-box__content__header__time">
					{{ props.data.time }}
				</div>
			</div>
			<div class="chat-box__content__message">
				{{ props.data.message }}
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.chat-box {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 10px 20px;
	border-bottom: 1px solid var(--color-tertiary);
	cursor: pointer;

	&__content {
		flex: 1;

		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 10px;
			margin-bottom: 5px;

			&__name {
				font-weight: 600;
			}

			&__time {
				color: var(--color-text-light);
			}
		}

		&__message {
			color: var(--color-text-light);
		}
	}

	&--active {
		border-right: 2px solid var(--color-primary);
		background: var(--color-tertiary);
		background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(7, 7, 99, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(241, 242, 247, 1) 100%);
	}

	&:hover {
		background: var(--color-tertiary);
		background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(7, 7, 99, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(241, 242, 247, 1) 100%);
	}
}
</style>