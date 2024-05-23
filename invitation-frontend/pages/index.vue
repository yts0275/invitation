<template>
  <div>
    <div class="mx-auto text-center">
      <Main />
      <Header />
      <Pictures />
      <Directions />
      <GetMoney />
      <GuestBook />
    </div>
    <Footer />
    <div class="heart-animation-container left-heart">
      <div class="heart-animation"></div>
    </div>
    <div class="heart-animation-container right-heart">
      <div class="heart-animation delayed-animation"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes heart-float {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-50vh);
    opacity: 0;
  }
}

@keyframes float-with-delay {
  0% {
    transform: translateY(-20vh);
    opacity: 1;
  }
  100% {
    transform: translateY(-90vh);
    opacity: 0;
  }
}

.heart-animation-container {
  position: fixed;
  bottom: 0;
  pointer-events: none;
}

.left-heart {
  left: 10%;
  transform: translateX(-50%);
}

.right-heart {
  right: 5%;
  transform: translateX(-50%);
}

.heart-animation {
	width: 24px; 
	height: 24px;
	background: #FF5252;
	clip-path: path("M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z");
  animation: heart-float 5s infinite;
}

.delayed-animation {
  animation: float-with-delay 8s infinite;
}
</style>
