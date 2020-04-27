import React, { useState } from 'react';

const MemberCard = props => {

    return (
        <div className="person">
            <h1>{props.memberData.name}</h1>
            <h4>{props.memberData.email}</h4>
            <h4>{props.memberData.role}</h4>
        </div>
    );
}

export default MemberCard;