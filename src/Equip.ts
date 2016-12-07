// TypeScript file
class Jewel {

	enhance:number = 1;

	basicattack:number = 0;

	strength:number = 0;
	agility:number = 0;
	intelligence:number = 0;
	endurance:number = 0;

	dirtyFlag:boolean = true;


	public constructor(type:number) {

		this.basicattack = jewelConfig[type].basicattack;
		this.enhance = jewelConfig[type].enhance;

		this.strength = jewelConfig[type].strength
		this.agility = jewelConfig[type].agility;
		this.intelligence = jewelConfig[type].intelligence;
		this.endurance = jewelConfig[type].endurance;

	}

	setEnhance(enhance:number) {

		this.enhance = enhance;
		this.dirtyFlag = true;

	}


	@this.attackCache
	get attack():number {

		return (this.basicattack + this.strength * 1 + this.agility * 0.8 + this.intelligence * 0.6) * this.enhance;
	}

	@this.fightpowerCache
	get FightPower():number {

		var result = 0;

		result =  this.attack + this.endurance * 0.4 * this.enhance;

		return result;

	}

	attackCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

    fightpowerCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}


	
}


class Weapen implements Equipment{

	enhance:number = 1;

	basicattack:number = 0;

	strength:number = 0;
	agility:number = 0;
	intelligence:number = 0;
	endurance:number = 0;

	dirtyFlag:boolean = true;

	jewels:Jewel[] =[];

	public constructor(type:number) {

		this.basicattack = weapenConfig[type].basicattack;
		this.enhance = weapenConfig[type].enhance;

		this.strength = weapenConfig[type].strength
		this.agility = weapenConfig[type].agility;
		this.intelligence = weapenConfig[type].intelligence;
		this.endurance = weapenConfig[type].endurance;

	}

	@this.attackCache
	get attack():number {

		return (this.basicattack + this.strength * 1 + this.agility * 0.8 + this.intelligence * 0.6) * this.enhance;

	}

	@this.fightpowerCache
	get FightPower():number {

		var result = 0;

		for(var i = 0; i < this.jewels.length; i++) {

			result += this.jewels[i].FightPower;

		}

		result += this.attack + this.endurance * 0.4 * this.enhance;

		return result;

	}


	attackCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

    fightpowerCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

}