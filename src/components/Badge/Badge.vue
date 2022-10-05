<script setup>
const props = defineProps(['icon', 'classes', 'active'])
</script>
    
<template>
    <button class="btn btn--badge" :class="props.classes">
        <span class="material-symbols-outlined">
            {{ props.icon }}
        </span>
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
        span {
            font-size: 24px;
            transition: all 0.3s ease-in-out;
        }

        &:hover {
            span {
                color: var(--color-primary);
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