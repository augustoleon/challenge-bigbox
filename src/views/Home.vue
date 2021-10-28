<template>
  <div class="row justify-content-md-center">
    <!-- row justify-content-md-center -->
    <div v-if="isLoading" class="spinner-border text-danger load" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>

    <div v-else class="row justify-content-md-center">
      <card class="animate__fadeOutUp" :activities="activities" />

      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li v-on:click="getPreviousPage()" class="page-item">
            <a class="animate__pulse" href="#"> <left-arrow /> </a>
          </li>
          <li
            v-for="pages in totalPages()"
            :key="pages"
            v-on:click="getDataPages(pages)"
            class="page-item"
          >
            <a
              v-if="
                Math.abs(pages - this.page) < 4 ||
                this.page == totalPages() - 1 ||
                this.page == 0
              "
              :class="isActive(pages)"
              class="page-link"
              href="#"
              >{{ pages }}</a
            >
          </li>
          <li v-on:click="getNextPage()" class="page-item">
            <a class="animate__pulse" href="#"> <right-arrow /> </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
// import parseLink from 'parse-link-header';

import Card from '@/components/Card'
import api from '@/helpers/api'
import pag from '@/helpers/pagination'

import RightArrow from '@/icons/RightArrow'
import LeftArrow from '@/icons/LeftArrow'

export default {
  name: 'Home',

  components: {
    Card,
    RightArrow,
    LeftArrow,
  },

  data() {
    return {
      activities: [],
      page: 1,
      limit: 9,
      paginates: [],
      isLoading: true,
    }
  },

  created() {
    this.getActivitiePages()
  },

  methods: {
    getActivitiePages() {
      api
        .getActivities(this.page, this.limit)
        .then((activities) => (this.activities = activities))
      this.isLoading = false
    },

    totalPages() {
      return Math.ceil(pag.pagination().last._page / this.limit)
    },

    getDataPages(numberPages) {
      this.page = numberPages
      this.getActivitiePages()
    },

    getPreviousPage() {
      if (this.page > 1) {
        this.page--
      }

      this.getDataPages(this.page)
    },

    getNextPage() {
      if (this.page < this.totalPages()) {
        this.page++
      }

      this.getDataPages(this.page)
    },

    isActive(numberPages) {
      return numberPages == this.page ? 'btn-orange' : 'btn-white'
    },
  },
}
</script>

<style scoped>
.btn-orange {
  background-color: #ff6c5f;
  color: white;
  border-radius: 50px;
  border-color: none;
}

.btn-white {
  background-color: white;
  color: black;
  border-radius: 50px;
  border: none;
}

.load {
  width: 75px;
  height: 75px;
}
</style>
