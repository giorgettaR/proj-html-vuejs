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
    <header>
        <div class="container">
            <div class="row justify-content-between">
                <div class="logo col-auto">
                    <img src="/construction_logo.png" alt="">
                </div>
                <ul class="menù col-auto d-flex align-items-center justify-content-between flex-nowrap">
                    <li v-for="link in this.arrayMenù"
                    class="ms-4"
                    :class="{ buttonLight : link.isButton, active : link.isActive }"
                    >
    <!-- manca freccetta che indica il link attivo -->
                    <a :href="link.href">{{ link.text }}</a> 
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
</style>
