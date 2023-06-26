<template>
  <table class="table">
    <thead class="table-dark">
      <tr>
        <th scope="col">編號</th>
        <th scope="col">分類</th>
        <th scope="col">課程名稱</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="course in courses" :key="course.id">
        <th scope="row">
          {{ course.id }}
        </th>
        <td>語文類</td>
        <td>{{ course.language }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-course', params: { id: course.id } }"
            class="btn btn-link"
            >Show</router-link
          >
          <router-link
            :to="{ name: 'admin-course-edit', params: { id: course.id } }" class="btn btn-link">Edit</router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteCourse(course.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  courses: [
    {
      id: 1,
      language: "英文",
      teacherName: "Jesse Hatala",
      teacherImage: "https://randomuser.me/api/portraits/men/69.jpg",
      students: 1,
      revaluation: 4,
      startTime: "2023-06-30T16:24:54.983Z",
      isFollowed: false,
      isChose: true,
    },
    {
      id: 2,
      language: "日文",
      teacherName: "Tina Ward",
      teacherImage: "https://randomuser.me/api/portraits/women/49.jpg",
      students: 2,
      revaluation: 4.5,
      startTime: "2023-07-02T16:24:54.000Z",
      isFollowed: false,
      isChose: true,
    },
    {
      id: 3,
      language: "韓文",
      teacherName: "Priscilla Smith",
      teacherImage: "https://randomuser.me/api/portraits/women/26.jpg",
      students: 3,
      revaluation: 3.5,
      startTime: "2023-07-05T16:24:54.983Z",
      isFollowed: true,
      isChose: false,
    },
    {
      id: 4,
      language: "法文",
      teacherName: "Emma Larsen",
      teacherImage: "https://randomuser.me/api/portraits/women/92.jpg",
      students: 4,
      revaluation: 3,
      startTime: "2023-07-10T16:24:54.983Z",
      isFollowed: true,
      isChose: false,
    },
    {
      id: 5,
      language: "義大利文",
      teacherName: "Tracey Nguyen",
      teacherImage: "https://randomuser.me/api/portraits/women/67.jpg",
      students: 5,
      revaluation: 5,
      startTime: "2023-07-15T16:24:54.983Z",
      isFollowed: true,
      isChose: false,
    },
    {
      id: 6,
      language: "西班牙文",
      teacherName: "Jessica Werth",
      teacherImage: "https://randomuser.me/api/portraits/women/57.jpg",
      students: 7,
      revaluation: 3,
      startTime: "2023-07-17T16:24:54.983Z",
      isFollowed: false,
      isChose: true,
    },
    {
      id: 7,
      language: "俄文",
      teacherName: "Kadir Sezek",
      teacherImage: "https://randomuser.me/api/portraits/men/24.jpg",
      students: 3,
      revaluation: 3,
      startTime: "2023-06-28T16:24:54.983Z",
      isFollowed: false,
      isChose: true,
    },
    {
      id: 8,
      language: "阿拉伯文",
      teacherName: "Gusmão Costa",
      teacherImage: "https://randomuser.me/api/portraits/men/76.jpg",
      students: 5,
      revaluation: 4.2,
      startTime: "2023-07-25T16:24:54.983Z",
      isFollowed: true,
      isChose: false,
    },
    {
      id: 9,
      language: "葡萄牙文",
      teacherName: "Ava Clement",
      teacherImage: "https://randomuser.me/api/portraits/women/76.jpg",
      students: 2,
      revaluation: 4.8,
      startTime: "2023-07-28T16:24:54.983Z",
      isFollowed: false,
      isChose: true,
    },
    {
      id: 10,
      language: "中文",
      teacherName: "Annekatrin Röhrig",
      teacherImage: "https://randomuser.me/api/portraits/women/18.jpg",
      students: 10,
      revaluation: 4,
      startTime: "2023-07-31T16:24:54.983Z",
      isFollowed: true,
      isChose: false,
    },
  ],
};

export default {
  data() {
    return {
      courses: [],
    };
  },
  methods: {
    fetchCourses() {
      this.courses = dummyData.courses;
    },
    deleteCourse(courseID) {
      this.courses = this.courses.filter((course) => courseID != course.id);
    },
  },
  created() {
    this.fetchCourses();
  },
};
</script>
