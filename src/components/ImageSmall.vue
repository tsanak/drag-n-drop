<template>
  <img :src="imageUrl" alt="Small image">
</template>

<script>
export default {
  name: 'SmallImage',
  props: ['imageUrl']
}
</script>

