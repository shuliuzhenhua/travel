<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of iomList" :key="item.id">
        <div class="item-img-wrapper">
         <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      iomList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/fb/302620ed8350f8.jpg_r_640x214_25a07cb4.jpg',
          title: '宁乡炭河古城',
          desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1507/95/bf81a1519705f0.jpg_r_640x214_b29fb0c8.jpg',
          title: '宁乡炭河古城',
          desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/89/b2beff9f28b0db.jpg_r_640x214_94143396.jpg',
          title: '宁乡炭河古城',
          desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ae/11f076c6cb7c47.jpg_r_640x214_6f643489.jpg',
          title: '宁乡炭河古城',
          desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1603/56/33894ef918e1a8.jpg_r_640x214_a9de6b4e.jpg',
          title: '宁乡炭河古城',
          desc: '哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styl"
  .title
    margin-top :.2rem
    line-height :.8rem
    background :#eee
    text-indent :.2rem
    font-size :0.33rem
  .item-img-wrapper
    overflow :hidden
    height :0
    padding-bottom :33.9%
    .item-img
      width: 100%
  .item-info
    padding: .2rem
    .item-title
      line-height: 0.54rem
      font-size :.32rem
      ellipse()
    .item-desc
      line-height: .4rem
      color:#ccc
      ellipse()
</style>
