<template>
  <div class="date-content">
    <div class="date-time">
      <div class="current-date">{{ currentDate }}</div>
      <div class="current-time">{{ currentTime }}</div>
    </div>
    <!-- <div class="current-dust">미세먼지 데이터</div> -->
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      currentDate: "",
      currentTime: "",
    };
  },
  mounted() {
    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  },
  methods: {
    updateDateTime() {
      const now = new Date();
      this.currentDate = now.toLocaleDateString().slice(0, 10);
      this.currentTime = now.toLocaleTimeString().slice(0, 7);
      console.log("date", this.currentDate);
    },
  },
};
// export default {
//   data() {
//     return {
//       currentDate: "",
//       currentTime: "",
//     };
//   },
//   mounted() {
//     this.updateDateTime();
//     setInterval(() => {
//       this.updateDateTime();
//     }, 1000);
//   },
//   methods: {
//     updateDateTime() {
//       const now = new Date();
//       this.currentDate = now.toLocaleDateString().slice(0, 10);
//       this.currentTime = now.toLocaleTimeString().slice(0, 7);
//       console.log("date", this.currentDate);
//     },
//   },
// };
</script>
<style scoped lang="scss">
.date-content {
  display: flex;
  //   flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.current-date {
  color: white;
  font-size: 40px;
  font-family: "Jua", sans-serif;
}
.current-time {
  color: white;
  font-size: 35px;
  font-family: "Jua", sans-serif;
}
.date-time {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.current-dust {
  text-align: right;
}
</style>
