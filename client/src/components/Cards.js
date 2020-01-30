import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


import StaffCard from './tables/StaffCard'


import React, { Component } from 'react'

export default function Cards(props) {


    console.log(props)

    const staffTable = props.staffList.map((staff, index) => {
        if (staff.role === "Branch Manager" && props.filterBranchManager) {
            console.log('loans filtered out')
            return false

        } else if (staff.role === "Loans Officer" && props.filterLoansOfficer) {
            return false

        }

        else if (staff.role === "Investments" && props.filterInvestments) {
            return false

        }

        else if (staff.role === "Member Care" && props.filterMemberCare) {
            return false

        } else {

            return (
                <StaffCard key={index}
                    staffData={staff}
                />
            )
        }
    })



    return (
        <div className="cards">
            <div className="cards__box">

                {staffTable}

            </div>
        </div>

    )
}


