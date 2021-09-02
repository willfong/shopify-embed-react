import axios from 'axios'

export interface Response {
  success?: boolean
  clientId?: number
  onboardingIncomplete?: boolean
  active?: boolean
  activationRequirements?: any[]
  stats?: {
    referralRate: number
  }
}

const RC_API_HOST =
  process.env.NODE_ENV === 'production'
    ? 'https://api.referralcandy.com/v1'
    : 'https://api.dev.anafore.com/staging'

export const getClient = (sessionToken: string): Promise<Response> => {
  return axios
    .get(RC_API_HOST + '/shopify/client', {
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
