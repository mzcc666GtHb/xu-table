<template>
  <div id="app">
    <div class="md-grid-wrap">
      <div class="md-grid-box">
        <div class="md-grid-l-h md-grid-h" v-if="hasLeft">
          <table>
            <tr>
              <td v-for="item in leftDatas">
                {{item.title}}
              </td>
            </tr>
          </table>
        </div>
        <div class="md-grid-l-b md-grid-b" v-if="hasLeft">
          <table>
            <tr v-for="row in rows">
              <td v-for="item in leftDatas">
                {{row[item.field]}}
              </td>
            </tr>
          </table>
        </div>
        <div class="md-grid-m-h md-grid-h" ref="middlHeader">
          <table>
            <tr>
              <td v-for="item in middleDatas" :style="{width:item.width + 'px'}">{{item.title}}</td>
            </tr>
          </table>
        </div>
        <div class="md-grid-m-b md-grid-b">
          <vue-scroll :ops="ops" @handle-scroll="handleScroll">
            <table>
              <tr v-for="row in rows">
                <td v-for="item in middleDatas" :style="{width:item.width + 'px'}">

                  {{row[item.field]}}
                </td>
              </tr>
            </table>
          </vue-scroll>
        </div>
        <div class="md-grid-r-h md-grid-h" v-if="hasRight">
          <table>
            <tr>
              <td v-for="item in rightDatas">
                {{item.title}}
              </td>
            </tr>
          </table>
        </div>
        <div class="md-grid-r-b md-grid-b" v-if="hasRight">
          <table>
            <tr v-for="row in rows">
              <td v-for="item in rightDatas">
                {{row[item.field]}}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        rows: [
          {
            "id": 10000,
            "username": "user-0",
            "sex": "女",
            "city": "城市-0",
            "sign": "签名-0",
            "experience": 255,
            "logins": 24,
            "wealth": 82830700,
            "classify": "作家",
            "score": 57
          }, {
            "id": 10001,
            "username": "user-1",
            "sex": "男",
            "city": "城市-1",
            "sign": "签名-1",
            "experience": 884,
            "logins": 58,
            "wealth": 64928690,
            "classify": "词人",
            "score": 27
          }, {
            "id": 10002,
            "username": "user-2",
            "sex": "女",
            "city": "城市-2",
            "sign": "签名-2",
            "experience": 650,
            "logins": 77,
            "wealth": 6298078,
            "classify": "酱油",
            "score": 31
          }, {
            "id": 10003,
            "username": "user-3",
            "sex": "女",
            "city": "城市-3",
            "sign": "签名-3",
            "experience": 362,
            "logins": 157,
            "wealth": 37117017,
            "classify": "诗人",
            "score": 68
          }, {
            "id": 10004,
            "username": "user-4",
            "sex": "男",
            "city": "城市-4",
            "sign": "签名-4",
            "experience": 807,
            "logins": 51,
            "wealth": 76263262,
            "classify": "作家",
            "score": 6
          }, {
            "id": 10005,
            "username": "user-5",
            "sex": "女",
            "city": "城市-5",
            "sign": "签名-5",
            "experience": 173,
            "logins": 68,
            "wealth": 60344147,
            "classify": "作家",
            "score": 87
          }, {
            "id": 10006,
            "username": "user-6",
            "sex": "女",
            "city": "城市-6",
            "sign": "签名-6",
            "experience": 982,
            "logins": 37,
            "wealth": 57768166,
            "classify": "作家",
            "score": 34
          }, {
            "id": 10007,
            "username": "user-7",
            "sex": "男",
            "city": "城市-7",
            "sign": "签名-7",
            "experience": 727,
            "logins": 150,
            "wealth": 82030578,
            "classify": "作家",
            "score": 28
          }, {
            "id": 10008,
            "username": "user-8",
            "sex": "男",
            "city": "城市-8",
            "sign": "签名-8",
            "experience": 951,
            "logins": 133,
            "wealth": 16503371,
            "classify": "词人",
            "score": 14
          }, {
            "id": 10009,
            "username": "user-9",
            "sex": "女",
            "city": "城市-9",
            "sign": "签名-9",
            "experience": 484,
            "logins": 25,
            "wealth": 86801934,
            "classify": "词人",
            "score": 75
          }

        ],
        cols: [
          {field: 'id', title: 'ID', sort: true, fixed: 'left', width: 180}
          , {field: 'username', title: '用户名', width: 80}
          , {field: 'sex', title: '性别', sort: true, fixed: 'left', width: 80}
          , {field: 'city', title: '城市'}
          , {field: 'sign', title: '签名', width: 180}
          , {field: 'experience', title: '积分', width: 180, sort: true}
          , {field: 'score', title: '评分', sort: true, width: 80}
          , {field: 'classify', title: '职业', width: 80}
          , {field: 'wealth', title: '财富', sort: true, fixed: 'left', width: 80}
        ],
        ops: {
          bar: {
            background: '#ddd',
            opacity: 0.8,
            size: '8px'
          }
        },
        pos: {
          middleHeaderPos: ''
        }
      }
    },
    computed: {
      middleDatas() {
        return this.cols.filter(item => {
          return !item.fixed
        })
      },
      leftDatas() {
        return this.filterFixedData('left')
      },
      rightDatas() {
        return this.filterFixedData('right')
      },
      hasLeft() {
        return this.leftDatas.length ? true : false
      },
      hasRight() {
        return this.rightDatas.length ? true : false
      }
    },
    methods: {
      filterFixedData(pos) {
        return this.cols.filter(item => {
          return item.fixed === pos
        })
      },
      handleScroll(v, h, e) {
        this.$refs.middlHeader.style.left = (this.pos.middleHeaderPos - h.scrollLeft) + 'px'
      },
      getPos(ref) {
        let dom = this.$refs[ref],
          offsetleft = dom.offsetLeft,
          offsetTop = dom.offsetTop
        return {
          offsetleft,
          offsetTop
        }
      }
    },
    mounted() {
      this.pos.middleHeaderPos = this.getPos('middlHeader').offsetleft
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }

  table {
    width: 100%;
    text-align: center; /*文本居中*/
    border-collapse: collapse; /*表格的边框合并，如果相邻，则共用一个边框*/
    border-spacing: 0; /*设置行与单元格边框的间距。当表格边框独立（即border-collapse:separate;）此属性才起作用*/
    table-layout: fixed;
  }

  table td, table th {
    white-space: nowrap;
    text-overflow: ellipsis;
    border: 1px solid #ddd;
    font-size: 14px;
    line-height: 1.5;
    padding: 6px 0;
  }

  .md-grid-wrap {
    position: relative;
    background-color: deepskyblue;
    height: 251px;
    max-width: 800px;
  }

  .md-grid-box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  /*header部分start */
  .md-grid-h {
    position: absolute;
    top: 0;
    height: 30px;
  }

  .md-grid-h table {
    height: 100%;
  }

  .md-grid-l-h {
    left: 0;
    width: 200px;
    background-color: darkorange;
    z-index: 101;
  }

  .md-grid-m-h {
    left: 200px;
    right: 0px;
    overflow: hidden;
    background-color: mediumslateblue;
  }

  .md-grid-r-h {
    right: 0;
    width: 200px;
    background-color: darkorange;
  }

  /*header部分end */

  /*body部分start*/
  .md-grid-b {
    position: absolute;
    top: 30px;
    bottom: 0;
  }

  .md-grid-l-b {
    width: 200px;
    left: 0;
    background-color: gray;
    overflow: hidden;
  }

  .md-grid-m-b {
    left: 200px;
    right: 0px;
    overflow: auto;
    background-color: lightseagreen;
  }

  .md-grid-r-b {
    bottom: 0;
    right: 0;
    width: 200px;
    background-color: gray;
  }

  /*body部分end*/

  /*scrollbar 样式*/
  .mouseEnter .__bar-is-horizontal {
    opacity: 0.8 !important;
  }
</style>
