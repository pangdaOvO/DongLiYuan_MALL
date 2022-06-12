<template>
  <div class="divshow">
    <div class="user_img">
      <img src="./images/yonghu.png" alt="" />
    </div>
    <div class="userSanjiao">
      <img src="./images/sj.png" alt="" />
      <div class="userzfx"></div>
    </div>
    <div class="userdialog">
      <div class="dialog_content">
        <span>{{ userText[i - 1] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.divshow{
    display: block;
}
.user_img {
  position: relative;
  left: 480px;
  top: 90px;
  img {
    width: 45px;
  }
}
.userSanjiao {
  position: relative;
  left: 450px;
  top: 55px;
  img {
    width: 25px;
    transform: rotate(90deg);
  }
}
.userzfx {
  width: 15px;
  height: 14px;
  background: rgb(253, 252, 252);
  position: relative;
  left: 252px;
  top: -22px;
}
.userdialog {
  width: auto;
  height: 50px;
  border: 1.5px solid rgb(2, 2, 2);
  float: left;
  position: relative;
  left: 473px;
  top: 0;
  border-radius: 15px;
  z-index: -10;
}
</style>