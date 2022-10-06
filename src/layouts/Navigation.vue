<script setup>
import { ref } from 'vue'

import Button from '@components/Button/Button.vue';
import Tabs from '@components/Tabs/Tabs.vue';
import Dropdown from '@components/Dropdown/Dropdown.vue';
import Modal from '@components/Modal/Modal.vue';
import Form from '../components/Forms/Form.vue';

const tabPanes = ref(['All', 'Inactive', 'On hold', 'Complated']);
const dropİtems = ref(['Default', 'Important', 'Priority']);
const dropValue = ref('');
const activeTab = ref('');
const addModal = ref(false);
const form = ref({
	title: '',
	description: '',
	message: '',
	status: [
		{ value: 'inactive', label: 'Inactive' },
		{ value: 'onhold', label: 'On Hold' },
		{ value: 'active', label: 'Active' }
	],
	members: ['Seyit', 'Engin', 'Kaplan', 'Emircan', 'Tolga']
});

const clikHandler = () => {
	addModal.value = true
};
const submitHandler = () => {
	console.log(form.value);
};

</script>

<template>
	<div class="nav">
		<Button name="New" variant="primary" classes="rounded" @click="clikHandler">
			<template #icon>
				<icon name="add" size="22" />
			</template>
		</Button>
		<div class="nav__content">
			<Tabs :panes="tabPanes" v-model:active="activeTab" />
			<Dropdown :items="dropİtems" v-model:value="dropValue" icon="filter_list" />
		</div>
		<Modal v-model:show="addModal" size="md" bordered="true">
			<template #header>
				<h2 class="text-secondary">New project</h2>
			</template>
			<template #body>
				<Form :data="form" />
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
	padding: 0 30px 30px 30px;

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