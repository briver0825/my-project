<script setup lang="ts">
const router = useRouter()

const projects = [
  {
    name: "Seeker",
    description: "Use this widget to quickly find the absentee 😊",
    routerName: "seeker",
  },
]
</script>
<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
          >
            My Projects
          </h1>
          <div class="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div
            v-for="project in projects"
            @click="router.push({ name: project.routerName })"
            class="bg-gray-100 p-6 rounded-lg cursor-pointer transition duration-500 hover:(bg-indigo-600 text-white scale-90)"
          >
            <h2 class="text-lg font-medium title-font mb-4">
              {{ project.name }}
            </h2>
            <p class="leading-relaxed text-base">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style></style>
