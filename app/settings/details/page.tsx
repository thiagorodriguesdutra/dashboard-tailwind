'use client'

import Button from '@/components/ui/button'
import Separator from '@/components/ui/separator'

import InputName from './components/nameInput'
import InputEmail from './components/emailInput'
import UploadForm from './components/uploadForm'
import RoleInput from './components/roleInput'
import CountryInput from './components/countryInput'
import TimeZoneInput from './components/timeZoneInput'
import BioInput from './components/bioInput'
import PortifolioForm from './components/portifolioForm'

export default function Details() {
  return (
    <div className="">
      <form>
        <div className="my-5 flex items-center justify-between">
          <div className="w-2/5">
            <h2 className="text-lg font-semibold">Personal Info</h2>
            <div className="text-xs text-zinc-500">
              Update your photo and personal details here.
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              name="Cancel"
              color="default"
              onClick={(e) => e.preventDefault()}
            />
            <Button
              name="Save"
              color="primary"
              onClick={(e) => e.preventDefault()}
            />
          </div>
        </div>
        <Separator />
        <InputName />
        <Separator />
        <InputEmail />
        <Separator />
        <UploadForm />
        <Separator />
        <RoleInput />
        <Separator />
        <CountryInput />
        <Separator />
        <TimeZoneInput />
        <Separator />
        <BioInput />
        <Separator />
        <PortifolioForm />
      </form>
    </div>
  )
}
