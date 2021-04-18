import React from 'react';

//material ui
import Card from '@material-ui/core/Card';
import AutorenewIcon from '@material-ui/icons/Autorenew';

//card which does not come under stage 3
const NotMember = () => {

    return ( <Card className="not-member" >
              <div className="meta"><span style={{ color: '#f50057' }}><AutorenewIcon/></span><p>Membership pending</p></div>
              <p>This organisation has no published profile</p>
            </Card>
  )}

  export default NotMember;
