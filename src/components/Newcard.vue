<template>
<div class="container">
  <div class="row">
    <div class="col-md-4" v-for="(n,i) in travelList" :key="n">
      <div class="card mb-4 shadow-sm">
        <img :src="n.img" alt="{{n.name}}" class="card-img-top">
        <div class="card-body">
          <strong class="d-inline-block mb-2 text-primary-emphasis">ร้านที่ {{ i+1 }}</strong>
          <h3 class="mb-0">{{n.name}}</h3>
          <div class="mb-1 text-body-secondary"> {{n.time}}</div>
          <p class="card-text mb-auto">{{n.style}}</p>
          <RouterLink :to="{name: `news_${i+1}` , params: {id: n.name}}" class="icon-link gap-1 icon-link-hover stretched-link">
            ดูรายละเอียดเพิ่มเติม จองโต๊ะ 
            <svg class="bi"> <use xlink:href="#chevron-right"/></svg>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';



//variable drinking
const travelList=ref([
{name:'ท่าช้าง คาเฟ่', 
  style:'ร้านอาหารกึ่งผับกึ่งบาร์', 
  service:'อาหาร เครื่องดื่ม ดนตรี',
  time:'17:00-23:59', 
  price: '899 บาท/โต๊ะ',
  img:"https://p-u.popcdn.net/event_details/posters/000/008/856/original/cfe1b94d03c5137faf1500f98117421e9f2ac9db.jpg?1590662796"},

  {name:'THE GOOD VIEW ', 
  style:'ร้านอาหารกึ่งบาร์', 
  service:'อาหาร เครื่องดื่ม ดนตรี คาราโอเกะ',
  time:'10:00-01:00', 
  price: '1099 บาท/โต๊ะ',
  img:"https://admin.bangkokbanksme.com/uploads/topics/16744511306957.jpg"},

  {name:'The Riverside ' , 
  style:'ร้านอาหารกึ่งบาร์', 
  service:'อาหาร เครื่องดื่ม ดนตรี',
  time:'10:00-01:00',
  price: '789 บาท/โต๊ะ', 
  img:"https://th.bing.com/th/id/R.ab9802205edc889cdc62f84af245316c?rik=EUFmNFFfO91eJA&riu=http%3a%2f%2fwww.dooasia.com%2fwp-content%2fuploads%2f2018%2f05%2fThe-RiverSide-%e0%b9%80%e0%b8%8a%e0%b8%b5%e0%b8%a2%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-7-696x464.jpg&ehk=IfTrEAF8BEuE9hJhtMKHQNYZmV%2boSJEesY%2fzQmFNYoo%3d&risl=&pid=ImgRaw&r=0"},
  
  {name:'WarmUp Cafe', 
  style:'ร้านอาหารนั่งชิลล์', 
  service:'อาหาร เครื่องดื่ม ดนตรี',
  time:'18:00-01:00', 
  price: '999 บาท/โต๊ะ',
  img:"https://d136usn7jnoe61.cloudfront.net/pictures/21526/s2n_0002_p1d06tc4oou8jlkvr0l1mag1grj6.jpg"},
  
  {name:'ตะวันแดง มหาชน', 
  style:'ผับ', 
  service:'อาหาร เครื่องดื่ม ดนตรี',
  time:'19:00-02:00', 
  price: '789 บาท/โต๊ะ', 
  img:"https://th.bing.com/th/id/R.6fd3de7109e6a325c0d72efb53de2050?rik=Aa1zQxZXAWtxSg&riu=http%3a%2f%2ftawandang.com%2fwp-content%2fuploads%2f2017%2f08%2fTWDjang-Chaeng-Wattana.jpg&ehk=WHcn32JlAx8ZTvDdAHwMb81EWoU%2fiVLDtNNd6K%2bP6Ao%3d&risl=&pid=ImgRaw&r=0"},
  
  {name:'ฮอม บาร์', 
  style:'อาหารกึ่งบาร์', 
  service:'อาหาร เครื่องดื่ม ดนตรี ดีเจ',
  time:'17:00-24:00', 
  price: '699 บาท/โต๊ะ',
  img:"https://www.tripgether.com/wp-content/uploads/tripgetter/Hom_05.jpg"},

])

</script>

<style>
.card {
  transition: transform 0.3s ease; /* ใช้การเปลี่ยนแปลงแบบสามารถเป็น smooth */
}

.card:hover {
  transform: translateY(-10px); /* เลื่อนการ์ดขึ้น 10px เมื่อเมาส์ผ่าน */
}
</style>