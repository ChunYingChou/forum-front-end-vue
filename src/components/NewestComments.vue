<template>
  <div class="card">
    <div class="card-header">最新評論</div>
    <div class="card-body">
      <div v-for="comment in comments" :key="comment.id">
        <h4>
          <router-link
            :to="{ name: 'course', params: { id: comment.course.id } }"
          >
            {{ comment.course.language }}
          </router-link>
          <span>{{ comment.star }}</span>
        </h4>

        <p>{{ comment.text }}</p>
        by
        <router-link :to="{ name: 'student', params: { id: comment.user.name } }">
          {{ comment.user.name }}</router-link
        >

        <span>&nbsp;&nbsp;{{ comment.createdAt | toGetTime }}</span>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
  filters: {
    toGetTime(datetime) {
      if (!datetime) return "-";
      return new Date(datetime).toLocaleString();
    },
  },
};
</script>
