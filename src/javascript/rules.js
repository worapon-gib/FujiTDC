// TH
function isEmptyCheck(str) {
    if (str) {
      if (str.trim() != '') {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
  function maxLengthCheck(str, len) {
    if (str) {
      if (str.length < len) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
  function minLengthCheck(str, len) {
    if (str) {
      if (str.length >= len) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
  // empty data TextField
  export let isEmptyTextField = [
    v => isEmptyCheck(v) || '* กรุณากรอกข้อมูล',
    v => maxLengthCheck(v, 99) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  // empty data Dropdown
  export let isEmptyDropdown = [
    v => !!v || '* กรุณาเลือกข้อมูล'
    // (v) => maxLengthCheck(v, 99) || "* ข้อมูลมีความยาวมากเกินไป",
  ]
  // EN
  // empty data TextField
  export let isEmptyTextField_en = [
    v => isEmptyCheck(v) || '* Please fill in information',
    v => maxLengthCheck(v, 99) || '* Data is too long'
  ]
  // empty data Dropdown
  export let isEmptyDropdown_en = [
    v => !!v || '* Please select information.'
    // (v) => maxLengthCheck(v, 99) || "* Data is too long",
  ]
  
  export let en_language = [
    v => !!v || '* กรุณากรอกข้อมูล',
    v => /^([a-zA-Z])+$/.test(v) || '* กรุณากรอกข้อมูลเป็นภาษาอังกฤษ',
    v => maxLengthCheck(v, 30) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  export let en_language_short = [
    v => !!v || '* กรุณากรอกข้อมูล',
    v => /^([a-zA-Z])+$/.test(v) || '* กรุณากรอกข้อมูลเป็นภาษาอังกฤษ',
    v => maxLengthCheck(v, 20) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  export let th_language = [
    v => !!v || '* กรุณากรอกข้อมูล',
    v => /^([ก-๏])+$/.test(v) || '* กรุณากรอกข้อมูลเป็นภาษาไทย',
    v => maxLengthCheck(v, 30) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  export let th_language_short = [
    v => !!v || '* กรุณากรอกข้อมูล',
    v => /^([ก-๏])+$/.test(v) || '* กรุณากรอกข้อมูลเป็นภาษาไทย',
    v => maxLengthCheck(v, 20) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  // =====================================================================
  // name user permission
  export let name_permission = [
    // v => isEmptyCheck(v) || '* กรุณากรอกชื่อสิทธิ์',
    // v => /^([A-Za-z0-9])+$/.test(v) || '* กรุณาใส่ชื่อสิทธิ์เป็นภาษาอังกฤษหรือตัวเลข',
    v => /^([A-Za-z0-9])+$/.test(v) || '* กรุณาใส่ชื่อผู้ใช้งานเป็นภาษาอังกฤษหรือตัวเลข',
    v => minLengthCheck(v, 4) || '* ชื่อสิทธิ์ผู้ใช้ควรมีความยาวอย่างน้อย 4 ตัว',
    v => maxLengthCheck(v, 64) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  export let select_permission = [v => !!v || '* กรุณาระบุระบบกลาง']
  
  // Username
  export let username = [
    v => isEmptyCheck(v) || '* request username',
    v => /^([A-Za-z0-9])+$/.test(v) || '* กรุณาใส่ชื่อผู้ใช้งานเป็นภาษาอังกฤษหรือตัวเลข',
    v => minLengthCheck(v, 4) || '* ชื่อผู้ใช้ควรมีความยาวอย่างน้อย 4 ตัว',
    v => maxLengthCheck(v, 64) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  // Password
  export let password = [
    v => isEmptyCheck(v) || '* request passwprd',
    v => /^([A-Za-z0-9])+$/.test(v) || '* กรุณาใส่รหัสผ่านเป็นภาษาอังกฤษหรือตัวเลข',
    v => minLengthCheck(v, 8) || '* รหัสผ่านควรมีความยาวอย่างน้อย 8 ตัว',
    v => maxLengthCheck(v, 64) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  // TitleName
  export let titleName = [v => isEmptyCheck(v) || '* กรุณาเลือกคำนำหน้าชื่อ']
  // Other TitleName
  export let otherTitleName = [
    v => isEmptyCheck(v) || 'กรุณากรอกคำนำหน้าชื่อ',
    v => /^([a-zA-Zก-๏ .])+$/.test(v) || '* กรุณากรอกข้อมูลเป็นอักษรภาษาไทยหรือภาษาอังกฤษเท่านั้น',
    v => !/ /.test(v) || '* ห้ามมีช่องว่าง',
    v => maxLengthCheck(v, 64) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  //  Firstname
  export let firstname = [
    v => isEmptyCheck(v) || '* กรุณากรอกชื่อ',
    // (v) =>
    //   /^([a-zA-Zก-๏ ])+$/.test(v) ||
    //   "* กรุณากรอกข้อมูลเป็นอักษรภาษาไทยหรือภาษาอังกฤษเท่านั้น",
    v => minLengthCheck(v, 2) || '* กรุณากรอกชื่ออย่างน้อย 2 ตัวอักษร',
    v => maxLengthCheck(v, 64) || '* ข้อมูลมีความยาวมากเกินไป',
    v => /^\S+(\s\S+)*$/.test(v) || '* กรุณากรอกข้อมูลให้ถูกต้อง',
    v => !/ /.test(v) || '* ห้ามมีช่องว่างระหว่างชื่อ'
  ]
  //  Lastname
  export let lastname = [
    v => isEmptyCheck(v) || '* กรุณากรอกนามสกุล',
    // (v) =>
    //   /^([a-zA-Zก-๏ ])+$/.test(v) ||
    //   "* กรุณากรอกข้อมูลเป็นอักษรภาษาไทยหรือภาษาอังกฤษเท่านั้น",
    v => minLengthCheck(v, 2) || '* กรุณากรอกนามสกุลอย่างน้อย 2 ตัวอักษร',
    v => maxLengthCheck(v, 64) || '* ข้อมูลมีความยาวมากเกินไป',
    v => /^\S+(\s\S+)*$/.test(v) || '* กรุณากรอกข้อมูลให้ถูกต้อง',
    v => !/ /.test(v) || '* ห้ามมีช่องว่างระหว่างนามสุกล'
  ]
  // phone number
  function checkPhoneNumber(tel) {
    for (let i = 0; i < tel.length; i++) {
      if (tel[0] == 0 && (tel[1] == 6 || tel[1] == 8 || tel[1] == 9)) {
        return true
      } else {
        return false
      }
    }
  }
  export let phoneNumberForm = [
    v => isEmptyCheck(v) || '* กรุณากรอกหมายเลขโทรศัพท์มือถือ',
    v => v.length <= 12 || '* กรุณากรอกหมายเลขโทรศัพท์มือถือ 10 หลัก',
    v => minLengthCheck(v, 12) || '* กรุณากรอกหมายเลขโทรศัพท์มือถือ 10 หลัก',
    v => (v.length == 12 ? checkPhoneNumber(v) : true) || '* กรุณากรอกหมายเลขโทรศัพท์มือถือให้ถูกต้อง'
  ]
  // Email Form
  export let email = [
    // old template
    // v => isEmptyCheck(v) || "* กรุณากรอกอีเมล",
    // v => !/([ก-๏ ])/.test(v) || "* กรุณากรอกอีเมลให้ถูกต้อง",
    // v => /.+@.+\.+/.test(v) || "* กรุณากรอกอีเมลให้ถูกต้อง",
    // v => /.+@.+\.+([A-Za-z])+$/.test(v) || "* กรุณากรอกอีเมลให้ถูกต้อง",
    // v => /.+@.+\.+/.test(v) || "* กรุณากรอกอีเมลให้ถูกต้อง",
    // v => /.+@.+\.+([A-Za-z])+$/.test(v) || "* กรุณากรอกอีเมลให้ถูกต้อง",
    // new template
    v => isEmptyCheck(v) || '* กรุณากรอกอีเมล',
    v =>
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        v
      ) || '* กรุณากรอกอีเมลให้ถูกต้อง',
    v => maxLengthCheck(v, 99) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  export let email_en = [
    v => isEmptyCheck(v) || '* Please enter email.',
    v =>
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        v
      ) || '* Please enter the email correctly.',
    v => maxLengthCheck(v, 99) || '* Data is too long'
  ]
  // Address text area
  export let address = [
    v => isEmptyCheck(v) || '* กรุณากรอกที่อยู่',
    v => maxLengthCheck(v, 99) || '*ข้อมูลมีความยาวมากเกินไป',
    v => /^\S+(\s\S+)*$/.test(v) || '* ข้อความต้องไม่เริ่มหรือสิ้นสุดด้วยค่าว่าง'
  ]
  // CitizenID
  function checkCitizenID(id_tmp) {
    var id = id_tmp.replace(/-/g, '')
    let i, sum
    for (i = 0, sum = 0; i < 12; i++) {
      sum += parseInt(id.charAt(i)) * (13 - i)
    }
    let mod = sum % 11
    let check = (11 - mod) % 10
    if (check == parseInt(id.charAt(12))) {
      return true
    } else {
      return false
    }
  }
  export let citizenID = [
    v => isEmptyCheck(v) || '* กรุณากรอกเลขบัตรประจำตัวประชาชน13หลัก',
    v => (v.length == 17 ? checkCitizenID(v) : false) || '* กรุณากรอกเลขบัตรประชาชนให้ถูกต้อง'
  ]
  // Passport ID
  export let passportID = [v => isEmptyCheck(v) || '* กรุณากรอกเลขที่หนังสือเดินทาง']
  /// coupon
  //1
  export let name_coupon = [
    v => !!v || '* กรุณาระบุชื่อคูปอง',
    v => (v || '').length <= 255 || 'สูงสุด 50 ตัวอักษร',
    v =>
      /^([a-zA-Zก-๏ .0-9])+$/.test(v) ||
      '* กรุณาระบุชื่อคูปองเป็นอักษรภาษาไทยหรือภาษาอังกฤษ และตัวเลขเท่านั้น',
    v => (v || '').split(' ')[0] != '' || '* ข้อความต้องไม่เริ่มหรือสิ้นสุดด้วยค่าว่าง'
  ]
  
  export let code_coupon = [
    v => (isEmptyCheck(v) && (v || '').length <= 255) || '* กรุณากรอกโค้ดส่วนลด',
    v => /^([A-Za-z0-9])+$/.test(v) || '* กรุณาใส่โค้ดส่วนลดเป็นภาษาอังกฤษหรือตัวเลข',
  
    v => minLengthCheck(v, 4) || '* โค้ดส่วนลดควรมีความยาวอย่างน้อย 4 ตัว',
    v => maxLengthCheck(v, 64) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  export let description_coupon = [
    v => !!v || '* กรุณาระบุรายละเอียดคูปอง',
    // v =>
    //   /^([a-zA-Zก-๏ .0-9])+$/.test(v) ||
    //   '* กรุณาระบุรายละเอียดคูปองเป็นอักษรภาษาไทยหรือภาษาอังกฤษ และตัวเลขเท่านั้น',
    v => (v || '').split(' ')[0] != '' || '* ข้อความต้องไม่เริ่มหรือสิ้นสุดด้วยค่าว่าง',
    v => (maxLengthCheck(v, 255) && (v || '').length <= 255) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  //2
  
  export let start_date_keep = [
    v => !!v || '* กรุณาระบุระยะเวลาเก็บคูปอง',
    v => maxLengthCheck(v, 250) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  export let end_date_keep = [
    v => !!v || '* กรุณาระบุระยะเวลาเก็บคูปอง',
    v => maxLengthCheck(v, 250) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  export let start_date_use = [
    v => !!v || '* กรุณาระบุระยะเวลาใช้งานคูปอง',
    v => maxLengthCheck(v, 250) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  export let end_date_use = [
    v => !!v || '* กรุณาระบุระยะเวลาใช้งานคูปอง',
    v => maxLengthCheck(v, 250) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  //3
  export let quota_coupon = [
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาระบุจำนวนคูปองให้ถูกต้อง',
    v => (!isNaN(parseInt(v)) && v >= 1) || '* กรุณาระบุจำนวนคูปอง มากกว่า 0',
    v =>
      (!isNaN(parseInt(v)) && v >= 1 && v <= 100000) ||
      'กรุณาระบุจำนวนคูปองให้ถูกต้อง และไม่เกิน 100,000'
  ]
  export let user_cap = [v => isEmptyCheck(v) || '*กรุณาระบุสิทธิ์การใช้คูปอง']
  export let user_cap_text_field = [
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาระบุจำนวนสิทธิ์ให้ถูกต้อง',
    v => isEmptyCheck(v) || '*กรุณาระบุจำนวนสิทธิ์',
    v => (!isNaN(parseInt(v)) && v >= 1) || '* กรุณาระบุจำนวน มากกว่า 0',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && v <= 100000) ||
      'กรุณาระบุจำนวนสิทธิ์ให้ถูกต้อง และไม่เกิน 100,000'
  ]
  export let discount_type = [v => isEmptyCheck(v) || '*กรุณาระบุประเภทส่วนลด']
  
  export let discount_amount_money = [
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาใส่ส่วนลดที่ต้องการให้ถูกต้อง',
    v => (!isNaN(parseInt(v)) && v >= 1) || '* กรุณาระบุส่วนลด มากกว่า 0',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && v <= 100000) ||
      'กรุณาใส่ส่วนลดที่ต้องการให้ถูกต้อง และไม่เกิน 100,000'
  ]
  export let discount_amount_percent = [
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาใส่ส่วนลดที่ต้องการให้ถูกต้อง',
    v => (!isNaN(parseInt(v)) && v >= 1) || '* กรุณาระบุส่วนลด มากกว่า 0',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && v <= 100) ||
      'กรุณาใส่ส่วนลดที่ต้องการให้ถูกต้อง และไม่เกิน 100 %'
  ]
  
  export let discount_maximum = [
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาใส่ส่วนลดที่ต้องการให้ถูกต้อง',
    v => (!isNaN(parseInt(v)) && v >= 1) || '* กรุณาระบุส่วนลด มากกว่า 0',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && v <= 100000) ||
      'กรุณาใส่ส่วนลดที่ต้องการให้ถูกต้อง และไม่เกิน 100,000'
  ]
  export let spend_minimum = [
    v => /^[0-9]\d*$|^$/.test(v) || '* กรุณาระบุค่าใช้จ่ายขั้นต่ำให้ถูกต้อง',
    // v => /^[1-9][0-9]*$/.test(v) || '* กรุณาระบุค่าใช้จ่ายขั้นต่ำให้ถูกต้อง xxxxx',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && parseInt(v) <= 100000) ||
      'กรุณาระบุค่าใช้จ่ายขั้นต่ำให้ถูกต้อง และไม่เกิน 100,000'
  ]
  //4
  
  export let rules_member_group = [
    v => !!v || '* กรุณาระบุข้อมูล',
    v => maxLengthCheck(v, 250) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  
  
  //reward
  //1
  export let name_reward = [
    v => !!v || '* กรุณาระบุชื่อของรางวัล',
    v =>
      /^([a-zA-Zก-๏ .0-9])+$/.test(v) ||
      '* กรุณาระบุชื่อของรางวัลเป็นอักษรภาษาไทยหรือภาษาอังกฤษ และตัวเลขเท่านั้น',
    v => (v || '').length <= 255 || 'สูงสุด 50 ตัวอักษร',
    v => (v || '').split(' ')[0] != '' || '* ข้อความต้องไม่เริ่มหรือสิ้นสุดด้วยค่าว่าง'
  ]
  export let description_reward = [
    v => !!v || '* กรุณาระบุรายละเอียดของรางวัล',
    v =>
      /^([a-zA-Zก-๏ .0-9])+$/.test(v) ||
      '* กรุณาระบุรายละเอียดของรางวัลเป็นอักษรภาษาไทยหรือภาษาอังกฤษ และตัวเลขเท่านั้น',
    v => (v || '').split(' ')[0] != '' || '* ข้อความต้องไม่เริ่มหรือสิ้นสุดด้วยค่าว่าง',
    v => (maxLengthCheck(v, 255) && (v || '').length <= 255) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  //2
  export let start_date_reward = [
    v => !!v || '* กรุณาระบุระยะเวลาแลกของรางวัล',
    v => maxLengthCheck(v, 250) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  export let end_date_reward = [
    v => !!v || '* กรุณาระบุระยะเวลาแลกของรางวัล',
    v => maxLengthCheck(v, 250) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  //3
  export let reward_quantity = [
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาระบุจำนวนของรางวัลให้ถูกต้อง',
    v => (v || '').split(0)[0] != '' || '* ข้อความต้องไม่เริ่มหรือสิ้นสุดด้วยค่าว่าง',
    v => (!isNaN(parseInt(v)) && v >= 1) || '* กรุณาระบุจำนวนของรางวัล มากกว่า 0',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && parseInt(v) <= 100000) ||
      '* กรุณาระบุจำนวนของรางวัล  และไม่เกิน 100,000'
  ]
  export let reward_usercap = [v => isEmptyCheck(v) || '*กรุณาระบุสิทธิ์การใช้ของรางวัล']
  export let reward_usercap_textfield = [
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาระบุจำนวนสิทธิ์ให้ถูกต้อง',
    v => (v || '').split(0)[0] != '' || '* ข้อความต้องไม่เริ่มหรือสิ้นสุดด้วยค่าว่าง',
    v => isEmptyCheck(v) || '*กรุณาระบุจำนวนสิทธิ์',
    v => v > 0 || '* กรุณาระบุจำนวนสิทธิ์ มากกว่า 0',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && parseInt(v) <= 100000) ||
      '* กรุณาระบุจำนวนสิทธิ์ให้ถูกต้อง และไม่เกิน 100,000'
  ]
  export let point_to_reward = [
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาระบุจำนวนแต้ม/แสตมป์ให้ถูกต้อง',
    v => (v || '').split(0)[0] != '' || '* ข้อความต้องไม่เริ่มหรือสิ้นสุดด้วยค่าว่าง',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && parseInt(v) <= 100000) ||
      '* กรุณาระบุจำนวนแต้ม/แสตมป์  และไม่เกิน 100,000'
  ]
  //cashback
  //1
  export let name_cashback = [
    v => !!v || '* กรุณาระบุชื่อ cashback (เงินคืน)',
    v => (v || '').length <= 255 || 'สูงสุด 50 ตัวอักษร',
    v => (v || '').split(' ')[0] != '' || 'ข้อความต้องไม่เริ่มหรือสิ้นสุดด้วยค่าว่าง',
  
    v =>
      /^([a-zA-Zก-๏ .0-9])+$/.test(v) ||
      '* กรุณาระบุชื่อ cashback เป็นอักษรภาษาไทยหรือภาษาอังกฤษ และตัวเลขเท่านั้น'
  ]
  export let description_cashback = [
    v => !!v || '* กรุณาระบุรายละเอียด cashback (เงินคืน)',
    v => (v || '').split(' ')[0] != '' || 'ข้อความต้องไม่เริ่มหรือสิ้นสุดด้วยค่าว่าง',
    v => (maxLengthCheck(v, 255) && (v || '').length <= 255) || '* ข้อมูลมีความยาวมากเกินไป'
    // v =>
    //   /^([a-zA-Zก-๏0-9])+$/.test(v) ||
    //   '* กรุณาระบุรายละเอียด cashback เป็นอักษรภาษาไทยหรือภาษาอังกฤษ และตัวเลขเท่านั้น'
  ]
  //2
  export let start_date_cashback = [
    v => !!v || '* กรุณาระบุระยะเวลาเริ่มต้นแลก cashback (เงินคืน)',
    v => maxLengthCheck(v, 250) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  export let end_date_cashback = [
    v => !!v || '* กรุณาระบุระยะเวลาเริ่มต้นแลก cashback (เงินคืน)',
    v => maxLengthCheck(v, 250) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  //3
  export let spend_minimum_cashback = [
    v => /^[0-9]\d*$|^$/.test(v) || '* กรุณาระบุค่าใช้จ่ายขั้นต่ำให้ถูกต้อง',
    // v => (!isNaN(parseInt(v)) && v >= 1) || '* กรุณาระบุค่าใช้จ่ายขั้นต่ำ มากกว่า 0',
    // v => v.split(0)[2] && parseInt(v) < 0 || '* กรุณาระบุค่าใช้จ่ายขั้นต่ำให้ถูกต้อง',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && parseInt(v) <= 100000) ||
      '* กรุณาระบุค่าใช้จ่ายขั้นต่ำให้ถูกต้อง และไม่เกิน 100,000'
  ]
  export let point_to_reward_cashback = [
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาระบุจำนวนแต้ม/แสตมป์ให้ถูกต้อง',
    v => (!isNaN(parseInt(v)) && v >= 1) || '* กรุณาระบุจำนวนแต้ม/แสตมป์ มากกว่า 0',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && parseInt(v) <= 100000) ||
      '* กรุณาระบุจำนวนแต้ม/แสตมป์ให้ถูกต้อง และไม่เกิน 100,000'
  ]
  export let discount_type_cashback = [v => isEmptyCheck(v) || '*กรุณาระบุประเภทส่วนลด']
  export let discountAmount_money_cashback = [
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาระบุส่วนลดที่ต้องการให้ถูกต้อง',
    v => (!isNaN(parseInt(v)) && v >= 1) || '* กรุณาระบุส่วนลด มากกว่า 0',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && v <= 100000) ||
      '* กรุณาระบุส่วนลดที่ต้องการให้ถูกต้อง และไม่เกิน 100,000'
  ]
  export let discountAmount_percent_cashback = [
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาระบุส่วนลดที่ต้องการให้ถูกต้อง',
    v => (!isNaN(parseInt(v)) && v >= 1) || '* กรุณาระบุส่วนลด มากกว่า 0',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && v <= 100) ||
      '* กรุณาระบุส่วนลดที่ต้องการให้ถูกต้อง และไม่เกิน 100 %'
  ]
  export let discount_maximum_cashback = [
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาระบุส่วนลดที่ต้องการให้ถูกต้อง',
    v => (!isNaN(parseInt(v)) && v >= 1) || '* กรุณาระบุส่วนลด มากกว่า 0',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && v <= 100000) ||
      '* กรุณาระบุส่วนลดที่ต้องการให้ถูกต้อง และไม่เกิน 100,000'
  ]
  export let quata_cashback = [
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาระบุจำนวนของรางวัลให้ถูกต้อง',
    v => (!isNaN(parseInt(v)) && v >= 1) || '* กรุณาระบุจำนวนของรางวัล มากกว่า 0',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && parseInt(v) <= 100000) ||
      '* กรุณาระบุจำนวนของรางวัลให้ถูกต้อง และไม่เกิน 100,000'
  ]
  //date
  export let rule_start_date = [
    v => !!v || '* กรุณาระบุวันเริ่มต้น',
    v => maxLengthCheck(v, 250) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  export let rule_end_date = [
    v => !!v || '* กรุณาระบุวันสิ้นสุด',
    v => maxLengthCheck(v, 250) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  //point
  export let point = [
    // v => isEmptyCheck(v) || '*กรุณาระบุจำนวนแต้ม/แสตมป์',
    v => parseInt(v) > 0 || '* กรุณาระบุจำนวนแต้มสะสม มากกว่า 0',
    // v => parseInt(v) <= 100000 || '* ระบุจำนวนแต้ม/แสตมป์สูงสุด 100,000 เท่านั้น',
    v => (!isNaN(parseInt(v)) && v >= 0 && v <= 100000) || 'กรุณาระบุจำนวนแต้มสะสม และไม่เกิน 100,000'
  ]
  export let minimumCost = [
    v => /^[0-9]\d*$|^$/.test(v) || '* กรุณาระบุค่าใช้จ่ายขั้นต่ำให้ถูกต้อง',
    // v => (!isNaN(parseInt(v)) && v >= 1) || '* กรุณาระบุค่าใช้จ่ายขั้นต่ำ มากกว่า 0',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && v <= 100000) ||
      'กรุณาระบุค่าใช้จ่ายขั้นต่ำ และไม่เกิน 100,000'
  ]
  export let moneyToPoint = [
    v => isEmptyCheck(v) || '*กรุณาระบุจำนวนเงิน',
    v => v > 0 || '* กรุณาระบุจำนวนเงิน มากกว่า 0',
    v => v.length <= 6 || '* ระบุจำนวนเงินสูงสุด 100,000 เท่านั้น'
  ]
  //extra
  
  export let extra_point_name = [
    v => isEmptyCheck(v) || 'กรุณาระบุชื่อแต้ม',
    v =>
      /^([a-zA-Zก-๏ .0-9])+$/.test(v) ||
      '* กรุณาระบุชื่อแต้มเป็นอักษรภาษาไทยหรือภาษาอังกฤษ และตัวเลขเท่านั้น'
    // v => (v || '').length <= 255 || 'สูงสุด 50 ตัวอักษร'
  ]
  
  export let extra_point = [
    v => isEmptyCheck(v) || '*กรุณาระบุจำนวนแต้มพิเศษ',
    v => v > 0 || '* กรุณาระบุจำนวนแต้มพิเศษ มากกว่า 0',
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาระบุจำนวนแต้มพิเศษให้ถูกต้อง',
    v =>
      (!isNaN(parseInt(v)) && v >= 4 && v <= 99) ||
      '* กรุณาระบุจำนวนแต้มพิเศษมากกว่า 3 และสูงสุด 99 เท่า'
  ]
  export let extra_point_selected = [v => !!v || '*กรุณาระบุแต้มพิเศษ']
  
  //advence point detail
  export let rules_conditionName = [
    v => isEmptyCheck(v) || '* กรุณาระบุประเภทการใช้จ่าย',
    v =>
      /^([a-zA-Zก-๏ .0-9])+$/.test(v) ||
      '* กรุณาระบุประเภทการใช้จ่ายเป็นอักษรภาษาไทยหรือภาษาอังกฤษ และตัวเลขเท่านั้น'
  ]
  
  export let rules_amount = [
    v => (!isNaN(parseInt(v)) && v >= 1) || '* กรุณาระบุยอดจ่าย มากกว่า 0',
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาระบุยอดจ่ายให้ถูกต้อง',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && v <= 100000) ||
      '* กรุณาระบุยอดจ่ายให้ถูกต้อง และไม่เกิน 100,000'
  ]
  export let rules_moneyToPoint_advencepoint = [
    v => (!isNaN(parseInt(v)) && v >= 1) || '* กรุณาระบุแลกแต้มสะสม มากกว่า 0',
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาระบุแลกแต้มสะสมให้ถูกต้อง',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && v <= 100000) ||
      '* กรุณาระบุแลกแต้มสะสมให้ถูกต้อง และไม่เกิน 100,000'
  ]
  export let rules_pointIsLimit = [v => !!v || '* กรุณาระบุ Point limit ให้ถูกต้อง']
  export let rules_pointLimitValue = [
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาระบุ Point limit ให้ถูกต้อง',
    v => (!isNaN(parseInt(v)) && v >= 1) || '* กรุณาระบุ Point limit  มากกว่า 0',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && v <= 100000) ||
      '* กรุณาระบุ Point limit ให้ถูกต้อง และไม่เกิน 100,000'
  ]
  //Additional settings
  export let rules_date_advence_point = [v => !!v || '* กรุณาระบุวันหมดอายุ']
  export let rules_amount_additional = [
    v => (!isNaN(parseInt(v)) && v >= 1) || '* กรุณาระบุแต้ม มากกว่า 0',
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาระบุแต้มให้ถูกต้อง',
    v =>
      (!isNaN(parseInt(v)) && v >= 0 && v <= 100000) || '* กรุณาระบุแต้มให้ถูกต้อง และไม่เกิน 100,000'
  ]
  export let rules_text_additional = [
    v => isEmptyCheck(v) || '* กรุณาระบุข้อความ',
    v =>
      /^([a-zA-Zก-๏ .0-9])+$/.test(v) ||
      '* กรุณาระบุข้อความเป็นอักษรภาษาไทยหรือภาษาอังกฤษ และตัวเลขเท่านั้น'
  ]
  
  //stamp
  export let rules_max_stamp = [
    // v => isEmptyCheck(v) || '*กรุณาระบุจำนวนแสตมป์',
    v => (!isNaN(parseInt(v)) && v >= 0) || '* กรุณาระบุแสตมป์มากกว่า 0',
    v => /^[0-9]\d*$|^$/.test(v) || '* กรุณาระบุแสตมป์ให้ถูกต้อง',
    v => (!isNaN(parseInt(v)) && v >= 5 && v <= 50) || '* ระบุจำนวนแสตมป์ต่ำสุด 5 และสูงสุด 50 เท่านั้น'
  ]
  
  export let minimum_spend_stamp = [
    v => /^[0-9]\d*$|^$/.test(v) || '* กรุณาระบุค่าใช้จ่ายขั้นต่ำให้ถูกต้อง',
    v => (!isNaN(parseInt(v)) && v >= 0 && v <= 100000) || '* กรุณาระบุค่าใช้จ่ายขั้นต่ำให้ถูกต้อง'
  ]
  export let amount_per_stamp = [
    v => (!isNaN(parseInt(v)) && v >= 1) || '* กรุณาระบุจำนวนเงิน มากกว่า 0',
    v => /^[1-9]\d*$|^$/.test(v) || '* กรุณาระบุจำนวนเงินที่ต้องการให้ถูกต้อง',
    v => (!isNaN(parseInt(v)) && v >= 0 && v <= 100000) || '* กรุณาระบุจำนวนเงินที่ต้องการให้ถูกต้อง'
  ]
  //stamp reward
  
  export let name_stamp_reward = [
    v => !!v || '* กรุณาระบุชื่อของรางวัล',
    v => (v || '').length <= 255 || 'สูงสุด 50 ตัวอักษร',
    v =>
      /^([a-zA-Zก-๏ .0-9])+$/.test(v) ||
      '* กรุณาระบุชื่อของรางวัลเป็นอักษรภาษาไทยหรือภาษาอังกฤษ และตัวเลขเท่านั้น',
    v => (v || '').split(' ')[0] != '' || '* ข้อความต้องไม่เริ่มหรือสิ้นสุดด้วยค่าว่าง'
  ]
  export let note_stamp_reward = [
    v => !!v || '* กรุณาระบุหมายเหตุ',
    v => (v || '').length <= 500 || 'สูงสุด 500 ตัวอักษร',
    v =>
      /^([a-zA-Zก-๏ .0-9])+$/.test(v) ||
      '* กรุณาระบุหมายเหตุเป็นอักษรภาษาไทยหรือภาษาอังกฤษ และตัวเลขเท่านั้น',
    v => (v || '').split(' ')[0] != '' || '* ข้อความต้องไม่เริ่มหรือสิ้นสุดด้วยค่าว่าง'
  ]
  
  export let start_date_stamp_reward = [v => !!v || '* กรุณาระบุวันที่']
  export let end_date_stamp_reward = [v => !!v || '* กรุณาระบุวันที่']
  //setting
  export let rules_name_channel = [
    v => !!v || '* กรุณาระบุชื่อระบบกลาง',
    v => (v || '').length <= 255 || 'สูงสุด 50 ตัวอักษร',
    v =>
      /^([a-zA-Zก-๏ .0-9])+$/.test(v) ||
      '* กรุณาระบุชื่อระบบกลางเป็นอักษรภาษาไทยหรือภาษาอังกฤษ และตัวเลขเท่านั้น',
    v => (v || '').split(' ')[0] != '' || '* ข้อความต้องไม่เริ่มหรือสิ้นสุดด้วยค่าว่าง'
  ]
  
  export let rules_code_channel = [
    v => !!v || '* กรุณาระบุ code',
    v => (v || '').length <= 255 || 'สูงสุด 50 ตัวอักษร',
    v =>
      /^([a-zA-Z.0-9])+$/.test(v) || '* กรุณาระบุชื่อระบบกลางเป็นอักษรภาษาอังกฤษ และตัวเลขเท่านั้น',
    v => (v || '').split(' ')[0] != '' || '* ข้อความต้องไม่เริ่มหรือสิ้นสุดด้วยค่าว่าง'
  ]
  
  //create department store
  export let rules_name = [
    v => !!v || '* กรุณาระบุชื่อห้าง',
    v => (v || '').length <= 255 || 'สูงสุด 50 ตัวอักษร',
    v =>
      /^([a-zA-Zก-๏ .0-9])+$/.test(v) ||
      '* กรุณาระบุชื่อห้างเป็นอักษรภาษาไทยหรือภาษาอังกฤษ และตัวเลขเท่านั้น',
    v => (v || '').split(' ')[0] != '' || '* ข้อความต้องไม่เริ่มหรือสิ้นสุดด้วยค่าว่าง'
  ]
  export let rules_benefit_type = [v => !!v || '* กรุณาระบุ Benefit Type']
  
  export let rules_service = [
    v => !!v || '* กรุณาระบุ Service ห้าง',
    v => (v || '').length <= 35 || 'สูงสุด 30 ตัวอักษร',
    v => /^([a-zA-Z0-9])/.test(v) || '* กรุณาระบุชื่อห้างเป็นภาษาอังกฤษ และตัวเลขเท่านั้น',
    v => (v || '').split(' ')[0] != '' || 'กรุณาระบุชื่อ Service ห้าง'
  ]
  export let rules_description = [
    v => (v || '').split(' ')[0] != '' || '* ข้อความต้องไม่เริ่มหรือสิ้นสุดด้วยค่าว่าง',
    v => (maxLengthCheck(v, 255) && (v || '').length <= 255) || '* ข้อมูลมีความยาวมากเกินไป'
  ]
  