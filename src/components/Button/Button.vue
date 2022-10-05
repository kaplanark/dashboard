<script setup>
const props = defineProps(['name', 'icon', 'variant', 'classes'])
</script>

<template>
    <button :class="['btn btn--' + props.variant, props.classes]">
        <span class="material-symbols-outlined" v-if="props.icon != undefined">
            {{ props.icon }}
        </span>
        <p v-if="props.name != undefined">{{ props.name }}</p>
    </button>
</template>

<style lang="scss">
.btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    &--primary {
        background-color: var(--color-primary);
        color: #fff;
        padding: 16px 32px;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        border: none;
        transition: all 0.3s ease-in-out;
        &:hover {
            background-color: #e84a4a;
        }
    }

    &--icon {
        background-color: transparent;
        color: var(--color-text);
        border: none;
        padding: 4px;
        border-radius: 50%;
        font-size: 14px;
        span {
            font-size: 24px;
            transition: all 0.3s ease-in-out;
        }

        &:hover {
            span {
                color: var(--color-primary);
            }
        }
    }

    &--link {
        background-color: transparent;
        border: 0;
        font-size: 16px;
        font-weight: 500;

        span {
            font-size: 24px;
        }
    }
    &--circle{
        height: 32px;
        width: 32px;
        border-radius: 50%;
        border: 1px solid var(--color-text);
        background-color: #fff;
        span{
            color: var(--color-text);
        }
    }
}
</style>