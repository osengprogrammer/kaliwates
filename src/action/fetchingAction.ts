// Server Component
export async function fetchVoter() {
      
   
      const res = await fetch('https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users')
    
      const { posts } = await res.json();
      return posts;
   
  }

export const getDatabase = async () => {
    try {
      const res = await fetch(`${process.env.NEXTAUTH_URL}/api/database/`);
      const data = res.json()
      return data

    } catch (error) {
      return null;
    }
  };
  
  // e.g. in `pages/index.tsx`
