import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from 'swiper/element/bundle'
import ListingItem from '../components/ListingItem'
register()


export default function Home() {
  const [offerListings, setOfferListings] = useState([])
  const [rentListings, setRentListings] = useState([])
  const [saleListings, setSaleListings] = useState([])

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4')
        const data = await res.json()
        setOfferListings(data)
        fetchRentListings()
      } catch (err) { console.log(err) }
    }

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4')
        const data = await res.json()
        setRentListings(data)
        fetchSaleListings()
      } catch (err) { console.log(err) }
    }

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4')
        const data = await res.json()
        setSaleListings(data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchOfferListings()
  }, [])

  return (
    <div className='px-1'>
      {/* top */}
      <div className='flex flex-col gap-6 py-12 px-3'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-slate-500'>perfect</span>
          <br />
          place with ease
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
          Zafar Estate is the best place to find your next perfect place to live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link to={'/search'} className='text-blue-800 text-xs sm:text-sm hover:underline font-bold '>
          Let's get started...</Link>
      </div>

      {/* swiper */}
      <swiper-container navigation loop='true'>
        {
          offerListings && offerListings.length > 0 &&
          offerListings.map((listing) => (
            <swiper-slide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`, backgroundSize: 'cover'
                }}
                className='h-[450px]'
                key={listing._id}
              ></div>
            </swiper-slide>
          ))
        }
      </swiper-container>

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {
          offerListings && offerListings.length > 0 && (
            <div className=''>
              <div className='py-4'>
                <h2 className='text-2xl font-bold text-slate-700'>Recent offers</h2>
                <Link className=' font-semibold text-blue-800 hover:underline' to={'/search?offer=true'}>
                  Show more offers
                </Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {
                  offerListings.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))
                }
              </div>
            </div>
          )
        }
        {
          rentListings && rentListings.length > 0 && (
            <div className=''>
              <div className='py-4'>
                <h2 className='text-2xl font-bold text-slate-700'>Recent places for rent </h2>
                <Link className=' font-semibold text-blue-800 hover:underline' to={'/search?type=rent'}>
                  Show more places for rent
                </Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {
                  rentListings.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))
                }
              </div>
            </div>
          )
        }
        {
          saleListings && saleListings.length > 0 && (
            <div className=''>
              <div className='py-4'>
                <h2 className='text-2xl font-bold text-slate-700'>Recent place for sale</h2>
                <Link className=' font-semibold text-blue-800 hover:underline' to={'/search?type=sale'}>
                  Show more places for sale
                </Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {
                  saleListings.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))
                }
              </div>
            </div>
          )
        }
      </div>



    </div>
  )
}
