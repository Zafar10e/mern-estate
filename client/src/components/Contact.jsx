import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact({ listing }) {
 const [landlord, setLandlord] = useState(null)
 const [message, setMessage] = useState('')

 const onChange = e => {
  setMessage(e.target.value)
 }

 useEffect(() => {
  const fetchLandLord = async () => {
   try {
    const res = await fetch(`/api/user/${listing.userRef}`)
    const data = await res.json()
    setLandlord(data)
   } catch (err) {
    console.log(err)
   }
  }
  fetchLandLord()
 }, [])

 return (
  <>
   {landlord && (
    <div className='flex flex-col gap-4'>
     <p>Contact <span className='font-semibold'>{landlord.username}</span> for <span className='font-semibold'>{listing.name.toLowerCase()}</span>
     </p>
     <textarea name='message' id='message' rows='2' value={message} onChange={onChange} placeholder='Enter your message here...' className='p-3 rounded-lg w-full border'>
     </textarea>

     <Link
      to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
      className='bg-slate-700 p-3 rounded-lg text-white uppercase text-center hover:opacity-95'
     >
      Send Messgae
     </Link>
    </div>
   )}
  </>
 )
}
