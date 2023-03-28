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
            SHOPEE<span class="font-press-start line-through">Clone</span>
        </h1>
        <SearchBar />
        <div class="flex text-white self-center">
            <div class="px-1 cursor-pointer hover:bg-secondary_text">Login/Sign Up</div>
            <div class="px-1 cursor-pointer hover:bg-secondary_text">
                <svg viewBox="0 0 26.6 25.6" class="fill-white w-7 h-7 text-white stroke-white">
                    <polyline fill="none" points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1" stroke-linecap="round"
                        stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"></polyline>
                    <circle cx="10.7" cy="23" r="2.2" stroke="none"></circle>
                    <circle cx="19.7" cy="23" r="2.2" stroke="none"></circle>
                </svg>
            </div>
        </div>
    </header>
</template>




<style scoped></style>