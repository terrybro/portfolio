<template>
  <div class='carousel-view'>
    <transition-group
      class='carousel'
      tag="div">
      <div
        v-for="slide in slides"
        class='slide'
        :key="slide.id">
        <img v-bind:src="slide.url" />
        <h4> {{ slide.title }} </h4>
      </div>
    </transition-group>
    <div class='carousel-controls'>
      <button class='carousel-controls__button' @click="previous">prev</button>
      <button class='carousel-controls__button' @click="next">next</button>
    </div>
  </div>
</template>

<script>
export default {
data () {
  return {
    slides: [
      {
        title: 'I am Slide A',
        id: 1,
        url:'https://placeimg.com/640/480/tech'
      },
      {
        title: 'I am Slide B',
        id: 2,
        url:'https://placeimg.com/640/480/people'

      },
      {
        title: 'I am Slide C',
        id: 3,
        url:'https://placeimg.com/640/480/animals'

      },
      {
        title: 'I am Slide D',
        id: 4,
        url:'https://placeimg.com/640/480/nature'

      },
      {
        title: 'I am Slide E',
        id: 5,
        url:'https://placeimg.com/640/480/architecture'

      }
    ]
  }
},
methods: {
  next () {
    const first = this.slides.shift()
    this.slides = this.slides.concat(first)
  },
  previous () {
    const last = this.slides.pop()
    this.slides = [last].concat(this.slides)
  }
}
}
</script>

<style>
h4{position:absolute;top:700px;}
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  width: 640px;
  min-height: 480px;
}
.slide {
  flex: 0 0 640px;
  height: 480px;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}
</style>
