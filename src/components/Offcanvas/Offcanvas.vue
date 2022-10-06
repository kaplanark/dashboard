<script setup>
// import { watchEffect } from 'vue'

const props = defineProps({
	size: {
		type: String,
		default: 'md'
	},
	show: {
		type: Boolean,
		default: false
	},
	bordered: {
		type: String
	}
});
const emit = defineEmits(['update:show']);
// const html = document.getElementsByTagName('html');

const toggleHandler = () => {
	emit('update:show', !props.show);
};

// watchEffect(() => {
//     html[0].style.overflow = props.show ? 'hidden' : 'auto';
// });
</script>

<template>
	<Transition name="fade" mode="out-in">
		<div class="offcanvas"
			:class="['offcanvas--' + props.size, props.bordered != undefined ? 'offcanvas--bordered' : '']"
			v-show="props.show">
			<div class="offcanvas__mask" @click="toggleHandler"></div>
			<Transition name="slide" mode="out-in">
				<div class="offcanvas__content" v-show="props.show">
					<div class="offcanvas__header">
						<slot name="header"></slot>
					</div>
					<div class="offcanvas__body">
						<slot name="body"></slot>
					</div>
					<div class="offcanvas__footer">
						<slot name="footer"></slot>
					</div>
				</div>
			</Transition>
		</div>
	</Transition>
</template>

<style lang="scss">
.offcanvas {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 999;

	&__mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}

	&__content {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color-quaternary);
		overflow-y: auto;
		padding: 16px;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
		display: flex;
		flex-direction: column;
		gap: 16px;

		&.active {
			animation: offcanvasIn 0.3s ease-in-out;
		}

		&.inactive {
			animation: offcanvasOut 0.3s ease-in-out;
		}
	}

	&__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	&__body {
		flex: 1;
	}

	&__footer {
		position: sticky;
		bottom: 0;
	}

	&--bordered {
		.offcanvas__header {
			border-bottom: 1px solid #E5E5E5;
			padding-bottom: 16px;
		}

		.offcanvas__footer {
			border-top: 1px solid #E5E5E5;
			padding-top: 16px;
		}
	}

	&--sm {
		.offcanvas__content {
			width: 300px;
		}
	}

	&--md {
		.offcanvas__content {
			width: 500px;
		}
	}

	&--lg {
		.offcanvas__content {
			width: 700px;
		}
	}
}
</style>