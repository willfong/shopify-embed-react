import axios from 'axios'

const RC_API_ENDPOINT = 'https://api.dev.anafore.com/staging'

export interface Response {
  success?: boolean,
  clientId?: number
  onboardingIncomplete?: boolean
  active?: boolean
  activationRequirements?: any[]
  stats?: {
    referralRate: number
  }
}

export const getClient = (sessionToken: string): Promise<Response> => {
  return axios
    .get(RC_API_ENDPOINT + '/shopify/client', {
      headers: {
        authorization: `Bearer ${sessionToken}`
      }
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error.toJSON())
      return {
        success: false
      }
    })
}
