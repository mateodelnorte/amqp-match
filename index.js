module.exports = function match (actual, expected) {
	if (actual === expected) return true;
	var regexString = '^' +
		expected.replace(/[.]/g, '\\.') // escape dots
			.replace(/\*/g, '([^.]+)') // single word wildcard
			.replace(/^#$/, '([^.]+[.]?)*') // multi word wildcard on its own
			.replace(/^#\\./, '([^.]+[.])*') // multi word wildcard at start of key
			.replace(/\\.#$/, '([.][^.]+)*') // multi word wildcard at end of key
			.replace(/\\.#\\./g, '(([.].*[.])*|[.])') // multi word wildcard within key
			+ '$';
	return actual.search(regexString) !== -1;
};
