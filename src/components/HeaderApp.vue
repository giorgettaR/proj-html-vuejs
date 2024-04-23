<script>

export default {
    props: {
        arrayMenù: {
            type: Array,
            required: true
        }
    }
}
</script>

<template>
    <header class="container p-4">
        <div class="row justify-content-between">
            <div class="logo col-auto">
                <img src="/construction_logo.png" alt="">
            </div>
            <ul class="menù col-auto d-flex align-items-center justify-content-between">
                <li v-for="link in this.arrayMenù"
                class="p-4"
                :class="{ button : link.isButton, active : link.isActive }"
                >
                   <a href="{{ link.href }}">{{ link.text }}</a> 
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss">
</style>
