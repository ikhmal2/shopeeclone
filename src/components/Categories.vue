<template>
    <div>
        <h6 class="font-bold text-center py-4">CATEGORIES</h6>
        <div class="grid grid-cols-2 p-4 w-1/2 my-0 mx-auto">
            <div class="rounded border-primary border-solid border-[1px] text-center capitalize font-semibold"
                v-for="(cat, index) in categories" :key="index">
                <p class="p-4">{{ cat }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Categories',
    computed: {
        categories() {
            return this.$store.getters.getCategories;
        }
    },
    methods: {
        getCategories() {
            this.$store.dispatch('fetchCategories');
        }
    },
    beforeMount() {
        this.getCategories();
    },
}
</script>

<style scoped></style>