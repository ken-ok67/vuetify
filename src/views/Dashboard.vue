<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row class="mb-3 ml-4">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text color="grey" @click.prevent="sortBy('title')" v-bind="attrs" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text color="grey" @click.prevent="sortBy('person')" v-bind="attrs" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>


      </v-layout>

      <v-card  flat class=' mb-4 px-3 grey lighten-4' v-for="project in projects" :key="project.title">
        <v-layout row wrap :class='`py-3 pl-6 project ${project.status}`'>
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="float-right">
              <v-chip small :class='`${project.status} caption white--text my-2 mr-5`'>{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import projects from "@/data/projects";

export default {
  name: 'Dashboard',
  data() {
    return {
      projects,
    }
  },
  methods: {
    sortBy(sortParam) {
      this.projects.sort((arg1, arg2) => arg1[sortParam] < arg2[sortParam] ? -1 : 1);
    },
  },

}
</script>

<style>
.project.complete {
  border-left: 4px solid lightskyblue;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.theme--light.v-chip:not(.v-chip--active).complete {
  background: lightskyblue;
}
.theme--light.v-chip:not(.v-chip--active).ongoing {
  background: orange;
}
.theme--light.v-chip:not(.v-chip--active).overdue {
  background: tomato;
}
</style>
