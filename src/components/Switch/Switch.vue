<script setup>
const props = defineProps(['name', 'value']);
const emit = defineEmits(['update:value']);

const inputHandler = (e) => {
    emit('update:value', e.target.checked);
};
</script>

<template>
    <input type="checkbox" :name="props.name" :id="props.name" class="switch" @input="inputHandler">
</template>

<style lang="scss">
.switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;
    margin: 0 10px;
    cursor: pointer;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        border: 1px solid var(--color-secondary);
        border-radius: 34px;
        transition: all 0.3s ease;
    }

    &::after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 22px;
        height: 22px;
        background-color: var(--color-secondary);
        border-radius: 50%;
        transition: all 0.3s ease;
    }

    &:checked::before {
        background-color: var(--color-secondary);
    }

    &:checked::after {
        left: 26px;
        background-color: #fff;
    }
}
</style>