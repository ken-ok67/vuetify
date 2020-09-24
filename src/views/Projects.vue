<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Projects</h1>
    <v-container class="my-5">

      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content class="grey--text pt-4">
            <div class="font-weight-bold">{{ project.due }}</div>
            <div>{{ project.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

    </v-container>
  </div>
</template>

<script>
import projects from "@/data/projects";

export default {
  name: 'Projects',
  data() {
    return {
      projects,
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => project.person === 'The Net Ninja');
    }
  }
}
</script>
