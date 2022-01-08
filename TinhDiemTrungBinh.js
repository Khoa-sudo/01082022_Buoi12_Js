var diemTrungBinh = (diemToan, diemLy, diemHoa) => {
  var diemTrungBinh = 0;

  diemTrungBinh = (diemToan + diemLy + diemHoa) / 3;

  return diemTrungBinh;
};

var result = diemTrungBinh(9, 9, 9);
console.log(result);
