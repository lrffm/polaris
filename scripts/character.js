let empyCharacterSheet = {
	"name": "",
	"archetype": "",
	"geneticType": "",
	"age": 0,
	"gender": "",
	"fertility": false,
	"belongingCommunity" : "",
	"geographicOrigin" : "",
	"socialOrigin" : "",
	"formationOrigin" : "",
	"schoolOrigin" : "",
	"originChoices" : {
		"geographic" : [],
		"social" : [],
		"formation" : [],
		"school" : [],
	},
	"creation": {
		"pcToPa": 0,
		"yearExperience": 0
	},
	"attribute": {
		"for": 7,
		"con": 7,
		"coo": 7,
		"ada": 7,
		"per": 7,
		"int": 7,
		"vol": 7,
		"pre": 7
	},
	"careerCompetenceChoise": [],
	"competence": {
		"physicalSkills" : {
			"balance": 0,
			"athletism": 0,
			"endurance": 0,
			"climbing": 0,
			"breathing": 0
		},
		"closeCombat" : {
			"closeHeavyWeapons": 0,
			"closeSpecialWeapons": 0,
			"aggressiveMartialArts": 0,
			"defensiveMartialArts": 0,
			"wrestling": 0,
			"unarmedStruggle": 0,
			"armedStruggle": 0
		},
		"rangeCombat" : {
			"throwingWeapons": 0,
			"handguns": 0,
			"rangedWeapons": 0,
			"heavyGuns": 0,
			"specialGuns": 0,
			"longGuns": 0,
			"sniper": 0
		},
		"socialeSkill" : {
			"psychology": 0,
			"leadership": 0,
			"eloquence": 0,
			"singing": 0,
			"storyteller": 0,
			"dance": 0,
			"music": 0,
			"intimidation": 0,
			"gambling": 0
		},
		"knowledge" : {
			"bureaucracy": 0,
			"cryptography": 0,
			"education": 0,
			"navigation": 0,
			"seeking": 0,
			"tradeFood": 0,
			"tradeRawMaterial": 0,
			"tradeDevice": 0,
			"tradeElectronic": 0,
			"tradeMedical": 0,
			"tradeInformation": 0,
			"tradeVehicle": 0,
			"tradeWeapon": 0,
			"tradeDrug": 0,
			"tradeBlack": 0,
			"natHegemonie": 0,
			"natRedLeague": 0,
			"natCoralRepublic": 0,
			"natEquinoxe": 0,
			"natMediterraneanUnion": 0,
			"natPolarAlliance": 0,
			"natAmazonia": 0,
			"natRiftState": 0,
			"natEnderby": 0,
			"natCapFederation": 0,
			"natFuegoLibertad": 0,
			"natLemurie": 0,
			"natRodhia": 0,
			"natIndus": 0,
			"natWatchmen": 0,
			"natMercenary": 0,
			"natMilitary": 0,
			"natPirate": 0,
			"natSmuggler": 0,
			"natScavenger": 0,
			"natCriminality": 0,
			"natBlackSun": 0,
			"natAbysseBrother": 0,
			"natLeviathan": 0,
			"natThemis": 0,
			"natGeneticist": 0,
			"natAllianceAzure": 0,
			"knowAdministration": 0,
			"knowWeapons": 0,
			"knowAstrophysics": 0,
			"knowBiology": 0,
			"knowBionic": 0,
			"knowBiotechnology": 0,
			"knowBotany": 0,
			"knowForensics": 0,
			"knowLaw": 0,
			"knowEconomic": 0,
			"knowGeology": 0,
			"knowGeography": 0,
			"knowHistory": 0,
			"knowSoftware": 0,
			"knowMedicine": 0,
			"knowNanotechnology": 0,
			"knowPharmacology": 0,
			"knowPhysics": 0,
			"knowPsychology": 0,
			"knowRobotics": 0,
			"knowPoliticalScience": 0,
			"knowSociology": 0,
			"knowTelecom": 0,
			"knowZoology": 0,
			"navalWarfare": 0,
			"undergroundlWarfare": 0,
			"landCombat": 0,
			"commandoOperation": 0
		},
		"furtivity" : {
			"dissimulation": 0,
			"disguise": 0,
			"discretion": 0,
			"escape": 0,
			"stealth": 0,
			"pickpocket": 0,
			"hacking": 0,
			"monitoring": 0
		},
		"steering" : {
			"atmosphericBattlesuits": 0,
			"externalBattlesuits": 0,
			"underwaterBattlesuits": 0,
			"fighterFlying": 0,
			"vesselsPilotage": 0,
			"spacecraftDriving": 0,
			"vehicleDriving": 0,
			"scootersDriving": 0,
			"remotePiloting": 0
		},
		"survivalCat" : {
			"hunting": 0,
			"knowCity": 0,
			"knowOceans": 0,
			"knowUnderground": 0,
			"knowLand": 0,
			"observation": 0,
			"orientation": 0,
			"survival": 0,
			"firstAid": 0
		},
		"techniques" : {
			"onboardInstrumentation": 0,
			"farming": 0,
			"surgery": 0,
			"animalsTraining": 0,
			"electronic": 0,
			"explosive": 0,
			"tampering": 0,
			"computing": 0,
			"mechanicsLifeSupport": 0,
			"mechanicsMachinery": 0,
			"mechanicsVehicle": 0,
			"mechanicsBattleSuits": 0,
			"mechanicsVessel": 0,
			"traps": 0,
			"security": 0
		},
		"specialCat" : {
			"absence": 0,
			"mentalShield": 0,
			"bodyControl": 0,
			"mutations": 0,
			"hybrid": 0,
			"hypnosis": 0,
			"controlPolarisEcho": 0,
			"controlPolarisEffect": 0,
			"Meditation": 0,
			"polarisPower": 0
		}
	}
};

function newEmpyCharacterSheet() {
	//Clone the template
	return JSON.parse(JSON.stringify(empyCharacterSheet));
}


