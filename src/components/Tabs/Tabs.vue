<script setup>
import { ref } from 'vue'

const props = defineProps(['panes']);
const emit = defineEmits(['update:active']);

const active = ref(props.panes[0]);

const clikHandler = (name) => {
    emit('update:active', name);
    active.value = name;
}
</script>

<template>
    <div class="tab">
        <div class="tab__content">
            <div class="tab__item" v-for="pane in props.panes" :key="pane" @click="clikHandler(pane)"
                :class="pane === active ? 'active':''">
                {{ pane }}
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.tab {
    &__content {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 26px;
    }

    &__item {
        padding: 8px 10px;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: var(--color-text);
        position: relative;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: var(--color-secondary);
            font-weight: 700;
        }

        &.active {
            color: var(--color-secondary);
            font-weight: 700;

            &::before {
                position: absolute;
                content: "";
                width: 4px;
                height: 4px;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                background-color: var(--color-secondary);
                border-radius: 50%;
            }
        }
    }
}
</style>