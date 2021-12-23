<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="800" overlay-opacity="0.7" persistent>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card style="border-radius: 20px">
          <v-card-title class="primary">
            <v-row align="center" justify="center">
              <v-col cols="2" align="center"> </v-col>

              <v-col cols="8" align="center">
                <h1 class="primary white--text font-weight-bold title">
                  Forgot Password
                </h1>
              </v-col>

              <v-col cols="2" align="end">
                <v-icon color="white" @click="cancelDialog()">mdi-close</v-icon>
              </v-col>
            </v-row>
          </v-card-title>

          <v-card-text class="mt-6">
            <v-row class="mx-1" align="center" justify="center">
              <v-col cols="6" align="left">
                <p
                  class="font-weight-bold primary--text"
                  style="margin-bottom: 5px"
                >
                  Staff ID <span class="red--text"> * </span>
                </p>
                <v-text-field
                  v-model="staff_id"
                  :maxlength="10"
                  :rules="staff_id_rules"
                  placeholder="- Staff ID -"
                  outlined
                  dense
                ></v-text-field>
              </v-col>

              <v-col cols="6" class="py-0" align="left">
                <p
                  class="font-weight-bold primary--text"
                  style="margin-bottom: 5px"
                >
                  Password <span class="red--text"> * </span>
                </p>
                <v-text-field
                  outlined
                  dense
                  filled
                  :maxlength="20"
                  v-model="password_user"
                  :rules="password_rules"
                  placeholder="- Password -"
                  required
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>

              <v-col cols="6" class="py-0" align="left">
                <p
                  class="font-weight-bold primary--text"
                  style="margin-bottom: 5px"
                >
                  Name <span class="red--text"> * </span>
                </p>
                <v-text-field
                  v-model="fisrtname"
                  placeholder="- Name -"
                  :maxlength="50"
                  :rules="empty"
                  outlined
                  dense
                ></v-text-field>
              </v-col>

              <v-col cols="6" class="py-0" align="left">
                <p
                  class="font-weight-bold primary--text"
                  style="margin-bottom: 5px"
                >
                  Surname <span class="red--text"> * </span>
                </p>
                <v-text-field
                  v-model="lastname"
                  :maxlength="50"
                  :rules="empty"
                  placeholder="- Surname -"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider class="my-1"></v-divider>

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
              class="text-capitalize pa-5"
              :loading="loading"
              tile
              color="primary white--text"
              style="border-radius: 12px"
              @click="resetPassword()"
            >
              <v-icon left> mdi-lock-reset</v-icon>
              Reset Password
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
  data() {
    return {
      dialog: false,
      staff_id: "",
      fisrtname: "",
      lastname: "",
      password_user: "",
      show1: false,
      loading: false,
      valid: true,
      //rule
      empty: rules.empty,
      staff_id_rules: rules.staff_id_rules,
      password_rules: rules.password_rules,
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
    open() {
      this.dialog = true;
    },
    cancelDialog() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
      this.dialog = false;
    },
    resetPassword() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        let body = {
          staff_id: this.staff_id,
          fisrtname: this.fisrtname,
          lastname: this.lastname,
          password: this.password_user,
        };
        this.axios
          .post(
            process.env.VUE_APP_API + "/user/forget_password",
            body
            // ,this.header_token
          )
          .then((res) => {
            // console.log(res.data);
            this.loading = false;
            if (res.data.massage == "reset password success") {
              this.cancelDialog();

              this.$emit(
                "openDialogSuccess",
                "Success !!",
                "reset password success"
              );

              setTimeout(() => {
                this.$emit("closeDialogSuccess");
              }, 2000);
            } else if (res.data.massage == "staff not found") {
              this.$emit(
                "openDialogError",
                "Unsuccessful !!",
                "Something went wrong!"
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