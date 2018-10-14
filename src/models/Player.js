import { Model } from 'vue-mc'

export default class Player extends Model {
  defaults () {
    return {
      id: null,
      season: null,
      week: null,
      esbid: null,
      gsisPlayerId: null,
      name: '',
      teamAbbr: '',
      returnYds: null,
      returnTds: null,
      apiSeasonPts: null,
      apiSeasonProjectedPts: null,
      apiWeekPts: null,
      apiWeekProjectedPts: null,
      fantasyPoints: null,
      valueBaseDraftScore: null,
      position: ''
    }
  }

  mutations () {
    return {
      id: (id) => Number(id) || null,
      season: (season) => Number(season) || null,
      week: (week) => Number(week) || null,
      esbid: String,
      gsisPlayerId: String,
      name: String,
      teamAbbr: String,
      returnYds: (returnYds) => Number(returnYds) || null,
      returnTds: (returnTds) => Number(returnTds) || null,
      apiSeasonPts: (apiSeasonPts) => Number(apiSeasonPts) || null,
      apiSeasonProjectedPts: (apiSeasonProjectedPts) => Number(apiSeasonProjectedPts) || null,
      apiWeekPts: (apiWeekPts) => Number(apiWeekPts) || null,
      apiWeekProjectedPts: (apiWeekProjectedPts) => Number(apiWeekProjectedPts) || null,
      fantasyPoints: (fantasyPoints) => Number(fantasyPoints) || null,
      valueBaseDraftScore: (valueBaseDraftScore) => Number(valueBaseDraftScore) || null,
      position: String
    }
  }

  options () {
    return {
      patch: true
    }
  }
}
