<script setup>
const props = defineProps(['data']);
</script>

<template>
    <div class="widget">
        <div class="widget__header">
            {{ props.data.piece }}
        </div>
        <div class="widget__content">
            {{ props.data.name }}
        </div>
    </div>
</template>

<style lang="scss">
.widget {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 20px;
    background: #F9F9F9;
    border-radius: 7px;
    width: fit-content;
    gap: 4px;
    width: 74px;
    &__header {
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: var(--color-secondary);
    }

    &__content {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: var(--color-text);
    }
}
</style>