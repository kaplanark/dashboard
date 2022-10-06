<script setup>
import { ref } from 'vue';

const emit = defineEmits(['activeLink']);

const links = ref([
    { icon: "home", name: "Dashboard" },
    { icon: "view", name: "Projects" },
    { icon: "tree", name: "Modules" },
    { icon: "send", name: "Sprint" },
    { icon: "group", name: "Members" },
    { icon: "chart", name: "Reports" }
]);

const clickHandler = (name) => {
    emit('activeLink', name)
}
</script>

<template>
    <ul class="nav-list">
        <li class="nav-list__item" v-for="(link, index) in links" :key="link.name">
            <a href="#" class="nav-list__link" :class="index == 1 ? 'active' : ''" @click="clickHandler(link.name)">
                <span><icon :name="link.icon" size="22" /></span>
                <p>{{ link.name }}</p>
            </a>
        </li>
    </ul>
</template>

<style lang="scss">
.nav-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 8px;

    &__item {
        width: 100%;
    }

    &__link {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 18px;
        padding: 16px 30px;
        font-size: 16px;
        font-weight: 400;
        transition: all 0.3s ease-in-out;
        width: 100%;
        border-radius: 8px;
        color: var(--color-text);

        &:hover {
            background-color: var(--color-quaternary);
            font-weight: 500;
        }

        &.active {
            background-color: var(--color-quaternary);
            font-weight: 500;
            color: var(--color-primary);
        }
    }
}
</style>