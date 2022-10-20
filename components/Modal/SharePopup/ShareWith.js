import React from 'react'

function ShareWith() {
  return (
    <label className="block">
    <div className="mb-5">
      <span className="block font-inter font-medium text-base text-title mb-[10px] text-left dark:text-[#fff9]">Share With Social Media</span>
      <div className="w-[50%] flex justify-between mt-2">
        <img src="/assets/popup/fb.svg" alt="" />
        <img src="/assets/popup/twitter.svg" alt="" />
        <img src="/assets/popup/linkedin.svg" alt="" />
        <img src="/assets/popup/pinterest.svg" alt="" />
      </div>
    </div>
  </label>
  )
}

export default ShareWith