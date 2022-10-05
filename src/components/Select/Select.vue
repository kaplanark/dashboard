<script setup>
import { ref } from 'vue'

const props = defineProps(['placeholder', 'options', 'value', 'classes']);
const emit = defineEmits(['update:value']);

const select = ref(props.placeholder);
const toggle = ref(false);

const selectHandler = (option) => {
    emit('update:value', option.value);
    select.value = option.label;
    toggle.value = false;
};
const toggleHandler = () => {
    toggle.value = !toggle.value;
};
</script>

<template>
    <div class="select">
        <div class="select__header" @click="toggleHandler" :class="toggle ? 'active':''">
            {{select}}
            <span class="material-symbols-outlined">
                expand_more
            </span>
        </div>
        <div class="select__content" v-show="toggle">
            <div class="select__option" v-for="option in props.options" @click="selectHandler(option)">
                {{ option.label }}
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.select {
    position: relative;

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid var(--color-text-light);
        border-radius: 8px;
        padding: 14px 22px;
        font-size: 16px;
        line-height: 19px;
        color: var(--color-text);
        transition: border 0.3s ease;
        cursor: pointer;
        
        &.active {
            border-color: var(--color-primary);
            border-radius: 8px 8px 0 0;
            border-bottom: 1px dashed var(--color-primary);

            span {
                transform: rotate(180deg);
            }
        }

        &:hover {
            border-color: var(--color-primary);
        }
    }

    &__content {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        border: 1px solid var(--color-primary);
        border-radius: 0 0 8px 8px;
        border-top: 0;
        padding: 12px;
        font-size: 16px;
        line-height: 19px;
        color: var(--color-text);
        z-index: 1;
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }

    &__option {
        padding: 12px 10px;
        cursor: pointer;
        border-radius: 8px;

        &:hover {
            background-color: rgb(242, 242, 242);
        }
    }
}
</style>