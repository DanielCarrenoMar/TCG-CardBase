<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import { getAllSets } from "$lib/api/sets";
    import { getAllRarities } from "$lib/api/cards";
    const dispatch = createEventDispatcher();
    let open = false;
    let selectedType = "";
    let selectedSet = "";
    let selectedRarity = "";
    let sets = [];
    let rarities = [];
    // Lista de tipos 
    const tipos = [
        "guego", "Agua", "Planta", "Rayo", "Psíquico", "Lucha", "incolora", "metalica", "Metálica", "Oscura", "Dragón"
    ];
    function toggle() {
        open = !open;
        console.log("Dropdown toggled:", open);
    }
    // usamos el filtro seleccionado
    function buscar() {
        if (selectedSet) {
            dispatch("search", { set: selectedSet });
        } else if (selectedType) {
            dispatch("search", { tipo: selectedType });
        } else if (selectedRarity) {
            dispatch("search", { rareza: selectedRarity });
        } else {
            dispatch("search", {});
        }
    }
    // Cargar sets y rarezas al montar el componente
    onMount(async () => {
        sets = await getAllSets() || [];
        rarities = await getAllRarities() || [];
    });
</script>

<div class="w-full flex flex-col items-center">
    <button
        type="button"
        class="bg-primary-400 relative w-full h-8 flex items-center cursor-pointer select-none"
        on:click={toggle}
        aria-expanded={open}
        aria-controls="advanced-search-dropdown"
    >
        <span class="rounded-md absolute top-0 left-1/2 -translate-x-1/2 flex items-center bg-primary-400 py-2 px-8">
            <h3 class="font-semibold text-black text-cente">
                Busqueda Avanzada
            </h3>
            <svg
                class="w-6 h-6 ml-2 text-black"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d={open ? "M19 9l-7 7-7-7" : "M19 9l-7 7-7-7"}
                />
            </svg>
        </span>
    </button>
    {#if open}
        <div
            id="advanced-search-dropdown"
            class="w-full max-w-md bg-white rounded shadow-lg z-10 p-4 mt-2"
        >
            <div class="flex flex-col gap-4">
                <!-- Filtro por set -->
                <label class="flex flex-col">
                    <span class="text-sm font-medium text-gray-700 mb-1">Set</span>
                    <select class="border rounded px-2 py-1" bind:value={selectedSet}>
                        <option value="">Todos</option>
                        {#each sets as set}
                            <option value={set.id}>{set.name}</option>
                        {/each}
                    </select>
                </label>
                <!-- Filtro por tipo -->
                <label class="flex flex-col">
                    <span class="text-sm font-medium text-gray-700 mb-1">Tipo</span>
                    <select class="border rounded px-2 py-1" bind:value={selectedType}>
                        <option value="">Todos</option>
                        {#each tipos as tipo}
                            <option value={tipo}>{tipo}</option>
                        {/each}
                    </select>
                </label>
                <!-- Filtro por rareza -->
                <label class="flex flex-col">
                    <span class="text-sm font-medium text-gray-700 mb-1">Rareza</span>
                    <select class="border rounded px-2 py-1" bind:value={selectedRarity}>
                        <option value="">Todas</option>
                        {#each rarities as rarity}
                            <option value={rarity}>{rarity}</option>
                        {/each}
                    </select>
                </label>
                <button
                    class="bg-primary-400 hover:bg-primary-500 text-black font-semibold rounded px-4 py-2 mt-2"
                    type="button"
                    on:click={buscar}
                >
                    Buscar
                </button>
            </div>
        </div>
    {/if}
</div>
