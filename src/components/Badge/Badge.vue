<script setup>
import Icon from '@icons/Icon.vue';

const props = defineProps(['icon', 'classes', 'active'])
</script>
    
<template>
    <button class="btn btn--badge" :class="props.classes">
        <icon :name="props.icon" size="20" />
        <span class="dot" v-if="props.active != undefined"></span>
    </button>
</template>

<style lang="scss">
.btn {
    &--badge {
        background-color: transparent;
        color: var(--color-text);
        border: none;
        padding: 4px;
        border-radius: 50%;
        position: relative;
        svg {
            transition: all 0.3s ease-in-out;
        }

        &:hover {
            svg {
                fill: var(--color-primary);
            }
        }
        .dot{
            position: absolute;
            top: 4px;
            right: 4px;
            width: 8px;
            height: 8px;
            background-color: var(--color-primary);
            border-radius: 50%;
        }
    }
}
</style>