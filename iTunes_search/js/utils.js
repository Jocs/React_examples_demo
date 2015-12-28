function capitalize(str) {
	return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
}

export const getMedia = (str = 'all') => {
	if(!/\s/.test(str)){
		return str.toLowerCase();
	} else {
		return str.split(/\s/)[0] + capitalize(str.split(/\s/)[1]);
	}
};

export const getKind = (str) => {
	if(typeof str !== 'string') {return};
	if(str === 'tv') {
		return 'TV';
	} else if (str === 'feature') {
		return '';
	}

	if(str.indexOf('-') === -1) {
		return capitalize(str);
	} else {
		const sg = str.split('-');
		return getKind(sg[0]) + ' ' + capitalize(sg[1]);
	}
};