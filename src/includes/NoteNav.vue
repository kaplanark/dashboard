<script setup>
import { ref } from 'vue'

import Button from '@components/Button/Button.vue';
import Tabs from '@components/Tabs/Tabs.vue';
import Modal from '@components/Modal/Modal.vue';
import Input from '@components/Inputs/Input.vue';
import Textarea from '@components/Inputs/Textarea.vue';
import ColorSelect from '@components/Select/ColorSelect.vue';
import InputImage from '@components/Inputs/InputImage.vue';
import DynamicTags from '@components/Tag/DynamicTags.vue';
import Divider from '@components/Divider/Divider.vue';

const tabPanes = ref(['All', 'Pinned', 'Archived', 'Deleted']);
const activeTab = ref('');
const addModal = ref(false);
const form = ref({
	title: '',
	note: '',
	color: '',
	tags: ['project', 'important'],
});

const toggleHandler = () => {
	addModal.value = !addModal.value;
};
const submitHandler = () => {
	console.log(form.value);
};

</script>

<template>
	<div class="nav">
		<Button name="New" variant="primary" classes="rounded" @click="toggleHandler">
			<template #icon>
				<icon name="add" size="22" />
			</template>
		</Button>
		<div class="nav__content">
			<Tabs :panes="tabPanes" v-model:active="activeTab" />
		</div>
		<Modal v-model:show="addModal" size="md" :bordered="false">
			<template #header>
				<div class="display-flex justify-content-between">
					<h2 class="text-secondary">New Note</h2>
					<Button variant="icon" @click="toggleHandler">
						<template #icon>
							<icon name="close" size="24" />
						</template>
					</Button>
				</div>
			</template>
			<template #body>
				<form class="form">
					<div class="form__group">
						<InputImage name="image"></InputImage>
					</div>
					<div class="form__group">
						<Input name="title" placeholder="Enter note title"/>
					</div>
					<div class="form__group">
						<Textarea name="message" placeholder="Enter note" classes="w-100"/>
					</div>
					<Divider title="Note tags" title-placement="left"></Divider>
					<div class="form__group">
						<DynamicTags v-model:tags="form.tags" maximum="6"></DynamicTags>
					</div>
					<Divider title="Note color" title-placement="left"></Divider>
					<div class="form__group">
						<ColorSelect v-model:value="form.color" name="note-color"></ColorSelect>
					</div>
				</form>
			</template>
			<template #footer>
				<Button name="Add" variant="primary" classes="rounded" @click="submitHandler" />
			</template>
		</Modal>
	</div>
</template>

<style lang="scss">
.nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 30px;
	padding: 0 0 30px 0;

	&__content {
		flex: 1;
		border: 1px solid #F1F2F7;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 30px;
	}
}
</style>