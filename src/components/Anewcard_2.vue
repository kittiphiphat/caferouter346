<template>
    <div class="box_all">
    <div class="row">
      <div class="col" v-for="(n) in travelList" :key="n.name">
        <div class="card" style="width: 25rem;">
          <img :src="n.img" class="card-img-top">
          <div class="card-body">
            <h3 class="card-title">{{ n.name }}</h3>
            <span style="text-align: left; display: inline-block;">
                <b>Style:</b> {{ n.style }} <br>
                <b>Service:</b> {{ n.service }} <br>
                <b>Opening:</b> {{ n.time }} <br>
                <b>Price:</b> {{ n.price }}
              </span>
            <h6>***จำกัด 5 คนต่อ 1 โต๊ะ***</h6>
            <div class="text-center"> 
              <a class="btn btn-primary" @click="list_local_control(n.name, n.quantity)"> จองโต๊ะ </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

import { ref } from 'vue';

const travelList=ref([
{name:'THE GOOD VIEW ', 
  style:'ร้านอาหารกึ่งบาร์', 
  service:'อาหาร เครื่องดื่ม ดนตรี คาราโอเกะ',
  time:'10:00-01:00', 
  price: '1099 บาท/โต๊ะ',
  img:"https://admin.bangkokbanksme.com/uploads/topics/16744511306957.jpg"}
])

</script>

<style>

.card-img-top {
  height: auto; /* เปลี่ยนเป็น auto เพื่อให้รูปภาพเปลี่ยนขนาดตามอัตราส่วน */
  max-width: 100%; /* รูปจะไม่ขยายเกินขนาดพื้นที่ที่กำหนด */
}

.box_all {
  display: flex;
  flex-wrap: wrap; /* ให้การ์ดเรียงในแถวถัดไปเมื่อตัวก่อนหน้าเต็มแถว */
  justify-content: center;
  align-items: center;
  margin: 0 auto; /* กำหนด margin ด้านบนและด้านล่างเป็น 0 และ margin ด้านซ้ายและขวาเป็น auto เพื่อจัดให้อยู่ตรงกลาง */
  max-width: 1000px; /* กำหนดความกว้างสูงสุดของ box_all (ค่านี้เปลี่ยนไปตามความต้องการ) */
  padding: 20px; /* เพิ่ม padding ตามความต้องการ */
}

.card {
  margin: 1rem; /* ระยะห่างระหว่างการ์ด */
  text-align: left;
}

</style>
