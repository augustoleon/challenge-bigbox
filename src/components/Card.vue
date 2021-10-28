<template>
  <div class="card-box-bb" v-for="act in activities" :key="act.id">
    <router-link
      class="router-link"
      :to="{ name: 'actividades-id', params: { id: act.id } }"
    >
      <img class="img-bb" :src="act.image[0]" :alt="act.name" />

      <div class="place-and-participants">
        <p class="place">
          <b>{{ act.name }}</b>
        </p>
        <p class="participants">
          <persons v-if="act.participants > 1" />
          <one-person v-else />
        </p>
      </div>
      <div class="location">
        <Geolocator class="geolocator" />
        <p>{{ act.locations[0].province }}</p>
      </div>

      <div class="card-desc">
        <p class="desc">
          {{ act.description }}
        </p>
      </div>

      <p class="points">
        <b> {{ act.market_price }} puntos </b>
      </p>
    </router-link>
  </div>
</template>

<script>
import Geolocator from '@/icons/Geolocator'
import Persons from '@/icons/Persons'
import onePerson from '@/icons/OnePerson'

export default {
  name: 'Card',

  props: {
    activities: {
      type: Array,
      default: () => [],
    },
  },

  components: {
    Geolocator,
    Persons,
    onePerson,
  },
}
</script>

<style>
.router-link {
  text-decoration: none;
}
.card-box-bb {
  width: 369px;
  height: 480px;
}

.img-bb {
  width: 100vh;
  height: 240px;
  border-radius: 4px;
}

.place-and-participants {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: black;
}

.place {
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
  line-height: 22, 5px;
}

.participants {
  font-family: 'Quicksand', sans-serif;
  color: black;
}

.location {
  display: flex;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  color: black;
}
.geolocator {
  color: #ff6c5e;
}

.card-desc {
  display: flex;
  justify-content: start;
  text-align: left;
}

.desc {
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  color: black;
}

.points {
  font-family: 'Quicksand', sans-serif;
  text-align: left;
  font-size: 18px;
  color: black;
}
</style>
