<script setup>
import { ref, computed } from 'vue';
import Card from '@components/Card/Card.vue';
import Progress from '@components/Progress/Progress.vue';
import Button from '@components/Button/Button.vue';
import Windget from '@components/Widget/Windget.vue';
import Avatar from '@components/Avatar/Avatar.vue';
import Tag from '@components/Tag/Tag.vue';
import Navigation from '@includes/Navigation.vue';
import Pagination from '../components/Pagination/Pagination.vue';

const data = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17']);
const page = ref(1);
const limit = ref(6);
const pageCount = computed(() => Math.ceil(data.value.length / limit.value));

const projects = computed(() => {
	return data.value.slice((page.value - 1) * limit.value, page.value * limit.value);
});
</script>
	
<template>
	<div class="container">
		<Navigation />
		<div class="container__wrapper">
			<Card v-for="(project, index) in projects" :key="index">
				<template #header>
					<p>Prorect {{ project }}</p>
					<div class="btn-group btn-group--sm">
						<Button variant="icon">
							<template #icon>
								<icon name="edit" size="20" />
							</template>
						</Button>
						<Button variant="icon">
							<template #icon>
								<icon name="more" size="20" />
							</template>
						</Button>
					</div>
				</template>
				<template #content>
					<div class="gird">
						<div class="grid__col">
							<Tag name="Active" variant="success" icon="dot" />
						</div>
						<div class="grid__col">
							b
						</div>
						<div class="grid__col">
							<div class="widget-group">
								<Windget :data="{ piece: 14, name: 'Tasks' }" />
								<Windget :data="{ piece: 3, name: 'Members' }" />
							</div>
						</div>
						<div class="grid__col">
							<div class="avatar-group">
								<Avatar image="https://avatars.githubusercontent.com/u/25702910" size="32" />
								<Avatar image="https://avatars.githubusercontent.com/u/81494873" size="32" />
								<Avatar image="https://avatars.githubusercontent.com/u/112624968" size="32" />
								<Button icon="add" variant="circle">
									<template #icon>
										<icon name="add" size="20" />
									</template>
								</Button>
							</div>
						</div>
					</div>
				</template>
				<template #action>
					<Progress name="Progress" :percentage="72" :max="100" />
				</template>
			</Card>
		</div>
		<div class="container__pagination mt-3">
			<Pagination v-model:page="page" :page-count="pageCount" />
		</div>
	</div>
</template>

<style lang="scss">
.container {
	padding: 0 30px;

	&__wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 30px;
	}
}
</style>