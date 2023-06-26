<template>
  <div class="card">
    <div class="card-header">最新課程</div>
    <div class="card-body">
      <div v-for="course in courses" :key="course.id">
        <h4>
          <router-link :to="{ name: 'course', params: { id: course.id } }">{{
            course.language
          }}</router-link>
          <small>語文類</small>
        </h4>
        <p>教師：{{ course.teacherName }}</p>
        開課日期：{{ course.startTime | toGetTime }}
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { toGetTimeFilter } from './../utils/mixins'

export default {
  props: {
    courses: {
      type: Array,
      required: true,
    },
  },
  mixins: [toGetTimeFilter] 
};
</script>

<style scoped>
small {
  font-size: 10px;
  margin-left: 10px;
}
</style>
