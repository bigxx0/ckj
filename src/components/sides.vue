<template>
  <div id="sides" class="container">
    <div class="left">
      <button class="btn">点击了解</button>
      <div class="zanwei">小程序管理后台</div>
      <div>
        <!-- 工单中心 -->
        <ul>
          <div class="ul" :class="{ bc: activeIndex_ul === 0 }" @click="toggleShow(0, 0)">
            <svg t="1684113387086" class="icon icon-first" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="3402" width="200" height="200">
              <path
                d="M405.333333 458.666667H149.333333c-29.866667 0-53.333333-23.466667-53.333333-53.333334V149.333333c0-29.866667 23.466667-53.333333 53.333333-53.333333h256c29.866667 0 53.333333 23.466667 53.333334 53.333333v256c0 29.866667-23.466667 53.333333-53.333334 53.333334z m-245.333333-64h234.666667v-234.666667h-234.666667v234.666667zM874.666667 458.666667H618.666667c-29.866667 0-53.333333-23.466667-53.333334-53.333334V149.333333c0-29.866667 23.466667-53.333333 53.333334-53.333333h256c29.866667 0 53.333333 23.466667 53.333333 53.333333v256c0 29.866667-23.466667 53.333333-53.333333 53.333334z m-245.333334-64h234.666667v-234.666667h-234.666667v234.666667zM874.666667 928H618.666667c-29.866667 0-53.333333-23.466667-53.333334-53.333333V618.666667c0-29.866667 23.466667-53.333333 53.333334-53.333334h256c29.866667 0 53.333333 23.466667 53.333333 53.333334v256c0 29.866667-23.466667 53.333333-53.333333 53.333333z m-245.333334-64h234.666667v-234.666667h-234.666667v234.666667zM405.333333 928H149.333333c-29.866667 0-53.333333-23.466667-53.333333-53.333333V618.666667c0-29.866667 23.466667-53.333333 53.333333-53.333334h256c29.866667 0 53.333333 23.466667 53.333334 53.333334v256c0 29.866667-23.466667 53.333333-53.333334 53.333333z m-245.333333-64h234.666667v-234.666667h-234.666667v234.666667z"
                fill="#666666" p-id="3403"></path>
            </svg>工单中心
            <div class="icon-last" :class="{ rotate: isRotate0 }">
              <svg t="1683971281853" class="icon icon-last" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="1641" width="200" height="200">
                <path
                  d="M373.408 200.224a32 32 0 0 0-42.816 47.552l293.664 264.256-291.84 264.256a32 32 0 0 0-4.8 42.048l2.56 3.136a32 32 0 0 0 45.184 2.24l318.112-288a32 32 0 0 0-0.064-47.488l-320-288z"
                  fill="#111111" p-id="1642"></path>
              </svg>
            </div>
          </div>
          <!-- <transition> 标签的 name 属性用于指定过渡的名称 -->
          <transition name="fade">
            <div v-if="isShow0">
              <router-link to="gdList">
                <li @click="changeActiveIndex(0, 0)" :class="{ bcli: activeIndex0_il === 0 }">工单列表</li>
              </router-link>
              <!-- <router-link to="create">
                <li @click="lishow(1)" :class="{ bcli: activeIndex_il === 1 }">新建工单</li>
              </router-link> -->
              <router-link to="repair">
                <li @click="changeActiveIndex(1, 0)" :class="{ bcli: activeIndex0_il === 1 }">维修单列表</li>
              </router-link>
            </div>
          </transition>
        </ul>
        <!-- 商机管理 -->
        <ul>
          <div class="ul" :class="{ bc: activeIndex_ul === 1 }" @click="toggleShow(1, 1)">
            <svg t="1684117070863" class="icon icon-first" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="3693" width="200" height="200">
              <path
                d="M149.333333 800h128c29.866667 0 53.333333-23.466667 53.333334-53.333333V533.333333c0-29.866667-23.466667-53.333333-53.333334-53.333333H149.333333c-29.866667 0-53.333333 23.466667-53.333333 53.333333v213.333334c0 29.866667 23.466667 53.333333 53.333333 53.333333z m10.666667-256h106.666667v192h-106.666667v-192zM448 800h128c29.866667 0 53.333333-23.466667 53.333333-53.333333V149.333333c0-29.866667-23.466667-53.333333-53.333333-53.333333h-128c-29.866667 0-53.333333 23.466667-53.333333 53.333333v597.333334c0 29.866667 23.466667 53.333333 53.333333 53.333333z m10.666667-640h106.666666v576h-106.666666v-576zM874.666667 309.333333h-128c-29.866667 0-53.333333 23.466667-53.333334 53.333334v384c0 29.866667 23.466667 53.333333 53.333334 53.333333h128c29.866667 0 53.333333-23.466667 53.333333-53.333333V362.666667c0-29.866667-23.466667-53.333333-53.333333-53.333334z m-10.666667 426.666667h-106.666667v-362.666667h106.666667v362.666667zM896 853.333333H128c-17.066667 0-32 14.933333-32 32S110.933333 917.333333 128 917.333333h768c17.066667 0 32-14.933333 32-32S913.066667 853.333333 896 853.333333z"
                fill="#8a8a8a" p-id="3694"></path>
            </svg>商机管理
            <div class="icon-last" :class="{ rotate: isRotate1 }">
              <svg t="1683971281853" class="icon icon-last" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="1641" width="200" height="200">
                <path
                  d="M373.408 200.224a32 32 0 0 0-42.816 47.552l293.664 264.256-291.84 264.256a32 32 0 0 0-4.8 42.048l2.56 3.136a32 32 0 0 0 45.184 2.24l318.112-288a32 32 0 0 0-0.064-47.488l-320-288z"
                  fill="#111111" p-id="1642"></path>
              </svg>
            </div>
          </div>
          <!-- <transition> 标签的 name 属性用于指定过渡的名称 -->
          <transition name="fade">
            <div v-if="isShow1">
              <router-link to="/OpportunityList">
                <li @click="changeActiveIndex(0, 1)" :class="{ bcli: activeIndex1_il === 0 }">商机列表</li>
              </router-link>
              <router-link to="/OpDetalis">
                <li @click="changeActiveIndex(1, 1)" :class="{ bcli: activeIndex1_il === 1 }">商机详情</li>
              </router-link>
              <!-- <router-link to="create">
                <li @click="lishow1(2)" :class="{ bcli: activeIndex1_il === 2 }">新建工单</li>
              </router-link>
              <li @click="lishow1(3)" :class="{ bcli: activeIndex1_il === 3 }">其他信息</li> -->
            </div>
          </transition>
        </ul>
        <!-- 项目管理 -->
        <ul>
          <div class="ul" :class="{ bc: activeIndex_ul === 2 }" @click="toggleShow(2, 2)">
            <svg t="1684117070863" class="icon icon-first" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="3693" width="200" height="200">
              <path
                d="M149.333333 800h128c29.866667 0 53.333333-23.466667 53.333334-53.333333V533.333333c0-29.866667-23.466667-53.333333-53.333334-53.333333H149.333333c-29.866667 0-53.333333 23.466667-53.333333 53.333333v213.333334c0 29.866667 23.466667 53.333333 53.333333 53.333333z m10.666667-256h106.666667v192h-106.666667v-192zM448 800h128c29.866667 0 53.333333-23.466667 53.333333-53.333333V149.333333c0-29.866667-23.466667-53.333333-53.333333-53.333333h-128c-29.866667 0-53.333333 23.466667-53.333333 53.333333v597.333334c0 29.866667 23.466667 53.333333 53.333333 53.333333z m10.666667-640h106.666666v576h-106.666666v-576zM874.666667 309.333333h-128c-29.866667 0-53.333333 23.466667-53.333334 53.333334v384c0 29.866667 23.466667 53.333333 53.333334 53.333333h128c29.866667 0 53.333333-23.466667 53.333333-53.333333V362.666667c0-29.866667-23.466667-53.333333-53.333333-53.333334z m-10.666667 426.666667h-106.666667v-362.666667h106.666667v362.666667zM896 853.333333H128c-17.066667 0-32 14.933333-32 32S110.933333 917.333333 128 917.333333h768c17.066667 0 32-14.933333 32-32S913.066667 853.333333 896 853.333333z"
                fill="#8a8a8a" p-id="3694"></path>
            </svg>项目管理
            <div class="icon-last" :class="{ rotate: isRotate2 }">
              <svg t="1683971281853" class="icon icon-last" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="1641" width="200" height="200">
                <path
                  d="M373.408 200.224a32 32 0 0 0-42.816 47.552l293.664 264.256-291.84 264.256a32 32 0 0 0-4.8 42.048l2.56 3.136a32 32 0 0 0 45.184 2.24l318.112-288a32 32 0 0 0-0.064-47.488l-320-288z"
                  fill="#111111" p-id="1642"></path>
              </svg>
            </div>
          </div>
          <!-- <transition> 标签的 name 属性用于指定过渡的名称 -->
          <transition name="fade">
            <div v-if="isShow2">
              <router-link to="/OpportunityList">
                <li @click="changeActiveIndex(0, 2)" :class="{ bcli: activeIndex2_il === 0 }">项目列表</li>
              </router-link>
              <router-link to="/OpDetalis">
                <li @click="changeActiveIndex(1, 2)" :class="{ bcli: activeIndex2_il === 1 }">项目详情</li>
              </router-link>
              <!-- <router-link to="create">
                <li @click="lishow1(2)" :class="{ bcli: activeIndex1_il === 2 }">新建工单</li>
              </router-link>
              <li @click="lishow1(3)" :class="{ bcli: activeIndex1_il === 3 }">其他信息</li> -->
            </div>
          </transition>
        </ul>
        <!-- 采购管理 -->
        <ul>
          <div class="ul" :class="{ bc: activeIndex_ul === 3 }" @click="toggleShow(3, 3)">
            <svg t="1684113387086" class="icon icon-first" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="3402" width="200" height="200">
              <path
                d="M405.333333 458.666667H149.333333c-29.866667 0-53.333333-23.466667-53.333333-53.333334V149.333333c0-29.866667 23.466667-53.333333 53.333333-53.333333h256c29.866667 0 53.333333 23.466667 53.333334 53.333333v256c0 29.866667-23.466667 53.333333-53.333334 53.333334z m-245.333333-64h234.666667v-234.666667h-234.666667v234.666667zM874.666667 458.666667H618.666667c-29.866667 0-53.333333-23.466667-53.333334-53.333334V149.333333c0-29.866667 23.466667-53.333333 53.333334-53.333333h256c29.866667 0 53.333333 23.466667 53.333333 53.333333v256c0 29.866667-23.466667 53.333333-53.333333 53.333334z m-245.333334-64h234.666667v-234.666667h-234.666667v234.666667zM874.666667 928H618.666667c-29.866667 0-53.333333-23.466667-53.333334-53.333333V618.666667c0-29.866667 23.466667-53.333333 53.333334-53.333334h256c29.866667 0 53.333333 23.466667 53.333333 53.333334v256c0 29.866667-23.466667 53.333333-53.333333 53.333333z m-245.333334-64h234.666667v-234.666667h-234.666667v234.666667zM405.333333 928H149.333333c-29.866667 0-53.333333-23.466667-53.333333-53.333333V618.666667c0-29.866667 23.466667-53.333333 53.333333-53.333334h256c29.866667 0 53.333333 23.466667 53.333334 53.333334v256c0 29.866667-23.466667 53.333333-53.333334 53.333333z m-245.333333-64h234.666667v-234.666667h-234.666667v234.666667z"
                fill="#666666" p-id="3403"></path>
            </svg>采购管理
            <div class="icon-last" :class="{ rotate: isRotate3 }">
              <svg t="1683971281853" class="icon icon-last" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="1641" width="200" height="200">
                <path
                  d="M373.408 200.224a32 32 0 0 0-42.816 47.552l293.664 264.256-291.84 264.256a32 32 0 0 0-4.8 42.048l2.56 3.136a32 32 0 0 0 45.184 2.24l318.112-288a32 32 0 0 0-0.064-47.488l-320-288z"
                  fill="#111111" p-id="1642"></path>
              </svg>
            </div>
          </div>
          <!-- <transition> 标签的 name 属性用于指定过渡的名称 -->
          <transition name="fade">
            <div v-if="isShow3">
              <router-link to="gdList">
                <li @click="changeActiveIndex(0, 3)" :class="{ bcli: activeIndex3_il === 0 }">采购清单</li>
              </router-link>
              <!-- <router-link to="create">
                <li @click="lishow(1)" :class="{ bcli: activeIndex_il === 1 }">新建工单</li>
              </router-link> -->
              <router-link to="repair">
                <li @click="changeActiveIndex(1, 3)" :class="{ bcli: activeIndex3_il === 1 }">采购单详情</li>
              </router-link>
            </div>
          </transition>
        </ul>
        <!-- 仓储管理 -->
        <ul>
          <div class="ul" :class="{ bc: activeIndex_ul === 4 }" @click="toggleShow(4, 4)">
            <svg t="1684113387086" class="icon icon-first" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="3402" width="200" height="200">
              <path
                d="M405.333333 458.666667H149.333333c-29.866667 0-53.333333-23.466667-53.333333-53.333334V149.333333c0-29.866667 23.466667-53.333333 53.333333-53.333333h256c29.866667 0 53.333333 23.466667 53.333334 53.333333v256c0 29.866667-23.466667 53.333333-53.333334 53.333334z m-245.333333-64h234.666667v-234.666667h-234.666667v234.666667zM874.666667 458.666667H618.666667c-29.866667 0-53.333333-23.466667-53.333334-53.333334V149.333333c0-29.866667 23.466667-53.333333 53.333334-53.333333h256c29.866667 0 53.333333 23.466667 53.333333 53.333333v256c0 29.866667-23.466667 53.333333-53.333333 53.333334z m-245.333334-64h234.666667v-234.666667h-234.666667v234.666667zM874.666667 928H618.666667c-29.866667 0-53.333333-23.466667-53.333334-53.333333V618.666667c0-29.866667 23.466667-53.333333 53.333334-53.333334h256c29.866667 0 53.333333 23.466667 53.333333 53.333334v256c0 29.866667-23.466667 53.333333-53.333333 53.333333z m-245.333334-64h234.666667v-234.666667h-234.666667v234.666667zM405.333333 928H149.333333c-29.866667 0-53.333333-23.466667-53.333333-53.333333V618.666667c0-29.866667 23.466667-53.333333 53.333333-53.333334h256c29.866667 0 53.333333 23.466667 53.333334 53.333334v256c0 29.866667-23.466667 53.333333-53.333334 53.333333z m-245.333333-64h234.666667v-234.666667h-234.666667v234.666667z"
                fill="#666666" p-id="3403"></path>
            </svg>仓储管理
            <div class="icon-last" :class="{ rotate: isRotate4 }">
              <svg t="1683971281853" class="icon icon-last" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="1641" width="200" height="200">
                <path
                  d="M373.408 200.224a32 32 0 0 0-42.816 47.552l293.664 264.256-291.84 264.256a32 32 0 0 0-4.8 42.048l2.56 3.136a32 32 0 0 0 45.184 2.24l318.112-288a32 32 0 0 0-0.064-47.488l-320-288z"
                  fill="#111111" p-id="1642"></path>
              </svg>
            </div>
          </div>
          <!-- <transition> 标签的 name 属性用于指定过渡的名称 -->
          <transition name="fade">
            <div v-if="isShow4">
              <router-link to="gdList">
                <li @click="changeActiveIndex(0, 4)" :class="{ bcli: activeIndex4_il === 0 }">货物清单</li>
              </router-link>
              <!-- <router-link to="create">
                <li @click="lishow(1)" :class="{ bcli: activeIndex_il === 1 }">新建工单</li>
              </router-link> -->
              <router-link to="repair">
                <li @click="changeActiveIndex(1, 4)" :class="{ bcli: activeIndex4_il === 1 }">货物详情</li>
              </router-link>
            </div>
          </transition>
        </ul>
        <!-- 客户管理 -->
        <ul>
          <div class="ul" :class="{ bc: activeIndex_ul === 5 }" @click="toggleShow(5, 5)">
            <svg t="1684116927811" class="icon icon-first" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="1641" width="200" height="200">
              <path
                d="M518.4 149.290667c112.597333-80.789333 267.882667-69.397333 368.128 32 53.866667 54.528 84.138667 128.853333 84.138667 206.378666 0 77.525333-30.293333 151.850667-84.096 206.336l-294.421334 299.52a110.976 110.976 0 0 1-80.213333 34.474667 110.72 110.72 0 0 1-79.914667-34.176L137.322667 593.770667C83.562667 539.242667 53.333333 464.981333 53.333333 387.541333s30.229333-151.722667 84.010667-206.272c100.224-101.376 255.530667-112.768 368.128-31.978666l6.442667 4.778666 6.485333-4.778666z m322.602667 76.970666c-84.629333-85.589333-219.157333-88.64-307.328-6.954666l-21.76 20.138666-21.717334-20.138666c-88.192-81.685333-222.72-78.634667-307.306666 6.933333-41.92 42.496-65.557333 100.608-65.557334 161.28 0 60.693333 23.637333 118.805333 65.6 161.344l295.04 300.416c9.045333 9.450667 21.269333 14.72 33.962667 14.72 12.693333 0 24.917333-5.269333 34.261333-15.04L840.96 549.077333c42.005333-42.496 65.685333-100.650667 65.685333-161.408 0-60.736-23.68-118.912-65.664-161.408z"
                fill="#8a8a8a" p-id="1642"></path>
            </svg>客户管理
            <div class="icon-last" :class="{ rotate: isRotate5 }">
              <svg t="1683971281853" class="icon icon-last" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="1641" width="200" height="200">
                <path
                  d="M373.408 200.224a32 32 0 0 0-42.816 47.552l293.664 264.256-291.84 264.256a32 32 0 0 0-4.8 42.048l2.56 3.136a32 32 0 0 0 45.184 2.24l318.112-288a32 32 0 0 0-0.064-47.488l-320-288z"
                  fill="#111111" p-id="1642"></path>
              </svg>
            </div>
          </div>
          <!-- <transition> 标签的 name 属性用于指定过渡的名称 -->
          <transition name="fade">
            <div v-if="isShow5">
              <router-link to="customer">
                <li @click="changeActiveIndex(0, 5)" :class="{ bcli: activeIndex5_il === 0 }">添加客户</li>
              </router-link>
              <!-- <li @click="lishow2(2)" :class="{ bcli: activeIndex2_il === 2 }">管理客户信息</li> -->
            </div>
          </transition>
        </ul>
        <!-- 内部管理 -->
        <ul>
          <div class="ul" :class="{ bc: activeIndex_ul === 6 }" @click="toggleShow(6, 6)">
            <svg t="1684113387086" class="icon icon-first" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="3402" width="200" height="200">
              <path
                d="M405.333333 458.666667H149.333333c-29.866667 0-53.333333-23.466667-53.333333-53.333334V149.333333c0-29.866667 23.466667-53.333333 53.333333-53.333333h256c29.866667 0 53.333333 23.466667 53.333334 53.333333v256c0 29.866667-23.466667 53.333333-53.333334 53.333334z m-245.333333-64h234.666667v-234.666667h-234.666667v234.666667zM874.666667 458.666667H618.666667c-29.866667 0-53.333333-23.466667-53.333334-53.333334V149.333333c0-29.866667 23.466667-53.333333 53.333334-53.333333h256c29.866667 0 53.333333 23.466667 53.333333 53.333333v256c0 29.866667-23.466667 53.333333-53.333333 53.333334z m-245.333334-64h234.666667v-234.666667h-234.666667v234.666667zM874.666667 928H618.666667c-29.866667 0-53.333333-23.466667-53.333334-53.333333V618.666667c0-29.866667 23.466667-53.333333 53.333334-53.333334h256c29.866667 0 53.333333 23.466667 53.333333 53.333334v256c0 29.866667-23.466667 53.333333-53.333333 53.333333z m-245.333334-64h234.666667v-234.666667h-234.666667v234.666667zM405.333333 928H149.333333c-29.866667 0-53.333333-23.466667-53.333333-53.333333V618.666667c0-29.866667 23.466667-53.333333 53.333333-53.333334h256c29.866667 0 53.333333 23.466667 53.333334 53.333334v256c0 29.866667-23.466667 53.333333-53.333334 53.333333z m-245.333333-64h234.666667v-234.666667h-234.666667v234.666667z"
                fill="#666666" p-id="3403"></path>
            </svg>内部管理
            <div class="icon-last" :class="{ rotate: isRotate6 }">
              <svg t="1683971281853" class="icon icon-last" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="1641" width="200" height="200">
                <path
                  d="M373.408 200.224a32 32 0 0 0-42.816 47.552l293.664 264.256-291.84 264.256a32 32 0 0 0-4.8 42.048l2.56 3.136a32 32 0 0 0 45.184 2.24l318.112-288a32 32 0 0 0-0.064-47.488l-320-288z"
                  fill="#111111" p-id="1642"></path>
              </svg>
            </div>
          </div>
          <!-- <transition> 标签的 name 属性用于指定过渡的名称 -->
          <transition name="fade">
            <div v-if="isShow6">
              <router-link to="gdList">
                <li @click="changeActiveIndex(0, 6)" :class="{ bcli: activeIndex6_il === 0 }">员工管理</li>
              </router-link>
              <!-- <router-link to="create">
                <li @click="lishow(1)" :class="{ bcli: activeIndex_il === 1 }">新建工单</li>
              </router-link> -->
              <router-link to="repair">
                <li @click="changeActiveIndex(1, 6)" :class="{ bcli: activeIndex6_il === 1 }">权限管理</li>
              </router-link>
            </div>
          </transition>
        </ul>
      </div>
    </div>

    <div class="up">
      <router-link to="home">
        <div><img class="logo" src="../../src/assets/images/logo.png"></div>
      </router-link>
      <div class="up-left">
        <div class="nav-l">创科捷智能技术有限公司</div>
        <!-- <div class="nav-l">Chats</div>
        <div class="nav-l">资源中心</div> -->
      </div>
      <div class="up-right">
        <!-- <div class="nav-r"><el-icon>
            <Search style="width:42px;height:20px;vertical-align: middle;" />
          </el-icon></div> -->
        <div class="nav-r">管理员</div>
        <router-link to="/login">
          <div class="nav-r"><img class="user" src="../../src/assets/images/avuor.jpg"></div>
        </router-link>
      </div>
    </div>

    <router-view class="view"></router-view>
  </div>
</template>

<script>


export default {
  data() {
    return {
      isShow0: false,
      isRotate0: false,
      isShow1: false,
      isRotate1: false,
      isShow2: false,
      isRotate2: false,
      isShow3: false,
      isRotate3: false,
      isShow4: false,
      isRotate4: false,
      isShow5: false,
      isRotate5: false,
      isShow6: false,
      isRotate6: false,
      isBc: false,
      isBcli: true,
      activeIndex0_il: -1,
      activeIndex1_il: -1,
      activeIndex2_il: -1,
      activeIndex3_il: -1,
      activeIndex4_il: -1,
      activeIndex5_il: -1,
      activeIndex6_il: -1,
    }
  },
  methods: {
    toggleShow(index, num) {
      const isShowName = `isShow${num}`;
      const isRotateName = `isRotate${num}`;
      this[isShowName] = !this[isShowName];
      this[isRotateName] = !this[isRotateName];
      this.isBc = !this.isBc;
      this.activeIndex_ul = index;
      if (this[isShowName]) {
        for (let i = 0; i < num; i++) {
          if (i !== num) {
            const otherName = `isShow${i}`;
            this[otherName] = false;
          }
        }
      }
    },

    changeActiveIndex(index, num) {
      const activeIndexName = `activeIndex${num}_il`;
      this[activeIndexName] = index;
      // console.log("我点的是",this[activeIndexName])
    },
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  user-select: none;
}


.view {
  position: absolute;
  transform: translate(350px, 150px);
}

.up {
  display: flex;
  flex: 2;
  width: 100%;
  height: 110px;
  font-weight: 600;
  /* border-bottom: 1px solid rgba(97, 94, 94, 0.8) ; */
  box-shadow: 1px 2px 8px #c4c2c2;
  /* background-color: rgb(188, 188, 255); */
}

.logo {
  padding: 30px;
  width: auto;
  height: 50px;
}

.up-left {
  display: flex;
  flex: 1;
  align-items: center;
  float: left;
}

.nav-l {
  margin: 0px;
  /* width: 70px; */
  font-size: 16px;
  color: #2c2b2b;
  /* background-color: red; */

}

.up-right {
  display: flex;
  /* flex: 1; */
  align-items: center;
  float: right;
}

.nav-r {
  width: 50px;
  height: auto;
  margin-right: 30px;
  color: #2c2b2b;
  /* background-color: red; */
}

.user {
  width: 50px;
  height: 50px;
  border-radius: 50px;
}

.left {
  display: flex;
  flex-direction: column;
  height: auto;
  /* background-color: rgb(255, 218, 218); */
  background-color: #fff;
  z-index: 999;
  box-shadow: 1px 1px 3px #c4c2c2;
}

.btn {
  width: 260px;
  height: 50px;
  background-color: #1975ff;
  color: #fff;
  font-size: 18px;
  margin: 30px 26px;
  border-radius: 8px;
  border: 0px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0255d1;
}

.zanwei {
  margin-top: 20px;
  margin-bottom: 40px;
  margin-left: 80px;
  font-size: 20px;
  color: #9c9a9a;
  z-index: 999;
}

.icon-first {
  width: 22px;
  height: 22px;
  margin-left: 19px;
  margin-right: 19px;
  float: left;
  position: relative;
  top: 10%;
  /* background-color: red; */
}

.icon-last {
  width: 22px;
  height: 22px;
  margin-left: 60px;
  float: right;
  position: relative;
  top: 10%;
  /* background-color: blue; */
}

.rotate {
  transform: rotate(90deg);
  transition: all 0.3s ease-in-out;
}

.bc {
  background-color: #e9f2ff;
  color: #1677ff;
  font-weight: 600;
}

.bcli {
  color: #63a2ff;
}


ul {
  padding: 0;
  font-size: 20px;
  margin: 0 20px;
  text-align: left;
}

ul:last-child {
  padding: 0;
  font-size: 20px;
  margin: 0 20px;
  text-align: left;
  margin-bottom: 50px;
}

.ul {
  border-radius: 10px;
  padding: 15px;
  height: 20px;
  width: 238px;
  cursor: pointer;
  /* margin: 0 22px; */
}

li {
  font-size: 18px;
  display: block;
  margin: 10px;
  text-align: left;
  margin: 11px 0 11px 75px;
}

li:hover {
  cursor: pointer;
}

li:first-child {
  margin-top: 15px;
  /* background-color: red; */
}

li:last-child {
  margin-bottom: 20px;
  /* background-color: red; */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
