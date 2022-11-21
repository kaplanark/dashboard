<script setup>
import { ref } from 'vue'

import Input from '@components/Inputs/Input.vue';
import Textarea from '@components/Inputs/Textarea.vue';
import Select from '@components/Select/Select.vue';
import MultiSelect from '@components/Select/MultiSelect.vue';

const props = defineProps(['data']);

const slectStaus = ref('');
const slectMembers = ref([]);

</script>

<template>
	<form class="form">
		<div class="form__group">
			<Input name="title" placeholder="Enter project title" v-model:value="data.title" />
		</div>
		<div class="form__group">
			<Input name="descripton" placeholder="Enter project description" v-model:value="data.description" />
		</div>
		<div class="form__group">
			<Textarea name="message" placeholder="Enter project message" classes="w-100" v-model:value="data.message" />
		</div>
		<div class="form__group">
			<Select placeholder="Select Status" :options="data.status" v-model:value="slectStaus" />
		</div>
		<div class="form__group">
			<MultiSelect placeholder="Members List" :options="data.members" v-model:value="slectMembers" />
		</div>
	</form>
</template>