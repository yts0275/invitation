<template>
  <div>
    <div class="container text-center">
      <Header />
      <Pictures />
      <Directions />
      <GetMoney />
      <GuestBook />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
}

@media (min-width: 1000px) {
  .container {
    max-width: 60%;
  }
}
</style>