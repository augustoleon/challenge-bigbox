<template>
  <div v-for="img in image" :key="img">
    <VueSlickCarousel v-bind="settings">
      <div>
        <img :src="image" :alt="img" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Carousel',

  props: ['image'],

  data() {
    return {
      settings: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  },

  components: { VueSlickCarousel },

  // created() {
  //    this.getImage
  // },

  // methods: {
  //   getImage() {
  //     const id = this.$route.params.id
  //     api.getActivityById(id).then((data) => (this.image = data.image))
  //   },
  // }
}
</script>

<style></style>
