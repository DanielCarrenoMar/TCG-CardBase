<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let value: string = '';
    export let placeholder: string = 'Buscar...';
    export let items: any[] = [];
    export let key: string = 'nombre';

    const dispatch = createEventDispatcher();

    // Filtrado reactivo
    $: filteredItems = value
        ? items.filter(item =>
            (item[key] || '')
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase())
        )
        : items;

    $: dispatch('filter', { value, filteredItems });
</script>

<div class="flex items-center bg-primary-400 rounded-full px-4 py-2 w-full max-w-xl shadow-sm">
    <svg class="w-7 h-7 text-white mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" stroke="currentColor" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" stroke-linecap="round"/>
    </svg>
    <input
        type="text"
        bind:value={value}
        {placeholder}
        class="bg-white rounded-full px-4 py-2 w-full outline-none text-bg-100 placeholder-bg-100 text-lg"
    />
</div>