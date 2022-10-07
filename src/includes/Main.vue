<script setup>
import { ref } from 'vue'
import Card from '@components/Card/Card.vue';
import Progress from '@components/Progress/Progress.vue';
import Button from '@components/Button/Button.vue';
import Windget from '@components/Widget/Windget.vue';
import Avatar from '@components/Avatar/Avatar.vue';
import Tag from '@components/Tag/Tag.vue';
import Pagination from '../components/Pagination/Pagination.vue';

const page = ref(2);
</script>

<template>
	<div class="main">
		<div class="container">
			<div class="main__wrapper">
				<Card v-for="(project, index) in 6" :key="index">
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
			<div class="main__pagination">
				<Pagination v-model:page="page" :page-count="6" />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.main {
	&__wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
		margin-bottom: 24px;

		@media (max-width: 1200px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 992px) {
			grid-template-columns: 1fr;
		}

	}
}
</style>