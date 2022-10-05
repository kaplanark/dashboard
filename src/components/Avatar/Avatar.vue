<script setup>
const props = defineProps(['image', 'size', 'classes']);
</script>

<template>
    <div class="avatar" :class="props.classes">
        <img class="avatar__image" :src="props.image" :width="props.size" :height="props.size" />
    </div>
</template>

<steyle lang="scss">
.avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-text-light);
    border-radius: 50%;
    overflow: hidden;
}
</steyle>