<template>
  <v-container fluid class="fill-height bg_login">
    <v-row align="center" justify="center">
      <v-col align="center">
        <v-container style="align-items: center">
          <v-row
            no-gutters
            justify="center"
            :align="$vuetify.breakpoint.xsOnly ? 'center' : 'center'"
          >
            <v-col
              cols="12"
              xs="12"
              sm="8"
              md="7"
              lg="6"
              :class="$vuetify.breakpoint.xsOnly ? 'pa-0' : 'py-1'"
            >
              <v-card
                :class="$vuetify.breakpoint.xsOnly ? 'elevation-0' : ''"
                :tile="$vuetify.breakpoint.xsOnly"
                :rounded="!$vuetify.breakpoint.xsOnly"
                :color="$vuetify.breakpoint.xsOnly ? 'white' : 'white'"
                :style="
                  !$vuetify.breakpoint.xsOnly
                    ? 'border-radius: 10px !important'
                    : ''
                "
              >
                <v-card-text
                  ><v-row align="center" justify="center"
                    ><v-col cols="8" class="pa-12"
                      ><v-img
                        @click="$router.push('/')"
                        style="cursor: pointer"
                        max-height="120px"
                        v-bind:src="
                          $vuetify.breakpoint.xsOnly
                            ? require('@/assets/img/icon_fujifilm.png')
                            : require('@/assets/img/icon_fujifilm.png')
                        "
                      ></v-img
                    ></v-col>
                  </v-row>
                  <v-container>
                    <v-form ref="loginform" @submit.prevent="logIn()">
                      <v-row
                        :class="x_tablet ? 'py-0 px-8' : 'py-0 px-10'"
                        justify="center"
                      >
                        <v-col cols="12" align="center">
                          <h2 class="primary--text" style="font-size: 26px">
                            SIGN IN
                          </h2>
                        </v-col>
                        <v-col cols="12" class="pb-0">
                          <v-text-field
                            class="shadow_textfield"
                            v-model="username"
                            :rules="rule_username"
                            filled
                            outlined
                            style="border-radius: 10px"
                            placeholder="Username"
                            prepend-inner-icon="mdi-account-circle"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="py-0">
                          <v-text-field
                            filled
                            outlined
                            style="border-radius: 10px"
                            v-model="password"
                            :rules="rule_password"
                            placeholder="Password"
                            prepend-inner-icon="mdi-key"
                            required
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            @click:append="show1 = !show1"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" class="py-0">
                          <v-row align="center" justify="center">
                            <v-col cols="6" class="py-0">
                              <v-checkbox v-model="checkbox" color="primary">
                                <template v-slot:label>
                                  <h3 class="primary--text">Remember me</h3>
                                </template>
                              </v-checkbox>
                            </v-col>
                            <v-col
                              cols="6"
                              align="end"
                              class="pointer"
                              @click="openDialogForgotPassword()"
                            >
                              <h3 class="primary--text">Forgot password ?</h3>
                            </v-col>
                          </v-row>
                        </v-col>

                        <v-col cols="12">
                          <v-btn
                            :loading="btn_login"
                            type="submit"
                            block
                            dark
                            height="55"
                            color="primary"
                            style="border-radius: 10px"
                            large
                            ><h3 class="text-capitalize">Log in</h3></v-btn
                          >
                        </v-col>
                      </v-row></v-form
                    ></v-container
                  ></v-card-text
                ></v-card
              >
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <DialogLoading ref="DialogLoading" />
    <DialogSuccess ref="DialogSuccess" />
    <DialogError ref="DialogError" />
    <DialogForgotPassword
      ref="DialogForgotPassword"
      @openDialogSuccess="openDialogSuccess"
      @openDialogError="openDialogError"
      @closeDialogSuccess="closeDialogSuccess"
      @closeDialogError="closeDialogError"
    />
  </v-container>
</template>
<script>
//dialog
import DialogLoading from "@/components/Dialog/DialogLoading.vue";
import DialogSuccess from "@/components/Dialog/DialogSuccess.vue";
import DialogError from "@/components/Dialog/DialogError.vue";

import DialogForgotPassword from "@/components/Dialog/DialogForgotPassword.vue";
export default {
  components: {
    DialogLoading,
    DialogSuccess,
    DialogError,
    DialogForgotPassword,
  },
  data() {
    return {
      btn_login: false,
      checkbox: false,
      token: null,
      token_expired: null,
      show1: false,
      username: "",
      password: "",
      rule_password: [(v) => !!v || "request username"],
      rule_username: [(v) => !!v || "request password"],
    };
  },
  computed: {
    mobile() {
      if (this.$vuetify.breakpoint.width < 375) {
        return true;
      } else {
        return false;
      }
    },
    x_tablet() {
      if (
        this.$vuetify.breakpoint.width >= 600 ||
        this.$vuetify.breakpoint.width < 650
      ) {
        return true;
      } else {
        return false;
      }
    },
    tablet() {
      if (
        this.$vuetify.breakpoint.width >= 375 ||
        this.$vuetify.breakpoint.width < 768
      ) {
        return true;
      } else {
        return false;
      }
    },
    desktop() {
      if (
        this.$vuetify.breakpoint.width >= 768 ||
        this.$vuetify.breakpoint.width <= 1920
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    logIn() {
      if (this.$refs.loginform.validate()) {
        this.$refs.DialogLoading.open();

        let body = {
          staff_id: this.username,
          password: this.password,
        };

        this.axios
          .post(process.env.VUE_APP_API + "/user/login", body)
          .then((response) => {
            this.$refs.DialogLoading.close();

            if (response.data.massage == "login success") {
              this.$store.state.tap_appbar_value = "dashboard";
              this.$session.set("user_info", response.data.user_info);
              this.$router.push("/dashboard");
            } else if (
              response.data.massage == "username or password invalid"
            ) {
              this.$refs.DialogError.open(
                "Request failed !!",
                "username or password invalid."
              );
            }
          })
          .catch((err) => {});
      } else {
        this.$refs.DialogError.open(
          "Request failed !!",
          "Please fill out the information completely."
        );
      }
    },
    openDialogForgotPassword() {
      this.$refs.DialogForgotPassword.open();
    },
    //dialog
    openDialogSuccess(title, text) {
      this.$refs.DialogSuccess.open(title, text);
    },
    closeDialogSuccess() {
      this.$refs.DialogSuccess.close();
    },
    openDialogError(title, text) {
      this.$refs.DialogError.open(title, text);
    },
    closeDialogError() {
      this.$refs.DialogError.close();
    },
  },
};
</script>
<style>
</style>
