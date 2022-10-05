<script setup>
import Avatar from '@components/Avatar/Avatar.vue';

const props = defineProps(['data','classes']);
</script>

<template>
    <div class="user-info" :class="props.classes">
        <Avatar :image="props.data.image" size="40"/>
        <div class="user-info__content">
            <p>{{ props.data.name }}</p>
            <small>{{ props.data.email }}</small>
        </div>
    </div>
</template>

<style lang="scss">
.user-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    &__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;

        p {
            font-size: 16px;
            font-weight: 500;
            color: var(--color-secondary);
        }

        small {
            font-size: 14px;
            font-size: 12px;
            line-height: 14px;
            display: flex;
            align-items: center;
            color: #8B8B8B;
        }
    }
}
</style>