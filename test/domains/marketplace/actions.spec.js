import { isAsyncAction, noop } from '~/util'
import { actions, actionTypes } from 'domains/marketplace'

jest.mock('core/services/marketplace')

describe('domains/marketplace/actions', () => {
  describe('marketplace/GET_MARKETPLACES action', () => {
    it('Should return a standard async action', () => {
      const actual = isAsyncAction(actions.getMarketplaces())

      expect(actual).toBeTruthy()
    })

    it('Should return action payload', () => {
      const actual = actions.getMarketplaces()
      const expected = {
        promise: new Promise(noop),
        type: actionTypes.GET_MARKETPLACES,
      }

      expect(actual).toEqual(expected)
    })
  })
})
