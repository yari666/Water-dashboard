<template>
    <div class="bottom">
        <div
            class="part bg1"
            :class="showStatis ? '' : 'fadeout'"
            v-show="showStatis"
        >
            <div class="p10">
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
                        <span class="year">2020</span>
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
                        id="waterEchart"
                        v-show="tabIndex == 0"
                        :style="{ width: statisWidth + 'px', height: '250px' }"
                    ></div>
                    <div
                        id="singleWaterEchart"
                        v-show="tabIndex == 1"
                        :style="{ width: statisWidth + 'px', height: '250px' }"
                    ></div>
                    <div
                        id="energyEchart"
                        v-show="tabIndex == 2"
                        :style="{ width: statisWidth + 'px', height: '250px' }"
                    ></div>
                    <div
                        id="statis"
                        v-show="tabIndex == 3"
                        :style="{ width: statisWidth + 'px', height: '250px' }"
                    ></div>
                </div>
            </div>
        </div>

        <div class="part box" v-show="showMachine" ref="machine">
            <div class="close" @click="closeMachine"></div>
            <ul class="tab">
                <li
                    class="warn"
                    :class="machineIndex == index ? 'active' : ''"
                    v-for="(item, index) in machineData"
                    :key="index"
                    @click="changeMachineTab(index)"
                >
                    {{ item.name }}
                </li>
            </ul>
            <div class="con">
                <div class="con1">
                    <div class="fl">
                        <div class="title">
                            设备模块【{{
                                machineData[machineIndex].list.length
                            }}】
                        </div>
                        <ul>
                            <li
                                class="menu"
                                v-for="(item, index) in machineData[
                                    machineIndex
                                ].list"
                                :key="index"
                            >
                                {{ item.name }}
                            </li>
                        </ul>
                    </div>
                    <div class="fr">
                        <div class="title">设备控制台参数【20】</div>
                        <table cellspadding="0" cellspacing="0" border="0">
                            <tr>
                                <td>
                                    清水池低液位浮球
                                    <span>低</span>
                                </td>
                                <td>
                                    中间池超高液位浮球
                                    <span>低</span>
                                </td>
                                <td>
                                    DO（溶解氧）
                                    <span>0mg/L</span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    中间池低液位浮球
                                    <span>低</span>
                                </td>
                                <td>
                                    砂滤过滤状态
                                    <span>-</span>
                                </td>
                                <td>
                                    清水池低液位浮球
                                    <span>0mg/L</span>
                                    <img src="../assets/img/12.png" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    砂滤正洗状态
                                    <span>-</span>
                                </td>
                                <td>
                                    砂滤逆洗状态
                                    <span>-</span>
                                </td>
                                <td>
                                    中间池低液位浮球
                                    <span>低</span>
                                    <img src="../assets/img/12.png" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    碳源加药桶低液位浮球
                                    <span>低</span>
                                </td>
                                <td>
                                    总有功功率
                                    <span>0W</span>
                                </td>
                                <td>
                                    砂滤正洗状态
                                    <span>-</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    当前总有功电能
                                    <span>0kW/h</span>
                                </td>
                                <td>
                                    PAC加药桶低液位浮球
                                    <span>低</span>
                                </td>
                                <td>
                                    碳源加药桶低液位浮球
                                    <span>低</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="part box" v-show="showRepair" ref="repair">
            <div class="close" @click="closeRepair"></div>
            <div class="tab">
                <ul>
                    <li class="active">{{ repairName }}【20】</li>
                </ul>
            </div>
            <div class="con3">
                <div class="fl list">
                    <ul>
                        <li>
                            XXXX技术工程师 对 污水站/设备 完成了维修工单
                            <span>2020/01/01</span>
                        </li>
                        <li>
                            XXXX技术工程师 对 污水站/设备 完成了维修工单
                            <span>2020/01/01</span>
                        </li>
                        <li>
                            XXXX技术工程师 对 污水站/设备 完成了维修工单
                            <span>2020/01/01</span>
                        </li>
                        <li>
                            XXXX技术工程师 对 污水站/设备 完成了维修工单
                            <span>2020/01/01</span>
                        </li>
                        <li>
                            XXXX技术工程师 对 污水站/设备 完成了维修工单
                            <span>2020/01/01</span>
                        </li>
                        <li>
                            XXXX技术工程师 对 污水站/设备 完成了维修工单
                            <span>2020/01/01</span>
                        </li>
                    </ul>
                </div>
                <div class="fr">
                    <div class="title1">每周问题类型排名TOP5</div>
                    <div class="problem" id="problem"></div>
                </div>
            </div>
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
                "单水能耗健康表",
                "能耗健康表",
                "污水站健康表",
            ],
            tabIndex: 0,
            dateTab: ["年统计", "月统计"],
            dateTabIndex: 0,

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

            machineIndex: 0,
            machineData: [
                {
                    name: "设备1",
                    list: [
                        {
                            name: "设备1  -  模块A",
                        },
                        {
                            name: "设备1  -  模块B",
                        },
                        {
                            name: "设备1  -  模块C",
                        },
                        {
                            name: "设备1  -  模块D",
                        },
                        {
                            name: "设备1  -  模块E",
                        },
                        {
                            name: "设备1  -  模块F",
                        },
                    ],
                },
                {
                    name: "设备2",
                    list: [
                        {
                            name: "设备2  -  模块A",
                        },
                        {
                            name: "设备2  -  模块B",
                        },
                        {
                            name: "设备2  -  模块C",
                        },
                        {
                            name: "设备2  -  模块D",
                        },
                        {
                            name: "设备2  -  模块E",
                        },
                        {
                            name: "设备2  -  模块F",
                        },
                    ],
                },
            ],
        };
    },
    props: [
        "statisWidth",
        "showStatis",
        "showMachine",
        "showRepair",
        "sewageName",
        "repairName",
    ],
    created() {},
    // watch: {
    //     statisWidth() {
    //         let statisChart = echarts.init(document.getElementById("statis"));
    //         statisChart.resize();
    //     },
    // },
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
                this.dataList[1].xname.push(i + "日");

                if (i <= 12) this.dataList[0].xname.push(i + "月");

                for (let j = 0; j < 4; j++) {
                    this.dataList[1].list[j] = this.getRandom(31, 100);
                    if (i <= 12)
                        this.dataList[0].list[j] = this.getRandom(12, 100);
                }
            }

            this.waterEchart();
            this.echart1();
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
                    this.echart();
                    break;
            }
        },

        // 切换设备
        changeMachineTab(index) {
            this.machineIndex = index;
        },
        echart() {
            let statisChart = echarts.init(document.getElementById("statis"));

            let option = {
                tooltip: {
                    trigger: "axis",
                },
                grid: {
                    left: 40,
                    top: 30,
                    right: 60,
                    bottom: 30,
                },
                xAxis: {
                    type: "category",
                    data: this.dataList[this.dateTabIndex].xname,
                    nameTextStyle: {
                        color: "#fff",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#07a9e0",
                        },
                    },
                },
                yAxis: {
                    type: "value",
                    show: true,
                    axisLine: {
                        lineStyle: {
                            color: "#07a9e0",
                        },
                    },
                    // 控制网格线是否显示
                    splitLine: {
                        show: false,
                    },
                },
                series: [
                    {
                        name: "在线",
                        data: this.dataList[this.dateTabIndex].list[0],
                        type: "line",
                        smooth: true,
                        color: "#00bd42",
                        lineStyle: {
                            shadowColor: "#00bd42",
                            shadowBlur: 5,
                            shadowOffsetY: 1.5,
                        },
                    },
                    {
                        name: "故障",
                        data: this.dataList[this.dateTabIndex].list[1],
                        type: "line",
                        smooth: true,
                        color: "#e5486f",
                        lineStyle: {
                            shadowColor: "#e5486f",
                            shadowBlur: 5,
                            shadowOffsetY: 1.5,
                        },
                    },
                    {
                        name: "异常",
                        data: this.dataList[this.dateTabIndex].list[2],
                        type: "line",
                        smooth: true,
                        color: "#ffbf00",
                        lineStyle: {
                            shadowColor: "#ffbf00",
                            shadowBlur: 5,
                            shadowOffsetY: 1.5,
                        },
                    },
                    {
                        name: "离线",
                        data: this.dataList[this.dateTabIndex].list[3],
                        type: "line",
                        smooth: true,
                        color: "#809bb7",
                        lineStyle: {
                            shadowColor: "#809bb7",
                            shadowBlur: 5,
                            shadowOffsetY: 1.5,
                        },
                    },
                ],
            };

            statisChart.setOption(option);
        },
        echart1() {
            let problemChart = echarts.init(document.getElementById("problem"));

            // 指定图表的配置项和数据
            var option = {
                grid: {
                    left: 60,
                    top: 10,
                    right: 40,
                    bottom: 20,
                },
                toolbox: {
                    show: true,
                },
                calculable: true,
                xAxis: [
                    {
                        type: "value",
                        show: false,
                        // 控制网格线是否显示
                        splitLine: {
                            show: false,
                        },
                    },
                ],
                yAxis: [
                    {
                        type: "category",
                        offset: 0,
                        data: [
                            {
                                value: "耗材更换",
                                textStyle: {
                                    color: "#fff",
                                },
                            },
                            {
                                value: "电机故障",
                                textStyle: {
                                    color: "#fff",
                                },
                            },
                            {
                                value: "电压问题",
                                textStyle: {
                                    color: "#fff",
                                },
                            },
                            {
                                value: "水量过大",
                                textStyle: {
                                    color: "#fff",
                                },
                            },
                            {
                                value: "通讯中断",
                                textStyle: {
                                    color: "#fff",
                                },
                            },
                        ],
                        nameTextStyle: {
                            color: "#fff",
                        },
                        splitLine: {
                            show: false,
                        },
                        //设置轴线的属性
                        axisLine: {
                            lineStyle: {
                                color: "#07a9e0",
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                    },
                ],
                series: [
                    {
                        type: "bar",
                        barWidth: "40%",
                        data: [
                            {
                                value: 80,
                                itemStyle: {
                                    color: "#4678f8",
                                },
                            },
                            {
                                value: 60,
                                itemStyle: {
                                    color: "#4bc6f6",
                                },
                            },
                            {
                                value: 50,
                                itemStyle: {
                                    color: "#e4c655",
                                },
                            },
                            {
                                value: 30,
                                itemStyle: {
                                    color: "#e87386",
                                },
                            },
                            {
                                value: 20,
                                itemStyle: {
                                    color: "#4bc6f6",
                                },
                            },
                        ],
                        /* 显示柱子数据 */
                        label: {
                            normal: {
                                show: true,
                                // 数据在柱子头部显示
                                position: "right",
                                textStyle: {
                                    color: "#fff",
                                    fontSize: 13,
                                },
                            },
                        },
                    },
                ],
            };

            // 绘制图表
            problemChart.setOption(option);
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
                    right: 60,
                    bottom: 20,
                },
                xAxis: {
                    data: this.dataList[this.dateTabIndex].xname,
                    axisTick: {
                        alignWithLabel: true,
                    },
                    nameTextStyle: {
                        color: "#07a9e0",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#07a9e0",
                        },
                    },
                },
                yAxis: {
                    type: "value",
                    nameTextStyle: {
                        color: "#07a9e0",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#07a9e0",
                        },
                    },
                },
                series: [
                    {
                        name: "总出水量",
                        type: "bar",
                        barWidth: "60%",
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
                                "KW·h/m³";
                        }
                        return relVal;
                    },
                },
                grid: {
                    left: 40,
                    top: 30,
                    right: 60,
                    bottom: 20,
                },
                xAxis: {
                    data: this.dataList[this.dateTabIndex].xname,
                    axisTick: {
                        alignWithLabel: true,
                    },
                    nameTextStyle: {
                        color: "#07a9e0",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#07a9e0",
                        },
                    },
                },
                yAxis: {
                    type: "value",
                    nameTextStyle: {
                        color: "#07a9e0",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#07a9e0",
                        },
                    },
                },
                series: [
                    {
                        name: "单水能耗",
                        type: "bar",
                        barWidth: "60%",
                        data: this.dataList[this.dateTabIndex].list[1],
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
                                "KW·h";
                        }
                        return relVal;
                    },
                },
                grid: {
                    left: 40,
                    top: 30,
                    right: 60,
                    bottom: 20,
                },
                xAxis: {
                    data: this.dataList[this.dateTabIndex].xname,
                    axisTick: {
                        alignWithLabel: true,
                    },
                    nameTextStyle: {
                        color: "#07a9e0",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#07a9e0",
                        },
                    },
                },
                yAxis: {
                    type: "value",
                    nameTextStyle: {
                        color: "#07a9e0",
                    },
                    splitLine: {
                        show: false,
                    },
                    //设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: "#07a9e0",
                        },
                    },
                },
                series: [
                    {
                        name: "总能耗",
                        type: "bar",
                        barWidth: "60%",
                        data: this.dataList[this.dateTabIndex].list[2],
                    },
                ],
            };

            myChart.setOption(option);
        },
        closeMachine() {
            this.$emit("showDialog", {
                showMachine: false,
            });
        },
        closeRepair() {
            this.$emit("showDialog", {
                showRepair: false,
            });
        },
    },
};
</script>

<style lang="less" scoped>
.bottom {
    width: 52%;
    position: absolute;
    left: 24%;
    bottom: 20px;
    z-index: 10;
}

.bg1 {
    background: url(../assets/img/bottom.png) no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    animation: fade-in 0.4s ease-in;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
.p10 {
    padding: 20px;
    overflow: hidden;
    box-sizing: border-box;
}
.problem {
    width: 400px;
    height: 160px;
}
.statis_box {
    height: 250px;
}
.box {
    background: rgba(1, 54, 111, 0.9);
    overflow: hidden;
    padding: 20px 30px;
    overflow: hidden;
    box-sizing: border-box;
    border: 1px solid rgba(12, 160, 219, 0.3);
    border-radius: 5px;
}

.part {
    color: #cfe1ec;
    font-size: 12px;
    font-weight: 200;
    position: relative;

    .close {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 25px;
        right: 35px;
        background: url(../assets/img/20.png) no-repeat;
        background-size: contain;
        cursor: pointer;
    }
    .statis_tab {
        position: absolute;
        right: 30px;
        top: 20px;
        h4 {
            font-size: 13px;
            font-weight: 300;
            height: 28px;
            line-height: 28px;
            float: left;
            &::before {
                content: "";
                width: 5px;
                height: 20px;
                background: #114ebf;
                display: inline-block;
                vertical-align: -4px;
                margin-right: 10px;
            }
        }
        span.year {
            float: left;
            background: #0b549f;
            padding: 0 20px;
            height: 28px;
            line-height: 28px;
            border-radius: 2px;
            color: #cfe1ec;
            overflow: hidden;
            margin: 0 20px;
        }
        ul {
            border-radius: 2px;
            color: #cfe1ec;
            overflow: hidden;
            cursor: pointer;
        }
        li {
            float: left;
            padding: 0 20px;
            height: 28px;
            line-height: 28px;
            box-sizing: border-box;
            border: 1px solid #0b549f;
            &.active {
                background: #0b549f;
            }
        }
    }
    .tab {
        border-bottom: 1px solid #0b549f;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        li {
            float: left;
            padding: 0 20px;
            &.warn {
                &::after {
                    content: "";
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    background: url(../assets/img/12.png) no-repeat;
                    background-size: contain;
                    vertical-align: -3px;
                    margin-left: 5px;
                }
            }

            &.active {
                background: #0b549f;
            }
        }
    }
    .title {
        margin: 6px 0;
        font-weight: 500;
        font-size: 13px;
        overflow: hidden;
        span {
            float: right;
        }
        &::before {
            content: ".";
            font-size: 16px;
            margin-right: 5px;
            position: relative;
            top: -2px;
        }

        .tips {
            margin-top: 3px;
        }
    }
    .menu {
        height: 35px;
        line-height: 35px;
        width: 100%;
        box-sizing: border-box;
        padding: 0 10px;
        border: 1px solid rgba(7, 154, 211, 0.8);
        border-radius: 2px;
        cursor: pointer;
        &.selected,
        &:hover {
            box-shadow: 0px 0px 6px 4px #155995 inset;
            background: #071f4f;
            border: none;
            border-radius: 0px;
        }
        span {
            float: right;
        }
    }
    .con1 {
        .fl {
            width: 40%;
            box-sizing: border-box;
            padding: 0 10px;
            ul {
                margin-top: 20px;
            }
            li.menu {
                margin-bottom: 12px;
            }
        }
        .fr {
            width: 60%;
            box-sizing: border-box;
            padding: 0 20px;
            table {
                width: 100%;
                td {
                    height: 58px;
                    color: #ccd7e2;
                    border-bottom: 1px dashed #24619a;
                    position: relative;
                    span {
                        display: block;
                        color: #69b6ed;
                    }
                    img {
                        width: 15px;
                        height: 15px;
                        position: absolute;
                        right: 20px;
                        bottom: 20px;
                    }
                }
            }
        }
    }
    .con3 {
        padding-top: 15px;
        .list {
            width: 50%;
            box-sizing: border-box;
            padding-right: 20px;
            height: 150px;
            overflow: hidden;
            li {
                height: 26px;
                line-height: 26px;
                span {
                    float: right;
                    font-weight: 100;
                    color: #809ab7;
                }
            }
        }
        .fr {
            width: 50%;
            box-sizing: border-box;
            padding-left: 30px;
            .title1 {
                &::before {
                    content: "";
                    display: inline-block;
                    width: 19px;
                    height: 18px;
                    background: url(../assets/img/16.png) no-repeat;
                    background-size: contain;
                    vertical-align: -3px;
                    margin-right: 10px;
                }
            }
        }
    }
}

// 动画
@keyframes fade-in {
    from {
        bottom: -300px;
    }
    to {
        bottom: 0px;
    }
}
@keyframes fade-out {
    from {
        bottom: 0px;
    }
    to {
        bottom: -300px;
    }
}
</style>