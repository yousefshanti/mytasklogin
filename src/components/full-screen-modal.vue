<template>
    <div>
        <button @click="togglePopup">
            <iconWrapper icon-code="system-uicons:fullscreen" class="size-6 text-stone-400 mr-3" ></iconWrapper>
          
        </button>
        <div v-if="popup">
            <wrapperapp comp="tabel" class=" absolute left-0 top-0"/>
        </div>

    </div>
</template>


