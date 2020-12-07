<template>
    <div class="main full">
        <map-box :fullScreen="fullScreen" @clickPoint="clickPoint"></map-box>

        <div class="fulltool" v-if="!fullScreen" @click="fullScreenEvent">
            地图全屏<i></i>
        </div>

        <div class="fulltool back" v-else @click="fullScreenEvent">
            返回全屏<i></i>
        </div>

        <div
            class="con animate__animated"
            v-show="fullScreen"
            :class="
                showPointCon
                    ? 'animate__fadeInRightBig'
                    : 'animate__fadeOutRightBig'
            "
        >
            <!-- 污水站 -->
            <div class="today-statis box">
                <title-box :color="'#FE511A'" :title="'污水站'"></title-box>
                <ul class="statis">
                    <li>
                        <div class="top">
                            <b>138</b><span>当前处理水量 m³</span>
                        </div>
                    </li>
                    <li>
                        <div class="top">
                            <b>45678</b><span>当前能耗 kw.h/m³</span>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- 概况总览 -->
            <div class="all-statis box">
                <title-box :color="'#30D8FF'" :title="'概况总览'"></title-box>

                <ul class="statis">
                    <li>
                        <div class="top">
                            <b>138</b><span>日处理量 m³/天</span>
                        </div>
                    </li>
                    <li>
                        <div class="top">
                            <b>45678</b><span>总处理量 m³</span>
                        </div>
                    </li>
                    <li>
                        <div class="top"><b>95%</b><span>水质达标</span></div>
                    </li>
                </ul>

                <div class="base-info">
                    <title-box
                        class="title"
                        :color="'#EF39B0'"
                        :title="'基础信息'"
                    ></title-box>
                    <p>所属业主：谭坝镇松坝社区[政府]</p>
                    <p>所属项目：安康市中心城市集中式饮用水源地保护项目</p>
                    <p>运维单位：西安国祯环保工程有限公司</p>
                </div>
            </div>

            <!-- 设备信息 -->
            <div class="machine box">
                <title-box :color="'#1CD9CD'" :title="'设备信息'"></title-box>

                <div class="info">
                    <div class="fl">
                        <p>
                            <b>87</b>
                            <i>健康评价</i>
                        </p>
                    </div>
                    <div class="fr">
                        <p>设备类型<i class="el-icon-d-arrow-right"></i></p>
                        <span>MBR</span>
                        <span>AAO+MBR</span>
                        <span>小型过滤器</span>
                    </div>
                </div>
            </div>

            <!-- 预警通知 -->
            <notice class="notice"></notice>
        </div>
    </div>
</template>

<style lang="less" scoped>
.main {
    width: 100%;
    height: 100%;
    position: relative;
    .fulltool {
        padding: 5px 15px;
        color: #fff;
        background: rgba(130, 130, 130, 0.55);
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.53);
        border-radius: 14px;
        position: absolute;
        left: 20px;
        top: 14px;
        z-index: 10;
        cursor: pointer;
        i {
            width: 17px;
            height: 18px;
            background: url(../assets/img/icons.png) no-repeat;
            background-position: 0 -89px;
            display: inline-block;
            margin-left: 10px;
            vertical-align: -3px;
        }
        &.back {
            i {
                background-position: -25px -89px;
            }
        }
    }

    .con {
        width: 390px;
        position: absolute;
        top: 0;
        right: 2px;
        z-index: 10;
        .box {
            background: rgba(48, 58, 88, 0.85);
            padding: 15px 10px;
            margin-bottom: 10px;
        }

        ul.statis {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            align-content: flex-center;
            align-items: center;
            justify-content: space-around;
            li {
                width: 32%;
                text-align: center;
                .top {
                    b {
                        font-size: 40px;
                        height: 52px;
                        line-height: 52px;
                        font-weight: 400;
                        display: block;
                    }
                    span {
                        font-size: 12px;
                        line-height: 16px;
                        color: #b2b4c1;
                    }
                }
            }
        }

        .today-statis {
            li {
                width: 50%;
            }
        }

        .all-statis {
            font-size: 12px;
            .base-info {
                margin-top: 30px;
                .title {
                    margin-bottom: 10px;
                }
                p {
                    height: 26px;
                    line-height: 26px;
                    color: #b2b4c1;
                    padding-left: 20px;
                }
            }
        }

        .machine {
            overflow: hidden;
            .info {
                margin-top: 10px;
                .fl {
                    width: 60%;
                    p {
                        width: 125px;
                        height: 125px;
                        background: url(../assets/img/icons.png) no-repeat;
                        background-position: 0 -116px;
                        text-align: center;
                        margin-left: 40px;
                        overflow: hidden;
                        b {
                            font-size: 32px;
                            display: block;
                            margin-top: 40px;
                            margin-bottom: 10px;
                        }
                        i {
                            font-style: normal;
                            font-size: 10px;
                            color: #b2b4c1;
                        }
                    }
                }
                .fr {
                    width: 40%;
                    line-height: 30px;
                    font-size: 14px;
                    p {
                        i {
                            color: #2fd4f8;
                            margin-left: 20px;
                        }
                    }
                    span {
                        display: block;
                        color: #b2b4c1;
                    }
                }
            }
        }

        .notice {
            height: auto;
            margin: auto;
        }
    }
}
</style>

<script>
import mapBox from "~/components/map";
import titleBox from "~/components/title";
import notice from "./notice";

const env = require("~/config/env.js");

export default {
    data() {
        return {
            showPointCon: false, //是否显示弹框信息
            userId: "",
            params: {
                UserId: "",
                KeyWord: "",
                Sorting: "",
                SkipCount: 0, //跨过几条
                MaxResultCount: 10, //每页显示10条
            },
        };
    },
    props: ["fullScreen"],
    components: { mapBox, titleBox, notice },
    watch: {
        fullScreen() {
            if (!this.fullScreen) {
                this.showPointCon = false;
            }
        },
    },
    created() {
        var user = window.localStorage.getItem("userInfo");
        var userInfo = user ? JSON.parse(user) : {};

        this.userId = (userInfo && userInfo.userId) || "";

        this.getList();
    },

    methods: {
        // 获取列表
        getList() {
            let params = Object.assign({}, this.params, {
                UserId: this.userId,
            });

            this.$http
                .get(`${env.baseUrl}sewageStation/sewageStationForGovList`, {
                    params: params,
                })
                .then((res) => {
                    if (res) {
                        this.tableData = res.data.items;
                        this.totalCount = res.data.totalCount;
                    }
                });
        },
        fullScreenEvent() {
            this.$emit("fullMap");
        },
        clickPoint() {
            this.showPointCon = true;

            if (!this.fullScreen) {
                this.$emit("fullMap");
            }
        },
    },
};
</script>