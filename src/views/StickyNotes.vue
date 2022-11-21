<script setup>
import { ref } from 'vue';
import NoteNav from '@includes/NoteNav.vue';
import Card from '@components/Card/Card.vue';
import Button from '@components/Button/Button.vue';

const notes = ref([
	{
		id: 1,
		title: 'Describe the Dataset and its Attributes',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		color: '#ffd1b3'
	},
	{
		id: 2,
		title: 'Outline the Design of Your Data Science Project',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		color: '#fff1b3'
	},
	{
		id: 3,
		title: 'Conduct an In-depth Project Analysis',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		color: '#ffe880'
	},
	{
		id: 4,
		title: 'Wrap Up Your Project',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		color: '#dbffb3'
	},
	{
		id: 5,
		title: 'Defining the Data Science Problem Statement',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		color: '#d2f2f9'
	},
	{
		id: 6,
		title: 'Explain the Dataset and its Attributes',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		color: '#e7cefd'
	},
	{
		id: 7,
		title: 'Analyze the Steps in Detail',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		color: '#e8eaed'
	},
	{
		id: 8,
		title: 'Summarize the Project Outcomes and Add References',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		color: '#ffe3ba'
	},
	{
		id: 9,
		title: 'Describe the Dataset and its Attributes',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		color: '#cfe0fc'
	},
	{
		id: 10,
		title: 'Outline the Design of Your Data Science Project',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		color: '#fdcfe8'
	}
]);
const buttons = [
	{ icon: 'edit', action: 'edit' },
	{ icon: 'delete', action: 'delete' },
	{ icon: 'archive', action: 'archived' },
	{ icon: 'palette', action: 'color' },
	{ icon: 'pin', action: 'pinned' }
]

const changeHandler = (action) => {
	if (action === 'edit') alert('edit');
	if (action === 'delete') alert('delete');
	if (action === 'archived') alert('archived');
	if (action === 'color') alert('color');
	if (action === 'pinned') alert('pinned');
};
</script>
<template>
	<div class="n-container">
		<NoteNav></NoteNav>
		<div class="n-container__wrapper">
			<Card v-for="note in notes" :key="note.id" :background-color="note.color" classes="card--note">
				<template #header>
					<p>{{ note.title }}</p>
				</template>
				<template #content>
					<p>{{ note.content }}</p>
				</template>
				<template #action>
					<div class="btn-group">
						<Button variant="icon" v-for="button in buttons" :key="button.action"
							@click="changeHandler(button.action)">
							<template #icon>
								<icon :name="button.icon" size="18" />
							</template>
						</Button>
					</div>
				</template>
			</Card>
		</div>
	</div>
</template>
<style lang="scss">
.n-container {
	padding: 0 30px;
	margin-bottom: 30px;

	&__wrapper {
		column-count: 4;
		column-gap: 16px;
		@media screen and (max-width: 1600px) {
			column-count: 3;
		}
		@media screen and (max-width: 1400px) {
			column-count: 2;
		}
	}
}

.card--note {
	overflow: hidden;
	margin-bottom: 16px;

	.card__action {
		opacity: 0;
	}

	&:hover {
		.card__action {
			opacity: 1;
		}
	}
}
</style>