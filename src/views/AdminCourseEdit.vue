<template>
  <div class="container py-5">
    <!-- 課程表單 AdminCourseForm -->
    <h1>編輯課程</h1>
    <AdminCourseForm
      @after-submit="handleAfterSubmit"
      :initialCourse="course"
    />

  </div>
</template>

<script>
import AdminCourseForm from "./../components/AdminCourseForm.vue";

const dummyData = {
  course: {
    id: 4,
    language: "法文",
    teacherName: "Emma Larsen",
    teacherImage: "https://randomuser.me/api/portraits/women/92.jpg",
    startTime: "2023-07-10",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus assumenda odio amet dolorum dicta in, tempora excepturi voluptates praesentium ut laboriosam distinctio velit. Quos cupiditate sunt quo nam, deleniti excepturi eligendi, amet accusantium fugit nostrum similique, voluptatem et in aliquam alias ea laborum necessitatibus? Aliquid fuga aut cum optio delectus.",
  },
};

export default {
  name: "AdminCourseEdit",
  components: {
    AdminCourseForm,
  },
  data() {
    return {
      course: {
        language: "",
        teacherName: "",
        teacherImage: "",
        startTime: "",
        description: "",
      },
    };
  },
  methods: {
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
    fetchCourse(courseID) {
      console.log("fetchCourse id:", courseID);
      const { course } = dummyData;
      this.course = {
        ...this.course,
        id: course.id,
        language: course.language,
        teacherName: course.teacherName,
        teacherImage: course.teacherImage,
        startTime: course.startTime,
        description: course.description,
      };
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchCourse(id);
  },
};
</script>


