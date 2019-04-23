<template>
  <div id="app">
    <div style="position: relative;">
      <div class="wapper">
        <!--固定在左侧-->
        <div class="wapper-left" v-if="fixedLeftDatas.length">
          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>性别</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="row in rows">
              <td v-for="fixedData in fixedLeftDatas">
                <div :style="{width:fixedData.width+'px',padding:'6px'}">{{row[fixedData.field]}}</div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="wapper-main">
          <table>
            <thead>
            <tr>
              <th v-for="col in cols">{{col.title}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="row in rows">
              <td v-for="col in cols" :style="{width:col.width+'px'}">
                <div :style="{width:col.width+'px',padding:'6px'}">{{row[col.field]}}</div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <!--固定在右侧-->
        <div class="wapper-right" v-if="fixedRightDatas.length">
          <table width="100">
            <thead>
            <tr>
              <th>Month</th>
              <th>Savings</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>January</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>February</td>
              <td>$80</td>
            </tr>
            </tbody>
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
          {field: 'id', title: 'ID', width: 80, sort: true, fixed: 'left'}
          , {field: 'username', title: '用户名', width: 80}
          , {field: 'sex', title: '性别', width: 80, sort: true,fixed: 'left'}
          , {field: 'city', title: '城市', width: 80}
          , {field: 'sign', title: '签名', width: 177}
          , {field: 'experience', title: '积分', width: 80, sort: true}
          , {field: 'score', title: '评分', width: 80, sort: true}
          , {field: 'classify', title: '职业', width: 80}
          , {field: 'wealth', title: '财富', width: 135, sort: true}
        ]
      }
    },
    computed: {
      fixedLeftDatas() {
        return this.filterFixedData('left')
      },
      fixedRightDatas() {
        return this.filterFixedData('right')
      }
    },
    methods: {
      filterFixedData(pos) {
        return this.cols.filter(item => {
          return item.fixed === pos
        })
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  table {
    width: 100%;
    text-align: center; /*文本居中*/
    border-collapse: collapse; /*表格的边框合并，如果相邻，则共用一个边框*/
    border-spacing: 0; /*设置行与单元格边框的间距。当表格边框独立（即border-collapse:separate;）此属性才起作用*/
    background-color: #fff;
  }

  thead {
    background-color: #eee;
  }

  table td, table th {
    word-break: break-all; /*允许在字内换行,即单词可分*/
    word-wrap: break-word; /*允许长单词或URL地址换行*/
    border: 1px solid #ddd;
    font-size: 14px;
    line-height: 1.5;
  }

  .wapper {
    background-color: skyblue;
    width: 100%;
    min-width: 600px;
    overflow-x: auto;
  }
  .wapper-left {
    width: 300px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    box-shadow: 0 -1px 8px rgba(0,0,0,.08);
  }
  .wapper-main table{
    min-width: 1000px;
  }
  .wapper-right {
    width: 300px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
  }

</style>
