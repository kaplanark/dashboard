<script setup>
const props = defineProps(['name', 'icon', 'variant', 'classes'])
</script>

<template>
    <div class="tag" :class="['tag--' + props.variant, props.classes]">
        <icon :name="props.icon" size="22" />
        <p class="tag__name">
            {{ props.name }}
        </p>
    </div>
</template>

<style lang="scss">
.tag {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;

    span {
        font-size: 18px;
    }

    &__name {
        font-size: 14px;
    }

    &--success {
        color: var(--color-success);
    }
    &--warning {
        color: var(--color-warning);
    }
    &--danger {
        color: var(--color-danger);
    }
}
</style>