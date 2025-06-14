<script lang="ts">
  export let onClick: (() => void) | undefined = undefined;
  export let isLoading: boolean = false;
  export let loadingText: string = "Cargando...";
  export let className: string = "";
  export let type: "button" | "submit" | "reset" = "button";
  export let disabled: boolean = false;
</script>

<button
  type={type}
  class={`cursor-pointer bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-8 rounded mt-4 transition-colors duration-200 ${className}`}
  disabled={isLoading || disabled}
  on:click={onClick}
>
  {#if isLoading}
    {loadingText}
  {:else}
    <slot />
  {/if}
</button>