<template>
  <ContactBox
    :title="title"
    :address="address"
    :zipCode="zipCode"
    :telefon="telefon"
    :email="email"
  />
</template>

<script>
export default {
  data() {
    return {
      title: "Shabo's Webshop",
      address: 'Flachstraße 20,',
      zipCode: '65197 Wiesbaden',
      telefon: '0174 1234511',
      email: 'Webshop@email.de'
    }
  },
}
</script>

<style scoped></style>
