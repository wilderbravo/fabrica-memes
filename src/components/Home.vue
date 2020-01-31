<template>
  <v-container>
    <v-layout xs12 pl-2>
      <v-flex>
        <input type="file" ref="fileInput" id="file" @change="processFile($event)">
      </v-flex>  
    </v-layout>
    <v-layout xs12 pb-3>
      <v-flex>
        <v-btn color="primary" @click="upLoadFile"> Enviar 

        </v-btn>
      </v-flex>  
    </v-layout>

  </v-container>
</template>

<script>

//import { firestore } from '@/main'
import { storage } from '@/main'

export default {
  name: 'HelloWorld',

  data: () => ({
    file: ''  
  }),
  methods: {
    processFile: function(event) {
      this.file = event.target.files[0]
    },
    upLoadFile: function() {
      let name = (+new Date()) + '-' + this.file.name
      let metadata = { contentType: this.file.type }
      storage.child(name).put(this.file, metadata)
        .then(snapshot => snapshot.ref.getDownloadURL()) 
    }
  }
};
</script>
