export default class Player {
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
}
