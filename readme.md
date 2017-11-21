# vue-focus-outside

## 使用

```javascript
<template>
  <div id="app">
    <button v-focus-outside="focusOustsideHandler">点我啊</button>
    <iframe width="100%" height="300"></iframe>
  </div>
</template>
<script>
import Vue from 'vue'
import focusOutside from 'vue-focus-outside'

new Vue({
  el: '#app',
  directives: {
    focusOutside
  },
  methods: {
    focusOustsideHandler () {
      console.log('点击到按钮外面了。')
    }
  }
})
</script>
```
