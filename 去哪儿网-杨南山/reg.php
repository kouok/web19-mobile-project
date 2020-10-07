<?php 
    if($_SERVER['REQUEST_METHOD']==="GET"){

        if(empty($GET['telphoneOne'])){
            echo "请输入手机号" ;
        }else{
            if(empty($_GET['tuxing'])){
                var_dump("请输入图形验证码");
            }else{
                if(empty($_GET['yanzhengma'])){
                    var_dump("请输入验证码");
                }else{
                    var_dump("登录成功!")
                }
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
            <a href="login.php" class="iconfont icon-zuojiantou"></a>
            <h1 style="margin-right:157px">注册</h1>
        </div>
    </div>
 
    <!-- S短信验证 -->
    <div style="display: block;" class="form mt10" >
        <form action="<?php echo $_SERVER['PHP_SELF']?>" method='get'>
            <div class="phone">
                <span class="telnum">手机号</span>
                <input class="tel" type="tel" name="telphoneOne" placeholder="请输入手机号">
            </div>
    
            <div class="phone yzm">
                <span class="text">图形码</span>
                <input class="password" type="tel" name="tuxing" placeholder="请输入图形码">
                <a class="yanzheng" href="javascript:;" style='color:#000' >2PxF</a>
            </div>
            <div class="phone yzm" style="border-bottom: none;">
                <span class="text">验证码</span>
                <input class="password" type="tel" name="yanzhengma" placeholder="请输入验证码">
                <a class="yanzheng" href="javascript:;">获取验证码</a>
            </div>
            <div class="logon" style="position: absolute;"><input type='submit' class="denglu" value="登录"></input></div>
        </form>
    </div>
    <!-- E短信验证 -->

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