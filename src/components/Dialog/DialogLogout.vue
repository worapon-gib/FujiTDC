<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="400" overlay-opacity="0.8" persistent>
      <v-card style="border-radius: 25px">
        <v-card-title>
          <v-row align="center" justify="center">
            <v-col align="end" cols="12" class="pb-0">
              <v-icon color="white" @click="dialog = false"> mdi-close </v-icon>
            </v-col>
            <v-col align="center" cols="12" class="">
              <v-icon class="animate__bounceIn" size="50px" color="primary">
                mdi-logout
              </v-icon>
            </v-col>
          </v-row>
        </v-card-title>

        <v-card-text>
          <v-row align="center" justify="center">
            <v-col align="center" cols="12" class="pt-6">
              <h1
                class="black--text animate__animated animate__pulse"
                style="font-size: 18px; font-weight: 600"
              >
                Log out
              </h1>
            </v-col>

            <v-col align="center" cols="12" class="">
              <h3
                class="grey--text animate__animated animate__pulse"
                style="font-size: 16px"
              >
                Are you sure you want to log out ?
              </h3>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider class="my-1"></v-divider>
        <v-card-actions>
          <v-col align="center">
            <v-btn
              class="px-10 white--text"
              color="#0B3751"
              @click="close()"
              depressed
              rounded
            >
              close
            </v-btn>
          </v-col>
          <v-col align="right">
            <v-btn
              class="px-8 white--text"
              color="red"
              @click="confirm()"
              depressed
              rounded
              :loading="loading"
            >
              confirm
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
      loading: false,
      user_info: "",
    };
  },
  created() {
    this.user_info = this.$session.get("user_info");
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    confirm() {
      this.loading = true;
      var body = {};
      this.axios
        .post(
          process.env.VUE_APP_API + "/user/logout/" + this.user_info.user_id,
          body
        )
        .then((response) => {
          this.loading = false;
          this.$session.clear();
          this.$session.destroy();
          this.$router.push("/");
        })
        .catch((err) => {});
    },
  },
};
</script>