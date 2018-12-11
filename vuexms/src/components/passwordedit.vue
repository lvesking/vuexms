<template>
	<div class="passwordedit">
		<el-header style="text-align: right; font-size: 12px">
			<el-dropdown>
				<i class="el-icon-setting" style="margin-right: 15px"></i>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>个人信息</el-dropdown-item>
					<el-dropdown-item>退出系统</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<span class="username">{{username}}</span>
		</el-header>
		<el-main>
			<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			  <el-form-item label="旧密码" prop="oldPass">
			    <el-input type="password" v-model="ruleForm2.oldPass" autocomplete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="pass">
			    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="确认密码" prop="checkPass">
			    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
			    <el-button @click="resetForm('ruleForm2')">重置</el-button>
			  </el-form-item>
			</el-form>
		</el-main>
	</div>
	
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex" 

  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          oldPass: ''
        },
        rules2: {
          pass: [
            {required: true, validator: validatePass, trigger: 'blur' },
            { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' }
          ],
          checkPass: [
            {required: true, validator: validatePass2, trigger: 'blur' },
            { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' }
          ],
          oldPass: [
            { required: true, message: '请输入旧密码', trigger: 'blur' },
            { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    computed:{
			...mapState({
				userinfo:state=>state.userinfo,
				username:state=>state.userinfo.username
			})
		},
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          	let _this=this;
          	this.axios.post('/api/updatePwd',{
          		username:_this.username,
          		pass:_this.ruleForm2.pass,
          		oldPass:_this.ruleForm2.oldPass
          	}).then(response => {
          		if(response.data=="1"){
	          		this.$message({
	            			message:"恭喜你,修改成功",
	            			type:"success"
	            		});
          			_this.$router.push('/login');
          		}else{
          			this.$message.error('修改失败,请重新修改');
          		}
          	})
          } else {
          	console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
	.el-header {
	    background-color: #B3C0D1;
	    color: #333;
	    line-height: 60px;
	  }
	 .passwordedit{
	  	width: 100%;
	 }
	 .username{
	  	font-size: 20px;
	  	color: #409eff;
	  }
</style>