<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <div class="wave">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <nav>
      <div class="branding">
        <NuxtLink to="/">
          <img src="~assets/images/logo/logo.png" alt="LOGO" />
        </NuxtLink>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><NuxtLink class="link" to="/Products">Produkte</NuxtLink></li>
        <li><NuxtLink class="link" to="/Categories">Kategorien</NuxtLink></li>
        <li><NuxtLink class="link" to="/Users">Users</NuxtLink></li>
        <li><NuxtLink class="link" to="/About">About</NuxtLink></li>
      </ul>
      <div class="icon">
        <font-awesome-icon
          @click="toggleMobileNav"
          v-show="mobile"
          :icon="['fas', 'bars']"
          class="font-awesome"
          :class="{ 'icon-active': mobileNav }"
        />
      </div>
      <!-- This is The Sidebar (Mobile-Nav) -->
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="side-nav">
          <li>
            <font-awesome-icon
              @click="toggleMobileNav"
              v-show="mobile"
              :icon="['fas', 'angle-double-left']"
              class="font-awesome side-nav--close"
            />
          </li>
          <li>
            <NuxtLink to="/">
              <img
                src="~assets/images/logo/logo.png"
                alt="LOGO"
                height="64"
                width="64"
              />
            </NuxtLink>
          </li>
          <li><NuxtLink class="link" to="/Products">Produkte</NuxtLink></li>
          <li>
            <NuxtLink class="link" to="/Categories">Kategorien</NuxtLink>
          </li>
          <li><NuxtLink class="link" to="/Users">Users</NuxtLink></li>
          <li><NuxtLink class="link" to="/About">About</NuxtLink></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar2',
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },

    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 750) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
      return
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  background-color: #004a99;
  z-index: 99;
  width: 100%;
  position: relative;
  top: 0;
  transition: 0.5s ease all;
  color: #fff;
  padding: 20px 20px 50px 20px;

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    ul,
    .link {
      font-weight: 500;
      color: #fff;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: #00afea;
        border-color: #00afea;
      }
    }

    .branding {
      display: flex;
      align-items: center;

      img {
        width: 50px;
        transition: 0.5s ease all;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      .font-awesome {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }

    .icon-active {
      transform: rotate(90deg);
    }

    .side-nav {
      display: flex;
      align-items: center;
      justify-content: center;
      row-gap: 1em;
      flex-direction: column;
      position: fixed;
      max-width: 200px;
      // width: 100%;
      height: 100%;
      background-color: #004a99;
      box-shadow: 0 0 10px #000;
      padding: 0;

      // position: fixed; /* or absolute */
      top: 0;
      left: 0;
      // transform: translate(-20%, 20%);

      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;

      li {
        margin-left: 0;
        .link {
          color: #fff;
          transition: 0.5s ease all;
        }
        .link:hover {
          color: #00afea;
          border-color: #00afea;
        }
      }
      &--close {
        cursor: pointer;
        font-size: 24px;
        position: absolute;
        top: 5%;
        left: 40%;
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-200px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
  .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .wave svg {
    position: relative;
    display: block;
    width: calc(130% + 1.3px);
    height: 75px;
  }

  .wave .shape-fill {
    fill: #ffffff;
  }
}
</style>
