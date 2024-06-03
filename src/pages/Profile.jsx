import React, { useEffect } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import ProfileSideBar from '../components/Profile/ProfileSideBar'
import Dropzone from '../components/Profile/Dropzone'
import BasicInfo from '../components/Profile/BasicInfo'
import Password from '../components/Profile/Password'
import { useSelector } from 'react-redux'
import { getProfile, getToken } from '../features/auth/authSlice'

const Profile = () => {

  const token = useSelector(getToken)
  const user = useSelector(getProfile)
  
  return (
    <DashboardLayout>

      <div class="row my-5">

        <ProfileSideBar />

        <div class="col-lg-9 mt-lg-0 mt-4">

          <div class="card card-body" id="profile">
            <div class="row justify-content-center align-items-center">

              <Dropzone token={token} user={user} />

              <div class="col-sm-auto col-8 my-auto profile">
                <div class="h-100">
                  <h5 class="mb-1 font-weight-bolder">
                    {user?.name}
                  </h5>
                  <p class="mb-0 font-weight-bold text-sm">
                    {user?.email}
                  </p>
                </div>
              </div>

              <div class="col-sm-auto ms-sm-auto mt-sm-0 mt-3 d-flex">

              </div>
            </div>
          </div>

          <BasicInfo token={token} user={user} />

          <Password token={token} />

        </div>

      </div>

    </DashboardLayout>
  )
}

export default Profile