<template>
    <div>
        <Header />

        <Main />    
        
        <div id="sub02"><h5>&nbsp;</h5></div>

        <div id="terms">
            <div>
                <br />
                <h2>Skyle 사전예약 개인정보처리방침</h2><br />
                <div class="terms-option">
                  <select onchange="location.href='/policy/prereg_privacy'+this.value">
                    <option id="latest" value="/">Latest</option>
                    <option id="20211211" value="/20211211">20211211</option>
                  </select>
                </div>
                <div class="terms-form">
                  <iframe src="/policy/prereg_privacy/files/20211211.html"><a href="/policy/prereg_privacy/files/20211211.html">이용약관 확인하기(새창)</a></iframe>
                </div>
            </div>
        </div>

        <Footer />
  </div>
</template>

<style scoped>
  #sub02 {
    margin-bottom: 5vh;
  }

  #terms > div {
    text-align: center;
  }
  
  .terms-form {
    border: 1px solid #cfcfcf;
    margin: 50px 50px 50px 50px;
  }

  .terms-form iframe {
    width: 100%;
    height: 100vh;
    border: 0px;
  }
</style>

<script>
export default {
  mounted() {
    if (!this.$route.params.id) {
        document.getElementById('latest').selected = true;
      } else {
        document.getElementById(this.$route.params.id).selected = true;
        document.getElementById('latest').selected = false;
      }
  }
}
</script>