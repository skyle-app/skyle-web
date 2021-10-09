<template>
    <div id="download" class="contact-us section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="section-heading wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
            <h6>Downloads</h6>
            <h4 class="downcccc"><em>보호자 앱</em> / <em>사용자 앱</em> 을 구분하여 다운로드 하세요.</h4>
            <div class="line-dec"></div>
          </div>
        </div>
        <div class="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
          <form id="downloads" action="" method="post">
           <div id="contactt22" class="row">
              <h1>보호자용</h1>
              <div class="col-lg-7">
                <div class="fill-form">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="info-post">
                        <a onclick="event.preventDefault();javascript:alert('준비 중입니다.');" href=""><img class="badgee" src="/assets/images/badge/apple_badge.svg" alt=""></a>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="info-post">
                        <a onclick="event.preventDefault();javascript:alert('준비 중입니다.');" href=""><img class="badgee" src="/assets/images/badge/google_badge.svg" alt=""></a>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="info-post">
                        <a onclick="event.preventDefault();javascript:alert('준비 중입니다.');" href=""><img class="badgee" src="/assets/images/badge/one_badge.svg" alt=""></a>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="info-post">
                        <h3><a onclick="event.preventDefault();javascript:alert('준비 중입니다.');" class="badgee2" href="http://portal.skyle.kr">웹 접속하기 (PC)</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           </div>
          </form><br/><br/>
          <form id="contact2" action="" method="post">
           <div id="contactt2" class="row">
              <h1>사용자용</h1>
              <div class="col-lg-7">
                <div class="fill-form">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="info-post">
                        <a onclick="event.preventDefault();javascript:alert('준비 중입니다.');" href=""><img class="badgee" src="/assets/images/badge/apple_badge.svg" alt=""></a>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="info-post">
                        <a onclick="event.preventDefault();javascript:alert('준비 중입니다.');" href=""><img class="badgee" src="/assets/images/badge/google_badge.svg" alt=""></a>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="info-post">
                        <a onclick="event.preventDefault();javascript:alert('준비 중입니다.');" href=""><img class="badgee" src="/assets/images/badge/one_badge.svg" alt=""></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row#contactt22,.row#contactt2 {display: flex; justify-content: center; align-items: center;}
.downcccc {font-size: 28px;}
img.badgee {height: 10vh;}
a.badgee2 {display: block;}
.row h1 {margin-top:50px;}

@media (max-width: 992px) {
  img.badgee {height: auto !important;}
  a.badgee2 {display: none !important;}
}

.fill-form {
  padding: 80px 60px 80px 60px;
}
</style>