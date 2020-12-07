<template>
    <div class="con">
        <div class="part" :class="showLeft1?'fadein':'fadeout'">
            <div class="fadeBtn" @click="showLeft1 = !showLeft1"></div>

            <div class="linetop">
                <div class="fl"></div>
                <div class="fr"></div>
            </div>
            <div class="linebottom"></div>

            <div class="box2" v-show="!showSewageInfo">
                <div class="title">
                    <div class="fl">
                        <img src="../assets/img/5.png" />
                        数据统计
                    </div>
                    <div class="fr">{{checkName||sewageInfo.name}}</div>
                </div>
                <ul class="waterData">
                    <li v-for="(item,index) in energyData" :key="index">
                        <div class="imgbox">
                            <p>
                                <span>{{item.num}}</span>
                                <b>{{item.name}}</b>
                            </p>
                        </div>
                    </li>
                </ul>

                <img class="line" src="../assets/img/14.png" />

                <ul class="statistics">
                    <li v-for="(item,index) in statisData" :key="index">
                        <img :src="item.img" />
                        <div class="fl">
                            <b>{{item.name}}</b>
                            <span>{{item.num}}</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="box2" v-show="showSewageInfo">
                <div class="title">
                    <div class="fl">
                        <img src="../assets/img/5.png" />
                        数据统计&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{{checkName||sewageInfo.name}}
                    </div>
                    <div class="fr">
                        <div class="online" v-show="sewageInfo.status == 1">
                            <img src="../assets/img/10.png" />在线
                        </div>
                        <div class="error" v-show="sewageInfo.status == 2">
                            <img src="../assets/img/11.png" />故障 1 小时
                        </div>
                        <div class="abnormal" v-show="sewageInfo.status == 3">
                            <img src="../assets/img/12.png" />异常 2 小时
                        </div>
                        <div class="offline" v-show="sewageInfo.status == 4">
                            <img src="../assets/img/13.png" />离线 3 小时
                        </div>
                    </div>
                </div>

                <ul class="waterData">
                    <li v-for="(item,index) in energyData" :key="index">
                        <div class="imgbox">
                            <p>
                                <span>{{item.num}}</span>
                                <b>{{item.name}}</b>
                            </p>
                        </div>
                    </li>
                </ul>

                <img class="line" src="../assets/img/14.png" />

                <div class="baseInfo">
                    <div class="title1">
                        基础信息
                        <span class="fr">MORE</span>
                    </div>
                    <div class="detail">
                        <p>所属业主：{{sewageInfo.belongOwner}}</p>
                        <p>所属项目：{{sewageInfo.belongItem}}</p>
                        <p>运维单位：{{sewageInfo.belongCompany}}</p>
                    </div>
                    <div class="btns">
                        <span class="fl" @click="clickRepair('巡检记录')">巡检记录 10</span>
                        <span @click="clickRepair('维修记录')">维修记录 5</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="part part2" :class="showLeft2?'fadein':'fadeout'">
            <div class="fadeBtn" @click="showLeft2 = !showLeft2"></div>

            <div class="linetop">
                <div class="fl"></div>
                <div class="fr"></div>
            </div>
            <div class="linebottom"></div>

            <div class="box2">
                <div class="title">
                    <div class="fl">
                        <img src="../assets/img/5.png" />
                        {{showSewageInfo?'设备信息':'状态统计'}}
                    </div>
                    <div class="fr">{{checkName||sewageInfo.name}}</div>
                </div>

                <ul class="status" v-show="!showSewageInfo">
                    <li
                        v-for="(item,index) in statusData"
                        :key="index"
                        :class="['','online','error','abnormal','offline'][item.status]"
                    >
                        <div class="box">
                            <p>
                                <img :src="item.img" />
                                {{item.name}}
                            </p>
                        </div>
                        <b>{{item.num}}</b>
                    </li>
                </ul>

                <ul class="statistics checkbox" v-show="showSewageInfo" @click="clickMachine">
                    <li v-for="(item,index) in statisData" :key="index">
                        <img :src="item.img" v-if="item.img" />
                        <div class="fl">
                            <b>{{item.name}}</b>
                            <span>{{item.num}}</span>
                        </div>
                    </li>
                </ul>

                <div class="machine_list">
                    <div class="title1">&nbsp;预警通知</div>
                    <ul class="tab">
                        <li
                            :class="tabIndex == index ? 'active':''"
                            v-for="(item,index) in machineList"
                            :key="index"
                            @click="tabChange(index)"
                        >{{item.tabName}}</li>
                    </ul>
                    <ul class="list">
                        <li v-for="(item,index) in machineList[tabIndex].list" :key="index">
                            {{item.title}}
                            <span>{{item.date}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "showSewageInfo",
        "sewageInfo",
        "checkName",
        "statisData",
        "statusData",
        "energyData",
    ],
    data() {
        return {
            showLeft1: true,
            showLeft2: true,

            tabIndex: 0,
            machineList: [
                {
                    tabName: "故障",
                    list: [
                        {
                            title: "松坝社区污水站【故障】",
                            date: "2020/01/01",
                        },
                        {
                            title: "后沟村污水站【故障】",
                            date: "2020/01/01",
                        },
                        {
                            title: "金思铭生物科技公司污水站【故障】",
                            date: "2020/01/01",
                        },
                        {
                            title: "安康妇幼保健院污水站【故障】",
                            date: "2020/01/01",
                        },
                        {
                            title: "吉河坝污水站【故障】",
                            date: "2020/01/01",
                        },
                    ],
                },
                {
                    tabName: "异常",
                    list: [
                        {
                            title: "陕佘家窑（5组）污水站【异常】",
                            date: "2020/01/01",
                        },
                        {
                            title: "佘家窑（1-4组）污水站【异常】",
                            date: "2020/01/01",
                        },
                        {
                            title: "安康妇幼保健院污水站【异常】",
                            date: "2020/01/01",
                        },
                        {
                            title: "后沟村污水站【异常】",
                            date: "2020/01/01",
                        },
                        {
                            title: "松坝社区污水站【异常】",
                            date: "2020/01/01",
                        },
                    ],
                },
                {
                    tabName: "离线",
                    list: [
                        {
                            title: "后沟村污水站【离线】",
                            date: "2020/01/01",
                        },
                        {
                            title: "吉河坝污水站【离线】",
                            date: "2020/01/01",
                        },
                        {
                            title: "三柳村污水站【离线】",
                            date: "2020/01/01",
                        },
                        {
                            title: "松坝社区污水站【离线】",
                            date: "2020/01/01",
                        },
                        {
                            title: "后沟村污水站【离线】",
                            date: "2020/01/01",
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        tabChange(index) {
            this.tabIndex = index;
        },
        clickRepair(name) {
            this.$emit("showDialog", {
                repairName: name,
                showRepair: true,
                showMachine: false,
                showStatis: false,
            });
        },
        clickMachine(name) {
            this.$emit("showDialog", {
                repairName: name,
                showRepair: false,
                showMachine: true,
                showStatis: false,
            });
        },
    },
};
</script>

<style lang="less" scoped>
.linetop {
    width: 100%;
    height: 15px;
    position: absolute;
    top: -15px;
    left: 0;
    .fl {
        width: 50%;
        height: 15px;
        background: url(../assets/img/line1.png) repeat-x;
        float: right;
    }
    .fr {
        width: 50%;
        height: 15px;
        float: left;
        background: url(../assets/img/line5.png) no-repeat;
        transform: rotate(360deg);
        background-size: 100% 100%;
    }
}
.linebottom {
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: -1px;
    background-image: linear-gradient(
        to right,
        rgba(10, 15, 37, 0.7),
        rgba(255, 255, 255, 0.4),
        rgba(10, 15, 37, 0.7)
    );
}
.con {
    width: 22%;
    position: absolute;
    right: 0;
    bottom: 20px;
    z-index: 10;
}
.box2 {
    border-left: 1px solid rgba(12, 160, 219, 0.3);
    padding: 10px 20px 20px;
    overflow: hidden;
}
.part {
    width: 100%;
    color: #cfe1ec;
    font-size: 13px;
    box-sizing: border-box;
    background: rgba(1, 54, 111, 0.9);
    position: relative;
    &.part2 {
        margin-top: 40px;
    }
    .waterData {
        margin: 15px 0 5px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-center;
        align-items: center;
        justify-content: space-around;
        li {
            background: url(../assets/img/circle.png) no-repeat;
            background-size: contain;
            width: 30%;
            .imgbox {
                width: 100%;
                padding-top: 100%;
                position: relative;
                text-align: center;
                font-size: 14px;
                b {
                    margin-top: 20%;
                    font-weight: normal;
                    display: block;
                }
                p {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                }
            }
        }
    }
    .statistics {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-center;
        align-items: center;
        justify-content: space-around;
        margin-top: 5px;
        li {
            width: 33.333%;
            cursor: pointer;
            img {
                float: left;
                width: 45%;
            }
            .fl {
                margin-left: 5%;
                width: 50%;
                position: relative;
                b {
                    display: block;
                    font-weight: 400;
                    font-size: 13px;
                    white-space: nowrap;
                    margin-top: 5%;
                }
                span {
                    font-size: 16px;
                    color: #809db9;
                    font-weight: 200;
                    position: relative;
                    top: 10px;
                }
            }
        }
    }
    img.line {
        width: 60%;
        left: 20%;
        position: relative;
        height: 2px;
    }
    .baseInfo {
        padding: 0 10px;
        box-sizing: border-box;
        .title1 {
            font-size: 14px;
        }
        .detail {
            p {
                line-height: 24px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-weight: 200;
            }
        }
        .btns {
            margin-top: 10px;
            overflow: hidden;
            text-align: center;
            cursor: pointer;
            span {
                background: #0c57aa;
                border-radius: 3px;
                overflow: hidden;
                display: inline-block;
                width: 45%;
                height: 30px;
                line-height: 30px;
                &.fl {
                    margin-right: 10%;
                }
            }
        }
    }

    .status {
        margin-top: 15px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-center;
        align-items: center;
        justify-content: space-around;
        li {
            width: 23%;
            text-align: center;
            box-sizing: border-box;
            b {
                font-weight: 600;
                font-size: 20px;
            }
            .box {
                width: 100%;
                padding-top: 135%;
                box-sizing: border-box;
                overflow: hidden;
                position: relative;
                p {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                img {
                    display: block;
                    margin: 0 auto 25%;
                    width: 100%;
                }
            }
            &.online {
                color: #00bd42;
                .box {
                    background: url(../assets/img/6.png) no-repeat;
                    background-size: contain;
                }
            }
            &.error {
                color: #ff0000;
                .box {
                    background: url(../assets/img/7.png) no-repeat;
                    background-size: contain;
                }
            }
            &.abnormal {
                color: #ffbf00;
                .box {
                    background: url(../assets/img/8.png) no-repeat;
                    background-size: contain;
                }
            }
            &.offline {
                color: #809bb7;
                .box {
                    background: url(../assets/img/9.png) no-repeat;
                    background-size: contain;
                }
            }
        }
    }

    .checkbox {
        margin: 15px 0;
        border: 2px solid #0a509e;
        border-radius: 5px;
        padding: 10px 0;
        position: relative;
        border-right: 30px solid #0a509e;
        li {
            width: 50%;
            border-right: 1px solid #0a509e;
            float: left;
            box-sizing: border-box;
            &:last-child {
                border: none;
                padding-left: 15px;
            }
            &:hover {
                background: none;
            }
            img {
                width: 35%;
                margin-left: 8%;
            }
            .fl {
                width: 50%;
                span {
                    font-size: 15px;
                    font-weight: 300;
                    top: 5px;
                }
            }
        }

        &::after {
            content: "点击查看";
            font-size: 13px;
            position: absolute;
            right: -30px;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 15px;
        }
    }

    .machine_list {
        margin-top: 10px;
        .title1 {
            margin-bottom: 10px;
        }
        .tab {
            width: 100%;
            height: 32px;
            line-height: 32px;
            border-radius: 14px;
            background: #073f7d;
            overflow: hidden;
            cursor: pointer;
            li {
                width: 33.3333%;
                float: left;
                text-align: center;
                &.active {
                    background: #0c58ab;
                    border-radius: 14px;
                    overflow: hidden;
                }
            }
        }
        .list {
            padding: 10px 0;
            li {
                height: 36px;
                line-height: 36px;
                border-bottom: 1px dashed #0b59af;
                font-weight: 200;
                &::before {
                    content: "";
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    background: url(../assets/img/12.png) no-repeat;
                    background-size: contain;
                    vertical-align: -3px;
                    margin-right: 5px;
                }
                span {
                    float: right;
                }
                &:last-child {
                    border-bottom: none;
                }
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
.title {
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    overflow: hidden;
    .fl {
        width: 60%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        img {
            width: 25px;
            height: 22px;
            float: left;
            margin-right: 10px;
        }
    }
    .fr {
        img {
            width: 20px;
            height: 20px;
            float: left;
            margin-right: 5px;
        }
        .online {
            color: #00bd42;
        }
        .error {
            color: #ff0000;
        }
        .abnormal {
            color: #ffbf00;
        }
        .offline {
            color: #809bb7;
        }
    }
}
.title1 {
    margin: 16px 0;
    font-weight: 300;
    font-size: 14px;
    overflow: hidden;
    span {
        float: right;
        font-size: 10px;
    }
    &::before {
        content: ".";
        margin-right: 10px;
        position: relative;
        top: -5px;
    }
    .tips {
        margin-top: 3px;
    }
}

// 动画
.fadeBtn {
    width: 32px;
    height: 54px;
    line-height: 54px;
    text-align: center;
    font-family: "微软雅黑";
    border-top-left-radius: 54px;
    border-bottom-left-radius: 54px;
    border: none;
    color: #fff;
    background: #0b549f;
    position: absolute;
    z-index: 99;
    top: 60px;
    left: -32px;
    cursor: pointer;
    &::after {
        position: absolute;
        top: 26px;
        content: "";
        width: 10px;
        height: 10px;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
    }
}
.fadein {
    right: 0;
    animation: fade-in 0.4s ease-in;
    .fadeBtn {
        &::after {
            right: 10px;
            -webkit-transform: translate(0, -50%) rotate(-135deg);
            transform: translate(0, -50%) rotate(-135deg);
        }
    }
}
.fadeout {
    right: -100%;
    animation: fade-out 0.4s ease-in;
    .fadeBtn {
        &::after {
            right: 5px;
            -webkit-transform: translate(0, -50%) rotate(45deg);
            transform: translate(0, -50%) rotate(45deg);
        }
    }
}

@keyframes fade-in {
    from {
        right: -100%;
    }
    to {
        right: 0px;
    }
}
@keyframes fade-out {
    from {
        right: 0px;
    }
    to {
        right: -100%;
    }
}
</style>