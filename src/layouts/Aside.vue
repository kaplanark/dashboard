<script setup>
import { ref } from 'vue'

import AsideList from '@components/Aside/AsideList.vue';
import Button from '@components/Button/Button.vue';

const emit = defineEmits(['activeLink', 'toggleAside']);

const toggleIcon = ref('left');

const activePage = (name) => {
    emit('activeLink', name)
};

const toggleHandler = () => {
    emit('toggleAside');
    toggleIcon.value = toggleIcon.value == 'left' ? 'right' : 'left';
};

</script>

<template>
    <aside class="aside">
        <div class="aside__header">
            <div class="logo">
                <img class="logo__image" src="@images/apple.svg" />
                <span class="logo__text">AppleTeam</span>
            </div>
            <Button :icon="toggleIcon" variant="icon" @click="toggleHandler" />
        </div>
        <div class="aside__body">
            <AsideList @activeLink="activePage" />
        </div>
        <div class="aside__footer">
            <Button icon="logout" variant="link" name="Log out" classes="text-danger" />
        </div>
    </aside>
</template>