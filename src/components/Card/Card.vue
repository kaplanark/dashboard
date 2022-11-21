<script setup>
const props = defineProps({
	bordered: {
		type: String,
		default: ''
	},
	classes: {
		type: Boolean,
		default: false
	},
	backgroundColor: {
		type: Boolean,
		default: false
	}
});
</script>

<template>
	<div class="card" :class="[props.bordered ? 'card--bordered':''],props.classes"
		:style="{'background-color':props.backgroundColor}">
		<div class="card__header">
			<slot name="header" />
		</div>
		<div class="card__content">
			<slot name="content" />
		</div>
		<div class="card__action">
			<slot name="action"></slot>
		</div>
	</div>
</template>

<style lang="scss">
.card {
	width: 100%;
	background: #FFFFFF;
	border: 1px solid #E5E5E5;
	border-radius: 8px;
	transition: all 0.3s ease-in-out;
	padding: 24px;
	display: flex;
	flex-direction: column;
	gap: 22px;

	&:hover {
		box-shadow: rgba(35, 35, 104, 0.2) 0px 7px 29px 0px;
		border-color: #fff;
	}

	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;

		p {
			font-size: 18px;
			font-weight: 500;
			color: var(--color-secondary);
		}
	}

	&--bordered {
		.card__header {
			border-bottom: 1px solid #E5E5E5;
			padding-bottom: 16px;
		}

		.card__action {
			border-top: 1px solid #E5E5E5;
			padding-top: 16px;
		}
	}
}
</style>