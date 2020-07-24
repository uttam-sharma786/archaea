
// input box for organisms and test

$(document).ready(function(){
	//alert($("#optionDB").val());
	//autoComplete_name_old();
	autoComplete_name();
	autocomplete_test();
});

function autocomplete_name(org_list){
	//organism array
	var organism = [];
	//var organism = new Array();
	organism = org_list.split(";"); 
	
	// setup autocomplete function pulling from organism[] array
	$('#searchName').autocomplete({ source:organism });
    
}

function autocomplete_test(test_list){
	//organism array
	var tests = test_list.split(";"); 
	
	// setup autocomplete function pulling from organism[] array
	$('#searchTest').autocomplete({
		source: tests
    });
    
}








/**


// autocomplete suggestion for tests

//function autoComplete_name(){
function autoComplete_name_old(){
	
	var items;
	
	if($("#optionDB").val() == 'organismName'){
		
		$("#inputQuery").html('<input type="text" name="inputOrganism" id="search">');
		items = [
					'Enterobacter amnigenus biovar1','Enterobacter amnigenus biovar2',
					'Enterobacter cloacae',	'Enterobacter dissolvens',
					'Enterobacter aerogenus','Enterobacter agglomerans',
					'Enterobacter gergoviae','Enterobacter hormaechei',
					'Enterobacter intermedius','Enterobacter nimipressuralias',
					'Enterobacter sakazakii',
					'Enterobacter taylorae(cancerogenus)',
					'Enterobacter helveticus',
					'Enterobacter massiliensis',
					'Enterobacter pulveris',
					'Enterobacter turicensis',
					'Enterobacter radicincitans',
					'Enterobacter siamensis',
					'Enterobacter sacchari',
					'Enterobacter soli',
					'Enterobacter mori',
					'Enterobacter xiangfangensis',
					'Enterobacter oryzae',
					'Enterobacter asburie',
					'Enterobacter ludwigii',
					'Enterobacter cowanii',
					'Enterobacter arachidis',

			];
		
			$( "#search" ).autocomplete({
				minLength:3,
				source: items
			});
			
			
	
	}else{
		$("#inputQuery").html('<input type="text" name="inputTest" id="search">');
	
	items = [ 
					'gram staining', 'Indole', 'Methyl Red', 'voges-proskauer', 
					'citrate', 'urease', 'h2s production', 'oxidase', 'Motility',
					 'lysine decarboxylase', 'ornithine decarboxylase', 
					 'arginine dihydrolase', 'aesculine hydrolysis', 'sucrose', 
					 'melibiose', 'D-arabitol', 'D-sorbitol', 'L-fucose', 
					 'putrescine', 'alpha-L-rhamnose', 'mucate', 
					 '1-o-methyl alpha-galactopyranoside', 'KCN', 'gelatine', 
					 'lactose', 'phenylalanine deaminase', 'D-mannitol', 
					 'dulcitol', 'salicin', 'adonitol', 'raffinose', 'L-rhamnose', 
					 'malonate', 'Jordan tartrate', 'sodium acetate', 
					 'sodium algenate', 'lipase', 'D-glucose gas ', 
					 'D-xylose', 'maltose', 'cellobiose', 'D-glucose acid', 
					 'erithrytol', 'nitrate reductase', 'D-tartrate', 'pectinase', 
					 'glycogen', 'dextrine', 'glycerol', 'Acetate utilization',
					 'L-arabinose', 'i-erythritol', 'D-fructose', 'D-galactose', 
					 'myo-inositol', 'deoxyribonuclease', 'D-Mannose', 
					 'methyl b-D-glucoside', 'ONPG', 'trehalose', 'turanose', 
					 'xylitose', 'pigment', 'flagella arrangement', 'acetic acid', 
					 'cis aconitic acid', 'formic acid', 'D-galactorunic acid', 
					 'D-gluconic acid', 'D-glucosaminic acid', 'Malonic acid',
					 'D-saccharic acid', 'alpha-hydroxybutyric acid', 'b-hydroxybutyric acid', 
					 'alpha-ketoglutaric acid', 'D,l lactic acid', 'D-alanine', 'L-alanine', 
					 'L-asparage', 'L-aspartic acid ', 'D-glucose', 'L-sorbose', 'amygdelin', 
					 'melizetose', 'D-tagatose', 'alpha methyl glucoside', 'sodium pectate',
					  'N-acytyl D-galctosamin', 'N-acytyl D-glucosamin', 'lactulose', 
					  'D-psicose', 'pyruvic acid methyl ester', 'succinic acid mono methyl ester',
					   'catalase production', 'oxidase fermentation', 'trimethylamine production', 
					   'galacturonate', 'beta-glucronidase', 'L(+)- D-tartrate', 
					   'gamma-glutamyltransferase', 'lysis by phage O1', '5-bromo-3-indoxyl-nonanate', 
					   '4-nitrophenyl beta-D-glucopyranoside', '4-nitrophenyl beta-D-galactopyranoside',
					   '4-nitrophenyl alpha-D-glucopyranoside', '4-nitrophenyl alpha-D-galactopyranoside', 
					   '4-nitrophenyl alpha-D-maltopyranoside', '4-nitrophenyl beta-D-glucronide',
					    '4-nitroanilide', 'palatinose', 'alpha-D-glucose', 'beta-D-fructose', 
					    'alpha-D-melibiose', 'Maltitriose', 'alpha-lactose', '1-o-methyl beta-galactopyranoside', 
					    'beta-gentibiose', 'alpha-L-rhamnose', 'D-saccharate', 'L-malate', 
					    'trans-aconitate', '2-keto-D-gluconate', '5-keto-D-gluconate', 'D-gluconate', 
					    'protocatechuate', 'p-hydroxybenzoate', 'quinate', 'DL-alpha-amino-n-butyrate', 
					    'D-glucosamine', 'L-aspartate', 'L-glutamate', 'L-proline', 'L-arabitol', 
					    'Hydroxyquinoline-beta-glucuronide', '3-0-methyl D-glucopyranose', 'L-tartrate', 
					    'myo tartrate', 'tricarballylate', 'L-tryptophan', 'L-histadin', 'phenylacetate', 
					    'fumarate', 'gentisate', 'glutarate', 'm-hydroxybenzoate', '3-phenylpropionate', 'trigonelline', 'benzoate', 'itaconate', 'betaine', 'histamine', 'caprate', 'caprylate', 'ethanolamine', 'DL-a-amino-n-valerate', 'tryptamine', 'DL-glycerate', 'DL-b-hydroxybutyrate', 'propionate', '1-O-methyl-Beta-D-glucopyranoside', '1-O-methyl-Alpha-D-glucopyranoside', 'D-ribose', 'cis-aconitate', 'D-glucuronate', 'DL-lactate', 'L-serin', 'alpha-L-fucose', 'xylitol', 'L-tyrosin', 'alpha-ketoglutarate', 'maltiltol', 'L-tyrosin', 'phenol red', '2-oxoglutarate', 'Tryptophane deaminase', 'L-arbutine', 'adipate', 'azelate', '4-aminobutyrate', 'suberate', 'b-alanine', 'L-ornithine', 'L-histidine', 'L-leucine', '3-hydroxybenzoate', '4-hydroxybenzoate', 'casein', 'starch  ', 'tyrosine', 'mesaconate', 'p-nitrophenyl-b-D-glucopyranoside', 'p-nitrophenyl-b-D-xylopyranoside', 'bis-pNP-phosphate', 'L-proline-p-nitroanilide', 'L-gluta-mate-g-3-carboxy-pNA', 'L-alanine-p-nitroanilide', 'p-nitrophenyl-b-D-glucuronide', 'pNPG', 'pNP-a-D-glucopyranoside', '2-deoxythymidine-50 -p-nitrophenyl-phosphate', 'p-nitrophenyl-phosphoryl-choline', 'arbutin', 'd-lyxose', 'methyl-alpha-D-glucopyranoside ', 'methyl-alpha-D- mannopyranoside', 'methyl-beta-D-xylopyranoside', 'potassium-2-ketogluconate', 'potassium-5-ketogluconate', 'potassium gluconate', 'pectine', 'glycyl-L-proline', 'methyl pyruvate', 'D-glucose-PO4', 'D-fructose-6-po4', 'mucic acid', 'bromosuccinic-acid', 'L-galactonic acid lactone', 'L-lactic acid', '3-methyl glucose', 'L-malic acid', 'N-acetyl b-D-mannosamine', 'o-Nitrophenyl-b-galactosidase', 'D-galactonic acid-gamma-lactone', 'D-glucuronic acid', 'p-hydroxyphenylacetic acid', 'succinic acid', 'bromosuccinic acid', 'glucuronamide', 'L-alanyl glycine', 'L-asparagine', 'D-serine', 'L-glutamic acid', 'glucose 6-phosphate ', 'L-threonine', 'DL-a-glycerol phosphate', 'inosine', 'thymidine', 'D-arabinose', 'inuline', 'methyl-a-D-glucoside', 'vanillic acid', 'sodium oxalate', 'sodium hippurate', 'sodium benzoateate', 'protease', 'cellulase', 'L-alaninamide', 'glycyl l-aspartic acid', 'glycyl l-glutamic acid', 'L-pyroglutamic acid', 'urocanic acid', '1-phosphate', '5-aminovalerate', 'tricarballylic acid', 'meso-tartrate'
					];


		
		
	

	
	function split( val ) {
		return val.split( /,\s/ ); //s*
	}

	function extractLast( term ) {
		return split( term ).pop();
	}
 
	$( "#search" ).autocomplete({
		
		minLength:3,
		source: function( request, response ) { 
				
			response( $.ui.autocomplete.filter(
			items, extractLast( request.term ) ) );
			
		},
		focus: function() {
			return false;
		},
		select: function( event, ui ) {
			
			var terms = split( this.value );
			// remove the current input
			terms.pop();
			// add the selected item
			terms.push( ui.item.value );
			// add placeholder to get the comma-and-space at the end
			terms.push( "" );
			this.value = terms.join( ", " );
			return false;
		}
	});
	
	}
			
}

*/




