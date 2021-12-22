
import {LazyAchievement} from './model/lazy-achievement';
import {LazyAction} from './model/lazy-action';
import {LazyAetheryte} from './model/lazy-aetheryte';
import {LazyAirshipPart} from './model/lazy-airship-part';
import {LazyAirshipRank} from './model/lazy-airship-rank';
import {LazyAirshipVoyage} from './model/lazy-airship-voyage';
import {LazyBaseParam} from './model/lazy-base-param';
import {LazyClassJobsModifier} from './model/lazy-class-jobs-modifier';
import {LazyCollectablesPageData} from './model/lazy-collectables-page-data';
import {LazyCollectablesShopItemGroup} from './model/lazy-collectables-shop-item-group';
import {LazyCollectable} from './model/lazy-collectable';
import {LazyCraftAction} from './model/lazy-craft-action';
import {LazyCraftingLogPage} from './model/lazy-crafting-log-page';
import {LazyDiademTerritory} from './model/lazy-diadem-territory';
import {LazyEquipSlotCategory} from './model/lazy-equip-slot-category';
import {LazyEquipment} from './model/lazy-equipment';
import {LazyExVersion} from './model/lazy-ex-version';
import {LazyFate} from './model/lazy-fate';
import {LazyFishParameter} from './model/lazy-fish-parameter';
import {LazyFishingLogTrackerPageData} from './model/lazy-fishing-log-tracker-page-data';
import {LazyFishingLog} from './model/lazy-fishing-log';
import {LazyFishingSource} from './model/lazy-fishing-source';
import {LazyFishingSpot} from './model/lazy-fishing-spot';
import {LazyFood} from './model/lazy-food';
import {LazyFreeCompanyAction} from './model/lazy-free-company-action';
import {LazyGatheringBonus} from './model/lazy-gathering-bonus';
import {LazyGatheringItem} from './model/lazy-gathering-item';
import {LazyGatheringLogPage} from './model/lazy-gathering-log-page';
import {LazyGcName} from './model/lazy-gc-name';
import {LazyGilShopName} from './model/lazy-gil-shop-name';
import {LazyHunt} from './model/lazy-hunt';
import {LazyHwdInspection} from './model/lazy-hwd-inspection';
import {LazyHwdPhase} from './model/lazy-hwd-phase';
import {LazyInstance} from './model/lazy-instance';
import {LazyItemLevel} from './model/lazy-item-level';
import {LazyItemMainAttribute} from './model/lazy-item-main-attribute';
import {LazyItemMeldingData} from './model/lazy-item-melding-data';
import {LazyItemSeries} from './model/lazy-item-series';
import {LazyItemSetBonus} from './model/lazy-item-set-bonus';
import {LazyItemStat} from './model/lazy-item-stat';
import {LazyItem} from './model/lazy-item';
import {LazyJobAbbr} from './model/lazy-job-abbr';
import {LazyJobCategory} from './model/lazy-job-category';
import {LazyJobName} from './model/lazy-job-name';
import {LazyLevesPerItem} from './model/lazy-leves-per-item';
import {LazyLeve} from './model/lazy-leve';
import {LazyLogTrackerPageData} from './model/lazy-log-tracker-page-data';
import {LazyMap} from './model/lazy-map';
import {LazyMateria} from './model/lazy-materia';
import {LazyMedicine} from './model/lazy-medicine';
import {LazyMob} from './model/lazy-mob';
import {LazyMogstationSource} from './model/lazy-mogstation-source';
import {LazyMonster} from './model/lazy-monster';
import {LazyNode} from './model/lazy-node';
import {LazyNotebookDivisionCategory} from './model/lazy-notebook-division-category';
import {LazyNotebookDivision} from './model/lazy-notebook-division';
import {LazyNpc} from './model/lazy-npc';
import {LazyParamGrow} from './model/lazy-param-grow';
import {LazyPlace} from './model/lazy-place';
import {LazyQuest} from './model/lazy-quest';
import {LazyRace} from './model/lazy-race';
import {LazyRecipesIngredientLookup} from './model/lazy-recipes-ingredient-lookup';
import {LazyRecipesPerItem} from './model/lazy-recipes-per-item';
import {LazyRecipe} from './model/lazy-recipe';
import {LazyRetainerTask} from './model/lazy-retainer-task';
import {LazySeed} from './model/lazy-seed';
import {LazyShopName} from './model/lazy-shop-name';
import {LazyShopsByNpc} from './model/lazy-shops-by-npc';
import {LazyShop} from './model/lazy-shop';
import {LazySpearFishingLog} from './model/lazy-spear-fishing-log';
import {LazySpearfishingSource} from './model/lazy-spearfishing-source';
import {LazySpecialShopName} from './model/lazy-special-shop-name';
import {LazyStatus} from './model/lazy-status';
import {LazySubmarinePart} from './model/lazy-submarine-part';
import {LazySubmarineRank} from './model/lazy-submarine-rank';
import {LazySubmarineVoyage} from './model/lazy-submarine-voyage';
import {LazyTerritoryLayer} from './model/lazy-territory-layer';
import {LazyTitle} from './model/lazy-title';
import {LazyTopicSelectName} from './model/lazy-topic-select-name';
import {LazyTrait} from './model/lazy-trait';
import {LazyTreasure} from './model/lazy-treasure';
import {LazyTribe} from './model/lazy-tribe';
import {LazyTripleTriadRule} from './model/lazy-triple-triad-rule';
import {LazyVenture} from './model/lazy-venture';
import {LazyVoyageSource} from './model/lazy-voyage-source';
import {LazyWeather} from './model/lazy-weather';
import {LazyKoFate} from './model/lazy-ko-fate';
import {LazyKoGatheringBonus} from './model/lazy-ko-gathering-bonus';
import {LazyKoRecipe} from './model/lazy-ko-recipe';
import {LazyZhFate} from './model/lazy-zh-fate';
import {LazyZhGatheringBonus} from './model/lazy-zh-gathering-bonus';
import {LazyZhRecipe} from './model/lazy-zh-recipe';

export interface LazyData {
  achievements: Record<number, LazyAchievement>;
  actionCdGroups: Record<number, number[]>;
  actionIcons: Record<number, string>;
  actionTimeline: Record<number, string>;
  actions: Record<number, LazyAction>;
  aetherytes: Array<LazyAetheryte>;
  airshipParts: Record<number, LazyAirshipPart>;
  airshipRanks: Record<number, LazyAirshipRank>;
  airshipVoyages: Record<number, LazyAirshipVoyage>;
  baitItems: Array<number>;
  baseParams: Record<number, LazyBaseParam>;
  classJobsModifiers: Record<number, LazyClassJobsModifier>;
  collectablesPageData: Record<number, LazyCollectablesPageData[]>;
  collectablesShopItemGroup: Record<number, LazyCollectablesShopItemGroup>;
  collectablesShops: Record<number, number[]>;
  collectables: Record<number, LazyCollectable>;
  craftActions: Record<number, LazyCraftAction>;
  craftingLevels: Record<number, number>;
  craftingLogPages: Array<LazyCraftingLogPage[]>;
  craftingLog: Array<number[]>;
  desynth: Record<number, number[]>;
  diademTerritory: LazyDiademTerritory;
  dropSources: Record<number, number[]>;
  equipSlotCategories: Record<number, LazyEquipSlotCategory>;
  equipment: Record<number, LazyEquipment>;
  exVersions: Record<number, LazyExVersion>;
  extractableItems: Record<number, number>;
  fateSources: Record<number, number[]>;
  fates: Record<number, LazyFate>;
  fishParameter: Record<number, LazyFishParameter>;
  fishes: Array<number>;
  fishingLogTrackerPageData: Array<LazyFishingLogTrackerPageData>;
  fishingLog: Array<LazyFishingLog>;
  fishingSources: Record<number, LazyFishingSource[]>;
  fishingSpots: Array<LazyFishingSpot>;
  foods: Array<LazyFood>;
  freeCompanyActions: Record<number, LazyFreeCompanyAction>;
  gardeningSeedIds: Record<number, number>;
  gatheringBonuses: Record<number, LazyGatheringBonus>;
  gatheringItems: Record<number, LazyGatheringItem>;
  gatheringLevels: Record<number, number>;
  gatheringLogPages: Array<LazyGatheringLogPage[]>;
  gatheringPointToNodeId: Record<number, number>;
  gcNames: Record<number, LazyGcName>;
  gilShopNames: Record<number, LazyGilShopName>;
  hqFlags: Record<number, number>;
  hunts: Array<LazyHunt>;
  hwdInspections: Array<LazyHwdInspection>;
  hwdPhases: Record<number, LazyHwdPhase>;
  ilvls: Record<number, number>;
  instanceSources: Record<number, number[]>;
  instances: Record<number, LazyInstance>;
  itemEquipSlotCategory: Record<number, number>;
  itemIcons: Record<number, string>;
  itemLevel: Record<number, LazyItemLevel>;
  itemMainAttributes: Record<number, LazyItemMainAttribute[]>;
  itemMeldingData: Record<number, LazyItemMeldingData>;
  itemPatch: Record<number, number>;
  itemSeries: Record<number, LazyItemSeries>;
  itemSetBonuses: Record<number, LazyItemSetBonus>;
  itemStats: Record<number, LazyItemStat[]>;
  items: Record<number, LazyItem>;
  jobAbbr: Record<number, LazyJobAbbr>;
  jobCategories: Record<number, LazyJobCategory>;
  jobName: Record<number, LazyJobName>;
  jobSortIndex: Record<number, number>;
  legendaryFish: Record<number, number>;
  levesPerItem: Record<number, LazyLevesPerItem[]>;
  leves: Record<number, LazyLeve>;
  logTrackerPageData: Array<LazyLogTrackerPageData[]>;
  lootSources: Record<number, number[]>;
  maps: Record<number, LazyMap>;
  marketItems: Array<number>;
  materias: Array<LazyMateria>;
  medicines: Array<LazyMedicine>;
  mobs: Record<number, LazyMob>;
  mogstationSources: Record<number, LazyMogstationSource>;
  monsters: Record<number, LazyMonster>;
  nodes: Record<number, LazyNode>;
  notebookDivisionCategory: Record<number, LazyNotebookDivisionCategory>;
  notebookDivision: Record<number, LazyNotebookDivision>;
  npcs: Record<number, LazyNpc>;
  paramGrow: Record<number, LazyParamGrow>;
  patchContent: Record<number, object>;
  places: Record<number, LazyPlace>;
  quests: Record<number, LazyQuest>;
  races: Record<number, LazyRace>;
  rarities: Record<number, number>;
  recipesIngredientLookup: LazyRecipesIngredientLookup;
  recipesPerItem: Record<number, LazyRecipesPerItem[]>;
  recipes: Array<LazyRecipe>;
  reduction: Record<number, number[]>;
  retainerTasks: Array<LazyRetainerTask>;
  seeds: Record<number, LazySeed>;
  shopNames: Record<number, LazyShopName>;
  shopsByNpc: Record<number, LazyShopsByNpc[]>;
  shops: Array<LazyShop>;
  spearFishingFish: Array<number>;
  spearFishingLog: Array<LazySpearFishingLog>;
  spearfishingSources: Record<number, LazySpearfishingSource[]>;
  specialShopNames: Record<number, LazySpecialShopName>;
  stackSizes: Record<number, number>;
  statuses: Record<number, LazyStatus>;
  submarineParts: Record<number, LazySubmarinePart>;
  submarineRanks: Record<number, LazySubmarineRank>;
  submarineVoyages: Record<number, LazySubmarineVoyage>;
  territoryLayers: Record<number, LazyTerritoryLayer[]>;
  titles: Record<number, LazyTitle>;
  topicSelectNames: Record<number, LazyTopicSelectName>;
  tradeFlags: Record<number, number>;
  traits: Record<number, LazyTrait>;
  treasures: Array<LazyTreasure>;
  tribes: Record<number, LazyTribe>;
  tripleTriadRules: Record<number, LazyTripleTriadRule>;
  usedInQuests: Record<number, number[]>;
  ventureSources: Record<number, number[]>;
  ventures: Record<number, LazyVenture>;
  voyageSources: Record<number, LazyVoyageSource[]>;
  weathers: Record<number, LazyWeather>;
  koAchievementDescriptions: Record<number, {ko: string}>;
  koAchievements: Record<number, {ko: string}>;
  koActionCategories: Record<number, {ko: string}>;
  koActionDescriptions: Record<number, {ko: string}>;
  koActions: Record<number, {ko: string}>;
  koAirshipVoyages: Record<number, {ko: string}>;
  koBaseParams: Record<number, {ko: string}>;
  koBeastReputationRanks: Record<number, {ko: string}>;
  koContentTypes: Record<number, {ko: string}>;
  koCraftActions: Record<number, {ko: string}>;
  koCraftDescriptions: Record<number, {ko: string}>;
  koEventItems: Record<number, {ko: string}>;
  koExVersions: Record<number, {ko: string}>;
  koFates: Record<number, LazyKoFate>;
  koFreeCompanyActions: Record<number, {ko: string}>;
  koGatheringBonuses: Record<number, LazyKoGatheringBonus>;
  koGatheringTypes: Record<number, {ko: string}>;
  koInstanceDescriptions: Record<number, {ko: string}>;
  koInstances: Record<number, {ko: string}>;
  koItemDescriptions: Record<number, {ko: string}>;
  koItemKinds: Record<number, {ko: string}>;
  koItemSearchCategories: Record<number, {ko: string}>;
  koItemUiCategories: Record<number, {ko: string}>;
  koItems: Record<number, {ko: string}>;
  koJobAbbr: Record<number, {ko: string}>;
  koJobCategories: Record<number, {ko: string}>;
  koJobName: Record<number, {ko: string}>;
  koJournalGenre: Record<number, {ko: string}>;
  koLeveDescriptions: Record<number, {ko: string}>;
  koLeves: Record<number, {ko: string}>;
  koMaps: Record<number, {ko: string}>;
  koMobs: Record<number, {ko: string}>;
  koNotebookDivisionCategory: Record<number, {ko: string}>;
  koNotebookDivision: Record<number, {ko: string}>;
  koNpcTitles: Record<number, {ko: string}>;
  koNpcs: Record<number, {ko: string}>;
  koPatchs: Record<number, {ko: string}>;
  koPlaces: Record<number, {ko: string}>;
  koQuestDescriptions: Record<number, {ko: string}>;
  koQuests: Record<number, {ko: string}>;
  koRaces: Record<number, {ko: string}>;
  koRecipes: Array<LazyKoRecipe>;
  koShops: Record<number, {ko: string}>;
  koStatusDescriptions: Record<number, {ko: string}>;
  koStatuses: Record<number, {ko: string}>;
  koSubmarineVoyages: Record<number, {ko: string}>;
  koTraitDescriptions: Record<number, {ko: string}>;
  koTraits: Record<number, {ko: string}>;
  koTribes: Record<number, {ko: string}>;
  koTripleTriadRuleDescriptions: Record<number, {ko: string}>;
  koTripleTriadRules: Record<number, {ko: string}>;
  koVentures: Record<number, {ko: string}>;
  koWeathers: Record<number, {ko: string}>;
  koWorld: Record<number, {ko: string}>;
  zhAchievementDescriptions: Record<number, {zh: string}>;
  zhAchievements: Record<number, {zh: string}>;
  zhActionCategories: Record<number, {zh: string}>;
  zhActionDescriptions: Record<number, {zh: string}>;
  zhActions: Record<number, {zh: string}>;
  zhAirshipVoyages: Record<number, {zh: string}>;
  zhBaseParams: Record<number, {zh: string}>;
  zhBeastReputationRanks: Record<number, {zh: string}>;
  zhContentTypes: Record<number, {zh: string}>;
  zhCraftActions: Record<number, {zh: string}>;
  zhCraftDescriptions: Record<number, {zh: string}>;
  zhEventItems: Record<number, {zh: string}>;
  zhExVersions: Record<number, {zh: string}>;
  zhFates: Record<number, LazyZhFate>;
  zhFreeCompanyActions: Record<number, {zh: string}>;
  zhGatheringBonuses: Record<number, LazyZhGatheringBonus>;
  zhGatheringTypes: Record<number, {zh: string}>;
  zhInstanceDescriptions: Record<number, {zh: string}>;
  zhInstances: Record<number, {zh: string}>;
  zhItemDescriptions: Record<number, {zh: string}>;
  zhItemKinds: Record<number, {zh: string}>;
  zhItemSearchCategories: Record<number, {zh: string}>;
  zhItemUiCategories: Record<number, {zh: string}>;
  zhItems: Record<number, {zh: string}>;
  zhJobAbbr: Record<number, {zh: string}>;
  zhJobCategories: Record<number, {zh: string}>;
  zhJobName: Record<number, {zh: string}>;
  zhJournalGenre: Record<number, {zh: string}>;
  zhLeveDescriptions: Record<number, {zh: string}>;
  zhLeves: Record<number, {zh: string}>;
  zhMaps: Record<number, {zh: string}>;
  zhMobs: Record<number, {zh: string}>;
  zhNotebookDivisionCategory: Record<number, {zh: string}>;
  zhNotebookDivision: Record<number, {zh: string}>;
  zhNpcTitles: Record<number, {zh: string}>;
  zhNpcs: Record<number, {zh: string}>;
  zhPatchs: Record<number, {zh: string}>;
  zhPlaces: Record<number, {zh: string}>;
  zhQuestDescriptions: Record<number, {zh: string}>;
  zhQuests: Record<number, {zh: string}>;
  zhRaces: Record<number, {zh: string}>;
  zhRecipes: Array<LazyZhRecipe>;
  zhShops: Record<number, {zh: string}>;
  zhStatusDescriptions: Record<number, {zh: string}>;
  zhStatuses: Record<number, {zh: string}>;
  zhSubmarineVoyages: Record<number, {zh: string}>;
  zhTraitDescriptions: Record<number, {zh: string}>;
  zhTraits: Record<number, {zh: string}>;
  zhTribes: Record<number, {zh: string}>;
  zhTripleTriadRuleDescriptions: Record<number, {zh: string}>;
  zhTripleTriadRules: Record<number, {zh: string}>;
  zhVentures: Record<number, {zh: string}>;
  zhWeathers: Record<number, {zh: string}>;
}