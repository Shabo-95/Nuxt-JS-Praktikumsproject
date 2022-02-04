<template>
  <HeaderText :title="title" :body="body" />
</template>

<script>
export default {
  data() {
    return {
      title: 'This is an About Page',
      body: 'Developer: Shabo Saliba<br>Ich bin ein Praktikant im Bereich Front-End Development bei der Firma Scholz & Volkmer',
    }
  },
}
</script>

<style lang="scss" scoped></style>
