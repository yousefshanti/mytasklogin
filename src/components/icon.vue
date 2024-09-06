<template>
  <div>
    <!-- Icon 1 -->
    <svg
      v-if="iconCode === 'icon1'"
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 1.917l10.1 4.208L12 10.333L1.9 6.125zM7.1 6.125L12 8.166l4.9-2.041L12 4.083zM2 9.98l10 4.308L22 9.98v2.181l-9.604 4.134l-.396.17l-.395-.17L2 12.162zm0 6l10 4.308l10-4.308v2.181l-9.603 4.134l-.397.17l-.395-.17L2 18.162z"
      />
    </svg>

    <!-- Icon 2 -->
    <svg
      v-if="iconCode === 'icon2'"
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
    >
      <path
        d="M22 1.847V12H12V3.276zM14 5.01V10h6V4.153zm-3-1.188V12H2V5.303zM4 7.001v3h5V6.177zm-2 6h9V21.1l-9-.857zm2 2v3.423l5 .476V15zm8-2h10v9.156l-10-1.459zm2 2v3.968l6 .875V15z"
      />
    </svg>

    <!-- Icon 3 -->
    <svg
      v-if="iconCode === 'icon3'"
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
    >
      <path
        d="M22 1.847V12H12V3.276zM14 5.01V10h6V4.153zm-3-1.188V12H2V5.303zM4 7.001v3h5V6.177zm-2 6h9V21.1l-9-.857zm2 2v3.423l5 .476V15zm8-2h10v9.156l-10-1.459zm2 2v3.968l6 .875V15z"
      />
    </svg>

    <!-- Icon 4 -->
    <svg
      v-if="iconCode === 'icon4'"
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
    >
      <path
        d="m7.886 1.859l8.086 3.537L22 2.382V11h-2V5.618l-3 1.5V11h-2V7.154L9 4.53v10.853l2.34 1.17l-.895 1.789l-2.401-1.201L2 20.766V5.98zM7 15.434V4.92l-3 2.1v10.213zM19 12v4h4v2h-4v4h-2v-4h-4v-2h4v-4z"
      />
    </svg>

    <!-- Icon 5 -->
    <svg
      v-if="iconCode === 'icon5'"
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
    >
      <path
        d="m7.886 1.859l8.086 3.537L22 2.382V11h-2V5.618l-3 1.5V11h-2V7.154L9 4.53v10.853l2.34 1.17l-.895 1.789l-2.401-1.201L2 20.766V5.98zM7 15.434V4.92l-3 2.1v10.213zM19 12v4h4v2h-4v4h-2v-4h-4v-2h4v-4z"
      />
    </svg>

    <!-- Icon 6 -->
    <svg
      v-if="iconCode === 'icon6'"
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
    >
      <path
        d="m7.886 1.859l8.086 3.537L22 2.382V11h-2V5.618l-3 1.5V11h-2V7.154L9 4.53v10.853l2.34 1.17l-.895 1.789l-2.401-1.201L2 20.766V5.98zM7 15.434V4.92l-3 2.1v10.213zM19 12v4h4v2h-4v4h-2v-4h-4v-2h4v-4z"
      />
    </svg>

    <!-- Icon 7 -->
    <svg
      v-if="iconCode === 'icon7'"
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H19q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm2-2h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7zm5-4.75q.325 0 .538-.213t.212-.537t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212M5 19V5z"
      />
    </svg>

    <!-- Icon 8 -->
    <svg
      v-if="iconCode === 'icon8'"
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
    >
      <path
        d="M1 2h22v17h-6v-2h4V4H3l.001 13h4v2H1zm11 13.587l4.242 4.242l2.42 2.415h-2.833l-1-1L12 18.417l-2.827 2.828l-1 1H5.34l2.419-2.414z"
      />
    </svg>

    <!-- Icon 9 -->
    <svg
      v-if="iconCode === 'icon10'"
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
    >
      <path
        d="M12.75 17.5a.75.75 0 0 0 0-1.5H6.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6.25a.75.75 0 0 0 0-1.5H6.5A3.5 3.5 0 0 0 3 6v8a3.5 3.5 0 0 0 3.5 3.5zm.991-11.301a.75.75 0 0 1 1.06.042l3 3.25a.75.75 0 0 1 0 1.018l-3 3.25A.75.75 0 1 1 13.7 12.74l1.838-1.991H7.75a.75.75 0 0 1 0-1.5h7.787l-1.838-1.991a.75.75 0 0 1 .042-1.06"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    iconCode: {
      type: String,
      required: true,
    },
  },
};
</script>
