<script setup>
// import { watchEffect } from 'vue'

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    classes: {
        type: String,
        default: '',
    },
    size: {
        type: String,
        default: 'md',
    },
});
const emit = defineEmits(['update:show']);
// const html = document.getElementsByTagName('html');

const closeHandler = () => {
    emit('update:show', false);
};

// watchEffect(() => {
//     html[0].style.overflow = props.show ? 'hidden' : 'auto';
// });
</script>

<template>
    <Transition name="fade">
        <div class="modal" :class="['modal--' + props.size, props.classes]" v-if="props.show">
            <div class="modal__mask" @click="closeHandler"></div>
            <Transition name="scale">
                <div class="modal__content" v-show="props.show">
                    <div class="modal__header">
                        <slot name="header"></slot>
                    </div>
                    <div class="modal__body">
                        <slot name="body"></slot>
                    </div>
                    <div class="modal__footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </Transition>
        </div>
    </Transition>
</template>