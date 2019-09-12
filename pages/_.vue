<template>
  <div>
    <img :src="content[0].image" alt="" />
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <!-- eslint-disable -->
          <div v-html="content[1].text.content" />
          <!-- eslint-enable -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData(context) {
    let path = context.route.path

    if (path === '/') {
      path = '/home'
    }

    return axios
      .get(
        'https://api.storyblok.com/v1/cdn/stories' +
          path +
          '/?token=ZbXkLqrfeQqOOBsTnfR6xgtt'
      )
      .then((result) => {
        return { content: result.data.story.content.body }
      })
  }
}
</script>

<style>
img {
  width: 100%;
  margin-bottom: 100px;
}
</style>
