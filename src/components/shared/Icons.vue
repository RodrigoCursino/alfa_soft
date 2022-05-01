<template>
    <div class="icon" :style="'display:'+(icon=='*'?'none':'')">
        <svg v-if="icon!='*'" 
             :class="`icon ${icon}`">
             <use :xlink:href="`#${icon}`">
             </use>
        </svg>
        <svg mlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
             version="1.1" x="0px" y="0px" aria-hidden="true" style="display:none" viewBox="0 0 40 40"
             preserveAspectRadio="xMidYMin"
        >
            <symbol id="icon-user-add" viewBox="0 0 20 20">
            <path d="M2 6h-2v2h2v2h2v-2h2v-2h-2v-2h-2v2zM9 6c0-1.657 1.343-3 3-3s3 1.343 3 3v0 2c0 1.657-1.343 3-3 3s-3-1.343-3-3v0-2zM20 15.14c-2.287-1.345-5.038-2.14-7.975-2.14-0.009 0-0.018 0-0.026 0h0.001c-2.91 0-5.65 0.78-8 2.14v2.86h16v-2.86z"></path>
            </symbol>
            <symbol id="icon-user" viewBox="0 0 20 20">
                <path d="M5 5c0-2.761 2.239-5 5-5s5 2.239 5 5v0 2c0 2.761-2.239 5-5 5s-5-2.239-5-5v0-2zM0 16.68c2.86-1.685 6.301-2.68 9.974-2.68 0.009 0 0.018 0 0.027 0h-0.001c3.64 0 7.060 0.97 10 2.68v3.32h-20v-3.32z"></path>
            </symbol>
            <symbol id="icon-envelope" viewBox="0 0 20 20">
                <path d="M18 2c1.105 0 2 0.895 2 2v0 12c0 1.105-0.895 2-2 2v0h-16c-1.105 0-2-0.895-2-2v0-12c0-1.1 0.9-2 2-2h16zM13.63 11.1l6.37 4.9v-2l-5.12-3.9 5.12-4.1v-2l-10 8-10-8v2l5.12 4.1-5.12 3.9v2l6.37-4.9 3.63 2.9 3.63-2.9z"></path>
            </symbol>
            <symbol id="icon-phone" viewBox="0 0 20 20">
                <path d="M20 18.35v0.65c0 0.552-0.448 1-1 1v0h-2c-9.389 0-17-7.611-17-17v0-2c0-0.552 0.448-1 1-1v0h4c0.552 0 1 0.448 1 1v0 4c0 0.56-0.31 1.31-0.7 1.7l-2.14 2.14c1.52 3.6 4.4 6.48 8 8l2.12-2.12c0.4-0.4 1.15-0.71 1.7-0.71h4.020c0.548 0.006 0.99 0.451 0.99 1 0 0 0 0 0 0v0 3.35z"></path>
            </symbol>
            <symbol id="icon-trash" viewBox="0 0 20 20">
                <path d="M6 2l2-2h4l2 2h4v2h-16v-2h4zM3 6h14l-1 14h-12l-1-14zM8 8v10h1v-10h-1zM11 8v10h1v-10h-1z"></path>
            </symbol>
            <symbol id="icon-menu" viewBox="0 0 20 20">
                <path d="M0 3h20v2h-20v-2zM0 9h20v2h-20v-2zM0 15h20v2h-20v-2z"></path>
            </symbol>
            <symbol id="icon-edit-pencil" viewBox="0 0 20 20">
                <path d="M12.3 3.7l4 4-12.3 12.3h-4v-4l12.3-12.3zM13.7 2.3l2.3-2.3 4 4-2.3 2.3-4-4z"></path>
            </symbol>
            <symbol id="icon-view-show" viewBox="0 0 20 20">
                <path d="M0.2 10c1.86-3.592 5.548-6.004 9.8-6.004s7.94 2.412 9.771 5.943l0.029 0.061c-1.86 3.592-5.548 6.004-9.8 6.004s-7.94-2.412-9.771-5.943l-0.029-0.061zM10 14c2.209 0 4-1.791 4-4s-1.791-4-4-4v0c-2.209 0-4 1.791-4 4s1.791 4 4 4v0zM10 12c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z"></path>
            </symbol>
            <symbol id="icon-photo" viewBox="0 0 20 20">
                <path d="M0 4c0-1.1 0.9-2 2-2h16c1.105 0 2 0.895 2 2v0 12c0 1.105-0.895 2-2 2v0h-16c-1.105 0-2-0.895-2-2v0-12zM11 13l-3-3-6 6h16l-5-5-2 2zM15 9c1.105 0 2-0.895 2-2s-0.895-2-2-2v0c-1.105 0-2 0.895-2 2s0.895 2 2 2v0z"></path>
            </symbol>
        </svg>
    </div>
</template>

<script>
export default {
    name: "icon-shared",
    props: {
        icon: {
            required: true,
            default: "",
            type: String
        }
    }
}
</script>

<style>
    .icon {
        display: inline-block;
        width: 1em;
        height: 1em;
        stroke-width: 0;
        stroke: currentColor;
        fill: currentColor;
    }
</style>