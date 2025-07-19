export interface Student {
	no: number;
	ni: string;
	name: string;
	nickname?: string;
	gender: 'L' | 'P';
}

export const studentsLastModified = new Date(2025, 7 - 1, 17);

export const students: Student[] = [
	{ no: 1, ni: '2425.10.010', name: 'Alyssa', nickname: 'Alyssa', gender: 'P' },
	{ no: 2, ni: '2425.10.027', name: 'Bonaventura Ivan Himawan', nickname: 'Bona', gender: 'L' },
	{ no: 3, ni: '2425.10.031', name: 'Carissa Roxxane Yundra', nickname: 'Caca', gender: 'P' },
	{ no: 4, ni: '2425.10.037', name: 'Christian Ivan Gary', nickname: 'Ivan', gender: 'L' },
	{ no: 5, ni: '2425.10.043', name: 'Cornelius Marcel Octaviano', nickname: 'Marcel', gender: 'L' },
	{ no: 6, ni: '2425.10.047', name: 'Darren Leonel Ong', nickname: 'Darren', gender: 'L' },
	{ no: 7, ni: '2425.10.056', name: 'Dylan Rosella', nickname: 'Dylan', gender: 'L' },
	{ no: 8, ni: '2425.10.057', name: 'Edbert Declan Chandra', nickname: 'Declan', gender: 'L' },
	{ no: 9, ni: '2425.10.059', name: 'Edvard Ezekiel Tjong', nickname: 'Edvard', gender: 'L' },
	{ no: 10, ni: '2425.10.067', name: 'Eugene Valeska Elleree', nickname: 'Eve', gender: 'P' },
	{ no: 11, ni: '2425.10.068', name: 'Evan Nathanael', nickname: 'Evan', gender: 'L' },
	{ no: 12, ni: '2425.10.087', name: 'Gavin Aristo Djong', nickname: 'Gavin', gender: 'L' },
	{ no: 13, ni: '2425.10.089', name: 'Gerald Ezra Dewanto', nickname: 'Gerald', gender: 'L' },
	{ no: 14, ni: '2425.10.105', name: 'Hioe Gregorius Owen', nickname: 'Owen', gender: 'L' },
	{ no: 15, ni: '2425.10.116', name: 'Joanna Nicholas', nickname: 'Joanna', gender: 'P' },
	{ no: 16, ni: '2425.10.117', name: 'Jonathan Marvel Chandra', nickname: 'Jonathan', gender: 'L' },
	{ no: 17, ni: '2425.10.121', name: 'Jovannie Felicia', nickname: 'Jovannie', gender: 'P' },
	{ no: 18, ni: '2425.10.151', name: 'Matthew Linggar', nickname: 'Linggar', gender: 'L' },
	{ no: 19, ni: '2425.10.155', name: 'Megan Dyjas Harijono', nickname: 'Megan', gender: 'P' },
	{ no: 20, ni: '2425.10.179', name: 'Neva Benita Manurung', nickname: 'Neva', gender: 'P' },
	{ no: 21, ni: '2425.10.180', name: 'Nicholas Hansen', nickname: 'Hansen', gender: 'L' },
	{ no: 22, ni: '2425.10.181', name: 'Nicholas Rainer Ku', nickname: 'Rainer', gender: 'L' },
	{ no: 23, ni: '2425.10.184', name: 'Nicklein Nayaka Yoshi', nickname: 'Nicklein', gender: 'L' },
	{ no: 24, ni: '2425.10.192', name: 'Petrus Aria Prakoso Widarto', nickname: 'Aria', gender: 'L' },
	{ no: 25, ni: '2425.10.199', name: 'Raphanuel Habakuk Midian Siregar Siagian', nickname: 'Nuel', gender: 'L' },
	{ no: 26, ni: '2425.10.200', name: 'Rein Satyawarman', nickname: 'Rein', gender: 'L' },
	{ no: 27, ni: '2425.10.202', name: 'Ricky', nickname: 'Ricky', gender: 'L' },
	{ no: 28, ni: '2425.10.204', name: 'Ronan Priceton Setiawan', nickname: 'Priceton', gender: 'L' },
	{ no: 29, ni: '2425.10.205', name: 'Samantha Winarno', nickname: 'Sammy', gender: 'P' },
	{ no: 30, ni: '2425.10.214', name: 'Terrence Kenny', nickname: 'Kenny', gender: 'L' },
	{ no: 31, ni: '2425.10.216', name: 'Tirta Ariya Cayanto', nickname: 'Tirta', gender: 'L' },
	{ no: 32, ni: '2425.10.219', name: 'Tristan Nathanael', nickname: 'Tristan', gender: 'L' },
	{ no: 33, ni: '2425.10.230', name: 'Violaine Sandricka', nickname: 'Vio', gender: 'P' },
	{ no: 34, ni: '2425.10.235', name: 'William Oliver Widjaja', nickname: 'William', gender: 'L' }
];