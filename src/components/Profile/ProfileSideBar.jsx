import React from 'react'

const ProfileSideBar = () => {
  return (
    <div class="col-lg-3">
    <div class="card position-sticky top-1">
        <ul class="nav flex-column bg-white border-radius-lg p-3">
            <li class="nav-item">
                <a class="nav-link text-body" data-scroll="" href="#profile">
                    <div class="icon me-2">

                    </div>
                    <span class="text-sm">Profile</span>
                </a>
            </li>
            <li class="nav-item pt-2">
                <a class="nav-link text-body" data-scroll="" href="#basic-info">
                    <div class="icon me-2">

                    </div>
                    <span class="text-sm">Basic Info</span>
                </a>
            </li>
            <li class="nav-item pt-2">
                <a class="nav-link text-body" data-scroll="" href="#password">
                    <div class="icon me-2">

                    </div>
                    <span class="text-sm">Change Password</span>
                </a>
            </li>

            {/* <li class="nav-item pt-2">
                <a class="nav-link text-body" data-scroll="" href="#referral">
                    <div class="icon me-2">

                    </div>
                    <span class="text-sm">Referral</span>
                </a>
            </li> */}

        </ul>
    </div>
</div>
  )
}

export default ProfileSideBar