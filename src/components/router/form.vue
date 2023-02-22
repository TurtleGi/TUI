<script setup lang="ts">

</script>

<template>
    <t-form>
        <t-form-item>
            <t-input label="活动名称"></t-input>
        </t-form-item>
        <t-form-item>
            <t-select label="活动区域" size="mini">
                <t-option value="北京">北京</t-option>
                <t-option value="上海">上海</t-option>
            </t-select>
        </t-form-item>
        <t-form-item>
            <t-input label="活动时间" type="datetime-local"></t-input>
        </t-form-item>
        <t-form-item>
            <t-switch label="即时配送"></t-switch>
        </t-form-item>
        <t-form-item>
            <t-checkbox-group label="活动性质">
                <t-checkbox>美食/餐厅线上活动</t-checkbox>
                <t-checkbox>地推活动</t-checkbox>
                <t-checkbox>线下主题活动</t-checkbox>
                <t-checkbox>单纯品牌曝光</t-checkbox>
            </t-checkbox-group>
        </t-form-item>
        <t-form-item>
            <t-radio-group label="特殊资源">
                <t-radio >线上品牌商赞助</t-radio>
                <t-radio>线下场地免费</t-radio>
            </t-radio-group>
        </t-form-item>
        <t-form-item>
            <t-input label="活动名称" type="textarea"></t-input>
        </t-form-item>
        <t-form-item>
            <t-button-group>
                <t-button type="primary">立即创建</t-button>
                <t-button type="info">取消</t-button>
            </t-button-group>
        </t-form-item>
    </t-form>

    <t-form inline>
        <t-form-item>
            <t-input label="活动名称"></t-input>
        </t-form-item>
        <t-form-item>
            <t-select label="活动区域">
                <t-option value="北京">北京</t-option>
                <t-option value="上海">上海</t-option>
            </t-select>
        </t-form-item>
    </t-form>

    <t-form size="mini">
        <t-form-item>
            <t-input label="活动名称"></t-input>
        </t-form-item>
        <t-form-item>
            <t-select label="活动区域">
                <t-option value="北京">北京</t-option>
                <t-option value="上海">上海</t-option>
            </t-select>
        </t-form-item>
        <t-form-item>
            <t-input label="活动时间" type="datetime-local"></t-input>
        </t-form-item>
        <!-- <t-form-item>
            <t-switch label="即时配送"></t-switch>
        </t-form-item> -->
        <t-form-item>
            <t-checkbox-group label="活动性质">
                <t-checkbox>美食/餐厅线上活动</t-checkbox>
                <t-checkbox>地推活动</t-checkbox>
                <t-checkbox>线下主题活动</t-checkbox>
                <t-checkbox>单纯品牌曝光</t-checkbox>
            </t-checkbox-group>
        </t-form-item>
        <t-form-item>
            <t-radio-group label="特殊资源">
                <t-radio>线上品牌商赞助</t-radio>
                <t-radio>线下场地免费</t-radio>
            </t-radio-group>
        </t-form-item>
        <!-- <t-form-item>
            <t-input label="活动名称" type="textarea"></t-input>
        </t-form-item> -->
        <t-form-item>
            <t-button-group>
                <t-button type="primary">立即创建</t-button>
                <t-button type="info">取消</t-button>
            </t-button-group>
        </t-form-item>
    </t-form>

</template>

<style>

</style>