<template>
  <v-dialog  max-width="600" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn depressed class="mb-4 success" v-bind="attrs" v-on="on">
        <v-icon left>mdi-plus-thick</v-icon>
        <span>Add new project</span>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2 class="subtitle-2">Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="validForm">
          <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
          <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>

          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field :value="due" label="Due date" prepend-icon="mdi-calendar-range" v-bind="attrs" v-on="on">
              </v-text-field>
            </template>
            <v-date-picker v-model="due" :rules="inputRules"></v-date-picker>
          </v-menu>

          <v-btn depressed class="success" @click="submit()" :loading="loading">Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format';
import toastr from 'toastr';
import db from '@/fb';
import projects from "@/data/projects";

let databaseRef = db.ref('projects')

export default {
  name: "Popup",
  firebase: {
  projects: databaseRef,
  },
  data() {
    return {
      title: '',
      content: '',
      due: null,
      inputRules: [
          v => v.length > 3 || 'Minimum lenght is 4 characters'
      ],
      loading: false,
      dialog: false,
      projects,
    }
  },
  methods: {
    submit() {
      // if(this.$refs.validForm.validate()) {
      console.log(projects)
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: this.due,
          person: 'The Net Ninja',
          status: 'ongoing',
        };

        databaseRef.push(project).then(() => {
          this.loading = false;
          this.dialog = false;
          this.$emit('projectAdded');
        });
        toastr.success('added');
        
      let query = db.ref("projects").orderByKey();
      query.once("value")
          .then(function(snapshot) {
            console.log();
            snapshot.forEach(function(childSnapshot) {
              this.projects.push({
                ...childSnapshot.val(),
                title: childSnapshot.val().title,
                person: childSnapshot.val().person,
                due: childSnapshot.val().due,
                status: childSnapshot.val().status,
                content: childSnapshot.val().content,
              })
              // console.log(childSnapshot.val().person)
              // console.log(this.projects)
            });
          });




        // databaseRef.on('value', snapshot => console.log(snapshot.child()));
      // }
      // var query = db.ref("projects").orderByKey();
      // query.once("value")
      //     .then(function(snapshot) {
      //       snapshot.forEach(function(childSnapshot) {
      //         // key will be "ada" the first time and "alan" the second time
      //         // var key = childSnapshot.key;
      //         // childData will be the actual contents of the child
      //         var childData = childSnapshot.val().content;
      //         // console.log(key);
      //         console.log(childData)
      //       });
      //     });
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, 'Do MMM YYYY') : '';
    }
  }
}
</script>
