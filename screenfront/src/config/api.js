import { get, post, put, del } from "./fetch.js";

// 获取监管污水站列表
export function SewageStationForGovList(params) {
    return get('sewageStation/sewageStationForGovList', params)
}

