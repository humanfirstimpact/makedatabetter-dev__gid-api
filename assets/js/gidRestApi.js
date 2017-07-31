var apis = {
		"lobs": "/lobs",
		"concepts": "/lobs/{lob}/concepts",
		"applications": "/concepts/{concept}/applications",
		"databases": "/concepts/{concept}/applications/{application}/databases",
		"schemas": "/concepts/{concept}/applications/{application}/databases/{database}/schemas",
		"tables": "/concepts/{concept}/applications/{application}/databases/{database}/schemas/{schema}/tables",
		"columns": "/concepts/{concept}/applications/{application}/databases/{database}/schemas/{schema}/tables/{table}/columns",
		"coverage": "/concepts/{concept}/coverage",
		"tableColumns": "/tables/{table}/columns",
		"tableData": "/tables/{table}/rows",
		"recommendedConcepts": "/columns/{column}/recommendedConcepts",
		"verifyConcepts": "/columns/{column}/recommendedConcepts/{concept}/verify?hv=N",
		"samples": "/columns/{column}/samples",
		"synonyms": "/columns/{column}/synonyms",
		"patterns": "/columns/{column}/patterns",
		"listConcepts": "/concepts/{user}/concepts"
}