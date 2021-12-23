<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="400" overlay-opacity="0.8">
      <v-card style="border-radius: 25px">
        <v-card-title style="background-color: #e53935">
          <v-row align="center" justify="center">
            <v-col align="end" cols="12" class="py-0">
              <v-icon color="white" @click="close()"> mdi-close </v-icon>
            </v-col>
            <v-col align="center" cols="12" class="pt-0">
              <v-icon class="animate__bounceIn" size="100px" color="white">
                mdi-alert-circle-outline
              </v-icon>
            </v-col>
          </v-row>
        </v-card-title>

        <v-card-text>
          <v-row align="center" justify="center">
            <v-col align="center" cols="12" class="pt-10">
              <h1
                class="black--text animate__animated animate__pulse"
                style="font-size: 28px; font-weight: 600"
              >
                Are you sure?
              </h1>
            </v-col>
            <v-col align="center" cols="12">
              <h3
                class="grey--text animate__animated animate__pulse"
                style="font-size: 16px"
              >
                You won't be able to revert this!
              </h3>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-col align="left">
            <v-btn
              class="px-8 white--text"
              color="blue"
              @click="close()"
              depressed
              rounded
            >
              Cancel
            </v-btn>
          </v-col>

          <v-col align="right">
            <v-btn
              class="px-8 white--text"
              color="red"
              @click="deleteField()"
              depressed
              rounded
              :loading="loading"
            >
              Yes,delete it!
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
      item: "",
    };
  },
  methods: {
    open(item) {
      this.item = item;
      this.dialog = true;
    },
    close() {
      this.item = "";
      this.dialog = false;
    },
    deleteField() {
      this.loading = true;
      this.axios
        .delete(
          process.env.VUE_APP_API +
            "/master_data/division/" +
            this.item.division_id
          // ,this.header_token
        )
        .then((res) => {
          //   console.log(res.data);
          this.loading = false;

          if (res.data.massage == "delete success") {
            this.close();
            this.$emit(
              "openDialogSuccess",
              "Deleted!",
              "Your file has been deleted."
            );
            setTimeout(() => {
              this.$emit("closeDialogSuccess");
            }, 2000);
            this.$emit("getDataDivistion");
          } else {
            this.$emit(
              "openDialogError",
              "Request failed !!",
              "Something went wrong!"
            );
          }
        });
    },
  },
};
</script>