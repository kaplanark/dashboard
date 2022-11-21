<script setup>
import { ref } from 'vue'
import ChatBox from '@components/Chat/ChatBox.vue';
import Avatar from '@components/Avatar/Avatar.vue';
import Button from '@components/Button/Button.vue';
import Input from '@components/Inputs/Input.vue';
import ChatBallon from '@components/Chat/ChatBallon.vue';
import BallMenu from '../components/Menus/BallMenu.vue';
import EmojiBox from '../components/Emoji/EmojiBox.vue';

const chatData = ref(
	[
		{
			id: 1,
			name: "Tolga Eğilmezel",
			status: true,
			image: "https://avatars.githubusercontent.com/u/2681643",
			time: "12:00",
			message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc elit ultricies nisl, eget ultricies nisl lorem eget nunc."
		},
		{
			id: 2,
			name: "Emircan Özenir",
			status: false,
			image: "https://avatars.githubusercontent.com/u/81494873",
			time: "12:00",
			message: "Sed euismod, nunc sit amet ultricies ultricies, nunc elit ultricies nisl, eget ultricies nisl lorem eget nunc."
		},
		{
			id: 3,
			name: "Kaplan Arkan",
			status: false,
			image: "https://avatars.githubusercontent.com/u/25702910",
			time: "12:00",
			message: "Sed euismod, nunc sit amet ultricies ultricies, nunc elit ultricies nisl, eget ultricies nisl lorem eget nunc."
		},
		{
			id: 4,
			name: "Seyit Arslanturk",
			status: false,
			image: "https://avatars.githubusercontent.com/u/112624968",
			time: "12:00",
			message: "Sed euismod, nunc sit amet ultricies ultricies, nunc elit ultricies nisl, eget ultricies nisl lorem eget nunc."
		},
		{
			id: 5,
			name: "Engin İnsel",
			status: false,
			image: "https://avatars.githubusercontent.com/u/76450122",
			time: "12:00",
			message: "Sed euismod, nunc sit amet ultricies ultricies, nunc elit ultricies nisl, eget ultricies nisl lorem eget nunc."
		}
	],
);

</script>

<template>
	<div class="c-container">
		<div class="chat-area">
			<div class="chat-area__aside">
				<ChatBox v-for="data in chatData" :key="data.id" :data="data"></ChatBox>
			</div>
			<div class="chat-area__content">
				<div class="chat-area__content-header">
					<Avatar :image="chatData[0].image" :size="50" :status="chatData[0].status"></Avatar>
					<div class="chat-area__content-header-info">
						<h3 class="chat-area__content-header-info-name">{{ chatData[0].name }}</h3>
						<p class="chat-area__content-header-info-status">{{ chatData[0].status ? 'Online' : 'Offline' }}</p>
					</div>
				</div>
				<div class="chat-area__content-body">
					<ChatBallon :data="chatData[0]" transfer="send"></ChatBallon>
					<ChatBallon :data="chatData[1]" transfer="receive"></ChatBallon>
					<ChatBallon :data="chatData[0]" transfer="send"></ChatBallon>
					<ChatBallon :data="chatData[1]" transfer="receive"></ChatBallon>
					<ChatBallon :data="chatData[0]" transfer="send"></ChatBallon>
				</div>
				<div class="chat-area__content-footer">
					<BallMenu value=""></BallMenu>
					<Input placeholder="Enter message..." classes="w-100"></Input>
					<EmojiBox value=""></EmojiBox>
					<Button variant="icon" classes="rounded">
						<template #icon>
							<icon name="send" size="22"></icon>
						</template>
					</Button>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.c-container {
	padding: 0 30px;
}

.chat-area {
	display: flex;
	height: calc(100vh - 109px);

	&__aside {
		width: 420px;
		border-right: 1px solid var(--color-tertiary);
		height: calc(100vh - 109px);
		overflow-y: auto;

		&::-webkit-scrollbar {
			width: 8px;
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
	}

	&__content {
		flex: 1;
		height: calc(100vh - 109px);
		display: flex;
		flex-direction: column;

		&-header {
			height: 80px;
			border-bottom: 1px solid var(--color-tertiary);
			display: flex;
			align-items: center;
			justify-content: flex-start;
			padding: 0 20px;
			gap: 20px;
		}

		&-body {
			flex: 1;
			border-bottom: 1px solid var(--color-tertiary);
			background: linear-gradient(45deg, transparent 49%, #f7f7f7 49% 51%, transparent 51%), linear-gradient(-45deg, transparent 49%, #f7f7f7 49% 51%, transparent 51%);
			background-size: 1em 1em;
			background-color: #ffffff;
			overflow-y: auto;
			padding: 30px;
			display: flex;
			flex-direction: column;
			gap: 30px;

			&::-webkit-scrollbar {
				width: 8px;
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
		}

		&-footer {
			height: 80px;
			padding: 0 20px;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			gap: 20px;
		}
	}
}
</style>