// TypeScript file
//每个用户都有英雄，每个英雄都有装备，每个装备都有宝石,根据不同道具、等级等属性可以计算出战斗力，生命值等数值。
class User {

    heros:Hero[] = [];
    herointeam:Hero[] = [];

    dirtyFlag:boolean = true;

    @this.herosinTeamCache
    getheroInTeam():Hero[] {

        var heroInTeam:Hero[] = [];

        for(var i = 0; i < this.heros.length; i++) {
            if(this.heros[i].isInTeam) {
                heroInTeam.push(this.heros[i]);

            }
        }

        return heroInTeam;

    }

    @this.fightpowerCache
    get FightPower():number {

        var result = 0;

        var heros:Hero[] = this.getheroInTeam();

        for(var i = 0; i < heros.length; i++) {
            result += heros[i].FightPower;

        }   

        return result;

    }

    herosinTeamCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

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


class Hero{
level:number = 1;

	isInTeam:boolean = false;

	basicAttFactor:number = 1;
	strFactor:number = 1;
	agiFactor:number = 1;
	intFactor:number = 1;
	endFactor:number = 1;

	dirtyFlag:boolean = true;

	equipments:Equipment[] = [];

	public constructor(type:number) {

		this.basicAttFactor = heroConfig[type].basicattack;
		this.strFactor = heroConfig[type].strength;
		this.agiFactor = heroConfig[type].agility;
		this.intFactor = heroConfig[type].intelligence;
		this.endFactor = heroConfig[type].endurance;

	}

	public setInTeam(status:boolean) {

		this.isInTeam = status;
		this.dirtyFlag = true;

	}

	@this.basicattackCache
	get basicattack():number {
		return  this.level * 10 * this.basicAttFactor;

	}

	@this.maxhpCache
	get maxhp():number {
		return this.level * 10 * this.endurance;
	}

	@this.maxmpCache
	get maxmp():number {
		return this.level * 10 * this.intelligence;
	}

	@this.defenceCacheCache
	get defence():number {
		return this.level * this.endurance;
	}

	@this.strengthCache
	get strength():number {
		return this.level * 10 * this.strFactor;
	}

	@this.intelligenceCache
	get intelligence():number {
		return this.level * 10 * this.intFactor;
	}

	@this.agilityCache
	get agility():number {
		return this.level * 10 * this.agiFactor;
	}

	@this.enduranceCache
	get endurance():number {
		return this.level * 10 * this.endFactor;
	}

	@this.attackCache
	get attack():number {
		return this.basicattack + this.strength * 1 + this.agility * 0.8 + this.intelligence * 0.6;
	}

	@this.fightpowerCache
	get FightPower():number {

		var result = 0;

        for(var i = 0; i < this.equipments.length; i++) {

			result += this.equipments[i].FightPower;

		}

		result += this.attack + this.defence * 0.5 + this.maxhp * 0.6 + this.maxmp *0.4; 

		return result;

	}

	basicattackCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

	maxhpCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

	maxmpCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

	defenceCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

	strengthCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

	intelligenceCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

	agilityCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

	enduranceCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

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