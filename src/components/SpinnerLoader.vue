<template>
    <span :class="classes"></span>
</template>

<script>
'use strict';

export default {
    props : {
        center : {
            type : Boolean,
            default : false
        },
        light : {
            type : Boolean,
            default : false
        },
        size : {
            type : String
        }
    },
    data()
    {
        return {
        };
    },
    computed : {
        classes() {
            return {
                loader : true,
                centered : this.center,
                light : this.light,
                tiny : this.size === 'xs',
                small : this.size === 'sm',
                large : this.size === 'lg',
            };
        }
    }
};
</script>

<style scoped lang="scss">
$size: 40px;
$maxSize: 100px;

.loader{
    display: inline-block;
    width: $size;
    height: $size;
    max-width: $maxSize;
    max-height: $maxSize;
    border: 3px solid var(--red);
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    border-radius: 50%;
    animation: rotate .7s infinite linear;

    &.light{
        border-top-color: #fff !important;
        border-left-color: #fff !important;
    }

    &.centered{
        transform-origin: left top;
        animation-name: rotate-centered;
    }

    &.tiny{
        width: 14px;
        height: 14px;
        border-width: 1px;
    }

    &.small{
        width: 24px;
        height: 24px;
        border-width: 1px;
    }

    &.large{
        width: 70px;
        height: 70px;
        border-width: 5px;
    }

    @keyframes rotate{
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }

    @keyframes rotate-centered{
        from{
            transform: rotate(0deg) translate(-50%, -50%);
        }
        to{
            transform: rotate(360deg) translate(-50%, -50%);
        }
    }
}
</style>
