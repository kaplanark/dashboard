<script setup>
import { computed, Teleport } from 'vue'
import Message from '@components/Message/Message.vue';
import MessageProvider from '@components/Message/MessageProvider.vue';

import { useStore } from 'vuex'

const store = useStore()

const message = computed(() => {
	return store.getters.getMessage;
});

</script>

<template>
	<router-view></router-view>
	<Teleport to="body">
		<MessageProvider>
			<Message :message="message" />
		</MessageProvider>
	</Teleport>
</template>

<style>

</style>