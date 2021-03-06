
var forCareerComps = {
	"natOriginNation": {},
	"natHostNation": {},
};

var CONDITION_TYPE_GRADUATE_STUDIES = "graduateStudies";

function getConditionTypeMinXYearXp(numOfYear) {
	return "min"+numOfYear+"yearExp";
}

function isConditionTypeMinXYearXp(conditionType) {
	return conditionType.startsWith("min") && conditionType.endsWith("yearExp");
}

function getNumConditionTypeMinXYearXp(conditionType) {
	return parseint(conditionType.slice("min".length,conditionType.length - "yearExp".length));
}

function removeConditionMinXYearXp(careerArg) {
	let i = careerArg.condition.length - 1;
	while (i >= 0) {
	    if (isConditionTypeMinXYearXp(careerArg.condition[i].type)) { 
	    	careerArg.condition.splice(i, 1);
	    } 
	    i--;
	}
}

function removeConditionByType(careerArg, conditionType) {
	let i = careerArg.condition.length - 1;
	while (i >= 0) {
	    if (careerArg.condition[i].type === conditionType) { 
	    	careerArg.condition.splice(i, 1);
	    } 
	    i--;
	}
}

function addCondition(career, type, valsArg) {
	let elt = {"type": type, "val": []};
	if (Array.isArray(valsArg)) {
		elt.val = valsArg.slice();
	}
	else if (typeof(valsArg) === "string") {
		elt.val = [valsArg];
	}
	else {
		console.error("invalide value for valsArg:")
		console.error(valsArg)
	}
	career.condition.push(elt);
}

/**
 * This function add a choice of competence to the career. 
 * The duplicate competence (there are in career.competence and in cmpArray) will be remove from career competence array (the array career.competence)
 */
function addCmpChoice(careerArg, num, cmpArray) {
	let elt = {"number": parseInt(num), "competence": cmpArray.slice()}
	careerArg.competenceChoice.push(elt);
	let i = careerArg.competence.length - 1;
	while (i >= 0) {
	    if (cmpArray.includes(careerArg.competence[i])) { 
	    	careerArg.competence.splice(i, 1);
	    } 
	    i--;
	}
}

function copyStringArry(strArray) {
	let ret = [];
	for (let i = 0; i < strArray.length; i++) {
		ret.push(String(strArray[i]));
	}
	return ret;
}

function copyCondition(conditionsArray) {
	let ret = [];
	for (let i = 0; i < conditionsArray.length; i++) {
		let elt = {"type": String(conditionsArray[i].type), 
				"val": copyStringArry(conditionsArray[i].val),};
		ret.push(elt);
	}
	return ret;
}

function copyCompetenceChoice(competenceChoiceArray) {
	let ret = [];
	for (let i = 0; i < competenceChoiceArray.length; i++) {
		let elt = {"number": parseInt(competenceChoiceArray[i].number),
				"competence": copyStringArry(competenceChoiceArray[i].competence)};
		ret.push(elt);
	}
	return ret;
}

function copyProgression(progressionArray) {
	let ret = [];
	for (let i = 0; i < progressionArray.length; i++) {
		ret.push([parseInt(progressionArray[i][0]), parseInt(progressionArray[i][1]), parseInt(progressionArray[i][2])]);
	}
	return ret;
}


function copyRandomBusinessAdvantage(randomBusinessAdvantageArray) {
	let ret = [];
	for (let i = 0; i < randomBusinessAdvantageArray.length; i++) {
		let effectArray = [];
		for (let j = 0; j < randomBusinessAdvantageArray[i].effects.length; j++) {
			let newEffect = {"type": String(randomBusinessAdvantageArray[i].effects[j].type),
					"field": String(randomBusinessAdvantageArray[i].effects[j].field),
					"val": parseInt(randomBusinessAdvantageArray[i].effects[j].val),
					};
			effectArray.push(newEffect);
		}
		let elt = {"id": String(randomBusinessAdvantageArray[i].id),
				"effects": effectArray,};
		ret.push(elt);
	}
	return ret;
}

/**
 * Clone the given career and throw an exception if the schemas is not correct.
 */
function cloneCareerJson(jsonCareer) {
	let ret = {
			"id": String(jsonCareer.id),
			"condition": copyCondition(jsonCareer.condition),
			"competence": copyStringArry(jsonCareer.competence),
			"bitchyCompetence": copyStringArry(jsonCareer.bitchyCompetence),
			"competenceChoice": copyCompetenceChoice(jsonCareer.competenceChoice),
			"progression": copyProgression(jsonCareer.progression),
			"contact": parseFloat(jsonCareer.contact),
			"allySupplier": parseFloat(jsonCareer.allySupplier),
			"rival": parseFloat(jsonCareer.rival), 
			"enemies": parseFloat(jsonCareer.enemies),
			"businessAdvantage": copyStringArry(jsonCareer.businessAdvantage),
			"obtainableEquipmentGroup": copyStringArry(jsonCareer.obtainableEquipmentGroup),
			"randomBusinessAdvantage": copyRandomBusinessAdvantage(jsonCareer.randomBusinessAdvantage),
		};
	return ret;
}

var career = {
	"artistCraftMan": {
		"id": "artistCraftMan",
		"condition": [],
		"competence": ["armedStruggle", "education", "eloquence", /*"tradeCraft", *//*"tradeArt", */
		                "observation", ],
		"bitchyCompetence": ["natOriginNation"],
		"competenceChoice": [{"number": 3, "competence": ["singing", "storyteller", "dance", "music"]}],
		"progression": [
			[0, 2, 50],
			[3, 6, 1500],
			[7, 12,15000],
			[13, null, 30000],
		],
		"contact": 1.,
		"allySupplier": 0.5,
		"rival": 0.25, 
		"enemies": 0.,
		"businessAdvantage": ["shop", "artCraft", "fame", "relationship", "equipment"],
		"obtainableEquipmentGroup": ["standardEquipment", "craftEquipment"],
		"randomBusinessAdvantage": [
			{
				"id": "atrributUp",
				"effects": [{"type": "attribut", "field": "int", "val": 1}],
			},
			{
				"id": "performance",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 1},
				 	{"type": "businessAdvantage", "field": "artCraft", "val": 2},
				   	{"type": "businessAdvantage", "field": "fame", "val": 2},
				 ],
			},
			{
				"id": "highestStratum",
				"effects": [
					{"type": "income", "field": "oneYearMultiplier", "val": 2},
				 	{"type": "businessAdvantage", "field": "fame", "val": 4},
				   	{"type": "competencePoint", "field": "playerChoice", "val": 2},
				 	{"type": "businessAdvantage", "field": "artCraft", "val": 2},
				   	{"type": "businessAdvantage", "field": "relationship", "val": 1},
				 ],
			},
			{
				"id": "guildCompany",
				"effects": [
					{"type": "income", "field": "percentageIncreaseFromThisYear", "val": 10},
				 	{"type": "businessAdvantage", "field": "fame", "val": 2},
				   	{"type": "competencePoint", "field": "playerChoice", "val": 2},
				 	{"type": "businessAdvantage", "field": "artCraft", "val": 2},
				   	{"type": "contact", "field": "ally", "val": 1},
				 ],
			},
			{
				"id": "patron",
				"effects": [
				 	{"type": "businessAdvantage", "field": "fame", "val": 4},
				 	{"type": "businessAdvantage", "field": "artCraft", "val": 6},
					{"type": "income", "field": "percentageIncreaseFromThisYear", "val": 20},
				 	{"type": "businessAdvantage", "field": "shop", "val": 6},
				   	{"type": "contact", "field": "contact", "val": 1},
				 ],
			},
			{
				"id": "masterWork",
				"effects": [
				 	{"type": "businessAdvantage", "field": "fame", "val": 6},
					{"type": "income", "field": "oneYearMultiplier", "val": 3},
				   	{"type": "competencePoint", "field": "playerChoice", "val": 4},
				   	{"type": "businessAdvantage", "field": "relationship", "val": 2},
				 ],
			},
			{
				"id": "contract",
				"effects": [
				 	{"type": "businessAdvantage", "field": "fame", "val": 4},
				 	{"type": "businessAdvantage", "field": "artCraft", "val": 6},
					{"type": "income", "field": "percentageIncreaseFromThisYear", "val": 10},
				   	{"type": "contact", "field": "contact", "val": 1},
				 ],
			},
			{
				"id": "renown",
				"effects": [
				 	{"type": "businessAdvantage", "field": "fame", "val": 8},
					{"type": "income", "field": "percentageIncreaseFromThisYear", "val": 50},
					{"type": "competencePoint", "field": "playerChoice", "val": 2},
				 ],
			},
			{
				"id": "successfulYear",
				"effects": [
					{"type": "income", "field": "oneYearMultiplier", "val": 3},
				 	{"type": "businessAdvantage", "field": "artCraft", "val": 4},
				 ],
			},
			{
				"id": "playerChoice",
				"effects": [
					{"type": "randomBusinessAdvantage", "field": "playerChoice", "val": 1},
				 ],
			}
		],
	},
	"scholar": {
		"id": "scholar",
		"condition": [{"type": CONDITION_TYPE_GRADUATE_STUDIES, "val": ["science"]}],
		"competence": ["eloquence", "cryptography", "seeking", "onboardInstrumentation",
		                "computing", "mentalShield", "Meditation", ],
		"bitchyCompetence": ["natOriginNation"],
		"competenceChoice": [{"number": 6, 
		                      "competence": ["knowAdministration", "knowAstrophysics", "knowBiology", 
		                                     "knowBotany", "knowForensics", "knowLaw",
		                                     "knowEconomic", "knowGeology", "knowGeography",
		                                     "knowHistory", "knowPsychology", "knowPhysics",
		                                     "knowPoliticalScience", "knowSociology", "knowZoology", ]},
		                     {"number": 2, 
		                      "competence": ["natGeneticist", "natAllianceAzure", "natThemis", ]}],
		"progression": [
			[0, 2, 1000],
			[3, 6, 2000],
			[7, 12, 4000],
			[13, null, 14000],
		],
		"contact": 1.,
		"allySupplier": 0.5,
		"rival": 0.5, 
		"enemies": 0.,
		"businessAdvantage": ["relationship", "equipment", "privateCabin", "fame", "dataBase"],
		"obtainableEquipmentGroup": ["standardEquipment", "translationDataDrone", "computerEquipment",],
		"randomBusinessAdvantage": [
			{
				"id": "atrributUp",
				"effects": [{"type": "attribut", "field": "int", "val": 1}],
			},
			{
				"id": "performance",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 2},
				 	{"type": "businessAdvantage", "field": "fame", "val": 3},
				   	{"type": "businessAdvantage", "field": "dataBase", "val": 2},
				 ],
			},
			{
				"id": "exploit",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 4},
				 	{"type": "businessAdvantage", "field": "fame", "val": 4},
				   	{"type": "contact", "field": "ally", "val": 1},
				   	{"type": "contact", "field": "enemies", "val": 2},
				   	{"type": "businessAdvantage", "field": "relationship", "val": 4},
				   	{"type": "businessAdvantage", "field": "dataBase", "val": 4},
				 ],
			},
			{
				"id": "darkSecret",
				"effects": [
					{"type": "roleplayElement", "field": "secret", "val": 1},
					{"type": "competencePoint", "field": "playerChoice", "val": 6},
				 	{"type": "businessAdvantage", "field": "fame", "val": 6},
				   	{"type": "contact", "field": "rival", "val": 3},
				   	{"type": "businessAdvantage", "field": "relationship", "val": 4},
				   	{"type": "businessAdvantage", "field": "dataBase", "val": 6},
				 ],
			},
			{
				"id": "patron",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 2},
				 	{"type": "businessAdvantage", "field": "fame", "val": 2},
				   	{"type": "contact", "field": "ally", "val": 1},
					{"type": "income", "field": "oneYearMultiplier", "val": 2},
					{"type": "income", "field": "percentageIncreaseFromThisYear", "val": 20},
				   	{"type": "businessAdvantage", "field": "dataBase", "val": 4},
				 ],
			},
			{
				"id": "governmentFunding",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 3},
				 	{"type": "businessAdvantage", "field": "fame", "val": 4},
				   	{"type": "contact", "field": "ally", "val": 2},
					{"type": "income", "field": "percentageIncreaseFromThisYear", "val": 10},
				   	{"type": "businessAdvantage", "field": "dataBase", "val": 6},
				 ],
			},
			{
				"id": "scholarNetwork",
				"effects": [
				   	{"type": "businessAdvantage", "field": "relationship", "val": 6},
				 ],
			},
			{
				"id": "privateCabin",
				"effects": [
				   	{"type": "businessAdvantage", "field": "privateCabin", "val": 6},
				 ],
			},
			{
				"id": "data",
				"effects": [
				   	{"type": "businessAdvantage", "field": "dataBase", "val": 8},
				 ],
			},
			{
				"id": "playerChoice",
				"effects": [
					{"type": "randomBusinessAdvantage", "field": "playerChoice", "val": 1},
				 ],
			}
		],
	},
	"spy": {
		"id": "spy",
		"condition": [{"type": "min3yearExp", "val": ["diplomat", "mercenary", "investigator", "soldier", "watchman"]}],
		"competence": ["balance", "athletism", "climbing", "wrestling",
		                "armedStruggle", "unarmedStruggle", "handguns", "longGuns",
		                "psychology", "eloquence", "intimidation", "bureaucracy",
		                "cryptography", "education", "seeking", "dissimulation",
		                "disguise", "escape", "stealth", "discretion",
		                "pickpocket", "observation", "orientation", "monitoring",
		                "tampering", "computing", "hacking", "security","mentalShield" ],
		"bitchyCompetence": ["natOriginNation"],
		"competenceChoice": [{"number": 2, "competence": ["natHegemonie", "natRedLeague", "natCoralRepublic", 
							"natEquinoxe", "natMediterraneanUnion", "natPolarAlliance", 
							"natRiftState", "natCapFederation", "natFuegoLibertad",
							"natLemurie", "natRodhia", "natIndus"]}],
		"progression": [
			[0, 6, 600],
			[7, null, 6000],
		],
		"contact": 1.,
		"allySupplier": 0.33333333333333333,
		"rival": 0.5, 
		"enemies": 0.,
		"businessAdvantage": ["corruptionBlackmail", "tampering", "falseIdentities", "hideout",
							  "fame", "relationship", "equipment"],
		"obtainableEquipmentGroup": ["standardEquipment", "contactWeapon", "handgun", 
									 "spyingEquipment", "securityTools", "tamperingTools",],
		"randomBusinessAdvantage": [
			{
				"id": "atrributUp",
				"effects": [{"type": "attribut", "field": "ada", "val": 1}],
			},
			{
				"id": "doubleAgent",
				"effects": [
					{"type": "roleplayElement", "field": "doubleAgent", "val": 1},
				 ],
			},
			{
				"id": "corruption",
				"effects": [
				   	{"type": "businessAdvantage", "field": "corruptionBlackmail", "val": 6},
				 ],
			},
			{
				"id": "exploit",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 2},
				   	{"type": "businessAdvantage", "field": "falseIdentities", "val": 4},
				   	{"type": "businessAdvantage", "field": "tampering", "val": 4},
				   	{"type": "businessAdvantage", "field": "corruptionBlackmail", "val": 4},
				 ],
			},
			{
				"id": "tampering",
				"effects": [
				   	{"type": "businessAdvantage", "field": "tampering", "val": 6},
				 ],
			},
			{
				"id": "falseIdentities",
				"effects": [
				   	{"type": "businessAdvantage", "field": "falseIdentities", "val": 6},
				 ],
			},
			{
				"id": "performance",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 1},
				   	{"type": "businessAdvantage", "field": "falseIdentities", "val": 2},
				   	{"type": "businessAdvantage", "field": "tampering", "val": 2},
				   	{"type": "businessAdvantage", "field": "corruptionBlackmail", "val": 2},
				 ],
			},
			{
				"id": "network",
				"effects": [
				   	{"type": "businessAdvantage", "field": "relationship", "val": 6},
				 ],
			},
			{
				"id": "playerChoice",
				"effects": [
					{"type": "randomBusinessAdvantage", "field": "playerChoice", "val": 1},
				 ],
			}
		],
	},
	"eliteSoldierMarine": {
		"id": "eliteSoldierMarine",
		"condition": [{"type": "min3yearExp", "val": ["soldier"]},
			{"type": "min15AttrIn2Of", "val": ["for", "con", "vol"]}, ],
		"competence": ["athletism", "endurance", "closeSpecialWeapons", "armedStruggle",
			           "unarmedStruggle", "handguns", "heavyGuns", "longGuns",
			           "natMilitary", "commandoOperation", "dissimulation", "stealth",
		               "observation", "orientation", "survival", "onboardInstrumentation",
		               "explosive", "firstAid",
		               "underwaterBattlesuits", "breathing", "closeHeavyWeapons", "vehicleDriving",
		               "hunting", "knowOceans", "traps",],
		"competenceChoice": [{"number": 1, "competence": ["aggressiveMartialArts", "defensiveMartialArts", "wrestling"]}],
		"bitchyCompetence": ["natOriginNation"],
		"progression": [
			[0, 2, 400],
			[3, 5, 800],
			[6, 7, 3000],
			[8, null, 6000],
		],
		"contact": 0.5,
		"allySupplier": 0.25,
		"rival": 0.1666666, 
		"enemies": 0.,
		"businessAdvantage": ["fame", "relationship", "equipment"],
		"obtainableEquipmentGroup": ["standardEquipment", "contactWeapon", "handgun", 
									 "standardProtections", "underwaterBattlesuits",],
		"randomBusinessAdvantage": [
			{
				"id": "atrributUp",
				"effects": [{"type": "attribut", "field": "vol", "val": 1}],
			},
			{
				"id": "battle",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 2},
				 	{"type": "businessAdvantage", "field": "fame", "val": 2},
				   	{"type": "businessAdvantage", "field": "equipment", "val": 1},
				 ],
			},
			{
				"id": "award",
				"effects": [
					{"type": "income", "field": "oneYearMultiplier", "val": 2},
					{"type": "competencePoint", "field": "playerChoice", "val": 3},
				 	{"type": "businessAdvantage", "field": "fame", "val": 3},
				   	{"type": "businessAdvantage", "field": "equipment", "val": 2},
				 ],
			},
			{
				"id": "hero",
				"effects": [
					{"type": "income", "field": "oneYearMultiplier", "val": 3},
					{"type": "competencePoint", "field": "playerChoice", "val": 4},
				 	{"type": "businessAdvantage", "field": "fame", "val": 4},
				   	{"type": "businessAdvantage", "field": "equipment", "val": 3},
				 ],
			},
			{
				"id": "elite",
				"effects": [
					{"type": "income", "field": "percentageIncreaseFromThisYear", "val": 100},
					{"type": "competencePoint", "field": "playerChoice", "val": 6},
				 	{"type": "businessAdvantage", "field": "fame", "val": 6},
				   	{"type": "businessAdvantage", "field": "equipment", "val": 4},
				 ],
			},
			{
				"id": "performance",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 1},
				 	{"type": "businessAdvantage", "field": "fame", "val": 1},
				 ],
			},
			{
				"id": "formation",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 2},
				 	{"type": "businessAdvantage", "field": "relationship", "val": 1},
				 ],
			},
			{
				"id": "comradesInArms",
				"effects": [
				   	{"type": "contact", "field": "ally", "val": 1},
				 	{"type": "businessAdvantage", "field": "relationship", "val": 1},
				 ],
			},
			{
				"id": "privateMilitia",
				"effects": [
				   	{"type": "contact", "field": "ally", "val": 2},
				 	{"type": "businessAdvantage", "field": "relationship", "val": 4},
				 ],
			},
			{
				"id": "playerChoice",
				"effects": [
					{"type": "randomBusinessAdvantage", "field": "playerChoice", "val": 1},
				 ],
			}
		],
	},
	"eliteSoldierUnderground": {
		"id": "eliteSoldierUnderground",
		"condition": [{"type": "min3yearExp", "val": ["soldier"]},
			{"type": "min15AttrIn2Of", "val": ["for", "con", "vol"]}, ],
			"competence": ["athletism", "endurance", "closeSpecialWeapons", "armedStruggle",
		           "unarmedStruggle", "handguns", "heavyGuns", "longGuns",
		           "natMilitary", "commandoOperation", "dissimulation", "stealth",
	               "observation", "orientation", "survival", "onboardInstrumentation",
	               "explosive", "firstAid",
	               "climbing", "externalBattlesuits", "hunting", "vehicleDriving",
	               "knowUnderground", "traps", ],
		"competenceChoice": [{"number": 1, "competence": ["aggressiveMartialArts", "defensiveMartialArts", "wrestling"]}],
		"bitchyCompetence": ["natOriginNation"],
		"progression": [
			[0, 2, 500],
			[3, 5, 1200],
			[6, 7, 3600],
			[8, null, 7500],
		],
		"contact": 0.33333333,
		"allySupplier": 0.2,
		"rival": 0.1666666, 
		"enemies": 0.,
		"businessAdvantage": ["fame", "relationship", "equipment"],
		"obtainableEquipmentGroup": ["standardEquipment", "contactWeapon", "handgun", 
									 "standardProtections", "hybridBattlesuits",],
		"randomBusinessAdvantage": [
			{
				"id": "atrributUp",
				"effects": [{"type": "attribut", "field": "vol", "val": 1}],
			},
			{
				"id": "battle",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 2},
				 	{"type": "businessAdvantage", "field": "fame", "val": 2},
				   	{"type": "businessAdvantage", "field": "equipment", "val": 1},
				 ],
			},
			{
				"id": "award",
				"effects": [
					{"type": "income", "field": "oneYearMultiplier", "val": 2},
					{"type": "competencePoint", "field": "playerChoice", "val": 3},
				 	{"type": "businessAdvantage", "field": "fame", "val": 3},
				   	{"type": "businessAdvantage", "field": "equipment", "val": 2},
				 ],
			},
			{
				"id": "hero",
				"effects": [
					{"type": "income", "field": "oneYearMultiplier", "val": 3},
					{"type": "competencePoint", "field": "playerChoice", "val": 4},
				 	{"type": "businessAdvantage", "field": "fame", "val": 4},
				   	{"type": "businessAdvantage", "field": "equipment", "val": 3},
				 ],
			},
			{
				"id": "elite",
				"effects": [
					{"type": "income", "field": "percentageIncreaseFromThisYear", "val": 100},
					{"type": "competencePoint", "field": "playerChoice", "val": 6},
				 	{"type": "businessAdvantage", "field": "fame", "val": 6},
				   	{"type": "businessAdvantage", "field": "equipment", "val": 4},
				 ],
			},
			{
				"id": "performance",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 1},
				 	{"type": "businessAdvantage", "field": "fame", "val": 1},
				 ],
			},
			{
				"id": "formation",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 2},
				 	{"type": "businessAdvantage", "field": "relationship", "val": 1},
				 ],
			},
			{
				"id": "comradesInArms",
				"effects": [
				   	{"type": "contact", "field": "ally", "val": 1},
				 	{"type": "businessAdvantage", "field": "relationship", "val": 1},
				 ],
			},
			{
				"id": "privateMilitia",
				"effects": [
				   	{"type": "contact", "field": "ally", "val": 2},
				 	{"type": "businessAdvantage", "field": "relationship", "val": 4},
				 ],
			},
			{
				"id": "playerChoice",
				"effects": [
					{"type": "randomBusinessAdvantage", "field": "playerChoice", "val": 1},
				 ],
			}
		],
	},
	"eliteSoldierGround": {
		"id": "eliteSoldierGround",
		"condition": [{"type": "min3yearExp", "val": ["soldier"]},
			{"type": "min15AttrIn2Of", "val": ["for", "con", "vol"]}, ],
			"competence": ["athletism", "endurance", "closeSpecialWeapons", "armedStruggle",
		           "unarmedStruggle", "handguns", "heavyGuns", "longGuns",
		           "natMilitary", "commandoOperation", "dissimulation", "stealth",
	               "observation", "orientation", "survival", "onboardInstrumentation",
	               "explosive", "firstAid",
	               "climbing", "sniper", "externalBattlesuits", "atmosphericBattlesuits",
	               "vehicleDriving", "knowLand", "traps", ],
		"competenceChoice": [{"number": 1, "competence": ["aggressiveMartialArts", "defensiveMartialArts", "wrestling"]}],
		"bitchyCompetence": ["natOriginNation"],
		"progression": [
			[0, 2, 500],
			[3, 5, 1200],
			[6, 7, 3600],
			[8, null, 7500],
		],
		"contact": 0.2,
		"allySupplier": 0.1666666,
		"rival": 0.1666666, 
		"enemies": 0.,
		"businessAdvantage": ["fame", "relationship", "equipment"],
		"obtainableEquipmentGroup": ["standardEquipment", "contactWeapon", "handgun", 
									 "standardProtections", "externalBattlesuits",],
		"randomBusinessAdvantage": [
			{
				"id": "atrributUp",
				"effects": [{"type": "attribut", "field": "vol", "val": 1}],
			},
			{
				"id": "battle",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 2},
				 	{"type": "businessAdvantage", "field": "fame", "val": 2},
				   	{"type": "businessAdvantage", "field": "equipment", "val": 1},
				 ],
			},
			{
				"id": "award",
				"effects": [
					{"type": "income", "field": "oneYearMultiplier", "val": 2},
					{"type": "competencePoint", "field": "playerChoice", "val": 3},
				 	{"type": "businessAdvantage", "field": "fame", "val": 3},
				   	{"type": "businessAdvantage", "field": "equipment", "val": 2},
				 ],
			},
			{
				"id": "hero",
				"effects": [
					{"type": "income", "field": "oneYearMultiplier", "val": 3},
					{"type": "competencePoint", "field": "playerChoice", "val": 4},
				 	{"type": "businessAdvantage", "field": "fame", "val": 4},
				   	{"type": "businessAdvantage", "field": "equipment", "val": 3},
				 ],
			},
			{
				"id": "elite",
				"effects": [
					{"type": "income", "field": "percentageIncreaseFromThisYear", "val": 100},
					{"type": "competencePoint", "field": "playerChoice", "val": 6},
				 	{"type": "businessAdvantage", "field": "fame", "val": 6},
				   	{"type": "businessAdvantage", "field": "equipment", "val": 4},
				 ],
			},
			{
				"id": "performance",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 1},
				 	{"type": "businessAdvantage", "field": "fame", "val": 1},
				 ],
			},
			{
				"id": "formation",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 2},
				 	{"type": "businessAdvantage", "field": "relationship", "val": 1},
				 ],
			},
			{
				"id": "comradesInArms",
				"effects": [
				   	{"type": "contact", "field": "ally", "val": 1},
				 	{"type": "businessAdvantage", "field": "relationship", "val": 1},
				 ],
			},
			{
				"id": "privateMilitia",
				"effects": [
				   	{"type": "contact", "field": "ally", "val": 2},
				 	{"type": "businessAdvantage", "field": "relationship", "val": 4},
				 ],
			},
			{
				"id": "playerChoice",
				"effects": [
					{"type": "randomBusinessAdvantage", "field": "playerChoice", "val": 1},
				 ],
			}
		],
	},
	"eliteSoldierspecial": {
		"id": "eliteSoldierspecial",
		"condition": [{"type": "min3yearExp", "val": ["soldier"]},
			{"type": "min15AttrIn2Of", "val": ["for", "con", "vol"]}, ],
			"competence": ["athletism", "endurance", "closeSpecialWeapons", "armedStruggle",
		           "unarmedStruggle", "handguns", "heavyGuns", "longGuns",
		           "natMilitary", "commandoOperation", "dissimulation", "stealth",
	               "observation", "orientation", "survival", "onboardInstrumentation",
	               "explosive", "firstAid",
	               "sniper", "monitoring", "security", ],
		"competenceChoice": [{"number": 1, "competence": ["aggressiveMartialArts", "defensiveMartialArts", "wrestling"]}],
		"bitchyCompetence": ["natOriginNation"],
		"progression": [
			[0, 2, 400],
			[3, 5, 800],
			[6, 7, 3000],
			[8, null, 6000],
		],
		"contact": 0.5,
		"allySupplier": 0.25,
		"rival": 0.1666666, 
		"enemies": 0.,
		"businessAdvantage": ["fame", "relationship", "equipment"],
		"obtainableEquipmentGroup": ["standardEquipment", "contactWeapon", "handgun", 
									 "standardProtections",],
		"randomBusinessAdvantage": [
			{
				"id": "atrributUp",
				"effects": [{"type": "attribut", "field": "vol", "val": 1}],
			},
			{
				"id": "battle",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 2},
				 	{"type": "businessAdvantage", "field": "fame", "val": 2},
				   	{"type": "businessAdvantage", "field": "equipment", "val": 1},
				 ],
			},
			{
				"id": "award",
				"effects": [
					{"type": "income", "field": "oneYearMultiplier", "val": 2},
					{"type": "competencePoint", "field": "playerChoice", "val": 3},
				 	{"type": "businessAdvantage", "field": "fame", "val": 3},
				   	{"type": "businessAdvantage", "field": "equipment", "val": 2},
				 ],
			},
			{
				"id": "hero",
				"effects": [
					{"type": "income", "field": "oneYearMultiplier", "val": 3},
					{"type": "competencePoint", "field": "playerChoice", "val": 4},
				 	{"type": "businessAdvantage", "field": "fame", "val": 4},
				   	{"type": "businessAdvantage", "field": "equipment", "val": 3},
				 ],
			},
			{
				"id": "elite",
				"effects": [
					{"type": "income", "field": "percentageIncreaseFromThisYear", "val": 100},
					{"type": "competencePoint", "field": "playerChoice", "val": 6},
				 	{"type": "businessAdvantage", "field": "fame", "val": 6},
				   	{"type": "businessAdvantage", "field": "equipment", "val": 4},
				 ],
			},
			{
				"id": "performance",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 1},
				 	{"type": "businessAdvantage", "field": "fame", "val": 1},
				 ],
			},
			{
				"id": "formation",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 2},
				 	{"type": "businessAdvantage", "field": "relationship", "val": 1},
				 ],
			},
			{
				"id": "comradesInArms",
				"effects": [
				   	{"type": "contact", "field": "ally", "val": 1},
				 	{"type": "businessAdvantage", "field": "relationship", "val": 1},
				 ],
			},
			{
				"id": "privateMilitia",
				"effects": [
				   	{"type": "contact", "field": "ally", "val": 2},
				 	{"type": "businessAdvantage", "field": "relationship", "val": 4},
				 ],
			},
			{
				"id": "playerChoice",
				"effects": [
					{"type": "randomBusinessAdvantage", "field": "playerChoice", "val": 1},
				 ],
			}
		],
	},
	"investigator": {
		"id": "investigator",
		"condition": [],
		"competence": ["athletism", "endurance", "wrestling", "defensiveMartialArts",
		                "unarmedStruggle", "armedStruggle", "handguns", "longGuns",
		                "psychology", "leadership", "intimidation", "bureaucracy",
		                "natCriminality", "education", "seeking", "knowLaw",
		                "knowForensics", "discretion", "stealth", "observation",
		                "monitoring", "computing", "security", "firstAid", ],
		"bitchyCompetence": ["natOriginNation"],
		"competenceChoice": [],
		"progression": [
			[0, 1, 200],
			[2, 5, 800],
			[6, 7, 2400],
			[8, 11, 5000],
			[12, 15, 12000],
			[16, null, 20000],
		],
		"contact": 1.,
		"allySupplier": 0.25,
		"rival": 0.5, 
		"enemies": 0.,
		"businessAdvantage": ["dataBase", "fame", "corruptionBlackmail", "relationship",],
		"obtainableEquipmentGroup": ["standardEquipment", "handgun", "standardProtections", ],
		"randomBusinessAdvantage": [
			{
				"id": "atrributUp",
				"effects": [{"type": "attribut", "field": "int", "val": 1}],
			},
			{
				"id": "award",
				"effects": [
					{"type": "income", "field": "oneYearMultiplier", "val": 2},
					{"type": "competencePoint", "field": "playerChoice", "val": 3},
				 	{"type": "businessAdvantage", "field": "fame", "val": 3},
				 ],
			},
			{
				"id": "performance",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 1},
				 	{"type": "businessAdvantage", "field": "fame", "val": 1},
				 ],
			},
			{
				"id": "hero",
				"effects": [
					{"type": "income", "field": "oneYearMultiplier", "val": 3},
					{"type": "competencePoint", "field": "playerChoice", "val": 4},
				 	{"type": "businessAdvantage", "field": "fame", "val": 4},
				 ],
			},
			{
				"id": "elite",
				"effects": [
					{"type": "income", "field": "percentageIncreaseFromThisYear", "val": 100},
					{"type": "competencePoint", "field": "playerChoice", "val": 6},
				 	{"type": "businessAdvantage", "field": "fame", "val": 6},
				 ],
			},
			{
				"id": "informersNetwork",
				"effects": [
				 	{"type": "businessAdvantage", "field": "relationship", "val": 8},
				 ],
			},
			{
				"id": "borderlineProcedure",
				"effects": [
				 	{"type": "businessAdvantage", "field": "corruptionBlackmail", "val": 4},
					{"type": "income", "field": "oneYearMultiplier", "val": 2},
				   	{"type": "contact", "field": "enemies", "val": 1},
				 ],
			},
			{
				"id": "formation",
				"effects": [
					{"type": "newprofessionalCompetence", "field": "playerChoice", "val": 1},
					{"type": "competencePoint", "field": "playerChoice", "val": 2},
				 	{"type": "businessAdvantage", "field": "relationship", "val": 6},
				 ],
			},
			{
				"id": "privateMilitia",
				"effects": [
				   	{"type": "contact", "field": "ally", "val": 2},
				 	{"type": "businessAdvantage", "field": "relationship", "val": 4},
				 ],
			},
			{
				"id": "playerChoice",
				"effects": [
					{"type": "randomBusinessAdvantage", "field": "playerChoice", "val": 1},
				 ],
			}
		],
	},
	"smuggler": {
		"id": "smuggler",
		"condition": [],
		"competence": ["unarmedStruggle", "armedStruggle", "handguns", "longGuns",
		                "eloquence", "intimidation", "bureaucracy", "natPirate",
		                "natScavenger", "natCriminality", "navigation", "dissimulation",
		                "vesselsPilotage", "scootersDriving", "onboardInstrumentation", "tampering",],
		"bitchyCompetence": [],
		"competenceChoice": [{
			"number": 4, 
			"competence": ["tradeFood", "tradeRawMaterial", "tradeDevice",
			  			   "tradeElectronic", "tradeMedical", "tradeVehicle", 
						   "tradeWeapon", "tradeDrug", "tradeBlack",]}],
		"progression": [
			[0, 6, 350],
			[7, null, 55000],
		],
		"contact": 1.,
		"allySupplier": 0.33333333,
		"rival": 0.5, 
		"enemies": 0.,
		"businessAdvantage": ["fame", "relationship", "tampering", "smugglingRing", 
							  "hideout", "stockGoods", "corruptionBlackmail", "equipment",],
		"obtainableEquipmentGroup": ["longGun", "handgun", "contactWeapon", "smalTransportVessel",],
		"randomBusinessAdvantage": [
			{
				"id": "atrributUp",
				"effects": [{"type": "attribut", "field": "ada", "val": 1}],
			},
			{
				"id": "performance",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 1},
				 	{"type": "businessAdvantage", "field": "fame", "val": 2},
				 	{"type": "businessAdvantage", "field": "stockGoods", "val": 2},
				 ],
			},
			{
				"id": "exploit",
				"effects": [
					{"type": "competencePoint", "field": "playerChoice", "val": 2},
				 	{"type": "businessAdvantage", "field": "fame", "val": 4},
				 	{"type": "businessAdvantage", "field": "stockGoods", "val": 4},
					{"type": "income", "field": "oneYearMultiplier", "val": 2},
				 ],
			},
			{
				"id": "contract",
				"effects": [
				 	{"type": "businessAdvantage", "field": "fame", "val": 2},
				 	{"type": "businessAdvantage", "field": "relationship", "val": 3},
					{"type": "income", "field": "percentageIncreaseFromThisYear", "val": 10},
				 ],
			},
			{
				"id": "exclusiveContract",
				"effects": [
				 	{"type": "businessAdvantage", "field": "fame", "val": 4},
					{"type": "income", "field": "percentageIncreaseFromThisYear", "val": 20},
				 	{"type": "businessAdvantage", "field": "relationship", "val": 5},
				   	{"type": "contact", "field": "ally", "val": 1},
				 ],
			},
			{
				"id": "corruption",
				"effects": [
					{"type": "roleplayElement", "field": "port", "val": 1},
				 	{"type": "businessAdvantage", "field": "relationship", "val": 1},
				 	{"type": "businessAdvantage", "field": "corruptionBlackmail", "val": 4},
				 	{"type": "businessAdvantage", "field": "hideout", "val": 1},
				 ],
			},
			{
				"id": "tampering",
				"effects": [
				 	{"type": "businessAdvantage", "field": "relationship", "val": 1},
				 	{"type": "businessAdvantage", "field": "tampering", "val": 4},
				 ],
			},
			{
				"id": "network",
				"effects": [
				 	{"type": "businessAdvantage", "field": "relationship", "val": 6},
				 ],
			},
			{
				"id": "hideout",
				"effects": [
				 	{"type": "businessAdvantage", "field": "hideout", "val": 6},
				 ],
			},
			{
				"id": "playerChoice",
				"effects": [
					{"type": "randomBusinessAdvantage", "field": "playerChoice", "val": 1},
				 ],
			}
		],
	},
	//"soldier":
	//"barman":  
	//"contrebandier":
	//"diplomat":
	//"mercenary":
	//"watchman":
	/*
	"xxx": {
		"id": "xxx",
		"condition": [],
		"competence": ["xxx", "xxx", "xxx", "xxx",
		                "xxx", "xxx", "xxx", "xxx",
		                "xxx", "xxx", "xxx", "xxx",
		                "xxx", "xxx", "xxx", "xxx",
		                "xxx", "xxx", "xxx", "xxx",
		                "xxx", "xxx", "xxx", "xxx",
		                "xxx", "xxx", "xxx", "xxx",
		                "xxx", "xxx", "xxx", "xxx",
		                "xxx", "xxx", "xxx", "xxx", ],
		"bitchyCompetence": ["natOriginNation"],
		"competenceChoice": [],
		"progression": [
			[00, 10, 00],
			[20, 30, 00],
			[40, 50, 00],
			[60, null, 00],
		},
		"contact": 1.,
		"allySupplier": 0.5,
		"rival": 0.25, 
		"enemies": 0.,
		"businessAdvantage": ["xxx", "xxx", "xxx", "xxx",],
		"obtainableEquipmentGroup": ["xxx", "xxx", "xxx", "xxx",],
		"randomBusinessAdvantage": [
			{
				"id": "atrributUp",
				"effects": [{"type": "attribut", "field": "int", "val": 1}],
			},
			{
				"id": "xxx",
				"effects": [
				 ],
			},
			{
				"id": "playerChoice",
				"effects": [
					{"type": "randomBusinessAdvantage", "field": "playerChoice", "val": 1},
				 ],
			}
		],
	},
	*/
};