// 將日期時間轉換成只有年/月/日
export const toGetTimeFilter = {
  filters: {
    toGetTime(datetime) {
      if (!datetime) return "-";
      return new Date(datetime).toLocaleDateString();
    },
  },
};
