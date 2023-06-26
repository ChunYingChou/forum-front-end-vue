<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="language">課程名稱</label>
      <input
        v-model="course.language"
        id="language"
        type="text"
        class="form-control"
        name="language"
        placeholder="Enter language"
        required
      />
    </div>

    <div class="form-group">
      <label for="teacherName">教師姓名</label>
      <input
        v-model="course.teacherName"
        id="teacherName"
        type="text"
        class="form-control"
        name="teacherName"
        placeholder="Enter teacher name"
      />
    </div>

    <div class="form-group">
      <label for="start-date">預計開課日期</label>
      <input
        v-model="course.startTime"
        id="start-date"
        type="date"
        class="form-control"
        name="start-date"
      />
    </div>

    <div class="form-group">
      <label for="description">課程簡介</label>
      <textarea
        v-model="course.description"
        id="description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="teacherImage" class="image">教師大頭照</label>
      <!--v-if 如果有圖片再顯示此預覽框 -->
      <img
        v-if="course.teacherImage"
        :src="course.teacherImage"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
      />
      <input
        id="teacherImage"
        type="file"
        name="teacherImage"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      />
    </div>

    <button type="submit" class="btn btn-primary">送出</button>

    <button type="button" class="btn btn-primary ms-5" @click="$router.back()">
      回上一頁
    </button>
  </form>
</template>

<script>
export default {
  name: "AdminCourseForm",
  props: {
    initialCourse: {
      type: Object,
      default: () => ({
        language: "",
        teacherName: "",
        teacherImage: "",
        startTime: "",
        description: "",
      }),
    },
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
    handleFileChange(e) {
      const { files } = e.target; // 拿出e.target.files
      if (files.length === 0) {
        this.course.teacherImage = "";
        return; // 如果使用者未選擇圖片則return
      }
      const imgURL = window.URL.createObjectURL(files[0]);
      // console.log(imgURL);
      this.course.teacherImage = imgURL;
    },
    handleSubmit(e) {
      // 將表單資料轉成 FormData 物件
      const form = e.target;
      const formData = new FormData(form);

      // 傳送表單資料給父層 AdminCourseNew
      this.$emit("after-submit", formData);
    },
  },
  created() {
    this.course = {
      ...this.course,
      ...this.initialCourse,
    };
  },
};
</script>

<style>
div.form-group {
  margin-top: 1rem;
}
button.btn-primary {
  margin-top: 2rem;
}
label.image {
  display: block;
}
</style>
