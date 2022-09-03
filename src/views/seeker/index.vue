<script setup>
const done = ref("")
const expect = useLocalStorage("Seeker-Expect", "")

const result = computed(() => {
  const expectArr = expect.value.split("\n")

  return expectArr.filter((d) => {
    return done.value.indexOf(d) <= -1
  })
})
</script>

<template>
  <div class="font-serif bg-#011c1a min-h-screen py-4 px-6 xl:px-1/6">
    <!-- header -->
    <div class="text-(white 8) pt-8">Seeker</div>
    <div class="sm:grid sm:grid-cols-2 sm:gap-20px">
      <div>
        <div class="textarea-title">Expect</div>
        <textarea class="textarea" v-model="expect"></textarea>
      </div>
      <div>
        <div class="textarea-title">Done</div>
        <textarea class="textarea" v-model="done"></textarea>
      </div>
    </div>
    <div>
      <div class="textarea-title">Result</div>
      <div
        class="grid grid-cols-4 lg:grid-cols-6 2xl:grid-cols-10 gap-4 text-center"
        v-if="result.length > 0"
      >
        <span
          v-for="item in result"
          class="bg-white h-8 leading-8 text-#011c1a rounded-md"
        >
          {{ item }}
        </span>
      </div>
      <div class="text-white" v-else>All completed</div>
    </div>
  </div>
</template>

<style scoped>
.textarea {
  @apply outline-none h-200px 2xl:h-600px xl: w-full bg-(white opacity-20) text-white p-4 rounded-md;
}

.textarea-title {
  @apply text-white py-4;
}
</style>
