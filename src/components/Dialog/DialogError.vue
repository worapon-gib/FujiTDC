<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="400" overlay-opacity="0.8">
      <v-card style="border-radius: 25px">
        <v-card-title style="background-color: #e53935">
          <v-row align="center" justify="center">
            <v-col align="end" cols="12" class="pb-0">
              <v-icon color="white" @click="dialog = false"> mdi-close </v-icon>
            </v-col>
            <v-col align="center" cols="12" class="pt-0 pb-8">
              <v-icon class="animate__bounceIn" size="100px" color="white">
                mdi-close-circle-outline
              </v-icon>
            </v-col>
          </v-row>
        </v-card-title>

        <v-card-text>
          <v-row align="center" justify="center">
            <v-col align="center" cols="12" class="pt-16 pb-5">
              <h1
                class="black--text animate__animated animate__pulse"
                style="font-size: 28px; font-weight: 600"
              >
                {{ title }}
              </h1>
            </v-col>
            <v-col align="center" cols="12" class="pb-5">
              <h3
                class="grey--text animate__animated animate__pulse"
                style="font-size: 16px"
              >
                {{ text }}
              </h3>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider class="mt-1"></v-divider>
        <v-card-actions>
          <v-col align="center" class="pt-0">
            <v-btn
              class="px-8 white--text"
              color="#E53935"
              @click="close()"
              depressed
              rounded
            >
              OK
            </v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import "animate.css";

export default {
  data() {
    return {
      dialog: false,
      title: "",
      text: "",
    };
  },
  methods: {
    open(title, text) {
      if (title) {
        this.title = title;
        this.text = text;
      } else {
        this.title = "สำเร็จ";
        this.text = "สำเร็จ";
      }
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>