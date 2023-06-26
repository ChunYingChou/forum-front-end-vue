<template>
  <div class="container py-5">
    <!-- 課程表單 AdminCourseForm -->
    <h1>新增課程</h1>
    <AdminCourseForm @after-submit="handleAfterSubmit"/>
    
  </div>
</template>

<script>
import AdminCourseForm from "./../components/AdminCourseForm.vue";
export default {
  name: "AdminCourseNew",
  components: {
    AdminCourseForm,
  },
  methods: {
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
};
</script>
