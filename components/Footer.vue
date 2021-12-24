<template>
  <footer>
    <div class="custom-container">
      <ul class="custom-flex-row">
        <li>
          <NuxtLink class="nav-link" to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/Products">Produkte</NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/Categories">Kategorien</NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/About">About</NuxtLink>
        </li>
      </ul>
      <ul class="custom-flex-row">
        <li>
          <a href="https://www.facebook.com/">
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              class="font-awesome"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="font-awesome"
            />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/">
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              class="font-awesome"
            />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/">
            <font-awesome-icon
              :icon="['fab', 'youtube']"
              class="font-awesome"
            />
          </a>
        </li>
      </ul>
      <p>&copy; 2022 MyProject</p>
    </div>
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
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  color: #fff;
  background-color: #004a99;
  padding: 50px 20px;
  margin-top: 100px;
  position: relative;

  .custom-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 64px;
  }

  .custom-flex-row {
    display: flex;
    flex-direction: row;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 32px;
    flex-wrap: wrap;
    justify-content: center;
  }

  li {
    padding: 0 15px;
    margin-bottom: 16px;
  }

  a {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  svg.font-awesome {
    cursor: pointer;
    font-size: 30px;
  }

  p {
    text-align: center;
  }

  .wave {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .wave svg {
    position: relative;
    display: block;
    width: calc(178% + 1.3px);
    height: 100px;
  }

  .wave .shape-fill {
    fill: #ffffff;
  }
}
</style>
