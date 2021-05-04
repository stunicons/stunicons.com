<template>
  <header class="navbar">
    <nav class="navbar--wrapper">
      <div class="navbar--logo">
        <div class="logo">
          <h6 id="logo">StunIcons</h6>
        </div>
        <!--        version component-->
        <version />
      </div>
      <div class="navbar--action-btn">
        <div class="action-btn--request-icon">
          <button>Request Icon</button>
        </div>
        <div class="action-btn--go-to-github">
          <a target="_blank" href="https://github.com/Stunnity/stunicons">
            <span class="github-icon"><i class="si-github"></i></span>
            <span class="github-name">Github</span>
          </a>
        </div>
<!--        dark mode-->
<!--        <div class="action-btn&#45;&#45;dark-mode flex justify-center items-center ml-6">-->
<!--          <button @click="changeColorMode" class="w-min-content h-min-content p-3">-->
<!--            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path d="M22.2384 12.7056C20.8746 13.4724 19.269 13.6882 17.7511 13.3087C16.2333 12.9292 14.9181 11.9832 14.0756 10.6648C13.2331 9.34642 12.9271 7.75557 13.2204 6.2187C13.5137 4.68183 14.384 3.31546 15.6528 2.39995L16.8 1.57435L15.456 1.14235C14.3389 0.785574 13.1728 0.605799 12 0.609555C9.80867 0.609591 7.66384 1.24174 5.82276 2.4302C3.98167 3.61865 2.52248 5.31295 1.62019 7.30992C0.717893 9.30689 0.410794 11.5217 0.735718 13.6889C1.06064 15.856 2.0038 17.8834 3.45207 19.5279C4.90035 21.1725 6.79227 22.3643 8.90094 22.9606C11.0096 23.5569 13.2455 23.5322 15.3405 22.8896C17.4355 22.2469 19.3007 21.0136 20.7123 19.3375C22.124 17.6614 23.0222 15.6137 23.2992 13.44L23.472 12.0432L22.2384 12.7056ZM12 21.9504C9.36101 21.9504 6.83009 20.902 4.96402 19.036C3.09796 17.1699 2.04962 14.639 2.04962 12C2.04962 9.36094 3.09796 6.83002 4.96402 4.96396C6.83009 3.0979 9.36101 2.04955 12 2.04955C12.5808 2.0506 13.1604 2.10038 13.7328 2.19835C12.7299 3.27601 12.0634 4.62303 11.8152 6.07409C11.567 7.52516 11.7479 9.01712 12.3356 10.3669C12.9233 11.7166 13.8923 12.8654 15.1236 13.6722C16.355 14.479 17.7951 14.9088 19.2672 14.9088C20.0675 14.9075 20.8627 14.7812 21.624 14.5344C21.0627 16.659 19.8145 18.5384 18.0738 19.8798C16.3331 21.2211 14.1976 21.9491 12 21.9504Z" fill="#FE4E00"/>-->
<!--            </svg>-->
<!--          </button>-->
<!--        </div>-->
      </div>
    </nav>
  </header>
</template>

<script >
import Version from '~/components/Version.vue'

export default {
  name:"Navbar",
  components:{Version},
  data(){
    return{
      color:'system'
    }
  },
  methods:{
    changeColorMode(e){
      console.log('before',this.$colorMode.preference, this.$colorMode.preference === "dark", this.$colorMode.preference === "light")
      if(this.$colorMode.preference === "dark"){
        this.$colorMode.preference = "light"
        return
      }

      if(this.$colorMode.preference === "light"){
        this.$colorMode.preference = "dark"
      }

    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar{
    &--wrapper{
      @apply flex justify-between py-8;
    }
    &--logo{
      @apply flex  items-center;
      .logo{
        height: fit-content;
        h6{
          font-size:1.25rem;
          font-weight: 700;
          text-transform: capitalize;
          color: $bg;
        }
      }

    }

    &--action-btn{
      @apply flex;

      .action-btn{
        &--request-icon{
          @apply mx-5;
          button{
            @apply py-3 px-8 rounded-md;
            color:$clr-primary;
            background-color: $bg;
            font-weight: 600;
          }
        }

        &--go-to-github{

          a{
            @apply py-3 px-6 rounded-md flex items-center;

            span{
              @apply mx-1 flex items-center;
              color:$bg;
              font-weight: 600;

              i{
                font-size: 1.2rem;
                font-weight: 600;
              }
            }
          }
        }
        &--dark-mode{
          button{
            background-color: $bg;
            border-radius: 50%;
          }
        }
      }
    }
  }
</style>
