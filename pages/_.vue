<template>
  <div>
    <!--<img :src="content.body[0].image" alt="" />-->
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <!-- eslint-disable -->
          <!--<div v-html="content.body[1].text.content" />-->
          <!-- eslint-enable -->
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <b-row>
        <b-col>
          <i>Your code goes here</i>
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <b-row>
        <b-col>
          <pre
            style="padding:10px;font-size:11px; line-height:15px; color:#000; background:#BCFECB;"
          >
          {{ content.Accordion }}
          </pre>
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
          '/?token=ZbXkLqrfeQqOOBsTnfR6xgtt&cv=2384234284832'
      )
      .then((result) => {
        return { content: result.data.story.content }
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
