<template>
    <div class="main box">
        <title-box :color="'#EF39B0'" :title="'状态统计'"></title-box>

        <div
            id="statusEchart"
            class="fl"
            style="width: 65%; height: 200px"
        ></div>
        <ul class="fr">
            <li><i class="online"></i>在线<b>240</b></li>
            <li><i class="err"></i>故障<b>42</b></li>
            <li><i class="warn"></i>异常<b>89</b></li>
            <li><i class="offline"></i>离线<b>45</b></li>
        </ul>
    </div>
</template>

<script>
import titleBox from "~/components/title.vue";

var echarts = require("echarts");

export default {
    data() {
        return {};
    },
    components: { titleBox },
    mounted() {
        this.$nextTick(() => {
            this.statusEchart();
        });
    },
    methods: {
        // 状态统计
        statusEchart() {
            let mychart = echarts.init(document.getElementById("statusEchart"));

            let option = {
                tooltip: {
                    trigger: "item",
                    position: ["30%", "38%"],
                    formatter: "{d}%",
                    backgroundColor: "transparent",
                    textStyle: {
                        fontSize: 26,
                        color: "#fffff",
                        fontWeight: 700,
                    },
                },
                series: [
                    {
                        name: "访问来源",
                        type: "pie",
                        radius: ["55%", "70%"],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            // position: "outside",
                            fontSize: 14,
                            formatter: function (params) {
                                return (
                                    "{a|" +
                                    params.value +
                                    "}\n" +
                                    "{b|" +
                                    params.name +
                                    "}"
                                );
                            },
                            rich: {
                                a: {
                                    color: "#2E2E2E",
                                    fontSize: 20,
                                    lineHeight: 30,
                                },
                                b: {
                                    color: "#606060",
                                    fontSize: 12,
                                },
                            },
                        },

                        labelLine: {
                            show: false,
                            lineStyle: {
                                width: 2,
                            },
                        },
                        data: [
                            {
                                value: 240,
                                name: "在线",
                                itemStyle: {
                                    color: "#30D7FD",
                                },
                            },
                            {
                                value: 89,
                                name: "异常",
                                itemStyle: {
                                    color: "#FFCE52",
                                },
                            },
                            {
                                value: 42,
                                name: "故障",
                                itemStyle: {
                                    color: "#F137B0",
                                },
                            },
                            {
                                value: 45,
                                name: "离线",
                                itemStyle: {
                                    color: "#B5B5B5",
                                },
                            },
                        ],
                    },
                ],
            };

            mychart.setOption(option);
        },
    },
};
</script>

<style lang="less" scoped>
.main {
    padding: 15px 10px 0;
    margin-top: 16px;
    overflow: hidden;
    .fr {
        width: 30%;
        padding-top: 10px;
        li {
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: 12px;
            text-align: left;
            color: #fdfdfd;
            i {
                width: 18px;
                height: 5px;
                display: inline-block;
                margin-right: 10px;
                border-radius: 3px;
                &.online {
                    background: linear-gradient(
                        90deg,
                        #078dd4 0%,
                        #00d2cb 100%
                    );
                }
                &.err {
                    background: linear-gradient(
                        90deg,
                        #d407c0 0%,
                        #d358e1 100%
                    );
                }
                &.warn {
                    background: linear-gradient(
                        90deg,
                        #d45907 0%,
                        #ffcc65 100%
                    );
                }
                &.offline {
                    background: linear-gradient(
                        90deg,
                        #717171 0%,
                        #cecece 100%
                    );
                }
            }
            b {
                margin-left: 10px;
                font-size: 18px;
                font-weight: 400;
            }
        }
    }
}
</style>
