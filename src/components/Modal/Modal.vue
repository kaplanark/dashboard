<script setup>
// import { watchEffect } from 'vue'

const props = defineProps({
	show: {
		type: Boolean,
		default: false
	},
	classes: {
		type: String,
		default: ''
	},
	size: {
		type: String,
		default: 'md'
	},
	bordered: {
		type: String
	},
});
const emit = defineEmits(['update:show']);
// const html = document.getElementsByTagName('html');

const closeHandler = () => {
	emit('update:show', false);
};

// watchEffect(() => {
//     html[0].style.overflow = props.show ? 'hidden' : 'auto';
// });
</script>

<template>
	<Transition name="fade">
		<div class="modal"
			:class="['modal--' + props.size, props.classes, props.bordered != undefined ? 'modal--bordered':'']"
			v-if="props.show">
			<div class="modal__mask" @click="closeHandler"></div>
			<Transition name="scale">
				<div class="modal__content" v-show="props.show">
					<div class="modal__header">
						<slot name="header"></slot>
					</div>
					<div class="modal__body">
						<slot name="body"></slot>
					</div>
					<div class="modal__footer">
						<slot name="footer"></slot>
					</div>
				</div>
			</Transition>
		</div>
	</Transition>
</template>

<style lang="scss">
.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;

	&__mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}

	&__content {
		position: relative;
		width: 100%;
		background-color: #fff;
		border-radius: 8px;
		padding: 24px;
		display: flex;
		flex-direction: column;

		&.active {
			animation: modalIn 0.3s ease-in-out;
		}
	}

	&__header {
		padding: 0 0 16px 0;
	}

	&__body {
		padding: 16px 0;
	}

	&__footer {
		padding: 16px 0 0 0;
	}

	&--bordered {
		.modal__header {
			border-bottom: 1px solid #E5E5E5;
		}

		.modal__footer {
			border-top: 1px solid #E5E5E5;
		}
	}

	&--xl {
		.modal__content {
			max-width: 1000px;
		}
	}

	&--lg {
		.modal__content {
			max-width: 800px;
		}
	}

	&--md {
		.modal__content {
			max-width: 600px;
		}
	}

	&--sm {
		.modal__content {
			max-width: 400px;
		}
	}

	&--xs {
		.modal__content {
			max-width: 200px;
		}
	}
}
</style>