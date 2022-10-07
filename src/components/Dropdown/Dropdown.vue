<script setup>
import { ref } from 'vue';
import { OnClickOutside } from '@vueuse/components'

const props = defineProps(['value', 'icon', 'items']);
const emit = defineEmits(['update:value']);

const toggle = ref(false);
const select = ref(props.items[0]);

const toggleHandler = () => {
	toggle.value = !toggle.value;
}
const closeHandler = () => {
	toggle.value = false;
}
const selectHandler = (item) => {
	emit('update:value', item);
	select.value = item;
	toggle.value = false;
}
</script>

<template>
	<on-click-outside @trigger="closeHandler">
		<div class="dropdown">
			<div class="dropdown__header" @click.stop="toggleHandler">
				<p>{{ select }}</p>
				<icon name="filter" size="24" />
			</div>
			<ul class="dropdown__content" v-show="toggle">
				<li v-for="item in props.items" :key="item" @click="selectHandler(item)">{{ item }}</li>
			</ul>
		</div>
	</on-click-outside>
</template>

<style lang="scss">
.dropdown {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	cursor: pointer;

	&__header {
		display: flex;
		align-items: center;
		gap: 10px;
		color: #A0A3BD;
		font-size: 14px;

		svg {
			color: var(--color-secondary);
		}
	}

	&__content {
		position: absolute;
		top: 110%;
		right: 0;
		width: 100%;
		background: #fff;
		border: 1px solid #F1F2F7;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
		border-radius: 8px;
		padding: 10px 0;
		list-style: none;
		min-width: 140px;
		gap: 10px;
		font-size: 14px;
		font-weight: 500;
		color: #A0A3BD;
		z-index: 1;

		&>li {
			padding: 10px 30px;
			cursor: pointer;
		}

		&>li:hover {
			background: #F1F2F7;
		}
	}
}
</style>