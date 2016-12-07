var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// TypeScript file
var Jewel = (function () {
    function Jewel(type) {
        var _this = this;
        this.enhance = 1;
        this.basicattack = 0;
        this.strength = 0;
        this.agility = 0;
        this.intelligence = 0;
        this.endurance = 0;
        this.dirtyFlag = true;
        this.attackCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_1 = desc.get;
                desc.get = function () {
                    return getter_1.apply(this);
                };
                return desc;
            }
        };
        this.fightpowerCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_2 = desc.get;
                desc.get = function () {
                    return getter_2.apply(this);
                };
                return desc;
            }
        };
        this.basicattack = jewelConfig[type].basicattack;
        this.enhance = jewelConfig[type].enhance;
        this.strength = jewelConfig[type].strength;
        this.agility = jewelConfig[type].agility;
        this.intelligence = jewelConfig[type].intelligence;
        this.endurance = jewelConfig[type].endurance;
    }
    var d = __define,c=Jewel,p=c.prototype;
    p.setEnhance = function (enhance) {
        this.enhance = enhance;
        this.dirtyFlag = true;
    };
    d(p, "attack"
        ,function () {
            return (this.basicattack + this.strength * 1 + this.agility * 0.8 + this.intelligence * 0.6) * this.enhance;
        }
    );
    d(p, "FightPower"
        ,function () {
            var result = 0;
            result = this.attack + this.endurance * 0.4 * this.enhance;
            return result;
        }
    );
    __decorate([
        this.attackCache
    ], p, "attack", null);
    __decorate([
        this.fightpowerCache
    ], p, "FightPower", null);
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
var Weapen = (function () {
    function Weapen(type) {
        var _this = this;
        this.enhance = 1;
        this.basicattack = 0;
        this.strength = 0;
        this.agility = 0;
        this.intelligence = 0;
        this.endurance = 0;
        this.dirtyFlag = true;
        this.jewels = [];
        this.attackCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_3 = desc.get;
                desc.get = function () {
                    return getter_3.apply(this);
                };
                return desc;
            }
        };
        this.fightpowerCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_4 = desc.get;
                desc.get = function () {
                    return getter_4.apply(this);
                };
                return desc;
            }
        };
        this.basicattack = weapenConfig[type].basicattack;
        this.enhance = weapenConfig[type].enhance;
        this.strength = weapenConfig[type].strength;
        this.agility = weapenConfig[type].agility;
        this.intelligence = weapenConfig[type].intelligence;
        this.endurance = weapenConfig[type].endurance;
    }
    var d = __define,c=Weapen,p=c.prototype;
    d(p, "attack"
        ,function () {
            return (this.basicattack + this.strength * 1 + this.agility * 0.8 + this.intelligence * 0.6) * this.enhance;
        }
    );
    d(p, "FightPower"
        ,function () {
            var result = 0;
            for (var i = 0; i < this.jewels.length; i++) {
                result += this.jewels[i].FightPower;
            }
            result += this.attack + this.endurance * 0.4 * this.enhance;
            return result;
        }
    );
    __decorate([
        this.attackCache
    ], p, "attack", null);
    __decorate([
        this.fightpowerCache
    ], p, "FightPower", null);
    return Weapen;
}());
egret.registerClass(Weapen,'Weapen');
//# sourceMappingURL=Equip.js.map