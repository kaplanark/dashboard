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

const props = defineProps(['title']);

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
    <header class="header">
        <div class="header__title">
            {{ title }}
        </div>
        <div class="header__content">
            <Search placeholder="Search" @search="searchHandler" />
        </div>
        <div class="header__actions">
            <div class="btn-group">
                <Button icon="chat" variant="icon" classes="text-strong" />
                <Badge icon="notifications" active @click="toggleHandler" />
                <Button icon="settings" variant="icon" classes="text-strong" />
            </div>
            <UserInfo :data="data" classes="cursor-pointer" @click="clickHandler" />
        </div>
        <Offcanvas v-model:show="toggleNotification">
            <template #header>
                <h3 class="text-secondary">Notification</h3>
            </template>
            <template #body>
                <div class="alert-group">
                    <Alert type="message" message="There are pending projects" closeable />
                </div>
            </template>
        </Offcanvas>
        <Offcanvas v-model:show="toggleUser">
            <template #header>
                <div class="display-flex justify-content-center flex-column w-100 align-items-center">
                    <Avatar :image="data.image" size="96" classes="mb-1"/>
                    <h2 class="text-secondary mb-1">{{data.name}}</h2>
                    <small class="text-danger mb-2">{{data.email}}</small>
                    <Divider title="Profile settings" title-placement="left" />
                </div>
            </template>
            <template #body>
            </template>
        </Offcanvas>
    </header>
</template>