<script setup>
import { computed } from 'vue'
import Message from '@components/Message/Message.vue';
import { useStore } from 'vuex'

const store = useStore()

const message = computed(() => {
	return store.getters.getMessage;
});

</script>

<template>
	<Message :message="message" />
	<router-view />
</template>

<style>

</style>