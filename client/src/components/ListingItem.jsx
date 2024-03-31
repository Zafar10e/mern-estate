import React from 'react'
import { Link } from 'react-router-dom'
import { MdLocationOn } from 'react-icons/md'

export default function ListingItem({ listing }) {
 return (
  <div className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow w-full sm:w-[300px] mb-4'>
   <Link to={`listing/${listing._id}`}>
    <img
     src={listing.imageUrls[0]}
     alt='listing cover'
     className='w-full h-[200px] object-cover hover:scale-105 transition-scale duration-300'
    />
    <div className='p-3 flex flex-col w-full gap-2'>
     <p className='text-xl font-bold text-slate-600 truncate'>
      {listing.name}
     </p>
     <div className='w-full flex items-center gap-1'>
      <MdLocationOn className='text-green-700 w-4 h-4' />
      <p className='font-semibold text-slate-600 truncate'>
       {listing.address}
      </p>
     </div>
     <p className='text-sm text-gray-600 line-clamp-2'>
      {listing.description}
     </p>
     <p className='text-gray-600 font-semibold mt-2'>
      ${listing.offer ? listing.discountPrice?.toLocaleString() : listing.regularPrice.toLocaleString()}
      <span className='text-sm'>
       {listing.type === 'rent' && ' /month'}
      </span>
     </p>
     <div className='font-bold text-slate-600 flex gap-4'>
      <div>
       {listing.bedrooms} {listing.bedrooms > 1 ? 'beds' : 'bed'}
      </div>
      <div>
       {listing.bathrooms} {listing.bathrooms > 1 ? 'baths' : 'bath'}
      </div>
     </div>
    </div>
   </Link>
  </div>
 )
}
