<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新課程</h3>
        <!-- 最新課程 NewestCourses -->
        <NewestCourses v-bind:courses="courses" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments v-bind:comments="comments" :key="comments.id" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import NewestCourses from "./../components/NewestCourses.vue";
import NewestComments from "./../components/NewestComments.vue";

// 評論
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
      startTime: "2023-07-02T16:24:54.983Z",
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
  comments: [
    {
      id: 1,
      text: "Good! 老師很nice!",
      star: '★★★★★',
      createdAt: "2023-04-30T17:00:55.454Z",
      user: {
        name: "Ramona",
        email: "Ramona@example.com",
        image: "https://randomuser.me/api/portraits/women/13.jpg",
      },
      course: {
        id: 3,
        language: "韓文",
      },
    },
    {
      id: 2,
      text: "老師教導的非常細心~",
      star: '★★★★☆',
      createdAt: "2023-05-15T13:10:45.454Z",
      user: {
        name: "Noe",
        email: "Noe@example.com",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      course: {
        id: 5,
        language: "義大利文",
      },
    },
    {
      id: 3,
      text: "普普通通！！",
      star: '★★☆☆☆',
      createdAt: "2023-05-20T19:22:10.454Z",
      user: {
        name: "Nuria",
        email: "Nuria@example.com",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      course: {
        id: 4,
        language: "法文",
      },
    },
    {
      id: 4,
      text: "老師人很棒👏👏👏",
      star: '★★★☆☆',
      createdAt: "2023-05-31T21:15:30.454Z",
      user: {
        name: "Lena",
        email: "Lena@example.com",
        image: "https://randomuser.me/api/portraits/women/52.jpg",
      },
      course: {
        id: 8,
        language: "阿拉伯文",
      },
    },
    {
      id: 5,
      text: "課程規畫得很好~",
      star: '★★★★☆',
      createdAt: "2023-06-01T12:08:12.454Z",
      user: {
        name: "Brijesh",
        email: "Brijesh@example.com",
        image: "https://randomuser.me/api/portraits/men/37.jpg",
      },
      course: {
        id: 7,
        language: "俄文",
      },
    },
    {
      id: 6,
      text: "老師很用心欸✌️",
      star: '★★★☆☆',
      createdAt: "2023-06-05T14:09:15.454Z",
      user: {
        name: "Sam",
        email: "Sam@example.com",
        image: "https://randomuser.me/api/portraits/women/86.jpg",
      },
      course: {
        id: 7,
        language: "俄文",
      },
    },
    {
      id: 7,
      text: "我覺得還行",
      star: '★★★☆☆',
      createdAt: "2023-06-06T15:10:17.454Z",
      user: {
        name: "Kerim",
        email: "Kerim@example.com",
        image: "https://randomuser.me/api/portraits/men/61.jpg",
      },
      course: {
        id: 10,
        language: "中文",
      },
    },
    {
      id: 8,
      text: "聽說給評價有折價券可領....",
      star: '★★★☆☆',
      createdAt: "2023-04-30T23:10:08.454Z",
      user: {
        name: "Adam",
        email: "Adam@example.com",
        image: "https://randomuser.me/api/portraits/men/91.jpg",
      },
      course: {
        id: 3,
        language: "韓文",
      },
    },
    {
      id: 9,
      text: "讚讚讚👍👍",
      star: '★★★★★',
      createdAt: "2023-06-20T13:10:45.454Z",
      user: {
        name: "Jessica",
        email: "Jessica@example.com",
        image: "https://randomuser.me/api/portraits/women/57.jpg",
      },
      course: {
        id: 5,
        language: "義大利文",
      },
    },
    {
      id: 10,
      text: "magic ☺☺",
      star: '★★★☆☆',
      createdAt: "2023-06-15T16:10:27.454Z",
      user: {
        name: "Virgil",
        email: "Virgil@example.com",
        image: "https://randomuser.me/api/portraits/men/61.jpg",
      },
      course: {
        id: 10,
        language: "中文",
      },
    },
  ],
};

export default {
  name: "CoursesFeeds",
  components: {
    NavTabs,
    NewestCourses,
    NewestComments,
  },
  data() {
    return {
      courses: [],
      comments: [],
    };
  },
  methods: {
    fetchFeeds() {
      this.courses = dummyData.courses;
      this.comments = dummyData.comments;
    },
  },
  created() {
    this.fetchFeeds();
  },
};
</script>
