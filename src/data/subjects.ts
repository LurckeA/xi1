export interface Subject {
	code: string;
	long: string;
	short?: string;
	note?: string;
}

export const subjects = [
	{ code: '7', short: 'KIM', long: 'Kimia' },
	{ code: '12', short: 'PKWU', long: 'Prakarya dan Kewirausahaan' },
	{ code: '13', short: 'BK', long: 'Bimbingan Konseling' },
	{ code: '18', short: 'SEJ', long: 'Sejarah Indonesia' },
	{ code: '20', short: 'MTK-L', long: 'Matematika Lanjut' },
	{ code: '24', short: 'SBK', long: 'Seni Budaya' },
	{ code: '25', short: 'PCSL', long: 'Pendidikan Pancasila' },
	{ code: '27', short: 'PAK', long: 'Pendidikan Agama Katolik', note: 'Membawa kitab suci' },
	{ code: '29', short: 'GEO', long: 'Geografi' },
	{ code: '31', short: 'BING', long: 'Bahasa Inggris', note: 'Membawa dictionary' },
	{ code: '34', short: 'BIND', long: 'Bahasa Indonesia' },
	{ code: '35', short: 'FSK', long: 'Fisika' },
	{ code: '36', short: 'MTK-W', long: 'Matematika Wajib' },
	{ code: '37', short: 'PJOK', long: 'Pendidikan Jasmani Olahraga dan Kesehatan', note: 'Membawa kaos seragam OR' },
	{ code: '39', short: 'BMND', long: 'Bahasa Mandarin' /*note: 'Membawa buku cetak Bahasa Mandarin'*/ },
	{ code: '40', short: 'TIK', long: 'Teknologi Informasi dan Komunikasi' },
	{ code: '41', short: 'NTV', long: 'Public Speaking (Native)' },

	{ code: 'IST', long: 'Istirahat 1 (30m)' },
	{ code: 'IST2', long: 'Istirahat 2 (20m)' },
	{ code: 'P5', long: 'Proyek Penguatan Profil Pelajar Pancasila', short: 'P5' },
	{ code: 'PKT', long: 'Pendidikan Karakter Tarakanita', short: 'PKT' },
	{ code: 'PPPS', long: 'Pengembangan Potensi dan Prestasi Siswa', short: 'PPPS' },
	{ code: 'PRE', long: 'Doa Pagi & Indonesia Raya', short: 'Doa' },
	{ code: 'UPA', long: 'Upacara' }
];