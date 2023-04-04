<template>
    <div class="pt-5 mx-auto my-0 w-1/2">
        <h2 class="border-primary border-b-4 text-center py-3 font-bold text-2xl">DAILY DISCOVER</h2>
    </div>

    <div class="product-container">
        <div v-for="product in products" :key="product.id"
            class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
            <a href="#">
                <img class="p-8 rounded-t-lg w-80 h-80 object-contain" :src="product.image" alt="product image" />
            </a>
            <div class="px-5 pb-5">
                <a href="#">
                    <h5 class="truncate text-xl font-semibold tracking-tight text-gray-900 ">
                        {{ product.title }}

                    </h5>

                </a>

                <div class="inline-flex gap-4 flex-col justify-between">
                    <span class="text-3xl font-bold text-gray-900dark:text-white">RM{{ product.price }}</span>
                    <div class="flex">
                        <span class="text-blue-800 text-m font-semibold  rounded  h-6">
                            {{ product.rating.count }} sold
                        </span>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-2 h-6">{{
                            product.rating.rate }} stars
                        </span>
                    </div>

                    <a href="#"
                        class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add
                        to cart</a>
                </div>
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

<style scoped>
.product-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
    gap: 1.25rem;
    padding: 2rem;
}
</style>