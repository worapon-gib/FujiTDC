<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="900" overlay-opacity="0.7" persistent>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card style="border-radius: 20px">
          <v-card-title class="primary">
            <v-row align="center" justify="center">
              <v-col cols="2" align="center"> </v-col>

              <v-col cols="8" align="center">
                <h1
                  class="primary white--text font-weight-bold title"
                  v-if="mode == 'EDIT'"
                >
                  Edit User
                </h1>

                <h1 class="primary white--text font-weight-bold title" v-else>
                  Add User
                </h1>
              </v-col>

              <v-col cols="2" align="end">
                <v-icon color="white" @click="cancelDialog()">mdi-close</v-icon>
              </v-col>
            </v-row>
          </v-card-title>

          <v-card-text class="mt-6">
            <v-row class="mx-1" align="center" justify="center">
              <v-col cols="6" class="py-0" align="left">
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

              <v-col cols="6" class="py-0" align="left" v-if="mode == 'ADD'">
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
                  v-model="name_user"
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
                  v-model="surname"
                  :maxlength="50"
                  :rules="empty"
                  placeholder="- Surname -"
                  outlined
                  dense
                ></v-text-field>
              </v-col>

              <v-col cols="6" class="py-0" align="left">
                <p
                  class="font-weight-bold primary--text"
                  style="margin-bottom: 5px"
                >
                  Division <span class="red--text"> * </span>
                </p>
                <v-select
                  v-model="division_id"
                  :items="items_selected_division"
                  :rules="empty"
                  item-text="division_name"
                  item-value="division_id"
                  placeholder="- Division -"
                  append-icon="mdi-chevron-down"
                  dense
                  outlined
                ></v-select>
              </v-col>

              <v-col cols="6" class="py-0" align="left" v-if="mode == 'ADD'">
                <p
                  class="font-weight-bold primary--text"
                  style="margin-bottom: 5px"
                >
                  Permission <span class="red--text"> * </span>
                </p>
                <v-select
                  v-model="permission_id"
                  :items="items_selected_permission"
                  item-text="permission_name"
                  :rules="empty"
                  item-value="permission_id"
                  placeholder="- Permission -"
                  append-icon="mdi-chevron-down"
                  dense
                  outlined
                ></v-select>
              </v-col>
              

               <v-col cols="12" class="py-0" align="left" v-if="mode == 'EDIT'">
                <p
                  class="font-weight-bold primary--text"
                  style="margin-bottom: 5px"
                >
                  Permission <span class="red--text"> * </span>
                </p>
                <v-select
                  v-model="permission_id"
                  :items="items_selected_permission"
                  item-text="permission_name"
                  :rules="empty"
                  item-value="permission_id"
                  placeholder="- Permission -"
                  append-icon="mdi-chevron-down"
                  dense
                  outlined
                ></v-select>
              </v-col>


              <v-col cols="6" class="py-0" align="left">
                <p
                  class="font-weight-bold primary--text"
                  style="margin-bottom: 5px"
                >
                  Field Service <span class="red--text"> * </span>
                </p>
                <v-select
                  v-model="field_service_id"
                  :items="items_selected_service"
                  :rules="empty"
                  item-text="field_service_name"
                  item-value="field_service_id"
                  placeholder="- Field Service -"
                  append-icon="mdi-chevron-down"
                  dense
                  outlined
                ></v-select>
              </v-col>

              <v-col cols="6" class="py-0" align="left">
                <p
                  class="font-weight-bold primary--text"
                  style="margin-bottom: 5px"
                >
                  Branch <span class="red--text"> * </span>
                </p>
                <v-select
                  v-model="branch_id"
                  :items="items_selected_branch"
                  :rules="empty"
                  item-text="branch_name"
                  item-value="branch_id"
                  placeholder="- Branch -"
                  append-icon="mdi-chevron-down"
                  dense
                  outlined
                ></v-select>
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
              v-if="mode == 'EDIT'"
              class="text-capitalize pa-5"
              :loading="loading"
              tile
              color="primary white--text"
              style="border-radius: 12px"
              @click="EditUser()"
            >
              <v-icon left> mdi-content-save</v-icon>
              Save
            </v-btn>

            <v-btn
              v-else
              class="text-capitalize pa-5"
              tile
              color="primary white--text"
              style="border-radius: 12px"
              :loading="loading"
              @click="AddUser()"
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
  data() {
    return {
      dialog: false,

      staff_id: "",
      password_user: "",
      name_user: "",
      surname: "",
      branch_id: "",
      field_service_id: "",
      permission_id: "",
      division_id: "",

      show1: false,
      loading: false,
      valid: true,
      mode: "ADD",
      item: "",
      //selected
      items_selected_branch: [],
      items_selected_service: [],
      items_selected_division: [],
      items_selected_permission: [],

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
  created() {
    this.getDataBranch();
    this.getDataFieldService();
    this.getDataDivision();
    this.getDataPermission();
  },
  methods: {
    open(mode, item) {
      this.mode = mode;
      this.item = item;
      if (mode == "EDIT") {
        this.staff_id = item.staff_id;
        this.password_user = item.staff_id;
        this.name_user = item.firstname;
        this.surname = item.lastname;
        this.branch_id = item.branch_id;
        this.field_service_id = item.field_service_id;
        this.permission_id = item.permission_id;
        this.division_id = item.division_id;
      }
      this.dialog = true;
    },
    cancelDialog() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
      this.dialog = false;
    },
    AddUser() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        let body = {
          staff_id: this.staff_id,
          password: this.password_user,
          name: this.name_user,
          surname: this.surname,
          division_id: this.division_id,
          field_service_id: this.field_service_id,
          branch_id: this.branch_id,
          permission_id: this.permission_id,
        };
        this.axios
          .post(
            process.env.VUE_APP_API + "/register/admin",
            body
            // ,this.header_token
          )
          .then((res) => {
            // console.log(res.data);
            this.loading = false;
            if (res.data.massage == "insert success") {
              this.cancelDialog();

              this.$emit("openDialogSuccess", "Success !!", "Add User success");

              setTimeout(() => {
                this.$emit("closeDialogSuccess");
              }, 2000);
              this.$emit("searchNumberPage");
            } else if (res.data.massage == "staff_id already") {
              this.$emit(
                "openDialogError",
                "Unsuccessful !!",
                "Because Staff id is duplicate in the system"
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
    EditUser() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        let body = {
          staff_id: this.staff_id,
          branch_id: this.branch_id,
          field_service_id: this.field_service_id,
          division_id: this.division_id,
          firstname: this.name_user,
          lastname: this.surname,
        };
        this.axios
          .put(
            process.env.VUE_APP_API + "/user/" + this.item.user_id,
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
                "Update User success"
              );

              setTimeout(() => {
                this.$emit("closeDialogSuccess");
              }, 2000);
              this.$emit("searchNumberPage");
            } else if (res.data.massage == "staff_id already") {
              this.$emit(
                "openDialogError",
                "Unsuccessful !!",
                "Because staff id is duplicate in the system"
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
    getDataBranch() {
      this.axios
        .get(
          process.env.VUE_APP_API + "/master_data/branch"
          // ,this.header_token
        )
        .then((res) => {
          // console.log(res.data);
          if (res.data) {
            this.items_selected_branch = res.data;
          }
        });
    },
    getDataFieldService() {
      this.axios
        .get(
          process.env.VUE_APP_API + "/master_data/field_service"
          // ,this.header_token
        )
        .then((res) => {
          // console.log(res.data);
          if (res.data) {
            this.items_selected_service = res.data;
          }
        });
    },
    getDataDivision() {
      this.axios
        .get(
          process.env.VUE_APP_API + "/master_data/division"
          // ,this.header_token
        )
        .then((res) => {
          // console.log(res.data);
          if (res.data) {
            this.items_selected_division = res.data;
          }
        });
    },
    getDataPermission() {
      this.axios
        .get(
          process.env.VUE_APP_API + "/permission/all"
          // ,this.header_token
        )
        .then((res) => {
          // console.log(res.data);
          if (res.data) {
            this.items_selected_permission = res.data;
          }
        });
    },
  },
};
</script>