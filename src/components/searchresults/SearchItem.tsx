import React from 'react';

//material ui
import Card from '@material-ui/core/Card';

//components under search item
import Linearbar from './resultcomponents/Linearbar';
import Images from './resultcomponents/Images';
import OrganizationInfo from './resultcomponents/OrganizationInfo';
import NotMember from './resultcomponents/NotMember';

//types
import { CauseDataType } from '../../types'


export interface OrganizationType {
    organizationData : CauseDataType
}

//Organization card 
const SearchItem:React.FC<OrganizationType> = (props: OrganizationType) => {

    const { organizationData }= props

    return ( <a target="/blank" href={organizationData.website}>
            <Card  className="organization">
      
            {(organizationData.publishedAt !== null && organizationData.hasPassedPreliminary &&
                 <Images image={ organizationData.images.data[0].files.data[0]} logoimage={ organizationData.logo.data.files.data[0] }/>
            )}

             <OrganizationInfo data={organizationData}/>

             {((!organizationData.hasPassedPreliminary || organizationData.publishedAt === null) &&
                 <NotMember/>
             )}

             <Linearbar stage={!organizationData.hasPassedPreliminary ? 33.33 : (organizationData.publishedAt !== null ? 100 : 66)} />

    </Card>
    </a>
    )
}
  

  export default SearchItem;