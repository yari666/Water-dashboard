<template>
    <div class="main box">
        <ul class="tab">
            <li
                v-for="(item, index) in tabData"
                :key="index"
                @click="changeTab(index)"
                :class="tabIndex == index ? 'active' : ''"
            >
                {{ item }}
            </li>
        </ul>

        <div class="statis_box">
            <div class="statis_tab">
                <ul>
                    <li
                        v-for="(item, index) in dateTab"
                        :key="index"
                        @click="changeDateTab(index)"
                        class="warn"
                        :class="dateTabIndex == index ? 'active' : ''"
                    >
                        {{ item }}
                    </li>
                </ul>
            </div>
            <div
                class="echartcon"
                id="waterEchart"
                v-show="tabIndex == 0"
                :style="{ width: echartWidth + 'px', height: '250px' }"
            ></div>
            <div
                class="echartcon"
                id="singleWaterEchart"
                v-show="tabIndex == 1"
                :style="{ width: echartWidth + 'px', height: '250px' }"
            ></div>
            <div
                class="echartcon"
                id="energyEchart"
                v-show="tabIndex == 2"
                :style="{ width: echartWidth + 'px', height: '250px' }"
            ></div>
            <div
                class="echartcon"
                id="sewageEchart"
                v-show="tabIndex == 3"
                :style="{ width: echartWidth + 'px', height: '250px' }"
            ></div>
        </div>
    </div>
</template>

<script>
var echarts = require("echarts");

export default {
    data() {
        return {
            tabData: [
                "处理水量健康表",
                "能耗健康表",
                "单水能耗健康表",
                "污水站健康表",
            ],
            tabIndex: 0,
            dateTab: ["月统计", "年统计"],
            dateTabIndex: 0,

            echartWidth: parseInt(window.innerWidth) - 470,

            dataList: [
                {
                    xname: [],
                    list: [[], [], [], []],
                },
                {
                    xname: [],
                    list: [[], [], [], []],
                },
            ],
        };
    },

    mounted() {
        this.$nextTick(() => {
            this.getData();
        });
    },
    methods: {
        // 生成n个随机数
        getRandom(n, m) {
            var arr = [];
            for (let i = 0; i < n; i++) {
                arr.push(parseInt(Math.random() * m));
            }

            return arr;
        },
        getData() {
            for (let i = 1; i <= 31; i++) {
                this.dataList[0].xname.push(i);

                if (i <= 12) this.dataList[1].xname.push(i);

                for (let j = 0; j < 4; j++) {
                    this.dataList[0].list[j] = this.getRandom(31, 100);
                    if (i <= 12)
                        this.dataList[1].list[j] = this.getRandom(12, 100);
                }
            }

            this.waterEchart();
        },

        // 切换表
        changeTab(index) {
            this.tabIndex = index;
            this.dateTabIndex = 0;

            this.switchTab();
        },

        // 切换日期
        changeDateTab(index) {
            this.dateTabIndex = index;
            this.switchTab();
        },

        switchTab() {
            switch (this.tabIndex) {
                case 0:
                    this.waterEchart();
                    break;
                case 1:
                    this.singleWaterEchart();
                    break;
                case 2:
                    this.energyEchart();
                    break;
                case 3:
                    this.sewageEchart();
                    break;
            }
        },

        // 处理水量健康表
        waterEchart() {
            var myChart = echarts.init(document.getElementById("waterEchart"));

            var option = {
                color: ["#3264C7"],
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function (params) {
                        var relVal = params[0].name;
                        for (var i = 0, l = params.length; i < l; i++) {
                            relVal +=
                                "<br/>" +
                                params[i].marker +
                                params[i].seriesName +
                                " : " +
                                params[i].value +
                                "万m³";
                        }
                        return relVal;
                    },
                },
                grid: {
                    left: 40,
                    top: 30,
                    right: 30,
                    bottom: 20,
                },
                xAxis: {
                    data: this.dataList[this.dateTabIndex].xname,
                    axisTick: {
                        alignWithLabel: true,
                    },
                    nameTextStyle: {
                        color: "#8A8C98",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#82B6E2",
                        },
                    },
                },
                yAxis: {
                    type: "value",
                    nameTextStyle: {
                        color: "#8A8C98",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#8A8C98",
                        },
                    },
                },
                series: [
                    {
                        name: "总出水量",
                        type: "bar",
                        barWidth: "50%",
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "#0C8FDD",
                                    },
                                    {
                                        offset: 1,
                                        color: "#1EC8CD",
                                    },
                                ]
                            ),
                        },
                        data: this.dataList[this.dateTabIndex].list[0],
                    },
                ],
            };

            myChart.setOption(option);
        },

        // 单水能耗健康表
        singleWaterEchart() {
            var myChart = echarts.init(
                document.getElementById("singleWaterEchart")
            );

            var option = {
                color: ["#3264C7"],
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function (params) {
                        var relVal = params[0].name;
                        for (var i = 0, l = params.length; i < l; i++) {
                            relVal +=
                                "<br/>" +
                                params[i].marker +
                                params[i].seriesName +
                                " : " +
                                params[i].value +
                                "万m³";
                        }
                        return relVal;
                    },
                },
                grid: {
                    left: 40,
                    top: 30,
                    right: 10,
                    bottom: 30,
                },
                xAxis: {
                    data: this.dataList[this.dateTabIndex].xname,
                    axisTick: {
                        alignWithLabel: true,
                    },
                    nameTextStyle: {
                        color: "#8A8C98",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#82B6E2",
                        },
                    },
                },
                yAxis: {
                    type: "value",
                    nameTextStyle: {
                        color: "#8A8C98",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#8A8C98",
                        },
                    },
                },
                series: [
                    {
                        name: "总出水量",
                        type: "bar",
                        barWidth: "50%",
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "#0C8FDD",
                                    },
                                    {
                                        offset: 1,
                                        color: "#1EC8CD",
                                    },
                                ]
                            ),
                        },
                        data: this.dataList[this.dateTabIndex].list[0],
                    },
                ],
            };

            myChart.setOption(option);
        },

        // 能耗健康表
        energyEchart() {
            var myChart = echarts.init(document.getElementById("energyEchart"));

            var option = {
                color: ["#3264C7"],
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function (params) {
                        var relVal = params[0].name;
                        for (var i = 0, l = params.length; i < l; i++) {
                            relVal +=
                                "<br/>" +
                                params[i].marker +
                                params[i].seriesName +
                                " : " +
                                params[i].value +
                                "万m³";
                        }
                        return relVal;
                    },
                },
                grid: {
                    left: 40,
                    top: 30,
                    right: 30,
                    bottom: 20,
                },
                xAxis: {
                    data: this.dataList[this.dateTabIndex].xname,
                    axisTick: {
                        alignWithLabel: true,
                    },
                    nameTextStyle: {
                        color: "#8A8C98",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#82B6E2",
                        },
                    },
                },
                yAxis: {
                    type: "value",
                    nameTextStyle: {
                        color: "#8A8C98",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#8A8C98",
                        },
                    },
                },
                series: [
                    {
                        name: "总出水量",
                        type: "bar",
                        barWidth: "50%",
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "#0C8FDD",
                                    },
                                    {
                                        offset: 1,
                                        color: "#1EC8CD",
                                    },
                                ]
                            ),
                        },
                        data: this.dataList[this.dateTabIndex].list[0],
                    },
                ],
            };

            myChart.setOption(option);
        },

        // 污水站健康表
        sewageEchart() {
            this.flchart = echarts.init(
                document.getElementById("sewageEchart")
            );

            var option = {
                color: ["#3264C7"],
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                    },
                },
                grid: {
                    left: 40,
                    top: 30,
                    right: 30,
                    bottom: 20,
                },
                xAxis: {
                    data: this.dataList[this.dateTabIndex].xname,
                    axisTick: {
                        alignWithLabel: true,
                    },
                    nameTextStyle: {
                        color: "#8A8C98",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#82B6E2",
                        },
                    },
                },
                yAxis: {
                    type: "value",
                    nameTextStyle: {
                        color: "#8A8C98",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#8A8C98",
                        },
                    },
                },
                series: [
                    {
                        name: "在线",
                        data: this.dataList[this.dateTabIndex].list[0],
                        type: "line",
                        smooth: true,
                        symbol: "circle",
                        color: "#30D7FD",
                        symbolSize: 2,
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "rgba(112, 227, 254, 1)",
                                    },
                                    {
                                        offset: 0.5,
                                        color: "rgba(0, 165, 255, 0.21)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(32, 175, 255, 0)",
                                    },
                                ]
                            ),
                        },
                    },
                    {
                        name: "故障",
                        data: this.dataList[this.dateTabIndex].list[1],
                        type: "line",
                        smooth: true,
                        symbol: "circle",
                        symbolSize: 2,
                        color: "#F137B0",
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "rgba(255, 67, 189, 0.98)",
                                    },
                                    {
                                        offset: 0.5,
                                        color: "rgba(255, 101, 234, 0.22)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(128, 18, 113, 0)",
                                    },
                                ]
                            ),
                        },
                    },
                    {
                        name: "异常",
                        data: this.dataList[this.dateTabIndex].list[2],
                        type: "line",
                        smooth: true,
                        symbol: "circle",
                        symbolSize: 2,
                        color: "#FFC636",
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "rgba(255, 210, 97, 1)",
                                    },
                                    {
                                        offset: 0.25,
                                        color: "rgba(255, 206, 82, 0.8)",
                                    },
                                    {
                                        offset: 0.5,
                                        color: "rgba(255, 179, 0, 0.14)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(245, 245, 245, 0)",
                                    },
                                ]
                            ),
                        },
                    },
                    {
                        name: "离线",
                        data: this.dataList[this.dateTabIndex].list[3],
                        type: "line",
                        smooth: true,
                        symbol: "circle",
                        symbolSize: 2,
                        color: "#B5B5B5",
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "rgba(223, 221, 221, 0.98)",
                                    },
                                    {
                                        offset: 0.5,
                                        color: "rgba(202, 202, 202, 0.11)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(197, 197, 197, 0)",
                                    },
                                ]
                            ),
                        },
                    },
                ],
            };

            this.flchart.setOption(option);
        },
    },
};
</script>

<style lang="less" scoped>
.main {
    position: relative;
    margin-top: 16px;
    padding: 15px 22px;
    font-size: 12px;
    .tab {
        height: 28px;
        line-height: 28px;
        li {
            float: left;
            padding: 0 20px;

            color: #aaaaaa;
            cursor: pointer;
            &.active {
                background: linear-gradient(270deg, #10d8d4 0%, #0c91dc 100%);
                border-radius: 20px;
                color: #fff;
            }
        }
    }

    .statis_tab {
        position: absolute;
        right: 22px;
        top: 20px;
        ul {
            height: 21px;
            line-height: 21px;
            border: 1px solid #47485c;
            border-radius: 11px;
            overflow: hidden;
            cursor: pointer;
            li {
                float: left;
                padding: 0 15px;
                color: #fbfcfd;
                box-sizing: border-box;
                &.active {
                    background: #47485c;
                    border-radius: 11px;
                    padding: 0 20px;
                }
            }
        }
    }
    .echartcon {
        width: 100%;
    }
}
</style>