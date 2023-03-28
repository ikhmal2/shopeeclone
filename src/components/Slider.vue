<script lang="ts">
import {
    Splide,
    SplideSlide
} from "@splidejs/vue-splide";
import '@splidejs/vue-splide/css';

export default ({
    components: {
        Splide,
        SplideSlide,
    },
});
</script>

<template>
    <Splide :options="{ rewind: true }">
        <SplideSlide>
            <img class="w-full" src="https://cf.shopee.com.my/file/my-50009109-4bcd19a6278751f8784c3e3887527412_xxhdpi"
                alt="Sample 1">
        </SplideSlide>
        <SplideSlide>
            <img class="w-full" src="https://cf.shopee.com.my/file/my-50009109-04f12fbc11c44e4cbfb8d194b0a8ec9d_xxhdpi"
                alt="Sample 2">
        </SplideSlide>
        <SplideSlide>
            <img class="w-full" src="https://cf.shopee.com.my/file/my-50009109-cce08b5190489a2abed2cb2dc75fd041_xxhdpi">
        </SplideSlide>
    </Splide>
</template>

<style scoped></style>