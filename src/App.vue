<template>
    <section class="full-page d-flex">
        <transition name="fade" appear>
            <div v-if="loading" class="full-page d-flex bg-primary">
                <spinner-loader :light="true" class="m-auto" />
            </div>
        </transition>
        <home @load="loading = false" />
    </section>
</template>

<script>
import Home from './components/Home.vue';
import SpinnerLoader from './components/SpinnerLoader.vue';

export default {
    components : {
        Home,
        SpinnerLoader
    },
    data() {
        return {
            loading : true
        }
    }
}
</script>
