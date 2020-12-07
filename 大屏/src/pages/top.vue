<template>
    <div class="top">
        <div class="title">
            <span>
                <img class="img1" src="../assets/img/19.png" />
                {{name}} / 市级
            </span>
            <b>{{title}}</b>
            <span class="date">
                <img class="img1" src="../assets/img/18.png" />
                {{nowDate}}
            </span>
        </div>
    </div>
</template>

<script>
const timestamp = require("time-stamp");

export default {
    data() {
        return {
            nowDate: timestamp.utc("YYYY年MM/月DD日 HH:mm:ss"),
        };
    },
    components: {},
    props: ["name", "title"],
};
</script>

<style lang="less" scoped>
.top {
    width: 100%;
    height: 65px;
    line-height: 65px;
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
    color: #fff;
    background-image: linear-gradient(
        to right,
        rgba(10, 15, 37, 0.9),
        rgba(13, 69, 156, 0.7),
        rgba(10, 15, 37, 0.9)
    );
    font-style: "微软雅黑";
}

.title {
    font-size: 16px;
    text-align: center;
    span {
        font-size: 12px;
        line-height: 65px;
        position: absolute;
        font-weight: 200;
        left: 20px;
        letter-spacing: 2px;
        .img1 {
            width: 22px;
            height: 20px;
            float: left;
            margin: 22px 10px 0 0;
        }
        &.date {
            right: 20px;
            left: auto;
        }
    }
    b {
        font-weight: 300;
        letter-spacing: 3px;
        &:hover {
            color: red;
        }
    }
}
</style>

