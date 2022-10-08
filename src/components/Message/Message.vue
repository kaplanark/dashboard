<script setup>
import { computed } from 'vue'

const props = defineProps({
	message: {
		type: Object,
		required: true,
		default: () => ({
			show: false,
			text: '',
			type: 'message',
		}),
	},
});

const timed_show = computed(() => {
	setTimeout(() => {
		return props.message.show = false;
	}, 5000);
	return props.message.show;
});
</script>

<template>
	<transition name="fade">
		<div class="message" :class="'message--' + props.message.type" v-if="timed_show">
			<div class="message__icon">
				<icon :name="props.message.type" :size="24" />
			</div>
			<div class="message__content">
				{{ props.message.text }}
			</div>
		</div>
	</transition>
</template>

<style lang="scss">
.message {
	position: fixed;
	z-index: 999;
	top: 8px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 8px;
	border-radius: 8px;
	gap: 16px;
	background-color: #ffffff;
	border: 1px solid var(--color-primary);
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

	.message__icon {
		display: flex;
		align-items: center;
		justify-content: center;

		svg {
			fill: var(--color-text);
		}
	}

	.message__content {
		color: var(--color-text);
	}

	&--error {
		border-color: #F87171;

		.message__icon {
			svg {
				fill: #F87171;
			}
		}
	}

	&--success {
		border-color: #34D399;

		.message__icon {
			svg {
				fill: #34D399;
			}
		}
	}

	&--warning {
		border-color: #FBBF24;

		.message__icon {
			svg {
				fill: #FBBF24;
			}
		}
	}

	&--info {
		border-color: #60A5FA;

		.message__icon {
			svg {
				fill: #60A5FA;
			}
		}
	}

	&--message {
		border-color: #A0AEC0;

		.message__icon {
			svg {
				fill: #A0AEC0;
			}
		}
	}
}
</style>