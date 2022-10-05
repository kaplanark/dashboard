<script setup>
import { ref } from 'vue'

const props = defineProps(['type', 'message', 'closeable']);

const show = ref(true);

const closeHandler = () => {
    show.value = false;
};
</script>

<template>
    <div class="alert" :class="'alert--' + props.type" v-if="show">
        <div class="alert__icon">
            <span class="material-symbols-outlined">
                {{props.type}}
            </span>
        </div>
        <div class="alert__content">
            <p class="alert__text">{{ props.message }}</p>
        </div>
        <button v-if="props.closeable != undefined" class="alert__close" @click="closeHandler">
            <span class="material-symbols-outlined">
                close
            </span>
        </button>
    </div>
</template>

<style lang="scss">
.alert {
    display: flex;
    align-items: center;
    padding: 8px;
    display: flex;
    align-items: center;
    border-radius: 6px;
    gap: 8px;
    background-color: var(--color-tertiary);
    color: var(--color-white);

    &-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    &__icon {
        color: #fff;

        span {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    &__content {
        flex: 1;
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    &__title {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 500;
    }

    &__text {
        margin: 0;
        font-size: 1rem;
    }

    &__close {
        background-color: transparent;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 1.5rem;
        padding: 0;

        span {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    &--success {
        background-color: var(--color-success);
    }

    &--warning {
        background-color: var(--color-warning);
    }

    &--error {
        background-color: var(--color-danger);
    }

    &--info {
        background-color: var(--color-info);
    }

    &--message {
        background-color: var(--color-message);
    }
}
</style>