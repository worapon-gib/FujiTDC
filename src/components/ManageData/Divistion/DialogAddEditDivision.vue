<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="900" overlay-opacity="0.7" persistent>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card style="border-radius: 20px">
          <v-card-title class="primary">
            <v-row align="center" justify="center">
              <v-col cols="7" align="end">
                <h1
                  class="primary white--text font-weight-bold title"
                  v-if="mode == 'EDIT'"
                >
                  Edit Division
                </h1>

                <h1 class="primary white--text font-weight-bold title" v-else>
                  Add Division
                </h1>
              </v-col>

              <v-col cols="5" align="end">
                <v-icon color="white" @click="cancelDialog()">mdi-close</v-icon>
              </v-col>
            </v-row>
          </v-card-title>

          <v-card-text class="mt-6 pb-0">
            <v-row class="mx-1" align="center" justify="center">
              <v-col cols="12">
                <h2
                  class="primary--text"
                  style="
                    font-style: normal;
                    font-weight: 750;
                    font-size: 18px;
                    letter-spacing: 0.25px;
                  "
                >
                  NO. {{ item_list_division.length + 1 }}
                </h2>
              </v-col>

              <v-col cols="12"  align="left">
                <p
                  class="font-weight-bold primary--text"
                  style="margin-bottom: 5px"
                >
                  Division Name <span class="red--text"> * </span>
                </p>
                <v-text-field
                  v-model="division_name"
                  :maxlength="50"
                  :rules="rule_empty_name"
                  placeholder="- Division Name -"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="py-4 mx-6">
            <v-btn
              class="primary--text text-capitalize pa-5"
              tile
              color="grey lighten-2"
              style="border-radius: 12px"
              @click="cancelDialog()"
            >
              Cancel
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              v-if="mode == 'EDIT'"
              class="text-capitalize pa-5"
              :loading="loading"
              tile
              :disabled="division_name == ''"
              color="primary white--text"
              style="border-radius: 12px"
              @click="EditDivision()"
            >
              <v-icon left> mdi-content-save</v-icon>
              Save
            </v-btn>

            <v-btn
              v-else
              class="text-capitalize pa-5"
              :loading="loading"
              tile
              :disabled="division_name == ''"
              color="primary white--text"
              style="border-radius: 12px"
              @click="AddDivision()"
            >
              <v-icon left> mdi-plus-box-multiple-outline</v-icon>
              Add
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>

<script>
import { rules } from "@/validate/validate";

export default {
  props: {
    item_list_division: {
      type: Array,
      require: true,
      default: [],
    },
  },
  data() {
    return {
      dialog: false,
      division_name: "",
      loading: false,
      valid: true,
      mode: "ADD",
      item: "",
      //rule
      rule_empty_name: rules.empty,
    };
  },
  computed: {
    x_mobile() {
      if (this.$vuetify.breakpoint.width < 450) {
        return true;
      } else {
        return false;
      }
    },
    mobile() {
      if (
        this.$vuetify.breakpoint.width < 450 &&
        this.$vuetify.breakpoint.width > 330
      ) {
        return true;
      } else {
        return false;
      }
    },
    tablet() {
      if (
        this.$vuetify.breakpoint.width >= 450 &&
        this.$vuetify.breakpoint.width < 1030
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {},
  created() {},
  methods: {
    open(mode, item) {
      this.mode = mode;
      this.item = item;
      if (mode == "EDIT") {
        this.division_name = item.division_name;
      }
      this.dialog = true;
    },
    cancelDialog() {
      this.division_name = "";
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
      this.dialog = false;
    },
    AddDivision() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        var body = {
          division_name: this.division_name,
        };
        this.axios
          .post(
            process.env.VUE_APP_API + "/master_data/division",
            body
            // ,this.header_token
          )
          .then((res) => {
            // console.log(res.data);
            this.loading = false;
            if (res.data.massage == "insert success") {
              this.cancelDialog();

              this.$emit(
                "openDialogSuccess",
                "Success !!",
                "Add Division success"
              );

              setTimeout(() => {
                this.$emit("closeDialogSuccess");
              }, 2000);
              this.$emit("getDataDivistion");
            } else if (res.data.massage == "name already") {
              this.$emit(
                "openDialogError",
                "Unsuccessful !!",
                "Because Division name is duplicate in the system"
              );
            } else {
              this.$emit(
                "openDialogError",
                "Request failed !!",
                "Something went wrong!"
              );
            }
          });
      } else {
        this.$emit(
          "openDialogError",
          "Request failed !!",
          "Please fill out the information completely."
        );
      }
    },
    EditDivision() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        var body = {
          division_name: this.division_name,
        };
        this.axios
          .put(
            process.env.VUE_APP_API +
              "/master_data/division/" +
              this.item.division_id,
            body
            // ,this.header_token
          )
          .then((res) => {
            // console.log(res.data);
            this.loading = false;
            if (res.data.massage == "update success") {
              this.cancelDialog();

              this.$emit(
                "openDialogSuccess",
                "Success !!",
                "Add Division success"
              );

              setTimeout(() => {
                this.$emit("closeDialogSuccess");
              }, 2000);
              this.$emit("getDataDivistion");
            } else if (res.data.massage == "division_name already") {
              this.$emit(
                "openDialogError",
                "Unsuccessful !!",
                "Because Division name is duplicate in the system"
              );
            } else {
              this.$emit(
                "openDialogError",
                "Request failed !!",
                "Something went wrong!"
              );
            }
          });
      } else {
        this.$emit(
          "openDialogError",
          "Request failed !!",
          "Please fill out the information completely."
        );
      }
    },
  },
};
</script>