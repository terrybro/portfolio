<template>
  <div class='carousel-view'>
    <transition-group
      class='carousel'
      tag="div">
      <div
        v-for="issue in getCurrIssue()"
        class='slide'
        :key="issue.id">
        <img v-bind:src="issue.url" />
        <h4> {{ issue.title }}</h4>
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

    issues:{
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
            url:'https://placeimg.com/640/480/architecture'
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
            url:'https://placeimg.com/640/480/people'
          },
          {
            title: 'I am issue3',
            id: 3,
            url:'https://placeimg.com/640/480/tech'
          },

        ],
        mag3: [
          {
            title: 'I am issue1',
            id: 1,
            url:'http://lorempixel.com/output/people-q-c-644-480-8.jpg'
          },
          {
            title: 'I am issue2',
            id: 2,
            url:'http://lorempixel.com/output/people-q-c-644-480-9.jpg'
          },
          {
            title: 'I am issue3',
            id: 3,
            url:'http://lorempixel.com/output/people-q-c-644-480-7.jpg'
          },

        ]
    }
  }
},
methods: {
  getCurrIssue(){
    let currMag = this.$route.params.mag;
    return this.issues[currMag];
  },

  next () {
  let currMag = this.$route.params.mag;
    const first = this.issues[currMag].shift()
    this.issues[currMag] = this.issues[currMag].concat(first)
  },
  previous () {
  let currMag = this.$route.params.mag;
    const last = this.issues[currMag].pop()
    this.issues[currMag] = [last].concat(this.issues[currMag])
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
