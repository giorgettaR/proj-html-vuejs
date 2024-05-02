<script>
import { services } from '../store.js';
export default {
    data() {
        return {
            services: services,
        }
    }
}

</script>

<template>
<section class="services block">
    <div class="container">
        <div class="row pb-3">
            <div class="head col-7 m-auto d-flex flex-column align-items-center justify-content-between">
                <h4>Specialists In Modern Construction</h4>
                <div class="divider small"></div>
                <p class="text-center">Quis autem vel eum iure repredeirt qui in eavoluptate velit esse quam nihil molestiae conssequatur.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="row row-cols-4 text-center">
                    <div class="col">
                        <div class="card buildings">
                            <div class="img m-auto">
                                <font-awesome-icon class="icon narrow" :icon="['far','building']" />
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Buildings</h4>
                                <p class="card-text">Quis autem vel eum iure repredeirt qui in eavoluptate velit esse quam nihil molestiae conssequatur.</p>
                            </div>
                            <div class="hoverCard">
                                <div class="card-body h-100 d-flex flex-column align-items-center justify-content-around">
                                    <h6 class="card-title">ARTFULLY CRAFTED</h6>
                                    <p class="card-text">Quis autem vel eum iure repredeirt qui in eavoluptate velit esse quam nihil molestiae conssequatur.</p>
                                    <button class="buttonLight">GET A QUOTE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card renovate">
                            <div class="img m-auto">
                                <font-awesome-icon class="icon" :icon="['fas','rotate']" />
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Renovate</h4>
                                <p class="card-text">Quis autem vel eum iure repredeirt qui in eavoluptate velit esse quam nihil molestiae conssequatur.</p>
                            </div>
                            <div class="hoverCard">
                                <div class="card-body h-100 d-flex flex-column align-items-center justify-content-around">
                                    <h6 class="card-title">ARTFULLY CRAFTED</h6>
                                    <p class="card-text">Quis autem vel eum iure repredeirt qui in eavoluptate velit esse quam nihil molestiae conssequatur.</p>
                                    <button class="buttonLight">GET A QUOTE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card construct">
                            <div class="img m-auto">
                                <font-awesome-icon class="icon" :icon="['fas','house']" />
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Construct</h4>
                                <p class="card-text">Quis autem vel eum iure repredeirt qui in eavoluptate velit esse quam nihil molestiae conssequatur.</p>
                            </div>
                            <div class="hoverCard">
                                <div class="card-body h-100 d-flex flex-column align-items-center justify-content-around">
                                    <h6 class="card-title">ARTFULLY CRAFTED</h6>
                                    <p class="card-text">Quis autem vel eum iure repredeirt qui in eavoluptate velit esse quam nihil molestiae conssequatur.</p>
                                    <button class="buttonLight">GET A QUOTE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card exclusive">
                            <div class="img m-auto">
                                <font-awesome-icon class="icon" :icon="['fas','truck']" />
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Exclusive</h4>
                                <p class="card-text">Quis autem vel eum iure repredeirt qui in eavoluptate velit esse quam nihil molestiae conssequatur.</p>
                            </div>
                            <div class="hoverCard">
                                <div class="card-body h-100 d-flex flex-column align-items-center justify-content-around">
                                    <h6 class="card-title">ARTFULLY CRAFTED</h6>
                                    <p class="card-text">Quis autem vel eum iure repredeirt qui in eavoluptate velit esse quam nihil molestiae conssequatur.</p>
                                    <button class="buttonLight">GET A QUOTE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style lang="scss">
</style>
