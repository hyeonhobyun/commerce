const numberWithCommas = (data: number) =>
  data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export { numberWithCommas };
