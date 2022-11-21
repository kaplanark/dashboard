<script setup>
import { ref } from 'vue';
import { OnClickOutside } from '@vueuse/components';

const props = defineProps({
	value: {
		type: String,
		default: ''
	},
});
const emit = defineEmits(['update:value']);

const emojis = ref(['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '🥲', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🥸', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱', '😴', '🤤', '😪', '😵', '🤐', '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠', '😈', '👿', '👹', '👺', '🤡', '💩', '👻', '💀', '☠️', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿']);
const isActive = ref(false);

const toggleHandler = () => isActive.value = !isActive.value;
const clickHandler = (emoji) => {
	emit('update:value', emoji);
	isActive.value = false;
}
const closeHandler = () => isActive.value = false;
</script>

<template>
	<on-click-outside @trigger="closeHandler">
		<div class="emoji-box">
			<div class="emoji-box__content" v-if="isActive">
				<div v-for="emoji in emojis" :key="emoji" class="emoji" @click="clickHandler(emoji)"> {{ emoji }} </div>
			</div>
			<div class="emoji-box__toggle" @click="toggleHandler">
				<icon name="smile" size="22" />
			</div>
		</div>
	</on-click-outside>
</template>

<style lang="scss">
.emoji-box {
	position: relative;

	&__content {
		position: absolute;
		bottom: 22px;
		right: 22px;
		background-color: var(--color-white);
		border-radius: 8px;
		padding: 22px 12px;
		height: 300px;
		width: 400px;
		box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
		overflow: hidden;
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		overflow-y: auto;

		&::-webkit-scrollbar {
			width: 4px;
		}

		&::-webkit-scrollbar-track {
			border-radius: 5px;
			margin: 0.2rem 0;
			background: #fff;
		}

		&::-webkit-scrollbar-thumb {
			background: #96a5bb;
			border-radius: 5px;
		}

		&::-webkit-scrollbar-thumb:hover {
			background: #657ea4;
		}

		.emoji {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 24px;
			cursor: pointer;
			transition: all 0.3s ease-in-out;

			&:hover {
				transform: scale(1.2);
			}
		}
	}

	&__toggle {
		position: relative;
		cursor: pointer;
		transition: all 0.3s ease-in-out;

		&:hover {
			transform: scale(1.2);
		}
	}
}
</style>