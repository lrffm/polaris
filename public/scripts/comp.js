var comps = {
	"physicalSkills" : {
		"balance": {
			"base": 0,
			"attr": ["coo", "coo"],
			"limiting": true,
		},
		"athletism": {
			"base": 0,
			"attr": ["for", "coo"],
		},
		"endurance": {
			"base": 0,
			"attr": ["con", "vol"],
			"limiting": true,
		},
		"climbing": {
			"base": 0,
			"attr": ["for", "coo"],
		},
		"breathing": {
			"base": -3,
			"attr": ["con", "vol"],
		},
	},
	"closeCombat" : {
		"closeHeavyWeapons": {
			"base": 0,
			"attr": ["for", "for"],
		},
		"closeSpecialWeapons": {
			"base": -3,
			"attr": ["coo", "coo"],
		},
		"aggressiveMartialArts": {
			"base": -3,
			"attr": ["coo", "ada"],
			"limiting": true,
		},
		"defensiveMartialArts": {
			"base": -3,
			"attr": ["coo", "ada"],
			"limiting": true,
		},
		"wrestling": {
			"base": -3,
			"attr": ["coo", "ada"],
			"limiting": true,
		},
		"unarmedStruggle": {
			"base": 0,
			"attr": ["for", "coo"],
		},
		"armedStruggle": {
			"base": 0,
			"attr": ["for", "coo"],
		},
	},
	"rangeCombat" : {
		"throwingWeapons": {
			"base": -3,
			"attr": ["coo", "per"],
		},
		"handguns": {
			"base": 0,
			"attr": ["coo", "per"],
		},
		"rangedWeapons": {
			"base": 0,
			"attr": ["coo", "per"],
		},
		"heavyGuns": {
			"base": -3,
			"attr": ["coo", "per"],
		},
		"specialGuns": {
			"base": -3,
			"attr": ["for", "coo"],
		},
		"longGuns": {
			"base": 0,
			"attr": ["coo", "per"],
		},
		"sniper": {
			"base": -3,
			"attr": ["per", "vol"],
			"limiting": true,
		},
	},
	"socialeSkill" : {
		"psychology": {
			"base": -3,
			"attr": ["int", "per"],
		},
		"leadership": {
			"base": 0,
			"attr": ["vol", "pre"],
		},
		"eloquence": {
			"base": 0,
			"attr": ["int", "pre"],
			"requirement" : {
				"education" : 10,
			},
		},
		"singing": {
			"base": -3,
			"attr": ["vol", "pre"],
		},
		"storyteller": {
			"base": -3,
			"attr": ["ada", "pre"],
		},
		"dance": {
			"base": -3,
			"attr": ["coo", "pre"],
		},
		"music": {
			"base": null,
			"attr": ["coo", "per"],
		},
		"intimidation": {
			"base": 0,
			"attr": ["vol","pre"],
		},
		"gambling": {
			"base": 0,
			"attr": ["vol", "per"],
		},
	},
	"knowledge" : {
		"bureaucracy": {
			"requirement" : {
				"education" : 5,
			},
			"base": 0,
			"attr": ["int", "vol"],
		},
		"cryptography": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
			},
		},
		"education": {
			"base": -3,
			"attr": ["int", "int"],
		},
		"navigation": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
			},
		},
		"seeking": {
			"base": -3,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
			},
		},
		"tradeFood": {
			"base": -3,
			"attr": ["int", "pre"],
			"requirement" : {
				"education" : 5,
			},
		},
		"tradeRawMaterial": {
			"base": -3,
			"attr": ["int", "pre"],
			"requirement" : {
				"education" : 5,
			},
		},
		"tradeDevice": {
			"base": -3,
			"attr": ["int", "pre"],
			"requirement" : {
				"education" : 5,
			},
		},
		"tradeElectronic": {
			"base": -3,
			"attr": ["int", "pre"],
			"requirement" : {
				"education" : 10,
			},
		},
		"tradeMedical": {
			"base": -3,
			"attr": ["int", "pre"],
			"requirement" : {
				"education" : 10,
			},
		},
		"tradeInformation": {
			"base": -3,
			"attr": ["int", "pre"],
			"requirement" : {
				"education" : 5,
			},
		},
		"tradeVehicle": {
			"base": -3,
			"attr": ["int", "pre"],
			"requirement" : {
				"education" : 5,
			},
		},
		"tradeWeapon": {
			"base": -3,
			"attr": ["int", "pre"],
			"requirement" : {
				"education" : 5,
			},
		},
		"tradeDrug": {
			"base": null,
			"attr": ["int", "pre"],
			"requirement" : {
				"education" : 5,
			},
		},
		"tradeBlack": {
			"base": null,
			"attr": ["int", "pre"],
			"requirement" : {
				"education" : 5,
			},
		},
		"natHegemonie": {
			"base": 0,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "nation",
		},
		"natRedLeague": {
			"base": 0,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "nation",
		},
		"natCoralRepublic": {
			"base": 0,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "nation",
		},
		"natEquinoxe": {
			"base": 0,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "nation",
		},
		"natMediterraneanUnion": {
			"base": 0,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "nation",
		},
		"natPolarAlliance": {
			"base": -3,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "nation",
		},
		"natAmazonia": {
			"base": null,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "nation",
		},
		"natRiftState": {
			"base": -3,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "nation",
		},
		"natEnderby": {
			"base": -3,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "nation",
		},
		"natCapFederation": {
			"base": -3,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "nation",
		},
		"natFuegoLibertad": {
			"base": -3,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "nation",
		},
		"natLemurie": {
			"base": -3,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "nation",
		},
		"natRodhia": {
			"base": -3,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "nation",
		},
		"natIndus": {
			"base": -3,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "nation",
		},
		"natWatchmen": {
			"base": 0,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "organisation",
		},
		"natMercenary": {
			"base": 0,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "organisation",
		},
		"natMilitary": {
			"base": -3,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "organisation",
		},
		"natPirate": {
			"base": -3,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "organisation",
		},
		"natSmuggler": {
			"base": null,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "organisation",
		},
		"natScavenger": {
			"base": null,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "organisation",
		},
		"natCriminality": {
			"base": null,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "organisation",
		},
		"natTridentWorship": {
			"base": -3,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "organisation",
		},
		"natBlackSun": {
			"base": null,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "organisation",
		},
		"natAbysseBrother": {
			"base": null,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "organisation",
		},
		"natLeviathan": {
			"base": null,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "organisation",
		},
		"natThemis": {
			"base": null,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "organisation",
		},
		"natGeneticist": {
			"base": null,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "organisation",
		},
		"natAllianceAzure": {
			"base": null,
			"attr": ["int", "pre"],
			"limiting": true,
			"naturalIncrease" : true,
			"set": "organisation",
		},
		"knowAdministration": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
			},
		},
		"knowWeapons": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
			},
		},
		"knowAstrophysics": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
				"knowPhysics" : 10,
			},
		},
		"knowBiology": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
			},
		},
		"knowBionic": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
				"knowBiology" : 10,
			},
		},
		"knowBiotechnology": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
				"knowBiology" : 10,
			},
		},
		"knowBotany": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
				"knowBiology" : 7,
			},
		},
		"knowForensics": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
				"knowPhysics" : 5,
				"knowSociology" : 5,
			},
		},
		"knowLaw": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
			},
		},
		"knowEconomic": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
			},
		},
		"knowGeology": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
				"knowPhysics" : 5,
			},
		},
		"knowGeography": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
			},
		},
		"knowHistory": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
			},
		},
		"knowSoftware": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
				"computing" : 10,
			},
		},
		"knowMedicine": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
				"knowBiology" : 7,
			},
		},
		"knowNanotechnology": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
				"knowPhysics" : 10,
			},
		},
		"knowPharmacology": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
				"knowBiology" : 5,
				"knowPhysics" : 5,
			},
		},
		"knowPhysics": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
			},
		},
		"knowPsychology": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
			},
		},
		"knowRobotics": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
				"computing" : 10,
				"electronic" : 10,
			},
		},
		"knowPoliticalScience": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
				"knowGeography" : 7,
				"knowHistory" : 5,
			},
		},
		"knowSociology": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
			},
		},
		"knowTelecom": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
				"computing" : 5,
				"electronic" : 10,
			},
		},
		"knowZoology": {
			"base": null,
			"attr": ["int", "int"],
			"requirement" : {
				"education" : 10,
				"knowBiology" : 7,
			},
		},
		"navalWarfare": {
			"base": -3,
			"attr": ["int", "ada"],
		},
		"undergroundlWarfare": {
			"base": 0,
			"attr": ["int", "ada"],
		},
		"landCombat": {
			"base": 0,
			"attr": ["int", "ada"],
		},
		"commandoOperation": {
			"base": 0,
			"attr": ["int", "ada"],
		},
	},
	"furtivity" : {
		"dissimulation": {
			"base": -3,
			"attr": ["per", "ada"],
		},
		"disguise": {
			"base": 0,
			"attr": ["ada", "pre"],
		},
		"discretion": {
			"base": 0,
			"attr": ["per", "ada"],
		},
		"escape": {
			"base": null,
			"attr": ["coo", "vol"],
		},
		"stealth": {
			"base": 0,
			"attr": ["per", "ada"],
			"limiting": true,
		},
		"pickpocket": {
			"base": -3,
			"attr": ["coo", "ada"],
		},
		"hacking": {
			"base": null,
			"attr": ["vol", "ada"],
			"requirement" : {
				"computing" : 10,
			},
		},
		"monitoring": {
			"base": null,
			"attr": ["per", "ada"],
		},
	},
	"steering" : {
		"atmosphericBattlesuits": {
			"base": null,
			"attr": ["coo", "ada"],
			"limiting": true,
		},
		"externalBattlesuits": {
			"base": 0,
			"attr": ["coo", "ada"],
			"limiting": true,
		},
		"underwaterBattlesuits": {
			"base": 0,
			"attr": ["coo", "ada"],
			"limiting": true,
		},
		"fighterFlying": {
			"base": null,
			"attr": ["int", "ada"],
			"requirement" : {
				"education" : 10,
				"athletism" : 10,
			},
		},
		"vesselsPilotage": {
			"base": null,
			"attr": ["int", "ada"],
			"requirement" : {
				"education" : 10,
			},
		},
		"spacecraftDriving": {
			"base": null,
			"attr": ["int", "ada"],
			"requirement" : {
				"education" : 10,
			},
		},
		"vehicleDriving": {
			"base": null,
			"attr": ["per", "ada"],
		},
		"scootersDriving": {
			"base": 0,
			"attr": ["per", "ada"],
		},
		"remotePiloting": {
			"base": -3,
			"attr": ["int", "ada"],
		},
	},
	"survivalCat" : {
		"hunting": {
			"base": 0,
			"attr": ["per", "ada"],
		},
		"knowCity": {
			"base": 0,
			"attr": ["int", "ada"],
			"limiting": true,
			"naturalIncrease" : true,
		},
		"knowOceans": {
			"base": -3,
			"attr": ["int", "ada"],
			"limiting": true,
			"naturalIncrease" : true,
		},
		"knowUnderground": {
			"base": -3,
			"attr": ["int", "ada"],
			"limiting": true,
			"naturalIncrease" : true,
		},
		"knowLand": {
			"base": null,
			"attr": ["int", "ada"],
			"limiting": true,
			"naturalIncrease" : true,
		},
		"observation": {
			"base": 0,
			"attr": ["per", "vol"],
		},
		"orientation": {
			"base": 0,
			"attr": ["per", "ada"],
		},
		"survival": {
			"base": null,
			"attr": ["ada", "vol"],
		},
		"firstAid": {
			"base": -3,
			"attr": ["int", "ada"],
		},
	},
	"techniques" : {
		"onboardInstrumentation": {
			"base": null,
			"attr": ["int", "ada"],
		},
		"farming": {
			"base": 0,
			"attr": ["int", "pre"],
		},
		"surgery": {
			"base": null,
			"attr": ["coo", "int"],
			"requirement" : {
				"knowMedicine" : 10,
			},
		},
		"animalsTraining": {
			"base": -3,
			"attr": ["vol", "pre"],
		},
		"electronic": {
			"base": null,
			"attr": ["int", "coo"],
			"requirement" : {
				"education" : 10,
			},
		},
		"explosive": {
			"base": null,
			"attr": ["int", "vol"],
		},
		"tampering": {
			"base": null,
			"attr": ["int", "per"],
			"requirement" : {
				"bureaucracy" : 7,
				"computing" : 7,
				"electronic" : 7,
			},
		},
		"computing": {
			"base": -3,
			"attr": ["int", "ada"],
			"requirement" : {
				"education" : 10,
			},
		},
		"mechanicsLifeSupport": {
			"base": 0,
			"attr": ["coo", "int"],
			"requirement" : {
				"electronic" : 5,
			},
		},
		"mechanicsMachinery": {
			"base": 0,
			"attr": ["coo", "int"],
		},
		"mechanicsVehicle": {
			"base": 0,
			"attr": ["coo", "int"],
		},
		"mechanicsBattleSuits": {
			"base": 0,
			"attr": ["coo", "int"],
			"requirement" : {
				"electronic" : 5,
			},
		},
		"mechanicsVessel": {
			"base": 0,
			"attr": ["coo", "int"],
			"requirement" : {
				"electronic" : 5,
			},
		},
		"traps": {
			"base": -3,
			"attr": ["coo", "per"],
		},
		"security": {
			"base": null,
			"attr": ["int", "ada"],
		},
	},
	"specialCat" : {
		"absence": {
			"base": null,
			"attr": ["ada", "vol"],
		},
		"mentalShield": {
			"base": null,
			"attr": ["vol", "vol"],
		},
		"bodyControl": {
			"base": null,
			"attr": ["con", "vol"],
		},
		"mutations": {
			"base": null,
			"attr": ["con", "vol"],
		},
		"hybrid": {
			"base": null,
			"attr": ["vol", "pre"],
		},
		"hypnosis": {
			"base": null,
			"attr": ["vol", "pre"],
		},
		"controlPolarisEcho": {
			"base": null,
			"attr": ["int", "vol"],
		},
		"controlPolarisEffect": {
			"base": null,
			"attr": ["vol", "vol"],
		},
		"Meditation": {
			"base": null,
			"attr": ["vol", "vol"],
		},
		"polarisPower": {
			"base": null,
			"attr": ["int", "vol"],
		},
	}
};