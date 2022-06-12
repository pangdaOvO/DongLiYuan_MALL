<template>
  <div class="connect">
    <div
      style="
        width: 900px;
        height: 600px;
        margin: 40px auto;
        border: 1px solid #2b2;
      "
    >
      <div id="chat" class="chat">
        <div :class="{ divshow: isdivshow, active: isActive }">
          <div class="head_img">
            <img src="./images/service_icon.png" alt="" />
          </div>
          <div class="sanjiao">
            <img src="./images/sj.png" alt="" />
            <div class="zfx"></div>
          </div>
          <div class="dialog">
            <div class="dialog_content">
              <span>欢迎来到东篱园！我是机器人小篱！</span>
              <span>有任何的问题可以在下方提问哦</span>
              <span>回复“人工客服”获取在线帮助</span>
            </div>
          </div>
          <div class="time">——————{{ nowtime }}———————</div>
        </div>
        <div :class="{ divshow: userdivshow, active: userActive }">
          <div class="user_img">
            <img src="./images/yonghu.png" alt="" />
          </div>
          <div class="userSanjiao">
            <img src="./images/sj.png" alt="" />
            <div class="userzfx"></div>
          </div>
          <div class="userdialog">
            <div class="dialog_content">
              <span>{{ userText[i-1]}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="chat_input">
        <input type="text" placeholder="在此输入..." v-model="text" />
      </div>
      <div class="send" @click="sendText">发送</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Customer",
  data() {
    return {
      isActive: false,
      isdivshow: true,
      userActive: false,
      userdivshow: true,
      nowtime: "",
      text: "",
      userText:[],
      i:0
    };
  },
  methods: {
    showdiv() {
      setTimeout(() => {
        (this.isActive = true), (this.isdivshow = false);
      }, 1000);
    },
    getNowTime() {
      var time = new Date();
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      var h = time.getHours();
      h = h < 10 ? "0" + h : h;
      var data = time.getDate();
      data = data < 10 ? "0" + data : data;
      var m = time.getMinutes();
      m = m < 10 ? "0" + m : m;
      var s = time.getSeconds();
      s = s < 10 ? "0" + s : s;
      this.nowtime =
        year + "/" + month + "/" + data + " " + h + ":" + m + ":" + s;
    },
    sendText() {
      (this.userActive = true), (this.userdivshow = false);
      this.userText[this.i] = this.text;
      this.i+=1;
      this.text = '  ',
      console.log(this.userText);
    },
  },
  mounted() {
    this.showdiv();
    this.getNowTime();
  },
};
</script>

<style scopde lang='less'>
.connect {
  width: 1000px;
  height: auto;
  margin: auto;
}
.chat {
  width: 800px;
  height: 400px;
  padding-bottom: 40px;
  margin: 30px 50px 20px 50px;
  border: 1px solid #2b2;
}
.divshow {
  display: none;
}
.active {
  display: block;
}
.head_img {
  display: inline-block;
  width: 45px;
  height: 45px;
  position: relative;
  left: 20px;
  top: 40px;
}
.sanjiao {
  position: relative;
  left: 70px;
  top: 4px;
  img {
    width: 25px;
    transform: rotate(-90deg);
  }
  .zfx {
    width: 15px;
    height: 14px;
    background: rgb(255, 254, 254);
    position: relative;
    left: 16px;
    top: -22px;
  }
}
.dialog {
  width: 255px;
  height: 100px;
  border: 1.5px solid rgb(2, 2, 2);
  float: left;
  position: relative;
  left: 87px;
  top: -60px;
  border-radius: 15px;
  z-index: -10;
}
.dialog_content {
  width: 240px;
  height: 85px;
  position: relative;
  left: 10px;
  top: 8px;
}
.dialog_content span {
  font-size: 14px;
  color: #666;
  display: block;
  margin-top: 3px;
  margin-bottom: 5px;
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
  top:0;
  border-radius: 15px;
  z-index: -10;
}
.time {
  position: relative;
  top: 60px;
}
.chat_input {
  width: 650px;
  height: 90px;
  border: 1px solid #2b2;
  border-radius: 10px;
  display: inline-block;
  margin-left: 50px;
}
.chat_input input {
  width: 90%;
  height: 90%;
  outline: none;
  border: none;
  margin: 5px 10px;
}
.send {
  width: 75px;
  height: 30px;
  border: 1px solid #666;
  border-radius: 10px;
  display: inline-block;
  position: relative;
  top: 2px;
  left: 20px;
  cursor: pointer;
  text-align: center;
  line-height: 30px;
  color: #666;
}
.send:hover {
  background-color: #ddd;
}
</style>