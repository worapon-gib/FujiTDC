<template>
  <div>
    <v-row class="pa-10" align="center" justify="center">
      <v-col cols="6">
        <h1
          class="primary--text font-weight-black text-uppercase"
          style="
            font-family: Kanit;
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            line-height: 40px;
            letter-spacing: 0em;
            text-align: left;
          "
        >
          USER MANAGEMENT
        </h1>
      </v-col>
      <v-col cols="6" class="pt-4" align="right">
        <v-btn
          class="text-capitalize pa-5"
          tile
          color="primary white--text"
          style="border-radius: 12px"
          @click="openDialogAddEditUser('ADD', 'no-item')"
        >
          <v-icon left> mdi-plus-box-multiple-outline</v-icon>
          Add
        </v-btn>
      </v-col>

      <v-col cols="12" class="pt-5" align="center">
        <v-row align="center" justify="center">
          <v-col cols="2" align="left">
            <p class="font-weight-bold">Staff ID</p>
            <v-text-field
              v-model="search"
              placeholder="- Staff ID -"
              clearable
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="3" align="left">
            <p class="font-weight-bold">Branch</p>

            <v-select
              v-model="branch_id"
              :items="item_list_branch"
              item-text="branch_name"
              item-value="branch_id"
              placeholder="- Branch -"
              append-icon="mdi-chevron-down"
              dense
              clearable
              outlined
            ></v-select>
          </v-col>

          <v-col cols="3" align="left">
            <p class="font-weight-bold">
              Field Service <span class="red--text"> * </span>
            </p>

            <v-select
              v-model="field_service_id"
              :items="item_list_field"
              item-text="field_service_name"
              item-value="field_service_id"
              placeholder="- Field Service -"
              append-icon="mdi-chevron-down"
              dense
              clearable
              outlined
            ></v-select>
          </v-col>

          <v-col cols="3" class="mt-3" align="right">
            <v-btn
              class="text-capitalize mr-4"
              tile
              color="primary"
              style="border-radius: 12px"
              @click="btnSearch()"
            >
              <v-icon left> mdi-magnify</v-icon>
              Search
            </v-btn>

            <v-btn
              class="text-capitalize"
              tile
              color="grey lighten-2 primary--text"
              style="border-radius: 12px"
            >
              <v-icon left> mdi-tray-arrow-up</v-icon>
              Export
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="11">
        <TableUser
          ref="TableUser"
          :item_list="item_list"
          :page="page"
          :total_page="total_page"
          @openDialogDeleteUser="openDialogDeleteUser"
          @openDialogAddEditUser="openDialogAddEditUser"
          @openDialogSuccess="openDialogSuccess"
          @openDialogError="openDialogError"
          @closeDialogSuccess="closeDialogSuccess"
          @closeDialogError="closeDialogError"
        />
      </v-col>
    </v-row>
    <DialogAddEditUser
      ref="DialogAddEditUser"
      @openDialogSuccess="openDialogSuccess"
      @openDialogError="openDialogError"
      @closeDialogSuccess="closeDialogSuccess"
      @closeDialogError="closeDialogError"
      @searchNumberPage="searchNumberPage"
    />
    <DialogDeleteUser
      ref="DialogDeleteUser"
      @openDialogSuccess="openDialogSuccess"
      @openDialogError="openDialogError"
      @closeDialogSuccess="closeDialogSuccess"
      @closeDialogError="closeDialogError"
      @searchNumberPage="searchNumberPage"
    />
    <DialogLoading ref="DialogLoading" />
    <DialogSuccess ref="DialogSuccess" />
    <DialogError ref="DialogError" />
  </div>
</template>

<script>
import TableUser from "@/components/User/TableUser.vue";
import DialogAddEditUser from "@/components/User/DialogAddEditUser.vue";
import DialogDeleteUser from "@/components/User/DialogDeleteUser.vue";

//dialog
import DialogLoading from "@/components/Dialog/DialogLoading.vue";
import DialogSuccess from "@/components/Dialog/DialogSuccess.vue";
import DialogError from "@/components/Dialog/DialogError.vue";
export default {
  components: {
    TableUser,
    DialogAddEditUser,
    DialogLoading,
    DialogSuccess,
    DialogError,
    DialogDeleteUser,
  },
  data() {
    return {
      search: "",
      search_setTimeout: null,
      search_const_delay: 500,
      page: 1,
      total_page: 0,
      count_request: 0,
      //selected
      item_list_branch: [],
      item_list_field: [],
      branch_id: "",
      field_service_id: "",
      // table
      item_list: [],
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
  watch: {
    search() {
      this.page = 1;
      clearTimeout(this.search_setTimeout);
      this.search_setTimeout = setTimeout(() => {
        if (this.search == null) {
          this.search = "";
        }
        this.searchNumberPage();
      }, this.search_const_delay);
    },
    page(val) {
      this.searchNumberPage();
    },
  },
  created() {
    this.searchNumberPage();
    this.getDataBranch();
    this.getDataFieldService();
  },
  methods: {
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
    openDialogAddEditUser(mode, item) {
      this.$refs.DialogAddEditUser.open(mode, item);
    },
    openDialogDeleteUser(item) {
      this.$refs.DialogDeleteUser.open(item);
    },
    btnSearch() {
      this.searchNumberPage();
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
            this.item_list_branch = res.data;
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
            this.item_list_field = res.data;
          }
        });
    },
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
    searchNumberPage() {
      this.axios
        .get(
          process.env.VUE_APP_API +
            "/user/list/numberpage/10" +
            "?search=" +
            this.search +
            "&branch_id=" +
            this.branch_id +
            "&field_service_id=" +
            this.field_service_id
          // this.header_token
        )
        .then((res) => {
          this.$refs.DialogLoading.open();
          // console.log(res.data);
          if (res.data) {
            var data = res.data;
            this.total_page = data.page;
            this.count_request = this.formatNumber(data.count);
            this.searchList();
          }
        });
    },

    searchList() {
      this.axios
        .get(
          process.env.VUE_APP_API +
            "/user/list/page/10/" +
            this.page +
            "?search=" +
            this.search +
            "&branch_id=" +
            this.branch_id +
            "&field_service_id=" +
            this.field_service_id
          // this.header_token
        )
        .then((res) => {
          this.$refs.DialogLoading.close();
          // console.log(res.data);
          if (res.data) {
            this.item_list = res.data;
          }
        });
    },
  },
};
</script>
<style >
</style>