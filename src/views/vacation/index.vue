<template>
  <div>
    <div>当前职员: {{ currentSelectUser }}</div>
    <div class="main">
      <employee-list class="employee-list" />
      <vacation-list class="vacation-list" />
    </div>
  </div>
</template>

<script>
import EmployeeList from '@/views/vacation/components/EmployeeList'
import VacationList from '@/views/vacation/components/VacationList'

export default {
  name: 'Index',
  components: {
    EmployeeList,
    VacationList
  },
  data() {
    return {
      currentSelectUser: ''
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.main {
  display: flex;

  .employee-list {
    width: 400px;
  }
  .vacation-list {
    flex: 1;
  }
}
</style>
