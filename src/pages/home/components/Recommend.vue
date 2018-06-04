<template>
<div>
  <div class="title">
    <img class="love" src=""/>
    猜你喜欢</div>
  <ul>
    <li class="item border-bottom" v-for="item of iomList" :key="item.id">
      <img class="item-img" :src="item.imgUrl" />
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      iomList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg',
          title: '宁乡炭河古城',
          desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg',
          title: '宁乡炭河古城',
          desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg',
          title: '宁乡炭河古城',
          desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg',
          title: '宁乡炭河古城',
          desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg',
          title: '宁乡炭河古城',
          desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        },
        {
          id: '006',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg',
          title: '宁乡炭河古城',
          desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        },
        {
          id: '007',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg',
          title: '宁乡炭河古城',
          desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        },
        {
          id: '008',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg',
          title: '宁乡炭河古城',
          desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        },
        {
          id: '009',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg',
          title: '宁乡炭河古城',
          desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
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
      .love
        width: .3rem
        height: .3rem
        line-height :8rem
    .item
      overflow :hidden
      display :flex
      height :2.4rem
      .item-img
        width: 2rem
        height: 2rem
        padding: 0.2rem
      .item-info
        flex: 1
        padding: .2rem
        min-width :0
        .item-title
          line-height: 0.54rem
          font-size :.32rem
          ellipse()
        .item-desc
          line-height: .6rem
          color:#ccc
          ellipse()
        .item-button
          line-height : .5rem
          margin-top :0.2rem
          background :#ff9300
          padding : 0 .24rem
          border-radius :.06rem
</style>
