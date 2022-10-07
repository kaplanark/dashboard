<script setup>
import { ref } from 'vue'

import AsideList from '@components/Aside/AsideList.vue';
import Button from '@components/Button/Button.vue';

const emit = defineEmits(['toggleAside']);

const toggleIcon = ref('left');

const toggleHandler = () => {
	emit('toggleAside');
	toggleIcon.value = toggleIcon.value == 'left' ? 'right' : 'left';
};

</script>

<template>
	<div class="aside">
		<div class="aside__header">
			<div class="logo">
				<img class="logo__image" src="@images/apple.svg" />
				<span class="logo__text">AppleTeam</span>
			</div>
			<Button :icon="toggleIcon" variant="icon" @click="toggleHandler">
				<template #icon>
					<icon :name="toggleIcon" size="20" />
				</template>
			</Button>
		</div>
		<div class="aside__body">
			<AsideList />
		</div>
		<div class="aside__footer">
			<Button variant="link" name="Log out" classes="text-danger">
				<template #icon>
					<icon name="logout" size="20" />
				</template>
			</Button>
		</div>
	</div>
</template>

<style lang="scss">
.aside {
	min-height: 100vh;
	border-right: 1px solid var(--color-tertiary);
	display: flex;
	flex-direction: column;
	transition: all 0.3s ease-in-out;

	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 40px 20px 44px 40px;
	}

	&__body {
		flex: 1;
		padding: 20px;
	}

	&__footer {
		border-top: 1px solid var(--color-tertiary);
		padding-top: 22px;
		padding: 22px 21px 44px 40px;
		position: sticky;
		bottom: 0;
		background-color: #fff;
	}
}

.logo {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;

	&__image {
		width: 26px;
		height: 26px;
	}

	&__text {
		font-weight: 700;
		font-size: 20px;
		line-height: 23px;
		color: #000;
	}
}
</style>