<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ course.language }}</h1>
      </div>
      <div class="col-md-4">
        <img
          class="img-responsive center-block"
          :src="course.teacherImage"
          style="width: 250px; margin-bottom: 25px"
        />
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>教師:</strong>
              {{ course.teacherName }}
            </li>
            <li>
              <strong>學生人數:</strong>
              {{ course.students }}人
            </li>
            <li>
              <strong>評價:</strong>
              {{ course.revaluation }} ★
            </li>
            <li>
              <strong>預計開課日期:</strong>
              {{ course.startTime | toGetTime }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <p>
          {{ course.description }}
        </p>
      </div>
    </div>
    <hr />
    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import { toGetTimeFilter } from "./../utils/mixins";

const dummyData = {
  course: {
    id: 3,
    language: "韓文",
    teacherName: "Priscilla Smith",
    teacherImage: "https://randomuser.me/api/portraits/women/26.jpg",
    students: 3,
    revaluation: 3.5,
    startTime: "2023-07-05T16:24:54.983Z",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus assumenda odio amet dolorum dicta in, tempora excepturi voluptates praesentium ut laboriosam distinctio velit. Quos cupiditate sunt quo nam, deleniti excepturi eligendi, amet accusantium fugit nostrum similique, voluptatem et in aliquam alias ea laborum necessitatibus? Aliquid fuga aut cum optio delectus.",
    isFollowed: true,
    isChose: false,
  },
};

export default {
  name: "AdminCourse",
  data() {
    return {
      course: {
        id: "",
        language: "",
        teacherName: "",
        teacherImage: "",
        students: "",
        revaluation: "",
        startTime: "",
        description: "",
      },
    };
  },
  mounted() {
    const { id: courseID } = this.$route.params;
    this.fetchCourse(courseID);
  },
  methods: {
    fetchCourse(courseID) {
      const { course } = dummyData;
      this.course = {
        ...this.course,
        id: courseID,
        language: course.language,
        teacherName: course.teacherName,
        teacherImage: course.teacherImage,
        students: course.students,
        revaluation: course.revaluation,
        startTime: course.startTime,
        description: course.description
      };
    },
  },
  mixins: [toGetTimeFilter],
};
</script>
