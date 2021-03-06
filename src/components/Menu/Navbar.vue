<template>
    <div class="sidebar">
        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen"
                 class="sidebar-panel">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
    import { store, mutations } from '@/store.js'

    export default {
        methods: {
            closeSidebarPanel: mutations.toggleNav
        },
        computed: {
            isPanelOpen() {
                return store.isNavOpen
            }
        }
    }
</script>

<style>
    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.9s ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateY(-25%);
        transition: all 150ms ease-in 0s
    }

    .sidebar-backdrop {
        background-color: (0,76,76);
        width: 100vw;
        height: 50vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
    }
    li {
        float: left;
        padding:3rem
     }

    .sidebar-panel {
        list-style-type: none;
        overflow: hidden;
        background-color: (0,76,76);
        position: fixed;
        left: 0;
        top: 0;
        height: 10%;
        z-index: 999;
        padding: 3rem 20px 2rem 20px;
        width: 90%;
    }

</style>