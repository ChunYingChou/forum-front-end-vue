<template>
  <table class="table">
    <thead class="table-dark">
      <tr>
        <th scope="col">編號</th>
        <th scope="col">大頭照</th>
        <th scope="col">姓名</th>
        <th scope="col">email</th>
        <th scope="col" >出生年月日</th>
        <th scope="col" >連絡電話</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in students" :key="student.id">
        <th scope="row">
          {{ student.id }}
        </th>
        <td><img :src="student.image" alt=""></td>
        <td>{{ student.name }}</td>
        <td>{{ student.email }}</td>
        <td>{{ student.birthday }}</td>
        <td>{{ student.cellphone }}</td>
        <!-- <td class="d-flex justify-content-between">
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
        </td> -->
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  students: [
    {
      id: 1,
      email: "Ramona@example.com",
      password: "12345678",
      name: "Ramona",
      gender: "female",
      image: "https://randomuser.me/api/portraits/women/13.jpg",
      birthday: "1998/12/12",
      cellphone: "0912-345-678",
    },
    {
      id: 2,
      email: "Noe@example.com",
      password: "12345678",
      name: "Noe",
      gender: "male",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      birthday: "1995/11/11",
      cellphone: "0912-345-678",
    },
    {
      id: 3,
      email: "Nuria@example.com",
      password: "12345678",
      name: "Nuria",
      gender: "female",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      birthday: "1993/10/10",
      cellphone: "0912-345-678",
    },
    {
      id: 4,
      email: "Lena@example.com",
      password: "12345678",
      name: "Lena",
      gender: "female",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
      birthday: "2000/09/09",
      cellphone: "0912-345-678",
    },
    {
      id: 5,
      email: "Brijesh@example.com",
      password: "12345678",
      name: "Brijesh",
      gender: "male",
      image: "https://randomuser.me/api/portraits/men/37.jpg",
      birthday: "2002/08/08",
      cellphone: "0912-345-678",
    },
    {
      id: 6,
      email: "Sam@example.com",
      password: "12345678",
      name: "Sam",
      gender: "female",
      image: "https://randomuser.me/api/portraits/women/86.jpg",
      birthday: "1987/07/07",
      cellphone: "0912-345-678",
    },
    {
      id: 7,
      email: "Kerim@example.com",
      password: "12345678",
      name: "Kerim",
      gender: "male",
      image: "https://randomuser.me/api/portraits/men/61.jpg",
      birthday: "1985/06/06",
      cellphone: "0912-345-678",
    },
    {
      id: 8,
      email: "Adam@example.com",
      password: "12345678",
      name: "Adam",
      gender: "male",
      image: "https://randomuser.me/api/portraits/men/91.jpg",
      birthday: "1980/05/05",
      cellphone: "0912-345-678",
    },
    {
      id: 9,
      email: "Jessica@example.com",
      password: "12345678",
      name: "Jessica",
      gender: "female",
      image: "https://randomuser.me/api/portraits/women/57.jpg",
      birthday: "2005/04/04",
      cellphone: "0912-345-678",
    },
    {
      id: 10,
      email: "Virgil@example.com",
      password: "12345678",
      name: "Virgil",
      gender: "female",
      image: "https://randomuser.me/api/portraits/men/61.jpg",
      birthday: "1982/03/03",
      cellphone: "0912-345-678",
    },
  ],
};

export default {
  data() {
    return {
      students: []
    }
  },
  methods: {
    fetchStudents() {
      this.students = dummyData.students
    }
  },
  created() {
    this.fetchStudents()
  }
};
</script>
