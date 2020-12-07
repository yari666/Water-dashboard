<template>
    <div class="main box">
        <title-box :color="'#30D8FF'" :title="'概况总览'"></title-box>

        <ul>
            <li>
                <div class="top"><b>138</b><span>日处理量 m³/天</span></div>
                <div class="bottom co1">
                    <i></i>
                    <b>45</b>
                    <span>业主数量</span>
                </div>
            </li>
            <li>
                <div class="top"><b>45678</b><span>总处理量 m³</span></div>
                <div class="bottom co2">
                    <i></i>
                    <b>487</b>
                    <span>污水站</span>
                </div>
            </li>
            <li>
                <div class="top"><b>95%</b><span>水质达标</span></div>
                <div class="bottom co3">
                    <i></i>
                    <b>1250</b>
                    <span>设备/套</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import titleBox from "~/components/title.vue";

export default {
    data() {
        return {};
    },
    components: { titleBox },
};
</script>

<style lang="less" scoped>
.main {
    padding: 15px 10px;
    margin-top: 16px;
    ul {
        margin-top: 16px;
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

            .bottom {
                font-size: 38px;
                height: 104px;
                border-radius: 10px;
                margin: 35px 15px 10px;
                position: relative;
                border: 1px solid #52546d;
                color: #52546d;
                i {
                    display: block;
                    width: 30px;
                    height: 30px;
                    position: absolute;
                    left: 50%;
                    top: -15px;
                    background: #52546d;
                    border-radius: 15px;
                    margin-left: -15px;
                    &::before {
                        content: "";
                        position: absolute;
                        left: 5px;
                        top: 5px;
                        display: block;
                        width: 20px;
                        height: 20px;
                        background: url(../assets/img/icons.png) no-repeat;
                    }
                }
                b {
                    display: block;
                    font-weight: 400;
                    color: #b5b6b9;
                    font-size: 28px;
                    margin: 30px 0 15px;
                }
                span {
                    font-size: 10px;
                    line-height: 16px;
                    display: block;
                    color: #b3b7ba;
                }
                &.co1 {
                    i::before {
                        background-position: 0 0;
                    }
                }
                &.co2 {
                    i::before {
                        background-position: -25px 0;
                    }
                }
                &.co3 {
                    i::before {
                        background-position: -51px 0;
                    }
                }
            }
        }
    }
}
</style>