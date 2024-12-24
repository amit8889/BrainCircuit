import React from 'react'
import HomeLayout from "../../component/HomeLayout/HomeLayout"
import ChannelSearch from "../../component/ChannelSearch/ChannelSearch"
import GroupCard from "../../component/GroupCard/GroupCard"
const Homepage = () => {
  return (
    <>
        <HomeLayout/>
        <ChannelSearch/>
        <div className=" md:px-10 xl:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xl:mx-8">

        {
          
          Array(9).fill(0).map((item, index) => (
            <GroupCard key={index} />
            ))
          
        }
          </div>
    </>
  )
}

export default Homepage