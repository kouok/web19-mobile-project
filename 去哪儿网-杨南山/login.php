<?php 
    if($_SERVER['REQUEST_METHOD']==="POST"){

        if(empty($_POST['telphoneTwo'])){
            //用户名为空
            var_dump("请输入手机号或者用户名");
        }else{
            if(empty($_POST['pwd'])){
                var_dump("请输入密码");
            }else{
                var_dump("登录成功");
                $username = $_POST['telphoneTwo'];
                $pwd = $_POST['pwd'];
                file_put_contents('data.txt',$username . '|' . $pwd);
            }
        }
    };
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>登录注册</title>
    <link rel="stylesheet" href="css/reset.css"/>
    <link rel="stylesheet" href="iconfont/iconfont.css">
    <link rel="stylesheet" href="css/login.css">
   
    <style>
        *{
        box-sizing: border-box;
        }
        body{
           background:  #f3f9fc;
            font-size: 0.16rem;
            color: #19a9ba;
        }
    </style>
</head>
<body>
   
    <script src="js/logon.js"></script>
    <!-- 登录注册头部 -->
    <div class="header">
        <div class="top">
            <a href="myaccount.html" class="iconfont icon-zuojiantou"></a>
            <h1>登录</h1>
            <a class="zhuce" href="reg.php">注册</a>
        </div>
    </div>
    <div  id="toggle" class="toggle">

        <a class="duanxing current" href="javascript:;" data-index="0">短信验证码登录</a>
        <a class="zhanghao" href="javascript:;"  data-index="1">账户登录</a>

    </div>
    <!-- S短信验证 -->
    <div style="display: block;" class="form mt10" >
        <form action="<?php echo $_SERVER['PHP_SELF']?>" method='post'>
            <div class="phone">
                <span class="telnum" pattern="^1[3|4|5|7|8][0-9]{9}$">手机号</span>
                <input class="tel" type="tel" name="telphoneOne" placeholder="请输入手机号" required>
            </div>
    
            <div class="phone yzm" style="border-bottom: none;">
                <span class="text">验证码</span>
                <input class="password" type="tel" name="yanzhengma" placeholder="请输入验证码" required>
                <a class="yanzheng" href="javascript:;">获取验证码</a>
            </div>
            <div class="logon" style="position: absolute;"><input type='submit' class="denglu" value="登录"></input></div>
        </form>
    </div>
    <!-- E短信验证 -->
    <!-- S账号登录 -->
    <div style="display: none;background-color: #fff;" class="form mt10">
        <form action="<?php echo $_SERVER['PHP_SELF']?>" method='post'>
            <div class="phone">
                <span class="telnum">账号</span>
                <input class="tel" type="tel" name="telphoneTwo" placeholder="手机号/邮箱/用户名">
            </div>
            <div class="phone" style="border-bottom: none;">
                <span class="telnum" pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/">密码</span>
                <input class="tel" type="tel" name="pwd" placeholder="请输入密码">
            </div>
            <div class="logon" style="position: absolute;"><input type='submit' class="denglu" value="登录"></input></div>
        </form>
    </div>
    <!-- E账号登录 -->

   
    <!-- <div class="logon"><input type='submit' class="denglu" value="登录"></input></div> -->
    <p style="display: none;padding-top: 72px;" class="findPwd">找回密码</p>
    <div class="xieyi">
        登录即同意去哪儿 <a href="#">用户服务协议</a> 和 <a href="#">隐私政策</a>
    </div>
    <div class="footer">
        <div class="about">
            <a href="javascript:;">电脑版</a>
            <a href="javascript:;">关于我们</a>
        </div>
        <div class="beian tc font12">
            <span>Qunar 京ICP备05021087</span>
        </div>
    </div>
</body>
<script>
      var w=document.documentElement.getBoundingClientRect().width;
      //7.5是根据设计图的大小除以100，需要按照你的实际设计图换算
      var bili=w/3.75;
      document.documentElement.style.fontSize=bili+"px";
</script>
</html>