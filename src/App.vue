<template>
  <div id="app">
    <div class="md-grid-wrap" ref="tableWrap">
      <div class="md-grid-box">
        <div class="md-grid-l-h md-grid-h" v-if="hasLeft">
          <table>
            <tr>
              <th v-for="item in leftDatas">
                {{item.title}}
              </th>
            </tr>
          </table>
        </div>
        <div class="md-grid-l-b md-grid-b" ref="leftBody" v-if="hasLeft">
          <table>
            <tr v-for="row in rows">
              <td v-for="item in leftDatas">
                <div class="md-grid-cell">{{row[item.field]}}</div>
              </td>
            </tr>
            <tr v-for="item in addTr">
              <td v-for="item in leftDatas">&nbsp;</td>
            </tr>
            <tr class="add-tr">
              <td :colspan="leftDatas.length"></td>
            </tr>
          </table>
        </div>
        <div class="md-grid-m-h md-grid-h" ref="middlHeader">
          <table ref="headerTable">
            <tr>
              <th v-for="item in middleDatas" :style="{width:item.width}">
                {{item.title}}
              </th>
            </tr>
          </table>
        </div>
        <div class="md-grid-m-b md-grid-b" ref="middleBody">
          <vue-scroll :ops="ops" @handle-scroll="handleScroll">
            <table ref="middleTable">
              <tr v-for="row in rows">
                <td v-for="item in middleDatas" :style="{width: item.width}">
                  <div class="md-grid-cell">
                    {{row[item.field]}}
                  </div>
                </td>
              </tr>
              <tr v-for="item in addTr">
                <td v-for="item in middleDatas">&nbsp;</td>
              </tr>
              <tr class="add-tr">
                <td :colspan="middleDatas.length"></td>
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
        rows: [{
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
        }, {
          "id": 10010,
          "username": "user-10",
          "sex": "女",
          "city": "城市-10",
          "sign": "签名-10",
          "experience": 1016,
          "logins": 182,
          "wealth": 71294671,
          "classify": "诗人",
          "score": 34
        }, {
          "id": 10011,
          "username": "user-11",
          "sex": "女",
          "city": "城市-11",
          "sign": "签名-11",
          "experience": 492,
          "logins": 107,
          "wealth": 8062783,
          "classify": "诗人",
          "score": 6
        }, {
          "id": 10012,
          "username": "user-12",
          "sex": "女",
          "city": "城市-12",
          "sign": "签名-12",
          "experience": 106,
          "logins": 176,
          "wealth": 42622704,
          "classify": "词人",
          "score": 54
        }, {
          "id": 10013,
          "username": "user-13",
          "sex": "男",
          "city": "城市-13",
          "sign": "签名-13",
          "experience": 1047,
          "logins": 94,
          "wealth": 59508583,
          "classify": "诗人",
          "score": 63
        }, {
          "id": 10014,
          "username": "user-14",
          "sex": "男",
          "city": "城市-14",
          "sign": "签名-14",
          "experience": 873,
          "logins": 116,
          "wealth": 72549912,
          "classify": "词人",
          "score": 8
        }, {
          "id": 10015,
          "username": "user-15",
          "sex": "女",
          "city": "城市-15",
          "sign": "签名-15",
          "experience": 1068,
          "logins": 27,
          "wealth": 52737025,
          "classify": "作家",
          "score": 28
        }, {
          "id": 10016,
          "username": "user-16",
          "sex": "女",
          "city": "城市-16",
          "sign": "签名-16",
          "experience": 862,
          "logins": 168,
          "wealth": 37069775,
          "classify": "酱油",
          "score": 86
        }, {
          "id": 10017,
          "username": "user-17",
          "sex": "女",
          "city": "城市-17",
          "sign": "签名-17",
          "experience": 1060,
          "logins": 187,
          "wealth": 66099525,
          "classify": "作家",
          "score": 69
        }, {
          "id": 10018,
          "username": "user-18",
          "sex": "女",
          "city": "城市-18",
          "sign": "签名-18",
          "experience": 866,
          "logins": 88,
          "wealth": 81722326,
          "classify": "词人",
          "score": 74
        }, {
          "id": 10019,
          "username": "user-19",
          "sex": "女",
          "city": "城市-19",
          "sign": "签名-19",
          "experience": 682,
          "logins": 106,
          "wealth": 68647362,
          "classify": "词人",
          "score": 51
        }, {
          "id": 10020,
          "username": "user-20",
          "sex": "男",
          "city": "城市-20",
          "sign": "签名-20",
          "experience": 770,
          "logins": 24,
          "wealth": 92420248,
          "classify": "诗人",
          "score": 87
        }, {
          "id": 10021,
          "username": "user-21",
          "sex": "男",
          "city": "城市-21",
          "sign": "签名-21",
          "experience": 184,
          "logins": 131,
          "wealth": 71566045,
          "classify": "词人",
          "score": 99
        }, {
          "id": 10022,
          "username": "user-22",
          "sex": "男",
          "city": "城市-22",
          "sign": "签名-22",
          "experience": 739,
          "logins": 152,
          "wealth": 60907929,
          "classify": "作家",
          "score": 18
        }, {
          "id": 10023,
          "username": "user-23",
          "sex": "女",
          "city": "城市-23",
          "sign": "签名-23",
          "experience": 127,
          "logins": 82,
          "wealth": 14765943,
          "classify": "作家",
          "score": 30
        }, {
          "id": 10024,
          "username": "user-24",
          "sex": "女",
          "city": "城市-24",
          "sign": "签名-24",
          "experience": 212,
          "logins": 133,
          "wealth": 59011052,
          "classify": "词人",
          "score": 76
        }, {
          "id": 10025,
          "username": "user-25",
          "sex": "女",
          "city": "城市-25",
          "sign": "签名-25",
          "experience": 938,
          "logins": 182,
          "wealth": 91183097,
          "classify": "作家",
          "score": 69
        }, {
          "id": 10026,
          "username": "user-26",
          "sex": "男",
          "city": "城市-26",
          "sign": "签名-26",
          "experience": 978,
          "logins": 7,
          "wealth": 48008413,
          "classify": "作家",
          "score": 65
        }, {
          "id": 10027,
          "username": "user-27",
          "sex": "女",
          "city": "城市-27",
          "sign": "签名-27",
          "experience": 371,
          "logins": 44,
          "wealth": 64419691,
          "classify": "诗人",
          "score": 60
        }, {
          "id": 10028,
          "username": "user-28",
          "sex": "女",
          "city": "城市-28",
          "sign": "签名-28",
          "experience": 977,
          "logins": 21,
          "wealth": 75935022,
          "classify": "作家",
          "score": 37
        }, {
          "id": 10029,
          "username": "user-29",
          "sex": "男",
          "city": "城市-29",
          "sign": "签名-29",
          "experience": 647,
          "logins": 107,
          "wealth": 97450636,
          "classify": "酱油",
          "score": 27
        }, {
          "id": 10030,
          "username": "user-30",
          "sex": "女",
          "city": "城市-30",
          "sign": "签名-30",
          "experience": 1059,
          "logins": 133,
          "wealth": 51997920,
          "classify": "酱油",
          "score": 32
        }, {
          "id": 10031,
          "username": "user-31",
          "sex": "男",
          "city": "城市-31",
          "sign": "签名-31",
          "experience": 781,
          "logins": 118,
          "wealth": 78891524,
          "classify": "诗人",
          "score": 71
        }, {
          "id": 10032,
          "username": "user-32",
          "sex": "男",
          "city": "城市-32",
          "sign": "签名-32",
          "experience": 268,
          "logins": 106,
          "wealth": 69795269,
          "classify": "酱油",
          "score": 69
        }, {
          "id": 10033,
          "username": "user-33",
          "sex": "女",
          "city": "城市-33",
          "sign": "签名-33",
          "experience": 870,
          "logins": 112,
          "wealth": 9068282,
          "classify": "作家",
          "score": 28
        }, {
          "id": 10034,
          "username": "user-34",
          "sex": "男",
          "city": "城市-34",
          "sign": "签名-34",
          "experience": 809,
          "logins": 45,
          "wealth": 71737208,
          "classify": "酱油",
          "score": 87
        }, {
          "id": 10035,
          "username": "user-35",
          "sex": "女",
          "city": "城市-35",
          "sign": "签名-35",
          "experience": 1074,
          "logins": 191,
          "wealth": 65277624,
          "classify": "酱油",
          "score": 18
        }, {
          "id": 10036,
          "username": "user-36",
          "sex": "女",
          "city": "城市-36",
          "sign": "签名-36",
          "experience": 868,
          "logins": 118,
          "wealth": 72021170,
          "classify": "酱油",
          "score": 43
        }, {
          "id": 10037,
          "username": "user-37",
          "sex": "男",
          "city": "城市-37",
          "sign": "签名-37",
          "experience": 695,
          "logins": 73,
          "wealth": 40285551,
          "classify": "酱油",
          "score": 10
        }, {
          "id": 10038,
          "username": "user-38",
          "sex": "女",
          "city": "城市-38",
          "sign": "签名-38",
          "experience": 221,
          "logins": 11,
          "wealth": 99070607,
          "classify": "作家",
          "score": 90
        }, {
          "id": 10039,
          "username": "user-39",
          "sex": "男",
          "city": "城市-39",
          "sign": "签名-39",
          "experience": 1020,
          "logins": 48,
          "wealth": 69258898,
          "classify": "酱油",
          "score": 52
        }, {
          "id": 10040,
          "username": "user-40",
          "sex": "女",
          "city": "城市-40",
          "sign": "签名-40",
          "experience": 335,
          "logins": 73,
          "wealth": 62101952,
          "classify": "酱油",
          "score": 38
        }, {
          "id": 10041,
          "username": "user-41",
          "sex": "女",
          "city": "城市-41",
          "sign": "签名-41",
          "experience": 448,
          "logins": 129,
          "wealth": 63383512,
          "classify": "词人",
          "score": 78
        }, {
          "id": 10042,
          "username": "user-42",
          "sex": "男",
          "city": "城市-42",
          "sign": "签名-42",
          "experience": 460,
          "logins": 74,
          "wealth": 7339859,
          "classify": "诗人",
          "score": 10
        }, {
          "id": 10043,
          "username": "user-43",
          "sex": "女",
          "city": "城市-43",
          "sign": "签名-43",
          "experience": 430,
          "logins": 159,
          "wealth": 54420618,
          "classify": "诗人",
          "score": 54
        }, {
          "id": 10044,
          "username": "user-44",
          "sex": "男",
          "city": "城市-44",
          "sign": "签名-44",
          "experience": 559,
          "logins": 82,
          "wealth": 826431,
          "classify": "酱油",
          "score": 80
        }, {
          "id": 10045,
          "username": "user-45",
          "sex": "男",
          "city": "城市-45",
          "sign": "签名-45",
          "experience": 239,
          "logins": 45,
          "wealth": 14367095,
          "classify": "酱油",
          "score": 19
        }, {
          "id": 10046,
          "username": "user-46",
          "sex": "女",
          "city": "城市-46",
          "sign": "签名-46",
          "experience": 933,
          "logins": 121,
          "wealth": 654550,
          "classify": "诗人",
          "score": 53
        }, {
          "id": 10047,
          "username": "user-47",
          "sex": "女",
          "city": "城市-47",
          "sign": "签名-47",
          "experience": 426,
          "logins": 68,
          "wealth": 96294496,
          "classify": "作家",
          "score": 9
        }, {
          "id": 10048,
          "username": "user-48",
          "sex": "男",
          "city": "城市-48",
          "sign": "签名-48",
          "experience": 208,
          "logins": 100,
          "wealth": 19384992,
          "classify": "诗人",
          "score": 61
        }, {
          "id": 10049,
          "username": "user-49",
          "sex": "女",
          "city": "城市-49",
          "sign": "签名-49",
          "experience": 615,
          "logins": 142,
          "wealth": 57287276,
          "classify": "词人",
          "score": 69
        }, {
          "id": 10050,
          "username": "user-50",
          "sex": "男",
          "city": "城市-50",
          "sign": "签名-50",
          "experience": 1018,
          "logins": 172,
          "wealth": 46800355,
          "classify": "词人",
          "score": 80
        }, {
          "id": 10051,
          "username": "user-51",
          "sex": "女",
          "city": "城市-51",
          "sign": "签名-51",
          "experience": 803,
          "logins": 36,
          "wealth": 27838200,
          "classify": "词人",
          "score": 64
        }, {
          "id": 10052,
          "username": "user-52",
          "sex": "女",
          "city": "城市-52",
          "sign": "签名-52",
          "experience": 1057,
          "logins": 150,
          "wealth": 72591768,
          "classify": "酱油",
          "score": 50
        }, {
          "id": 10053,
          "username": "user-53",
          "sex": "男",
          "city": "城市-53",
          "sign": "签名-53",
          "experience": 917,
          "logins": 117,
          "wealth": 6647761,
          "classify": "作家",
          "score": 64
        }, {
          "id": 10054,
          "username": "user-54",
          "sex": "男",
          "city": "城市-54",
          "sign": "签名-54",
          "experience": 411,
          "logins": 160,
          "wealth": 10879712,
          "classify": "酱油",
          "score": 5
        }, {
          "id": 10055,
          "username": "user-55",
          "sex": "男",
          "city": "城市-55",
          "sign": "签名-55",
          "experience": 226,
          "logins": 87,
          "wealth": 65794302,
          "classify": "词人",
          "score": 42
        }, {
          "id": 10056,
          "username": "user-56",
          "sex": "男",
          "city": "城市-56",
          "sign": "签名-56",
          "experience": 872,
          "logins": 119,
          "wealth": 96925956,
          "classify": "词人",
          "score": 46
        }, {
          "id": 10057,
          "username": "user-57",
          "sex": "男",
          "city": "城市-57",
          "sign": "签名-57",
          "experience": 328,
          "logins": 10,
          "wealth": 84821519,
          "classify": "诗人",
          "score": 59
        }, {
          "id": 10058,
          "username": "user-58",
          "sex": "女",
          "city": "城市-58",
          "sign": "签名-58",
          "experience": 293,
          "logins": 119,
          "wealth": 58668875,
          "classify": "诗人",
          "score": 49
        }, {
          "id": 10059,
          "username": "user-59",
          "sex": "男",
          "city": "城市-59",
          "sign": "签名-59",
          "experience": 824,
          "logins": 189,
          "wealth": 99894924,
          "classify": "词人",
          "score": 6
        }, {
          "id": 10060,
          "username": "user-60",
          "sex": "男",
          "city": "城市-60",
          "sign": "签名-60",
          "experience": 259,
          "logins": 135,
          "wealth": 93176845,
          "classify": "作家",
          "score": 21
        }, {
          "id": 10061,
          "username": "user-61",
          "sex": "男",
          "city": "城市-61",
          "sign": "签名-61",
          "experience": 632,
          "logins": 21,
          "wealth": 20696842,
          "classify": "酱油",
          "score": 51
        }, {
          "id": 10062,
          "username": "user-62",
          "sex": "男",
          "city": "城市-62",
          "sign": "签名-62",
          "experience": 748,
          "logins": 61,
          "wealth": 25171658,
          "classify": "作家",
          "score": 66
        }, {
          "id": 10063,
          "username": "user-63",
          "sex": "男",
          "city": "城市-63",
          "sign": "签名-63",
          "experience": 303,
          "logins": 21,
          "wealth": 95246194,
          "classify": "酱油",
          "score": 94
        }, {
          "id": 10064,
          "username": "user-64",
          "sex": "男",
          "city": "城市-64",
          "sign": "签名-64",
          "experience": 336,
          "logins": 56,
          "wealth": 42545726,
          "classify": "酱油",
          "score": 68
        }, {
          "id": 10065,
          "username": "user-65",
          "sex": "男",
          "city": "城市-65",
          "sign": "签名-65",
          "experience": 623,
          "logins": 183,
          "wealth": 62547311,
          "classify": "酱油",
          "score": 5
        }, {
          "id": 10066,
          "username": "user-66",
          "sex": "男",
          "city": "城市-66",
          "sign": "签名-66",
          "experience": 493,
          "logins": 148,
          "wealth": 29140549,
          "classify": "作家",
          "score": 89
        }, {
          "id": 10067,
          "username": "user-67",
          "sex": "男",
          "city": "城市-67",
          "sign": "签名-67",
          "experience": 1057,
          "logins": 171,
          "wealth": 18015695,
          "classify": "作家",
          "score": 45
        }, {
          "id": 10068,
          "username": "user-68",
          "sex": "男",
          "city": "城市-68",
          "sign": "签名-68",
          "experience": 605,
          "logins": 132,
          "wealth": 85332856,
          "classify": "诗人",
          "score": 56
        }, {
          "id": 10069,
          "username": "user-69",
          "sex": "女",
          "city": "城市-69",
          "sign": "签名-69",
          "experience": 805,
          "logins": 116,
          "wealth": 5561207,
          "classify": "作家",
          "score": 81
        }, {
          "id": 10070,
          "username": "user-70",
          "sex": "女",
          "city": "城市-70",
          "sign": "签名-70",
          "experience": 842,
          "logins": 17,
          "wealth": 19467936,
          "classify": "酱油",
          "score": 53
        }, {
          "id": 10071,
          "username": "user-71",
          "sex": "女",
          "city": "城市-71",
          "sign": "签名-71",
          "experience": 461,
          "logins": 163,
          "wealth": 39700624,
          "classify": "诗人",
          "score": 88
        }, {
          "id": 10072,
          "username": "user-72",
          "sex": "女",
          "city": "城市-72",
          "sign": "签名-72",
          "experience": 556,
          "logins": 25,
          "wealth": 95312752,
          "classify": "词人",
          "score": 42
        }, {
          "id": 10073,
          "username": "user-73",
          "sex": "男",
          "city": "城市-73",
          "sign": "签名-73",
          "experience": 329,
          "logins": 112,
          "wealth": 27679369,
          "classify": "词人",
          "score": 21
        }, {
          "id": 10074,
          "username": "user-74",
          "sex": "女",
          "city": "城市-74",
          "sign": "签名-74",
          "experience": 958,
          "logins": 148,
          "wealth": 37494604,
          "classify": "词人",
          "score": 22
        }, {
          "id": 10075,
          "username": "user-75",
          "sex": "男",
          "city": "城市-75",
          "sign": "签名-75",
          "experience": 730,
          "logins": 31,
          "wealth": 12860757,
          "classify": "词人",
          "score": 5
        }, {
          "id": 10076,
          "username": "user-76",
          "sex": "男",
          "city": "城市-76",
          "sign": "签名-76",
          "experience": 756,
          "logins": 177,
          "wealth": 21938870,
          "classify": "诗人",
          "score": 88
        }, {
          "id": 10077,
          "username": "user-77",
          "sex": "男",
          "city": "城市-77",
          "sign": "签名-77",
          "experience": 291,
          "logins": 72,
          "wealth": 39597349,
          "classify": "作家",
          "score": 52
        }, {
          "id": 10078,
          "username": "user-78",
          "sex": "女",
          "city": "城市-78",
          "sign": "签名-78",
          "experience": 899,
          "logins": 38,
          "wealth": 41681274,
          "classify": "酱油",
          "score": 85
        }, {
          "id": 10079,
          "username": "user-79",
          "sex": "女",
          "city": "城市-79",
          "sign": "签名-79",
          "experience": 833,
          "logins": 161,
          "wealth": 27133036,
          "classify": "酱油",
          "score": 88
        }],
        cols: [
          {field: 'id', title: 'ID', sort: true, fixed: 'left', width: '10px'}
          , {field: 'username', title: '用户名', width: '10px'}
          , {field: 'sex', title: '性别', sort: true, width: '10px'}
          , {field: 'city', title: '城市', width: '10px'}
          , {field: 'sign', title: '签名', width: '10px'}
          , {field: 'experience', title: '积分', sort: true, width: '102px'}
          , {field: 'score', title: '评分', sort: true, width: '102px'}
          , {field: 'classify', title: '职业', width: '108px'}
          , {field: 'wealth', title: '财富', sort: true, fixed: 'left', width: '10px'}
        ],
        ops: {
          bar: {
            background: '#999',
            opacity: 0.8,
            size: '8px',
            keepShow: true
          }
        },
        pos: {
          middleHeaderPosX: '',
          leftBodyPosY: ''
        },
        size: {
          middleHeaderHeight: '',
          middleBodyHeight: ''
        },
        height: '280px',
        addTr: 0
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
      },
      isAllSet() {
        return this.cols.every(res => {
          return res.width
        })
      }
    },
    methods: {
      filterFixedData(pos) {
        return this.cols.filter(item => {
          return item.fixed === pos
        })
      },
      handleScroll(v, h, e) {
        if (this.myBrowser() === 'FF') {
          this.$refs.middlHeader.style.left = (this.pos.middleHeaderPosX - h.scrollLeft - 1) + 'px'
          this.$refs.leftBody.style.top = (this.pos.leftBodyPosY - v.scrollTop - 1) + 'px'
        } else {
          this.$refs.middlHeader.style.left = (this.pos.middleHeaderPosX - h.scrollLeft) + 'px'
          this.$refs.leftBody.style.top = (this.pos.leftBodyPosY - v.scrollTop) + 'px'
        }


      },
      getOffset(ref) {
        let dom = this.$refs[ref],
          offsetleft = dom.offsetLeft,
          offsetTop = dom.offsetTop,
          offsetHeight = dom.offsetHeight,
          offsetWidth = dom.offsetWidth
        return {
          offsetleft,
          offsetTop,
          offsetHeight,
          offsetWidth
        }
      },
      myBrowser() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1
        if (isOpera) { //判断是否Opera浏览器
          return "Opera"
        }
        if (userAgent.indexOf("Firefox") > -1) { //判断是否Firefox浏览器
          return "FF"
        }
        if (userAgent.indexOf("Chrome") > -1) {
          return "Chrome"
        }
        if (userAgent.indexOf("Safari") > -1) { //判断是否Safari浏览器
          return "Safari"
        }
        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) { //判断是否IE浏览器
          return "IE"
        }
      }
    },
    mounted() {
      this.pos.middleHeaderPosX = this.getOffset('middlHeader').offsetleft
      this.pos.leftBodyPosY = this.getOffset('leftBody').offsetTop
      this.size.middleBodyHeight = this.getOffset('middleTable').offsetHeight
      this.size.middleHeaderHeight = this.getOffset('headerTable').offsetHeight
      this.$refs.tableWrap.style.height = this.size.middleBodyHeight + this.size.middleHeaderHeight + 'px'
      if (this.height) {
        this.$refs.tableWrap.style.height = this.height
      }
      let singleTrHeight = this.size.middleBodyHeight / (this.rows.length + 1),
        middleHeaderHeight = this.size.middleHeaderHeight,
        middleBodyWidth = this.getOffset('middleBody').offsetWidth

      if (parseInt(this.height) > this.size.middleBodyHeight) {
        let addNum = (parseInt(this.height) - this.size.middleBodyHeight - middleHeaderHeight) / singleTrHeight
        this.addTr = Math.ceil(addNum)
      }
      if (this.isAllSet) {
        let customMiddleBodyWidth = 0;
        this.cols.forEach(item => {
          customMiddleBodyWidth += parseInt(item.width)
        })
        if (middleBodyWidth > customMiddleBodyWidth) {

        }
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: "Microsoft YaHei UI";
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
    font-size: 16px;
    padding: 6px 0;
    min-height: 20px;
  }

  table th {
    line-height: 0;
  }

  .md-grid-wrap {
    position: relative;
    /*height: 251px;*/
  }

  .md-grid-box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid #ddd;
    overflow: hidden;
  }

  /*header部分start */
  .md-grid-h {
    position: absolute;
    top: 0;
    height: 30px;
    overflow: hidden;
    background-color: #f5f5f5;
  }

  .md-grid-h table {
    height: 100%;
    position: absolute;
    top: -1px;
  }

  .md-grid-l-h {
    left: 0;
    width: 200px;
    z-index: 101;
  }

  .md-grid-m-h {
    left: 199px;
    right: -1px;
  }

  .md-grid-r-h {
    right: 0;
    width: 200px;
  }

  /*header部分end */

  /*body部分start*/
  .md-grid-b {
    position: absolute;
    top: 29px;
    bottom: 0;
  }

  .md-grid-b table tr:nth-last-child(2) td {
    border-bottom: none;
  }

  .md-grid-l-b {
    width: 200px;
    left: 0;
    overflow-y: hidden;
  }

  .md-grid-m-b {
    left: 199px;
    right: -1px;
    overflow: auto;
  }

  .md-grid-r-b {
    bottom: 0;
    right: 0;
    width: 200px;
  }

  /*body部分end*/

  /*scrollbar 样式*/
  /*.mouseEnter .__bar-is-horizontal {*/
  /*opacity: 0.8 !important;*/
  /*}*/
  .add-tr {
    display: none;
    height: 10px;
  }

  .add-tr td {
    padding: 0;
  }

  .hasHBar {
    box-shadow: inset 4px 0 10px -5px rgba(0, 0, 0, .3);
  }

  .hasVBar.hasHBar .add-tr {
    display: block;
  }

  .md-grid-cell {
    padding: 0 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
