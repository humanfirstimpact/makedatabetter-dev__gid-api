var apis = {
		"lobs": "/lobs",
		"concepts": "/lobs/{lob}/concepts",
		"applications": "/concepts/{concept}/applications",
		"databases": "/concepts/{concept}/applications/{application}/databases",
		"schemas": "/concepts/{concept}/applications/{application}/databases/{database}/schemas",
		"tables": "/concepts/{concept}/applications/{application}/databases/{database}/schemas/{schema}/tables",
		"columns": "/concepts/{concept}/applications/{application}/databases/{database}/schemas/{schema}/tables/{table}/columns",
		"coverage": "/concepts/{concept}/coverage",
		"table-columns": "/tables/{table}/columns",
		"table-data": "/tables/{table}/rows",
		"recommended-concepts": "/columns/{column}/recommendedConcepts",
		"verify-concepts": "/columns/{column}/recommendedConcepts/{concept}/verify",
		"samples": "/columns/{column}/samples",
		"synonyms": "/columns/{column}/synonyms",
		"patterns": "/columns/{column}/patterns",
		"list-concepts": "/concepts/{user}/concepts",
		"concept-details" : "/concepts/{concept}"
}