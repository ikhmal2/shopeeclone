<script>
import SearchBar from './SearchBar.vue';
export default {
    components: {
        SearchBar
    }
}
</script>

<template>
    <header class="flex justify-between p-5 bg-gradient-to-b from-primary to-secondary">
        <h1 class="text-2xl font-bold text-white">
            SHOPEE<span>C</span>
        </h1>
        <SearchBar />
        <div class="flex text-white">
            <div class="px-1 cursor-pointer hover:text-secondary_text">Login/Sign Up</div>
            <div class="px-1 cursor-pointer hover:text-secondary_text">Cart</div>
        </div>
    </header>
</template>




<style scoped></style>