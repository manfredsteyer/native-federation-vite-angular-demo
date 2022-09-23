import { initFederation } from "@softarc/native-federation";

(async () => {

	await initFederation({
		'mfe1': 'http://localhost:3001/remoteEntry.json'
	});
	
	await import('./bootstrap');

})();