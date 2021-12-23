<template>
  <div>
    <v-app-bar
      class="px-0 mx-0"
      height="75%"
      dense
      flat
      style="background-color: #ffffff"
    >
      <v-toolbar-title>
        <v-img
          :src="require('@/assets/img/icon_Fuji.png')"
          style="vertical-align: -webkit-baseline-middle !important"
          max-height="74px"
          max-width="136px"
          contain
        ></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-row align="center" justify="end">
        <v-col :cols="x_mobile ? '11' : '6'">
          <v-text-field
            class="pt-6"
            label="Search"
            dense
            outlined
            flat
            append-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
      </v-row> -->

      <!-- <v-badge
        class="mx-1"
        bordered
        top
        color="blue"
        dot
        offset-x="10"
        offset-y="10"
      >
        <v-btn icon>
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
      </v-badge> -->

      <v-btn class="ml-1 mr-2" icon @click="manageData()">
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>

      <v-menu rounded="lg" left bottom offset-y>
        <template v-slot:activator="{ on: menu, attrs }">
          <v-avatar
            class="mx-1"
            color="grey lighten-2"
            size="32px"
            v-bind="attrs"
            v-on="{ ...menu }"
          >
            <span
              class="black--text font-weight-bold"
              style="font-size: 16px"
              >{{
                user_info.firstname.charAt(0) + user_info.firstname.charAt(1)
              }}</span
            >
          </v-avatar>
        </template>
        <v-list>
          <v-list-item-group v-model="selectedItem" color="black">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              @click="menuUser(item)"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-row>
      <v-col cols="12" class="pb-0" style="background-color: #eeeeee">
        <nav>
          <router-link
            :to="{ path: '/dashboard' }"
            custom
            :style="
              $store.state.tap_appbar_value == 'dashboard'
                ? 'background-color: #BDBDBD;'
                : ''
            "
          >
            <a class="dashboard" v-on:click="makeActive('dashboard')"
              ><h3
                class="px-10 py-4 black--text font-weight-bold text-capitalize"
              >
                Dashboard
              </h3></a
            >
          </router-link>

          <router-link
            :to="{ path: '/survey' }"
            custom
            :style="
              $store.state.tap_appbar_value == 'survey'
                ? 'background-color: #BDBDBD;'
                : ''
            "
          >
            <a class="dashboard" v-on:click="makeActive('survey')"
              ><h3
                class="px-10 py-4 black--text font-weight-bold text-capitalize"
              >
                Survey
              </h3></a
            >
          </router-link>

          <router-link
            :to="{ path: '/settingsurveylist' }"
            custom
            :style="
              $store.state.tap_appbar_value == 'setting'
                ? 'background-color: #BDBDBD;'
                : ''
            "
          >
            <a class="setting" v-on:click="makeActive('setting')"
              ><h3
                class="px-10 py-4 black--text font-weight-bold text-capitalize"
              >
                Setting
              </h3></a
            >
          </router-link>

          <router-link
            :to="{ path: '/user' }"
            custom
            :style="
              $store.state.tap_appbar_value == 'user'
                ? 'background-color: #BDBDBD;'
                : ''
            "
          >
            <a class="user" v-on:click="makeActive('user')"
              ><h3
                class="px-14 py-4 black--text font-weight-bold text-capitalize"
              >
                User
              </h3></a
            >
          </router-link>
        </nav>
      </v-col>
    </v-row>

    <router-view> </router-view>
    <DialogLogout ref="DialogLogout" />
  </div>
</template>
<script>
import DialogLogout from "@/components/Dialog/DialogLogout.vue";

export default {
  components: {
    DialogLogout,
  },
  data: () => ({
    user_info: "",
    selectedItem: "",
    items: [
      { text: "Edit Profile", icon: "mdi-clipboard-account" },
      { text: "Logout", icon: "mdi-logout-variant" },
    ],
  }),
  created() {
    this.user_info = this.$session.get("user_info");
    // console.log(this.$session.get("user_info"));
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
  watch: {},
  methods: {
    logout() {
      this.$refs.DialogLogout.open();
    },
    makeActive(item) {
      this.$store.state.tap_appbar_value = item;
    },
    manageData() {
      this.$store.state.tap_appbar_value = "";
      this.$router.push("/manageData");
    },
    menuUser(item) {
      if (item.text == "Logout") {
        this.$refs.DialogLogout.open();
      }
    },
  },
};
</script>

<style>
/*-------------------------
  The menu
--------------------------*/

nav a {
  display: inline-block;
  color: #ffffff !important;
  font-weight: bold;
  font-size: 17px;
  text-decoration: none !important;
  line-height: 1;
  text-transform: uppercase;
  background-color: transparent;

  -webkit-transition: background-color 0.25s;
  -moz-transition: background-color 0.25s;
  transition: background-color 0.25s;
}
</style>