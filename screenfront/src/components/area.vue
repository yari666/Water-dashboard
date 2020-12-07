<template>
    <div class="main">
        <div class="up">
            <el-dropdown
                @command="changeProvice"
                class="provice"
                trigger="click"
            >
                <span class="el-dropdown-link">
                    {{ provice
                    }}<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="全部">全部</el-dropdown-item>
                    <el-dropdown-item command="江苏省">江苏省</el-dropdown-item>
                    <el-dropdown-item command="河南省">河南省</el-dropdown-item>
                    <el-dropdown-item command="陕西省">陕西省</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown @command="changeCity" class="provice" trigger="click">
                <span class="el-dropdown-link">
                    {{ city
                    }}<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="全部">全部</el-dropdown-item>
                    <el-dropdown-item command="西安">西安</el-dropdown-item>
                    <el-dropdown-item command="郑州">郑州</el-dropdown-item>
                    <el-dropdown-item command="苏州">苏州</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown
                @command="changeCounty"
                class="provice"
                trigger="click"
            >
                <span class="el-dropdown-link">
                    {{ county
                    }}<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="全部">全部</el-dropdown-item>
                    <el-dropdown-item command="金水区">金水区</el-dropdown-item>
                    <el-dropdown-item command="姑苏区">姑苏区</el-dropdown-item>
                    <el-dropdown-item command="古城区">古城区</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <!-- 陕西省<i class="el-icon-caret-bottom"></i>安康市<i
                class="el-icon-caret-bottom"
            ></i
            >石泉县<i class="el-icon-caret-bottom"></i> -->
        </div>
        <div class="down">
            <!-- 全部污水站（182）<i class="el-icon-caret-bottom"></i> -->
            <el-dropdown
                @command="handleCommand"
                class="allsewage"
                trigger="click"
            >
                <span class="el-dropdown-link">
                    {{ allSewage
                    }}<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="全部污水站"
                        >全部污水站</el-dropdown-item
                    >
                    <el-dropdown-item command="污水站A"
                        >污水站A</el-dropdown-item
                    >
                    <el-dropdown-item command="污水站B"
                        >污水站B</el-dropdown-item
                    >
                    <el-dropdown-item command="污水站C"
                        >污水站C</el-dropdown-item
                    >
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<style lang="less" scoped>
.main {
    font-size: 16px;
    i {
        margin: 0 10px;
        color: #b6b5bb;
    }
    .up {
        height: 32px;
        line-height: 32px;
        padding: 0 5px;
        border-bottom: 1px solid transparent;
        border-image: linear-gradient(to bottom, transparent 50%, #535469 50%) 0
            0 100%/1px 0;
    }

    .down {
        height: 32px;
        line-height: 32px;
        padding: 0 5px;
    }

    .el-dropdown {
        width: 80px;
        color: #b6b5bb;
        cursor: pointer;
    }
    .allsewage {
        width: auto;
    }
    .el-dropdown-menu {
        background-color: #10171e !important;
        border: 1px solid #10171e !important;
    }
    .el-dropdown-item {
        color: #b6b5bb;
    }
}
</style>

<script>
export default {
    data() {
        return {
            provice: "省",
            city: "市",
            county: "区/县",
            allSewage: "全部污水站",
        };
    },
    methods: {
        changeProvice(command) {
            this.provice = command;
        },
        changeCity(command) {
            this.city = command;
        },
        changeCounty(command) {
            this.county = command;
        },
        handleCommand(command) {
            this.allSewage = command;
        },
    },
};
</script>