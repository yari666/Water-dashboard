<template>
    <div class="app">
        <!-- 顶部 -->
        <top class="header"></top>

        <div class="body">
            <div
                class="left animate__animated"
                :class="
                    fullScreen
                        ? 'animate__fadeOutLeftBig'
                        : 'animate__fadeInLeftBig'
                "
            >
                <!-- 天气区域 -->
                <div class="weather-area box">
                    <div class="weather">
                        <i class="el-icon-sunny"></i>
                        <p>
                            <span>晴</span>
                            <span>24℃</span>
                            <em>降水概率</em>
                            <span>11%</span>
                        </p>
                    </div>
                    <div class="area">
                        <belong-area></belong-area>
                    </div>
                </div>

                <!-- 概况总览 -->
                <statis class="statis"></statis>

                <!-- 状态统计 -->
                <status class="status"></status>

                <!-- 预警通知 -->
                <notice class="notice"></notice>
            </div>
            <div class="right" :class="fullScreen ? 'full' : ''">
                <!-- 地图 -->
                <div class="map box">
                    <map-con
                        :fullScreen="fullScreen"
                        @fullMap="fullMap"
                    ></map-con>
                </div>

                <!-- 底部图表 -->
                <div
                    class="bottom animate__animated"
                    :class="
                        fullScreen
                            ? 'animate__fadeOutDownBig'
                            : 'animate__fadeInUpBig'
                    "
                >
                    <echart-box></echart-box>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import top from "./top";
import belongArea from "~/components/area";
import statis from "./statis";
import status from "./status";
import notice from "./notice";
import mapCon from "./mapCon";
import echartBox from "./echartbox";

let data = require("../assets/newdata.js"); //总数据

export default {
    data() {
        return {
            fullScreen: false,
        };
    },
    components: { top, belongArea, statis, status, notice, mapCon, echartBox },
    methods: {
        fullMap() {
            this.fullScreen = !this.fullScreen;
        },
    },
};
</script>

<style lang="less">
.app {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #16161e;
    color: #fff;

    .box {
        background: #2a2c3b;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .header {
        overflow: hidden;
    }

    .body {
        width: 100%;
        height: calc(~"100vh - 108px");
        margin-top: 40px;
        padding: 0 17px 17px 17px;
        box-sizing: border-box;
        height: calc(~"100vh - 108px");
        .left {
            float: left;
            width: 390px;
            &.animate__fadeOutLeftBig {
                width: 0px;
            }
            .weather-area {
                width: 100%;
                height: 84px;
                padding: 10px;
                box-sizing: border-box;
                .weather {
                    width: 26%;
                    float: left;
                    i {
                        font-size: 40px;
                        float: left;
                        color: #f8b332;
                        line-height: 64px;
                        margin-right: 5px;
                    }
                    p {
                        span {
                            font-size: 14px;
                            line-height: 16px;
                            display: block;
                        }
                        em {
                            font-style: normal;
                            font-size: 12px;
                        }
                    }
                }
                .area {
                    float: right;
                    width: 71%;
                }
            }
        }
        .right {
            float: right;
            width: calc(~"100% - 406px");
            .map {
                height: 626px;
            }

            &.full {
                width: 100% !important;
                height: 100% !important;
                float: inherit;
                .map {
                    height: 100%;
                }
            }
        }
    }

    .fl {
        float: left;
    }
    .fr {
        float: right;
    }
}
</style>