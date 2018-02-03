<template>
  <img :src="imageUrl" alt="Big image">
</template>

<script>
export default {
  name: 'BigImage',
  props: ['imageUrl']
}
</script>

