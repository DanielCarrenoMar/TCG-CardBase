<script lang="ts">
    import InfoCard from "./_components/info-card.svelte";
    import {GAMES, USED_INFO_CARD} from "./constants";  
</script>

<div class="w-full min-h-screen">
  {#each GAMES as game, i}
    <section class="relative w-full flex justify-center items-center py-10 px-4 overflow-hidden">
      <img
        src={game.background}
        alt="background"
        class="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
      <div class={`relative z-10 w-full max-w-7xl flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} items-stretch gap-8`}>
        <div class="w-full md:w-1/2 flex flex-col items-center justify-center gap-6">
          <img class="max-h-60 w-auto object-contain mb-4" src={game.logo} alt="logo" />
          <img class="max-h-80 w-auto object-contain" src={game.image} alt="game" />
        </div>
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <InfoCard info={USED_INFO_CARD[i]}/>
        </div>
      </div>
    </section>
    {#if i < GAMES.length - 1}
        {#if i === 0}
            <div class="w-full h-12 rounded-none bg-[linear-gradient(to_right,_#757575_0%,_#d9d9d9_100%)]"></div>
            <div class="w-full h-12 bg-[linear-gradient(to_right,_#a7edea_0%,_#5a8282_100%)]"></div>
        {:else if i === 1}
            <div class="w-full h-12 bg-[linear-gradient(to_right,_#a7edea_0%,_#5a8282_100%)]"></div>
            <div class="w-full h-12 bg-[linear-gradient(to_right,_#F98A0B_60.58%,_#935106_83.65%)]"></div>
        {:else if i === 2}
            <div class="w-full h-12 bg-[linear-gradient(to_right,_#F98A0B_60.58%,_#935106_83.65%)]"></div>
            <div class="w-full h-12 bg-[linear-gradient(to_right,_#B0CF86_39.42%,_#596944_78.85%)]"></div>
        {/if}
    {/if}
  {/each}
</div>

