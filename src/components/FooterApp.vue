<script>
export default {
    props: {
        arrayMenù: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>

<footer>
    <div class="container p-5">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-3 p-4">
                        <div class="logo">
                            <img src="/public/footer-logo.png" alt="">
                        </div>
                        <p class="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo exercitationem est id temporibus nostrum porro repudiandae, nesciunt hic esse incidunt. Nobis, numquam perferendis aut nihil vitae placeat repellendus nemo dignissimos.</p>
                        <button>LEARN MORE</button>
                    </div>
                    <div class="col-3 p-4">
                        <h6>LATEST TWEETS</h6>
                        <p class="text-white mt-4">{{ this.arrayMenù.tweet }}</p>
                        <img src="/public/tweet.jpeg" alt="">
                    </div>   
                    <div class="col-3 p-4">
                        <h6>CONTACT US TODAY</h6>
                        <ul class="mt-4">
                            <li>
                                <font-awesome-icon class="icon" :icon="['fas','globe']" />
                                Corporate Location <br>
                                {{ this.arrayMenù.contacts.corporateAddress1 }} <br>
                                {{ this.arrayMenù.contacts.corporateAddress2 }}
                            </li>
                            <li>
                                <font-awesome-icon class="icon" :icon="['fas','house']" />
                                Residential Location <br>
                                {{ this.arrayMenù.contacts.residentialAddress1 }} <br>
                                {{ this.arrayMenù.contacts.residentialAddress2 }}
                            </li>
                            <li>
                                <font-awesome-icon class="icon" :icon="['fas','phone']" />
                                {{ this.arrayMenù.contacts.telephone }}
                            </li>
                            <li>
                                <font-awesome-icon class="icon" :icon="['far','envelope']" />
                                {{ this.arrayMenù.contacts.email }}
                            </li>
                            <li>
                                <font-awesome-icon class="icon" :icon="['far','clock']" />
                                {{ this.arrayMenù.contacts.openingHours1 }}
                            </li>
                            <li>
                                <font-awesome-icon class="icon" :icon="['far','clock']" />
                                {{ this.arrayMenù.contacts.openingHours2 }}
                            </li>
                        </ul>
                    </div>   
                    <div class="col-3 p-4">
                        <h6>FIND US</h6>
                        
                    </div>                     
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<style lang="scss">
</style>
