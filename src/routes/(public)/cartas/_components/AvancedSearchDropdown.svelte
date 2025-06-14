<script lang="ts">
    let {} = $props();
    let open = $state(false);
    function toggle() {
        open = !open;
        console.log("Dropdown toggled:", open);
    }
</script>

<div class="w-full flex flex-col items-center">
    <button
        type="button"
        class="bg-primary-400 relative w-full h-8 flex items-center cursor-pointer select-none"
        onclick={toggle}
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
            <!-- Ejemplo de campos de búsqueda avanzada -->
            <div class="flex flex-col gap-4">
                <label class="flex flex-col">
                    <span class="text-sm font-medium text-gray-700 mb-1"
                        >Nombre de carta</span
                    >
                    <input
                        type="text"
                        class="border rounded px-2 py-1"
                        placeholder="Ej: Dragón Blanco"
                    />
                </label>
                <label class="flex flex-col">
                    <span class="text-sm font-medium text-gray-700 mb-1"
                        >Tipo</span
                    >
                    <select class="border rounded px-2 py-1">
                        <option value="">Todos</option>
                        <option value="monstruo">Monstruo</option>
                        <option value="mágica">Mágica</option>
                        <option value="trampa">Trampa</option>
                    </select>
                </label>
                <button
                    class="bg-primary-400 hover:bg-primary-500 text-black font-semibold rounded px-4 py-2 mt-2"
                    type="button"
                >
                    Buscar
                </button>
            </div>
        </div>
    {/if}
</div>
