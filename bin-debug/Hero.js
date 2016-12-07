var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// TypeScript file
//每个用户都有英雄，每个英雄都有装备，每个装备都有宝石,根据不同道具、等级等属性可以计算出战斗力，生命值等数值。
var User = (function () {
    function User() {
        var _this = this;
        this.heros = [];
        this.herointeam = [];
        this.dirtyFlag = true;
        this.herosinTeamCache = function (target, propertyName, desc) {
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
    }
    var d = __define,c=User,p=c.prototype;
    p.getheroInTeam = function () {
        var heroInTeam = [];
        for (var i = 0; i < this.heros.length; i++) {
            if (this.heros[i].isInTeam) {
                heroInTeam.push(this.heros[i]);
            }
        }
        return heroInTeam;
    };
    d(p, "FightPower"
        ,function () {
            var result = 0;
            var heros = this.getheroInTeam();
            this.heros.forEach(function (e) { return result += e.FightPower; });
            result = parseInt("result/150");
            return result;
        }
    );
    __decorate([
        this.herosinTeamCache
    ], p, "getheroInTeam", null);
    __decorate([
        this.fightpowerCache
    ], p, "FightPower", null);
    return User;
}());
egret.registerClass(User,'User');
var Hero = (function () {
    function Hero(type) {
        var _this = this;
        this.level = 1;
        this.isInTeam = false;
        this.basicAttFactor = 1;
        this.strFactor = 1;
        this.agiFactor = 1;
        this.intFactor = 1;
        this.endFactor = 1;
        this.dirtyFlag = true;
        this.equipments = [];
        this.basicattackCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_3 = desc.get;
                desc.get = function () {
                    return getter_3.apply(this);
                };
                return desc;
            }
        };
        this.maxhpCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_4 = desc.get;
                desc.get = function () {
                    return getter_4.apply(this);
                };
                return desc;
            }
        };
        this.maxmpCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_5 = desc.get;
                desc.get = function () {
                    return getter_5.apply(this);
                };
                return desc;
            }
        };
        this.defenceCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_6 = desc.get;
                desc.get = function () {
                    return getter_6.apply(this);
                };
                return desc;
            }
        };
        this.strengthCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_7 = desc.get;
                desc.get = function () {
                    return getter_7.apply(this);
                };
                return desc;
            }
        };
        this.intelligenceCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_8 = desc.get;
                desc.get = function () {
                    return getter_8.apply(this);
                };
                return desc;
            }
        };
        this.agilityCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_9 = desc.get;
                desc.get = function () {
                    return getter_9.apply(this);
                };
                return desc;
            }
        };
        this.enduranceCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_10 = desc.get;
                desc.get = function () {
                    return getter_10.apply(this);
                };
                return desc;
            }
        };
        this.attackCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_11 = desc.get;
                desc.get = function () {
                    return getter_11.apply(this);
                };
                return desc;
            }
        };
        this.fightpowerCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_12 = desc.get;
                desc.get = function () {
                    return getter_12.apply(this);
                };
                return desc;
            }
        };
        this.basicAttFactor = heroConfig[type].basicattack;
        this.strFactor = heroConfig[type].strength;
        this.agiFactor = heroConfig[type].agility;
        this.intFactor = heroConfig[type].intelligence;
        this.endFactor = heroConfig[type].endurance;
    }
    var d = __define,c=Hero,p=c.prototype;
    p.setInTeam = function (status) {
        this.isInTeam = status;
        this.dirtyFlag = true;
    };
    d(p, "basicattack"
        ,function () {
            return this.level * 3 * this.basicAttFactor;
        }
    );
    d(p, "maxhp"
        ,function () {
            return this.level * 2 * this.endurance;
        }
    );
    d(p, "maxmp"
        ,function () {
            return this.level * this.intelligence;
        }
    );
    d(p, "defence"
        ,function () {
            return this.level * this.endurance * 3;
        }
    );
    d(p, "strength"
        ,function () {
            return this.level * this.strFactor * 2;
        }
    );
    d(p, "intelligence"
        ,function () {
            return this.level * this.intFactor * 2;
        }
    );
    d(p, "agility"
        ,function () {
            return this.level * this.agiFactor * 2;
        }
    );
    d(p, "endurance"
        ,function () {
            return this.level * this.endFactor * 5;
        }
    );
    d(p, "attack"
        ,function () {
            return this.basicattack + this.strength;
        }
    );
    d(p, "FightPower"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (e) { return result += e.FightPower; });
            result += this.attack * 1.5 + this.defence + (this.maxhp + this.maxmp * 0.5) * 0.5;
            return result;
        }
    );
    __decorate([
        this.basicattackCache
    ], p, "basicattack", null);
    __decorate([
        this.maxhpCache
    ], p, "maxhp", null);
    __decorate([
        this.maxmpCache
    ], p, "maxmp", null);
    __decorate([
        this.defenceCacheCache
    ], p, "defence", null);
    __decorate([
        this.strengthCache
    ], p, "strength", null);
    __decorate([
        this.intelligenceCache
    ], p, "intelligence", null);
    __decorate([
        this.agilityCache
    ], p, "agility", null);
    __decorate([
        this.enduranceCache
    ], p, "endurance", null);
    __decorate([
        this.attackCache
    ], p, "attack", null);
    __decorate([
        this.fightpowerCache
    ], p, "FightPower", null);
    return Hero;
}());
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map