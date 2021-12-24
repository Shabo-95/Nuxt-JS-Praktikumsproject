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
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/">
            <font-awesome-icon :icon="['fab', 'youtube']" />
          </a>
        </li>
      </ul>
      <p>&copy; 2022 MyProject</p>
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

  .custom-container {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  svg {
    cursor: pointer;
    font-size: 30px;
  }

  p {
    text-align: center;
  }
}
</style>
