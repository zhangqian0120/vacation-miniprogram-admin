<template>
  <div class="resource-container">
    <div class="main-table">
      <el-button class="margin-10-0" type="primary" size="mini" @click="handleAdd">新增员工</el-button>
      <el-table
        ref="table"
        :data="tableData"
        border
        size="mini"
        highlight-current-row
        :header-cell-style="{background:'#fafafa',color:'#606266'}"
        @row-click="selectEmployeeData"
      >
        <el-table-column
          label="序号"
          type="index"
          width="50"
        />
        <el-table-column
          prop="username"
          label="姓名"
          width="60"
        />
        <el-table-column
          prop="workId"
          label="工号"
        />
        <el-table-column
          prop="phones"
          label="账号"
        >
          <template slot-scope="scope">{{ scope.row.phones.length ? scope.row.phones : '' }}</template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          header-align="center"
          width="120"
        >
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleEdit(scope.row)">编辑</el-button>
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
        label-width="120px"
        class="demo-ruleForm"
        @close="handleClose"
      >
        <el-form-item label="姓名" prop="username">
          <el-input v-model="currentData.username" placeholder="请输入姓名" clearable />
        </el-form-item>
        <el-form-item label="手机号" prop="phones">
          <el-input v-model="currentData.phones" placeholder="请输入手机号" clearable />
        </el-form-item>
        <el-form-item label="入职日期" prop="registerTime">
          <el-date-picker v-model="currentData.registerTime" type="date" :editable="false" value-format="timestamp" placeholder="请选择入职日期" style="width: 100%;" />
        </el-form-item>
        <el-form-item label="是否为自有员工" prop="selfStaff">
          <el-switch v-model="currentData.selfStaff" :active-value="1" :inactive-value="0" />
        </el-form-item>
        <el-form-item label="开始工作日期" prop="startWorkTime">
          <el-date-picker v-model="currentData.startWorkTime" type="date" :editable="false" value-format="timestamp" placeholder="请选择开始工作日期" style="width: 100%;" />
        </el-form-item>
        <el-form-item label="是否为管理员" prop="superman">
          <el-switch v-model="currentData.superman" :active-value="1" :inactive-value="0" />
        </el-form-item>
        <el-form-item label="工号" prop="workId">
          <el-input v-model="currentData.workId" placeholder="请输入工号" clearable />
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
import { insert, selectAll, update } from '@/api/staff'
import { deepClone } from '@/utils'

export default {
  name: 'EmployeeList',
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      dialogTitle: '新增',
      currentData: {
        idStatus: true,
        username: '',
        phones: undefined,
        registerTime: '',
        selfStaff: 1,
        startWorkTime: '',
        superman: 0,
        workId: ''
      },
      btnLoading: false
    }
  },
  mounted() {
    this.selectAll()
  },
  methods: {
    handleClose() {
      this.$refs['form'].resetFields()
    },
    selectEmployeeData(e) {
      console.log(e)
      this.$emit('changeCurrentSelectUserData', e)
    },
    selectAll() {
      selectAll().then(res => {
        if (res.data.length) {
          res.data.forEach(item => {
            item.registerTime = item.registerTime ? Number(item.registerTime) * 1000 : ''
            item.startWorkTime = item.startWorkTime ? Number(item.startWorkTime) * 1000 : ''
            if (item.phones.length) {
              item.phones = item.phones[0]
            }
          })
        }
        this.tableData = res.data
      })
    },
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
        for (const key in this.currentData) {
          if (data[key]) {
            this.currentData[key] = data[key]
          }
        }
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
      const params = deepClone(this.currentData)
      if (params?.phones) {
        params.phones = [params.phones]
      }
      if (params?.registerTime) {
        params.registerTime = parseInt(Number(params.registerTime) / 1000)
      }
      if (params?.startWorkTime) {
        params.startWorkTime = parseInt(Number(params.startWorkTime) / 1000)
      }
      if (this.dialogTitle === '新增') {
        insert(params).then(res => {
          this.dialogVisible = false
          this.selectAll()
        })
      } else {
        update(params).then(res => {
          this.dialogVisible = false
          this.selectAll()
        })
      }
      // this.$refs['form'].validate((valid) => {
      //   if (valid) {
      //     this.showSaveBtn = true
      //     this.deptSubmit()
      //   } else {
      //     return false
      //   }
      // })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
