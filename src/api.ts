export interface ClientResponse {
  clientId: number,
  success?: boolean,
  onboardingIncomplete?: boolean,
  active?: boolean,
  activationRequirements?: any[],
  stats?: {
    referralRate: number
  }
}

export const getMockClient = (sessionToken: string): Promise<ClientResponse> => {
  return Promise.resolve({
    clientId: 1,
    success: true,
    active: true,
    activationRequirements: [],
    stats: {
      referralRate: 0
    }
  })
}
