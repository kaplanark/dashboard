<script setup>
import Card from '@components/Card/Card.vue';
</script>

<template>
    <div class="main">
        <div class="container">
            <div class="main__wrapper">
                <Card v-for="(project, index) in 9" :key="index" />
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