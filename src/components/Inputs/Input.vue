<script setup>
const props = defineProps(['name','type', 'placeholder', 'value', 'classes']);
const emit = defineEmits(['update:value']);

const inputHandler = (e) => {
    emit('update:value', e.target.value);
};
</script>

<template>
    <input :name="props.name" :type="props.type" :placeholder="props.placeholder" :class="props.classes" :value="props.value"
        @input="inputHandler" />
</template>

<style lang="scss">
input {
    border: 1px solid var(--color-text-light);
    border-radius: 8px;
    padding: 14px 22px;
    font-size: 16px;
    line-height: 19px;
    color: var(--color-text);
    outline: none;
    transition: all 0.3s ease-in-out;

    &:focus {
        border-color: var(--color-primary);
    }
}
</style>