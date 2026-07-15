import type { ImageMetadata } from 'astro';

export const site = {
  /** 本番の公開URL（末尾スラッシュなし）。OGP・canonical に使用 */
  url: 'https://todaya-momihogushi.pages.dev',
  name: 'もみほぐし専門店 とだ家',
  nameEn: 'Todaya',
  phoneDisplay: '080-5150-5630',
  phoneHref: 'tel:08051505630',
  telephone: '+81-80-5150-5630',
  lineUrl: 'https://lin.ee/6is5zgl',
  postalCode: '465-0093',
  addressRegion: '愛知県',
  addressLocality: '名古屋市名東区',
  streetAddress: '一社四丁目30-2 ユーハイツ三和2 407号室',
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

const sejutuModules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/sejutu*.png',
  { eager: true },
);

export const treatmentImages = Object.entries(sejutuModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, mod], index) => ({
    src: mod.default,
    alt: `施術の様子 ${index + 1}`,
  }));
