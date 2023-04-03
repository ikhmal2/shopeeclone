<template>
    <div class="pt-5 mx-auto my-0 w-1/2">
        <h2 class="border-primary border-b-4 text-center py-3 font-bold text-2xl">DAILY DISCOVER</h2>
    </div>

    <div v-for="product in products" :key="product.id">
        <div class="pb-5 w-1/3 float-left">
            <div
                class="bg-white transition-all duration-[0.5s] w-[calc(100%+20px)] float-left mx-0 my-[10px] cursor-pointer border-solid border-secondary_text">
                <a href="#">
                    <div class="relative h-72">
                        <div>
                            <img :src='product.image'>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Discover',
    computed: {
        products() {
            return this.$store.getters.getProducts;
        }
    },
    methods: {
        getProducts() {
            this.$store.dispatch('fetchProducts');
        }
    },
    beforeMount() {
        this.getProducts();
    },
}
</script>

<style scoped></style>