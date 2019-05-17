<style lang="scss">
   .layout{
       height:100%;
       width:100%;
       background: url("../assets/image/l-bg.png") no-repeat;
       background-size: 100% 100%;
       .header{
           display: flex;
           align-items: center;
           justify-content: space-between;
           height:58px;
           color:#ffffff;
           background:
                   url("../assets/image/logo.png") no-repeat 16px center,
                   url("../assets/image/header-bg.png") no-repeat;
           background-size:50px 52px,100% 100%;
           p{
               margin-left: 73px;
               font-size: 20px;
           }
           ul{
               display: flex;
               margin-right:10px;
               font-size: 15px;
               li{
                   height:18px;
                   line-height: 18px;
                   &:first-child{
                       margin-right: 10px;
                       padding-left:26px;
                       background: url("../assets/image/user.png") no-repeat;
                   }
                   &:last-child{
                       position: relative;
                       width:38px;
                       cursor: pointer;
                       background: url("../assets/image/logout.png") no-repeat center;
                       &:before{
                           position: absolute;
                           display: block;
                           content: " ";
                           height:15px;
                           top:50%;
                           transform: translateY(-50%);
                           border-left: 1px solid #ffffff;
                       }
                   }
               }
           }
       }
       .main{
           height:calc(100% - 88px);
           .menu{
               float: left;
               height:100%;
               width:220px;
               overflow: hidden;
               .el-menu{
                   height:100%;
                   text-align: left;
               }
           }
           .container{
               margin-left:220px;
               height:100%;
               background: rgba(255,255,255,0.6);
               overflow: auto;
           }
       }
       .footer{
           height:30px;
           line-height: 30px;
           text-align: center;
           color: #ffffff;
           background: rgba(255,255,255,0.3);

       }
   }
</style>
<template>
    <section class="layout">
         <header class="header">
             <p>
                 自助运维系统
             </p>
             <ul>
                 <li>管理员</li>
                 <li></li>
             </ul>
         </header>
        <section class="main">
             <section class="menu">
                 <el-menu
                         default-active="home"
                         class="el-menu"
                         :unique-opened="true"
                         :router="true"
                         @select="handleSelect"
                         @open="handleOpen"
                         @close="handleClose">
                     <el-menu-item index="">
                         <i class="el-icon-menu"></i>
                         <span slot="title">首页</span>
                     </el-menu-item>
                     <el-submenu index="1">
                         <template slot="title">
                             <!--<i class="el-icon-location"></i>-->
                             <span>导航一</span>
                         </template>
                         <!--<el-menu-item-group>-->
                             <el-menu-item index="home">选项1</el-menu-item>
                             <el-menu-item index="about">选项2</el-menu-item>
                         <!--</el-menu-item-group>-->
                     </el-submenu>
                     <el-submenu index="6">
                         <template slot="title">
                             <!--<i class="el-icon-location"></i>-->
                             <span>导航一</span>
                         </template>
                         <!--<el-menu-item-group>-->
                         <el-menu-item index="6-1">选项1</el-menu-item>
                         <el-menu-item index="6-2">选项2</el-menu-item>
                         <!--</el-menu-item-group>-->
                     </el-submenu>
                     <el-menu-item index="2">
                         <i class="el-icon-menu"></i>
                         <span slot="title">导航二</span>
                     </el-menu-item>
                     <el-menu-item index="3" disabled>
                         <i class="el-icon-document"></i>
                         <span slot="title">导航三</span>
                     </el-menu-item>
                     <el-menu-item index="4">
                         <i class="el-icon-setting"></i>
                         <span slot="title">导航四</span>
                     </el-menu-item>
                 </el-menu>
             </section>
             <section class="container">
                 <router-view />
             </section>
        </section>
        <footer class="footer">
            上海延华智能科技（集团）股份有限公司
        </footer>
    </section>
</template>
<script>
export default {
    data () {
        return {
            user:"",
            title:"qw",
        }
    },
    components:{

    },
    mounted () {

    },
    methods:{
        handleOpen () {},
        handleClose () {},
        handleSelect (par) {
            console.log(par)
        }
    }
}
</script>
