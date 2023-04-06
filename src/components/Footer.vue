<template>
    <div class="bg-gray-100 flex justify-evenly pb-4">
        <ul>
            <li class="uppercase py-4 font-bold">Customer Service</li>
            <li class="cursor-pointer" v-for="(service, index) in custService">
                {{ service }}
            </li>
        </ul>
        <ul>
            <li class="uppercase py-4 font-bold">About ShopeeClone</li>
            <li class="cursor-pointer" v-for="(abouts, index) in about">
                {{ abouts }}
            </li>
        </ul>
        <ul>
            <li class="uppercase py-4 font-bold">Payment</li>
            <div class="grid grid-cols-4">
                <li class="w-16 h-8 mb-2 mr-2 p-1 bg-white box-border overflow-hidden rounded-sm cursor-pointer"
                    v-for="(icon, index) in icons">
                    <img :src=icon>
                </li>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            icons: ['https://down-my.img.susercontent.com/file/735e9b602704f9fcecc0fc589358d5df',
                'https://down-my.img.susercontent.com/file/8612df33671e5fcf4e3896dddc09126f',
                'https://down-my.img.susercontent.com/file/be96ecd1fe21e89d006f285bae7db4ee',
                'https://down-my.img.susercontent.com/file/2b9fdf2b116defb1373ec0ca833b622e',
                'https://down-my.img.susercontent.com/file/9c50afbccfc08119c4e14038c64cc0ab',
                'https://down-my.img.susercontent.com/file/f3a5219c3d68c4408a9eb1095fb820b8',
                'https://down-my.img.susercontent.com/file/1c15be6ef971c4b91e758590c2b96742',
                'https://down-my.img.susercontent.com/file/fd3605c25740d44da2609c8a1436abc5',
                'https://down-my.img.susercontent.com/file/35c12ef72a9150918b2f25f90b0aad44',
                'https://down-my.img.susercontent.com/file/4033bf33861a853bcba707d544694940',
                'https://down-my.img.susercontent.com/file/f9064fd45144e68e314586ee350b52dd',
                'https://down-my.img.susercontent.com/file/2d504b9eaad31ffb9d9a5070a7f3207b'],

            custService: ['Help Centre',
                'How to Buy',
                'How to Sell',
                'ShopeeClonePay',
                'ShopeeClone Coins',
                'ShopeeClone Guaratee',
                'ShopeeClone Free Shipping Program',
                'Return and Refund',
                'Contact Us',
                'Scam Safety Tips'],

            about: [
                'About Us',
                'ShopeeClone Careers',
                'ShopeeClone Policies',
                'Privacy Policy',
                'ShopeeClone Mall',
                'Seller Centre',
                'ShopeeClone Blog',
            ]
        }
    },
}
</script>

<style scoped></style>