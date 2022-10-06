<script setup>
import { ref, computed } from 'vue'

const props = defineProps(['placeholder']);

const searchText = ref('');

const show = computed(() => {
    return searchText.value.length > 0 ? true : false;
});
</script>

<template>
    <div class="search">
        <div class="search__icon">
            <icon name="search" size="18"/>
        </div>
        <input type="text" class="search__input" :class="show ? 'active' : ''" :placeholder="props.placeholder"
            v-model="searchText">
        <transition name="fade">
            <div class="search__content" v-show="show">
                <small class="text-secondary">Search results for {{ searchText }}</small>
            </div>
        </transition>
    </div>
</template>

<style lang="scss">
.search {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &__input {
        width: 100%;
        padding: 16px 20px 16px 52px;
        border-radius: 8px;
        background-color: var(--color-quaternary);
        border: none;

        &::placeholder {
            color: var(--color-text-light);
            font-size: 14px;
            font-family: var(--font-primary);
        }

        &.active {
            border-radius: 8px 8px 0 0;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
        }
    }

    &__content {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--color-quaternary);
        border-radius: 0 0 8px 8px;
        z-index: 1;
        padding: 16px;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
        border-top: 1px dashed var(--color-text-light);
        min-height: 100px;
    }

    &__icon {
        position: absolute;
        left: 16px;
        color: var(--color-text);
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>