// Server Component
export async function fetchVoter() {
      
   
      const res = await fetch('https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users')
      const data = await res.json()
      return data
  }

  // e.g. in `pages/index.tsx`
