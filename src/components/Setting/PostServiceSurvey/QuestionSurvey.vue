<template>
  <div>
    <v-row class="text-center">
      <v-col cols="12">
        <v-expansion-panels multiple v-model="panel">
          <v-expansion-panel
            class="my-2"
            style="border-radius: 20px"
            v-for="(item, i) in 4"
            :key="i"
          >
            <v-expansion-panel-header
              expand-icon
              style="background-color: #0b3751; border-radius: 20px"
            >
              <span class="white--text">{{ i + 1 }}</span>
              <template v-slot:actions>
                <v-icon class="white--text"> mdi-chevron-up</v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="py-4">
              <v-row class="" align="center" justify="center">
                <v-col cols="8" class="pt-8" align="left">
                  <p class="font-weight-bold">
                    Question <span class="red--text"> * </span>
                  </p>
                  <v-text-field
                    placeholder="Add Question"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4" align="left" class="py-0">
                  <p class="font-weight-bold">
                    Answer<span class="red--text"> * </span>
                  </p>
                  <v-menu rounded="lg" left bottom offset-y>
                    <template v-slot:activator="{ on: menu, attrs }">
                      <v-text-field
                        v-model="selectedItem"
                        class="py-0"
                        style="height: 46px"
                        readonly
                        v-bind="attrs"
                        v-on="{ ...menu }"
                        :prepend-inner-icon="iconTextSelect()"
                        append-icon="mdi-chevron-down"
                        placeholder="Select type Answer"
                        outlined
                        dense
                      ></v-text-field>
                    </template>
                    <v-list dense>
                      <v-list-item-group color="primary">
                        <v-list-item
                          v-for="(item, i) in items_selected"
                          :key="i"
                          @click="menuTypeSelect(item)"
                        >
                          <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                          </v-list-item-icon>
                          <v-list-item-content>
                            <v-list-item-title
                              v-text="item.text"
                            ></v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </v-menu>
                </v-col>

                <v-col cols="8" class="pt-0">
                  <v-card outlined v-if="selectedItem != ''">
                    <v-card-text class="pa-5" style="background-color: #eceff1">
                      <!-- Mulitiple choice -->
                      <span v-if="selectedItem == 'Mulitiple choice'">
                        <v-row>
                          <v-col cols="12" align="left">
                            <v-btn
                              color="primary"
                              @click="addNumberListRadio()"
                            >
                              <v-icon class="pr-1">+ </v-icon> add option</v-btn
                            >
                          </v-col>
                        </v-row>
                        <v-divider class="my-5"></v-divider>
                        <v-row>
                          <v-col
                            cols="12"
                            v-for="(item, index) in list_type_radio"
                            :key="index"
                          >
                            <v-row>
                              <v-col cols="1" class="mt-2 pb-0">
                                <v-radio
                                  color="primary"
                                  v-model="item.radio"
                                  value="radio"
                                >
                                </v-radio>
                              </v-col>
                              <v-col cols="9" class="pb-0">
                                <v-text-field
                                  v-model="item.text"
                                  label="Label radio"
                                  outlined
                                  dense
                                ></v-text-field>
                              </v-col>
                              <v-col cols="2" class="pb-0">
                                <v-btn
                                  color="red"
                                  depressed
                                  :disabled="list_type_radio.length == 1"
                                  @click="deleteTypeRadio(item)"
                                >
                                  <v-icon color="white"
                                    >mdi-trash-can-outline</v-icon
                                  ></v-btn
                                >
                              </v-col>
                            </v-row>
                          </v-col>
                        </v-row>
                      </span>

                      <!-- Text box -->
                      <span v-if="selectedItem == 'Text box'">
                        <v-textarea
                          v-model="text_box_area"
                          outlined
                          :maxlength="200"
                          dense
                          name="input-7-4"
                          placeholder="Answer"
                        ></v-textarea>
                      </span>

                      <!-- Date -->
                      <span v-if="selectedItem == 'Date'">
                        <v-menu
                          v-model="menu_date"
                          :close-on-content-click="false"
                          transition="scale-transition"
                          offset-y
                          :nudge-top="25"
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="selected_date"
                              outlined
                              placeholder="YY / MM / DD"
                              prepend-inner-icon="mdi-calendar"
                              readonly
                              dense
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="selected_date"
                            color="primary"
                            @input="menu_date = false"
                          ></v-date-picker>
                        </v-menu>
                      </span>

                      <!-- file -->
                      <span v-if="selectedItem == 'Attachment'">
                        <v-file-input
                          v-model="files"
                          color="primary"
                          counter
                          dense
                          placeholder="File input"
                          multiple
                          prepend-icon="mdi-paperclip"
                          outlined
                          :show-size="1000"
                        >
                          <template v-slot:selection="{ index, text }">
                            <v-chip
                              v-if="index < 2"
                              color="green"
                              dark
                              label
                              small
                            >
                              {{ text }}
                            </v-chip>

                            <span
                              v-else-if="index === 2"
                              class="
                                text-overline
                                grey--text
                                text--darken-3
                                mx-2
                              "
                            >
                              +{{ files.length - 2 }} File(s)
                            </span>
                          </template>
                        </v-file-input>
                      </span>

                      <!-- Liner scale   -->
                      <span v-if="selectedItem == 'Liner scale'">
                        <v-row>
                          <v-col cols="3">
                            <v-text-field
                              v-model="min_line_scale"
                              type="number"
                              label="Min"
                              outlined
                              dense
                            ></v-text-field>
                          </v-col>
                          <v-col cols="1" class="px-0 mt-1"> - </v-col>
                          <v-col cols="3">
                            <v-text-field
                              v-model="max_line_scale"
                              type="number"
                              label="Max"
                              outlined
                              dense
                            ></v-text-field
                          ></v-col>
                        </v-row>
                        <v-row style="margin-top: -20px">
                          <v-col
                            class="py-0"
                            align="left"
                            cols="12"
                            v-if="min_line_scale > max_line_scale"
                          >
                            <p class="red--text">
                              *this value min must be less than or equal to
                              maximum Value
                            </p>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="3">
                            <v-text-field
                              label="Value Min"
                              disabled
                              dense
                              :value="min_line_scale"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="1" class="px-0"> = </v-col>
                          <v-col cols="8">
                            <v-text-field
                              label="Label Min"
                              outlined
                              :maxlength="20"
                              dense
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row>
                          <v-col cols="3">
                            <v-text-field
                              label="Value Max"
                              disabled
                              dense
                              :value="max_line_scale"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="1" class="px-0"> = </v-col>
                          <v-col cols="8">
                            <v-text-field
                              label="Label Max"
                              outlined
                              :maxlength="20"
                              dense
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </span>

                      <!-- Dropdown -->
                      <span v-if="selectedItem == 'Dropdown'">
                        <v-row>
                          <v-col cols="12" align="left">
                            <v-btn color="primary" @click="addListDropdown()">
                              <v-icon class="pr-1">+ </v-icon> add option</v-btn
                            >
                          </v-col>
                        </v-row>
                        <v-divider class="my-5"></v-divider>
                        <v-row>
                          <v-col
                            cols="12"
                            v-for="(item, index) in list_type_dropdown"
                            :key="index"
                          >
                            <v-row>
                              <v-col cols="4">
                                <v-menu rounded="lg" left bottom offset-y>
                                  <template
                                    v-slot:activator="{ on: menu, attrs }"
                                  >
                                    <v-text-field
                                      v-model="selected_emoji"
                                      class="py-0"
                                      style="height: 46px"
                                      readonly
                                      v-bind="attrs"
                                      v-on="{ ...menu }"
                                      :prepend-inner-icon="iconSelectEmoji()"
                                      append-icon="mdi-chevron-down"
                                      placeholder="emoji"
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </template>
                                  <v-list dense>
                                    <v-list-item-group color="primary">
                                      <v-list-item
                                        v-for="(
                                          item, i
                                        ) in list_type_dropdown_emoji"
                                        :key="i"
                                        @click="menuSelectEmoji(item)"
                                      >
                                        <v-list-item-icon>
                                          <v-icon
                                            v-text="item.icon"
                                            color="primary"
                                          ></v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                          <v-list-item-title
                                            v-text="item.text"
                                          ></v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>
                                    </v-list-item-group>
                                  </v-list>
                                </v-menu>
                              </v-col>
                              <v-col cols="6" class="pb-0">
                                <v-text-field
                                  v-model="item.text"
                                  label="Label dropdown"
                                  outlined
                                  dense
                                ></v-text-field>
                              </v-col>
                              <v-col cols="2" class="pb-0">
                                <v-btn
                                  color="red"
                                  depressed
                                  :disabled="list_type_dropdown.length == 1"
                                  @click="deleteTypeDropdown(item)"
                                >
                                  <v-icon color="white"
                                    >mdi-trash-can-outline</v-icon
                                  ></v-btn
                                >
                              </v-col>
                            </v-row>
                          </v-col>
                        </v-row>
                      </span>
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col cols="4" class="pt-0" align="left">
                  <v-card outlined class="px-5">
                    <v-card-text>
                      <v-row>
                        <v-col cols="4" class="py-0">
                          <v-switch v-model="switch1" inset></v-switch>
                        </v-col>
                        <v-col cols="8" class="mt-2 pb-0">
                          <p style="font-size: 16px">Status Question</p>
                        </v-col>

                        <v-col cols="4" class="pl-0">
                          <v-btn depressed text>
                            <v-icon color="red" large>
                              mdi-delete-circle
                            </v-icon>
                          </v-btn>
                        </v-col>
                        <v-col cols="8" class="mt-2 pb-0">
                          <p style="font-size: 16px">Delete Question</p>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      panel: [0, 1, 1],
      items_selected: [
        { text: "Mulitiple choice", icon: "mdi-circle-slice-8" },
        { text: "Liner scale", icon: "mdi-vector-line" },
        { text: "Date", icon: "mdi-calendar" },
        { text: "Attachment", icon: "mdi-paperclip" },
        { text: "Text box", icon: "mdi-text" },
        { text: "Dropdown", icon: "mdi-arrow-down-drop-circle" },
      ],
      ///////test///////
      //Date
      menu_date: false,
      selected_date: "",
      //text box
      text_box_area: "",
      //file
      files: [],
      //line scale
      min_line_scale: "",
      max_line_scale: "",
      //Mulitiple choice
      list_type_radio: [
        {
          radio: "",
          text: "",
        },
      ],
      //Dropdown
      list_type_dropdown_emoji: [
        {
          icon: "mdi-emoticon-kiss-outline",
          text: "kiss",
        },
        {
          icon: "mdi-emoticon-happy-outline",
          text: "happy",
        },
        {
          icon: "mdi-emoticon-outline",
          text: "emoticon",
        },
        {
          icon: "mdi-emoticon-neutral-outline",
          text: "neutral",
        },
        {
          icon: "mdi-emoticon-sad-outline",
          text: "sad",
        },
        {
          icon: "mdi-emoticon-angry-outline",
          text: "angry",
        },
        {
          icon: "mdi-emoticon-dead-outline",
          text: "dead",
        },
      ],
      selected_emoji: "",
      list_type_dropdown: [
        {
          emoji: "",
          text: "",
        },
      ],

      items_type_selected: [{}],
      selectedItem: "",
      radioGroup: 1,
      switch1: true,
       list_Question:[
        {
          Question : "",

        }
       ]
    };

   
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    iconTextSelect() {
      if (this.selectedItem == "Mulitiple choice") {
        return "mdi-circle-slice-8";
      } else if (this.selectedItem == "Liner scale") {
        return "mdi-vector-line";
      } else if (this.selectedItem == "Date") {
        return "mdi-calendar";
      } else if (this.selectedItem == "Attachment") {
        return "mdi-paperclip";
      } else if (this.selectedItem == "Text box") {
        return "mdi-text";
      } else if (this.selectedItem == "Dropdown") {
        return "mdi-arrow-down-drop-circle";
      }
      return "";
    },
    iconSelectEmoji() {
      if (this.selected_emoji == "kiss") {
        return "mdi-emoticon-kiss-outline";
      } else if (this.selected_emoji == "happy") {
        return "mdi-emoticon-happy-outline";
      } else if (this.selected_emoji == "emoticon") {
        return "mdi-emoticon-outline";
      } else if (this.selected_emoji == "neutral") {
        return "mdi-emoticon-neutral-outline";
      } else if (this.selected_emoji == "sad") {
        return "mdi-emoticon-sad-outline";
      } else if (this.selected_emoji == "angry") {
        return "mdi-emoticon-angry-outline";
      } else if (this.selected_emoji == "dead") {
        return "mdi-emoticon-dead-outline";
      } else {
        return "";
      }
    },
    menuTypeSelect(item) {
      console.log(item.text);
      this.selectedItem = item.text;
    },
    menuSelectEmoji(item) {
      this.selected_emoji = item.text;
    },
    addNumberListRadio() {
      var item_radio = {
        radio: "",
        text: "",
      };
      this.list_type_radio.push(item_radio);
    },
    addListDropdown() {
      var item_dropdown = {
        radio: "",
        text: "",
      };
      this.list_type_dropdown.push(item_dropdown);
    },
    deleteTypeRadio(item) {
      this.list_type_radio.indexOf(item),
        typeof this.list_type_radio.indexOf(item);
      this.list_type_radio.splice(this.list_type_radio.indexOf(item), 1);
    },
    deleteTypeDropdown(item) {
      this.list_type_dropdown.indexOf(item),
        typeof this.list_type_dropdown.indexOf(item);
      this.list_type_dropdown.splice(this.list_type_dropdown.indexOf(item), 1);
    },
  },
};
</script>
<style >
</style>v