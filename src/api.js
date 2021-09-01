export const mockGetClient = (sessionToken) => {
  return Promise.resolve({
    client_id: 1,
    success: true,
    active: true,
    activation_requirements: [],
    stats: {
      referral_rate: 0
    }
  })
}