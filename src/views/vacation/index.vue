<template>
  <div class="module-container">
    <div class="margin">当前职员: {{ currentSelectUserData.username || '' }}</div>
    <div class="main">
      <employee-list class="employee-list" @changeCurrentSelectUserData="changeCurrentSelectUserData" />
      <vacation-list class="vacation-list" :current-select-user-data="currentSelectUserData" />
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
      currentSelectUserData: { }
    }
  },
  methods: {
    changeCurrentSelectUserData(data) {
      this.currentSelectUserData = data
    }
  }
}
</script>

<style scoped lang="scss">
.module-container {
  height: 100%;
  padding: 10px;

  .main {
    display: flex;

    .employee-list {
      width: 440px;
      margin-right: 10px;
    }
    .vacation-list {
      flex: 1;
    }
  }
}
::v-deep {
  .el-button--mini, .el-button--small {
    padding: 6px 8px;
  }
}
</style>
