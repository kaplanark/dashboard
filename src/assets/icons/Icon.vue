<script>
import { icons } from "./icons";

export default {
	name: "Icon",
	props: {
		name: {
			type: String,
			default: "error",
		},
		size: {
			type: Number,
			default: 16,
		},
		color: {
			type: String,
			default: "currentColor",
		},
	},
	computed: {
		path() {
			return icons.find((e) => e.name === this.name) ? icons.find((e) => e.name === this.name).path : icons.find((e) => e.name === "error").path;
		},
	},
};
</script>
        
<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :fill="color" class="svg" viewBox="0 0 16 16"
		v-html="path"></svg>
</template>