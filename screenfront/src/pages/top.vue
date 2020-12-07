<template>
    <div class="top">
        <h1><span></span>西安市农村污水处理管理中心</h1>
        <span class="date">
            {{ nowDate }} {{ weekdays }}<i class="light"></i>
        </span>
    </div>
</template>

<script>
const timestamp = require("time-stamp");
var weekDay = require("weekday");

export default {
    data() {
        return {
            nowDate: timestamp.utc("YYYY/MM/DD"),
            weekdays: "",
        };
    },
    created() {
        var nowWeek = weekDay();
        var weeks = "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday".split(
            ","
        );

        var index = weeks.indexOf(nowWeek);
        this.weekdays = [
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
            "星期日",
        ][index];
    },
};
</script>

<style lang="less" scoped>
.top {
    width: 100%;
    height: 68px;
    line-height: 68px;
    background: #2a2c3b;
    position: relative;
    text-align: center;
    h1 {
        font-size: 20px;
        letter-spacing: 5px;
        font-weight: 500;
        width: 100%;
        span {
            width: 31px;
            height: 31px;
            background: url(../assets/img/logo.png) no-repeat;
            background-size: contain;
            display: inline-block;
            vertical-align: -8px;
            margin-right: 10px;
        }
    }
    .date {
        float: right;
        font-size: 14px;
        letter-spacing: 3px;
        position: absolute;
        right: 15px;
        top: 0px;
    }
    .light {
        width: 39px;
        height: 23px;
        background: url(../assets/img/top_right_ma.gif) no-repeat;
        background-size: contain;
        display: inline-block;
        margin-left: 10px;
        top: 5px;
        position: relative;
    }
}
</style>

