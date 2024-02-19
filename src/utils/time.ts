function toYearMonthDay(timestamp: number) {
  // 创建一个新的日期对象
  const date = new Date(timestamp * 1000);

  // 获取年份
  const year = date.getFullYear();

  // 获取月份，并确保格式为两位数
  const month = `0${date.getMonth() + 1}`.slice(-2);

  // 获取日期，并确保格式为两位数
  const day = `0${date.getDate()}`.slice(-2);

  // 按照年月日的格式返回结果
  return `${year}-${month}-${day}`;
}
export default toYearMonthDay;
