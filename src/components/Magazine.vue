<template>
  <div class='carousel-view'>
    <transition-group
      class='carousel'
      tag="div">
      <div
        v-for="slide in slides.mag1"
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
    slides:{
        mag1: [
          {
            title: 'I am issue1',
            id: 1,
            url:'https://placeimg.com/640/480/people'
          },
          {
            title: 'I am issue2',
            id: 2,
            url:'https://placeimg.com/640/480/tech'
          },
          {
            title: 'I am issue3',
            id: 3,
            url:'https://placeimg.com/640/480/tech'
          },

        ],
        mag2: [
          {
            title: 'I am issue1',
            id: 1,
            url:'https://placeimg.com/640/480/tech'
          },
          {
            title: 'I am issue2',
            id: 2,
            url:'https://placeimg.com/640/480/tech'
          },
          {
            title: 'I am issue3',
            id: 3,
            url:'https://placeimg.com/640/480/tech'
          },

        ]
    }
  }
},
methods: {
  next () {
    const first = this.slides.mag1.shift()
    this.slides.mag1 = this.slides.mag1.concat(first)
  },
  previous () {
    const last = this.slides.mag1.pop()
    this.slides.mag1 = [last].concat(this.slides.mag1)
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
