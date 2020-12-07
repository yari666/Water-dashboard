<template>
    <div id="app">
        <div class="main" :style="{width: screenWidth + 'px', height: screenHeight + 'px'}">
            <!-- 地图 -->
            <map-bg ref="map" :data="data" :filterData="filterData" @clickMapPoint="clickMapPoint"></map-bg>

            <!-- 顶部 -->
            <top :title="title" :name="name"></top>

            <!-- 左侧栏 -->
            <left
                @clickArea="clickArea"
                @clickSewage="clickSewage"
                @back="back"
                @backArea="backArea"
                :data="data"
                :areaIndex="areaIndex"
                :sewageIndex="sewageIndex"
                :showSewage="showSewage"
                :showBack="showBack"
                :firstSelect="firstSelect"
                :totalData="totalData"
            ></left>

            <!-- 右侧栏 -->
            <right
                :showSewageInfo="showSewageInfo"
                :sewageInfo="sewageInfo"
                :checkName="checkName"
                :statisData="statisData"
                :statusData="statusData"
                :energyData="energyData"
                @showDialog="showDialog"
            ></right>

            <!-- 底部 -->
            <bottom
                ref="bottom"
                :statisWidth="statisWidth"
                :showStatis="showStatis"
                :showMachine="showMachine"
                :showRepair="showRepair"
                :sewageInfo="sewageInfo"
                :repairName="repairName"
                @showDialog="showDialog"
            ></bottom>
        </div>
    </div>
</template>

<style lang="less" scope>
.main {
    overflow: hidden;
    margin: 0 auto;
    position: relative;
}
</style>

<script>
import mapBg from "~/components/map";
import top from "./top";
import left from "./left";
import right from "./right";
import bottom from "./bottom";

let data = require("../assets/newdata.js"); //总数据

export default {
    data() {
        return {
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            title: "西安泊乐指挥水务平台",
            name: "",
            totalData: data, //总数据
            data: [],

            checkName: "", //点击层级

            // 左侧
            areaIndex: 0, //区标
            sewageIndex: -1, //污水站标
            showSewage: false, //显示污水站
            showBack: false, //显示返回
            firstSelect: true,

            //右侧弹窗
            sewageInfo: {},
            showSewageInfo: false,
            statisData: [], //数据统计
            statusData: [], //状态统计
            energyData: [], //能耗

            //底部弹窗
            statisWidth: window.innerWidth * 0.52,
            showStatis: true,
            showMachine: false,
            showRepair: false,
            repairName: "",

            // 地图数据
            allMapData: [], //地图总标注
            filterData: [], //过滤标注
        };
    },
    components: { mapBg, top, left, right, bottom },
    created() {
        // 整理污水站
        let data = [];
        this.totalData.data.forEach((item) => {
            data = data.concat(item.seweageData);
        });

        this.filterData = data;
        this.allMapData = data;

        this.name = this.totalData.name;
        this.data = this.totalData.data;
        this.checkName = this.totalData.name;
        this.statisData = this.totalData.statisData;
        this.statusData = this.totalData.statusData;
        this.energyData = this.totalData.energyData;
    },
    mounted() {
        const that = this;

        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth;
                that.screenWidth = window.screenWidth;

                window.screenHeight = document.body.clientHeight;
                that.screenHeight = window.screenHeight;

                that.statisWidth = that.screenWidth * 0.52;
            })();
        };
    },
    methods: {
        // 点击区县
        clickArea(e) {
            let index = e.areaIndex;

            this.areaIndex = index;
            this.showBack = true;
            this.showSewage = true;
            this.firstSelect = false;

            this.checkName = this.data[index].name;

            this.statisData = this.data[index].statisData;
            this.statusData = this.data[index].statusData;
            this.energyData = this.data[index].energyData;

            this.filterData = this.data[index].seweageData;
        },
        // 点击污水站
        clickSewage(e) {
            let index = e.sewageIndex;

            this.sewageIndex = index;
            this.sewageInfo = this.data[this.areaIndex].seweageData[index];
            this.showSewageInfo = true;
            this.showStatis = false;
            this.showBack = false;
            this.firstSelect = false;

            this.checkName = "";

            this.statisData = this.sewageInfo.statisData;
            this.statusData = this.sewageInfo.statusData;
            this.energyData = this.sewageInfo.energyData;

            this.filterData = [this.sewageInfo];

            this.$refs.map.goCenter(this.sewageInfo.id);
        },
        // 返回一级 市
        back(e) {
            this.areaIndex = 0;
            this.sewageIndex = -1;
            this.showSewageInfo = false;
            this.showStatis = true;
            this.showMachine = false;
            this.showRepair = false;
            this.showSewage = false;
            this.firstSelect = true;

            this.checkName = this.totalData.name;

            this.filterData = this.allMapData;

            this.statisData = this.totalData.statisData;
            this.statusData = this.totalData.statusData;
            this.energyData = this.totalData.energyData;
        },
        // 返回二级 区
        backArea(e) {
            this.sewageIndex = -1;
            this.showSewageInfo = false;
            this.showBack = true;
            this.firstSelect = false;

            this.filterData = this.data[this.areaIndex].seweageData;

            this.checkName = this.data[this.areaIndex].name;

            this.statisData = this.data[this.areaIndex].statisData;
            this.statusData = this.data[this.areaIndex].statusData;
            this.energyData = this.data[this.areaIndex].energyData;
        },

        // 显示底部和右侧栏
        showDialog(e) {
            this.showStatis = e.showStatis;
            this.showMachine = e.showMachine;
            this.showRepair = e.showRepair;
            this.repairName = e.repairName;
        },

        // 点击地图标注
        clickMapPoint(e) {
            this.areaIndex = e.areaIndex;
            this.showSewage = true;

            this.clickSewage(e);
        },
    },
};
</script>
