<template>
  <div class="resource-container">
    <div class="main-table">
      <el-button type="primary" size="mini" @click="handleAdd">新增</el-button>
      <el-table
        ref="table"
        :data="tableData"
        border
        size="mini"
        highlight-current-row
        :header-cell-style="{background:'#fafafa',color:'#606266'}"
        class="margin-t-10"
      >
        <el-table-column
          label="序号"
          type="index"
          width="50"
        />
        <el-table-column
          prop="name"
          label="名称"
        />
        <el-table-column
          prop="phone"
          label="账号"
        />
        <el-table-column
          fixed="right"
          label="操作"
          header-align="center"
        >
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="success" size="mini" @click="handleAddChild(scope.row)">新增子项</el-button>
            <el-button
              type="danger"
              size="mini"
              @click="handleDel(scope.row)"
            >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="40%"
    >
      <el-form
        ref="form"
        :model="currentData"
        size="small"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="currentData.name" placeholder="请输入名称" clearable />
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="currentData.phone" placeholder="请输入手机号" clearable />
        </el-form-item>
        <el-form-item class="d-f flex-end">
          <el-button :loading="btnLoading" type="primary" @click="handleSave()">保存</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'EmployeeList',
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      dialogTitle: '新增',
      currentData: {
        name: '',
        phone: ''
      },
      btnLoading: false
    }
  },
  methods: {
    // 新增
    handleAdd() {
      this.dialogVisible = true
      this.dialogTitle = '新增'
    },
    // 删除
    handleDel(data) {
      console.log(data)
    },
    // 编辑
    handleEdit(data) {
      this.dialogVisible = true
      this.dialogTitle = '编辑'
      this.$nextTick(() => {
        this.currentData = { ...data }
      })
    },
    // 新增子项
    handleAddChild(data) {
      this.dialogVisible = true
      this.dialogTitle = '新增'
      this.$nextTick(() => {
      })
    },
    // 保存
    handleSave() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.showSaveBtn = true
          this.deptSubmit()
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
