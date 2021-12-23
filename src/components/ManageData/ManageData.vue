<template>
  <div>
    <v-row class="pa-10" align="center" justify="center">
      <v-col>
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
          MANAGE DATA
        </h1>
      </v-col>

      <v-col cols="12" align-self="start">
        <v-tabs v-model="tab_selector" style="border-bottom-style: groove">
          <v-tab
            class="tab"
            v-for="tab of items_tabs"
            :key="tab.id"
            :class="
              id_tab == tab.id
                ? 'white--text font-weight-bold text-capitalize'
                : 'primary--text font-weight-bold text-capitalize'
            "
            :style="
              id_tab == tab.id
                ? 'width:15%;  border-top-left-radius: 15px; border-top-right-radius: 15px; background-color: #0B3751; font-size: 18px; letter-spacing: 0.25px;'
                : 'width:15%;  border-width: 2px; border-style: inset; border-color: #0B3751; border-top-left-radius: 15px; border-top-right-radius: 15px;font-size: 18px;line-height: 20px;letter-spacing: 0.25px;'
            "
            @click="getTabs(tab.id)"
          >
            {{ tab.value }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab_selector">
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <FieldManageData
                  ref="FieldManageData"
                  :item_list_field="item_list_field"
                  @openDialogAddEditField="openDialogAddEditField"
                  @openDialogDeleteField="openDialogDeleteField"
                  :tab_selected="tab_selected"
                />
                <DialogAddEditField
                  ref="DialogAddEditField"
                  @getDataField="getDataField"
                  @openDialogSuccess="openDialogSuccess"
                  @openDialogError="openDialogError"
                  @closeDialogSuccess="closeDialogSuccess"
                  @closeDialogError="closeDialogError"
                  :item_list_field="item_list_field"
                />

                <DialogDeleteField
                  ref="DialogDeleteField"
                  @getDataField="getDataField"
                  @openDialogSuccess="openDialogSuccess"
                  @openDialogError="openDialogError"
                  @closeDialogSuccess="closeDialogSuccess"
                  @closeDialogError="closeDialogError"
                />
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <BranchAndOrganizeManageData
                  ref="BranchAndOrganizeManageData"
                  :item_list_branch="item_list_branch"
                  @openDialogAddEditBranch="openDialogAddEditBranch"
                  @openDialogDeleteBranch="openDialogDeleteBranch"
                  :tab_selected="tab_selected"
                />
                <DialogAddEditBranch
                  ref="DialogAddEditBranch"
                  @getDataBranch="getDataBranch"
                  @openDialogSuccess="openDialogSuccess"
                  @openDialogError="openDialogError"
                  @closeDialogSuccess="closeDialogSuccess"
                  @closeDialogError="closeDialogError"
                  :item_list_branch="item_list_branch"
                />
                <DialogDeleteBranch
                  ref="DialogDeleteBranch"
                  @getDataBranch="getDataBranch"
                  @openDialogSuccess="openDialogSuccess"
                  @openDialogError="openDialogError"
                  @closeDialogSuccess="closeDialogSuccess"
                  @closeDialogError="closeDialogError"
                />
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <DivisionManageData
                  ref="DivisionManageData"
                  :item_list_division="item_list_division"
                  @openDialogAddEditDivision="openDialogAddEditDivision"
                  @openDialogDeleteDivision="openDialogDeleteDivision"
                  :tab_selected="tab_selected"
                />
                <DialogAddEditDivision
                  ref="DialogAddEditDivision"
                  @getDataDivistion="getDataDivistion"
                  @openDialogSuccess="openDialogSuccess"
                  @openDialogError="openDialogError"
                  @closeDialogSuccess="closeDialogSuccess"
                  @closeDialogError="closeDialogError"
                  :item_list_division="item_list_division"
                />
                <DialogDeleteDivision
                  ref="DialogDeleteDivision"
                  @getDataDivistion="getDataDivistion"
                  @openDialogSuccess="openDialogSuccess"
                  @openDialogError="openDialogError"
                  @closeDialogSuccess="closeDialogSuccess"
                  @closeDialogError="closeDialogError"
                />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
    <DialogLoading ref="DialogLoading" />
    <DialogSuccess ref="DialogSuccess" />
    <DialogError ref="DialogError" />
  </div>
</template>

<script>
import FieldManageData from "@/components/ManageData/Field/FieldManageData.vue";
import BranchAndOrganizeManageData from "@/components/ManageData/Branch/BranchAndOrganizeManageData.vue";
import DivisionManageData from "@/components/ManageData/Divistion/DivisionManageData.vue";

import DialogAddEditField from "@/components/ManageData/Field/DialogAddEditField.vue";
import DialogDeleteField from "@/components/ManageData/Field/DialogDeleteField.vue";

import DialogAddEditBranch from "@/components/ManageData/Branch/DialogAddEditBranch.vue";
import DialogDeleteBranch from "@/components/ManageData/Branch/DialogDeleteBranch.vue";

import DialogAddEditDivision from "@/components/ManageData/Divistion/DialogAddEditDivision.vue";
import DialogDeleteDivision from "@/components/ManageData/Divistion/DialogDeleteDivision.vue";

//dialog
import DialogLoading from "@/components/Dialog/DialogLoading.vue";
import DialogSuccess from "@/components/Dialog/DialogSuccess.vue";
import DialogError from "@/components/Dialog/DialogError.vue";
export default {
  components: {
    //component
    FieldManageData,
    BranchAndOrganizeManageData,
    DivisionManageData,
    //dialog
    DialogAddEditField,
    DialogDeleteField,

    DialogAddEditBranch,
    DialogDeleteBranch,

    DialogAddEditDivision,
    DialogDeleteDivision,

    DialogLoading,
    DialogSuccess,
    DialogError,
  },
  data() {
    return {
      tab_selector: null,
      id_tab: 1,
      items_tabs: [
        {
          id: 1,
          value: "Field",
        },
        {
          id: 2,
          value: "Branch / Organize",
        },
        {
          id: 3,
          value: "Division",
        },
      ],
      // item_list_field
      item_list_field: [],
      // item_list_branch
      item_list_branch: [],
      // item_list_division
      item_list_division: [],
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
    tab_selected() {
      if (this.tab_selector == 0) {
        this.getDataField();
      } else if (this.tab_selector == 1) {
        this.getDataBranch();
      } else if (this.tab_selector == 2) {
        this.getDataDivistion();
      }
    },
  },
  watch: {},
  created() {
    this.getDataField();
    this.getDataBranch();
    this.getDataDivistion();
  },
  methods: {
    getTabs(item) {
      this.id_tab = item;
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
    //Field
    openDialogAddEditField(mode, item) {
      this.$refs.DialogAddEditField.open(mode, item);
    },
    openDialogDeleteField(item) {
      this.$refs.DialogDeleteField.open(item);
    },
    //Branch
    openDialogAddEditBranch(mode, item) {
      this.$refs.DialogAddEditBranch.open(mode, item);
    },
    openDialogDeleteBranch(item) {
      this.$refs.DialogDeleteBranch.open(item);
    },
    //Division
    openDialogAddEditDivision(mode, item) {
      this.$refs.DialogAddEditDivision.open(mode, item);
    },
    openDialogDeleteDivision(item) {
      this.$refs.DialogDeleteDivision.open(item);
    },

    getDataField() {
      this.$refs.DialogLoading.open();

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
          this.$refs.DialogLoading.close();
        });
    },
    getDataBranch() {
      this.$refs.DialogLoading.open();

      this.axios
        .get(
          process.env.VUE_APP_API + "/master_data/branch"
          // ,this.header_token
        )
        .then((res) => {
          // console.log(res.data);

          if (res.data) {
            this.item_list_branch = res.data;
            this.$refs.DialogLoading.close();
          }
        });
    },
    getDataDivistion() {
      this.$refs.DialogLoading.open();
      this.axios
        .get(
          process.env.VUE_APP_API + "/master_data/division"
          // ,this.header_token
        )
        .then((res) => {
          // console.log(res.data);

          if (res.data) {
            this.item_list_division = res.data;
            this.$refs.DialogLoading.close();
          }
        });
    },
  },
};
</script>
<style >
</style>