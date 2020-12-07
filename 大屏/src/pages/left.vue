<template>
    <div id="left">
        <div class="leftCon" :class="showLeft?'fadein':'fadeout'">
            <div class="fadeBtn" @click="showLeft = !showLeft"></div>
            <div class="linetop">
                <div class="fl"></div>
                <div class="fr"></div>
            </div>
            <div class="lineright">
                <div class="up"></div>
                <div class="down"></div>
            </div>
            <div class="linebottom"></div>

            <div class="content">
                <div class="menu" :class="firstSelect?'active':''" @click="backHome()">
                    {{totalData.name}}
                    <span>市级</span>
                </div>

                <div class="area_list">
                    <div class="title">
                        区县级
                        <span>污水站</span>
                    </div>

                    <ul v-show="!showSewage">
                        <li
                            class="menu"
                            v-for="(item,index) in data"
                            :key="index"
                            @click="clickArea(index)"
                        >
                            {{item.name}}
                            <span>{{item.num}}</span>
                        </li>
                    </ul>
                    <ul class="nowArea" v-show="showSewage">
                        <li
                            class="menu"
                            :class="showBack?'active':''"
                            @click="backArea()"
                        >{{data[areaIndex].name}}</li>
                    </ul>
                </div>

                <div class="sewage_list" v-show="showSewage">
                    <div class="title">
                        污水站[{{data[areaIndex].num}}]
                        <div class="tips">
                            <em class="online">在线</em>
                            <em class="error">故障</em>
                            <em class="abnormal">异常</em>
                            <em class="offline">离线</em>
                        </div>
                    </div>
                    <ul>
                        <li
                            class="menu"
                            :class="sewageIndex == index?'active':''"
                            v-for="(item,index) in data[areaIndex].seweageData"
                            :key="index"
                            @click="clickSewage(index)"
                        >
                            {{item.name}}
                            <span class="tips">
                                <em :class="sewageClass[item.status]"></em>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showLeft: true,
            sewageClass: ["", "online", "error", "abnormal", "offline"],
        };
    },
    props: [
        "totalData",
        "data",
        "sewageIndex",
        "firstSelect",
        "areaIndex",
        "showBack",
        "showSewage",
    ],
    watch: {},
    methods: {
        // 返回上一级
        backHome() {
            this.$emit("back", {});
        },
        backArea() {
            this.$emit("backArea");
        },
        // 点击区县
        clickArea(index) {
            this.$emit("clickArea", {
                areaIndex: index,
            });
        },

        // 点击污水站
        clickSewage(index) {
            this.$emit("clickSewage", {
                sewageIndex: index,
            });
        },
    },
};
</script>

<style lang="less" scoped>
// 动画
.fadeBtn {
    width: 32px;
    height: 54px;
    line-height: 54px;
    text-align: center;
    font-family: "微软雅黑";
    border-top-right-radius: 54px;
    border-bottom-right-radius: 54px;
    border: none;
    color: #fff;
    background: #0b549f;
    position: absolute;
    z-index: 99;
    top: 60px;
    right: -42px;
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
    left: 0;
    animation: fade-in 0.4s ease-in;
    .fadeBtn {
        &::after {
            left: 10px;
            -webkit-transform: translate(0, -50%) rotate(45deg);
            transform: translate(0, -50%) rotate(45deg);
        }
    }
}
.fadeout {
    left: -23%;
    animation: fade-out 0.4s ease-in;
    .fadeBtn {
        &::after {
            left: 5px;
            -webkit-transform: translate(0, -50%) rotate(-135deg);
            transform: translate(0, -50%) rotate(-135deg);
        }
    }
}

@keyframes fade-in {
    from {
        left: -23%;
    }
    to {
        left: 0px;
    }
}
@keyframes fade-out {
    from {
        left: 0px;
    }
    to {
        left: -23%;
    }
}

.leftCon {
    width: 22%;
    min-height: 85vh;
    position: absolute;
    bottom: 20px;
    z-index: 10;
    background: rgba(1, 54, 111, 0.9);
    color: #cfe1ec;
    font-size: 13px;

    // 边框线
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
            float: left;
        }
        .fr {
            width: 50%;
            height: 15px;
            float: right;
            background: url(../assets/img/line2.png) no-repeat;
            background-size: 100% 100%;
        }
    }
    .lineright {
        width: 10px;
        height: 100%;
        position: absolute;
        right: -10px;
        top: -1px;
        border-top: 1px solid rgba(12, 160, 219, 0.6);
        .up {
            width: 10px;
            height: calc(~"85vh - 240px");
            background: url(../assets/img/line3.png) repeat-y;
            background-size: contain;
        }
        .down {
            width: 10px;
            height: 240px;
            background: url(../assets/img/line4.png) no-repeat;
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

    // 内容开始
    .content {
        margin: 20px 20px 20px 25px;
    }
    .menu {
        height: 40px;
        line-height: 40px;
        width: 100%;
        border: 1px solid rgba(7, 154, 211, 0.8);
        border-radius: 2px;
        cursor: pointer;
        box-sizing: border-box;
        width: 100%;
        padding: 0 10px;
        &.active,
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
    .title {
        margin: 10px 0;
        width: 100%;
        font-weight: 500;
        font-size: 13px;
        overflow: hidden;
        span {
            float: right;
        }
        &::before {
            content: ".";
            font-size: 16px;
            margin-right: 1px;
            position: relative;
            top: -5px;
        }
        .tips {
            margin-top: 3px;
        }
    }
    .tips {
        float: right;
        em {
            float: left;
            margin-left: 10px;
            font-style: normal;
            &::before {
                content: "";
                display: inline-block;
                width: 10px;
                height: 10px;
                border-radius: 10px;
                margin-right: 6px;
            }
        }
        .online::before {
            background: #00bd42;
        }
        .error::before {
            background: #ff0000;
        }
        .abnormal::before {
            background: #ffbf00;
        }
        .offline::before {
            background: #777777;
        }
    }
    .area_list,
    .sewage_list {
        padding-left: 20px;
        li {
            list-style-type: none;
            margin-bottom: 11px;
        }
    }
}
</style>