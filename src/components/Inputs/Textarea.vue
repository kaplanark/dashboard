<script setup>
const props = defineProps(['placeholder', 'value', 'classes']);
const emit = defineEmits(['update:value']);

const inputHandler = (e) => {
    emit('update:value', e.target.value);
};
</script>

<template>
    <textarea :placeholder="props.placeholder" :class="props.classes" :value="props.value"
        @input="inputHandler"></textarea>
</template>

<style lang="scss">
textarea {
    border: 1px solid var(--color-text-light);
    border-radius: 8px;
    padding: 14px 22px;
    font-size: 16px;
    line-height: 19px;
    color: var(--color-text);
    outline: none;
    transition: border 0.3s ease-in-out;
    max-width: 100%;
    min-width: 100%;
    min-height: 100px;
    max-height: 200px;
    &:focus {
        border-color: var(--color-primary);
    }
}
</style>