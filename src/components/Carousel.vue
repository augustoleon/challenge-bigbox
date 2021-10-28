<template>
  <div>
    <Carousel
      v-for="img in image"
      :key="img"
      :perPageCustom="[
        [768, 3],
        [1024, 4],
      ]"
      :scrollPerPage="true"
    >
      <Slide>
        <img :src="img" :alt="img" />
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'Carousel',

  props: ['image'],

  components: { Carousel, Slide },
}
</script>

<style></style>
