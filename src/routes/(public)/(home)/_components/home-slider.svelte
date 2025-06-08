<script>
  import { Carousel, Controls } from "flowbite-svelte";
  
  const images = [
    {
      alt: "image1",
      src: "/images/home-slider/home-slider-1.avif",
      title: "image1"
    },
    {
      alt: "image2",
      src: "/images/home-slider/home-slider-2.jpg",
      title: "image2"
    },
    {
      alt: "image3",
      src: "/images/home-slider/home-slider-3.jpg",
      title: "image3"
    },
  ]  
</script>

<Carousel {images}>
  <Controls />
</Carousel>