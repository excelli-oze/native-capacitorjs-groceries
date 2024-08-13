<script>
    import utils, { products, cart } from '$lib/utils.js';
    import { onMount } from 'svelte';

    let productsList = [];
    let loading = true;

    onMount(async () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                products.set({
                    loading: false,
                    data: json
                });
                productsList = json;
                loading = false;
            });
    });

    function addToCart(product) {
        $cart = [...$cart, product];
        console.log($cart);
    }
</script>
<div class="w-screen grid grid-cols-1 w-screen bg-blue-100 pt-4 gap-y-12 place-items-center px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-20 max-w-screen-2xl mx-auto min-h-screen">
    {#if loading}
        <p>Loading...</p>
    {:else}
        <div class="text-2xl font-bold md:text-4xl ">Products</div>
        {#if productsList}
            {#each productsList as product}
                <div class="bg-blue-600 p-4 w-[256px]">
                    <div class="p-2 w-full bg-blue-300 shadow-lg h-fit">
                        <img class="w-[208px] h-[250px]" src={product.image} alt={product.title} />
                    </div>
                    <div class="p-2 mt-8 bg-blue-300/20">
                        <p class="mb-1 text-xl font-normal text-green-50 ">{product.title}</p>
                        <div class="flex justify-between items-center">
                            <p class="text-sm font-normal">
                                <span class="text-green-900">Rs {product.price}</span>
                            </p>
                            <button
                                class="px-4 py-1 text-sm text-white bg-green-800 shadow-sm hover:bg-green-900 active:bg-green-800"
                                on:click={() => {
                                    addToCart(product);
                                }}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            {/each}
        {/if}
    {/if}
</div>
