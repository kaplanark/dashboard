<script setup>
import { ref, computed } from 'vue'

const props = defineProps(['placeholder', 'options', 'value']);
const emit = defineEmits(['update:value']);

const toggle = ref(false);
const selects = ref([]);

const toggleHander = () => {
    toggle.value = !toggle.value;
};
const selectHandler = (item) => {
    selects.value.includes(item) ? selects.value.splice(selects.value.indexOf(item), 1) : selects.value.push(item);
    emit('update:value', selects.value);
}

const optionFilter = computed(() => {
    return props.options.filter(item => !selects.value.includes(item));
});
</script>

<template>
    <div class="multi-select">
        <div class="multi-select__header" :class="toggle ? 'active' : ''">
            <div class="multi-select__toggle" @click="toggleHander">{{ props.placeholder }}</div>
            <ul class="tag-list">
                <li class="tag-list__item" v-for="select in selects">
                    {{ select }}
                    <button type="button" @click="selectHandler(select)" class="material-symbols-outlined">
                        cancel
                    </button>
                </li>
            </ul>
        </div>
        <div class="multi-select__content" v-show="toggle">
            <div class="multi-select__option" v-for="option in optionFilter" @click="selectHandler(option)">
                {{ option }}
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.multi-select {
    position: relative;

    &__toggle {
        padding: 12px 22px;
        border-right: 1px solid var(--color-text-light);
        cursor: pointer;
        white-space: nowrap;

    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: 1px solid var(--color-text-light);
        border-radius: 8px;
        font-size: 16px;
        line-height: 19px;
        color: var(--color-text);
        transition: border 0.3s ease;
        gap: 8px;
        min-height: 54px;

        &.active {
            border-color: var(--color-primary);
            border-radius: 8px 8px 0 0;
            border-bottom: 1px dashed var(--color-primary);
        }

        &:hover {
            border-color: var(--color-primary);
        }
    }

    &__option {
        padding: 12px 10px;
        cursor: pointer;
        border-radius: 8px;

        &:hover {
            background-color: rgb(242, 242, 242);
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
        min-height: 54px;

        &__option {
            padding: 10px;
            border-bottom: 1px solid #ccc;
            cursor: pointer;

            &:last-child {
                border-bottom: none;
            }
        }
    }
}

.tag-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 6px 0;
    gap: 8px;

    &__item {
        border: 1px dashed var(--color-primary);
        padding: 0 0 0 6px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        button {
            background-color: transparent;
            border: 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-danger);
        }
    }
}
</style>