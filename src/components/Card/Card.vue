<script setup>
import Progress from '@components/Progress/Progress.vue';
import Button from '@components/Button/Button.vue';
import Windget from '@components/Widget/Windget.vue';
import Avatar from '@components/Avatar/Avatar.vue';
import Tag from '@components/Tag/Tag.vue';
</script>

<template>
    <div class="card">
        <div class="card__header">
            <p>Prorect Title goes here</p>
            <div class="btn-group btn-group--sm">
                <Button icon="edit" variant="icon" classes="card__header__button" />
                <Button icon="more" variant="icon" classes="card__header__button" />
            </div>
        </div>
        <div class="card__content">
            <div class="gird">
                <div class="grid__col">
                    <Tag name="Active" variant="success" icon="dot" />
                </div>
                <div class="grid__col">
                    b
                </div>
                <div class="grid__col">
                    <div class="widget-group">
                        <Windget :data="{ piece: 14, name: 'Tasks' }" />
                        <Windget :data="{ piece: 3, name: 'Members' }" />
                    </div>
                </div>
                <div class="grid__col">
                    <div class="avatar-group">
                        <Avatar image="https://avatars.githubusercontent.com/u/25702910" size="32" />
                        <Avatar image="https://avatars.githubusercontent.com/u/81494873" size="32" />
                        <Avatar image="https://avatars.githubusercontent.com/u/112624968" size="32" />
                        <Button icon="add" variant="circle" />
                    </div>
                </div>
            </div>
        </div>
        <div class="card__action">
            <Progress name="Progress" :value="70" :max="100" />
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
}

.gird {
    display: grid;
    gap: 16px;
    grid-template-areas:
        "a a a"
        "b b c"
        "d d d";

    .grid__col {
        &:first-child {
            grid-area: a;
        }

        &:nth-child(2) {
            grid-area: b;
        }

        &:nth-child(3) {
            grid-area: c;
            display: flex;
            justify-content: end;
            align-items: center;
        }

        &:last-child {
            grid-area: d;
        }
    }
}
</style>