<script setup>
import { ref } from 'vue';

import Search from '@components/Inputs/Search.vue';
import UserInfo from '@components/User/UserInfo.vue';
import Button from '@components/Button/Button.vue';
import Badge from '@components/Badge/Badge.vue';
import Offcanvas from '@components/Offcanvas/Offcanvas.vue';
import Alert from '@/components/Alert/Alert.vue';
import Avatar from '../components/Avatar/Avatar.vue';
import Divider from '../components/Divider/Divider.vue';

const data = ref({
	image: 'https://avatars.githubusercontent.com/u/2681643',
	name: 'Tolga Eğilmezel',
	email: 'egilmezel@tolga.com'
})
const toggleNotification = ref(false);
const toggleUser = ref(false);

const toggleHandler = () => {
	toggleNotification.value = !toggleNotification.value;
};
const searchHandler = (value) => {
	alert(value);
}
const clickHandler = () => {
	toggleUser.value = !toggleUser.value;
}
</script>

<template>
	<div class="header">
		<div class="header__title">
			{{ $route.name }}
		</div>
		<div class="header__content">
			<Search placeholder="Search" @search="searchHandler" />
		</div>
		<div class="header__actions">
			<div class="btn-group">
				<Button variant="icon" classes="text-strong">
					<template #icon>
						<icon name="message" size="20" />
					</template>
				</Button>
				<Badge icon="notifications" active @click="toggleHandler" />
				<Button variant="icon" classes="text-strong">
					<template #icon>
						<icon name="settings" size="20" />
					</template>
				</Button>
			</div>
			<UserInfo :data="data" classes="cursor-pointer" @click="clickHandler" />
		</div>
		<Offcanvas v-model:show="toggleNotification" bordered="true">
			<template #header>
				<h3 class="text-secondary">Notification</h3>
			</template>
			<template #body>
				<div class="alert-group">
					<Alert type="message" message="There are pending projects" closeable="true" />
					<Alert type="error" message="There are pending projects" closeable="true" />
					<Alert type="info" message="There are pending projects" closeable="true" />
					<Alert type="success" message="There are pending projects" />
					<Alert type="warning" message="There are pending projects" />
					<Alert message="There are pending projects" closeable="true" />
				</div>
			</template>
		</Offcanvas>
		<Offcanvas v-model:show="toggleUser">
			<template #header>
				<div class="display-flex justify-content-center flex-column w-100 align-items-center">
					<Avatar :image="data.image" size="96" classes="mb-1" />
					<h2 class="text-secondary mb-1">{{data.name}}</h2>
					<small class="text-danger mb-2">{{data.email}}</small>
					<Divider title="Profile settings" title-placement="left" />
				</div>
			</template>
			<template #body>
			</template>
		</Offcanvas>
	</div>
</template>

<style lang="scss">
.header {
	padding: 32px 30px 28px 30px;
	display: grid;
	grid-template-columns: 1.5fr 1.5fr 2fr;

	&__title {
		font-weight: 500;
		font-size: 24px;
		line-height: 28px;
		color: var(--color-secondary);
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	&__actions {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 54px;
	}
}
</style>