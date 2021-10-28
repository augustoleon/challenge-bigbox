<template>
  <div>
    <go-back class="goBack" @click="$router.go(-1)" />
    <div v-if="isLoading" class="spinner-border text-danger load" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <template v-else>
      <div class="first-container">
        <div class="container">
          <img :src="image[0]" alt="" />
        </div>
        <div class="container">
          <p class="title">
            <b>{{ activity.name }}</b>
          </p>
          <p class="desc">{{ activity.description }}</p>

          <div class="participants">
            <persons v-if="activity.participants > 1" />
            <one-person v-else />
            <div>
              {{
                activity.participants > 1
                  ? `Para ${activity.participants} personas`
                  : `Para ${activity.participants} persona`
              }}
            </div>
          </div>
          <div class="location">
            <Geolocator />
            <p>
              {{ activity.locations[0].province }}
            </p>
          </div>

          <p class="points">
            <b>{{ activity.market_price }} puntos</b>
          </p>
        </div>
      </div>

      <div class="second-container">
        <p class="who-includes">
          <b>¿Qué incluye?</b>
        </p>
        <div class="span-line"><div class="span-line-two"></div></div>
        <hr />
        <div class="includes" v-html="activity.benefits" />

        <div class="rules-container">
          <div class="rules-icon">
            <Rules />
            <p><b>Reglas:</b></p>
          </div>

          <div class="rules" v-html="activity.small_print" />
        </div>
      </div>

      <div class="other-activities-container">
        <p><b>Otras actividades similares:</b></p>
      </div>

      <div class="row justify-content-md-center">
        <card :activities="activities" />
      </div>

      <!-- <carousel :image="image" ></carousel> -->
    </template>
  </div>
</template>

<script>
import Card from '@/components/Card'
import api from '@/helpers/api'

import Persons from '@/icons/Persons'
import onePerson from '@/icons/OnePerson'
import Geolocator from '@/icons/Geolocator'
import Rules from '@/icons/Rules'
import GoBack from '@/icons/GoBack'
// import Carousel from '@/components/Carousel';

export default {
  name: 'Activity-by-id',

  data() {
    return {
      activity: {},
      activities: [],
      image: [],
      isLoading: true,
      page: 1,
      limit: 3,
    }
  },

  components: {
    Persons,
    onePerson,
    Geolocator,
    Rules,
    GoBack,
    Card,
  },

  created() {
    this.getId(),
      this.getImage(),
      this.getActivitiePages(),
      (this.isLoading = false)
  },

  methods: {
    getId() {
      const id = this.$route.params.id
      api.getActivityById(id).then((activity) => (this.activity = activity))
    },

    getImage() {
      const id = this.$route.params.id
      api.getActivityById(id).then((data) => (this.image = data.image))
    },

    getActivitiePages() {
      api
        .getActivities(this.page, this.limit)
        .then((activities) => (this.activities = activities))
    },
  },
}
</script>

<style scoped>
.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
}

.slick-next:before,
.slick-prev:before {
  color: black;
}
.goBack {
  margin-left: 60px;
  cursor: pointer;
}

.first-container {
  display: flex;
  justify-content: space-between;
}

.first-container img {
  height: 100%;
}
.container {
  width: 563px;
  height: 371px;
}

.container img {
  border-radius: 4px;
  cursor: pointer;
}

.title {
  font-family: 'Quicksand', sans-serif;
  font-size: 30px;
  text-align: left;
}

.desc {
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
  text-align: left;
}

.participants {
  display: flex;
}

.participants div {
  margin-left: 10px;
  margin-top: -5px;
  font-size: 16px;
}

.location {
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  text-align: left;
  margin-top: 25px;
}

.location p {
  margin-top: -5px;
  margin-left: 10px;
}

.points {
  font-family: 'Quicksand', sans-serif;
  font-size: 24px;
  text-align: left;
}

.second-container {
  margin-left: 70px;
  width: 50vw;
}

.who-includes {
  font-family: 'Quicksand', sans-serif;
  font-size: 22px;
  text-align: left;
  margin-top: 95px;
  margin-left: 20px;
}

.span-line {
  border: 1px solid #ff6c5f;
  width: 15vw;
  margin-bottom: -16px;
}

hr {
  width: 50vw;
}

.includes {
  text-align: left;
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
}

.rules-icon {
  display: flex;
  font-family: 'Quicksand', sans-serif;
  font-size: 22px;
  margin-top: 50px;
  margin-left: 20px;
}

.rules-icon p {
  margin-left: 10px;
}

.rules {
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
  text-align: left;
  margin-top: 20px;
}

.other-activities-container {
  margin-left: 70px;
  margin-top: 60px;
}

.other-activities-container p {
  font-family: 'Quicksand', sans-serif;
  font-size: 24px;
  text-align: left;
}

.load {
  width: 75px;
  height: 75px;
}
</style>
