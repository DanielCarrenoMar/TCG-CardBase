<script lang="ts">
    import NavigateButton from '$lib/components/Navigate-button.svelte';

    // Lista de videojuegos
    const videogames = [
        {
            name: 'Pokémon TCG Online',
            img: 'images/videogames/tcg-online/logo.png',
            alt: 'Pokémon TCG Online',
            url: 'videojuegos/pokemon-tcg-online'
        },
        {
            name: 'Pokémon Pocket',
            img: 'images/videogames/tcg-pocket/logo.png',
            alt: 'Pokémon Pocket',
            url: 'videojuegos/pokemon-tcg-pocket'
        },
        {
            name: 'Pokémon Trading Card Game',
            img: 'images/videogames/trading-card/logo.png',
            alt: 'Pokémon Trading Card Game',
            url: 'videojuegos/pokemon-trading-card-game'
        },
        {
            name: 'Pokémon TCG Live',
            img: 'images/videogames/tcg-live/logo.png',
            alt: 'Pokémon TCG Live',
            url: 'videojuegos/pokemon-tcg-live'
        }
    ];
</script>

<section class="p-10 bg-bg-300 shadow-2xl overflow-hidden">
    <div class="container mx-auto">
        <h2 class="text-3xl md:text-5xl font-bold text-center text-white bg-clip-text mb-8 tracking-tight">
            Videojuegos
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 justify-items-center mb-10">
            {#each videogames as game}
                <a href={game.url} class="flex flex-col items-center group w-72 h-52 max-w-full bg-white/5 rounded-xl shadow-lg p-2 mb-2 transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                    <img src={game.img} alt={game.alt} class="w-full h-48 object-contain mb-2 transition-transform duration-300 group-hover:scale-110" />
                </a>
            {/each}
        </div>

        <div class="flex justify-center mt-6">
            <NavigateButton href="videojuegos">
                Ir a Videojuegos
            </NavigateButton>
        </div>
    </div>
</section>
