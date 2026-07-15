export const site = {
  name: 'もみほぐし専門店 とだ家',
  phoneDisplay: '080-5150-5630',
  phoneHref: 'tel:08051505630',
  lineUrl: 'https://lin.ee/6is5zgl',
  postalCode: '465-0093',
  address: '名古屋市名東区一社四丁目30-2 ユーハイツ三和2 407号室',
  station: '社駅 徒歩10分',
  weekdayHours: '9:30〜17:30',
  holidayHours: '10:30〜17:30',
  closed: '日祝（営業になる日もあり）',
  seats: '1席',
};

export const menuItems = [
  { name: 'もみほぐし', duration: '90分', price: '9,000円' },
  { name: 'もみほぐし90分 + 足つぼ30分', duration: '120分', price: '11,500円' },
  { name: 'もみほぐし60分 + ヘッドスパ15分', duration: '75分', price: '8,000円' },
  { name: 'もみほぐし60分 + ヘッドスパ30分', duration: '90分', price: '9,200円' },
  { name: 'もみほぐし60分 + ハンドケア20分', duration: '80分', price: '8,200円' },
];

export const treatmentImages = Array.from({ length: 9 }, (_, index) => ({
  src: `/images/sejutu${String(index + 1).padStart(2, '0')}.png`,
  alt: `施術の様子 ${index + 1}`,
}));
