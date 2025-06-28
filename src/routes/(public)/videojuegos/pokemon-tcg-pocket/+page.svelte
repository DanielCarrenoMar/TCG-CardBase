<script lang="ts">
    import { BANNER, SECTIONS } from './constants';
  </script>
  
  
  <section
    class="w-full min-h-[32rem] flex items-center justify-center bg-cover bg-center relative"
  >
    <img
      src={BANNER[0].background}
      alt="Pokémon TCG Live Banner"
      class="absolute inset-0 w-full h-full object-cover object-center z-0"
      style="pointer-events: none;"
    />
    <div class="relative z-10 w-full max-w-6xl mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        <img
          src={BANNER[0].image1}
          alt="Imagen 1 del banner"
          class="w-full max-w-md md:max-w-lg"
        />
        <img
          src={BANNER[0].image2}
          alt="Imagen 2 del banner"
          class="w-full max-w-md md:max-w-lg"
        />
      </div>
    </div>
  </section>
  
  
  <section class="w-full py-10 px-4 relative flex flex-col items-center overflow-hidden">
    <img
      src={SECTIONS[0].background}
      alt=""
      class="absolute inset-0 w-full h-full object-cover object-center z-0"
      style="pointer-events: none;"
    />
    <div class="relative z-10 w-full max-w-5xl flex flex-col md:flex-row-reverse items-center md:items-center gap-6 md:gap-24">
      <div class="flex-1 flex flex-col items-center md:items-start justify-center">
        <h2 class="text-4xl font-bold text-white mb-2 text-center md:text-left">{SECTIONS[0].title}</h2>
        <p class="text-2xl text-white text-center md:text-left mb-4 w-full md:max-w-2xl">{SECTIONS[0].description}</p>
      </div>
      <img
        src={SECTIONS[0].image}
        alt="Pokémon TCG Live"
        class="w-full max-w-md rounded-lg shadow-lg mx-auto md:mx-0"
      />
    </div>
  </section>
  
  
  <section class="w-full py-10 px-4 relative flex flex-col items-center overflow-hidden">
    <img
      src={SECTIONS[1].background}
      alt=""
      class="absolute inset-0 w-full h-full object-cover object-center z-0"
      style="pointer-events: none;"
    />
    <div class="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-24">
      <div class="flex-1 flex flex-col items-center md:items-start justify-center">
        <h2 class="text-4xl font-bold text-white mb-2 text-center md:text-left">{SECTIONS[1].title}</h2>
        <p class="text-2xl text-white text-center md:text-left mb-4 w-full md:max-w-2xl">{SECTIONS[1].description}</p>
      </div>
      <img
        src={SECTIONS[1].image}
        alt="Acerca del Juego"
        class="w-full max-w-md rounded-lg mx-auto md:mx-0"
      />
    </div>
  </section>
  
  
  <section class="w-full py-10 px-4 relative flex flex-col items-center overflow-hidden">
    <img
      src={SECTIONS[2].background}
      alt=""
      class="absolute inset-0 w-full h-full object-cover object-center z-0"
      style="pointer-events: none;"
    />
    <div class="relative z-10 w-full max-w-5xl flex flex-col items-center gap-8">
      <h2 class="text-4xl font-bold text-white mb-2 text-center">{SECTIONS[2].title}</h2>
      <div class="flex flex-col gap-12 w-full">
        {#each SECTIONS[2].content as modo, i}
          <div class={`flex flex-col items-center md:items-center gap-8 md:gap-16 w-full ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              
              <div class={`flex-1 flex flex-col items-center md:items-start justify-center ${i % 2 !== 0 ? 'md:pl-12' : ' md:pr-12'} max-w-xl mx-auto`}>
                <h3 class="text-3xl font-semibold text-white text-center md:text-left mb-2 md:self-start">{modo.title}</h3>
                <p class="text-2xl text-white text-center md:text-left max-w-lg">{modo.description}</p>
              </div>
              <img
                src={modo.image}
                alt={modo.title}
                class="w-full max-w-xs md:max-w-md rounded mx-auto md:mx-0"
              />
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="w-full py-10 px-4 relative flex flex-col items-center overflow-hidden">
    <img
      src={SECTIONS[3].background}
      alt=""
      class="absolute inset-0 w-full h-full object-cover object-center z-0"
      style="pointer-events: none;"
    />
    <div class="relative z-10 w-full max-w-5xl flex flex-col items-center gap-8">
      <h2 class="text-4xl font-bold text-white mb-2 text-center">{SECTIONS[3].title}</h2>
      <div class="flex flex-col gap-12 w-full">
        <div class="flex flex-col items-center md:items-center gap-8 md:gap-16 w-full md:flex-row">  
            <div class="flex-1 flex flex-col items-center md:items-start justify-center md:pr-12 max-w-xl mx-auto">
              <h3 class="text-3xl font-semibold text-white text-center md:text-left mb-2 ">{SECTIONS[3].content[0].title}</h3>
              <p class="text-2xl text-white text-center md:text-left max-w-lg">{SECTIONS[3].content[0].description}</p>
            </div>
            <img
              src={SECTIONS[3].content[0].image}
              alt={SECTIONS[3].content[0].title}
              class="w-full max-w-xs md:max-w-sm rounded mx-auto md:mx-0"
            />
        </div>
      </div>
    </div>
  </section>
  
  
  
  