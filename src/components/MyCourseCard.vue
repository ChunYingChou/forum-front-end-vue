<template>
  <div class="row row-cols-1 row-cols-md-5 g-3">
    <div class="card me-4" v-for="course in courses" :key="course.id">
      <img
        class="card-img-top"
        :src="course.teacherImage"
        alt="Card image cap"
      />
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link :to="{ name: 'course', params: { id: course.id } }">
            <strong>{{ course.language }} </strong>
          </router-link>
        </p>

        <p class="card-text text-truncate">教師: {{ course.teacherName }}</p>
        <p>評價: {{ course.revaluation }} ★</p>
        <p>學生人數: {{ course.students }}</p>
        <p>開課日期: {{ course.startTime | toGetTime }}</p>
      </div>
      <div class="card-footer d-flex justify-content-center">
        <button
          v-if="course.isFollowed"
          @click.stop.prevent="deleteFollowed(course)"
          type="button"
          class="btn btn-danger btn-border favorite me-2"
        >
          移除追蹤
        </button>
        <button
          v-else
          type="button"
          @click.stop.prevent="addFollowed(course)"
          class="btn btn-primary btn-border favorite me-2"
        >
          加到追蹤
        </button>

        <button
          v-if="course.isChose"
          @click.stop.prevent="deleteCourse(course)"
          type="button"
          class="btn btn-danger like me-2"
        >
          退選課程
        </button>
        <button
          v-else
          @click.stop.prevent="addCourse(course)"
          type="button"
          class="btn btn-primary like me-2"
        >
          選修課程
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { toGetTimeFilter } from "./../utils/mixins";

export default {
  props: {
    courses: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      course: this.courses,
    };
  },
  methods: {
    addFollowed(course) {
      course.isFollowed = true;
    },
    deleteFollowed(course) {
      course.isFollowed = false;
      this.courses = this.courses.filter((_course) => _course.id !== course.id);
    },
    deleteCourse(course) {
      (course.isChose = false), (course.students -= 1);
      this.courses = this.courses.filter((_course) => _course.id !== course.id);
    },
    addCourse(course) {
      (course.isChose = true), (course.students += 1);
    },
  },
  mixins: [toGetTimeFilter],
};
</script>
