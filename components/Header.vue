<template>
    

  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <router-link to="/" class="logo">
              <img src="/assets/images/logo-v3.png" alt="">
            </router-link>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li class="scroll-to-section"><router-link to="/#top">Home</router-link></li>
              <li class="scroll-to-section"><router-link to="/#about">About</router-link></li>
              <!-- <li class="scroll-to-section"><router-link to="/#services">Services</router-link></li> --> <!-- 추후 오픈될 컴포넌트임 -->
              <!-- <li class="scroll-to-section"><router-link to="/#portfolio">Projects</router-link></li>
              <li class="scroll-to-section"><router-link to="/#blog">Blog</router-link></li> -->
              <li class="scroll-to-section"><router-link to="/#contact">Contact</router-link></li> 
              <!-- <li class="scroll-to-section"><div class="border-first-button"><router-link to="/#contact">Free Quote</router-link></div></li> -->
              <!-- <li class="scroll-to-section"><div class="border-first-button"><router-link to="/#download">Downloads</router-link></div></li> -->
              <li class="scroll-to-section"><div class="border-first-button"><router-link to="/#download">사전 예약</router-link></div></li> 
            </ul>        
            <a class='menu-trigger'>
                <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->
</template>
